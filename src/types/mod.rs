// Copyright (c) 2017-present PyO3 Project and Contributors

//! Various types defined by the Python interpreter such as `int`, `str` and `tuple`.

pub use self::any::PyAny;
pub use self::boolobject::PyBool;
pub use self::bytearray::PyByteArray;
pub use self::bytes::PyBytes;
pub use self::complex::PyComplex;
pub use self::datetime::PyDeltaAccess;
pub use self::datetime::{
    PyDate, PyDateAccess, PyDateTime, PyDelta, PyTime, PyTimeAccess, PyTzInfo,
};
pub use self::dict::{IntoPyDict, PyDict};
pub use self::floatob::PyFloat;
pub use self::iterator::PyIterator;
pub use self::list::PyList;
pub use self::module::PyModule;
pub use self::num::PyLong;
pub use self::num::PyLong as PyInt;
pub use self::sequence::PySequence;
pub use self::set::{PyFrozenSet, PySet};
pub use self::slice::{PySlice, PySliceIndices};
pub(crate) use self::string::with_tmp_string;
pub use self::string::{PyString, PyString as PyUnicode};
pub use self::tuple::PyTuple;
pub use self::typeobject::PyType;

#[macro_export]
macro_rules! pyobject_native_type_named (
    ($name: ty $(,$type_param: ident)*) => {
        impl<$($type_param,)*> ::std::convert::AsRef<$crate::PyAny> for $name {
            #[inline]
            fn as_ref(&self) -> &$crate::PyAny {
                &self.0
            }
        }

        impl<$($type_param,)*> ::std::ops::Deref for $name {
            type Target = $crate::PyAny;

            #[inline]
            fn deref(&self) -> &$crate::PyAny {
                &self.0
            }
        }

        unsafe impl<$($type_param,)*> $crate::PyNativeType for $name {}

        impl<$($type_param,)*> $crate::AsPyPointer for $name {
            /// Gets the underlying FFI pointer, returns a borrowed pointer.
            #[inline]
            fn as_ptr(&self) -> *mut $crate::ffi::PyObject {
                self.0.as_ptr()
            }
        }

        impl<$($type_param,)*> PartialEq for $name {
            #[inline]
            fn eq(&self, o: &$name) -> bool {
                use $crate::AsPyPointer;

                self.as_ptr() == o.as_ptr()
            }
        }

        impl<$($type_param,)*> $crate::IntoPy<$crate::Py<$name>> for &'_ $name {
            #[inline]
            fn into_py(self, py: $crate::Python) -> $crate::Py<$name> {
                use $crate::AsPyPointer;
                unsafe { $crate::Py::from_borrowed_ptr(py, self.as_ptr()) }
            }
        }

        impl<$($type_param,)*> From<&'_ $name> for $crate::Py<$name> {
            #[inline]
            fn from(other: &$name) -> Self {
                use $crate::AsPyPointer;
                use $crate::PyNativeType;
                unsafe { $crate::Py::from_borrowed_ptr(other.py(), other.as_ptr()) }
            }
        }
    };
);

#[macro_export]
macro_rules! pyobject_native_type_core {
    ($name: ty, $layout: path, $typeobject: expr, $module: expr, $checkfunction: path $(,$type_param: ident)*) => {
        unsafe impl $crate::type_object::PyLayout<$name> for $layout {}
        $crate::pyobject_native_type_named!($name $(,$type_param)*);
        $crate::pyobject_native_type_convert!($name, $layout, $typeobject, $module, $checkfunction $(,$type_param)*);
        $crate::pyobject_native_type_extract!($name $(,$type_param)*);

        impl<'a, $($type_param,)*> ::std::convert::From<&'a $name> for &'a $crate::PyAny {
            fn from(ob: &'a $name) -> Self {
                unsafe{&*(ob as *const $name as *const $crate::PyAny)}
            }
        }
    }
}

#[macro_export]
macro_rules! pyobject_native_type_sized {
    ($name: ty, $layout: path $(,$type_param: ident)*) => {
        impl $crate::type_object::PySizedLayout<$name> for $layout {}
        impl<'a, $($type_param,)*> $crate::derive_utils::PyBaseTypeUtils for $name {
            type Dict = $crate::pyclass_slots::PyClassDummySlot;
            type WeakRef = $crate::pyclass_slots::PyClassDummySlot;
            type LayoutAsBase = $crate::pycell::PyCellBase<$name>;
            type BaseNativeType = $name;
            type ThreadChecker = $crate::pyclass::ThreadCheckerStub<$crate::PyObject>;
        }
    }
}

