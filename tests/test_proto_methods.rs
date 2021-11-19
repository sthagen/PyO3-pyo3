use pyo3::exceptions::PyValueError;
use pyo3::types::{PyList, PySlice, PyType};
use pyo3::{exceptions::PyAttributeError, prelude::*};
use pyo3::{ffi, py_run, AsPyPointer, PyCell};
use std::{isize, iter};

mod common;

#[pyclass]
struct EmptyClass;

#[pyclass]
struct ExampleClass {
    #[pyo3(get, set)]
    value: i32,
    _custom_attr: Option<i32>,
}

#[pymethods]
impl ExampleClass {
    fn __getattr__(&self, py: Python, attr: &str) -> PyResult<PyObject> {
        if attr == "special_custom_attr" {
            Ok(self._custom_attr.into_py(py))
        } else {
            Err(PyAttributeError::new_err(attr.to_string()))
        }
    }

    fn __setattr__(&mut self, attr: &str, value: &PyAny) -> PyResult<()> {
        if attr == "special_custom_attr" {
            self._custom_attr = Some(value.extract()?);
            Ok(())
        } else {
            Err(PyAttributeError::new_err(attr.to_string()))
        }
    }

    fn __delattr__(&mut self, attr: &str) -> PyResult<()> {
        if attr == "special_custom_attr" {
            self._custom_attr = None;
            Ok(())
        } else {
            Err(PyAttributeError::new_err(attr.to_string()))
        }
    }

    fn __str__(&self) -> String {
        self.value.to_string()
    }

    fn __repr__(&self) -> String {
        format!("ExampleClass(value={})", self.value)
    }

    fn __hash__(&self) -> u64 {
        let i64_value: i64 = self.value.into();
        i64_value as u64
    }

    fn __bool__(&self) -> bool {
        self.value != 0
    }
}

fn make_example(py: Python) -> &PyCell<ExampleClass> {
    Py::new(
        py,
        ExampleClass {
            value: 5,
            _custom_attr: Some(20),
        },
    )
    .unwrap()
    .into_ref(py)
}

#[test]
fn test_getattr() {
    Python::with_gil(|py| {
        let example_py = make_example(py);
        assert_eq!(
            example_py
                .getattr("value")
                .unwrap()
                .extract::<i32>()
                .unwrap(),
            5,
        );
        assert_eq!(
            example_py
                .getattr("special_custom_attr")
                .unwrap()
                .extract::<i32>()
                .unwrap(),
            20,
        );
        assert!(example_py
            .getattr("other_attr")
            .unwrap_err()
            .is_instance::<PyAttributeError>(py));
    })
}

#[test]
fn test_setattr() {
    Python::with_gil(|py| {
        let example_py = make_example(py);
        example_py.setattr("special_custom_attr", 15).unwrap();
        assert_eq!(
            example_py
                .getattr("special_custom_attr")
                .unwrap()
                .extract::<i32>()
                .unwrap(),
            15,
        );
    })
}

#[test]
fn test_delattr() {
    Python::with_gil(|py| {
        let example_py = make_example(py);
        example_py.delattr("special_custom_attr").unwrap();
        assert!(example_py.getattr("special_custom_attr").unwrap().is_none());
    })
}

#[test]
fn test_str() {
    Python::with_gil(|py| {
        let example_py = make_example(py);
        assert_eq!(example_py.str().unwrap().to_str().unwrap(), "5");
    })
}

#[test]
fn test_repr() {
    Python::with_gil(|py| {
        let example_py = make_example(py);
        assert_eq!(
            example_py.repr().unwrap().to_str().unwrap(),
            "ExampleClass(value=5)"
        );
    })
}

#[test]
fn test_hash() {
    Python::with_gil(|py| {
        let example_py = make_example(py);
        assert_eq!(example_py.hash().unwrap(), 5);
    })
}

#[test]
fn test_bool() {
    Python::with_gil(|py| {
        let example_py = make_example(py);
        assert!(example_py.is_true().unwrap());
        example_py.borrow_mut().value = 0;
        assert!(!example_py.is_true().unwrap());
    })
}

