window.BENCHMARK_DATA = {
  "lastUpdate": 1624608203981,
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
      },
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
          "id": "223feaf1069aa0628f8d22bb9ca08acdcebac670",
          "message": "Merge pull request #110 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-06-25T09:05:58+02:00",
          "tree_id": "2e23a9c7693dc752c705c51032a652ba56a4e0f9",
          "url": "https://github.com/sthagen/pyo3/commit/223feaf1069aa0628f8d22bb9ca08acdcebac670"
        },
        "date": 1624608191985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7025140.254276114,
            "unit": "iter/sec",
            "range": "stddev: 1.7283104856890925e-8",
            "extra": "mean: 142.34591250917052 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8235240.257242427,
            "unit": "iter/sec",
            "range": "stddev: 1.2908484840327926e-8",
            "extra": "mean: 121.42936559991105 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3045565.9548281166,
            "unit": "iter/sec",
            "range": "stddev: 4.5255713980824894e-8",
            "extra": "mean: 328.3461973340186 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2003249.7350348528,
            "unit": "iter/sec",
            "range": "stddev: 5.113836806259924e-8",
            "extra": "mean: 499.1888841970086 nsec\nrounds: 97078"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2753683.581538573,
            "unit": "iter/sec",
            "range": "stddev: 3.655239335738567e-8",
            "extra": "mean: 363.1499300447592 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1755734.797479904,
            "unit": "iter/sec",
            "range": "stddev: 6.440697321028864e-8",
            "extra": "mean: 569.562100970837 nsec\nrounds: 54946"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1665410.7360607104,
            "unit": "iter/sec",
            "range": "stddev: 4.8862088688825555e-8",
            "extra": "mean: 600.452475985112 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1367021.1285541754,
            "unit": "iter/sec",
            "range": "stddev: 6.372668288197921e-8",
            "extra": "mean: 731.5175889472761 nsec\nrounds: 67568"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1652578.7534904478,
            "unit": "iter/sec",
            "range": "stddev: 5.378916511257074e-8",
            "extra": "mean: 605.1148835644613 nsec\nrounds: 80001"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1483600.3412180264,
            "unit": "iter/sec",
            "range": "stddev: 4.7956967654544356e-8",
            "extra": "mean: 674.0359733127225 nsec\nrounds: 72993"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2145274.244920085,
            "unit": "iter/sec",
            "range": "stddev: 4.624347988778961e-8",
            "extra": "mean: 466.14086864171287 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4233786.165935496,
            "unit": "iter/sec",
            "range": "stddev: 2.230203175051419e-8",
            "extra": "mean: 236.19520703360283 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5265622.290322678,
            "unit": "iter/sec",
            "range": "stddev: 2.0251422409381177e-8",
            "extra": "mean: 189.9110769562677 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7003472.64857841,
            "unit": "iter/sec",
            "range": "stddev: 8.120333253848996e-9",
            "extra": "mean: 142.78630761882928 nsec\nrounds: 66667"
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
      },
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
          "id": "223feaf1069aa0628f8d22bb9ca08acdcebac670",
          "message": "Merge pull request #110 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-06-25T09:05:58+02:00",
          "tree_id": "2e23a9c7693dc752c705c51032a652ba56a4e0f9",
          "url": "https://github.com/sthagen/pyo3/commit/223feaf1069aa0628f8d22bb9ca08acdcebac670"
        },
        "date": 1624608109401,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 82080,
            "range": "± 3891",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 241900,
            "range": "± 15033",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2465621,
            "range": "± 68199",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4709990,
            "range": "± 225995",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2771097,
            "range": "± 133745",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8427953,
            "range": "± 367516",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11431332,
            "range": "± 441457",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6571579,
            "range": "± 233840",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 97,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 101,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1394375,
            "range": "± 68282",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1452760,
            "range": "± 110357",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 669513,
            "range": "± 26201",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4697,
            "range": "± 22327",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4012,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1865797,
            "range": "± 95658",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8528299,
            "range": "± 316942",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10018020,
            "range": "± 511118",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4983500,
            "range": "± 164097",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 841611,
            "range": "± 26203",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1445928,
            "range": "± 78257",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 436362,
            "range": "± 50508",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}