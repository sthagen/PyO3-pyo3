// Copyright (c) 2017-present PyO3 Project and Contributors

//! Python GC support
//!

use crate::{ffi, AsPyPointer, PyCell, PyClass, Python};
use std::os::raw::{c_int, c_void};

#[repr(transparent)]
pub struct PyTraverseError(c_int);

/// GC support
pub trait PyGCProtocol<'p>: PyClass {
    fn __traverse__(&'p self, visit: PyVisit) -> Result<(), PyTraverseError>;
    fn __clear__(&'p mut self);
}

pub trait PyGCTraverseProtocol<'p>: PyGCProtocol<'p> {}
pub trait PyGCClearProtocol<'p>: PyGCProtocol<'p> {}

/// All FFI functions for gc protocols.
#[derive(Default)]
pub struct PyGCMethods {
    pub tp_traverse: Option<ffi::traverseproc>,
    pub tp_clear: Option<ffi::inquiry>,
}

#[doc(hidden)]
impl PyGCMethods {
    pub(crate) fn update_typeobj(&self, type_object: &mut ffi::PyTypeObject) {
        type_object.tp_traverse = self.tp_traverse;
        type_object.tp_clear = self.tp_clear;
    }

    pub fn set_traverse<T>(&mut self)
    where
        T: for<'p> PyGCTraverseProtocol<'p>,
    {
        self.tp_traverse = tp_traverse::<T>();
    }

    pub fn set_clear<T>(&mut self)
    where
        T: for<'p> PyGCClearProtocol<'p>,
    {
        self.tp_clear = tp_clear::<T>();
    }
}

/// Object visitor for GC.
#[derive(Copy, Clone)]
pub struct PyVisit<'p> {
    visit: ffi::visitproc,
    arg: *mut c_void,
    /// VisitProc contains a Python instance to ensure that
    /// 1) it is cannot be moved out of the traverse() call
    /// 2) it cannot be sent to other threads
    _py: Python<'p>,
}

impl<'p> PyVisit<'p> {
    /// Visit `obj`.
    pub fn call<T>(&self, obj: &T) -> Result<(), PyTraverseError>
    where
        T: AsPyPointer,
    {
        let r = unsafe { (self.visit)(obj.as_ptr(), self.arg) };
        if r == 0 {
            Ok(())
        } else {
            Err(PyTraverseError(r))
        }
    }
}

fn tp_traverse<T>() -> Option<ffi::traverseproc>
where
    T: for<'p> PyGCTraverseProtocol<'p>,
{
    unsafe extern "C" fn tp_traverse<T>(
        slf: *mut ffi::PyObject,
        visit: ffi::visitproc,
        arg: *mut c_void,
    ) -> c_int
    where
        T: for<'p> PyGCTraverseProtocol<'p>,
    {
        let pool = crate::GILPool::new();
        let py = pool.python();
        let slf = py.from_borrowed_ptr::<PyCell<T>>(slf);

        let visit = PyVisit {
            visit,
            arg,
            _py: py,
        };
        let borrow = slf.try_borrow();
        if let Ok(borrow) = borrow {
            match borrow.__traverse__(visit) {
                Ok(()) => 0,
                Err(PyTraverseError(code)) => code,
            }
        } else {
            0
        }
    }

    Some(tp_traverse::<T>)
}

fn tp_clear<T>() -> Option<ffi::inquiry>
where
    T: for<'p> PyGCClearProtocol<'p>,
{
    unsafe extern "C" fn tp_clear<T>(slf: *mut ffi::PyObject) -> c_int
    where
        T: for<'p> PyGCClearProtocol<'p>,
    {
        let pool = crate::GILPool::new();
        let py = pool.python();
        let slf = py.from_borrowed_ptr::<PyCell<T>>(slf);

        slf.borrow_mut().__clear__();
        0
    }
    Some(tp_clear::<T>)
}
