#![cfg_attr(feature = "nightly", feature(specialization))]
#![allow(clippy::missing_safety_doc)] // FIXME (#698)

//! Rust bindings to the Python interpreter.
//!
//! Look at [the guide](https://pyo3.rs/) for a detailed introduction.
//!
//! # Ownership and Lifetimes
//!
//! Because all Python objects potentially have multiple owners, the concept of
//! Rust mutability does not apply to Python objects.  As a result, PyO3 allows
//! mutating Python objects even if they are not stored in a mutable Rust
//! variable.
//!
//! In Python, all objects are implicitly reference counted.  The Python
//! interpreter uses a global interpreter lock (GIL) to ensure thread-safety.
//! Thus, we use `struct Python<'py>` as a token to indicate that
//! a function can assume that the GIL is held.  In Rust, we use different types
//! to represent a reference to a Python object, depending on whether we know
//! the GIL is held, and depending on whether we know the underlying type.  See
//! [the guide](https://pyo3.rs/main/types.html) for an explanation of
//! the different Python object types.
//!
//! A `Python` instance is either obtained explicitly by acquiring the GIL,
//! or implicitly by PyO3 when it generates the wrapper code for Rust functions
//! and structs wrapped as Python functions and objects.
//!
//! # Error Handling
//!
//! The vast majority of operations in this library will return `PyResult<...>`.
//! This is an alias for the type `Result<..., PyErr>`.
//!
//! A `PyErr` represents a Python exception. Errors within the `PyO3` library are
//! also exposed as Python exceptions.
//!
//! # Examples
//!
//! ## Using Rust from Python
//!
//! PyO3 can be used to generate a native Python module.
//!
//! **`Cargo.toml`**
//!
//! ```toml
//! [package]
//! name = "string-sum"
//! version = "0.1.0"
//! edition = "2018"
//!
//! [lib]
//! name = "string_sum"
//! # "cdylib" is necessary to produce a shared library for Python to import from.
//! #
//! # Downstream Rust code (including code in `bin/`, `examples/`, and `tests/`) will not be able
//! # to `use string_sum;` unless the "rlib" or "lib" crate type is also included, e.g.:
//! # crate-type = ["cdylib", "rlib"]
//! crate-type = ["cdylib"]
//!
//! [dependencies.pyo3]
//! version = "0.13.2"
//! features = ["extension-module"]
//! ```
//!
//! **`src/lib.rs`**
//!
//! ```rust
//! use pyo3::prelude::*;
//! use pyo3::wrap_pyfunction;
//!
//! #[pyfunction]
//! /// Formats the sum of two numbers as string.
//! fn sum_as_string(a: usize, b: usize) -> PyResult<String> {
//!     Ok((a + b).to_string())
//! }
//!
//! #[pymodule]
//! /// A Python module implemented in Rust.
//! fn string_sum(py: Python, m: &PyModule) -> PyResult<()> {
//!     m.add_function(wrap_pyfunction!(sum_as_string, m)?)?;
//!
//!     Ok(())
//! }
//! ```
//!
//! While developing, you symlink (or copy) and rename the shared library from
//! the target folder: On macOS, rename `libstring_sum.dylib` to
//! `string_sum.so`, on Windows `libstring_sum.dll` to `string_sum.pyd` and on
//! Linux `libstring_sum.so` to `string_sum.so`. Then open a Python shell in the
//! same folder and you'll be able to `import string_sum`.
//!
//! To build, test and publish your crate as a Python module, you can use
//! [maturin](https://github.com/PyO3/maturin) or
//! [setuptools-rust](https://github.com/PyO3/setuptools-rust). You can find an
//! example for setuptools-rust in [examples/word-count](examples/word-count),
//! while maturin should work on your crate without any configuration.
//!
//! ## Using Python from Rust
//!
//! Add `pyo3` to your `Cargo.toml`:
//!
//! ```toml
//! [dependencies.pyo3]
//! version = "0.13.2"
//! features = ["auto-initialize"]
//! ```
//!
//! Example program displaying the value of `sys.version`:
//!
//! ```rust
//! use pyo3::prelude::*;
//! use pyo3::types::IntoPyDict;
//!
//! fn main() -> PyResult<()> {
//!     let gil = Python::acquire_gil();
//!     let py = gil.python();
//!     let sys = py.import("sys")?;
//!     let version: String = sys.get("version")?.extract()?;
//!
//!     let locals = [("os", py.import("os")?)].into_py_dict(py);
//!     let code = "os.getenv('USER') or os.getenv('USERNAME') or 'Unknown'";
//!     let user: String = py.eval(code, None, Some(&locals))?.extract()?;
//!
//!     println!("Hello {}, I'm Python {}", user, version);
//!     Ok(())
//! }
//! ```

