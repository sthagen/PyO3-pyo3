// Copyright (c) 2017-present PyO3 Project and Contributors
//
// based on Daniel Grunwald's https://github.com/dgrunwald/rust-cpython

use crate::err::{self, PyDowncastError, PyErr, PyResult};
use crate::gil::{self, GILGuard, GILPool};
use crate::type_object::{PyTypeInfo, PyTypeObject};
use crate::types::{PyAny, PyDict, PyModule, PyType};
use crate::{ffi, AsPyPointer, FromPyPointer, IntoPyPointer, PyNativeType, PyObject, PyTryFrom};
use std::ffi::{CStr, CString};
use std::marker::PhantomData;
use std::os::raw::{c_char, c_int};

/// Represents the major, minor, and patch (if any) versions of this interpreter.
///
/// See [Python::version].
#[derive(Debug)]
pub struct PythonVersionInfo<'py> {
    /// Python major version (e.g. `3`).
    pub major: u8,
    /// Python minor version (e.g. `11`).
    pub minor: u8,
    /// Python patch version (e.g. `0`).
    pub patch: u8,
    /// Python version suffix, if applicable (e.g. `a0`).
    pub suffix: Option<&'py str>,
}

impl<'py> PythonVersionInfo<'py> {
    /// Parses a hard-coded Python interpreter version string (e.g. 3.9.0a4+).
    ///
    /// Panics if the string is ill-formatted.
    fn from_str(version_number_str: &'py str) -> Self {
        fn split_and_parse_number(version_part: &str) -> (u8, Option<&str>) {
            match version_part.find(|c: char| !c.is_ascii_digit()) {
                None => (version_part.parse().unwrap(), None),
                Some(version_part_suffix_start) => {
                    let (version_part, version_part_suffix) =
                        version_part.split_at(version_part_suffix_start);
                    (version_part.parse().unwrap(), Some(version_part_suffix))
                }
            }
        }

        let mut parts = version_number_str.split('.');
        let major_str = parts.next().expect("Python major version missing");
        let minor_str = parts.next().expect("Python minor version missing");
        let patch_str = parts.next();
        assert!(
            parts.next().is_none(),
            "Python version string has too many parts"
        );

        let major = major_str
            .parse()
            .expect("Python major version not an integer");
        let (minor, suffix) = split_and_parse_number(minor_str);
        if suffix.is_some() {
            assert!(patch_str.is_none());
            return PythonVersionInfo {
                major,
                minor,
                patch: 0,
                suffix,
            };
        }

        let (patch, suffix) = patch_str.map(split_and_parse_number).unwrap_or_default();
        PythonVersionInfo {
            major,
            minor,
            patch,
            suffix,
        }
    }
}

impl PartialEq<(u8, u8)> for PythonVersionInfo<'_> {
    fn eq(&self, other: &(u8, u8)) -> bool {
        self.major == other.0 && self.minor == other.1
    }
}

impl PartialEq<(u8, u8, u8)> for PythonVersionInfo<'_> {
    fn eq(&self, other: &(u8, u8, u8)) -> bool {
        self.major == other.0 && self.minor == other.1 && self.patch == other.2
    }
}

impl PartialOrd<(u8, u8)> for PythonVersionInfo<'_> {
    fn partial_cmp(&self, other: &(u8, u8)) -> Option<std::cmp::Ordering> {
        (self.major, self.minor).partial_cmp(other)
    }
}

impl PartialOrd<(u8, u8, u8)> for PythonVersionInfo<'_> {
    fn partial_cmp(&self, other: &(u8, u8, u8)) -> Option<std::cmp::Ordering> {
        (self.major, self.minor, self.patch).partial_cmp(other)
    }
}

