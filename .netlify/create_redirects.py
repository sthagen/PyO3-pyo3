#!/usr/bin/env python
"""Generates _redirects file for netlify.

Run this and write output to .netlify/_redirects and check into
the PyO3 repository.
"""

import subprocess


def main() -> None:
    versions = subprocess.check_output(["git", "tag"], text=True).splitlines()
    for version in versions:
        version_without_v = version.lstrip("v")
        # redirect doc requests to docs.rs
        print(f"/{version}/doc/* https://docs.rs/pyo3/{version_without_v}/:splat")
    # fallback to github-pages for content not yet copied to netlify
    print(f"/* https://pyo3.github.io/pyo3/:splat 200")


if __name__ == "__main__":
    main()