#[pyclass]
pub struct Len {
    l: usize,
}

#[pymethods]
impl Len {
    fn __len__(&self) -> usize {
        self.l
    }
}

#[test]
fn len() {
    let gil = Python::acquire_gil();
    let py = gil.python();

    let inst = Py::new(py, Len { l: 10 }).unwrap();
    py_assert!(py, inst, "len(inst) == 10");
    unsafe {
        assert_eq!(ffi::PyObject_Size(inst.as_ptr()), 10);
        assert_eq!(ffi::PyMapping_Size(inst.as_ptr()), 10);
    }

    let inst = Py::new(
        py,
        Len {
            l: (isize::MAX as usize) + 1,
        },
    )
    .unwrap();
    py_expect_exception!(py, inst, "len(inst)", PyOverflowError);
}

#[pyclass]
struct Iterator {
    iter: Box<dyn iter::Iterator<Item = i32> + Send>,
}

#[pymethods]
impl Iterator {
    fn __iter__(slf: PyRef<Self>) -> PyRef<Self> {
        slf
    }

    fn __next__(mut slf: PyRefMut<Self>) -> Option<i32> {
        slf.iter.next()
    }
}

#[test]
fn iterator() {
    let gil = Python::acquire_gil();
    let py = gil.python();

    let inst = Py::new(
        py,
        Iterator {
            iter: Box::new(5..8),
        },
    )
    .unwrap();
    py_assert!(py, inst, "iter(inst) is inst");
    py_assert!(py, inst, "list(inst) == [5, 6, 7]");
}

#[pyclass]
struct Callable;

#[pymethods]
impl Callable {
    fn __call__(&self, arg: i32) -> i32 {
        arg * 6
    }
}

#[pyclass]
struct NotCallable;

#[test]
fn callable() {
    let gil = Python::acquire_gil();
    let py = gil.python();

    let c = Py::new(py, Callable).unwrap();
    py_assert!(py, c, "callable(c)");
    py_assert!(py, c, "c(7) == 42");

    let nc = Py::new(py, NotCallable).unwrap();
    py_assert!(py, nc, "not callable(nc)");
}

#[allow(deprecated)]
mod deprecated {
    use super::*;

    #[pyclass]
    struct Callable;

    #[pymethods]
    impl Callable {
        #[__call__]
        fn __call__(&self, arg: i32) -> i32 {
            arg * 6
        }
    }

    #[test]
    fn callable() {
        let gil = Python::acquire_gil();
        let py = gil.python();

        let c = Py::new(py, Callable).unwrap();
        py_assert!(py, c, "callable(c)");
        py_assert!(py, c, "c(7) == 42");
    }
}

#[pyclass]
#[derive(Debug)]
struct SetItem {
    key: i32,
    val: i32,
}

#[pymethods]
impl SetItem {
    fn __setitem__(&mut self, key: i32, val: i32) {
        self.key = key;
        self.val = val;
    }
}

#[test]
fn setitem() {
    let gil = Python::acquire_gil();
    let py = gil.python();

    let c = PyCell::new(py, SetItem { key: 0, val: 0 }).unwrap();
    py_run!(py, c, "c[1] = 2");
    {
        let c = c.borrow();
        assert_eq!(c.key, 1);
        assert_eq!(c.val, 2);
    }
    py_expect_exception!(py, c, "del c[1]", PyNotImplementedError);
}

#[pyclass]
struct DelItem {
    key: i32,
}

#[pymethods]
impl DelItem {
    fn __delitem__(&mut self, key: i32) {
        self.key = key;
    }
}

#[test]
fn delitem() {
    let gil = Python::acquire_gil();
    let py = gil.python();

    let c = PyCell::new(py, DelItem { key: 0 }).unwrap();
    py_run!(py, c, "del c[1]");
    {
        let c = c.borrow();
        assert_eq!(c.key, 1);
    }
    py_expect_exception!(py, c, "c[1] = 2", PyNotImplementedError);
}