/// A marker token that represents holding the GIL.
///
/// It serves three main purposes:
/// - It provides a global API for the Python interpreter, such as [`Python::eval`].
/// - It can be passed to functions that require a proof of holding the GIL, such as
/// [`Py::clone_ref`].
/// - Its lifetime represents the scope of holding the GIL which can be used to create Rust
/// references that are bound to it, such as `&`[`PyAny`].
///
/// Note that there are some caveats to using it that you might need to be aware of. See the
/// [Deadlocks](#deadlocks) and [Releasing and freeing memory](#releasing-and-freeing-memory)
/// paragraphs for more information about that.
///
/// # Obtaining a Python token
///
/// The following are the recommended ways to obtain a [`Python`] token, in order of preference:
/// - In a function or method annotated with [`#[pyfunction]`](crate::pyfunction) or [`#[pymethods]`](crate::pymethods) you can declare it
/// as a parameter, and PyO3 will pass in the token when Python code calls it.
/// - If you already have something with a lifetime bound to the GIL, such as `&`[`PyAny`], you can
/// use its [`.py()`][PyAny::py] method to get a token.
/// - When you need to acquire the GIL yourself, such as when calling Python code from Rust, you
/// should call [`Python::with_gil`] to do that and pass your code as a closure to it.
///
/// # Deadlocks
///
/// Note that the GIL can be temporarily released by the Python interpreter during a function call
/// (e.g. importing a module). In general, you don't need to worry about this because the GIL is
/// reacquired before returning to the Rust code:
///
/// ```text
/// `Python` exists   |=====================================|
/// GIL actually held |==========|         |================|
/// Rust code running |=======|                |==|  |======|
/// ```
///
/// This behaviour can cause deadlocks when trying to lock a Rust mutex while holding the GIL:
///
///  * Thread 1 acquires the GIL
///  * Thread 1 locks a mutex
///  * Thread 1 makes a call into the Python interpreter which releases the GIL
///  * Thread 2 acquires the GIL
///  * Thread 2 tries to locks the mutex, blocks
///  * Thread 1's Python interpreter call blocks trying to reacquire the GIL held by thread 2
///
/// To avoid deadlocking, you should release the GIL before trying to lock a mutex or `await`ing in
/// asynchronous code, e.g. with [`Python::allow_threads`].
///
/// # Releasing and freeing memory
///
/// The [`Python`] type can be used to create references to variables owned by the Python
/// interpreter, using functions such as [`Python::eval`] and [`PyModule::import`]. These
/// references are tied to a [`GILPool`] whose references are not cleared until it is dropped.
/// This can cause apparent "memory leaks" if it is kept around for a long time.
///
/// ```rust
/// use pyo3::prelude::*;
/// use pyo3::types::PyString;
///
/// # fn main () -> PyResult<()> {
/// Python::with_gil(|py| -> PyResult<()> {
///     for _ in 0..10 {
///         let hello: &PyString = py.eval("\"Hello World!\"", None, None)?.extract()?;
///         println!("Python says: {}", hello.to_str()?);
///         // Normally variables in a loop scope are dropped here, but `hello` is a reference to
///         // something owned by the Python interpreter. Dropping this reference does nothing.
///     }
///     Ok(())
/// })
/// // This is where the `hello`'s reference counts start getting decremented.
/// # }
/// ```
///
/// The variable `hello` is dropped at the end of each loop iteration, but the lifetime of the
/// pointed-to memory is bound to [`Python::with_gil`]'s [`GILPool`] which will not be dropped until
/// the end of [`Python::with_gil`]'s scope. Only then is each `hello`'s Python reference count
/// decreased. This means that at the last line of the example there are 10 copies of `hello` in
/// Python's memory, not just one at a time as we might expect from Rust's [scoping rules].
///
/// See the [Memory Management] chapter of the guide for more information about how PyO3 uses
/// [`GILPool`] to manage memory.
///
/// [scoping rules]: https://doc.rust-lang.org/stable/book/ch04-01-what-is-ownership.html#ownership-rules
/// [`Py::clone_ref`]: crate::Py::clone_ref
/// [Memory Management]: https://pyo3.rs/main/memory.html#gil-bound-memory
#[derive(Copy, Clone)]
pub struct Python<'py>(PhantomData<&'py GILGuard>);

