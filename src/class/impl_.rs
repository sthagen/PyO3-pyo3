// Copyright (c) 2017-present PyO3 Project and Contributors

use crate::{
    exceptions::{PyAttributeError, PyNotImplementedError},
    ffi,
    impl_::freelist::FreeList,
    pycell::PyCellLayout,
    pyclass_init::PyObjectInit,
    type_object::{PyLayout, PyTypeObject},
    PyClass, PyMethodDefType, PyNativeType, PyResult, PyTypeInfo, Python,
};
use std::{marker::PhantomData, os::raw::c_void, ptr::NonNull, thread};

/// This type is used as a "dummy" type on which dtolnay specializations are
/// applied to apply implementations from `#[pymethods]` & `#[pyproto]`
pub struct PyClassImplCollector<T>(PhantomData<T>);

impl<T> PyClassImplCollector<T> {
    pub fn new() -> Self {
        Self(PhantomData)
    }
}

impl<T> Default for PyClassImplCollector<T> {
    fn default() -> Self {
        Self::new()
    }
}

impl<T> Clone for PyClassImplCollector<T> {
    fn clone(&self) -> Self {
        Self::new()
    }
}

impl<T> Copy for PyClassImplCollector<T> {}

/// Implements the underlying functionality of `#[pyclass]`, assembled by various proc macros.
///
/// Users are discouraged from implementing this trait manually; it is a PyO3 implementation detail
/// and may be changed at any time.
pub trait PyClassImpl: Sized {
    /// Class doc string
    const DOC: &'static str = "\0";

    /// #[pyclass(gc)]
    const IS_GC: bool = false;

    /// #[pyclass(subclass)]
    const IS_BASETYPE: bool = false;

    /// #[pyclass(extends=...)]
    const IS_SUBCLASS: bool = false;

    /// Layout
    type Layout: PyLayout<Self>;

    /// Base class
    type BaseType: PyTypeInfo + PyTypeObject + PyClassBaseType;

    /// This handles following two situations:
    /// 1. In case `T` is `Send`, stub `ThreadChecker` is used and does nothing.
    ///    This implementation is used by default. Compile fails if `T: !Send`.
    /// 2. In case `T` is `!Send`, `ThreadChecker` panics when `T` is accessed by another thread.
    ///    This implementation is used when `#[pyclass(unsendable)]` is given.
    ///    Panicking makes it safe to expose `T: !Send` to the Python interpreter, where all objects
    ///    can be accessed by multiple threads by `threading` module.
    type ThreadChecker: PyClassThreadChecker<Self>;

    fn for_each_method_def(_visitor: &mut dyn FnMut(&[PyMethodDefType])) {}
    fn get_new() -> Option<ffi::newfunc> {
        None
    }
    fn get_call() -> Option<ffi::PyCFunctionWithKeywords> {
        None
    }
    fn get_alloc() -> Option<ffi::allocfunc> {
        None
    }
    fn get_free() -> Option<ffi::freefunc> {
        None
    }
    fn for_each_proto_slot(_visitor: &mut dyn FnMut(&[ffi::PyType_Slot])) {}
    fn get_buffer() -> Option<&'static PyBufferProcs> {
        None
    }
}

// Traits describing known special methods.

pub trait PyClassNewImpl<T> {
    fn new_impl(self) -> Option<ffi::newfunc>;
}

impl<T> PyClassNewImpl<T> for &'_ PyClassImplCollector<T> {
    fn new_impl(self) -> Option<ffi::newfunc> {
        None
    }
}

pub trait PyClassCallImpl<T> {
    fn call_impl(self) -> Option<ffi::PyCFunctionWithKeywords>;
}

impl<T> PyClassCallImpl<T> for &'_ PyClassImplCollector<T> {
    fn call_impl(self) -> Option<ffi::PyCFunctionWithKeywords> {
        None
    }
}

macro_rules! slot_fragment_trait {
    ($trait_name:ident, $($default_method:tt)*) => {
        #[allow(non_camel_case_types)]
        pub trait $trait_name<T>: Sized {
            $($default_method)*
        }

        impl<T> $trait_name<T> for &'_ PyClassImplCollector<T> {}
    }
}

