//! `PyClass` and related traits.
use crate::class::impl_::PyClassImpl;
use crate::class::methods::PyMethodDefType;
use crate::pyclass_slots::{PyClassDict, PyClassWeakRef};
use crate::type_object::PyLayout;
use crate::{ffi, PyCell, PyErr, PyNativeType, PyResult, PyTypeInfo, Python};
use std::convert::TryInto;
use std::ffi::CString;
use std::os::raw::{c_char, c_int, c_uint, c_void};
use std::{mem, ptr};

#[inline]
unsafe fn get_type_alloc(tp: *mut ffi::PyTypeObject) -> Option<ffi::allocfunc> {
    mem::transmute(ffi::PyType_GetSlot(tp, ffi::Py_tp_alloc))
}

#[inline]
pub(crate) unsafe fn get_type_free(tp: *mut ffi::PyTypeObject) -> Option<ffi::freefunc> {
    mem::transmute(ffi::PyType_GetSlot(tp, ffi::Py_tp_free))
}

/// Workaround for Python issue 35810; no longer necessary in Python 3.8
#[inline]
#[cfg(not(Py_3_8))]
pub(crate) unsafe fn bpo_35810_workaround(_py: Python, ty: *mut ffi::PyTypeObject) {
    #[cfg(Py_LIMITED_API)]
    {
        // Must check version at runtime for abi3 wheels - they could run against a higher version
        // than the build config suggests.
        use crate::once_cell::GILOnceCell;
        static IS_PYTHON_3_8: GILOnceCell<bool> = GILOnceCell::new();

        if *IS_PYTHON_3_8.get_or_init(_py, || _py.version_info() >= (3, 8)) {
            // No fix needed - the wheel is running on a sufficiently new interpreter.
            return;
        }
    }

    ffi::Py_INCREF(ty as *mut ffi::PyObject);
}

#[inline]
pub(crate) unsafe fn default_new<T: PyTypeInfo + PyClassImpl>(
    py: Python,
    subtype: *mut ffi::PyTypeObject,
) -> *mut ffi::PyObject {
    // if the class derives native types(e.g., PyDict), call special new
    if T::IS_SUBCLASS && T::BaseLayout::IS_NATIVE_TYPE {
        #[cfg(not(Py_LIMITED_API))]
        {
            let base_tp = T::BaseType::type_object_raw(py);
            if let Some(base_new) = (*base_tp).tp_new {
                return base_new(subtype, ptr::null_mut(), ptr::null_mut());
            }
        }
        #[cfg(Py_LIMITED_API)]
        {
            // Silence unused parameter warning.
            let _ = py;
            unreachable!("Subclassing native types isn't support in limited API mode");
        }
    }

    let alloc = get_type_alloc(subtype).unwrap_or(ffi::PyType_GenericAlloc);

    #[cfg(not(Py_3_8))]
    bpo_35810_workaround(py, subtype);

    alloc(subtype, 0)
}

/// This trait enables custom `tp_new`/`tp_dealloc` implementations for `T: PyClass`.
pub trait PyClassAlloc: PyTypeInfo + PyClassImpl {
    /// Allocate the actual field for `#[pyclass]`.
    ///
    /// # Safety
    /// This function must return a valid pointer to the Python heap.
    unsafe fn new(py: Python, subtype: *mut ffi::PyTypeObject) -> *mut Self::Layout {
        default_new::<Self>(py, subtype) as _
    }

    /// Deallocate `#[pyclass]` on the Python heap.
    ///
    /// # Safety
    /// `self_` must be a valid pointer to the Python heap.
    #[allow(clippy::clippy::collapsible_if)] // for if cfg!
    unsafe fn dealloc(py: Python, self_: *mut Self::Layout) {
        (*self_).py_drop(py);
        let obj = self_ as *mut ffi::PyObject;

        let ty = ffi::Py_TYPE(obj);
        let free = get_type_free(ty).unwrap_or_else(|| tp_free_fallback(ty));
        free(obj as *mut c_void);

        if cfg!(Py_3_8) {
            if ffi::PyType_HasFeature(ty, ffi::Py_TPFLAGS_HEAPTYPE) != 0 {
                ffi::Py_DECREF(ty as *mut ffi::PyObject);
            }
        }
    }
}

