#![feature(test)]

extern crate test;
use pyo3::prelude::*;
use pyo3::types::PySet;
use test::Bencher;

#[bench]
fn iter_set(b: &mut Bencher) {
    let gil = Python::acquire_gil();
    let py = gil.python();
    const LEN: usize = 100_000;
    let set = PySet::new(py, &(0..LEN).collect::<Vec<_>>()).unwrap();
    let mut sum = 0;
    b.iter(|| {
        for x in set.iter() {
            let i: u64 = x.extract().unwrap();
            sum += i;
        }
    });
}