/// Macro which expands to three items
/// - Trait for a __setitem__ dunder
/// - Trait for the corresponding __delitem__ dunder
/// - A macro which will use dtolnay specialisation to generate the shared slot for the two dunders
macro_rules! define_pyclass_setattr_slot {
    (
        $set_trait:ident,
        $del_trait:ident,
        $set:ident,
        $del:ident,
        $set_error:expr,
        $del_error:expr,
        $generate_macro:ident,
        $slot:ident,
        $func_ty:ident,
    ) => {
        slot_fragment_trait! {
            $set_trait,

            /// # Safety: _slf and _attr must be valid non-null Python objects
            #[inline]
            unsafe fn $set(
                self,
                _py: Python,
                _slf: *mut ffi::PyObject,
                _attr: *mut ffi::PyObject,
                _value: NonNull<ffi::PyObject>,
            ) -> PyResult<()> {
                $set_error
            }
        }

        slot_fragment_trait! {
            $del_trait,

            /// # Safety: _slf and _attr must be valid non-null Python objects
            #[inline]
            unsafe fn $del(
                self,
                _py: Python,
                _slf: *mut ffi::PyObject,
                _attr: *mut ffi::PyObject,
            ) -> PyResult<()> {
                $del_error
            }
        }

        #[doc(hidden)]
        #[macro_export]
        macro_rules! $generate_macro {
            ($cls:ty) => {{
                unsafe extern "C" fn __wrap(
                    _slf: *mut $crate::ffi::PyObject,
                    attr: *mut $crate::ffi::PyObject,
                    value: *mut $crate::ffi::PyObject,
                ) -> ::std::os::raw::c_int {
                    use ::std::option::Option::*;
                    use $crate::callback::IntoPyCallbackOutput;
                    use $crate::class::impl_::*;
                    $crate::callback::handle_panic(|py| {
                        let collector = PyClassImplCollector::<$cls>::new();
                        if let Some(value) = ::std::ptr::NonNull::new(value) {
                            collector.$set(py, _slf, attr, value).convert(py)
                        } else {
                            collector.$del(py, _slf, attr).convert(py)
                        }
                    })
                }
                $crate::ffi::PyType_Slot {
                    slot: $crate::ffi::$slot,
                    pfunc: __wrap as $crate::ffi::$func_ty as _,
                }
            }};
        }
    };
}

define_pyclass_setattr_slot! {
    PyClass__setattr__SlotFragment,
    PyClass__delattr__SlotFragment,
    __setattr__,
    __delattr__,
    Err(PyAttributeError::new_err("can't set attribute")),
    Err(PyAttributeError::new_err("can't delete attribute")),
    generate_pyclass_setattr_slot,
    Py_tp_setattro,
    setattrofunc,
}

define_pyclass_setattr_slot! {
    PyClass__set__SlotFragment,
    PyClass__delete__SlotFragment,
    __set__,
    __delete__,
    Err(PyNotImplementedError::new_err("can't set descriptor")),
    Err(PyNotImplementedError::new_err("can't delete descriptor")),
    generate_pyclass_setdescr_slot,
    Py_tp_descr_set,
    descrsetfunc,
}

define_pyclass_setattr_slot! {
    PyClass__setitem__SlotFragment,
    PyClass__delitem__SlotFragment,
    __setitem__,
    __delitem__,
    Err(PyNotImplementedError::new_err("can't set item")),
    Err(PyNotImplementedError::new_err("can't delete item")),
    generate_pyclass_setitem_slot,
    Py_mp_ass_subscript,
    objobjargproc,
}