pub use crate::class::*;
pub use crate::conversion::{
    AsPyPointer, FromPyObject, FromPyPointer, IntoPy, IntoPyPointer, PyTryFrom, PyTryInto,
    ToBorrowedObject, ToPyObject,
};
pub use crate::err::{PyDowncastError, PyErr, PyErrArguments, PyResult};
#[cfg(not(PyPy))]
pub use crate::gil::{prepare_freethreaded_python, with_embedded_python_interpreter};
pub use crate::gil::{GILGuard, GILPool};
pub use crate::instance::{Py, PyNativeType, PyObject};
pub use crate::pycell::{PyCell, PyRef, PyRefMut};
pub use crate::pyclass::PyClass;
pub use crate::pyclass_init::PyClassInitializer;
pub use crate::python::{Python, PythonVersionInfo};
pub use crate::type_object::PyTypeInfo;
// Since PyAny is as important as PyObject, we expose it to the top level.
pub use crate::types::PyAny;

#[cfg(feature = "macros")]
#[doc(hidden)]
pub use {
    indoc,    // Re-exported for py_run
    paste,    // Re-exported for wrap_function
    unindent, // Re-exported for py_run
};

#[cfg(all(feature = "macros", feature = "multiple-pymethods"))]
pub use inventory; // Re-exported for `#[pyclass]` and `#[pymethods]` with `multiple-pymethods`.

#[macro_use]
mod internal_tricks;

// The CPython stable ABI does not include PyBuffer.
#[cfg(not(Py_LIMITED_API))]
pub mod buffer;
#[doc(hidden)]
pub mod callback;
pub mod class;
pub mod conversion;
mod conversions;
#[macro_use]
#[doc(hidden)]
pub mod derive_utils;
mod err;
pub mod exceptions;
pub mod ffi;
pub mod freelist;
mod gil;
mod instance;
#[cfg(not(Py_LIMITED_API))]
pub mod marshal;
pub mod once_cell;
pub mod panic;
pub mod prelude;
pub mod pycell;
pub mod pyclass;
pub mod pyclass_init;
pub mod pyclass_slots;
mod python;
pub mod type_object;
pub mod types;

#[cfg(feature = "serde")]
pub mod serde;

/// The proc macros, which are also part of the prelude.
#[cfg(feature = "macros")]
pub mod proc_macro {
    pub use pyo3_macros::pymodule;
    /// The proc macro attributes
    pub use pyo3_macros::{pyfunction, pyproto};

    #[cfg(not(feature = "multiple-pymethods"))]
    pub use pyo3_macros::{pyclass, pymethods};

    #[cfg(feature = "multiple-pymethods")]
    pub use pyo3_macros::{
        pyclass_with_inventory as pyclass, pymethods_with_inventory as pymethods,
    };
}

/// Returns a function that takes a [Python] instance and returns a Python function.
///
/// Use this together with `#[pyfunction]` and [types::PyModule::add_wrapped].
#[macro_export]
macro_rules! wrap_pyfunction {
    ($function_name: ident) => {{
        &pyo3::paste::expr! { [<__pyo3_get_function_ $function_name>] }
    }};

    ($function_name: ident, $arg: expr) => {
        pyo3::wrap_pyfunction!($function_name)(pyo3::derive_utils::PyFunctionArguments::from($arg))
    };
}

/// Returns the function that is called in the C-FFI.
///
/// Use this together with `#[pyfunction]` and [types::PyCFunction].
/// ```
/// use pyo3::prelude::*;
/// use pyo3::types::PyCFunction;
/// use pyo3::raw_pycfunction;
///
/// #[pyfunction]
/// fn some_fun() -> PyResult<()> {
///     Ok(())
/// }
///
/// #[pymodule]
/// fn module(_py: Python, module: &PyModule) -> PyResult<()> {
///     let ffi_wrapper_fun = raw_pycfunction!(some_fun);
///     let docs = "Some documentation string with null-termination\0";
///     let py_cfunction =
///         PyCFunction::new_with_keywords(ffi_wrapper_fun, "function_name", docs, module.into())?;
///     module.add_function(py_cfunction)
/// }
/// ```
#[macro_export]
macro_rules! raw_pycfunction {
    ($function_name: ident) => {{
        pyo3::paste::expr! { [<__pyo3_raw_ $function_name>] }
    }};
}

/// Returns a function that takes a [Python] instance and returns a Python module.
///
/// Use this together with `#[pymodule]` and [types::PyModule::add_wrapped].
#[macro_export]
macro_rules! wrap_pymodule {
    ($module_name:ident) => {{
        pyo3::paste::expr! {
            &|py| unsafe { pyo3::PyObject::from_owned_ptr(py, [<PyInit_ $module_name>]()) }
        }
    }};
}

