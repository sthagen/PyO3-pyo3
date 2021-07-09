window.BENCHMARK_DATA = {
  "lastUpdate": 1625812877163,
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
          "id": "a47022383b94a04690eeeff73945dc2d94e6fa26",
          "message": "Merge pull request #111 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-06-26T21:57:33+02:00",
          "tree_id": "57ebb5edbfae21fbb993d0ce4107add9abb8a64e",
          "url": "https://github.com/sthagen/pyo3/commit/a47022383b94a04690eeeff73945dc2d94e6fa26"
        },
        "date": 1624741938022,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8067916.497487893,
            "unit": "iter/sec",
            "range": "stddev: 9.17275360904443e-8",
            "extra": "mean: 123.94773797068503 nsec\nrounds: 24814"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9557934.920521714,
            "unit": "iter/sec",
            "range": "stddev: 2.0514442366779495e-7",
            "extra": "mean: 104.62511079178158 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3125249.3674547523,
            "unit": "iter/sec",
            "range": "stddev: 7.716122075611946e-7",
            "extra": "mean: 319.97446681004595 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1871895.6511786717,
            "unit": "iter/sec",
            "range": "stddev: 0.000001334399843925215",
            "extra": "mean: 534.2178124993069 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2975858.5334304417,
            "unit": "iter/sec",
            "range": "stddev: 3.6541330354519557e-7",
            "extra": "mean: 336.03747918989654 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1597233.8617693938,
            "unit": "iter/sec",
            "range": "stddev: 0.000001110569820613618",
            "extra": "mean: 626.0823940286565 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1699368.5071258873,
            "unit": "iter/sec",
            "range": "stddev: 7.901712381897274e-7",
            "extra": "mean: 588.4538849617605 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1572028.5777137678,
            "unit": "iter/sec",
            "range": "stddev: 3.328068178104031e-7",
            "extra": "mean: 636.1207513505868 nsec\nrounds: 33899"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1738384.4353287963,
            "unit": "iter/sec",
            "range": "stddev: 7.851213180890194e-7",
            "extra": "mean: 575.246751913892 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1620450.7762522832,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014532954330159373",
            "extra": "mean: 617.1122348514176 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2336774.769026982,
            "unit": "iter/sec",
            "range": "stddev: 9.706973438769608e-7",
            "extra": "mean: 427.9402590504224 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4472443.860345825,
            "unit": "iter/sec",
            "range": "stddev: 7.960804764165885e-7",
            "extra": "mean: 223.59140354253645 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5831406.7208066275,
            "unit": "iter/sec",
            "range": "stddev: 1.5634825569013872e-7",
            "extra": "mean: 171.48520895170492 nsec\nrounds: 61354"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7550262.352489989,
            "unit": "iter/sec",
            "range": "stddev: 1.2377585766914575e-7",
            "extra": "mean: 132.44572881236098 nsec\nrounds: 91752"
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
          "id": "0884187ac484b857c3f877834edf2761fd1f8c01",
          "message": "Merge pull request #112 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-06-27T18:11:41+02:00",
          "tree_id": "597969835d54238b6d0ce8773007bb05ce42b71a",
          "url": "https://github.com/sthagen/pyo3/commit/0884187ac484b857c3f877834edf2761fd1f8c01"
        },
        "date": 1624811388285,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7406852.399070866,
            "unit": "iter/sec",
            "range": "stddev: 2.0284366840236126e-8",
            "extra": "mean: 135.01011578487234 nsec\nrounds: 68489"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8626546.443667226,
            "unit": "iter/sec",
            "range": "stddev: 1.9014347136258142e-8",
            "extra": "mean: 115.92124455948729 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3263855.4059321317,
            "unit": "iter/sec",
            "range": "stddev: 6.66113222840038e-8",
            "extra": "mean: 306.38612181793627 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2083064.383251146,
            "unit": "iter/sec",
            "range": "stddev: 9.481006231983874e-8",
            "extra": "mean: 480.0619740995843 nsec\nrounds: 96145"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2783954.696202468,
            "unit": "iter/sec",
            "range": "stddev: 7.782199568253141e-8",
            "extra": "mean: 359.201247550416 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1887264.4023760397,
            "unit": "iter/sec",
            "range": "stddev: 1.1919713239844832e-7",
            "extra": "mean: 529.8674625246935 nsec\nrounds: 156226"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1753255.3354240963,
            "unit": "iter/sec",
            "range": "stddev: 1.039625075541582e-7",
            "extra": "mean: 570.3675784098169 nsec\nrounds: 80633"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1487169.924142162,
            "unit": "iter/sec",
            "range": "stddev: 1.5995395536163664e-7",
            "extra": "mean: 672.4181169659623 nsec\nrounds: 73525"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1772155.9723340934,
            "unit": "iter/sec",
            "range": "stddev: 1.4721425278258237e-7",
            "extra": "mean: 564.2844171793672 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1636086.3487104594,
            "unit": "iter/sec",
            "range": "stddev: 1.1327370570458132e-7",
            "extra": "mean: 611.2146836186821 nsec\nrounds: 78734"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2343073.8572193678,
            "unit": "iter/sec",
            "range": "stddev: 8.851714574030496e-8",
            "extra": "mean: 426.7897902231174 nsec\nrounds: 116266"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4541440.46515106,
            "unit": "iter/sec",
            "range": "stddev: 5.7746077048640167e-8",
            "extra": "mean: 220.19445320775802 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5854832.219656504,
            "unit": "iter/sec",
            "range": "stddev: 2.7214856560158988e-8",
            "extra": "mean: 170.79908740042208 nsec\nrounds: 74622"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7420853.657492753,
            "unit": "iter/sec",
            "range": "stddev: 2.3707833375961995e-8",
            "extra": "mean: 134.75538612600766 nsec\nrounds: 84027"
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
          "id": "70937ff5af22213006ee5ca5da5ff25be83b2135",
          "message": "Merge pull request #113 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-09T08:20:38+02:00",
          "tree_id": "50cb1e6a505987853b900600f530c14e8ad8e5c3",
          "url": "https://github.com/sthagen/pyo3/commit/70937ff5af22213006ee5ca5da5ff25be83b2135"
        },
        "date": 1625812862879,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6706820.179654847,
            "unit": "iter/sec",
            "range": "stddev: 1.7037382274078188e-7",
            "extra": "mean: 149.1019549076394 nsec\nrounds: 66663"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 7765348.802850835,
            "unit": "iter/sec",
            "range": "stddev: 1.099296316479965e-7",
            "extra": "mean: 128.77721598725384 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2825602.828397829,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013263006576810906",
            "extra": "mean: 353.9067805104899 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1722211.0598125223,
            "unit": "iter/sec",
            "range": "stddev: 5.907911292326612e-7",
            "extra": "mean: 580.6489247076627 nsec\nrounds: 89278"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2477635.474886647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016630053083440156",
            "extra": "mean: 403.61062397506277 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1441113.1443642364,
            "unit": "iter/sec",
            "range": "stddev: 6.569219252641294e-7",
            "extra": "mean: 693.9080417875261 nsec\nrounds: 72459"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1504886.1609872151,
            "unit": "iter/sec",
            "range": "stddev: 0.000001022095416995121",
            "extra": "mean: 664.5020905393959 nsec\nrounds: 76918"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 937212.6502875865,
            "unit": "iter/sec",
            "range": "stddev: 9.280103390210829e-7",
            "extra": "mean: 1.066993707023851 usec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1517736.013485326,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011841095525904948",
            "extra": "mean: 658.8761096227705 nsec\nrounds: 76918"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1279973.2137056137,
            "unit": "iter/sec",
            "range": "stddev: 9.052472843209994e-7",
            "extra": "mean: 781.2663493987259 nsec\nrounds: 66663"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1961894.8274108467,
            "unit": "iter/sec",
            "range": "stddev: 3.8050164288964657e-7",
            "extra": "mean: 509.7113188884874 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 3994012.558896962,
            "unit": "iter/sec",
            "range": "stddev: 3.681701733508277e-7",
            "extra": "mean: 250.37477605617602 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4765025.38700132,
            "unit": "iter/sec",
            "range": "stddev: 5.48564639043542e-7",
            "extra": "mean: 209.86247056057496 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6553397.621122667,
            "unit": "iter/sec",
            "range": "stddev: 1.0592693299430349e-7",
            "extra": "mean: 152.59260277092918 nsec\nrounds: 64512"
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
          "id": "a47022383b94a04690eeeff73945dc2d94e6fa26",
          "message": "Merge pull request #111 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-06-26T21:57:33+02:00",
          "tree_id": "57ebb5edbfae21fbb993d0ce4107add9abb8a64e",
          "url": "https://github.com/sthagen/pyo3/commit/a47022383b94a04690eeeff73945dc2d94e6fa26"
        },
        "date": 1624742386355,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80338,
            "range": "± 2096",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 221991,
            "range": "± 14692",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2312678,
            "range": "± 17805",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4749314,
            "range": "± 137154",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2745371,
            "range": "± 13029",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6986197,
            "range": "± 147331",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12571514,
            "range": "± 76142",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5277536,
            "range": "± 102458",
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
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1275294,
            "range": "± 51353",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1498111,
            "range": "± 58364",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 601648,
            "range": "± 37134",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4569,
            "range": "± 20575",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3454,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1761516,
            "range": "± 51544",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7001062,
            "range": "± 59995",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9950004,
            "range": "± 39087",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4312472,
            "range": "± 38721",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 806303,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1493753,
            "range": "± 69622",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 420475,
            "range": "± 570",
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
          "id": "0884187ac484b857c3f877834edf2761fd1f8c01",
          "message": "Merge pull request #112 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-06-27T18:11:41+02:00",
          "tree_id": "597969835d54238b6d0ce8773007bb05ce42b71a",
          "url": "https://github.com/sthagen/pyo3/commit/0884187ac484b857c3f877834edf2761fd1f8c01"
        },
        "date": 1624811736760,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 89750,
            "range": "± 9493",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 273457,
            "range": "± 27927",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2950728,
            "range": "± 173597",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5562856,
            "range": "± 347441",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3309347,
            "range": "± 175278",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10549568,
            "range": "± 765559",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12976479,
            "range": "± 587548",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8256953,
            "range": "± 579434",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 109,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 112,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1548107,
            "range": "± 88840",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1748706,
            "range": "± 70745",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 763988,
            "range": "± 38611",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5322,
            "range": "± 24007",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4477,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2030576,
            "range": "± 101938",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10203766,
            "range": "± 579759",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11242934,
            "range": "± 471532",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6032577,
            "range": "± 378748",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 937878,
            "range": "± 47012",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1718687,
            "range": "± 114596",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 506480,
            "range": "± 42041",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}