/// Macro which expands to three items
/// - Trait for a lhs dunder e.g. __add__
/// - Trait for the corresponding rhs e.g. __radd__
/// - A macro which will use dtolnay specialisation to generate the shared slot for the two dunders
macro_rules! define_pyclass_binary_operator_slot {
    (
        $lhs_trait:ident,
        $rhs_trait:ident,
        $lhs:ident,
        $rhs:ident,
        $generate_macro:ident,
        $slot:ident,
        $func_ty:ident,
    ) => {
        slot_fragment_trait! {
            $lhs_trait,

            /// # Safety: _slf and _other must be valid non-null Python objects
            #[inline]
            unsafe fn $lhs(
                self,
                _py: Python,
                _slf: *mut ffi::PyObject,
                _other: *mut ffi::PyObject,
            ) -> PyResult<*mut ffi::PyObject> {
                Ok(ffi::_Py_NewRef(ffi::Py_NotImplemented()))
            }
        }

        slot_fragment_trait! {
            $rhs_trait,

            /// # Safety: _slf and _other must be valid non-null Python objects
            #[inline]
            unsafe fn $rhs(
                self,
                _py: Python,
                _slf: *mut ffi::PyObject,
                _other: *mut ffi::PyObject,
            ) -> PyResult<*mut ffi::PyObject> {
                Ok(ffi::_Py_NewRef(ffi::Py_NotImplemented()))
            }
        }

        #[doc(hidden)]
        #[macro_export]
        macro_rules! $generate_macro {
            ($cls:ty) => {{
                unsafe extern "C" fn __wrap(
                    _slf: *mut $crate::ffi::PyObject,
                    _other: *mut $crate::ffi::PyObject,
                ) -> *mut $crate::ffi::PyObject {
                    $crate::callback::handle_panic(|py| {
                        use ::pyo3::class::impl_::*;
                        let collector = PyClassImplCollector::<$cls>::new();
                        let lhs_result = collector.$lhs(py, _slf, _other)?;
                        if lhs_result == $crate::ffi::Py_NotImplemented() {
                            $crate::ffi::Py_DECREF(lhs_result);
                            collector.$rhs(py, _other, _slf)
                        } else {
                            ::std::result::Result::Ok(lhs_result)
                        }
                    })
                }
                $crate::ffi::PyType_Slot {
                    slot: $crate::ffi::$slot,
                    pfunc: __wrap as $crate::ffi::$func_ty as _,
                }
            }};
        }
    };
}

define_pyclass_binary_operator_slot! {
    PyClass__add__SlotFragment,
    PyClass__radd__SlotFragment,
    __add__,
    __radd__,
    generate_pyclass_add_slot,
    Py_nb_add,
    binaryfunc,
}

define_pyclass_binary_operator_slot! {
    PyClass__sub__SlotFragment,
    PyClass__rsub__SlotFragment,
    __sub__,
    __rsub__,
    generate_pyclass_sub_slot,
    Py_nb_subtract,
    binaryfunc,
}

define_pyclass_binary_operator_slot! {
    PyClass__mul__SlotFragment,
    PyClass__rmul__SlotFragment,
    __mul__,
    __rmul__,
    generate_pyclass_mul_slot,
    Py_nb_multiply,
    binaryfunc,
}

define_pyclass_binary_operator_slot! {
    PyClass__mod__SlotFragment,
    PyClass__rmod__SlotFragment,
    __mod__,
    __rmod__,
    generate_pyclass_mod_slot,
    Py_nb_remainder,
    binaryfunc,
}

define_pyclass_binary_operator_slot! {
    PyClass__divmod__SlotFragment,
    PyClass__rdivmod__SlotFragment,
    __divmod__,
    __rdivmod__,
    generate_pyclass_divmod_slot,
    Py_nb_divmod,
    binaryfunc,
}

define_pyclass_binary_operator_slot! {
    PyClass__lshift__SlotFragment,
    PyClass__rlshift__SlotFragment,
    __lshift__,
    __rlshift__,
    generate_pyclass_lshift_slot,
    Py_nb_lshift,
    binaryfunc,
}

define_pyclass_binary_operator_slot! {
    PyClass__rshift__SlotFragment,
    PyClass__rrshift__SlotFragment,
    __rshift__,
    __rrshift__,
    generate_pyclass_rshift_slot,
    Py_nb_rshift,
    binaryfunc,
}

define_pyclass_binary_operator_slot! {
    PyClass__and__SlotFragment,
    PyClass__rand__SlotFragment,
    __and__,
    __rand__,
    generate_pyclass_and_slot,
    Py_nb_and,
    binaryfunc,
}

define_pyclass_binary_operator_slot! {
    PyClass__or__SlotFragment,
    PyClass__ror__SlotFragment,
    __or__,
    __ror__,
    generate_pyclass_or_slot,
    Py_nb_or,
    binaryfunc,
}

define_pyclass_binary_operator_slot! {
    PyClass__xor__SlotFragment,
    PyClass__rxor__SlotFragment,
    __xor__,
    __rxor__,
    generate_pyclass_xor_slot,
    Py_nb_xor,
    binaryfunc,
}

define_pyclass_binary_operator_slot! {
    PyClass__matmul__SlotFragment,
    PyClass__rmatmul__SlotFragment,
    __matmul__,
    __rmatmul__,
    generate_pyclass_matmul_slot,
    Py_nb_matrix_multiply,
    binaryfunc,
}