impl Python<'_> {
    /// Acquires the global interpreter lock, allowing access to the Python interpreter. The
    /// provided closure `F` will be executed with the acquired `Python` marker token.
    ///
    /// If the [`auto-initialize`] feature is enabled and the Python runtime is not already
    /// initialized, this function will initialize it. See
    #[cfg_attr(
        not(PyPy),
        doc = "[`prepare_freethreaded_python`](crate::prepare_freethreaded_python)"
    )]
    #[cfg_attr(PyPy, doc = "`prepare_freethreaded_python`")]
    /// for details.
    ///
    /// # Panics
    ///
    /// - If the [`auto-initialize`] feature is not enabled and the Python interpreter is not
    ///   initialized.
    ///
    /// # Examples
    ///
    /// ```
    /// use pyo3::prelude::*;
    ///
    /// # fn main() -> PyResult<()> {
    /// Python::with_gil(|py| -> PyResult<()> {
    ///     let x: i32 = py.eval("5", None, None)?.extract()?;
    ///     assert_eq!(x, 5);
    ///     Ok(())
    /// })
    /// # }
    /// ```
    ///
    /// [`auto-initialize`]: https://pyo3.rs/main/features.html#auto-initialize
    #[inline]
    pub fn with_gil<F, R>(f: F) -> R
    where
        F: for<'py> FnOnce(Python<'py>) -> R,
    {
        f(unsafe { gil::ensure_gil().python() })
    }

    /// Like [`Python::with_gil`] except Python interpreter state checking is skipped.
    ///
    /// Normally when the GIL is acquired, we check that the Python interpreter is an
    /// appropriate state (e.g. it is fully initialized). This function skips those
    /// checks.
    ///
    /// # Safety
    ///
    /// If [`Python::with_gil`] would succeed, it is safe to call this function.
    ///
    /// In most cases, you should use [`Python::with_gil`].
    ///
    /// A justified scenario for calling this function is during multi-phase interpreter
    /// initialization when [`Python::with_gil`] would fail before
    // this link is only valid on 3.8+not pypy and up.
    #[cfg_attr(
        all(Py_3_8, not(PyPy)),
        doc = "[`_Py_InitializeMain`](crate::ffi::_Py_InitializeMain)"
    )]
    #[cfg_attr(any(not(Py_3_8), PyPy), doc = "`_Py_InitializeMain`")]
    /// is called because the interpreter is only partially initialized.
    ///
    /// Behavior in other scenarios is not documented.
    #[inline]
    pub unsafe fn with_gil_unchecked<F, R>(f: F) -> R
    where
        F: for<'py> FnOnce(Python<'py>) -> R,
    {
        f(gil::ensure_gil_unchecked().python())
    }
}

