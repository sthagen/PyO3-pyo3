# This file is only collected when Python >= 3.10, because it tests match syntax.
import pytest
from pyo3_pytests import enums


@pytest.mark.parametrize(
    "variant",
    [
        enums.ComplexEnum.Int(42),
        enums.ComplexEnum.Float(3.14),
        enums.ComplexEnum.Str("hello"),
        enums.ComplexEnum.EmptyStruct(),
        enums.ComplexEnum.MultiFieldStruct(42, 3.14, True),
    ],
)
def test_complex_enum_match_statement(variant: enums.ComplexEnum):
    match variant:
        case enums.ComplexEnum.Int(i=x):
            assert x == 42
        case enums.ComplexEnum.Float(f=x):
            assert x == 3.14
        case enums.ComplexEnum.Str(s=x):
            assert x == "hello"
        case enums.ComplexEnum.EmptyStruct():
            assert True
        case enums.ComplexEnum.MultiFieldStruct(a=x, b=y, c=z):
            assert x == 42
            assert y == 3.14
            assert z is True
        case _:
            assert False


@pytest.mark.parametrize(
    "variant",
    [
        enums.ComplexEnum.Int(42),
        enums.ComplexEnum.Float(3.14),
        enums.ComplexEnum.Str("hello"),
        enums.ComplexEnum.EmptyStruct(),
        enums.ComplexEnum.MultiFieldStruct(42, 3.14, True),
    ],
)
def test_complex_enum_pyfunction_in_out(variant: enums.ComplexEnum):
    match enums.do_complex_stuff(variant):
        case enums.ComplexEnum.Int(i=x):
            assert x == 5
        case enums.ComplexEnum.Float(f=x):
            assert x == 9.8596
        case enums.ComplexEnum.Str(s=x):
            assert x == "42"
        case enums.ComplexEnum.EmptyStruct():
            assert True
        case enums.ComplexEnum.MultiFieldStruct(a=x, b=y, c=z):
            assert x == 42
            assert y == 3.14
            assert z is True
        case _:
            assert False
