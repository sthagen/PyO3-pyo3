window.BENCHMARK_DATA = {
  "lastUpdate": 1622901167161,
  "repoUrl": "https://github.com/sthagen/pyo3",
  "entries": {
    "pytest-bench": [
      {
        "commit": {
          "author": {
            "email": "stefan@hagen.link",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33b68e4f6b6a335501177ca709a4837e204b7458",
          "message": "Merge pull request #109 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-06-05T14:57:12+02:00",
          "tree_id": "d75fc0f08b3b7bf3f8abb4754ebdd92551d55ba6",
          "url": "https://github.com/sthagen/pyo3/commit/33b68e4f6b6a335501177ca709a4837e204b7458"
        },
        "date": 1622901154151,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1251176.1335798902,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016459434909938439",
            "extra": "mean: 799.2479820876857 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2025553.79932912,
            "unit": "iter/sec",
            "range": "stddev: 9.810345823524727e-7",
            "extra": "mean: 493.692144997997 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1139612.3050314805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028264627589523142",
            "extra": "mean: 877.4914026330877 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1628316.4416214647,
            "unit": "iter/sec",
            "range": "stddev: 8.654284704648221e-7",
            "extra": "mean: 614.1312428218944 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 9028766.708198562,
            "unit": "iter/sec",
            "range": "stddev: 4.7698368451525345e-8",
            "extra": "mean: 110.75709809756661 nsec\nrounds: 26810"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 7449229.517089893,
            "unit": "iter/sec",
            "range": "stddev: 8.59012856599671e-8",
            "extra": "mean: 134.2420713049294 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1819342.7724822501,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013001698493186886",
            "extra": "mean: 549.6490354237282 nsec\nrounds: 175408"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3182086.8397054975,
            "unit": "iter/sec",
            "range": "stddev: 5.708403409311735e-7",
            "extra": "mean: 314.2591797063729 nsec\nrounds: 200000"
          }
        ]
      }
    ]
  }
}