#[pyclass]
struct SetDelItem {
    val: Option<i32>,
}

#[pymethods]
impl SetDelItem {
    fn __setitem__(&mut self, _key: i32, val: i32) {
        self.val = Some(val);
    }

    fn __delitem__(&mut self, _key: i32) {
        self.val = None;
    }
}

#[test]
fn setdelitem() {
    let gil = Python::acquire_gil();
    let py = gil.python();

    let c = PyCell::new(py, SetDelItem { val: None }).unwrap();
    py_run!(py, c, "c[1] = 2");
    {
        let c = c.borrow();
        assert_eq!(c.val, Some(2));
    }
    py_run!(py, c, "del c[1]");
    let c = c.borrow();
    assert_eq!(c.val, None);
}

#[pyclass]
struct Contains {}

#[pymethods]
impl Contains {
    fn __contains__(&self, item: i32) -> bool {
        item >= 0
    }
}

#[test]
fn contains() {
    let gil = Python::acquire_gil();
    let py = gil.python();

    let c = Py::new(py, Contains {}).unwrap();
    py_run!(py, c, "assert 1 in c");
    py_run!(py, c, "assert -1 not in c");
    py_expect_exception!(py, c, "assert 'wrong type' not in c", PyTypeError);
}

#[pyclass]
struct GetItem {}

#[pymethods]
impl GetItem {
    fn __getitem__(&self, idx: &PyAny) -> PyResult<&'static str> {
        if let Ok(slice) = idx.cast_as::<PySlice>() {
            let indices = slice.indices(1000)?;
            if indices.start == 100 && indices.stop == 200 && indices.step == 1 {
                return Ok("slice");
            }
        } else if let Ok(idx) = idx.extract::<isize>() {
            if idx == 1 {
                return Ok("int");
            }
        }
        Err(PyValueError::new_err("error"))
    }
}

#[test]
fn test_getitem() {
    let gil = Python::acquire_gil();
    let py = gil.python();

    let ob = Py::new(py, GetItem {}).unwrap();

    py_assert!(py, ob, "ob[1] == 'int'");
    py_assert!(py, ob, "ob[100:200:1] == 'slice'");
}

#[pyclass]
struct ClassWithGetAttr {
    #[pyo3(get, set)]
    data: u32,
}

#[pymethods]
impl ClassWithGetAttr {
    fn __getattr__(&self, _name: &str) -> u32 {
        self.data * 2
    }
}

#[test]
fn getattr_doesnt_override_member() {
    let gil = Python::acquire_gil();
    let py = gil.python();
    let inst = PyCell::new(py, ClassWithGetAttr { data: 4 }).unwrap();
    py_assert!(py, inst, "inst.data == 4");
    py_assert!(py, inst, "inst.a == 8");
}

/// Wraps a Python future and yield it once.
#[pyclass]
struct OnceFuture {
    future: PyObject,
    polled: bool,
}

#[pymethods]
impl OnceFuture {
    #[new]
    fn new(future: PyObject) -> Self {
        OnceFuture {
            future,
            polled: false,
        }
    }

    fn __await__(slf: PyRef<Self>) -> PyRef<Self> {
        slf
    }

    fn __iter__(slf: PyRef<Self>) -> PyRef<Self> {
        slf
    }
    fn __next__(mut slf: PyRefMut<Self>) -> Option<PyObject> {
        if !slf.polled {
            slf.polled = true;
            Some(slf.future.clone())
        } else {
            None
        }
    }
}