impl<'py> Python<'py> {
    /// Acquires the global interpreter lock, allowing access to the Python interpreter.
    ///
    /// If the [`auto-initialize`] feature is enabled and the Python runtime is not already
    /// initialized, this function will initialize it. See
    #[cfg_attr(
        not(PyPy),
        doc = "[`prepare_freethreaded_python`](crate::prepare_freethreaded_python)"
    )]
    #[cfg_attr(PyPy, doc = "`prepare_freethreaded_python`")]
    /// for details.
    ///
    /// Most users should not need to use this API directly, and should prefer one of two options:
    /// 1. If implementing [`#[pymethods]`](crate::pymethods) or [`#[pyfunction]`](crate::pyfunction),  declare `py: Python` as an argument.
    /// PyO3 will pass in the token to grant access to the GIL context in which the function is running.
    /// 2. Use [`Python::with_gil`] to run a closure with the GIL, acquiring only if needed.
    ///
    /// # Panics
    ///
    /// - If the [`auto-initialize`] feature is not enabled and the Python interpreter is not
    /// initialized.
    /// - If multiple [`GILGuard`]s are not dropped in in the reverse order of acquisition, PyO3
    /// may panic. It is recommended to use [`Python::with_gil`] instead to avoid this.
    ///
    /// # Notes
    ///
    /// The return type from this function, [`GILGuard`], is implemented as a RAII guard
    /// around [`PyGILState_Ensure`]. This means that multiple `acquire_gil()` calls are
    /// allowed, and will not deadlock. However, [`GILGuard`]s must be dropped in the reverse order
    /// to acquisition. If PyO3 detects this order is not maintained, it will panic when the out-of-order drop occurs.
    ///
    /// [`PyGILState_Ensure`]: crate::ffi::PyGILState_Ensure
    /// [`auto-initialize`]: https://pyo3.rs/main/features.html#auto-initialize
    #[inline]
    pub fn acquire_gil() -> GILGuard {
        GILGuard::acquire()
    }

    /// Temporarily releases the GIL, thus allowing other Python threads to run. The GIL will be
    /// reacquired when `F`'s scope ends.
    ///
    /// If you don't need to touch the Python
    /// interpreter for some time and have other Python threads around, this will let you run
    /// Rust-only code while letting those other Python threads make progress.
    ///
    /// The closure is impermeable to types that are tied to holding the GIL, such as `&`[`PyAny`]
    /// and its concrete-typed siblings like `&`[`PyString`]. This is achieved via the [`Send`]
    /// bound on the closure and the return type. This is slightly
    /// more restrictive than necessary, but it's the most fitting solution available in stable
    /// Rust. In the future this bound may be relaxed by using an "auto-trait" instead, if
    /// [auto-traits] ever become a stable feature of the Rust language.
    ///
    /// If you need to pass Python objects into the closure you can use [`Py`]`<T>`to create a
    /// reference independent of the GIL lifetime. However, you cannot do much with those without a
    /// [`Python`] token, for which you'd need to reacquire the GIL.
    ///
    /// # Example: Releasing the GIL while running a computation in Rust-only code
    ///
    /// ```
    /// use pyo3::prelude::*;
    ///
    /// #[pyfunction]
    /// fn sum_numbers(py: Python<'_>, numbers: Vec<u32>) -> PyResult<u32> {
    ///     // We release the GIL here so any other Python threads get a chance to run.
    ///     py.allow_threads(move || {
    ///         // An example of an "expensive" Rust calculation
    ///         let sum = numbers.iter().sum();
    ///
    ///         Ok(sum)
    ///     })
    /// }
    /// #
    /// # fn main() -> PyResult<()> {
    /// #     Python::with_gil(|py| -> PyResult<()> {
    /// #         let fun = pyo3::wrap_pyfunction!(sum_numbers, py)?;
    /// #         let res = fun.call1((vec![1_u32, 2, 3],))?;
    /// #         assert_eq!(res.extract::<u32>()?, 6_u32);
    /// #         Ok(())
    /// #     })
    /// # }
    /// ```
    ///
    /// Please see the [Parallelism] chapter of the guide for a thorough discussion of using
    /// [`Python::allow_threads`] in this manner.
    ///
    /// # Example: Passing borrowed Python references into the closure is not allowed
    ///
    /// ```compile_fail
    /// use pyo3::prelude::*;
    /// use pyo3::types::PyString;
    ///
    /// fn parallel_print(py: Python<'_>) {
    ///     let s = PyString::new(py, "This object cannot be accessed without holding the GIL >_<");
    ///     py.allow_threads(move || {
    ///         println!("{:?}", s); // This causes a compile error.
    ///     });
    /// }
    /// ```
    ///
    /// [`Py`]: crate::Py
    /// [`PyString`]: crate::types::PyString
    /// [auto-traits]: https://doc.rust-lang.org/nightly/unstable-book/language-features/auto-traits.html
    /// [Parallelism]: https://pyo3.rs/main/parallelism.html
    pub fn allow_threads<T, F>(self, f: F) -> T
    where
        F: Send + FnOnce() -> T,
        T: Send,
    {
        // Use a guard pattern to handle reacquiring the GIL, so that the GIL will be reacquired
        // even if `f` panics.

        struct RestoreGuard {
            count: usize,
            tstate: *mut ffi::PyThreadState,
        }

        impl Drop for RestoreGuard {
            fn drop(&mut self) {
                gil::GIL_COUNT.with(|c| c.set(self.count));
                unsafe {
                    ffi::PyEval_RestoreThread(self.tstate);
                }
            }
        }

        // The `Send` bound on the closure prevents the user from
        // transferring the `Python` token into the closure.
        let count = gil::GIL_COUNT.with(|c| c.replace(0));
        let tstate = unsafe { ffi::PyEval_SaveThread() };

        let _guard = RestoreGuard { count, tstate };
        f()
    }

    /// Evaluates a Python expression in the given context and returns the result.
    ///
    /// If `globals` is `None`, it defaults to Python module `__main__`.
    /// If `locals` is `None`, it defaults to the value of `globals`.
    ///
    /// # Examples
    ///
    /// ```
    /// # use pyo3::prelude::*;
    /// # Python::with_gil(|py| {
    /// let result = py.eval("[i * 10 for i in range(5)]", None, None).unwrap();
    /// let res: Vec<i64> = result.extract().unwrap();
    /// assert_eq!(res, vec![0, 10, 20, 30, 40])
    /// # });
    /// ```
    pub fn eval(
        self,
        code: &str,
        globals: Option<&PyDict>,
        locals: Option<&PyDict>,
    ) -> PyResult<&'py PyAny> {
        self.run_code(code, ffi::Py_eval_input, globals, locals)
    }

    /// Executes one or more Python statements in the given context.
    ///
    /// If `globals` is `None`, it defaults to Python module `__main__`.
    /// If `locals` is `None`, it defaults to the value of `globals`.
    ///
    /// # Examples
    /// ```
    /// use pyo3::{
    ///     prelude::*,
    ///     types::{PyBytes, PyDict},
    /// };
    /// Python::with_gil(|py| {
    ///     let locals = PyDict::new(py);
    ///     py.run(
    ///         r#"
    /// import base64
    /// s = 'Hello Rust!'
    /// ret = base64.b64encode(s.encode('utf-8'))
    /// "#,
    ///         None,
    ///         Some(locals),
    ///     )
    ///     .unwrap();
    ///     let ret = locals.get_item("ret").unwrap();
    ///     let b64: &PyBytes = ret.downcast().unwrap();
    ///     assert_eq!(b64.as_bytes(), b"SGVsbG8gUnVzdCE=");
    /// });
    /// ```
    ///
    /// You can use [`py_run!`](macro.py_run.html) for a handy alternative of `run`
    /// if you don't need `globals` and unwrapping is OK.
    pub fn run(
        self,
        code: &str,
        globals: Option<&PyDict>,
        locals: Option<&PyDict>,
    ) -> PyResult<()> {
        let res = self.run_code(code, ffi::Py_file_input, globals, locals);
        res.map(|obj| {
            debug_assert!(obj.is_none());
        })
    }

    /// Runs code in the given context.
    ///
    /// `start` indicates the type of input expected: one of `Py_single_input`,
    /// `Py_file_input`, or `Py_eval_input`.
    ///
    /// If `globals` is `None`, it defaults to Python module `__main__`.
    /// If `locals` is `None`, it defaults to the value of `globals`.
    fn run_code(
        self,
        code: &str,
        start: c_int,
        globals: Option<&PyDict>,
        locals: Option<&PyDict>,
    ) -> PyResult<&'py PyAny> {
        let code = CString::new(code)?;
        unsafe {
            let mptr = ffi::PyImport_AddModule("__main__\0".as_ptr() as *const _);
            if mptr.is_null() {
                return Err(PyErr::fetch(self));
            }

            let globals = globals
                .map(AsPyPointer::as_ptr)
                .unwrap_or_else(|| ffi::PyModule_GetDict(mptr));
            let locals = locals.map(AsPyPointer::as_ptr).unwrap_or(globals);

            let code_obj = ffi::Py_CompileString(code.as_ptr(), "<string>\0".as_ptr() as _, start);
            if code_obj.is_null() {
                return Err(PyErr::fetch(self));
            }
            let res_ptr = ffi::PyEval_EvalCode(code_obj, globals, locals);
            ffi::Py_DECREF(code_obj);

            self.from_owned_ptr_or_err(res_ptr)
        }
    }

    /// Gets the Python type object for type `T`.
    pub fn get_type<T>(self) -> &'py PyType
    where
        T: PyTypeObject,
    {
        T::type_object(self)
    }

    /// Imports the Python module with the specified name.
    pub fn import(self, name: &str) -> PyResult<&'py PyModule> {
        PyModule::import(self, name)
    }

    /// Gets the Python builtin value `None`.
    #[allow(non_snake_case)] // the Python keyword starts with uppercase
    #[inline]
    pub fn None(self) -> PyObject {
        unsafe { PyObject::from_borrowed_ptr(self, ffi::Py_None()) }
    }

    /// Gets the Python builtin value `NotImplemented`.
    #[allow(non_snake_case)] // the Python keyword starts with uppercase
    #[inline]
    pub fn NotImplemented(self) -> PyObject {
        unsafe { PyObject::from_borrowed_ptr(self, ffi::Py_NotImplemented()) }
    }

    /// Gets the running Python interpreter version as a string.
    ///
    /// # Examples
    /// ```rust
    /// # use pyo3::Python;
    /// Python::with_gil(|py| {
    ///     // The full string could be, for example:
    ///     // "3.0a5+ (py3k:63103M, May 12 2008, 00:53:55) \n[GCC 4.2.3]"
    ///     assert!(py.version().starts_with("3."));
    /// });
    /// ```
    pub fn version(self) -> &'py str {
        unsafe {
            CStr::from_ptr(ffi::Py_GetVersion() as *const c_char)
                .to_str()
                .expect("Python version string not UTF-8")
        }
    }

    /// Gets the running Python interpreter version as a struct similar to
    /// `sys.version_info`.
    ///
    /// # Examples
    /// ```rust
    /// # use pyo3::Python;
    /// Python::with_gil(|py| {
    ///     // PyO3 supports Python 3.6 and up.
    ///     assert!(py.version_info() >= (3, 6));
    ///     assert!(py.version_info() >= (3, 6, 0));
    /// });
    /// ```
    pub fn version_info(self) -> PythonVersionInfo<'py> {
        let version_str = self.version();

        // Portion of the version string returned by Py_GetVersion up to the first space is the
        // version number.
        let version_number_str = version_str.split(' ').next().unwrap_or(version_str);

        PythonVersionInfo::from_str(version_number_str)
    }

    /// Registers the object in the release pool, and tries to downcast to specific type.
    pub fn checked_cast_as<T>(self, obj: PyObject) -> Result<&'py T, PyDowncastError<'py>>
    where
        T: PyTryFrom<'py>,
    {
        let any: &PyAny = unsafe { self.from_owned_ptr(obj.into_ptr()) };
        <T as PyTryFrom>::try_from(any)
    }

    /// Registers the object in the release pool, and does an unchecked downcast
    /// to the specific type.
    ///
    /// # Safety
    ///
    /// Callers must ensure that ensure that the cast is valid.
    pub unsafe fn cast_as<T>(self, obj: PyObject) -> &'py T
    where
        T: PyNativeType + PyTypeInfo,
    {
        let any: &PyAny = self.from_owned_ptr(obj.into_ptr());
        T::unchecked_downcast(any)
    }

    /// Registers the object pointer in the release pool,
    /// and does an unchecked downcast to the specific type.
    ///
    /// # Safety
    ///
    /// Callers must ensure that ensure that the cast is valid.
    #[allow(clippy::wrong_self_convention)]
    pub unsafe fn from_owned_ptr<T>(self, ptr: *mut ffi::PyObject) -> &'py T
    where
        T: FromPyPointer<'py>,
    {
        FromPyPointer::from_owned_ptr(self, ptr)
    }

    /// Registers the owned object pointer in the release pool.
    ///
    /// Returns `Err(PyErr)` if the pointer is NULL.
    /// Does an unchecked downcast to the specific type.
    ///
    /// # Safety
    ///
    /// Callers must ensure that ensure that the cast is valid.
    #[allow(clippy::wrong_self_convention)]
    pub unsafe fn from_owned_ptr_or_err<T>(self, ptr: *mut ffi::PyObject) -> PyResult<&'py T>
    where
        T: FromPyPointer<'py>,
    {
        FromPyPointer::from_owned_ptr_or_err(self, ptr)
    }

    /// Registers the owned object pointer in release pool.
    ///
    /// Returns `None` if the pointer is NULL.
    /// Does an unchecked downcast to the specific type.
    ///
    /// # Safety
    ///
    /// Callers must ensure that ensure that the cast is valid.
    #[allow(clippy::wrong_self_convention)]
    pub unsafe fn from_owned_ptr_or_opt<T>(self, ptr: *mut ffi::PyObject) -> Option<&'py T>
    where
        T: FromPyPointer<'py>,
    {
        FromPyPointer::from_owned_ptr_or_opt(self, ptr)
    }

    /// Does an unchecked downcast to the specific type.
    ///
    /// Panics if the pointer is NULL.
    ///
    /// # Safety
    ///
    /// Callers must ensure that ensure that the cast is valid.
    #[allow(clippy::wrong_self_convention)]
    pub unsafe fn from_borrowed_ptr<T>(self, ptr: *mut ffi::PyObject) -> &'py T
    where
        T: FromPyPointer<'py>,
    {
        FromPyPointer::from_borrowed_ptr(self, ptr)
    }

    /// Does an unchecked downcast to the specific type.
    ///
    /// Returns `Err(PyErr)` if the pointer is NULL.
    ///
    /// # Safety
    ///
    /// Callers must ensure that ensure that the cast is valid.
    #[allow(clippy::wrong_self_convention)]
    pub unsafe fn from_borrowed_ptr_or_err<T>(self, ptr: *mut ffi::PyObject) -> PyResult<&'py T>
    where
        T: FromPyPointer<'py>,
    {
        FromPyPointer::from_borrowed_ptr_or_err(self, ptr)
    }

    /// Does an unchecked downcast to the specific type.
    ///
    /// Returns `None` if the pointer is NULL.
    ///
    /// # Safety
    ///
    /// Callers must ensure that ensure that the cast is valid.
    #[allow(clippy::wrong_self_convention)]
    pub unsafe fn from_borrowed_ptr_or_opt<T>(self, ptr: *mut ffi::PyObject) -> Option<&'py T>
    where
        T: FromPyPointer<'py>,
    {
        FromPyPointer::from_borrowed_ptr_or_opt(self, ptr)
    }

    /// Lets the Python interpreter check and handle any pending signals. This will invoke the
    /// corresponding signal handlers registered in Python (if any).
    ///
    /// Returns `Err(`[`PyErr`]`)` if any signal handler raises an exception.
    ///
    /// These signals include `SIGINT` (normally raised by CTRL + C), which by default raises
    /// `KeyboardInterrupt`. For this reason it is good practice to call this function regularly
    /// as part of long-running Rust functions so that users can cancel it.
    ///
    /// # Example
    ///
    /// ```rust
    /// # #![allow(dead_code)] // this example is quite impractical to test
    /// use pyo3::prelude::*;
    ///
    /// # fn main(){
    /// #[pyfunction]
    /// fn loop_forever(py: Python) -> PyResult<()> {
    ///     loop {
    ///         // As this loop is infinite it should check for signals every once in a while.
    ///         // Using `?` causes any `PyErr` (potentially containing `KeyboardInterrupt`)
    ///         // to break out of the loop.
    ///         py.check_signals()?;
    ///
    ///         // do work here
    ///         # break Ok(()) // don't actually loop forever
    ///     }
    /// }
    /// # }
    /// ```
    ///
    /// # Note
    ///
    /// This function calls [`PyErr_CheckSignals()`][1] which in turn may call signal handlers.
    /// As Python's [`signal`][2] API allows users to define custom signal handlers, calling this
    /// function allows arbitary Python code inside signal handlers to run.
    ///
    /// [1]: https://docs.python.org/3/c-api/exceptions.html?highlight=pyerr_checksignals#c.PyErr_CheckSignals
    /// [2]: https://docs.python.org/3/library/signal.html
    pub fn check_signals(self) -> PyResult<()> {
        let v = unsafe { ffi::PyErr_CheckSignals() };
        err::error_on_minusone(self, v)
    }

    /// Retrieves a Python instance under the assumption that the GIL is already
    /// acquired at this point, and stays acquired for the lifetime `'py`.
    ///
    /// Because the output lifetime `'py` is not connected to any input parameter,
    /// care must be taken that the compiler infers an appropriate lifetime for `'py`
    /// when calling this function.
    ///
    /// # Safety
    ///
    /// The lifetime `'py` must be shorter than the period you *assume* that you have GIL.
    /// I.e., `Python<'static>` is always *really* unsafe.
    #[inline]
    pub unsafe fn assume_gil_acquired() -> Python<'py> {
        Python(PhantomData)
    }

    /// Create a new pool for managing PyO3's owned references.
    ///
    /// When this `GILPool` is dropped, all PyO3 owned references created after this `GILPool` will
    /// all have their Python reference counts decremented, potentially allowing Python to drop
    /// the corresponding Python objects.
    ///
    /// Typical usage of PyO3 will not need this API, as [`Python::with_gil`] and
    /// [`Python::acquire_gil`] automatically create a `GILPool` where appropriate.
    ///
    /// Advanced uses of PyO3 which perform long-running tasks which never free the GIL may need
    /// to use this API to clear memory, as PyO3 usually does not clear memory until the GIL is
    /// released.
    ///
    /// # Examples
    ///
    /// ```rust
    /// # use pyo3::prelude::*;
    /// Python::with_gil(|py| {
    ///     // Some long-running process like a webserver, which never releases the GIL.
    ///     loop {
    ///         // Create a new pool, so that PyO3 can clear memory at the end of the loop.
    ///         let pool = unsafe { py.new_pool() };
    ///
    ///         // It is recommended to *always* immediately set py to the pool's Python, to help
    ///         // avoid creating references with invalid lifetimes.
    ///         let py = pool.python();
    ///
    ///         // do stuff...
    /// #       break;  // Exit the loop so that doctest terminates!
    ///     }
    /// });
    /// ```
    ///
    /// # Safety
    ///
    /// Extreme care must be taken when using this API, as misuse can lead to accessing invalid
    /// memory. In addition, the caller is responsible for guaranteeing that the GIL remains held
    /// for the entire lifetime of the returned `GILPool`.
    ///
    /// Two best practices are required when using this API:
    /// - From the moment `new_pool()` is called, only the `Python` token from the returned
    ///   `GILPool` (accessible using [`.python()`]) should be used in PyO3 APIs. All other older
    ///   `Python` tokens with longer lifetimes are unsafe to use until the `GILPool` is dropped,
    ///   because they can be used to create PyO3 owned references which have lifetimes which
    ///   outlive the `GILPool`.
    /// - Similarly, methods on existing owned references will implicitly refer back to the
    ///   `Python` token which that reference was originally created with. If the returned values
    ///   from these methods are owned references they will inherit the same lifetime. As a result,
    ///   Rust's lifetime rules may allow them to outlive the `GILPool`, even though this is not
    ///   safe for reasons discussed above. Care must be taken to never access these return values
    ///   after the `GILPool` is dropped, unless they are converted to `Py<T>` *before* the pool
    ///   is dropped.
    ///
    /// [`.python()`]: crate::GILPool::python
    #[inline]
    pub unsafe fn new_pool(self) -> GILPool {
        GILPool::new()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::types::{IntoPyDict, PyList};

    #[test]
    fn test_eval() {
        Python::with_gil(|py| {
            // Make sure builtin names are accessible
            let v: i32 = py
                .eval("min(1, 2)", None, None)
                .map_err(|e| e.print(py))
                .unwrap()
                .extract()
                .unwrap();
            assert_eq!(v, 1);

            let d = [("foo", 13)].into_py_dict(py);

            // Inject our own global namespace
            let v: i32 = py
                .eval("foo + 29", Some(d), None)
                .unwrap()
                .extract()
                .unwrap();
            assert_eq!(v, 42);

            // Inject our own local namespace
            let v: i32 = py
                .eval("foo + 29", None, Some(d))
                .unwrap()
                .extract()
                .unwrap();
            assert_eq!(v, 42);

            // Make sure builtin names are still accessible when using a local namespace
            let v: i32 = py
                .eval("min(foo, 2)", None, Some(d))
                .unwrap()
                .extract()
                .unwrap();
            assert_eq!(v, 2);
        });
    }

    #[test]
    fn test_allow_threads_releases_and_acquires_gil() {
        Python::with_gil(|py| {
            let b = std::sync::Arc::new(std::sync::Barrier::new(2));

            let b2 = b.clone();
            std::thread::spawn(move || Python::with_gil(|_| b2.wait()));

            py.allow_threads(|| {
                // If allow_threads does not release the GIL, this will deadlock because
                // the thread spawned above will never be able to acquire the GIL.
                b.wait();
            });

            unsafe {
                // If the GIL is not reacquired at the end of allow_threads, this call
                // will crash the Python interpreter.
                let tstate = ffi::PyEval_SaveThread();
                ffi::PyEval_RestoreThread(tstate);
            }
        });
    }

    #[test]
    fn test_allow_threads_panics_safely() {
        Python::with_gil(|py| {
            let result = std::panic::catch_unwind(|| unsafe {
                let py = Python::assume_gil_acquired();
                py.allow_threads(|| {
                    panic!("There was a panic!");
                });
            });

            // Check panic was caught
            assert!(result.is_err());

            // If allow_threads is implemented correctly, this thread still owns the GIL here
            // so the following Python calls should not cause crashes.
            let list = PyList::new(py, &[1, 2, 3, 4]);
            assert_eq!(list.extract::<Vec<i32>>().unwrap(), vec![1, 2, 3, 4]);
        });
    }

    #[test]
    fn test_python_version_info() {
        Python::with_gil(|py| {
            let version = py.version_info();
            #[cfg(Py_3_6)]
            assert!(version >= (3, 6));
            #[cfg(Py_3_6)]
            assert!(version >= (3, 6, 0));
            #[cfg(Py_3_7)]
            assert!(version >= (3, 7));
            #[cfg(Py_3_7)]
            assert!(version >= (3, 7, 0));
            #[cfg(Py_3_8)]
            assert!(version >= (3, 8));
            #[cfg(Py_3_8)]
            assert!(version >= (3, 8, 0));
            #[cfg(Py_3_9)]
            assert!(version >= (3, 9));
            #[cfg(Py_3_9)]
            assert!(version >= (3, 9, 0));
        });
    }

    #[test]
    fn test_python_version_info_parse() {
        assert!(PythonVersionInfo::from_str("3.5.0a1") >= (3, 5, 0));
        assert!(PythonVersionInfo::from_str("3.5+") >= (3, 5, 0));
        assert!(PythonVersionInfo::from_str("3.5+") == (3, 5, 0));
        assert!(PythonVersionInfo::from_str("3.5+") != (3, 5, 1));
        assert!(PythonVersionInfo::from_str("3.5.2a1+") < (3, 5, 3));
        assert!(PythonVersionInfo::from_str("3.5.2a1+") == (3, 5, 2));
        assert!(PythonVersionInfo::from_str("3.5.2a1+") == (3, 5));
        assert!(PythonVersionInfo::from_str("3.5+") == (3, 5));
        assert!(PythonVersionInfo::from_str("3.5.2a1+") < (3, 6));
        assert!(PythonVersionInfo::from_str("3.5.2a1+") > (3, 4));
    }

    #[test]
    #[cfg(not(Py_LIMITED_API))]
    fn test_acquire_gil() {
        const GIL_NOT_HELD: c_int = 0;
        const GIL_HELD: c_int = 1;

        let state = unsafe { crate::ffi::PyGILState_Check() };
        assert_eq!(state, GIL_NOT_HELD);

        {
            let gil = Python::acquire_gil();
            let _py = gil.python();
            let state = unsafe { crate::ffi::PyGILState_Check() };
            assert_eq!(state, GIL_HELD);
            drop(gil);
        }

        let state = unsafe { crate::ffi::PyGILState_Check() };
        assert_eq!(state, GIL_NOT_HELD);
    }
}