// Default new implementation

unsafe extern "C" fn fallback_new(
    _subtype: *mut ffi::PyTypeObject,
    _args: *mut ffi::PyObject,
    _kwds: *mut ffi::PyObject,
) -> *mut ffi::PyObject {
    crate::callback_body!(py, {
        Err::<(), _>(crate::exceptions::PyTypeError::new_err(
            "No constructor defined",
        ))
    })
}

unsafe extern "C" fn tp_dealloc<T>(obj: *mut ffi::PyObject)
where
    T: PyClassAlloc,
{
    let pool = crate::GILPool::new();
    let py = pool.python();
    <T as PyClassAlloc>::dealloc(py, (obj as *mut T::Layout) as _)
}

pub(crate) unsafe fn tp_free_fallback(ty: *mut ffi::PyTypeObject) -> ffi::freefunc {
    if ffi::PyType_IS_GC(ty) != 0 {
        ffi::PyObject_GC_Del
    } else {
        ffi::PyObject_Free
    }
}

/// If `PyClass` is implemented for `T`, then we can use `T` in the Python world,
/// via `PyCell`.
///
/// The `#[pyclass]` attribute automatically implements this trait for your Rust struct,
/// so you don't have to use this trait directly.
pub trait PyClass:
    PyTypeInfo<Layout = PyCell<Self>, AsRefTarget = PyCell<Self>> + Sized + PyClassAlloc + PyClassImpl
{
    /// Specify this class has `#[pyclass(dict)]` or not.
    type Dict: PyClassDict;
    /// Specify this class has `#[pyclass(weakref)]` or not.
    type WeakRef: PyClassWeakRef;
    /// The closest native ancestor. This is `PyAny` by default, and when you declare
    /// `#[pyclass(extends=PyDict)]`, it's `PyDict`.
    type BaseNativeType: PyTypeInfo + PyNativeType;
}

/// For collecting slot items.
#[derive(Default)]
struct TypeSlots(Vec<ffi::PyType_Slot>);

impl TypeSlots {
    fn push(&mut self, slot: c_int, pfunc: *mut c_void) {
        self.0.push(ffi::PyType_Slot { slot, pfunc });
    }
}

fn tp_doc<T: PyClass>() -> PyResult<Option<*mut c_void>> {
    Ok(match T::DOC {
        "\0" => None,
        s if s.as_bytes().ends_with(b"\0") => Some(s.as_ptr() as _),
        // If the description is not null-terminated, create CString and leak it
        s => Some(CString::new(s)?.into_raw() as _),
    })
}

fn get_type_name<T: PyTypeInfo>(module_name: Option<&str>) -> PyResult<*mut c_char> {
    Ok(match module_name {
        Some(module_name) => CString::new(format!("{}.{}", module_name, T::NAME))?.into_raw(),
        None => CString::new(format!("builtins.{}", T::NAME))?.into_raw(),
    })
}

fn into_raw<T>(vec: Vec<T>) -> *mut c_void {
    Box::into_raw(vec.into_boxed_slice()) as _
}