slot_fragment_trait! {
    PyClass__pow__SlotFragment,

    /// # Safety: _slf and _other must be valid non-null Python objects
    #[inline]
    unsafe fn __pow__(
        self,
        _py: Python,
        _slf: *mut ffi::PyObject,
        _other: *mut ffi::PyObject,
        _mod: *mut ffi::PyObject,
    ) -> PyResult<*mut ffi::PyObject> {
        Ok(ffi::_Py_NewRef(ffi::Py_NotImplemented()))
    }
}

slot_fragment_trait! {
    PyClass__rpow__SlotFragment,

    /// # Safety: _slf and _other must be valid non-null Python objects
    #[inline]
    unsafe fn __rpow__(
        self,
        _py: Python,
        _slf: *mut ffi::PyObject,
        _other: *mut ffi::PyObject,
        _mod: *mut ffi::PyObject,
    ) -> PyResult<*mut ffi::PyObject> {
        Ok(ffi::_Py_NewRef(ffi::Py_NotImplemented()))
    }
}

#[doc(hidden)]
#[macro_export]
macro_rules! generate_pyclass_pow_slot {
    ($cls:ty) => {{
        unsafe extern "C" fn __wrap(
            _slf: *mut $crate::ffi::PyObject,
            _other: *mut $crate::ffi::PyObject,
            _mod: *mut $crate::ffi::PyObject,
        ) -> *mut $crate::ffi::PyObject {
            $crate::callback::handle_panic(|py| {
                use ::pyo3::class::impl_::*;
                let collector = PyClassImplCollector::<$cls>::new();
                let lhs_result = collector.__pow__(py, _slf, _other, _mod)?;
                if lhs_result == $crate::ffi::Py_NotImplemented() {
                    $crate::ffi::Py_DECREF(lhs_result);
                    collector.__rpow__(py, _other, _slf, _mod)
                } else {
                    ::std::result::Result::Ok(lhs_result)
                }
            })
        }
        $crate::ffi::PyType_Slot {
            slot: $crate::ffi::Py_nb_power,
            pfunc: __wrap as $crate::ffi::ternaryfunc as _,
        }
    }};
}

pub trait PyClassAllocImpl<T> {
    fn alloc_impl(self) -> Option<ffi::allocfunc>;
}

impl<T> PyClassAllocImpl<T> for &'_ PyClassImplCollector<T> {
    fn alloc_impl(self) -> Option<ffi::allocfunc> {
        None
    }
}

pub trait PyClassFreeImpl<T> {
    fn free_impl(self) -> Option<ffi::freefunc>;
}

impl<T> PyClassFreeImpl<T> for &'_ PyClassImplCollector<T> {
    fn free_impl(self) -> Option<ffi::freefunc> {
        None
    }
}

/// Implements a freelist.
///
/// Do not implement this trait manually. Instead, use `#[pyclass(freelist = N)]`
/// on a Rust struct to implement it.
pub trait PyClassWithFreeList: PyClass {
    fn get_free_list(py: Python) -> &mut FreeList<*mut ffi::PyObject>;
}

/// Implementation of tp_alloc for `freelist` classes.
///
/// # Safety
/// - `subtype` must be a valid pointer to the type object of T or a subclass.
/// - The GIL must be held.
pub unsafe extern "C" fn alloc_with_freelist<T: PyClassWithFreeList>(
    subtype: *mut ffi::PyTypeObject,
    nitems: ffi::Py_ssize_t,
) -> *mut ffi::PyObject {
    let py = Python::assume_gil_acquired();

    #[cfg(not(Py_3_8))]
    bpo_35810_workaround(py, subtype);

    let self_type = T::type_object_raw(py);
    // If this type is a variable type or the subtype is not equal to this type, we cannot use the
    // freelist
    if nitems == 0 && subtype == self_type {
        if let Some(obj) = T::get_free_list(py).pop() {
            ffi::PyObject_Init(obj, subtype);
            return obj as _;
        }
    }

    ffi::PyType_GenericAlloc(subtype, nitems)
}

