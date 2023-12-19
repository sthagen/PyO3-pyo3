use pyo3::prelude::*;
use std::borrow::Cow;

#[pyfunction]
fn issue_219() {
    // issue 219: acquiring GIL inside #[pyfunction] deadlocks.
    Python::with_gil(|_| {});
}

#[pyfunction]
fn get_type_full_name(obj: &PyAny) -> PyResult<Cow<'_, str>> {
    obj.get_type().name()
}

#[pyfunction]
fn accepts_bool(val: bool) -> bool {
    val
}

#[pymodule]
pub fn misc(_py: Python<'_>, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(issue_219, m)?)?;
    m.add_function(wrap_pyfunction!(get_type_full_name, m)?)?;
    m.add_function(wrap_pyfunction!(accepts_bool, m)?)?;
    Ok(())
}