/// A convenient macro to execute a Python code snippet, with some local variables set.
///
/// # Panics
/// This macro internally calls [`Python::run`](struct.Python.html#method.run) and panics
/// if it returns `Err`, after printing the error to stdout.
///
/// # Examples
/// ```
/// use pyo3::{prelude::*, py_run, types::PyList};
/// Python::with_gil(|py| {
///     let list = PyList::new(py, &[1, 2, 3]);
///     py_run!(py, list, "assert list == [1, 2, 3]");
/// });
/// ```
///
/// You can use this macro to test pyfunctions or pyclasses quickly.
///
/// ```
/// use pyo3::{prelude::*, py_run, PyCell};
/// #[pyclass]
/// #[derive(Debug)]
/// struct Time {
///     hour: u32,
///     minute: u32,
///     second: u32,
/// }
/// #[pymethods]
/// impl Time {
///     fn repl_japanese(&self) -> String {
///         format!("{}時{}分{}秒", self.hour, self.minute, self.second)
///     }
///     #[getter]
///     fn hour(&self) -> u32 {
///         self.hour
///     }
///     fn as_tuple(&self) -> (u32, u32, u32) {
///         (self.hour, self.minute, self.second)
///     }
/// }
/// Python::with_gil(|py| {
///     let time = PyCell::new(py, Time {hour: 8, minute: 43, second: 16}).unwrap();
///     let time_as_tuple = (8, 43, 16);
///     py_run!(py, time time_as_tuple, r#"
///         assert time.hour == 8
///         assert time.repl_japanese() == "8時43分16秒"
///         assert time.as_tuple() == time_as_tuple
///     "#);
/// });
/// ```
///
/// If you need to prepare the `locals` dict by yourself, you can pass it as `*locals`.
///
/// ```
/// use pyo3::prelude::*;
/// use pyo3::types::IntoPyDict;
/// #[pyclass]
/// struct MyClass {}
/// #[pymethods]
/// impl MyClass {
///     #[new]
///     fn new() -> Self { MyClass {} }
/// }
/// Python::with_gil(|py| {
///    let locals = [("C", py.get_type::<MyClass>())].into_py_dict(py);
///    pyo3::py_run!(py, *locals, "c = C()");
/// });
/// ```
///
/// **Note**
/// Since this macro is intended to use for testing, it **causes panic** when
/// [Python::run] returns `Err` internally.
/// If you need to handle failures, please use [Python::run] directly.
///
#[macro_export]
#[cfg(feature = "macros")]
macro_rules! py_run {
    ($py:expr, $($val:ident)+, $code:literal) => {{
        $crate::py_run_impl!($py, $($val)+, $crate::indoc::indoc!($code))
    }};
    ($py:expr, $($val:ident)+, $code:expr) => {{
        $crate::py_run_impl!($py, $($val)+, &$crate::unindent::unindent($code))
    }};
    ($py:expr, *$dict:expr, $code:literal) => {{
        $crate::py_run_impl!($py, *$dict, $crate::indoc::indoc!($code))
    }};
    ($py:expr, *$dict:expr, $code:expr) => {{
        $crate::py_run_impl!($py, *$dict, &$crate::unindent::unindent($code))
    }};
}

#[macro_export]
#[doc(hidden)]
#[cfg(feature = "macros")]
macro_rules! py_run_impl {
    ($py:expr, $($val:ident)+, $code:expr) => {{
        use $crate::types::IntoPyDict;
        use $crate::ToPyObject;
        let d = [$((stringify!($val), $val.to_object($py)),)+].into_py_dict($py);
        $crate::py_run_impl!($py, *d, $code)
    }};
    ($py:expr, *$dict:expr, $code:expr) => {{
        if let Err(e) = $py.run($code, None, Some($dict)) {
            e.print($py);
            // So when this c api function the last line called printed the error to stderr,
            // the output is only written into a buffer which is never flushed because we
            // panic before flushing. This is where this hack comes into place
            $py.run("import sys; sys.stderr.flush()", None, None)
                .unwrap();
            panic!("{}", $code)
        }
    }};
}

/// Test readme and user guide
#[cfg(doctest)]
pub mod doc_test {
    macro_rules! doctest_impl {
        ($doc:expr, $mod:ident) => {
            #[doc = $doc]
            mod $mod {}
        };
    }

    macro_rules! doctest {
        ($path:expr, $mod:ident) => {
            doctest_impl!(include_str!(concat!("../", $path)), $mod);
        };
    }

    doctest!("README.md", readme_md);
    doctest!("guide/src/advanced.md", guide_advanced_md);
    doctest!(
        "guide/src/building_and_distribution.md",
        guide_building_and_distribution_md
    );
    doctest!(
        "guide/src/building_and_distribution/pypy.md",
        guide_building_and_distribution_pypy_md
    );
    doctest!("guide/src/class.md", guide_class_md);
    doctest!("guide/src/class/protocols.md", guide_class_protocols_md);
    doctest!("guide/src/conversions.md", guide_conversions_md);
    doctest!(
        "guide/src/conversions/tables.md",
        guide_conversions_tables_md
    );
    doctest!(
        "guide/src/conversions/traits.md",
        guide_conversions_traits_md
    );
    doctest!("guide/src/debugging.md", guide_debugging_md);
    doctest!("guide/src/exception.md", guide_exception_md);
    doctest!("guide/src/function.md", guide_function_md);
    doctest!("guide/src/migration.md", guide_migration_md);
    doctest!("guide/src/module.md", guide_module_md);
    doctest!("guide/src/parallelism.md", guide_parallelism_md);
    doctest!("guide/src/python_from_rust.md", guide_python_from_rust_md);
    doctest!("guide/src/rust_cpython.md", guide_rust_cpython_md);
    doctest!("guide/src/trait_bounds.md", guide_trait_bounds_md);
    doctest!("guide/src/types.md", guide_types_md);
}