pub(crate) fn create_type_object<T>(
    py: Python,
    module_name: Option<&str>,
) -> PyResult<*mut ffi::PyTypeObject>
where
    T: PyClass,
{
    let mut slots = TypeSlots::default();

    slots.push(ffi::Py_tp_base, T::BaseType::type_object_raw(py) as _);
    slots.push(ffi::Py_tp_dealloc, tp_dealloc::<T> as _);
    if let Some(doc) = tp_doc::<T>()? {
        slots.push(ffi::Py_tp_doc, doc);
    }

    slots.push(ffi::Py_tp_new, T::get_new().unwrap_or(fallback_new) as _);
    if let Some(call_meth) = T::get_call() {
        slots.push(ffi::Py_tp_call, call_meth as _);
    }

    if cfg!(Py_3_9) {
        let members = py_class_members::<T>();
        if !members.is_empty() {
            slots.push(ffi::Py_tp_members, into_raw(members))
        }
    }

    // normal methods
    let methods = py_class_method_defs::<T>();
    if !methods.is_empty() {
        slots.push(ffi::Py_tp_methods, into_raw(methods));
    }

    // properties
    let props = py_class_properties::<T>();
    if !props.is_empty() {
        slots.push(ffi::Py_tp_getset, into_raw(props));
    }

    // protocol methods
    let mut has_gc_methods = false;
    T::for_each_proto_slot(|slot| {
        has_gc_methods |= slot.slot == ffi::Py_tp_clear;
        has_gc_methods |= slot.slot == ffi::Py_tp_traverse;
        slots.0.push(*slot);
    });

    slots.push(0, ptr::null_mut());
    let mut spec = ffi::PyType_Spec {
        name: get_type_name::<T>(module_name)?,
        basicsize: std::mem::size_of::<T::Layout>() as c_int,
        itemsize: 0,
        flags: py_class_flags::<T>(has_gc_methods),
        slots: slots.0.as_mut_ptr(),
    };

    let type_object = unsafe { ffi::PyType_FromSpec(&mut spec) };
    if type_object.is_null() {
        Err(PyErr::fetch(py))
    } else {
        tp_init_additional::<T>(type_object as _);
        Ok(type_object as _)
    }
}

/// Additional type initializations necessary before Python 3.10
#[cfg(all(not(Py_LIMITED_API), not(Py_3_10)))]
fn tp_init_additional<T: PyClass>(type_object: *mut ffi::PyTypeObject) {
    // Just patch the type objects for the things there's no
    // PyType_FromSpec API for... there's no reason this should work,
    // except for that it does and we have tests.

    // Running this causes PyPy to segfault.
    #[cfg(all(not(PyPy), not(Py_3_10)))]
    {
        if T::DOC != "\0" {
            unsafe {
                // Until CPython 3.10, tp_doc was treated specially for
                // heap-types, and it removed the text_signature value from it.
                // We go in after the fact and replace tp_doc with something
                // that _does_ include the text_signature value!
                ffi::PyObject_Free((*type_object).tp_doc as _);
                let data = ffi::PyObject_Malloc(T::DOC.len());
                data.copy_from(T::DOC.as_ptr() as _, T::DOC.len());
                (*type_object).tp_doc = data as _;
            }
        }
    }

    // Setting buffer protocols via slots doesn't work until Python 3.9, so on older versions we
    // must manually fixup the type object.
    if cfg!(not(Py_3_9)) {
        if let Some(buffer) = T::get_buffer() {
            unsafe {
                (*(*type_object).tp_as_buffer).bf_getbuffer = buffer.bf_getbuffer;
                (*(*type_object).tp_as_buffer).bf_releasebuffer = buffer.bf_releasebuffer;
            }
        }
    }

    // Setting tp_dictoffset and tp_weaklistoffset via slots doesn't work until Python 3.9, so on
    // older versions again we must fixup the type object.
    if cfg!(not(Py_3_9)) {
        // __dict__ support
        if let Some(dict_offset) = PyCell::<T>::dict_offset() {
            unsafe {
                (*type_object).tp_dictoffset = dict_offset as ffi::Py_ssize_t;
            }
        }
        // weakref support
        if let Some(weakref_offset) = PyCell::<T>::weakref_offset() {
            unsafe {
                (*type_object).tp_weaklistoffset = weakref_offset as ffi::Py_ssize_t;
            }
        }
    }
}

#[cfg(any(Py_LIMITED_API, Py_3_10))]
fn tp_init_additional<T: PyClass>(_type_object: *mut ffi::PyTypeObject) {}

fn py_class_flags<T: PyClass + PyTypeInfo>(has_gc_methods: bool) -> c_uint {
    let mut flags = if has_gc_methods || T::IS_GC {
        ffi::Py_TPFLAGS_DEFAULT | ffi::Py_TPFLAGS_HAVE_GC
    } else {
        ffi::Py_TPFLAGS_DEFAULT
    };
    if T::IS_BASETYPE {
        flags |= ffi::Py_TPFLAGS_BASETYPE;
    }
    flags.try_into().unwrap()
}

