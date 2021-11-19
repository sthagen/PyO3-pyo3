# Python Functions

The `#[pyfunction]` attribute is used to define a Python function from a Rust function. Once defined, the function needs to be added to a [module](./module.md) using the `wrap_pyfunction!` macro.

The following example defines a function called `double` in a Python module called `my_extension`:

```rust
use pyo3::prelude::*;

#[pyfunction]
fn double(x: usize) -> usize {
    x * 2
}

#[pymodule]
fn my_extension(py: Python, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(double, m)?)?;
    Ok(())
}
```

This chapter of the guide explains full usage of the `#[pyfunction]` attribute. The following topics are covered:

- [Function options](#function-options)
  - [`#[pyo3(name = "...")]`](#name)
  - [`#[pyo3(text_signature = "...")]`](#text_signature)
  - [`#[pyo3(pass_module)]`](#pass_module)
- [Argument parsing](#argument-parsing)
  - [`#[pyo3(from_py_with = "...")]`](#from_py_with)
- [Advanced function patterns](#advanced-function-patterns)
- [`#[pyfn]` shorthand](#pyfn-shorthand)

## Function options

The `#[pyo3]` attribute can be used to modify properties of the generated Python function. It can take any combination of the following options:

  - <a name="name"></a> `#[pyo3(name = "...")]`

    Overrides the name exposed to Python.

    In the following example, the Rust function `no_args_py` will be added to the Python module
    `module_with_functions` as the Python function `no_args`:

    ```rust
    use pyo3::prelude::*;

    #[pyfunction]
    #[pyo3(name = "no_args")]
    fn no_args_py() -> usize { 42 }

    #[pymodule]
    fn module_with_functions(py: Python, m: &PyModule) -> PyResult<()> {
        m.add_function(wrap_pyfunction!(no_args_py, m)?)?;
        Ok(())
    }

    # Python::with_gil(|py| {
    #     let m = pyo3::wrap_pymodule!(module_with_functions)(py);
    #     assert!(m.getattr(py, "no_args").is_ok());
    #     assert!(m.getattr(py, "no_args_py").is_err());
    # });
    ```

  - <a name="text_signature"></a> `#[pyo3(text_signature = "...")]`

    Sets the function signature visible in Python tooling (such as via [`inspect.signature`]).

    The example below creates a function `add` which has a signature describing two positional-only
    arguments `a` and `b`.

    ```rust
    use pyo3::prelude::*;

    /// This function adds two unsigned 64-bit integers.
    #[pyfunction]
    #[pyo3(text_signature = "(a, b, /)")]
    fn add(a: u64, b: u64) -> u64 {
        a + b
    }
    #
    # fn main() -> PyResult<()> {
    #     Python::with_gil(|py| {
    #         let fun = pyo3::wrap_pyfunction!(add, py)?;
    #
    #         let doc: String = fun.getattr("__doc__")?.extract()?;
    #         assert_eq!(doc, "This function adds two unsigned 64-bit integers.");
    #
    #         let inspect = PyModule::import(py, "inspect")?.getattr("signature")?;
    #         let sig: String = inspect
    #             .call1((fun,))?
    #             .call_method0("__str__")?
    #             .extract()?;
    #         assert_eq!(sig, "(a, b, /)");
    #
    #         Ok(())
    #     })
    # }
    ```

  - <a name="pass_module" ></a> `#[pyo3(pass_module)]`

    Set this option to make PyO3 pass the containing module as the first argument to the function. It is then possible to use the module in the function body. The first argument **must** be of type `&PyModule`.

    The following example creates a function `pyfunction_with_module` which returns the containing module's name (i.e. `module_with_fn`):

    ```rust
    use pyo3::prelude::*;

    #[pyfunction]
    #[pyo3(pass_module)]
    fn pyfunction_with_module(module: &PyModule) -> PyResult<&str> {
        module.name()
    }

    #[pymodule]
    fn module_with_fn(py: Python, m: &PyModule) -> PyResult<()> {
        m.add_function(wrap_pyfunction!(pyfunction_with_module, m)?)
    }
    ```

## Argument parsing

The `#[pyfunction]` attribute supports specifying details of argument parsing. The details are given in the section ["Method arguments" of the Classes chapter](class.md#method-arguments).  Here is an example for a function that accepts arbitrary keyword arguments (`**kwargs` in Python syntax) and returns the number that was passed:

```rust
use pyo3::prelude::*;
use pyo3::types::PyDict;

#[pyfunction(kwds="**")]
fn num_kwds(kwds: Option<&PyDict>) -> usize {
    kwds.map_or(0, |dict| dict.len())
}

#[pymodule]
fn module_with_functions(py: Python, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(num_kwds, m)?).unwrap();
    Ok(())
}
```

### Per-argument options

The `#[pyo3]` attribute can be used on individual arguments to modify properties of them in the generated function. It can take any combination of the following options:

  - <a name="from_py_with"></a> `#[pyo3(from_py_with = "...")]`

    Set this on an option to specify a custom function to convert the function argument from Python to the desired Rust type, instead of using the default `FromPyObject` extraction. The function signature must be `fn(&PyAny) -> PyResult<T>` where `T` is the Rust type of the argument.

    The following example uses `from_py_with` to convert the input Python object to its length:

    ```rust
    use pyo3::prelude::*;

    fn get_length(obj: &PyAny) -> PyResult<usize> {
        let length = obj.len()?;
        Ok(length)
    }

    #[pyfunction]
    fn object_length(
        #[pyo3(from_py_with = "get_length")] argument: usize
    ) -> usize {
        argument
    }

    # Python::with_gil(|py| {
    #     let f = pyo3::wrap_pyfunction!(object_length)(py).unwrap();
    #     assert_eq!(f.call1((vec![1, 2, 3],)).unwrap().extract::<usize>().unwrap(), 3);
    # });
    ```

## Advanced function patterns

### Making the function signature available to Python (old method)

Alternatively, simply make sure the first line of your docstring is
formatted like in the following example. Please note that the newline after the
`--` is mandatory. The `/` signifies the end of positional-only arguments.

`#[pyo3(text_signature)]` should be preferred, since it will override automatically
generated signatures when those are added in a future version of PyO3.

```rust
# #![allow(dead_code)]
use pyo3::prelude::*;

/// add(a, b, /)
/// --
///
/// This function adds two unsigned 64-bit integers.
#[pyfunction]
fn add(a: u64, b: u64) -> u64 {
    a + b
}

// a function with a signature but without docs. Both blank lines after the `--` are mandatory.

/// sub(a, b, /)
/// --
///
///
#[pyfunction]
fn sub(a: u64, b: u64) -> u64 {
    a - b
}
```

When annotated like this, signatures are also correctly displayed in IPython.

```ignore
>>> pyo3_test.add?
Signature: pyo3_test.add(a, b, /)
Docstring: This function adds two unsigned 64-bit integers.
Type:      builtin_function_or_method
```

### Closures

Currently, there are no conversions between `Fn`s in Rust and callables in Python. This would
definitely be possible and very useful, so contributions are welcome. In the meantime, you can do
the following:

### Calling Python functions in Rust

You can pass Python `def`'d functions and built-in functions to Rust functions [`PyFunction`]
corresponds to regular Python functions while [`PyCFunction`] describes built-ins such as
`repr()`.

You can also use [`PyAny::is_callable`] to check if you have a callable object. `is_callable` will
return `true` for functions (including lambdas), methods and objects with a `__call__` method.
You can call the object with [`PyAny::call`] with the args as first parameter and the kwargs
(or `None`) as second parameter. There are also [`PyAny::call0`] with no args and [`PyAny::call1`]
with only positional args.

### Calling Rust functions in Python

If you have a static function, you can expose it with `#[pyfunction]` and use [`wrap_pyfunction!`]
to get the corresponding [`PyCFunction`]. For dynamic functions, e.g. lambdas and functions that
were passed as arguments, you must put them in some kind of owned container, e.g. a `Box`.
(A long-term solution will be a special container similar to wasm-bindgen's `Closure`). You can
then use a `#[pyclass]` struct with that container as a field as a way to pass the function over
the FFI barrier. You can even make that class callable with `__call__` so it looks like a function
in Python code.

[`PyAny::is_callable`]: {{#PYO3_DOCS_URL}}/pyo3/struct.PyAny.html#tymethod.is_callable
[`PyAny::call`]: {{#PYO3_DOCS_URL}}/pyo3/struct.PyAny.html#tymethod.call
[`PyAny::call0`]: {{#PYO3_DOCS_URL}}/pyo3/struct.PyAny.html#tymethod.call0
[`PyAny::call1`]: {{#PYO3_DOCS_URL}}/pyo3/struct.PyAny.html#tymethod.call1
[`PyObject`]: {{#PYO3_DOCS_URL}}/pyo3/type.PyObject.html
[`wrap_pyfunction!`]: {{#PYO3_DOCS_URL}}/pyo3/macro.wrap_pyfunction.html
[`PyFunction`]: {{#PYO3_DOCS_URL}}/pyo3/types/struct.PyFunction.html
[`PyCFunction`]: {{#PYO3_DOCS_URL}}/pyo3/types/struct.PyCFunction.html

### Accessing the FFI functions

In order to make Rust functions callable from Python, PyO3 generates an `extern "C"`
function whose exact signature depends on the Rust signature.  (PyO3 chooses the optimal
Python argument passing convention.) It then embeds the call to the Rust function inside this
FFI-wrapper function. This wrapper handles extraction of the regular arguments and the keyword
arguments from the input `PyObject`s.

The `wrap_pyfunction` macro can be used to directly get a `PyCFunction` given a
`#[pyfunction]` and a `PyModule`: `wrap_pyfunction!(rust_fun, module)`.

## `#[pyfn]` shorthand

There is a shorthand to `#[pyfunction]` and `wrap_pymodule!`: the function can be placed inside the module definition and
annotated with `#[pyfn]`. To simplify PyO3, it is expected that `#[pyfn]` may be removed in a future release (See [#694](https://github.com/PyO3/pyo3/issues/694)).

An example of `#[pyfn]` is below:

```rust
use pyo3::prelude::*;

#[pymodule]
fn my_extension(py: Python, m: &PyModule) -> PyResult<()> {

    #[pyfn(m)]
    fn double(x: usize) -> usize {
        x * 2
    }

    Ok(())
}
```

`#[pyfn(m)]` is just syntactic sugar for `#[pyfunction]`, and takes all the same options
documented in the rest of this chapter. The code above is expanded to the following:

```rust
use pyo3::prelude::*;

#[pymodule]
fn my_extension(py: Python, m: &PyModule) -> PyResult<()> {

    #[pyfunction]
    fn double(x: usize) -> usize {
        x * 2
    }

    m.add_function(wrap_pyfunction!(double, m)?)?;
    Ok(())
}
```

[`inspect.signature`]: https://docs.python.org/3/library/inspect.html#inspect.signature
