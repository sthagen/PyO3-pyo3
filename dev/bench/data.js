window.BENCHMARK_DATA = {
  "lastUpdate": 1622901684653,
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
    ],
    "pyo3-bench": [
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
        "date": 1622901672943,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 96296,
            "range": "± 2332",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 276782,
            "range": "± 6225",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2890129,
            "range": "± 27361",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3320131,
            "range": "± 30546",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10711439,
            "range": "± 1444429",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14348696,
            "range": "± 312465",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8265037,
            "range": "± 938574",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 117,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 122,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2256886,
            "range": "± 37843",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 989669,
            "range": "± 39193",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5188,
            "range": "± 21763",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4148,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2100067,
            "range": "± 46222",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9183393,
            "range": "± 481588",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11796255,
            "range": "± 226091",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5358510,
            "range": "± 288011",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 968038,
            "range": "± 10624",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1933546,
            "range": "± 22116",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 484722,
            "range": "± 8456",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}