#[test]
fn test_await() {
    let gil = Python::acquire_gil();
    let py = gil.python();
    let once = py.get_type::<OnceFuture>();
    let source = pyo3::indoc::indoc!(
        r#"
import asyncio
import sys

async def main():
    res = await Once(await asyncio.sleep(0.1))
    return res
# For an odd error similar to https://bugs.python.org/issue38563
if sys.platform == "win32" and sys.version_info >= (3, 8, 0):
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
# get_event_loop can raise an error: https://github.com/PyO3/pyo3/pull/961#issuecomment-645238579
loop = asyncio.new_event_loop()
asyncio.set_event_loop(loop)
assert loop.run_until_complete(main()) is None
loop.close()
"#
    );
    let globals = PyModule::import(py, "__main__").unwrap().dict();
    globals.set_item("Once", once).unwrap();
    py.run(source, Some(globals), None)
        .map_err(|e| e.print(py))
        .unwrap();
}

/// Increment the count when `__get__` is called.
#[pyclass]
struct DescrCounter {
    #[pyo3(get)]
    count: usize,
}

#[pymethods]
impl DescrCounter {
    #[new]
    fn new() -> Self {
        DescrCounter { count: 0 }
    }
    /// Each access will increase the count
    fn __get__<'a>(
        mut slf: PyRefMut<'a, Self>,
        _instance: &PyAny,
        _owner: Option<&PyType>,
    ) -> PyRefMut<'a, Self> {
        slf.count += 1;
        slf
    }
    /// Allow assigning a new counter to the descriptor, copying the count across
    fn __set__(&self, _instance: &PyAny, new_value: &mut Self) {
        new_value.count = self.count;
    }
    /// Delete to reset the counter
    fn __delete__(&mut self, _instance: &PyAny) {
        self.count = 0;
    }
}

#[test]
fn descr_getset() {
    let gil = Python::acquire_gil();
    let py = gil.python();
    let counter = py.get_type::<DescrCounter>();
    let source = pyo3::indoc::indoc!(
        r#"
class Class:
    counter = Counter()

# access via type
counter = Class.counter
assert counter.count == 1

# access with instance directly
assert Counter.__get__(counter, Class()).count == 2

# access via instance
c = Class()
assert c.counter.count == 3

# __set__
c.counter = Counter()
assert c.counter.count == 4

# __delete__
del c.counter
assert c.counter.count == 1
"#
    );
    let globals = PyModule::import(py, "__main__").unwrap().dict();
    globals.set_item("Counter", counter).unwrap();
    py.run(source, Some(globals), None)
        .map_err(|e| e.print(py))
        .unwrap();
}

#[pyclass]
struct NotHashable;

#[pymethods]
impl NotHashable {
    #[classattr]
    const __hash__: Option<PyObject> = None;
}

#[test]
fn test_hash_opt_out() {
    // By default Python provides a hash implementation, which can be disabled by setting __hash__
    // to None.
    Python::with_gil(|py| {
        let empty = Py::new(py, EmptyClass).unwrap();
        py_assert!(py, empty, "hash(empty) is not None");

        let not_hashable = Py::new(py, NotHashable).unwrap();
        py_expect_exception!(py, not_hashable, "hash(not_hashable)", PyTypeError);
    })
}

/// Class with __iter__ gets default contains from CPython.
#[pyclass]
struct DefaultedContains;

#[pymethods]
impl DefaultedContains {
    fn __iter__(&self, py: Python) -> PyObject {
        PyList::new(py, &["a", "b", "c"])
            .as_ref()
            .iter()
            .unwrap()
            .into()
    }
}

#[pyclass]
struct NoContains;

#[pymethods]
impl NoContains {
    fn __iter__(&self, py: Python) -> PyObject {
        PyList::new(py, &["a", "b", "c"])
            .as_ref()
            .iter()
            .unwrap()
            .into()
    }

    // Equivalent to the opt-out const form in NotHashable above, just more verbose, to confirm this
    // also works.
    #[classattr]
    fn __contains__() -> Option<PyObject> {
        None
    }
}

#[test]
fn test_contains_opt_out() {
    Python::with_gil(|py| {
        let defaulted_contains = Py::new(py, DefaultedContains).unwrap();
        py_assert!(py, defaulted_contains, "'a' in defaulted_contains");

        let no_contains = Py::new(py, NoContains).unwrap();
        py_expect_exception!(py, no_contains, "'a' in no_contains", PyTypeError);
    })
}