fn py_class_method_defs<T: PyClassImpl>() -> Vec<ffi::PyMethodDef> {
    let mut defs = Vec::new();

    T::for_each_method_def(|def| match def {
        PyMethodDefType::Method(def)
        | PyMethodDefType::Class(def)
        | PyMethodDefType::Static(def) => {
            defs.push(def.as_method_def().unwrap());
        }
        _ => (),
    });

    if !defs.is_empty() {
        defs.push(unsafe { std::mem::zeroed() });
    }

    defs
}

/// Generates the __dictoffset__ and __weaklistoffset__ members, to set tp_dictoffset and
/// tp_weaklistoffset.
///
/// Only works on Python 3.9 and up.
#[cfg(Py_3_9)]
fn py_class_members<T: PyClass>() -> Vec<ffi::structmember::PyMemberDef> {
    #[inline(always)]
    fn offset_def(name: &'static str, offset: usize) -> ffi::structmember::PyMemberDef {
        ffi::structmember::PyMemberDef {
            name: name.as_ptr() as _,
            type_code: ffi::structmember::T_PYSSIZET,
            offset: offset as _,
            flags: ffi::structmember::READONLY,
            doc: std::ptr::null_mut(),
        }
    }

    let mut members = Vec::new();

    // __dict__ support
    if let Some(dict_offset) = PyCell::<T>::dict_offset() {
        members.push(offset_def("__dictoffset__\0", dict_offset));
    }

    // weakref support
    if let Some(weakref_offset) = PyCell::<T>::weakref_offset() {
        members.push(offset_def("__weaklistoffset__\0", weakref_offset));
    }

    if !members.is_empty() {
        members.push(unsafe { std::mem::zeroed() });
    }

    members
}

// Stub needed since the `if cfg!()` above still compiles contained code.
#[cfg(not(Py_3_9))]
fn py_class_members<T: PyClass>() -> Vec<ffi::structmember::PyMemberDef> {
    vec![]
}

const PY_GET_SET_DEF_INIT: ffi::PyGetSetDef = ffi::PyGetSetDef {
    name: ptr::null_mut(),
    get: None,
    set: None,
    doc: ptr::null_mut(),
    closure: ptr::null_mut(),
};

#[allow(clippy::clippy::collapsible_if)] // for if cfg!
fn py_class_properties<T: PyClass>() -> Vec<ffi::PyGetSetDef> {
    let mut defs = std::collections::HashMap::new();

    T::for_each_method_def(|def| match def {
        PyMethodDefType::Getter(getter) => {
            getter.copy_to(defs.entry(getter.name).or_insert(PY_GET_SET_DEF_INIT));
        }
        PyMethodDefType::Setter(setter) => {
            setter.copy_to(defs.entry(setter.name).or_insert(PY_GET_SET_DEF_INIT));
        }
        _ => (),
    });

    let mut props: Vec<_> = defs.values().cloned().collect();

    // PyPy doesn't automatically adds __dict__ getter / setter.
    // PyObject_GenericGetDict not in the limited API until Python 3.10.
    push_dict_getset::<T>(&mut props);

    if !props.is_empty() {
        props.push(unsafe { std::mem::zeroed() });
    }
    props
}

#[cfg(not(any(PyPy, all(Py_LIMITED_API, not(Py_3_10)))))]
fn push_dict_getset<T: PyClass>(props: &mut Vec<ffi::PyGetSetDef>) {
    if !T::Dict::IS_DUMMY {
        props.push(ffi::PyGetSetDef {
            name: "__dict__\0".as_ptr() as *mut c_char,
            get: Some(ffi::PyObject_GenericGetDict),
            set: Some(ffi::PyObject_GenericSetDict),
            doc: ptr::null_mut(),
            closure: ptr::null_mut(),
        });
    }
}

#[cfg(any(PyPy, all(Py_LIMITED_API, not(Py_3_10))))]
fn push_dict_getset<T: PyClass>(_: &mut Vec<ffi::PyGetSetDef>) {}