#[macro_export]
macro_rules! pyobject_native_type {
    ($name: ty, $layout: path, $typeobject: expr, $module: expr, $checkfunction: path $(,$type_param: ident)*) => {
        $crate::pyobject_native_type_core!($name, $layout, $typeobject, $module, $checkfunction $(,$type_param)*);
        $crate::pyobject_native_type_sized!($name, $layout $(,$type_param)*);
        $crate::pyobject_native_type_fmt!($name $(,$type_param)*);
    };
    ($name: ty, $layout: path, $typeobject: expr, $checkfunction: path $(,$type_param: ident)*) => {
        $crate::pyobject_native_type! {
            $name, $layout, $typeobject, Some("builtins"), $checkfunction $(,$type_param)*
        }
    };
}

#[macro_export]
macro_rules! pyobject_native_var_type {
    ($name: ty, $typeobject: expr, $module: expr, $checkfunction: path $(,$type_param: ident)*) => {
        $crate::pyobject_native_type_core!(
            $name, $crate::ffi::PyObject, $typeobject, Some("builtins"), $checkfunction $(,$type_param)*);
        $crate::pyobject_native_type_fmt!($name $(,$type_param)*);
    };
    ($name: ty, $typeobject: expr, $checkfunction: path $(,$type_param: ident)*) => {
        $crate::pyobject_native_var_type! {
            $name, $typeobject, Some("builtins"), $checkfunction $(,$type_param)*
        }
    };
}

// NOTE: This macro is not included in pyobject_native_type_convert!
// because rust-numpy has a special implementation.
#[macro_export]
macro_rules! pyobject_native_type_extract {
    ($name: ty $(,$type_param: ident)*) => {
        impl<'py, $($type_param,)*> $crate::FromPyObject<'py> for &'py $name {
            fn extract(obj: &'py $crate::PyAny) -> $crate::PyResult<Self> {
                $crate::PyTryFrom::try_from(obj).map_err(Into::into)
            }
        }
    }
}

#[macro_export]
macro_rules! pyobject_native_type_convert(
    ($name: ty, $layout: path, $typeobject: expr,
     $module: expr, $checkfunction: path $(,$type_param: ident)*) => {
        unsafe impl<$($type_param,)*> $crate::type_object::PyTypeInfo for $name {
            type Type = ();
            type BaseType = $crate::PyAny;
            type Layout = $layout;
            type BaseLayout = $crate::ffi::PyObject;
            type Initializer = $crate::pyclass_init::PyNativeTypeInitializer<Self>;
            type AsRefTarget = Self;

            const NAME: &'static str = stringify!($name);
            const MODULE: Option<&'static str> = $module;

            #[inline]
            fn type_object_raw(_py: $crate::Python) -> *mut $crate::ffi::PyTypeObject {
                // Create a very short lived mutable reference and directly
                // cast it to a pointer: no mutable references can be aliasing
                // because we hold the GIL.
                unsafe { &mut $typeobject }
            }

            #[allow(unused_unsafe)]
            fn is_instance(ptr: &$crate::PyAny) -> bool {
                use $crate::AsPyPointer;
                unsafe { $checkfunction(ptr.as_ptr()) > 0 }
            }
        }

        impl<$($type_param,)*> $crate::ToPyObject for $name
        {
            #[inline]
            fn to_object(&self, py: $crate::Python) -> $crate::PyObject {
                use $crate::AsPyPointer;
                unsafe { $crate::PyObject::from_borrowed_ptr(py, self.as_ptr()) }
            }
        }
    };
);

#[macro_export]
macro_rules! pyobject_native_type_fmt(
    ($name: ty $(,$type_param: ident)*) => {
        impl<$($type_param,)*> ::std::fmt::Debug for $name {
            fn fmt(&self, f: &mut ::std::fmt::Formatter)
                   -> Result<(), ::std::fmt::Error>
            {
                let s = self.repr().map_err(|_| ::std::fmt::Error)?;
                f.write_str(&s.to_string_lossy())
            }
        }

        impl<$($type_param,)*> ::std::fmt::Display for $name {
            fn fmt(&self, f: &mut ::std::fmt::Formatter)
                   -> Result<(), ::std::fmt::Error>
            {
                let s = self.str().map_err(|_| ::std::fmt::Error)?;
                f.write_str(&s.to_string_lossy())
            }
        }
    };
);

mod any;
mod boolobject;
mod bytearray;
mod bytes;
mod complex;
mod datetime;
mod dict;
mod floatob;
mod iterator;
mod list;
mod module;
mod num;
mod sequence;
mod set;
mod slice;
mod string;
mod tuple;
mod typeobject;
