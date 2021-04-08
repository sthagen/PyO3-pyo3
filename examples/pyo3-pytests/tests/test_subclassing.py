import platform

from pyo3_pytests.subclassing import Subclassable

PYPY = platform.python_implementation() == "PyPy"


class SomeSubClass(Subclassable):
    def __str__(self):
        return "SomeSubclass"


def test_subclassing():
    if not PYPY:
        a = SomeSubClass()
        assert str(a) == "SomeSubclass"
        assert type(a) is SomeSubClass
