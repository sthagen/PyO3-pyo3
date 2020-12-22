.PHONY: test test_py publish clippy lint fmt

test: lint test_py
	cargo test

test_py:
	for example in examples/*; do tox -e py -c $$example || exit 1; done

fmt:
	cargo fmt --all -- --check
	black . --check

clippy:
	@touch src/lib.rs  # Touching file to ensure that cargo clippy will re-check the project
	cargo clippy --features="default num-bigint num-complex" --tests -- -Dwarnings
	for example in examples/*; do (cd $$example/; cargo clippy) || exit 1; done

lint: fmt clippy
	@true

publish: test
	cargo publish --manifest-path pyo3-macros-backend/Cargo.toml
	sleep 10  # wait for crates.io to update
	cargo publish --manifest-path pyo3-macros/Cargo.toml
	sleep 10  # wait for crates.io to update
	cargo publish
