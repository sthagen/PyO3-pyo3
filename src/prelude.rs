// Copyright (c) 2017-present PyO3 Project and Contributors

//! PyO3's prelude.
//!
//! The purpose of this module is to alleviate imports of many commonly used items of the PyO3 crate
//! by adding a glob import to the top of pyo3 heavy modules:
//!
//! ```
//! # #![allow(unused_imports)]
//! use pyo3::prelude::*;
//! ```

pub use crate::conversion::{
    FromPyObject, IntoPy, IntoPyPointer, PyTryFrom, PyTryInto, ToPyObject,
};
pub use crate::err::{PyErr, PyResult};
pub use crate::gil::GILGuard;
pub use crate::instance::{Py, PyObject};
pub use crate::pycell::{PyCell, PyRef, PyRefMut};
pub use crate::pyclass_init::PyClassInitializer;
pub use crate::python::Python;
pub use crate::types::{PyAny, PyModule};
pub use crate::wrap_pyfunction;

#[cfg(feature = "macros")]
pub use pyo3_macros::{pyclass, pyfunction, pymethods, pymodule, pyproto, FromPyObject};