/// Implementation of tp_free for `freelist` classes.
///
/// # Safety
/// - `obj` must be a valid pointer to an instance of T (not a subclass).
/// - The GIL must be held.
#[allow(clippy::collapsible_if)] // for if cfg!
pub unsafe extern "C" fn free_with_freelist<T: PyClassWithFreeList>(obj: *mut c_void) {
    let obj = obj as *mut ffi::PyObject;
    debug_assert_eq!(
        T::type_object_raw(Python::assume_gil_acquired()),
        ffi::Py_TYPE(obj)
    );
    if let Some(obj) = T::get_free_list(Python::assume_gil_acquired()).insert(obj) {
        let ty = ffi::Py_TYPE(obj);

        // Deduce appropriate inverse of PyType_GenericAlloc
        let free = if ffi::PyType_IS_GC(ty) != 0 {
            ffi::PyObject_GC_Del
        } else {
            ffi::PyObject_Free
        };
        free(obj as *mut c_void);

        if cfg!(Py_3_8) {
            if ffi::PyType_HasFeature(ty, ffi::Py_TPFLAGS_HEAPTYPE) != 0 {
                ffi::Py_DECREF(ty as *mut ffi::PyObject);
            }
        }
    }
}

/// Workaround for Python issue 35810; no longer necessary in Python 3.8
#[inline]
#[cfg(not(Py_3_8))]
unsafe fn bpo_35810_workaround(_py: Python, ty: *mut ffi::PyTypeObject) {
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

// General methods implementation: either dtolnay specialization trait or inventory if
// multiple-pymethods feature is enabled.

macro_rules! methods_trait {
    ($name:ident, $function_name: ident) => {
        pub trait $name<T> {
            fn $function_name(self) -> &'static [PyMethodDefType];
        }

        impl<T> $name<T> for &'_ PyClassImplCollector<T> {
            fn $function_name(self) -> &'static [PyMethodDefType] {
                &[]
            }
        }
    };
}

/// Implementation detail. Only to be used through our proc macro code.
/// Method storage for `#[pyclass]`.
/// Allows arbitrary `#[pymethod]` blocks to submit their methods,
/// which are eventually collected by `#[pyclass]`.
#[cfg(all(feature = "macros", feature = "multiple-pymethods"))]
pub trait PyMethodsInventory: inventory::Collect {
    /// Create a new instance
    fn new(methods: Vec<PyMethodDefType>) -> Self;

    /// Returns the methods for a single `#[pymethods] impl` block
    fn get(&'static self) -> &'static [PyMethodDefType];
}

/// Implemented for `#[pyclass]` in our proc macro code.
/// Indicates that the pyclass has its own method storage.
#[cfg(all(feature = "macros", feature = "multiple-pymethods"))]
pub trait HasMethodsInventory {
    type Methods: PyMethodsInventory;
}

// Methods from #[pyo3(get, set)] on struct fields.
methods_trait!(PyClassDescriptors, py_class_descriptors);

// Methods from #[pymethods] if not using inventory.
#[cfg(not(feature = "multiple-pymethods"))]
methods_trait!(PyMethods, py_methods);

// All traits describing slots, as well as the fallback implementations for unimplemented protos
//
// Protos which are implemented use dtolnay specialization to implement for PyClassImplCollector<T>.
//
// See https://github.com/dtolnay/case-studies/blob/master/autoref-specialization/README.md

macro_rules! slots_trait {
    ($name:ident, $function_name: ident) => {
        #[allow(clippy::upper_case_acronyms)]
        pub trait $name<T> {
            fn $function_name(self) -> &'static [ffi::PyType_Slot];
        }

        impl<T> $name<T> for &'_ PyClassImplCollector<T> {
            fn $function_name(self) -> &'static [ffi::PyType_Slot] {
                &[]
            }
        }
    };
}

slots_trait!(PyObjectProtocolSlots, object_protocol_slots);
slots_trait!(PyDescrProtocolSlots, descr_protocol_slots);
slots_trait!(PyGCProtocolSlots, gc_protocol_slots);
slots_trait!(PyIterProtocolSlots, iter_protocol_slots);
slots_trait!(PyMappingProtocolSlots, mapping_protocol_slots);
slots_trait!(PyNumberProtocolSlots, number_protocol_slots);
slots_trait!(PyAsyncProtocolSlots, async_protocol_slots);
slots_trait!(PySequenceProtocolSlots, sequence_protocol_slots);
slots_trait!(PyBufferProtocolSlots, buffer_protocol_slots);

#[cfg(not(feature = "multiple-pymethods"))]
slots_trait!(PyMethodsProtocolSlots, methods_protocol_slots);

