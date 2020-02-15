# Type Conversions

PyO3 provides some handy traits to convert between Python types and Rust types.

## `.extract()`

The easiest way to convert a Python object to a Rust value is using `.extract()?`.

## `ToPyObject` trait

[`ToPyObject`] trait is a conversion trait that allows various objects to be
converted into [`PyObject`][PyObject]. `IntoPy<PyObject>` serves the
same purpose, except that it consumes `self`.

## `FromPyObject` and `RefFromPyObject` trait

## `*args` and `**kwargs` for python object call

There are several ways how to pass positional and keyword arguments to a Python object call.
The [`ObjectProtocol`][ObjectProtocol] trait provides two methods:

* `call` - call any callable Python object.
* `call_method` - call a specific method on the object, shorthand for `get_attr` then `call`.

Both methods accept `args` and `kwargs` arguments.

```rust
use pyo3::prelude::*;
use pyo3::types::{PyDict, PyTuple};

struct SomeObject;
impl SomeObject {
    fn new(py: Python) -> PyObject {
        PyDict::new(py).to_object(py)
    }
}

fn main() {
    let arg1 = "arg1";
    let arg2 = "arg2";
    let arg3 = "arg3";

    let gil = Python::acquire_gil();
    let py = gil.python();

    let obj = SomeObject::new(py);

    // call object without empty arguments
    obj.call0(py);

    // call object with PyTuple
    let args = PyTuple::new(py, &[arg1, arg2, arg3]);
    obj.call1(py, args);

    // pass arguments as rust tuple
    let args = (arg1, arg2, arg3);
    obj.call1(py, args);
}
```

`kwargs` can be `None` or `Some(&PyDict)`. You can use the
[`IntoPyDict`][IntoPyDict] trait to convert other dict-like containers, e.g. `HashMap`, `BTreeMap` as well as tuples with up to 10 elements and `Vec`s where each element is a two-element tuple.

```rust
use pyo3::prelude::*;
use pyo3::types::{IntoPyDict, PyDict};
use std::collections::HashMap;

struct SomeObject;

impl SomeObject {
    fn new(py: Python) -> PyObject {
        PyDict::new(py).to_object(py)
    }
}

fn main() {
    let key1 = "key1";
    let val1 = 1;
    let key2 = "key2";
    let val2 = 2;

    let gil = Python::acquire_gil();
    let py = gil.python();

    let obj = SomeObject::new(py);

    // call object with PyDict
    let kwargs = [(key1, val1)].into_py_dict(py);
    obj.call(py, (), Some(kwargs));

    // pass arguments as Vec
    let kwargs = vec![(key1, val1), (key2, val2)];
    obj.call(py, (), Some(kwargs.into_py_dict(py)));

    // pass arguments as HashMap
    let mut kwargs = HashMap::<&str, i32>::new();
    kwargs.insert(key1, 1);
    obj.call(py, (), Some(kwargs.into_py_dict(py)));
}
```

## `FromPy<T>` and `IntoPy<T>`

Many conversions in PyO3 can't use `std::convert::From` because they need a GIL token. The `FromPy<T>` trait offers an `from_py` method that works just like `from`, except for taking a `Python<'_>` argument. I.e. FromPy<T> could be converting a rust object into a python object even though it says `FromPy` - it doesn't say anything about which side of the conversion is a python object.

(Just like From<T>, if you implement FromPy<T> you gain a blanket implementation of IntoPy<T> for free.)

Eventually, traits such as `ToPyObject` will be replaced by this trait and a `FromPy` trait will be added that will implement `IntoPy`, just like with `From` and `Into`.

[`ToPyObject`]: https://docs.rs/pyo3/latest/pyo3/trait.ToPyObject.html
[PyObject]: https://docs.rs/pyo3/latest/pyo3/struct.PyObject.html
[PyTuple]: https://docs.rs/pyo3/latest/pyo3/types/struct.PyTuple.html
[ObjectProtocol]: https://docs.rs/pyo3/latest/pyo3/trait.ObjectProtocol.html
[IntoPyDict]: https://docs.rs/pyo3/latest/pyo3/types/trait.IntoPyDict.html