methods_trait!(PyObjectProtocolMethods, object_protocol_methods);
methods_trait!(PyAsyncProtocolMethods, async_protocol_methods);
methods_trait!(PyContextProtocolMethods, context_protocol_methods);
methods_trait!(PyDescrProtocolMethods, descr_protocol_methods);
methods_trait!(PyMappingProtocolMethods, mapping_protocol_methods);
methods_trait!(PyNumberProtocolMethods, number_protocol_methods);

// On Python < 3.9 setting the buffer protocol using slots doesn't work, so these procs are used
// on those versions to set the slots manually (on the limited API).

#[cfg(not(Py_LIMITED_API))]
pub use ffi::PyBufferProcs;

#[cfg(Py_LIMITED_API)]
pub struct PyBufferProcs;

pub trait PyBufferProtocolProcs<T> {
    fn buffer_procs(self) -> Option<&'static PyBufferProcs>;
}

impl<T> PyBufferProtocolProcs<T> for &'_ PyClassImplCollector<T> {
    fn buffer_procs(self) -> Option<&'static PyBufferProcs> {
        None
    }
}

// Thread checkers

#[doc(hidden)]
pub trait PyClassThreadChecker<T>: Sized {
    fn ensure(&self);
    fn new() -> Self;
    private_decl! {}
}

/// Stub checker for `Send` types.
#[doc(hidden)]
pub struct ThreadCheckerStub<T: Send>(PhantomData<T>);

impl<T: Send> PyClassThreadChecker<T> for ThreadCheckerStub<T> {
    fn ensure(&self) {}
    #[inline]
    fn new() -> Self {
        ThreadCheckerStub(PhantomData)
    }
    private_impl! {}
}

impl<T: PyNativeType> PyClassThreadChecker<T> for ThreadCheckerStub<crate::PyObject> {
    fn ensure(&self) {}
    #[inline]
    fn new() -> Self {
        ThreadCheckerStub(PhantomData)
    }
    private_impl! {}
}

/// Thread checker for unsendable types.
/// Panics when the value is accessed by another thread.
#[doc(hidden)]
pub struct ThreadCheckerImpl<T>(thread::ThreadId, PhantomData<T>);

impl<T> PyClassThreadChecker<T> for ThreadCheckerImpl<T> {
    fn ensure(&self) {
        if thread::current().id() != self.0 {
            panic!(
                "{} is unsendable, but sent to another thread!",
                std::any::type_name::<T>()
            );
        }
    }
    fn new() -> Self {
        ThreadCheckerImpl(thread::current().id(), PhantomData)
    }
    private_impl! {}
}

/// Thread checker for types that have `Send` and `extends=...`.
/// Ensures that `T: Send` and the parent is not accessed by another thread.
#[doc(hidden)]
pub struct ThreadCheckerInherited<T: Send, U: PyClassBaseType>(PhantomData<T>, U::ThreadChecker);

impl<T: Send, U: PyClassBaseType> PyClassThreadChecker<T> for ThreadCheckerInherited<T, U> {
    fn ensure(&self) {
        self.1.ensure();
    }
    fn new() -> Self {
        ThreadCheckerInherited(PhantomData, U::ThreadChecker::new())
    }
    private_impl! {}
}

/// Trait denoting that this class is suitable to be used as a base type for PyClass.
pub trait PyClassBaseType: Sized {
    type Dict;
    type WeakRef;
    type LayoutAsBase: PyCellLayout<Self>;
    type BaseNativeType;
    type ThreadChecker: PyClassThreadChecker<Self>;
    type Initializer: PyObjectInit<Self>;
}

/// All PyClasses can be used as a base type.
impl<T: PyClass> PyClassBaseType for T {
    type Dict = T::Dict;
    type WeakRef = T::WeakRef;
    type LayoutAsBase = crate::pycell::PyCell<T>;
    type BaseNativeType = T::BaseNativeType;
    type ThreadChecker = T::ThreadChecker;
    type Initializer = crate::pyclass_init::PyClassInitializer<Self>;
}

/// Default new implementation
pub(crate) unsafe extern "C" fn fallback_new(
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

/// Implementation of tp_dealloc for all pyclasses
pub(crate) unsafe extern "C" fn tp_dealloc<T: PyClass>(obj: *mut ffi::PyObject) {
    crate::callback_body!(py, T::Layout::tp_dealloc(obj, py))
}
