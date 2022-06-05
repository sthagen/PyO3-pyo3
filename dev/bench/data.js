window.BENCHMARK_DATA = {
  "lastUpdate": 1654394787868,
  "repoUrl": "https://github.com/sthagen/PyO3-pyo3",
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
          "id": "a53491d7a273cf78e74772256c746fb52ba0d56b",
          "message": "Merge pull request #114 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-15T10:06:12+02:00",
          "tree_id": "3e4cacdb94e4717dc90b5c16120f1189de80c045",
          "url": "https://github.com/sthagen/pyo3/commit/a53491d7a273cf78e74772256c746fb52ba0d56b"
        },
        "date": 1626337473521,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8679718.15231021,
            "unit": "iter/sec",
            "range": "stddev: 1.3169912691766853e-7",
            "extra": "mean: 115.21111428414231 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9704845.566839837,
            "unit": "iter/sec",
            "range": "stddev: 3.353010130885868e-9",
            "extra": "mean: 103.0413099427137 nsec\nrounds: 94340"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3653586.61785497,
            "unit": "iter/sec",
            "range": "stddev: 1.307254298460953e-8",
            "extra": "mean: 273.70365194481315 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2327190.0150170955,
            "unit": "iter/sec",
            "range": "stddev: 2.1700371572615946e-8",
            "extra": "mean: 429.7027718186994 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3227532.1087244186,
            "unit": "iter/sec",
            "range": "stddev: 6.675378951117977e-8",
            "extra": "mean: 309.83425301896926 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2007357.1663124878,
            "unit": "iter/sec",
            "range": "stddev: 6.266870793979224e-8",
            "extra": "mean: 498.16744961147447 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1943700.514120691,
            "unit": "iter/sec",
            "range": "stddev: 1.9584993976938857e-8",
            "extra": "mean: 514.4825515737691 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1688185.9834964112,
            "unit": "iter/sec",
            "range": "stddev: 1.6941325539352217e-8",
            "extra": "mean: 592.3517964111176 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1963203.3318323412,
            "unit": "iter/sec",
            "range": "stddev: 1.3862232681482382e-8",
            "extra": "mean: 509.37158866130426 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1721951.212996107,
            "unit": "iter/sec",
            "range": "stddev: 3.30146116038596e-8",
            "extra": "mean: 580.7365461070223 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2567599.6214669626,
            "unit": "iter/sec",
            "range": "stddev: 1.5409686735919357e-8",
            "extra": "mean: 389.46882202388383 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5183972.957054375,
            "unit": "iter/sec",
            "range": "stddev: 3.826286242689035e-9",
            "extra": "mean: 192.9022408650912 nsec\nrounds: 47620"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6141167.577625743,
            "unit": "iter/sec",
            "range": "stddev: 6.279958766093802e-9",
            "extra": "mean: 162.83548484171783 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8402909.479733335,
            "unit": "iter/sec",
            "range": "stddev: 3.1768957691275722e-9",
            "extra": "mean: 119.00639920155177 nsec\nrounds: 80646"
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
          "id": "dc0bb711a013e61d2130128ff686ea612e0b1042",
          "message": "Merge pull request #115 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-16T09:32:06+02:00",
          "tree_id": "ede8ea23e140dfc79698b1ec37ba717dd956fa7c",
          "url": "https://github.com/sthagen/pyo3/commit/dc0bb711a013e61d2130128ff686ea612e0b1042"
        },
        "date": 1626421717357,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6670787.552058387,
            "unit": "iter/sec",
            "range": "stddev: 1.811748797137877e-8",
            "extra": "mean: 149.9073373564562 nsec\nrounds: 67110"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 7851224.156418829,
            "unit": "iter/sec",
            "range": "stddev: 2.1131403293984402e-8",
            "extra": "mean: 127.36867271604966 nsec\nrounds: 76924"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2996787.49018039,
            "unit": "iter/sec",
            "range": "stddev: 5.6517584045345906e-8",
            "extra": "mean: 333.690661507991 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1880750.3999370057,
            "unit": "iter/sec",
            "range": "stddev: 4.8387725676862544e-8",
            "extra": "mean: 531.7026650813513 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2714660.654564482,
            "unit": "iter/sec",
            "range": "stddev: 4.562487685145921e-8",
            "extra": "mean: 368.3701674898146 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1736360.479143882,
            "unit": "iter/sec",
            "range": "stddev: 4.494247580218007e-8",
            "extra": "mean: 575.917277553046 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1657326.526851973,
            "unit": "iter/sec",
            "range": "stddev: 4.5866260988333196e-8",
            "extra": "mean: 603.3813999823202 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1326045.724076014,
            "unit": "iter/sec",
            "range": "stddev: 1.3691639358676958e-7",
            "extra": "mean: 754.1218088063281 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1639143.1322040837,
            "unit": "iter/sec",
            "range": "stddev: 3.576192793944142e-8",
            "extra": "mean: 610.0748496898009 nsec\nrounds: 80001"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1449675.7888926808,
            "unit": "iter/sec",
            "range": "stddev: 4.156014085307093e-8",
            "extra": "mean: 689.8094095672429 nsec\nrounds: 70423"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1553748.0634308485,
            "unit": "iter/sec",
            "range": "stddev: 1.024308135481901e-7",
            "extra": "mean: 643.6049856061535 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4218014.874608862,
            "unit": "iter/sec",
            "range": "stddev: 4.949499475807514e-8",
            "extra": "mean: 237.0783484004932 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5070738.207910156,
            "unit": "iter/sec",
            "range": "stddev: 1.3136142890670538e-8",
            "extra": "mean: 197.20994439008916 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6873057.162371275,
            "unit": "iter/sec",
            "range": "stddev: 8.962896575621317e-9",
            "extra": "mean: 145.49566173761258 nsec\nrounds: 64512"
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
          "id": "0b8aa52cc7cfbf8ec16c423c394eaca846bfec0d",
          "message": "Merge pull request #116 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-19T20:02:36+02:00",
          "tree_id": "21b8a140b58c6a1999a50e8065c070ed8ef419bd",
          "url": "https://github.com/sthagen/pyo3/commit/0b8aa52cc7cfbf8ec16c423c394eaca846bfec0d"
        },
        "date": 1626717860671,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8510544.96256081,
            "unit": "iter/sec",
            "range": "stddev: 7.334819518039228e-9",
            "extra": "mean: 117.50128862485099 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9398726.73252927,
            "unit": "iter/sec",
            "range": "stddev: 4.3843941846631984e-9",
            "extra": "mean: 106.39739067404027 nsec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3647358.724522035,
            "unit": "iter/sec",
            "range": "stddev: 4.068583852053312e-8",
            "extra": "mean: 274.17100305494085 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2261558.660374946,
            "unit": "iter/sec",
            "range": "stddev: 1.1054712883442456e-7",
            "extra": "mean: 442.1729214991714 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3275573.09883913,
            "unit": "iter/sec",
            "range": "stddev: 1.669525877602385e-8",
            "extra": "mean: 305.29008812363315 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2091953.4202426455,
            "unit": "iter/sec",
            "range": "stddev: 2.7945047011405436e-8",
            "extra": "mean: 478.0221157521915 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1954329.2541341807,
            "unit": "iter/sec",
            "range": "stddev: 2.9285305795211275e-8",
            "extra": "mean: 511.6845065308342 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1651181.5362701395,
            "unit": "iter/sec",
            "range": "stddev: 4.8501243839471994e-8",
            "extra": "mean: 605.6269271632098 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1958898.671810963,
            "unit": "iter/sec",
            "range": "stddev: 2.4729937677813516e-8",
            "extra": "mean: 510.4909275761801 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1699718.0346396076,
            "unit": "iter/sec",
            "range": "stddev: 3.416178549190429e-8",
            "extra": "mean: 588.3328761718061 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1861237.697345587,
            "unit": "iter/sec",
            "range": "stddev: 1.0153170504067164e-7",
            "extra": "mean: 537.2768891507811 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5272494.683284575,
            "unit": "iter/sec",
            "range": "stddev: 5.325315582692947e-9",
            "extra": "mean: 189.66353881204054 nsec\nrounds: 48310"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6136532.247259237,
            "unit": "iter/sec",
            "range": "stddev: 8.839515176266934e-9",
            "extra": "mean: 162.95848529821686 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8189936.638304766,
            "unit": "iter/sec",
            "range": "stddev: 5.258377362321779e-9",
            "extra": "mean: 122.10106673145437 nsec\nrounds: 76336"
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
          "id": "b855dd55aa7c5451cb61af65ae2b1dc615ef77d6",
          "message": "Merge pull request #117 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-19T21:37:05+02:00",
          "tree_id": "eda4ca0ee426b19ed89888775022910f997770c0",
          "url": "https://github.com/sthagen/pyo3/commit/b855dd55aa7c5451cb61af65ae2b1dc615ef77d6"
        },
        "date": 1626723497614,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6969062.529873659,
            "unit": "iter/sec",
            "range": "stddev: 8.022798614442396e-7",
            "extra": "mean: 143.4913226439832 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8341415.725646109,
            "unit": "iter/sec",
            "range": "stddev: 1.27354725293593e-7",
            "extra": "mean: 119.8837263230228 nsec\nrounds: 34844"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2940958.7458302896,
            "unit": "iter/sec",
            "range": "stddev: 9.356892028603176e-7",
            "extra": "mean: 340.02517084532604 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1940182.1024442338,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011742801373746765",
            "extra": "mean: 515.4155368922809 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2602377.897810259,
            "unit": "iter/sec",
            "range": "stddev: 5.527976885533727e-7",
            "extra": "mean: 384.26394600164804 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1668977.721339188,
            "unit": "iter/sec",
            "range": "stddev: 6.526843138265178e-7",
            "extra": "mean: 599.1691723707632 nsec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1522516.0612352495,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013453549466677359",
            "extra": "mean: 656.8075210903146 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1352913.7534947419,
            "unit": "iter/sec",
            "range": "stddev: 6.411865326017942e-7",
            "extra": "mean: 739.1454166361589 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1588157.954182579,
            "unit": "iter/sec",
            "range": "stddev: 0.000001706100969304103",
            "extra": "mean: 629.6602912613941 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1372385.0175117683,
            "unit": "iter/sec",
            "range": "stddev: 7.146020794418768e-7",
            "extra": "mean: 728.6584939644508 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1548227.2725440892,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025358849449209948",
            "extra": "mean: 645.9000030123308 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4419616.482382617,
            "unit": "iter/sec",
            "range": "stddev: 1.5021480175432e-7",
            "extra": "mean: 226.2639765206214 nsec\nrounds: 46083"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5349202.215150693,
            "unit": "iter/sec",
            "range": "stddev: 2.407087528332383e-7",
            "extra": "mean: 186.94376465474934 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6888355.6432761345,
            "unit": "iter/sec",
            "range": "stddev: 1.279160447236173e-7",
            "extra": "mean: 145.17252763743764 nsec\nrounds: 66667"
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
          "id": "cc48212eeef5cc3554813a0560d940b99d44bbaa",
          "message": "Merge pull request #118 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-20T05:28:02+02:00",
          "tree_id": "767d830d955ab81eeedfa6a6cf70d1e77d310934",
          "url": "https://github.com/sthagen/pyo3/commit/cc48212eeef5cc3554813a0560d940b99d44bbaa"
        },
        "date": 1626752436613,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7646840.210866299,
            "unit": "iter/sec",
            "range": "stddev: 2.416230639720318e-7",
            "extra": "mean: 130.77296928201955 nsec\nrounds: 69926"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8368175.687985577,
            "unit": "iter/sec",
            "range": "stddev: 4.267852175657168e-8",
            "extra": "mean: 119.50035913274503 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3085548.4613066805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011886069153758473",
            "extra": "mean: 324.0914905535193 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1938278.6958563915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011232378825160325",
            "extra": "mean: 515.9216794454583 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2929047.1161134425,
            "unit": "iter/sec",
            "range": "stddev: 6.092782880009922e-7",
            "extra": "mean: 341.4079597760238 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1959534.4351608115,
            "unit": "iter/sec",
            "range": "stddev: 3.4969057725326765e-7",
            "extra": "mean: 510.3253007736383 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1734256.813854609,
            "unit": "iter/sec",
            "range": "stddev: 7.330753227647942e-7",
            "extra": "mean: 576.615869121125 nsec\nrounds: 94331"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1362768.8196425252,
            "unit": "iter/sec",
            "range": "stddev: 7.900515399096108e-7",
            "extra": "mean: 733.8001762191686 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1685717.2132666374,
            "unit": "iter/sec",
            "range": "stddev: 8.057265730796107e-7",
            "extra": "mean: 593.219308748827 nsec\nrounds: 80000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1412668.3542504245,
            "unit": "iter/sec",
            "range": "stddev: 8.220356303170863e-7",
            "extra": "mean: 707.8802303393946 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1517201.1658132703,
            "unit": "iter/sec",
            "range": "stddev: 0.000001805570148531379",
            "extra": "mean: 659.1083783302835 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4201758.00154166,
            "unit": "iter/sec",
            "range": "stddev: 5.771619734128053e-7",
            "extra": "mean: 237.99561984125427 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5244002.0938942265,
            "unit": "iter/sec",
            "range": "stddev: 2.5851866723780196e-7",
            "extra": "mean: 190.69405047804923 nsec\nrounds: 51547"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7361403.671941603,
            "unit": "iter/sec",
            "range": "stddev: 6.106702463933606e-8",
            "extra": "mean: 135.8436576181398 nsec\nrounds: 71943"
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
          "id": "ce293152c37f1d3c0380aa32ce0f2ee2b5df9643",
          "message": "Merge pull request #119 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-21T10:55:35+02:00",
          "tree_id": "3dd2ae26a8d0d6eca84ef5755ca2133145c9c08e",
          "url": "https://github.com/sthagen/pyo3/commit/ce293152c37f1d3c0380aa32ce0f2ee2b5df9643"
        },
        "date": 1626858782253,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7236480.440871541,
            "unit": "iter/sec",
            "range": "stddev: 2.9948918661980884e-8",
            "extra": "mean: 138.1887242245416 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8146630.205303365,
            "unit": "iter/sec",
            "range": "stddev: 4.6220962495528054e-8",
            "extra": "mean: 122.75014021733429 nsec\nrounds: 72459"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3145022.88964065,
            "unit": "iter/sec",
            "range": "stddev: 7.073878469814289e-8",
            "extra": "mean: 317.96270968134667 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1954465.1667182462,
            "unit": "iter/sec",
            "range": "stddev: 6.632066854646774e-8",
            "extra": "mean: 511.64892423181504 nsec\nrounds: 92585"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2761307.3373086443,
            "unit": "iter/sec",
            "range": "stddev: 6.753628236978635e-8",
            "extra": "mean: 362.14730120362384 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1708872.773595023,
            "unit": "iter/sec",
            "range": "stddev: 1.1210248075947452e-7",
            "extra": "mean: 585.1810710849168 nsec\nrounds: 149232"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1673221.5448319458,
            "unit": "iter/sec",
            "range": "stddev: 8.425892164188024e-8",
            "extra": "mean: 597.6494882514521 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1400599.4804858011,
            "unit": "iter/sec",
            "range": "stddev: 9.489741333776852e-8",
            "extra": "mean: 713.9799878071204 nsec\nrounds: 74622"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1663770.7396874793,
            "unit": "iter/sec",
            "range": "stddev: 9.80207153261451e-8",
            "extra": "mean: 601.0443483266174 nsec\nrounds: 79994"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1457811.6993001343,
            "unit": "iter/sec",
            "range": "stddev: 8.514126072218695e-8",
            "extra": "mean: 685.9596479298592 nsec\nrounds: 75752"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1553566.8793486934,
            "unit": "iter/sec",
            "range": "stddev: 3.294165283096145e-7",
            "extra": "mean: 643.6800457661875 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4248304.680991133,
            "unit": "iter/sec",
            "range": "stddev: 4.486524618037426e-8",
            "extra": "mean: 235.38801359373807 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5089144.684279871,
            "unit": "iter/sec",
            "range": "stddev: 3.7034174502659555e-8",
            "extra": "mean: 196.49667322069013 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7157431.829678337,
            "unit": "iter/sec",
            "range": "stddev: 2.0801790799721928e-8",
            "extra": "mean: 139.7149178360165 nsec\nrounds: 64931"
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
          "id": "6429ba17c306d0c6d7165eaca82a9172db32b941",
          "message": "Merge pull request #120 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-22T09:44:06+02:00",
          "tree_id": "1e98c7c2cf0a72aabb5a6f2ba50b0e576afb5752",
          "url": "https://github.com/sthagen/pyo3/commit/6429ba17c306d0c6d7165eaca82a9172db32b941"
        },
        "date": 1626940818474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6746323.025121038,
            "unit": "iter/sec",
            "range": "stddev: 3.1646288183583203e-7",
            "extra": "mean: 148.22889391407082 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8283877.07461016,
            "unit": "iter/sec",
            "range": "stddev: 8.341259533431711e-8",
            "extra": "mean: 120.71642191128926 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2924117.6934625795,
            "unit": "iter/sec",
            "range": "stddev: 6.499555138385788e-7",
            "extra": "mean: 341.9834988981434 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1926603.8364428382,
            "unit": "iter/sec",
            "range": "stddev: 4.5931914761994425e-7",
            "extra": "mean: 519.0480684634522 nsec\nrounds: 108696"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2661232.785025853,
            "unit": "iter/sec",
            "range": "stddev: 3.6935307459221816e-7",
            "extra": "mean: 375.76569987645064 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1446764.2062350858,
            "unit": "iter/sec",
            "range": "stddev: 6.79816194681815e-7",
            "extra": "mean: 691.1976365536042 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1603092.620845763,
            "unit": "iter/sec",
            "range": "stddev: 4.773684414630564e-7",
            "extra": "mean: 623.794275512557 nsec\nrounds: 94349"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1338215.1720837362,
            "unit": "iter/sec",
            "range": "stddev: 7.585929623520283e-7",
            "extra": "mean: 747.2639832971531 nsec\nrounds: 71943"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1582497.4821276283,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017947174351631663",
            "extra": "mean: 631.9125378044548 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1304534.8287878816,
            "unit": "iter/sec",
            "range": "stddev: 8.497481725092992e-7",
            "extra": "mean: 766.5567663908669 nsec\nrounds: 68966"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1554192.4757015207,
            "unit": "iter/sec",
            "range": "stddev: 0.000002185141629715753",
            "extra": "mean: 643.4209505155576 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4155787.2829053677,
            "unit": "iter/sec",
            "range": "stddev: 1.9630948310694733e-7",
            "extra": "mean: 240.62829301074763 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4899598.419471835,
            "unit": "iter/sec",
            "range": "stddev: 3.8902583568848163e-7",
            "extra": "mean: 204.09835957691004 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7000631.791328344,
            "unit": "iter/sec",
            "range": "stddev: 1.3321154635174383e-7",
            "extra": "mean: 142.84425032015966 nsec\nrounds: 78747"
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
          "id": "949d02ab93d240eb4750c57682b047648dbea873",
          "message": "Merge pull request #121 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-24T09:54:01+02:00",
          "tree_id": "9cebdb9f037977b7b594fa792f0c1da4a5aab1a6",
          "url": "https://github.com/sthagen/pyo3/commit/949d02ab93d240eb4750c57682b047648dbea873"
        },
        "date": 1627113360627,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6684245.368006464,
            "unit": "iter/sec",
            "range": "stddev: 1.8912087576940288e-8",
            "extra": "mean: 149.60551938850566 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8009465.757019579,
            "unit": "iter/sec",
            "range": "stddev: 3.777745297111179e-9",
            "extra": "mean: 124.85227234074692 nsec\nrounds: 74069"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2907670.065257801,
            "unit": "iter/sec",
            "range": "stddev: 1.7935623582886975e-8",
            "extra": "mean: 343.9179747206561 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1823149.871949648,
            "unit": "iter/sec",
            "range": "stddev: 2.5575588291279928e-8",
            "extra": "mean: 548.5012589395506 nsec\nrounds: 158705"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2627514.7346327533,
            "unit": "iter/sec",
            "range": "stddev: 2.3667961928512406e-8",
            "extra": "mean: 380.58778008708293 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1598729.3474708328,
            "unit": "iter/sec",
            "range": "stddev: 4.1579167865433284e-8",
            "extra": "mean: 625.4967431366273 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1590197.8434915843,
            "unit": "iter/sec",
            "range": "stddev: 1.843804331989008e-8",
            "extra": "mean: 628.852569567299 nsec\nrounds: 78126"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1281534.0066471566,
            "unit": "iter/sec",
            "range": "stddev: 3.6876238943194356e-8",
            "extra": "mean: 780.314837385587 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1576559.6365626578,
            "unit": "iter/sec",
            "range": "stddev: 2.1224371588331623e-8",
            "extra": "mean: 634.2925296377526 nsec\nrounds: 76924"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1395343.7069886986,
            "unit": "iter/sec",
            "range": "stddev: 2.5085013577070722e-8",
            "extra": "mean: 716.6693016147324 nsec\nrounds: 68028"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1479297.5453591293,
            "unit": "iter/sec",
            "range": "stddev: 9.95749069256462e-8",
            "extra": "mean: 675.9965249298307 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4145011.9855564316,
            "unit": "iter/sec",
            "range": "stddev: 1.1516800740983364e-8",
            "extra": "mean: 241.2538259203874 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5042105.162381215,
            "unit": "iter/sec",
            "range": "stddev: 9.650430978249194e-9",
            "extra": "mean: 198.32985782592826 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6600560.832772078,
            "unit": "iter/sec",
            "range": "stddev: 4.281788498310435e-9",
            "extra": "mean: 151.50227766027353 nsec\nrounds: 62112"
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
          "id": "e968203f16b6c5527af8921fda3f789e6cf1fa24",
          "message": "Merge pull request #122 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-24T10:48:41+02:00",
          "tree_id": "d95fb16507f08984501047a53e164a65e0c97add",
          "url": "https://github.com/sthagen/pyo3/commit/e968203f16b6c5527af8921fda3f789e6cf1fa24"
        },
        "date": 1627118254516,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7629703.784829693,
            "unit": "iter/sec",
            "range": "stddev: 1.2969188500130186e-7",
            "extra": "mean: 131.06668727932112 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8742298.500693431,
            "unit": "iter/sec",
            "range": "stddev: 1.608725968426817e-7",
            "extra": "mean: 114.38639391237409 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3125072.3291576374,
            "unit": "iter/sec",
            "range": "stddev: 4.271354076231033e-7",
            "extra": "mean: 319.99259366579713 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1998762.6664004317,
            "unit": "iter/sec",
            "range": "stddev: 5.815297934979822e-7",
            "extra": "mean: 500.30952489273244 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2926323.008532599,
            "unit": "iter/sec",
            "range": "stddev: 7.115612424351869e-7",
            "extra": "mean: 341.72577568639235 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1575801.7032528636,
            "unit": "iter/sec",
            "range": "stddev: 0.00000143999115074074",
            "extra": "mean: 634.5976133518482 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1706506.050855913,
            "unit": "iter/sec",
            "range": "stddev: 9.524778503378889e-7",
            "extra": "mean: 585.9926482523501 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1204980.6450089042,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014571580548702748",
            "extra": "mean: 829.8888485404551 nsec\nrounds: 74627"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1578347.0580599955,
            "unit": "iter/sec",
            "range": "stddev: 8.156070433115639e-7",
            "extra": "mean: 633.574216071962 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1101780.350652465,
            "unit": "iter/sec",
            "range": "stddev: 9.162757365205458e-7",
            "extra": "mean: 907.6219224710296 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1398070.9216176237,
            "unit": "iter/sec",
            "range": "stddev: 0.00000462504850346482",
            "extra": "mean: 715.2712959961718 nsec\nrounds: 156250"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4023700.36697953,
            "unit": "iter/sec",
            "range": "stddev: 4.102663156236111e-7",
            "extra": "mean: 248.52745204553435 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5288316.370592274,
            "unit": "iter/sec",
            "range": "stddev: 1.938139861564734e-7",
            "extra": "mean: 189.09609976451696 nsec\nrounds: 59881"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6545458.028467741,
            "unit": "iter/sec",
            "range": "stddev: 2.690385602102648e-7",
            "extra": "mean: 152.77769648065063 nsec\nrounds: 75758"
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
          "id": "6ced166ed75d88d0e639b1d115f4d1cf18a17eff",
          "message": "Merge pull request #123 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-24T13:47:49+02:00",
          "tree_id": "197f2fc38b104193f9e54362115a253836375fc9",
          "url": "https://github.com/sthagen/pyo3/commit/6ced166ed75d88d0e639b1d115f4d1cf18a17eff"
        },
        "date": 1627127965306,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 9384085.286561333,
            "unit": "iter/sec",
            "range": "stddev: 4.1438441138798255e-8",
            "extra": "mean: 106.56339637405765 nsec\nrounds: 42195"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10407141.703453582,
            "unit": "iter/sec",
            "range": "stddev: 5.014854691298307e-8",
            "extra": "mean: 96.08786240214532 nsec\nrounds: 103083"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3722007.416126501,
            "unit": "iter/sec",
            "range": "stddev: 3.176334624775231e-7",
            "extra": "mean: 268.6722212498049 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1997212.3839107426,
            "unit": "iter/sec",
            "range": "stddev: 9.001908763275801e-7",
            "extra": "mean: 500.6978767290867 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3286374.833266628,
            "unit": "iter/sec",
            "range": "stddev: 3.684006848864193e-7",
            "extra": "mean: 304.2866534514222 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2090622.0701050633,
            "unit": "iter/sec",
            "range": "stddev: 5.938081659917874e-7",
            "extra": "mean: 478.32652984018154 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 2034123.3842987414,
            "unit": "iter/sec",
            "range": "stddev: 3.841503541492244e-7",
            "extra": "mean: 491.6122629137547 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1817151.0453278278,
            "unit": "iter/sec",
            "range": "stddev: 4.0592630604078027e-7",
            "extra": "mean: 550.3119856605323 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 2023319.753553583,
            "unit": "iter/sec",
            "range": "stddev: 3.5507474920492653e-7",
            "extra": "mean: 494.2372545130597 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1753830.177784446,
            "unit": "iter/sec",
            "range": "stddev: 8.138348193364495e-7",
            "extra": "mean: 570.1806324622072 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1701008.1283758173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015050056229983449",
            "extra": "mean: 587.8866675110103 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5321947.962328527,
            "unit": "iter/sec",
            "range": "stddev: 2.6819449131502993e-7",
            "extra": "mean: 187.90112325012674 nsec\nrounds: 52357"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6921159.963462512,
            "unit": "iter/sec",
            "range": "stddev: 2.2508829634769752e-7",
            "extra": "mean: 144.48445134629506 nsec\nrounds: 65360"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8425039.929766878,
            "unit": "iter/sec",
            "range": "stddev: 1.4200459155810078e-7",
            "extra": "mean: 118.69379947593139 nsec\nrounds: 89286"
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
          "id": "9f1e26758698d028b14a4e7497d08594b85d58f3",
          "message": "Merge pull request #124 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-25T07:52:36+02:00",
          "tree_id": "94b0d69e9b5767e0cc73a12bfd3830e925f048a2",
          "url": "https://github.com/sthagen/pyo3/commit/9f1e26758698d028b14a4e7497d08594b85d58f3"
        },
        "date": 1627193400598,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7604343.880113417,
            "unit": "iter/sec",
            "range": "stddev: 2.0399391863062015e-8",
            "extra": "mean: 131.5037846479896 nsec\nrounds: 71938"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8746348.548095858,
            "unit": "iter/sec",
            "range": "stddev: 1.8711073467273916e-8",
            "extra": "mean: 114.33342662954638 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3178884.0844487143,
            "unit": "iter/sec",
            "range": "stddev: 8.141947126220552e-8",
            "extra": "mean: 314.5757987506664 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1986777.7592155538,
            "unit": "iter/sec",
            "range": "stddev: 1.2828930472701064e-7",
            "extra": "mean: 503.327559089572 nsec\nrounds: 178540"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2842121.395395903,
            "unit": "iter/sec",
            "range": "stddev: 8.269377868224381e-8",
            "extra": "mean: 351.84985469658756 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1837561.9180881241,
            "unit": "iter/sec",
            "range": "stddev: 1.2988682608320572e-7",
            "extra": "mean: 544.1993492333539 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1729315.8064230857,
            "unit": "iter/sec",
            "range": "stddev: 1.0123453469452131e-7",
            "extra": "mean: 578.2633780860817 nsec\nrounds: 88488"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1405699.074523694,
            "unit": "iter/sec",
            "range": "stddev: 1.0733801957396001e-7",
            "extra": "mean: 711.3898117482332 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1685894.776081439,
            "unit": "iter/sec",
            "range": "stddev: 1.2868359787601594e-7",
            "extra": "mean: 593.1568293510425 nsec\nrounds: 76918"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1498671.4738571777,
            "unit": "iter/sec",
            "range": "stddev: 1.7365767675207957e-7",
            "extra": "mean: 667.257646151283 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1677124.954924963,
            "unit": "iter/sec",
            "range": "stddev: 4.2710699868036877e-7",
            "extra": "mean: 596.2584940755005 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4444310.933792779,
            "unit": "iter/sec",
            "range": "stddev: 5.6065775149582986e-8",
            "extra": "mean: 225.00675917964773 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5518587.194215328,
            "unit": "iter/sec",
            "range": "stddev: 4.610696643548112e-8",
            "extra": "mean: 181.20579865959306 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7224823.947669875,
            "unit": "iter/sec",
            "range": "stddev: 2.0437385912273645e-8",
            "extra": "mean: 138.4116771901078 nsec\nrounds: 76336"
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
          "id": "0ef7582d8f0852a2b35e3a93525365b3e57c6d11",
          "message": "Merge pull request #125 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-26T21:08:43+02:00",
          "tree_id": "b0fb5c54c2ab9fc4d804982ecc2b3553de705979",
          "url": "https://github.com/sthagen/pyo3/commit/0ef7582d8f0852a2b35e3a93525365b3e57c6d11"
        },
        "date": 1627328109269,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 9112418.26016767,
            "unit": "iter/sec",
            "range": "stddev: 1.326080315973012e-7",
            "extra": "mean: 109.74035337816758 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10630049.168745423,
            "unit": "iter/sec",
            "range": "stddev: 4.939395516407435e-8",
            "extra": "mean: 94.0729421027742 nsec\nrounds: 104167"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3666427.5504793357,
            "unit": "iter/sec",
            "range": "stddev: 5.465204840713477e-7",
            "extra": "mean: 272.74505938893276 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1960131.8189184235,
            "unit": "iter/sec",
            "range": "stddev: 0.000001001459301208168",
            "extra": "mean: 510.1697703939796 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3368717.3994879355,
            "unit": "iter/sec",
            "range": "stddev: 4.4897636037322153e-7",
            "extra": "mean: 296.8488838371658 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1903813.6714783027,
            "unit": "iter/sec",
            "range": "stddev: 4.822718622907279e-7",
            "extra": "mean: 525.261486972998 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 2042045.5150030234,
            "unit": "iter/sec",
            "range": "stddev: 3.373187680221259e-7",
            "extra": "mean: 489.7050494977341 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1474650.5701157623,
            "unit": "iter/sec",
            "range": "stddev: 6.929529545526648e-7",
            "extra": "mean: 678.1267510185057 nsec\nrounds: 78126"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1992902.6260607066,
            "unit": "iter/sec",
            "range": "stddev: 5.599393448279587e-7",
            "extra": "mean: 501.78066249909386 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1675706.0389742653,
            "unit": "iter/sec",
            "range": "stddev: 4.4072982664275497e-7",
            "extra": "mean: 596.7633801761325 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1903324.3749800858,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016309542683263307",
            "extra": "mean: 525.3965183997934 nsec\nrounds: 156250"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4413348.711593756,
            "unit": "iter/sec",
            "range": "stddev: 2.084571476911068e-7",
            "extra": "mean: 226.5853131826422 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4895834.361946894,
            "unit": "iter/sec",
            "range": "stddev: 8.564548165838032e-8",
            "extra": "mean: 204.25527623487008 nsec\nrounds: 49505"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8563348.824010685,
            "unit": "iter/sec",
            "range": "stddev: 6.40117124669456e-8",
            "extra": "mean: 116.7767447702546 nsec\nrounds: 84034"
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
          "id": "c63c5d166a5d8859fca9ae92bb7f3a8f90c8004d",
          "message": "Merge pull request #126 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-08-01T06:55:18+02:00",
          "tree_id": "ed0a1573d54007ebd3cd46de652f13fd9c1ab6eb",
          "url": "https://github.com/sthagen/pyo3/commit/c63c5d166a5d8859fca9ae92bb7f3a8f90c8004d"
        },
        "date": 1627795146861,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 2620392.1252270984,
            "unit": "iter/sec",
            "range": "stddev: 0.000002123571863862737",
            "extra": "mean: 381.6222733890769 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 6863148.078846435,
            "unit": "iter/sec",
            "range": "stddev: 3.5695125804773596e-7",
            "extra": "mean: 145.70572986489884 nsec\nrounds: 72993"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2587383.1982619534,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010013616161362604",
            "extra": "mean: 386.49087644709635 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1558977.9599541575,
            "unit": "iter/sec",
            "range": "stddev: 7.594975794139047e-7",
            "extra": "mean: 641.4458867842994 nsec\nrounds: 79366"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2244514.0020887936,
            "unit": "iter/sec",
            "range": "stddev: 0.000001603219026639809",
            "extra": "mean: 445.53074699923116 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 799907.0444336385,
            "unit": "iter/sec",
            "range": "stddev: 0.000005297651178871922",
            "extra": "mean: 1.2501452599508411 usec\nrounds: 50000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1372738.123433504,
            "unit": "iter/sec",
            "range": "stddev: 0.000001047990412446664",
            "extra": "mean: 728.4710630011733 nsec\nrounds: 76924"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 902642.0638185191,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038054936361727744",
            "extra": "mean: 1.107858851347587 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1312225.6977235344,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010063403521018808",
            "extra": "mean: 762.0640273503722 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1046391.1512842749,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023368211696719536",
            "extra": "mean: 955.6655737901197 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1258767.4813775502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033136260649320734",
            "extra": "mean: 794.4278945827515 nsec\nrounds: 136987"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 3420586.969067635,
            "unit": "iter/sec",
            "range": "stddev: 7.458854653826885e-7",
            "extra": "mean: 292.3474856928194 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4358951.808939707,
            "unit": "iter/sec",
            "range": "stddev: 4.613702999705133e-7",
            "extra": "mean: 229.41295151518216 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 5332621.672757708,
            "unit": "iter/sec",
            "range": "stddev: 3.687563589765991e-7",
            "extra": "mean: 187.52502265606486 nsec\nrounds: 61350"
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
          "id": "31cff63da35052d7f366b977414b2114857f9ad7",
          "message": "Merge pull request #129 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-08-03T12:34:45+02:00",
          "tree_id": "79a3bba88442b73354a345dcfa5104092cf9c33f",
          "url": "https://github.com/sthagen/pyo3/commit/31cff63da35052d7f366b977414b2114857f9ad7"
        },
        "date": 1627987561511,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7964337.254233043,
            "unit": "iter/sec",
            "range": "stddev: 3.7142785717021984e-8",
            "extra": "mean: 125.55972557143085 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8712596.96650918,
            "unit": "iter/sec",
            "range": "stddev: 2.0541055157229068e-8",
            "extra": "mean: 114.77634095139035 nsec\nrounds: 86200"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3354671.3214931735,
            "unit": "iter/sec",
            "range": "stddev: 7.990319152832436e-8",
            "extra": "mean: 298.09179623415656 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2199944.803981102,
            "unit": "iter/sec",
            "range": "stddev: 1.2737572205460076e-7",
            "extra": "mean: 454.5568589677821 nsec\nrounds: 178540"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3135282.2307495293,
            "unit": "iter/sec",
            "range": "stddev: 7.936770370234079e-8",
            "extra": "mean: 318.9505525827607 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2018757.1297279603,
            "unit": "iter/sec",
            "range": "stddev: 1.5067511101290285e-7",
            "extra": "mean: 495.3542876823177 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1899286.2013319095,
            "unit": "iter/sec",
            "range": "stddev: 1.3683840682711387e-7",
            "extra": "mean: 526.513591947704 nsec\nrounds: 102031"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1624285.3066987465,
            "unit": "iter/sec",
            "range": "stddev: 1.5434584740120083e-7",
            "extra": "mean: 615.6553875579594 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1914713.3908884753,
            "unit": "iter/sec",
            "range": "stddev: 1.100126697701387e-7",
            "extra": "mean: 522.2713774075195 nsec\nrounds: 84739"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1679188.8618357985,
            "unit": "iter/sec",
            "range": "stddev: 1.5386492099999297e-7",
            "extra": "mean: 595.5256271215591 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2527094.967657235,
            "unit": "iter/sec",
            "range": "stddev: 9.138138665545712e-8",
            "extra": "mean: 395.711286199528 nsec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5086912.0098825805,
            "unit": "iter/sec",
            "range": "stddev: 4.16117370436701e-8",
            "extra": "mean: 196.58291671981127 nsec\nrounds: 47166"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5240364.58235192,
            "unit": "iter/sec",
            "range": "stddev: 3.899689741061297e-8",
            "extra": "mean: 190.82641756805708 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7545586.268813486,
            "unit": "iter/sec",
            "range": "stddev: 2.004354403687342e-8",
            "extra": "mean: 132.52780690257816 nsec\nrounds: 64931"
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
          "id": "d205d445542869900389afa43bd3811572adc439",
          "message": "Merge pull request #130 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-08-04T13:44:48+02:00",
          "tree_id": "9f1da8e28992840c05ce93cc115b356fb15eb194",
          "url": "https://github.com/sthagen/pyo3/commit/d205d445542869900389afa43bd3811572adc439"
        },
        "date": 1628080237191,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8106610.198113293,
            "unit": "iter/sec",
            "range": "stddev: 4.784208002413273e-7",
            "extra": "mean: 123.35612241885616 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9076112.571655506,
            "unit": "iter/sec",
            "range": "stddev: 3.6910610620101003e-7",
            "extra": "mean: 110.17932976325292 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3391796.3596646176,
            "unit": "iter/sec",
            "range": "stddev: 7.88341980703481e-7",
            "extra": "mean: 294.8290209554269 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1910520.8112988505,
            "unit": "iter/sec",
            "range": "stddev: 8.932456511914133e-7",
            "extra": "mean: 523.4174859995875 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3037110.8895767494,
            "unit": "iter/sec",
            "range": "stddev: 6.914012917028741e-7",
            "extra": "mean: 329.2602859622528 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1678777.5127873707,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018468275392625587",
            "extra": "mean: 595.6715481252747 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1690534.8529747513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012338651905416336",
            "extra": "mean: 591.5287686856815 nsec\nrounds: 103093"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1443116.7156101675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016031048961147572",
            "extra": "mean: 692.9446448667668 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1870458.937996145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015620843973582088",
            "extra": "mean: 534.6281491063768 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1603728.4661151047,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010034072114332036",
            "extra": "mean: 623.5469539442954 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1668660.6565524298,
            "unit": "iter/sec",
            "range": "stddev: 0.000003551393876360499",
            "extra": "mean: 599.2830214299355 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4145513.736320611,
            "unit": "iter/sec",
            "range": "stddev: 5.230210176121399e-7",
            "extra": "mean: 241.22462584994534 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5924337.583584509,
            "unit": "iter/sec",
            "range": "stddev: 2.780682245850885e-7",
            "extra": "mean: 168.79524265642624 nsec\nrounds: 64103"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7857369.59208255,
            "unit": "iter/sec",
            "range": "stddev: 2.799370669322207e-7",
            "extra": "mean: 127.26905464748619 nsec\nrounds: 83334"
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
          "id": "76a85ddb71cf42de19176bb61f379807e090c68c",
          "message": "Merge pull request #132 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-08-14T09:58:18+02:00",
          "tree_id": "58f18cc1c30c4144fd631fc6a008204b1301ecb5",
          "url": "https://github.com/sthagen/pyo3/commit/76a85ddb71cf42de19176bb61f379807e090c68c"
        },
        "date": 1628927987867,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 9944675.810882686,
            "unit": "iter/sec",
            "range": "stddev: 5.438616111303492e-9",
            "extra": "mean: 100.5563196846838 nsec\nrounds: 90082"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10733045.349274965,
            "unit": "iter/sec",
            "range": "stddev: 7.853776364836935e-9",
            "extra": "mean: 93.17020169561474 nsec\nrounds: 104167"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 4158782.2196871485,
            "unit": "iter/sec",
            "range": "stddev: 1.632816123497973e-8",
            "extra": "mean: 240.4550051377663 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2584597.8595269104,
            "unit": "iter/sec",
            "range": "stddev: 1.9275769583635353e-8",
            "extra": "mean: 386.90738534549337 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3739882.7115126997,
            "unit": "iter/sec",
            "range": "stddev: 1.6968420158830495e-8",
            "extra": "mean: 267.3880645837266 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2383493.264608891,
            "unit": "iter/sec",
            "range": "stddev: 2.5065634883719804e-8",
            "extra": "mean: 419.55226593177593 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 2216890.697110092,
            "unit": "iter/sec",
            "range": "stddev: 2.872128011969933e-8",
            "extra": "mean: 451.0822303077946 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1900816.9074457227,
            "unit": "iter/sec",
            "range": "stddev: 2.2696651694144165e-8",
            "extra": "mean: 526.089596573291 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 2130777.152831464,
            "unit": "iter/sec",
            "range": "stddev: 7.311332916410908e-8",
            "extra": "mean: 469.3123345496366 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1945916.7948248668,
            "unit": "iter/sec",
            "range": "stddev: 9.36501803517063e-8",
            "extra": "mean: 513.8965872836658 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2954683.2540816413,
            "unit": "iter/sec",
            "range": "stddev: 1.8731488138969394e-8",
            "extra": "mean: 338.44575340434506 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 6006526.656689837,
            "unit": "iter/sec",
            "range": "stddev: 5.450520167915044e-9",
            "extra": "mean: 166.48556764268614 nsec\nrounds: 55246"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4736897.852938395,
            "unit": "iter/sec",
            "range": "stddev: 1.2971557105598477e-8",
            "extra": "mean: 211.10862658360315 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 9471660.748973861,
            "unit": "iter/sec",
            "range": "stddev: 7.015907880147992e-9",
            "extra": "mean: 105.57810573066318 nsec\nrounds: 86957"
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
          "id": "6f9e262840238e4fa89e36740a88f7f80812e5d4",
          "message": "Merge pull request #133 from PyO3/main\n\nSync Fork from Upstream",
          "timestamp": "2021-08-16T13:03:46+02:00",
          "tree_id": "5a57dcff7b0b6bddc53523d3d182f2bba64a3af4",
          "url": "https://github.com/sthagen/pyo3/commit/6f9e262840238e4fa89e36740a88f7f80812e5d4"
        },
        "date": 1629113894107,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8789060.800565759,
            "unit": "iter/sec",
            "range": "stddev: 3.375874521872863e-9",
            "extra": "mean: 113.7777997775754 nsec\nrounds: 80001"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9028943.346323386,
            "unit": "iter/sec",
            "range": "stddev: 7.687949984864464e-9",
            "extra": "mean: 110.75493129630411 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3668093.3393874587,
            "unit": "iter/sec",
            "range": "stddev: 1.3392714548139883e-8",
            "extra": "mean: 272.6211978476057 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2198560.5335886576,
            "unit": "iter/sec",
            "range": "stddev: 2.7028122566787476e-8",
            "extra": "mean: 454.843059684983 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3262830.5354119064,
            "unit": "iter/sec",
            "range": "stddev: 5.678520377525762e-8",
            "extra": "mean: 306.48235915009235 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1939593.0684133824,
            "unit": "iter/sec",
            "range": "stddev: 8.628582491888255e-8",
            "extra": "mean: 515.5720631740925 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1943864.7312731452,
            "unit": "iter/sec",
            "range": "stddev: 2.4429791544930332e-8",
            "extra": "mean: 514.4390882309899 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1708713.6426870183,
            "unit": "iter/sec",
            "range": "stddev: 2.6225801626854603e-8",
            "extra": "mean: 585.2355684525221 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1926176.6802495297,
            "unit": "iter/sec",
            "range": "stddev: 3.1434835202620035e-8",
            "extra": "mean: 519.163174517759 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1717896.640977065,
            "unit": "iter/sec",
            "range": "stddev: 2.86390787053345e-8",
            "extra": "mean: 582.1071979230088 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2600129.948500472,
            "unit": "iter/sec",
            "range": "stddev: 1.775175623396922e-8",
            "extra": "mean: 384.5961624252575 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5298746.892567197,
            "unit": "iter/sec",
            "range": "stddev: 4.404667228338377e-9",
            "extra": "mean: 188.72386627911652 nsec\nrounds: 48310"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5785101.056579434,
            "unit": "iter/sec",
            "range": "stddev: 8.090823384173142e-9",
            "extra": "mean: 172.85782741254252 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8343502.235971385,
            "unit": "iter/sec",
            "range": "stddev: 3.66485077359382e-9",
            "extra": "mean: 119.85374627079771 nsec\nrounds: 75758"
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
          "id": "823ff144b85aa969c0053fbb760bf90789dcac1a",
          "message": "Merge pull request #134 from PyO3/main\n\nSync Fork from Upstream",
          "timestamp": "2021-08-17T10:31:06+02:00",
          "tree_id": "3a5eba4155f18c3bbccf52f286a38fcba69365ad",
          "url": "https://github.com/sthagen/pyo3/commit/823ff144b85aa969c0053fbb760bf90789dcac1a"
        },
        "date": 1629193049314,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7691086.273350711,
            "unit": "iter/sec",
            "range": "stddev: 1.4974779912342413e-8",
            "extra": "mean: 130.02064525848618 nsec\nrounds: 69445"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8254662.460282464,
            "unit": "iter/sec",
            "range": "stddev: 1.4934455247597967e-8",
            "extra": "mean: 121.14365727383688 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3222588.5207885522,
            "unit": "iter/sec",
            "range": "stddev: 4.689025885300046e-8",
            "extra": "mean: 310.30955194831915 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2081609.8907547914,
            "unit": "iter/sec",
            "range": "stddev: 9.669508404602047e-8",
            "extra": "mean: 480.39740992830195 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2971589.0540909823,
            "unit": "iter/sec",
            "range": "stddev: 6.184530357590915e-8",
            "extra": "mean: 336.52028655276126 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1892206.171012088,
            "unit": "iter/sec",
            "range": "stddev: 1.0025121344738463e-7",
            "extra": "mean: 528.483637417312 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1846534.637398296,
            "unit": "iter/sec",
            "range": "stddev: 8.467176211209253e-8",
            "extra": "mean: 541.5549644977204 nsec\nrounds: 100000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1606294.85175658,
            "unit": "iter/sec",
            "range": "stddev: 1.1373748436725411e-7",
            "extra": "mean: 622.5507097323293 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1818276.7570411651,
            "unit": "iter/sec",
            "range": "stddev: 8.423150930335744e-8",
            "extra": "mean: 549.9712824945829 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1662023.4811124394,
            "unit": "iter/sec",
            "range": "stddev: 9.164580435134998e-8",
            "extra": "mean: 601.6762165902322 nsec\nrounds: 71943"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1770667.6355938313,
            "unit": "iter/sec",
            "range": "stddev: 3.1041749001236694e-7",
            "extra": "mean: 564.7587271027454 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4975660.071117885,
            "unit": "iter/sec",
            "range": "stddev: 2.6467212193605887e-8",
            "extra": "mean: 200.9783597968989 nsec\nrounds: 50762"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5176567.442772346,
            "unit": "iter/sec",
            "range": "stddev: 3.702641276503696e-8",
            "extra": "mean: 193.17820371435397 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7912381.949036334,
            "unit": "iter/sec",
            "range": "stddev: 1.818973486467559e-8",
            "extra": "mean: 126.38419207281612 nsec\nrounds: 80001"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2685081b870270262fa938574690d44166255dd1",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-25T20:49:29+02:00",
          "tree_id": "e5d752fffa99d4279dfe72a28758536e2d941150",
          "url": "https://github.com/sthagen/pyo3/commit/2685081b870270262fa938574690d44166255dd1"
        },
        "date": 1629917568100,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6900645.570593377,
            "unit": "iter/sec",
            "range": "stddev: 2.1424873132528617e-7",
            "extra": "mean: 144.91397794153804 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8852143.1443642,
            "unit": "iter/sec",
            "range": "stddev: 2.894932484196155e-7",
            "extra": "mean: 112.9669938332494 nsec\nrounds: 92593"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2915633.439874416,
            "unit": "iter/sec",
            "range": "stddev: 7.195024735830292e-7",
            "extra": "mean: 342.9786427622691 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1533173.104503439,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017388804169160124",
            "extra": "mean: 652.2420704242577 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2758296.352296248,
            "unit": "iter/sec",
            "range": "stddev: 8.016535744098334e-7",
            "extra": "mean: 362.54262496758855 nsec\nrounds: 46949"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1648256.0075134109,
            "unit": "iter/sec",
            "range": "stddev: 8.88370046234003e-7",
            "extra": "mean: 606.701868788407 nsec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1623277.3039498269,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011391104733614758",
            "extra": "mean: 616.037689658489 nsec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1308913.6192658264,
            "unit": "iter/sec",
            "range": "stddev: 7.119051049221225e-7",
            "extra": "mean: 763.9923561653336 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1673169.5624465174,
            "unit": "iter/sec",
            "range": "stddev: 0.000001027931170965902",
            "extra": "mean: 597.6680561520163 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1408357.229404433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011656805518948564",
            "extra": "mean: 710.0471237846571 nsec\nrounds: 80001"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1669604.8568141747,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055379992408373615",
            "extra": "mean: 598.9441129849916 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4253769.777456481,
            "unit": "iter/sec",
            "range": "stddev: 1.729510958597915e-7",
            "extra": "mean: 235.08559520538947 nsec\nrounds: 54645"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 3824458.7788518835,
            "unit": "iter/sec",
            "range": "stddev: 9.853837494924206e-7",
            "extra": "mean: 261.47490607818486 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6600230.779958323,
            "unit": "iter/sec",
            "range": "stddev: 1.8239969164940802e-7",
            "extra": "mean: 151.509853721588 nsec\nrounds: 69935"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d7030ea54c970e7f642223d53597cbd8b7bc350",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-26T12:14:33+02:00",
          "tree_id": "79b088edfb429151625d594bed9dd1e0565c5a61",
          "url": "https://github.com/sthagen/pyo3/commit/0d7030ea54c970e7f642223d53597cbd8b7bc350"
        },
        "date": 1629972971746,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8784268.551549641,
            "unit": "iter/sec",
            "range": "stddev: 2.255169717142418e-9",
            "extra": "mean: 113.83987114370467 nsec\nrounds: 40161"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10353931.721595984,
            "unit": "iter/sec",
            "range": "stddev: 2.865379709097674e-9",
            "extra": "mean: 96.5816683834848 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3663583.4173834417,
            "unit": "iter/sec",
            "range": "stddev: 1.0753550758088855e-8",
            "extra": "mean: 272.956798323721 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2289532.710799181,
            "unit": "iter/sec",
            "range": "stddev: 2.1460657699545813e-8",
            "extra": "mean: 436.7703485008292 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3314105.6217715144,
            "unit": "iter/sec",
            "range": "stddev: 1.0796320475526405e-8",
            "extra": "mean: 301.7405339861068 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2108512.1269705864,
            "unit": "iter/sec",
            "range": "stddev: 2.0737013638060062e-8",
            "extra": "mean: 474.2680808937692 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1970373.2689987218,
            "unit": "iter/sec",
            "range": "stddev: 1.415796592743437e-8",
            "extra": "mean: 507.5180503787138 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1696760.5315547376,
            "unit": "iter/sec",
            "range": "stddev: 2.794806118624383e-8",
            "extra": "mean: 589.3583575311391 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1872849.763896243,
            "unit": "iter/sec",
            "range": "stddev: 1.4222664819757864e-8",
            "extra": "mean: 533.9456582571986 nsec\nrounds: 94340"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1743775.167136221,
            "unit": "iter/sec",
            "range": "stddev: 2.3145621812745404e-8",
            "extra": "mean: 573.4684257725823 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1871063.7962445284,
            "unit": "iter/sec",
            "range": "stddev: 7.587752323861444e-8",
            "extra": "mean: 534.4553200201574 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5417101.5496295,
            "unit": "iter/sec",
            "range": "stddev: 3.75230257337536e-9",
            "extra": "mean: 184.6005637587551 nsec\nrounds: 50252"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6378213.176915493,
            "unit": "iter/sec",
            "range": "stddev: 3.3961428080945333e-9",
            "extra": "mean: 156.78372175127217 nsec\nrounds: 61729"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8208417.2585131405,
            "unit": "iter/sec",
            "range": "stddev: 3.143629058101936e-9",
            "extra": "mean: 121.82616556958978 nsec\nrounds: 78734"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e09bf82fc50c5814427ee6981e26fecbe563a055",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-27T12:48:40+02:00",
          "tree_id": "824fc64854f2b55cfb5dee56469b033e8d9d89ae",
          "url": "https://github.com/sthagen/pyo3/commit/e09bf82fc50c5814427ee6981e26fecbe563a055"
        },
        "date": 1630062310620,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8730262.86119784,
            "unit": "iter/sec",
            "range": "stddev: 3.2048097604021715e-9",
            "extra": "mean: 114.54408829362673 nsec\nrounds: 77514"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10314392.922289489,
            "unit": "iter/sec",
            "range": "stddev: 3.1286520459071064e-9",
            "extra": "mean: 96.95190085683528 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3647465.2421287047,
            "unit": "iter/sec",
            "range": "stddev: 1.2913998325803603e-8",
            "extra": "mean: 274.16299638808937 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2290648.402579196,
            "unit": "iter/sec",
            "range": "stddev: 2.7325724327962056e-8",
            "extra": "mean: 436.55761350100875 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3255778.5293173613,
            "unit": "iter/sec",
            "range": "stddev: 6.948879339129968e-8",
            "extra": "mean: 307.14619898036585 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2097847.6920169233,
            "unit": "iter/sec",
            "range": "stddev: 5.31297769592262e-8",
            "extra": "mean: 476.6790286085401 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1987007.1278001217,
            "unit": "iter/sec",
            "range": "stddev: 1.577072676530118e-8",
            "extra": "mean: 503.26945787409073 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1729553.6114983908,
            "unit": "iter/sec",
            "range": "stddev: 1.7940298009468458e-8",
            "extra": "mean: 578.1838697290974 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1967809.4223185729,
            "unit": "iter/sec",
            "range": "stddev: 3.6848622875823756e-8",
            "extra": "mean: 508.17929249589565 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1741894.8256996034,
            "unit": "iter/sec",
            "range": "stddev: 3.628364066326972e-8",
            "extra": "mean: 574.0874737355914 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1853965.8045821234,
            "unit": "iter/sec",
            "range": "stddev: 1.2348855956482017e-7",
            "extra": "mean: 539.3842742560163 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4988518.436364445,
            "unit": "iter/sec",
            "range": "stddev: 1.4413515037828233e-8",
            "extra": "mean: 200.46031958319332 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6322488.732747203,
            "unit": "iter/sec",
            "range": "stddev: 6.774241914573476e-9",
            "extra": "mean: 158.16556458543295 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8344345.99346553,
            "unit": "iter/sec",
            "range": "stddev: 3.270191113348676e-9",
            "extra": "mean: 119.84162698705381 nsec\nrounds: 78126"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69269902ac6e5daeade23fb4c999a43a8b200ef6",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-28T09:32:27+02:00",
          "tree_id": "c11116aa0c1f356cc41454687c14afe39d8a4c3d",
          "url": "https://github.com/sthagen/pyo3/commit/69269902ac6e5daeade23fb4c999a43a8b200ef6"
        },
        "date": 1630136271107,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8501638.023561988,
            "unit": "iter/sec",
            "range": "stddev: 5.513424860763573e-9",
            "extra": "mean: 117.62439158527631 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10333651.744890258,
            "unit": "iter/sec",
            "range": "stddev: 2.906443788124779e-9",
            "extra": "mean: 96.77121163820154 nsec\nrounds: 90910"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3650207.0407160516,
            "unit": "iter/sec",
            "range": "stddev: 1.1709988420654852e-8",
            "extra": "mean: 273.9570629415934 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2133387.366406959,
            "unit": "iter/sec",
            "range": "stddev: 2.5601511548848646e-8",
            "extra": "mean: 468.7381277991813 nsec\nrounds: 185151"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3312412.9987719213,
            "unit": "iter/sec",
            "range": "stddev: 1.1489599752513583e-8",
            "extra": "mean: 301.89472157322194 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1977717.5791326305,
            "unit": "iter/sec",
            "range": "stddev: 2.2921521651373036e-8",
            "extra": "mean: 505.63336775280527 nsec\nrounds: 172385"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1985137.5066719048,
            "unit": "iter/sec",
            "range": "stddev: 1.4794076809191126e-8",
            "extra": "mean: 503.7434417711958 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1547404.961986218,
            "unit": "iter/sec",
            "range": "stddev: 2.9317426747142663e-8",
            "extra": "mean: 646.243242439018 nsec\nrounds: 138889"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1932603.545961604,
            "unit": "iter/sec",
            "range": "stddev: 2.5160457825962432e-8",
            "extra": "mean: 517.4366993634492 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1596895.9215224169,
            "unit": "iter/sec",
            "range": "stddev: 3.295143648199564e-8",
            "extra": "mean: 626.2148875967597 nsec\nrounds: 142837"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1819591.2813220008,
            "unit": "iter/sec",
            "range": "stddev: 8.657613682254734e-8",
            "extra": "mean: 549.5739676623768 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4942740.743231087,
            "unit": "iter/sec",
            "range": "stddev: 1.0163491983109228e-8",
            "extra": "mean: 202.3169031001794 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6544121.785940703,
            "unit": "iter/sec",
            "range": "stddev: 6.398822315827224e-9",
            "extra": "mean: 152.80889211862734 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8345252.553850436,
            "unit": "iter/sec",
            "range": "stddev: 4.091232260477794e-9",
            "extra": "mean: 119.82860836709493 nsec\nrounds: 76924"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8356c0a68a5bfc4d19064850635497b4cf214d31",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-28T11:06:34+02:00",
          "tree_id": "caa1ed2044aa223a7b61c580f1d2f9e7495d8082",
          "url": "https://github.com/sthagen/pyo3/commit/8356c0a68a5bfc4d19064850635497b4cf214d31"
        },
        "date": 1630145369582,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7273653.669499678,
            "unit": "iter/sec",
            "range": "stddev: 1.242327786982628e-7",
            "extra": "mean: 137.48248754175336 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9163186.779217465,
            "unit": "iter/sec",
            "range": "stddev: 7.09679697083067e-8",
            "extra": "mean: 109.132338355071 nsec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3083012.7965686745,
            "unit": "iter/sec",
            "range": "stddev: 4.0502866440623525e-7",
            "extra": "mean: 324.35804389565584 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1332636.6575974897,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011403417645343063",
            "extra": "mean: 750.392084968475 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2790090.7672064677,
            "unit": "iter/sec",
            "range": "stddev: 3.0600342695536306e-7",
            "extra": "mean: 358.41127885645017 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1768669.4779319954,
            "unit": "iter/sec",
            "range": "stddev: 4.7411219363570687e-7",
            "extra": "mean: 565.3967643346389 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1677054.2223633383,
            "unit": "iter/sec",
            "range": "stddev: 3.744920359921266e-7",
            "extra": "mean: 596.2836422728825 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1401386.5336642293,
            "unit": "iter/sec",
            "range": "stddev: 7.542851833234404e-7",
            "extra": "mean: 713.5789990683672 nsec\nrounds: 76918"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1605208.7031719792,
            "unit": "iter/sec",
            "range": "stddev: 8.981200586779528e-7",
            "extra": "mean: 622.9719525093614 nsec\nrounds: 94340"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1470755.0712607545,
            "unit": "iter/sec",
            "range": "stddev: 5.565604566062121e-7",
            "extra": "mean: 679.9228638000347 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1604686.8745333315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013469762643966787",
            "extra": "mean: 623.1745369580691 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4603356.32565965,
            "unit": "iter/sec",
            "range": "stddev: 3.1066613018962755e-7",
            "extra": "mean: 217.23280347119265 nsec\nrounds: 50252"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5713422.2260992825,
            "unit": "iter/sec",
            "range": "stddev: 9.255765102515066e-8",
            "extra": "mean: 175.02644832232247 nsec\nrounds: 30304"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7137609.07646542,
            "unit": "iter/sec",
            "range": "stddev: 1.0425634824809828e-7",
            "extra": "mean: 140.10293773264672 nsec\nrounds: 78741"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0845f8c90a7575fb281ab931f03ca5c156128c00",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-28T15:43:32+02:00",
          "tree_id": "d91b6ca2fca3bf78ab93b1ec37c60f5fbdd3670d",
          "url": "https://github.com/sthagen/pyo3/commit/0845f8c90a7575fb281ab931f03ca5c156128c00"
        },
        "date": 1630158284016,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7196070.554034922,
            "unit": "iter/sec",
            "range": "stddev: 3.925196049501259e-8",
            "extra": "mean: 138.96472977732105 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10296271.290078958,
            "unit": "iter/sec",
            "range": "stddev: 2.121257317335461e-8",
            "extra": "mean: 97.12253803596623 nsec\nrounds: 81961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3349791.8264896376,
            "unit": "iter/sec",
            "range": "stddev: 8.773198623591784e-8",
            "extra": "mean: 298.52601349450316 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2105289.0870594247,
            "unit": "iter/sec",
            "range": "stddev: 9.814602688838234e-8",
            "extra": "mean: 474.9941498042137 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3099863.784339921,
            "unit": "iter/sec",
            "range": "stddev: 8.103707108143981e-8",
            "extra": "mean: 322.59482015037145 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1857289.998514482,
            "unit": "iter/sec",
            "range": "stddev: 1.1057885035421803e-7",
            "extra": "mean: 538.4188795502381 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1831591.4727469904,
            "unit": "iter/sec",
            "range": "stddev: 1.4783777072552985e-7",
            "extra": "mean: 545.9732778183911 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1570718.6785661012,
            "unit": "iter/sec",
            "range": "stddev: 1.4752584194625592e-7",
            "extra": "mean: 636.6512435651159 nsec\nrounds: 66221"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1979970.5634139574,
            "unit": "iter/sec",
            "range": "stddev: 1.0971216665085686e-7",
            "extra": "mean: 505.0580137289956 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1608868.5349410628,
            "unit": "iter/sec",
            "range": "stddev: 1.572600558677429e-7",
            "extra": "mean: 621.554824575328 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1755054.2166525126,
            "unit": "iter/sec",
            "range": "stddev: 3.876351039294555e-7",
            "extra": "mean: 569.782967677968 nsec\nrounds: 147038"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4604558.63493908,
            "unit": "iter/sec",
            "range": "stddev: 6.131395199277932e-8",
            "extra": "mean: 217.17608120215147 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6197468.108638321,
            "unit": "iter/sec",
            "range": "stddev: 4.5822732312147324e-8",
            "extra": "mean: 161.35621554976137 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8330184.0553751765,
            "unit": "iter/sec",
            "range": "stddev: 2.443135983806122e-8",
            "extra": "mean: 120.04536674732564 nsec\nrounds: 68494"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba362b79dfd252bba72b66cdfbd86aacaa436e1d",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-29T12:36:04+02:00",
          "tree_id": "0a78ae704189b15ac01bf7e5bcb41229f0a06927",
          "url": "https://github.com/sthagen/pyo3/commit/ba362b79dfd252bba72b66cdfbd86aacaa436e1d"
        },
        "date": 1630233475266,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8634274.188385345,
            "unit": "iter/sec",
            "range": "stddev: 1.84469738882085e-8",
            "extra": "mean: 115.81749411493054 nsec\nrounds: 45455"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10365515.081222354,
            "unit": "iter/sec",
            "range": "stddev: 1.8485836035013875e-8",
            "extra": "mean: 96.47373933315052 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3539052.4043235453,
            "unit": "iter/sec",
            "range": "stddev: 5.776812157062774e-8",
            "extra": "mean: 282.56151244787463 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2162971.1498297346,
            "unit": "iter/sec",
            "range": "stddev: 9.268070413072924e-8",
            "extra": "mean: 462.32701720398325 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3198429.5456806454,
            "unit": "iter/sec",
            "range": "stddev: 6.563130781279568e-8",
            "extra": "mean: 312.65343998287557 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2142144.4142570263,
            "unit": "iter/sec",
            "range": "stddev: 1.1358794866096949e-7",
            "extra": "mean: 466.8219347608185 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1926244.8727217237,
            "unit": "iter/sec",
            "range": "stddev: 9.466162497520538e-8",
            "extra": "mean: 519.1447952236311 nsec\nrounds: 86949"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1612468.229407245,
            "unit": "iter/sec",
            "range": "stddev: 1.4929704433718337e-7",
            "extra": "mean: 620.1672577252899 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1804895.9164995793,
            "unit": "iter/sec",
            "range": "stddev: 8.20231033356928e-8",
            "extra": "mean: 554.0485691493161 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1711602.751319742,
            "unit": "iter/sec",
            "range": "stddev: 1.2846858269341145e-7",
            "extra": "mean: 584.24771707619 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1649079.3313411693,
            "unit": "iter/sec",
            "range": "stddev: 2.7344846838587036e-7",
            "extra": "mean: 606.3989651648332 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5243042.135405756,
            "unit": "iter/sec",
            "range": "stddev: 2.7573346424427735e-8",
            "extra": "mean: 190.72896501197624 nsec\nrounds: 45044"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6097753.569184155,
            "unit": "iter/sec",
            "range": "stddev: 2.1659809968659813e-8",
            "extra": "mean: 163.9948201668285 nsec\nrounds: 58137"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7581626.885181591,
            "unit": "iter/sec",
            "range": "stddev: 1.9101543792427424e-8",
            "extra": "mean: 131.89781232240728 nsec\nrounds: 73530"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d5d0f2bc3dfde60e32b5080ef31c13894a865e5",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-30T12:43:57+02:00",
          "tree_id": "3ae9c6d711e3c2c4d6cd305592f88dbba247be83",
          "url": "https://github.com/sthagen/pyo3/commit/0d5d0f2bc3dfde60e32b5080ef31c13894a865e5"
        },
        "date": 1630320355695,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8631560.56927456,
            "unit": "iter/sec",
            "range": "stddev: 3.618438937411526e-9",
            "extra": "mean: 115.85390520913045 nsec\nrounds: 73530"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8913571.445461426,
            "unit": "iter/sec",
            "range": "stddev: 3.597520991150261e-9",
            "extra": "mean: 112.18847642822669 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3621179.61341038,
            "unit": "iter/sec",
            "range": "stddev: 1.4257539720905228e-8",
            "extra": "mean: 276.1531066561012 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2221830.281328426,
            "unit": "iter/sec",
            "range": "stddev: 2.8143155097589242e-8",
            "extra": "mean: 450.07938203166884 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3279624.729754981,
            "unit": "iter/sec",
            "range": "stddev: 5.853474417000223e-8",
            "extra": "mean: 304.9129343753295 nsec\nrounds: 158705"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2054014.0569563117,
            "unit": "iter/sec",
            "range": "stddev: 9.163101953314649e-8",
            "extra": "mean: 486.8515853685923 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1977671.2829454252,
            "unit": "iter/sec",
            "range": "stddev: 1.7105637070929425e-8",
            "extra": "mean: 505.6452043491543 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1632446.611947492,
            "unit": "iter/sec",
            "range": "stddev: 2.8808559690609747e-8",
            "extra": "mean: 612.5774605312598 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1964927.590765594,
            "unit": "iter/sec",
            "range": "stddev: 1.6505954386980132e-8",
            "extra": "mean: 508.92460602627114 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1676762.9268906373,
            "unit": "iter/sec",
            "range": "stddev: 2.921649366734073e-8",
            "extra": "mean: 596.3872315894722 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1852639.2705277489,
            "unit": "iter/sec",
            "range": "stddev: 8.457312320750627e-8",
            "extra": "mean: 539.7704863047283 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4642645.933347495,
            "unit": "iter/sec",
            "range": "stddev: 1.244951104599207e-8",
            "extra": "mean: 215.39441395201123 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5288051.618999168,
            "unit": "iter/sec",
            "range": "stddev: 8.930636209615075e-9",
            "extra": "mean: 189.105567049928 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8312168.646142039,
            "unit": "iter/sec",
            "range": "stddev: 3.22639430341209e-9",
            "extra": "mean: 120.30554751366311 nsec\nrounds: 77514"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e1555f7b556bb06a356bb3f86f892e80efd09d0",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-31T13:01:07+02:00",
          "tree_id": "382710896bf5b265083748307f77de4b4cec3883",
          "url": "https://github.com/sthagen/pyo3/commit/8e1555f7b556bb06a356bb3f86f892e80efd09d0"
        },
        "date": 1630408837943,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7647487.958392438,
            "unit": "iter/sec",
            "range": "stddev: 1.8471807036682783e-8",
            "extra": "mean: 130.7618927208995 nsec\nrounds: 68494"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8824137.663224254,
            "unit": "iter/sec",
            "range": "stddev: 1.5587119588574797e-8",
            "extra": "mean: 113.32552121978702 nsec\nrounds: 85463"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3089068.705773272,
            "unit": "iter/sec",
            "range": "stddev: 8.130898663580955e-8",
            "extra": "mean: 323.7221619994841 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1815871.8119244606,
            "unit": "iter/sec",
            "range": "stddev: 1.533998030836212e-7",
            "extra": "mean: 550.6996658213169 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2764816.680522562,
            "unit": "iter/sec",
            "range": "stddev: 6.174933495629775e-8",
            "extra": "mean: 361.6876326899315 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1644423.9391095897,
            "unit": "iter/sec",
            "range": "stddev: 7.464171602903926e-8",
            "extra": "mean: 608.1156909822888 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1650741.9297873175,
            "unit": "iter/sec",
            "range": "stddev: 4.887477633734118e-8",
            "extra": "mean: 605.7882107158392 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1264251.5814833518,
            "unit": "iter/sec",
            "range": "stddev: 1.2759970473321312e-7",
            "extra": "mean: 790.9818066640639 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1622421.9642648122,
            "unit": "iter/sec",
            "range": "stddev: 7.013854377006599e-8",
            "extra": "mean: 616.3624642819777 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1351750.6395939824,
            "unit": "iter/sec",
            "range": "stddev: 7.885389200221849e-8",
            "extra": "mean: 739.7814143444355 nsec\nrounds: 66667"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2138835.3543043747,
            "unit": "iter/sec",
            "range": "stddev: 7.711815979747862e-8",
            "extra": "mean: 467.54416976848916 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4461887.81329799,
            "unit": "iter/sec",
            "range": "stddev: 4.234138080510474e-8",
            "extra": "mean: 224.12038174019025 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5484029.650449521,
            "unit": "iter/sec",
            "range": "stddev: 3.473195746010565e-8",
            "extra": "mean: 182.34766471739943 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7158380.300669893,
            "unit": "iter/sec",
            "range": "stddev: 1.7204883343889358e-8",
            "extra": "mean: 139.69640589038815 nsec\nrounds: 70418"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e4915c4ebf43b674fa64173fed94a48a2c0b4ed",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-01T12:38:36+02:00",
          "tree_id": "819298f4e2a1ba7789bc97ed88f5e4dc94647e4d",
          "url": "https://github.com/sthagen/pyo3/commit/8e4915c4ebf43b674fa64173fed94a48a2c0b4ed"
        },
        "date": 1630493680412,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6618047.683787046,
            "unit": "iter/sec",
            "range": "stddev: 7.139845343727159e-7",
            "extra": "mean: 151.10196356720797 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8516961.536911137,
            "unit": "iter/sec",
            "range": "stddev: 2.3224741201796617e-7",
            "extra": "mean: 117.41276459533859 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2828961.5902296836,
            "unit": "iter/sec",
            "range": "stddev: 8.120121043203534e-7",
            "extra": "mean: 353.4865950293467 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1483551.8624585913,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031614988474506256",
            "extra": "mean: 674.057999120278 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2587428.0120897545,
            "unit": "iter/sec",
            "range": "stddev: 8.167849886992501e-7",
            "extra": "mean: 386.48418248793524 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1547848.5469223636,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014085191089864902",
            "extra": "mean: 646.0580410068749 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1496143.7113013503,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020184049752886425",
            "extra": "mean: 668.384990322978 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1110549.858335498,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017737234538288085",
            "extra": "mean: 900.4548445024622 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1502656.2939165558,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014726197433444972",
            "extra": "mean: 665.4881785336858 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1170822.0654271282,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026174932309095975",
            "extra": "mean: 854.1007464150408 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1977748.155032016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010854963348108594",
            "extra": "mean: 505.6255506826784 nsec\nrounds: 101011"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 3984043.310821355,
            "unit": "iter/sec",
            "range": "stddev: 9.713693993208419e-7",
            "extra": "mean: 251.00128738212004 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5228384.646920304,
            "unit": "iter/sec",
            "range": "stddev: 6.737905776539701e-7",
            "extra": "mean: 191.26366316374 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6639193.293450233,
            "unit": "iter/sec",
            "range": "stddev: 2.632589312449574e-7",
            "extra": "mean: 150.62070884212997 nsec\nrounds: 65360"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0812e8552e88da380c50e5b3fc0cbae9904cc6b",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-03T12:24:23+02:00",
          "tree_id": "7d4e182bc63a53779be026e769b43d7721db0fc5",
          "url": "https://github.com/sthagen/pyo3/commit/d0812e8552e88da380c50e5b3fc0cbae9904cc6b"
        },
        "date": 1630667221179,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8776888.34618621,
            "unit": "iter/sec",
            "range": "stddev: 2.9651770150890195e-9",
            "extra": "mean: 113.93559545896953 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9459216.867163083,
            "unit": "iter/sec",
            "range": "stddev: 3.584916786524082e-9",
            "extra": "mean: 105.71699687640434 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3646534.6244242755,
            "unit": "iter/sec",
            "range": "stddev: 1.156507256570975e-8",
            "extra": "mean: 274.23296444397965 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2296325.6853160434,
            "unit": "iter/sec",
            "range": "stddev: 2.0841872503685837e-8",
            "extra": "mean: 435.4782975229567 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3279143.868044905,
            "unit": "iter/sec",
            "range": "stddev: 1.2220343525256552e-8",
            "extra": "mean: 304.957647557526 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1980915.8613028512,
            "unit": "iter/sec",
            "range": "stddev: 2.6314145090540394e-8",
            "extra": "mean: 504.81699881134097 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1936511.2834680395,
            "unit": "iter/sec",
            "range": "stddev: 2.120762024890824e-8",
            "extra": "mean: 516.3925501167432 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1717827.537817422,
            "unit": "iter/sec",
            "range": "stddev: 1.7378634637402502e-8",
            "extra": "mean: 582.1306143866416 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1967327.9408728771,
            "unit": "iter/sec",
            "range": "stddev: 1.4793162712477997e-8",
            "extra": "mean: 508.3036636773268 nsec\nrounds: 93458"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1780282.4779099524,
            "unit": "iter/sec",
            "range": "stddev: 1.5472237058683198e-8",
            "extra": "mean: 561.7086122050977 nsec\nrounds: 84746"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2593493.5215833653,
            "unit": "iter/sec",
            "range": "stddev: 2.2841561652683546e-8",
            "extra": "mean: 385.58029610547095 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5306092.350818742,
            "unit": "iter/sec",
            "range": "stddev: 3.7939811982931365e-9",
            "extra": "mean: 188.4626074865944 nsec\nrounds: 27701"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6060294.494144322,
            "unit": "iter/sec",
            "range": "stddev: 6.713315212621224e-9",
            "extra": "mean: 165.00848283262332 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8344070.788540133,
            "unit": "iter/sec",
            "range": "stddev: 3.0542703204956162e-9",
            "extra": "mean: 119.84557961486196 nsec\nrounds: 74075"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc28ccfa3045c4661ac6e01328b19ae67c048e58",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-06T12:14:01+02:00",
          "tree_id": "51e32fefed622bc3cb025798651cf713176cdaa9",
          "url": "https://github.com/sthagen/pyo3/commit/cc28ccfa3045c4661ac6e01328b19ae67c048e58"
        },
        "date": 1630923398372,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6201244.871547046,
            "unit": "iter/sec",
            "range": "stddev: 7.357604763497113e-7",
            "extra": "mean: 161.257944286094 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 5072733.100880079,
            "unit": "iter/sec",
            "range": "stddev: 4.231907968437512e-7",
            "extra": "mean: 197.13238999819959 nsec\nrounds: 52908"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2632408.4833561666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017093246002477586",
            "extra": "mean: 379.8802527504607 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1680843.2562123574,
            "unit": "iter/sec",
            "range": "stddev: 0.000002313723633091457",
            "extra": "mean: 594.939472377198 nsec\nrounds: 92585"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2532500.833158513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010048209499159414",
            "extra": "mean: 394.8666025723387 nsec\nrounds: 131579"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1538795.2286839555,
            "unit": "iter/sec",
            "range": "stddev: 8.062651681076735e-7",
            "extra": "mean: 649.8590464537026 nsec\nrounds: 78119"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1519602.2442351903,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013172224450039695",
            "extra": "mean: 658.0669407361565 nsec\nrounds: 79359"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1063295.9592523999,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036978150353314364",
            "extra": "mean: 940.4719272165299 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1514776.908678146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013537451823727873",
            "extra": "mean: 660.1632189341238 nsec\nrounds: 78119"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1166797.6274638996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017671108477470334",
            "extra": "mean: 857.0466518471179 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2016240.2806760506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016854670855874185",
            "extra": "mean: 495.97263261916663 nsec\nrounds: 105264"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 3922750.6665268727,
            "unit": "iter/sec",
            "range": "stddev: 4.6093243767029665e-7",
            "extra": "mean: 254.9231610701475 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4879397.345218495,
            "unit": "iter/sec",
            "range": "stddev: 6.494471493625818e-7",
            "extra": "mean: 204.9433422306585 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6528206.305824377,
            "unit": "iter/sec",
            "range": "stddev: 3.36291850374708e-7",
            "extra": "mean: 153.18143348323036 nsec\nrounds: 63691"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "488bfc33337925a9ee273bbecbacdb7cb652dfdd",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-09T12:22:46+02:00",
          "tree_id": "0457eeeb2f5109a6c8d3a2a5e951616adfd45101",
          "url": "https://github.com/sthagen/pyo3/commit/488bfc33337925a9ee273bbecbacdb7cb652dfdd"
        },
        "date": 1631184790789,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6890630.752101083,
            "unit": "iter/sec",
            "range": "stddev: 2.7665217569369095e-7",
            "extra": "mean: 145.12459540751175 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8185324.525998665,
            "unit": "iter/sec",
            "range": "stddev: 5.089790219679725e-8",
            "extra": "mean: 122.16986593791371 nsec\nrounds: 79366"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2818768.566057041,
            "unit": "iter/sec",
            "range": "stddev: 0.000001154312012804343",
            "extra": "mean: 354.764847331996 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1565450.5701279098,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010876625875225938",
            "extra": "mean: 638.7937243642041 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2569855.7217661017,
            "unit": "iter/sec",
            "range": "stddev: 3.20455049838847e-7",
            "extra": "mean: 389.1269037127918 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1454499.8367569873,
            "unit": "iter/sec",
            "range": "stddev: 2.485022534717247e-7",
            "extra": "mean: 687.5215622090082 nsec\nrounds: 71943"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1561419.2902599166,
            "unit": "iter/sec",
            "range": "stddev: 4.961524850488324e-7",
            "extra": "mean: 640.442965088562 nsec\nrounds: 80001"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1172567.4428684437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011021731542368902",
            "extra": "mean: 852.8294095853586 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1555616.7477830052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012674478308648778",
            "extra": "mean: 642.8318552274579 nsec\nrounds: 80001"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1235084.2075976036,
            "unit": "iter/sec",
            "range": "stddev: 0.000001508397800110277",
            "extra": "mean: 809.6613930033448 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2064595.1458576883,
            "unit": "iter/sec",
            "range": "stddev: 4.30474008425376e-7",
            "extra": "mean: 484.3564618497618 nsec\nrounds: 105264"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 3975355.448090152,
            "unit": "iter/sec",
            "range": "stddev: 2.9774339747266726e-7",
            "extra": "mean: 251.5498332309251 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4429394.4688760955,
            "unit": "iter/sec",
            "range": "stddev: 2.82809768840902e-7",
            "extra": "mean: 225.76449377595858 nsec\nrounds: 60241"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6644227.426016034,
            "unit": "iter/sec",
            "range": "stddev: 2.511957539890886e-7",
            "extra": "mean: 150.50658803217772 nsec\nrounds: 64517"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3047280977532088208624f101f2132b85624748",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-13T12:28:58+02:00",
          "tree_id": "2dd5b5813212f207bd82f8d5981a4b617fd55e7b",
          "url": "https://github.com/sthagen/pyo3/commit/3047280977532088208624f101f2132b85624748"
        },
        "date": 1631529059296,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8639135.999531077,
            "unit": "iter/sec",
            "range": "stddev: 4.253038829488084e-9",
            "extra": "mean: 115.75231597862864 nsec\nrounds: 79366"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10356032.807903806,
            "unit": "iter/sec",
            "range": "stddev: 4.028016554423477e-9",
            "extra": "mean: 96.56207338753053 nsec\nrounds: 99991"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3638486.9658435974,
            "unit": "iter/sec",
            "range": "stddev: 1.427889244082945e-8",
            "extra": "mean: 274.8395169163011 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2329939.0300569288,
            "unit": "iter/sec",
            "range": "stddev: 2.8395645918490203e-8",
            "extra": "mean: 429.1957802757294 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3267581.222513197,
            "unit": "iter/sec",
            "range": "stddev: 1.8865608764882496e-8",
            "extra": "mean: 306.0367690661803 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2078928.3958923398,
            "unit": "iter/sec",
            "range": "stddev: 2.8577483655868437e-8",
            "extra": "mean: 481.01704800153095 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1966807.1753253008,
            "unit": "iter/sec",
            "range": "stddev: 1.9235363491597028e-8",
            "extra": "mean: 508.4382508594815 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1772229.4632371597,
            "unit": "iter/sec",
            "range": "stddev: 2.2659158464860253e-8",
            "extra": "mean: 564.2610174044206 nsec\nrounds: 86200"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1959523.050985389,
            "unit": "iter/sec",
            "range": "stddev: 2.0585284912763213e-8",
            "extra": "mean: 510.3282655937259 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1793276.962601821,
            "unit": "iter/sec",
            "range": "stddev: 2.5123581075945377e-8",
            "extra": "mean: 557.6383463649668 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2600185.1267533205,
            "unit": "iter/sec",
            "range": "stddev: 2.2234269586623152e-8",
            "extra": "mean: 384.58800095092954 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5476427.322443851,
            "unit": "iter/sec",
            "range": "stddev: 5.656425826139805e-9",
            "extra": "mean: 182.60079813383842 nsec\nrounds: 49503"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6639424.424027665,
            "unit": "iter/sec",
            "range": "stddev: 8.75151125461693e-9",
            "extra": "mean: 150.6154654585973 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8337425.607399662,
            "unit": "iter/sec",
            "range": "stddev: 4.374228207307544e-9",
            "extra": "mean: 119.94110017751697 nsec\nrounds: 76924"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b256cedd7531df862026a67a23baefc7d37d409",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-14T07:46:35+02:00",
          "tree_id": "720c924c4e9fe937efde4c8c8024c70a53523dc4",
          "url": "https://github.com/sthagen/pyo3/commit/2b256cedd7531df862026a67a23baefc7d37d409"
        },
        "date": 1631599677992,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7205803.701842227,
            "unit": "iter/sec",
            "range": "stddev: 3.5794006114251925e-8",
            "extra": "mean: 138.7770249341021 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8774652.257132087,
            "unit": "iter/sec",
            "range": "stddev: 1.58720826962064e-8",
            "extra": "mean: 113.96463024350767 nsec\nrounds: 78119"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3094020.461432752,
            "unit": "iter/sec",
            "range": "stddev: 7.686143234001486e-8",
            "extra": "mean: 323.2040681254605 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1916160.4258446398,
            "unit": "iter/sec",
            "range": "stddev: 9.643676758261997e-8",
            "extra": "mean: 521.8769715268612 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2741043.7205849034,
            "unit": "iter/sec",
            "range": "stddev: 6.126384333780133e-8",
            "extra": "mean: 364.82453471678747 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1843621.188807905,
            "unit": "iter/sec",
            "range": "stddev: 8.10431607965034e-8",
            "extra": "mean: 542.4107761781613 nsec\nrounds: 87712"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1656261.424068102,
            "unit": "iter/sec",
            "range": "stddev: 9.361406156245471e-8",
            "extra": "mean: 603.7694203756766 nsec\nrounds: 87712"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1450302.5519550035,
            "unit": "iter/sec",
            "range": "stddev: 1.496551443643954e-7",
            "extra": "mean: 689.5113013845797 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1669911.6349903774,
            "unit": "iter/sec",
            "range": "stddev: 9.22760318353162e-8",
            "extra": "mean: 598.8340814248872 nsec\nrounds: 87712"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1306083.452450643,
            "unit": "iter/sec",
            "range": "stddev: 3.4161653001501014e-7",
            "extra": "mean: 765.6478597318345 nsec\nrounds: 73519"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2167835.4372706586,
            "unit": "iter/sec",
            "range": "stddev: 9.507039271848692e-8",
            "extra": "mean: 461.28962688191234 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4501571.157928156,
            "unit": "iter/sec",
            "range": "stddev: 4.8119273354421256e-8",
            "extra": "mean: 222.14466125669543 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5605856.176391196,
            "unit": "iter/sec",
            "range": "stddev: 4.309555684115264e-8",
            "extra": "mean: 178.38488333157497 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7112737.787384244,
            "unit": "iter/sec",
            "range": "stddev: 2.0243612064339757e-8",
            "extra": "mean: 140.59283919813726 nsec\nrounds: 62493"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c35207401d206f8d22c572308603412086707c83",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-17T12:30:14+02:00",
          "tree_id": "93b8924b0467e497d4bd9a317e7c362ce3bceb2e",
          "url": "https://github.com/sthagen/pyo3/commit/c35207401d206f8d22c572308603412086707c83"
        },
        "date": 1631875950290,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7355806.617743957,
            "unit": "iter/sec",
            "range": "stddev: 6.382684778672716e-8",
            "extra": "mean: 135.9470214439496 nsec\nrounds: 42017"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 6638297.7472158335,
            "unit": "iter/sec",
            "range": "stddev: 9.160045007477885e-8",
            "extra": "mean: 150.64102848046969 nsec\nrounds: 78125"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2861163.3213836933,
            "unit": "iter/sec",
            "range": "stddev: 5.615927757472063e-7",
            "extra": "mean: 349.5081851936593 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1296355.882803037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014916184974467588",
            "extra": "mean: 771.3931130069406 nsec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2476319.421680678,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012295078597221111",
            "extra": "mean: 403.825124999931 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1253701.298488189,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010874793910031392",
            "extra": "mean: 797.6381624601814 nsec\nrounds: 74627"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1565727.2165949426,
            "unit": "iter/sec",
            "range": "stddev: 5.153783735870913e-7",
            "extra": "mean: 638.6808566658399 nsec\nrounds: 87712"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1065295.1738600694,
            "unit": "iter/sec",
            "range": "stddev: 9.654438487360652e-7",
            "extra": "mean: 938.7069654849797 nsec\nrounds: 59881"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1569272.2876817414,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011004632979553736",
            "extra": "mean: 637.238042020917 nsec\nrounds: 90910"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 993024.5547337377,
            "unit": "iter/sec",
            "range": "stddev: 0.000002289015191846284",
            "extra": "mean: 1.0070244438900788 usec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2036976.0671747802,
            "unit": "iter/sec",
            "range": "stddev: 5.011291509820623e-7",
            "extra": "mean: 490.9237845817316 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 2436341.0240486483,
            "unit": "iter/sec",
            "range": "stddev: 5.772263419312212e-7",
            "extra": "mean: 410.4515706666044 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 3913523.3858040003,
            "unit": "iter/sec",
            "range": "stddev: 3.6112491631823926e-7",
            "extra": "mean: 255.52421728892637 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6490264.462375346,
            "unit": "iter/sec",
            "range": "stddev: 1.723133812630165e-7",
            "extra": "mean: 154.0769264176407 nsec\nrounds: 72993"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd93776803a3940dfba369c9198c37b4d9cbfcf7",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-19T09:05:03+02:00",
          "tree_id": "82abf8c1f5b3e8ff27ac5334cee0cf9ac7cc6984",
          "url": "https://github.com/sthagen/pyo3/commit/bd93776803a3940dfba369c9198c37b4d9cbfcf7"
        },
        "date": 1632036060545,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8715537.22606791,
            "unit": "iter/sec",
            "range": "stddev: 2.458322477027851e-7",
            "extra": "mean: 114.73762019053534 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10752515.744893057,
            "unit": "iter/sec",
            "range": "stddev: 8.043504861797502e-8",
            "extra": "mean: 93.00149134625877 nsec\nrounds: 107527"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3483483.4642160884,
            "unit": "iter/sec",
            "range": "stddev: 3.6003481431350407e-7",
            "extra": "mean: 287.06896710489394 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2407106.4766582656,
            "unit": "iter/sec",
            "range": "stddev: 4.178820280910296e-7",
            "extra": "mean: 415.43654578604 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3315363.4521867926,
            "unit": "iter/sec",
            "range": "stddev: 5.637190275121227e-7",
            "extra": "mean: 301.62605530909474 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2120893.239872728,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012026137194758975",
            "extra": "mean: 471.49945183487523 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1873758.8793054528,
            "unit": "iter/sec",
            "range": "stddev: 4.77974934256129e-7",
            "extra": "mean: 533.6865970555439 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1756973.9456311297,
            "unit": "iter/sec",
            "range": "stddev: 5.651107574154405e-7",
            "extra": "mean: 569.1604035943911 nsec\nrounds: 92593"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1887702.7132509474,
            "unit": "iter/sec",
            "range": "stddev: 3.582188948956493e-7",
            "extra": "mean: 529.7444311437754 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1815185.3586833654,
            "unit": "iter/sec",
            "range": "stddev: 3.876753420463967e-7",
            "extra": "mean: 550.9079253070977 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2596773.4453122225,
            "unit": "iter/sec",
            "range": "stddev: 3.4521436724587335e-7",
            "extra": "mean: 385.0932786633437 nsec\nrounds: 120482"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5160874.57597674,
            "unit": "iter/sec",
            "range": "stddev: 9.505804351870502e-8",
            "extra": "mean: 193.7656079950208 nsec\nrounds: 52632"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 7216963.436295392,
            "unit": "iter/sec",
            "range": "stddev: 1.0022437130156687e-7",
            "extra": "mean: 138.56243125336985 nsec\nrounds: 69931"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8865879.486878594,
            "unit": "iter/sec",
            "range": "stddev: 1.58931664936473e-7",
            "extra": "mean: 112.79196852145527 nsec\nrounds: 95239"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479e4c7518d95a4bf4084e66f4ba1f64bc87a107",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-25T08:20:33+02:00",
          "tree_id": "83716fa293f98fada4d251e3e41835cbe00d0c72",
          "url": "https://github.com/sthagen/pyo3/commit/479e4c7518d95a4bf4084e66f4ba1f64bc87a107"
        },
        "date": 1632550947632,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7630868.840867198,
            "unit": "iter/sec",
            "range": "stddev: 1.4657492030321432e-7",
            "extra": "mean: 131.04667644746826 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10162178.133182136,
            "unit": "iter/sec",
            "range": "stddev: 1.2130184484189892e-7",
            "extra": "mean: 98.404100665647 nsec\nrounds: 103093"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3125798.030817934,
            "unit": "iter/sec",
            "range": "stddev: 4.0238085922217026e-7",
            "extra": "mean: 319.91830250732096 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2141282.471113968,
            "unit": "iter/sec",
            "range": "stddev: 5.094600188433134e-7",
            "extra": "mean: 467.00984736484133 nsec\nrounds: 112360"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2783198.606967476,
            "unit": "iter/sec",
            "range": "stddev: 4.996143190790095e-7",
            "extra": "mean: 359.29882887139826 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1921331.4973123898,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013089991592382864",
            "extra": "mean: 520.4723918797813 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1670111.8425247758,
            "unit": "iter/sec",
            "range": "stddev: 5.498119628166677e-7",
            "extra": "mean: 598.7622951578189 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1157545.9067904265,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011436917899094787",
            "extra": "mean: 863.8966231354331 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1721989.232504822,
            "unit": "iter/sec",
            "range": "stddev: 4.686343776687307e-7",
            "extra": "mean: 580.723724122965 nsec\nrounds: 88488"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1450118.1714693536,
            "unit": "iter/sec",
            "range": "stddev: 5.762268791039075e-7",
            "extra": "mean: 689.5989717767084 nsec\nrounds: 73525"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2312540.4193235934,
            "unit": "iter/sec",
            "range": "stddev: 4.351367540387405e-7",
            "extra": "mean: 432.4248742397345 nsec\nrounds: 120468"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 3173527.945203495,
            "unit": "iter/sec",
            "range": "stddev: 4.2873439430056806e-7",
            "extra": "mean: 315.1067257845141 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6397541.551072383,
            "unit": "iter/sec",
            "range": "stddev: 1.1293549069227832e-7",
            "extra": "mean: 156.31004379052942 nsec\nrounds: 62112"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7890921.916068128,
            "unit": "iter/sec",
            "range": "stddev: 1.0836490039164653e-7",
            "extra": "mean: 126.72790462724062 nsec\nrounds: 71424"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "576272d268372d596ebd04e0981659bde56c8d63",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-26T09:04:42+02:00",
          "tree_id": "1ac504950f524a2fe157abe0558cf1fb1c9c72bd",
          "url": "https://github.com/sthagen/pyo3/commit/576272d268372d596ebd04e0981659bde56c8d63"
        },
        "date": 1632640768983,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7059539.7050225455,
            "unit": "iter/sec",
            "range": "stddev: 9.642101308208576e-8",
            "extra": "mean: 141.652294878177 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 6831439.524726272,
            "unit": "iter/sec",
            "range": "stddev: 6.853887964541359e-8",
            "extra": "mean: 146.38203212960752 nsec\nrounds: 65360"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2813366.8723474876,
            "unit": "iter/sec",
            "range": "stddev: 3.212814700871122e-7",
            "extra": "mean: 355.4459995349183 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1311177.8885304031,
            "unit": "iter/sec",
            "range": "stddev: 5.993522384481338e-7",
            "extra": "mean: 762.6730199980309 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2654847.38502471,
            "unit": "iter/sec",
            "range": "stddev: 2.5854826001205803e-7",
            "extra": "mean: 376.66948602791257 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1243518.5699636156,
            "unit": "iter/sec",
            "range": "stddev: 7.549798353727602e-7",
            "extra": "mean: 804.1697359046251 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1534134.6310802898,
            "unit": "iter/sec",
            "range": "stddev: 3.4156829733136757e-7",
            "extra": "mean: 651.8332744343237 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1074995.1419305098,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010025968157715506",
            "extra": "mean: 930.2367620045544 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1545849.1961928073,
            "unit": "iter/sec",
            "range": "stddev: 4.704154313089222e-7",
            "extra": "mean: 646.8936313210942 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1108884.7700765498,
            "unit": "iter/sec",
            "range": "stddev: 6.404812288438485e-7",
            "extra": "mean: 901.8069568499855 nsec\nrounds: 64936"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2082830.0822101969,
            "unit": "iter/sec",
            "range": "stddev: 3.4623338031813285e-7",
            "extra": "mean: 480.11597707418747 nsec\nrounds: 120482"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 3430429.8398250057,
            "unit": "iter/sec",
            "range": "stddev: 2.632297255979203e-7",
            "extra": "mean: 291.5086583002702 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4716008.750220896,
            "unit": "iter/sec",
            "range": "stddev: 9.048214961065976e-8",
            "extra": "mean: 212.043711741053 nsec\nrounds: 57143"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7224497.4216658715,
            "unit": "iter/sec",
            "range": "stddev: 7.7924812908024e-8",
            "extra": "mean: 138.41793299020787 nsec\nrounds: 81301"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5cf0b7f5aaabace9b775d135bc657eae1f9bcd93",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-10-02T08:43:15+02:00",
          "tree_id": "8eec50774a2a18826fe32716d4df564fd389d394",
          "url": "https://github.com/sthagen/pyo3/commit/5cf0b7f5aaabace9b775d135bc657eae1f9bcd93"
        },
        "date": 1633159614342,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8494274.41384803,
            "unit": "iter/sec",
            "range": "stddev: 9.529616694651343e-9",
            "extra": "mean: 117.72635910721358 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9833734.157216301,
            "unit": "iter/sec",
            "range": "stddev: 4.467241256218057e-9",
            "extra": "mean: 101.69077016041133 nsec\nrounds: 94331"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3499354.083472229,
            "unit": "iter/sec",
            "range": "stddev: 2.1849456725088124e-8",
            "extra": "mean: 285.76702332648574 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2260505.4288570704,
            "unit": "iter/sec",
            "range": "stddev: 2.9677821232405236e-8",
            "extra": "mean: 442.3789419982995 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3161195.431459469,
            "unit": "iter/sec",
            "range": "stddev: 1.7384176524521363e-8",
            "extra": "mean: 316.3360259376047 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2067065.9684856255,
            "unit": "iter/sec",
            "range": "stddev: 3.421518249428407e-8",
            "extra": "mean: 483.77749682128086 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1891157.0798422305,
            "unit": "iter/sec",
            "range": "stddev: 2.928537469359487e-8",
            "extra": "mean: 528.7768058284948 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1694635.8209866185,
            "unit": "iter/sec",
            "range": "stddev: 3.282353772335564e-8",
            "extra": "mean: 590.0972867542202 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1897983.7248478688,
            "unit": "iter/sec",
            "range": "stddev: 2.3003942657855358e-8",
            "extra": "mean: 526.8749077812602 nsec\nrounds: 94340"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1693975.0559306194,
            "unit": "iter/sec",
            "range": "stddev: 3.3714169157282025e-8",
            "extra": "mean: 590.3274646813472 nsec\nrounds: 153823"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2487918.715897401,
            "unit": "iter/sec",
            "range": "stddev: 2.3315649657703957e-8",
            "extra": "mean: 401.9423920924086 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4774935.975487037,
            "unit": "iter/sec",
            "range": "stddev: 1.2747310632050289e-8",
            "extra": "mean: 209.42689182282794 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6115648.073090785,
            "unit": "iter/sec",
            "range": "stddev: 9.620550512131482e-9",
            "extra": "mean: 163.5149681680327 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8457494.516180823,
            "unit": "iter/sec",
            "range": "stddev: 4.649130176448393e-9",
            "extra": "mean: 118.23832673926495 nsec\nrounds: 79366"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "785a04575500a68cda4160c8ef00cae773c3cd5d",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-10-03T10:14:56+02:00",
          "tree_id": "7556519968fa0183c55f75f1e41a71c78115f108",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/785a04575500a68cda4160c8ef00cae773c3cd5d"
        },
        "date": 1633249030405,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7261170.4094410315,
            "unit": "iter/sec",
            "range": "stddev: 3.656376879927804e-8",
            "extra": "mean: 137.71884470590874 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8696508.643590035,
            "unit": "iter/sec",
            "range": "stddev: 1.988990561076917e-8",
            "extra": "mean: 114.9886743040679 nsec\nrounds: 78125"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3075282.8835738925,
            "unit": "iter/sec",
            "range": "stddev: 7.841095794384835e-8",
            "extra": "mean: 325.1733378224593 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2006155.5154100321,
            "unit": "iter/sec",
            "range": "stddev: 1.2289485002869298e-7",
            "extra": "mean: 498.4658429108979 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2768623.5766149997,
            "unit": "iter/sec",
            "range": "stddev: 1.3099898540612376e-7",
            "extra": "mean: 361.19030714259185 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1818862.6932091846,
            "unit": "iter/sec",
            "range": "stddev: 1.2292568446477306e-7",
            "extra": "mean: 549.7941124050769 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1634699.970051599,
            "unit": "iter/sec",
            "range": "stddev: 9.529365681635755e-8",
            "extra": "mean: 611.7330509085812 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1560841.763361435,
            "unit": "iter/sec",
            "range": "stddev: 1.4173723215149612e-7",
            "extra": "mean: 640.6799353231092 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1676073.092999678,
            "unit": "iter/sec",
            "range": "stddev: 8.716622878004195e-8",
            "extra": "mean: 596.632691125966 nsec\nrounds: 112347"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1508454.340391541,
            "unit": "iter/sec",
            "range": "stddev: 1.3419433640624607e-7",
            "extra": "mean: 662.9302413885437 nsec\nrounds: 135136"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2176764.6536335363,
            "unit": "iter/sec",
            "range": "stddev: 1.007261698241686e-7",
            "extra": "mean: 459.39738975913167 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4241977.239367375,
            "unit": "iter/sec",
            "range": "stddev: 2.8691261946999454e-8",
            "extra": "mean: 235.73912436862676 nsec\nrounds: 46949"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5412216.515323524,
            "unit": "iter/sec",
            "range": "stddev: 4.125911025524402e-8",
            "extra": "mean: 184.76718312516175 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7303105.63217264,
            "unit": "iter/sec",
            "range": "stddev: 1.85726270137394e-8",
            "extra": "mean: 136.92804819841874 nsec\nrounds: 66226"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b9c521ec11a51b574b91a7343e1c8673f8d35713",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-10-10T18:41:24+02:00",
          "tree_id": "cbdbc1109b2160dfb8652e8b31a8a39869a61051",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/b9c521ec11a51b574b91a7343e1c8673f8d35713"
        },
        "date": 1633884256596,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6430937.852943335,
            "unit": "iter/sec",
            "range": "stddev: 3.159894111353887e-7",
            "extra": "mean: 155.49831499977915 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8416752.2081672,
            "unit": "iter/sec",
            "range": "stddev: 1.76579290089358e-7",
            "extra": "mean: 118.81067367410863 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2662677.2142224633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012804662528153777",
            "extra": "mean: 375.5618573133045 nsec\nrounds: 135136"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1723371.3458235173,
            "unit": "iter/sec",
            "range": "stddev: 0.000001216760688302482",
            "extra": "mean: 580.2579939742243 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2474132.249627033,
            "unit": "iter/sec",
            "range": "stddev: 8.950718662268143e-7",
            "extra": "mean: 404.18211279947195 nsec\nrounds: 123457"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1627155.5878561768,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010907383028203355",
            "extra": "mean: 614.5693795131998 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1501485.6315751984,
            "unit": "iter/sec",
            "range": "stddev: 9.083233327706902e-7",
            "extra": "mean: 666.0070392753706 nsec\nrounds: 76336"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1220802.3725750882,
            "unit": "iter/sec",
            "range": "stddev: 0.000003432316444480225",
            "extra": "mean: 819.1334014954867 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1493795.382914612,
            "unit": "iter/sec",
            "range": "stddev: 8.662729091508509e-7",
            "extra": "mean: 669.4357282378392 nsec\nrounds: 75758"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1080621.2832762701,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022484498216698867",
            "extra": "mean: 925.3935818918768 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1949574.060705644,
            "unit": "iter/sec",
            "range": "stddev: 0.000001215645773370622",
            "extra": "mean: 512.9325528872698 nsec\nrounds: 101011"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 2387454.748972983,
            "unit": "iter/sec",
            "range": "stddev: 0.000002459902746697504",
            "extra": "mean: 418.85610624843156 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4929023.352136138,
            "unit": "iter/sec",
            "range": "stddev: 6.078653312860861e-7",
            "extra": "mean: 202.8799477214967 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6758696.215946109,
            "unit": "iter/sec",
            "range": "stddev: 3.844331151550705e-7",
            "extra": "mean: 147.9575302764177 nsec\nrounds: 69445"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b38e04808deb6c0b4e49cc6dd3d58d08677001f8",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-10-13T07:04:54+02:00",
          "tree_id": "92da41206f62123d77b196e561ef520b8c4a0c4d",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/b38e04808deb6c0b4e49cc6dd3d58d08677001f8"
        },
        "date": 1634101658137,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8487545.020746114,
            "unit": "iter/sec",
            "range": "stddev: 5.033166872578093e-9",
            "extra": "mean: 117.819699047936 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9533182.862310512,
            "unit": "iter/sec",
            "range": "stddev: 3.930257627028016e-9",
            "extra": "mean: 104.89676055126516 nsec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3431978.1392706297,
            "unit": "iter/sec",
            "range": "stddev: 1.3011388047880755e-8",
            "extra": "mean: 291.37714735412595 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2187434.7887574765,
            "unit": "iter/sec",
            "range": "stddev: 2.275388223735203e-8",
            "extra": "mean: 457.1564853679925 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3113820.7411204157,
            "unit": "iter/sec",
            "range": "stddev: 1.4294521528616253e-8",
            "extra": "mean: 321.14886601987877 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1854803.478696437,
            "unit": "iter/sec",
            "range": "stddev: 2.389486095138122e-8",
            "extra": "mean: 539.1406752717585 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1899085.6216657986,
            "unit": "iter/sec",
            "range": "stddev: 2.296728015545574e-8",
            "extra": "mean: 526.5692018257872 nsec\nrounds: 94340"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1497237.7926285414,
            "unit": "iter/sec",
            "range": "stddev: 2.6116043356416056e-8",
            "extra": "mean: 667.8965792364262 nsec\nrounds: 75188"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1881552.0198001415,
            "unit": "iter/sec",
            "range": "stddev: 1.772574808735154e-8",
            "extra": "mean: 531.4761375062844 nsec\nrounds: 92593"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1640997.0809774501,
            "unit": "iter/sec",
            "range": "stddev: 1.7265614076594393e-8",
            "extra": "mean: 609.3856056126438 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2460717.7812693682,
            "unit": "iter/sec",
            "range": "stddev: 1.7367437554152224e-8",
            "extra": "mean: 406.3854894741004 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4648983.567208423,
            "unit": "iter/sec",
            "range": "stddev: 9.176221234854876e-9",
            "extra": "mean: 215.10078182555924 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5779775.3108478915,
            "unit": "iter/sec",
            "range": "stddev: 7.636118807034309e-9",
            "extra": "mean: 173.01710641293238 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8455175.292706732,
            "unit": "iter/sec",
            "range": "stddev: 7.3822651633630355e-9",
            "extra": "mean: 118.27075907727311 nsec\nrounds: 81968"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "672a767905da002c741bbb76501ca95794884c65",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-11-19T17:24:09+01:00",
          "tree_id": "ae38c4ca23ccb10155b23af1eb4ca668a85e5d02",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/672a767905da002c741bbb76501ca95794884c65"
        },
        "date": 1637339176068,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8279589.210909897,
            "unit": "iter/sec",
            "range": "stddev: 1.8724601053580132e-7",
            "extra": "mean: 120.77893896984617 nsec\nrounds: 50762"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9213849.363257272,
            "unit": "iter/sec",
            "range": "stddev: 1.7376846459073413e-7",
            "extra": "mean: 108.53227142917225 nsec\nrounds: 107527"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3254868.609067912,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011812100811234994",
            "extra": "mean: 307.2320637502983 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2044387.5567427415,
            "unit": "iter/sec",
            "range": "stddev: 5.926344915452687e-7",
            "extra": "mean: 489.1440454632558 nsec\nrounds: 68494"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2822391.948205595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012173585853692445",
            "extra": "mean: 354.3094008032256 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1857934.2628750398,
            "unit": "iter/sec",
            "range": "stddev: 9.729930860893818e-7",
            "extra": "mean: 538.232175369106 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1837029.1588547695,
            "unit": "iter/sec",
            "range": "stddev: 7.809257025731238e-7",
            "extra": "mean: 544.3571731996628 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1543025.79897414,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011673932555335643",
            "extra": "mean: 648.0773041285629 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1723959.7169472054,
            "unit": "iter/sec",
            "range": "stddev: 0.000001107332326587979",
            "extra": "mean: 580.0599574164052 nsec\nrounds: 93458"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1413487.0815827886,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012604058494123204",
            "extra": "mean: 707.4702082740442 nsec\nrounds: 79366"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2137245.8425085,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020857381855378686",
            "extra": "mean: 467.8918915693569 nsec\nrounds: 34014"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4467852.716901489,
            "unit": "iter/sec",
            "range": "stddev: 3.8958608870549743e-7",
            "extra": "mean: 223.82116496750544 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5040116.447845716,
            "unit": "iter/sec",
            "range": "stddev: 5.145006301233372e-7",
            "extra": "mean: 198.40811424640097 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6626784.359651722,
            "unit": "iter/sec",
            "range": "stddev: 4.1084139453448427e-7",
            "extra": "mean: 150.9027524855877 nsec\nrounds: 66667"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ab4a7acc55a4e4a7c2e2df00ea0ba2c86cd545b",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-02-20T16:44:48+01:00",
          "tree_id": "624e3c69586bde9be496ed93d30a30a1cf742f9c",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/0ab4a7acc55a4e4a7c2e2df00ea0ba2c86cd545b"
        },
        "date": 1645372096357,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 3037257.7803776185,
            "unit": "iter/sec",
            "range": "stddev: 0.000001033678528796762",
            "extra": "mean: 329.2443619572097 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 7172525.690370486,
            "unit": "iter/sec",
            "range": "stddev: 3.6589156485402506e-7",
            "extra": "mean: 139.4209018090755 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 7682742.821582043,
            "unit": "iter/sec",
            "range": "stddev: 1.8451748278128973e-7",
            "extra": "mean: 130.16184756190296 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 9439227.94106233,
            "unit": "iter/sec",
            "range": "stddev: 1.5161362896975875e-7",
            "extra": "mean: 105.94086785956685 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3073314.388968173,
            "unit": "iter/sec",
            "range": "stddev: 8.929174647495891e-7",
            "extra": "mean: 325.38161523268803 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 2015776.7243047922,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011513544608465394",
            "extra": "mean: 496.08668854198237 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2715797.177020672,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014045766713950477",
            "extra": "mean: 368.21600981890725 nsec\nrounds: 156251"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1734271.9923557688,
            "unit": "iter/sec",
            "range": "stddev: 0.000001129774875345667",
            "extra": "mean: 576.6108225283115 nsec\nrounds: 59524"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 1738638.6815507559,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010081129817235117",
            "extra": "mean: 575.1626318979427 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1552037.176142479,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013642147503404043",
            "extra": "mean: 644.3144631918345 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1712504.9234922545,
            "unit": "iter/sec",
            "range": "stddev: 0.000001212529265191321",
            "extra": "mean: 583.9399269935052 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1536411.654000379,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014146208474774114",
            "extra": "mean: 650.8672317059895 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2190505.391552952,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015383885872825",
            "extra": "mean: 456.515653353686 nsec\nrounds: 113637"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 4811020.246614753,
            "unit": "iter/sec",
            "range": "stddev: 2.307519923765963e-7",
            "extra": "mean: 207.85611964608228 nsec\nrounds: 57804"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d35db930b3252d06b4f946238cb1430218aa9861",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-02-28T06:56:32+01:00",
          "tree_id": "6b26cd54cc4f604316da68e2eff563cccd32373b",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/d35db930b3252d06b4f946238cb1430218aa9861"
        },
        "date": 1646027925435,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 6470456.449474185,
            "unit": "iter/sec",
            "range": "stddev: 8.682232954798725e-9",
            "extra": "mean: 154.54860222129523 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 8152048.326732362,
            "unit": "iter/sec",
            "range": "stddev: 4.738987549077116e-9",
            "extra": "mean: 122.66855640690211 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 9407828.503953096,
            "unit": "iter/sec",
            "range": "stddev: 3.78925990810138e-9",
            "extra": "mean: 106.29445462142482 nsec\nrounds: 93458"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 11537929.629301328,
            "unit": "iter/sec",
            "range": "stddev: 4.090962017494013e-9",
            "extra": "mean: 86.67066207966901 nsec\nrounds: 114956"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3101624.4648418077,
            "unit": "iter/sec",
            "range": "stddev: 4.2261036712594414e-8",
            "extra": "mean: 322.41169468914677 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 2071746.0196141952,
            "unit": "iter/sec",
            "range": "stddev: 2.8715377495057678e-8",
            "extra": "mean: 482.68464885740167 nsec\nrounds: 161317"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2857417.1615839503,
            "unit": "iter/sec",
            "range": "stddev: 1.8097402211556255e-8",
            "extra": "mean: 349.9664009315781 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1700560.2187305142,
            "unit": "iter/sec",
            "range": "stddev: 3.0191738414655535e-8",
            "extra": "mean: 588.0415106655297 nsec\nrounds: 140865"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 1850500.9035875574,
            "unit": "iter/sec",
            "range": "stddev: 3.22053746154582e-8",
            "extra": "mean: 540.3942241052479 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1601766.235402398,
            "unit": "iter/sec",
            "range": "stddev: 4.171288105170986e-8",
            "extra": "mean: 624.3108250740647 nsec\nrounds: 138909"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1886701.7593777478,
            "unit": "iter/sec",
            "range": "stddev: 1.8869197754939662e-8",
            "extra": "mean: 530.0254770155436 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1596804.0924385253,
            "unit": "iter/sec",
            "range": "stddev: 4.129517074335636e-8",
            "extra": "mean: 626.2508999917122 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2250595.2618345893,
            "unit": "iter/sec",
            "range": "stddev: 2.4496728587189573e-8",
            "extra": "mean: 444.32689295945875 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 5077303.11721495,
            "unit": "iter/sec",
            "range": "stddev: 1.1545280558014534e-8",
            "extra": "mean: 196.9549536266699 nsec\nrounds: 126583"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7379e1e89c721437a75a7383a21a2141511d01c",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-03-06T08:45:15+01:00",
          "tree_id": "0d9d90eb99a56ee7f7e6057f4aa1d312fced9b46",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/d7379e1e89c721437a75a7383a21a2141511d01c"
        },
        "date": 1646552837958,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 6617863.79398205,
            "unit": "iter/sec",
            "range": "stddev: 6.521497415240213e-9",
            "extra": "mean: 151.10616221928495 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 8235446.023777305,
            "unit": "iter/sec",
            "range": "stddev: 3.895305329748908e-9",
            "extra": "mean: 121.42633162945438 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 9047781.751277892,
            "unit": "iter/sec",
            "range": "stddev: 5.366615474225964e-9",
            "extra": "mean: 110.52432822661224 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 10075430.38284445,
            "unit": "iter/sec",
            "range": "stddev: 3.6883894764808177e-9",
            "extra": "mean: 99.25134331755804 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3422836.538910187,
            "unit": "iter/sec",
            "range": "stddev: 1.8114626095216076e-8",
            "extra": "mean: 292.15534794917596 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 2177353.0025722375,
            "unit": "iter/sec",
            "range": "stddev: 2.6826161902740822e-8",
            "extra": "mean: 459.27325464368005 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 3062663.2372351848,
            "unit": "iter/sec",
            "range": "stddev: 1.7359479222717672e-8",
            "extra": "mean: 326.5132084523389 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1942792.482777304,
            "unit": "iter/sec",
            "range": "stddev: 2.759438540947292e-8",
            "extra": "mean: 514.7230128103618 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 1981905.3833935948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010768609334570783",
            "extra": "mean: 504.56495470405594 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1736123.337264695,
            "unit": "iter/sec",
            "range": "stddev: 2.9718130367303397e-8",
            "extra": "mean: 575.9959436837703 nsec\nrounds: 138870"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1966239.2004373188,
            "unit": "iter/sec",
            "range": "stddev: 2.2373147070480756e-8",
            "extra": "mean: 508.5851201509938 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1702205.7860863244,
            "unit": "iter/sec",
            "range": "stddev: 3.838338303772034e-8",
            "extra": "mean: 587.4730353838488 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2398474.8059060443,
            "unit": "iter/sec",
            "range": "stddev: 2.6735471903309173e-8",
            "extra": "mean: 416.93162568853603 nsec\nrounds: 175408"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 5461282.277214577,
            "unit": "iter/sec",
            "range": "stddev: 9.806816004448547e-9",
            "extra": "mean: 183.10718055580557 nsec\nrounds: 200000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fea94c7e92a09fdbf2fa0bbb85f20b0a14660619",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-03-16T07:32:25+01:00",
          "tree_id": "35f00be72057d110fad69d663904bd9bc585e013",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/fea94c7e92a09fdbf2fa0bbb85f20b0a14660619"
        },
        "date": 1647412478129,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 2846470.947762091,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020088878982915084",
            "extra": "mean: 351.31221022515786 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 6860150.062939236,
            "unit": "iter/sec",
            "range": "stddev: 1.6680957769629763e-7",
            "extra": "mean: 145.76940603707516 nsec\nrounds: 76924"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 8208611.355393121,
            "unit": "iter/sec",
            "range": "stddev: 7.33340004625383e-8",
            "extra": "mean: 121.82328492662361 nsec\nrounds: 94340"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 9669418.702442985,
            "unit": "iter/sec",
            "range": "stddev: 1.296013842434388e-7",
            "extra": "mean: 103.41883320734864 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3160283.0089836936,
            "unit": "iter/sec",
            "range": "stddev: 3.957791461359355e-7",
            "extra": "mean: 316.4273570301404 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 2103462.429729251,
            "unit": "iter/sec",
            "range": "stddev: 7.397754242343448e-7",
            "extra": "mean: 475.4066371079955 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2816121.979170918,
            "unit": "iter/sec",
            "range": "stddev: 4.2220909632232825e-7",
            "extra": "mean: 355.09825476195806 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1892810.7675669608,
            "unit": "iter/sec",
            "range": "stddev: 3.223930783109014e-7",
            "extra": "mean: 528.314830586791 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 1802261.2504215955,
            "unit": "iter/sec",
            "range": "stddev: 6.337412654730364e-7",
            "extra": "mean: 554.8585144168524 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1623891.045563439,
            "unit": "iter/sec",
            "range": "stddev: 5.597089505977876e-7",
            "extra": "mean: 615.8048612510552 nsec\nrounds: 59172"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1732254.8864018766,
            "unit": "iter/sec",
            "range": "stddev: 3.641892282046048e-7",
            "extra": "mean: 577.28225092619 nsec\nrounds: 76342"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1596552.2024005293,
            "unit": "iter/sec",
            "range": "stddev: 5.298291322462036e-7",
            "extra": "mean: 626.3497043795118 nsec\nrounds: 80001"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2291465.0725812973,
            "unit": "iter/sec",
            "range": "stddev: 4.41730097205543e-7",
            "extra": "mean: 436.4020259202817 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 4520167.642291904,
            "unit": "iter/sec",
            "range": "stddev: 3.2350960509920075e-7",
            "extra": "mean: 221.2307328257415 nsec\nrounds: 200000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aae843afd2550806ac582fb341ba129c5bd56692",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-04-05T21:44:22+02:00",
          "tree_id": "4089948283c2e535f703147b14b48fc04118d420",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/aae843afd2550806ac582fb341ba129c5bd56692"
        },
        "date": 1649190056050,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 2813201.3353421823,
            "unit": "iter/sec",
            "range": "stddev: 9.921521290793221e-8",
            "extra": "mean: 355.46691501849637 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 6576958.734218903,
            "unit": "iter/sec",
            "range": "stddev: 5.5030786425299486e-9",
            "extra": "mean: 152.0459592968699 nsec\nrounds: 62108"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 7476920.361340768,
            "unit": "iter/sec",
            "range": "stddev: 5.1622545244329535e-9",
            "extra": "mean: 133.74490454266697 nsec\nrounds: 70922"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 8512312.533873098,
            "unit": "iter/sec",
            "range": "stddev: 4.568859540107799e-9",
            "extra": "mean: 117.47688962553379 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 2779461.164966406,
            "unit": "iter/sec",
            "range": "stddev: 2.2331302790573007e-8",
            "extra": "mean: 359.78196515420433 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 1838600.8434817772,
            "unit": "iter/sec",
            "range": "stddev: 3.466116809395929e-8",
            "extra": "mean: 543.8918422919376 nsec\nrounds: 135136"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2494656.1692553386,
            "unit": "iter/sec",
            "range": "stddev: 3.266226816933225e-8",
            "extra": "mean: 400.85684445194084 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1661701.2355605818,
            "unit": "iter/sec",
            "range": "stddev: 2.735042932218186e-8",
            "extra": "mean: 601.7928967012937 nsec\nrounds: 70418"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 1707810.6784622506,
            "unit": "iter/sec",
            "range": "stddev: 2.3237678026576052e-8",
            "extra": "mean: 585.5449978216337 nsec\nrounds: 75747"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1227839.5573063176,
            "unit": "iter/sec",
            "range": "stddev: 7.206006944301631e-8",
            "extra": "mean: 814.4386569477093 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1676196.7369646123,
            "unit": "iter/sec",
            "range": "stddev: 3.28496209528603e-7",
            "extra": "mean: 596.5886807599865 nsec\nrounds: 68494"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1310719.9919773955,
            "unit": "iter/sec",
            "range": "stddev: 6.377606034211026e-8",
            "extra": "mean: 762.9394577948675 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2052770.2139246657,
            "unit": "iter/sec",
            "range": "stddev: 4.729929448942745e-8",
            "extra": "mean: 487.14658524168493 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 4384985.039597284,
            "unit": "iter/sec",
            "range": "stddev: 1.6121088348297778e-8",
            "extra": "mean: 228.05094908389847 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d3729ab7d28dfec6c1dadac5dd6d1a13dc2395d1",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-04-22T15:15:44+02:00",
          "tree_id": "82bc0cef70f1dbcc814f84ed206f1857d1275950",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/d3729ab7d28dfec6c1dadac5dd6d1a13dc2395d1"
        },
        "date": 1650654184633,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 2558816.690511239,
            "unit": "iter/sec",
            "range": "stddev: 0.000006632257475743757",
            "extra": "mean: 390.80564219713796 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 6303822.786808545,
            "unit": "iter/sec",
            "range": "stddev: 1.029786761675196e-7",
            "extra": "mean: 158.6339010184302 nsec\nrounds: 62112"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 7242448.009239962,
            "unit": "iter/sec",
            "range": "stddev: 1.8954893552642928e-7",
            "extra": "mean: 138.0748606995806 nsec\nrounds: 80007"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 8552988.089662569,
            "unit": "iter/sec",
            "range": "stddev: 1.9295963726073144e-7",
            "extra": "mean: 116.91820326612405 nsec\nrounds: 94349"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 2817406.6867327695,
            "unit": "iter/sec",
            "range": "stddev: 0.000001058412615429963",
            "extra": "mean: 354.93633372458396 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 1901657.5921092338,
            "unit": "iter/sec",
            "range": "stddev: 0.000001613148673676531",
            "extra": "mean: 525.8570229202099 nsec\nrounds: 46512"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2513490.01089825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021050820142982693",
            "extra": "mean: 397.8531824925746 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1624900.5084757884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011725293130140242",
            "extra": "mean: 615.4222949552011 nsec\nrounds: 8937"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 1638087.2503044682,
            "unit": "iter/sec",
            "range": "stddev: 8.932244411939153e-7",
            "extra": "mean: 610.4680930848336 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1523102.5150384225,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011384966750019095",
            "extra": "mean: 656.5546246076511 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1605378.2605418253,
            "unit": "iter/sec",
            "range": "stddev: 8.391740195707267e-7",
            "extra": "mean: 622.9061552525731 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1466350.4676585833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010541863057049889",
            "extra": "mean: 681.9652068559849 nsec\nrounds: 48077"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2042883.2083697063,
            "unit": "iter/sec",
            "range": "stddev: 9.791320368691789e-7",
            "extra": "mean: 489.5042437585455 nsec\nrounds: 90910"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 4124067.7311584805,
            "unit": "iter/sec",
            "range": "stddev: 4.297400356527718e-7",
            "extra": "mean: 242.4790437959063 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7bd5ce3f8e5659e48fb2b543f6e74bab6eb8e30c",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-04-23T19:50:33+02:00",
          "tree_id": "0656ba20d47ab250d7429f0734d0652d696f183f",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/7bd5ce3f8e5659e48fb2b543f6e74bab6eb8e30c"
        },
        "date": 1650745288413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 2812512.041185837,
            "unit": "iter/sec",
            "range": "stddev: 7.15153068238988e-7",
            "extra": "mean: 355.55403331833236 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 6366515.869916189,
            "unit": "iter/sec",
            "range": "stddev: 6.572489952495574e-8",
            "extra": "mean: 157.07178312790276 nsec\nrounds: 60607"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 7206928.637137669,
            "unit": "iter/sec",
            "range": "stddev: 5.9594778640445814e-8",
            "extra": "mean: 138.75536311644848 nsec\nrounds: 73530"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 8483855.671063755,
            "unit": "iter/sec",
            "range": "stddev: 6.698058066390344e-8",
            "extra": "mean: 117.87093495833959 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 2827591.78017197,
            "unit": "iter/sec",
            "range": "stddev: 3.681604774172825e-7",
            "extra": "mean: 353.6578395127177 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 1851466.1792860918,
            "unit": "iter/sec",
            "range": "stddev: 9.353702993489667e-7",
            "extra": "mean: 540.1124855466517 nsec\nrounds: 84746"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2542859.8708234746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012192639911930607",
            "extra": "mean: 393.258005080699 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1603655.5294648323,
            "unit": "iter/sec",
            "range": "stddev: 3.9640919754130163e-7",
            "extra": "mean: 623.5753137917494 nsec\nrounds: 71943"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 1633889.0561769023,
            "unit": "iter/sec",
            "range": "stddev: 5.726391259582984e-7",
            "extra": "mean: 612.0366595389863 nsec\nrounds: 80001"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1499242.996988758,
            "unit": "iter/sec",
            "range": "stddev: 3.676908491876679e-7",
            "extra": "mean: 667.0032823288482 nsec\nrounds: 74627"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1573685.0321427416,
            "unit": "iter/sec",
            "range": "stddev: 3.63297098560672e-7",
            "extra": "mean: 635.4511732492946 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1512858.5152774388,
            "unit": "iter/sec",
            "range": "stddev: 7.284089214655298e-7",
            "extra": "mean: 661.0003446466233 nsec\nrounds: 48310"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 1724394.8315889968,
            "unit": "iter/sec",
            "range": "stddev: 7.586810129235008e-7",
            "extra": "mean: 579.9135915285243 nsec\nrounds: 72464"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 4255854.446864831,
            "unit": "iter/sec",
            "range": "stddev: 2.552331107191228e-7",
            "extra": "mean: 234.9704418905572 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b727f70e525097ee732ef3456281ff93050380d9",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-04-25T09:38:38+02:00",
          "tree_id": "c9517290d363600ca700bcf5c9f21895cfcb3051",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/b727f70e525097ee732ef3456281ff93050380d9"
        },
        "date": 1650884228067,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 6469455.208470565,
            "unit": "iter/sec",
            "range": "stddev: 6.749542310074038e-9",
            "extra": "mean: 154.57252083506822 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 7939708.427974738,
            "unit": "iter/sec",
            "range": "stddev: 3.977092850103721e-9",
            "extra": "mean: 125.94920947924955 nsec\nrounds: 76924"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 8973071.15951574,
            "unit": "iter/sec",
            "range": "stddev: 3.5461779700216797e-9",
            "extra": "mean: 111.44456365315656 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 9829657.242871052,
            "unit": "iter/sec",
            "range": "stddev: 3.332058695502442e-9",
            "extra": "mean: 101.73294706944442 nsec\nrounds: 94331"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3430513.662566603,
            "unit": "iter/sec",
            "range": "stddev: 1.4777591231077677e-8",
            "extra": "mean: 291.5015354434864 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 2219944.686482307,
            "unit": "iter/sec",
            "range": "stddev: 2.5523756546058463e-8",
            "extra": "mean: 450.46167415345997 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 3041094.104807797,
            "unit": "iter/sec",
            "range": "stddev: 1.7051197227738018e-8",
            "extra": "mean: 328.8290219033528 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1934741.6593181025,
            "unit": "iter/sec",
            "range": "stddev: 2.7158555820427747e-8",
            "extra": "mean: 516.864871949835 nsec\nrounds: 138889"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 2013972.4725005028,
            "unit": "iter/sec",
            "range": "stddev: 1.607651106906548e-8",
            "extra": "mean: 496.5311163157122 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1831075.5356052727,
            "unit": "iter/sec",
            "range": "stddev: 1.7177914354907003e-8",
            "extra": "mean: 546.1271152145679 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1981038.2200824227,
            "unit": "iter/sec",
            "range": "stddev: 1.613822513207148e-8",
            "extra": "mean: 504.78581880079906 nsec\nrounds: 84746"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1804497.8930784727,
            "unit": "iter/sec",
            "range": "stddev: 2.5807555613205918e-8",
            "extra": "mean: 554.1707772766637 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2432482.0023647416,
            "unit": "iter/sec",
            "range": "stddev: 2.750132164369106e-8",
            "extra": "mean: 411.10273335106064 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 5348953.502000066,
            "unit": "iter/sec",
            "range": "stddev: 6.842671350233073e-9",
            "extra": "mean: 186.9524570789919 nsec\nrounds: 45872"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9283dec5e0bac901b977e7ed6ceb6bc6b186d81a",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-04-27T06:59:10+02:00",
          "tree_id": "7a8265ea060c323d940a84c6a14a8e84be85eb13",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/9283dec5e0bac901b977e7ed6ceb6bc6b186d81a"
        },
        "date": 1651058524217,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 6341935.542632009,
            "unit": "iter/sec",
            "range": "stddev: 3.4355353763266884e-8",
            "extra": "mean: 157.68056822363098 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 7676147.166979621,
            "unit": "iter/sec",
            "range": "stddev: 2.244215613080035e-8",
            "extra": "mean: 130.2736878602557 nsec\nrounds: 78734"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 8981637.801964879,
            "unit": "iter/sec",
            "range": "stddev: 2.1793845847859817e-8",
            "extra": "mean: 111.33826837028558 nsec\nrounds: 71938"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 10157320.787436286,
            "unit": "iter/sec",
            "range": "stddev: 1.9774647365115253e-8",
            "extra": "mean: 98.45115862019316 nsec\nrounds: 104167"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3554978.8555433294,
            "unit": "iter/sec",
            "range": "stddev: 6.789281429444455e-8",
            "extra": "mean: 281.29562527230155 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 2244184.7611702406,
            "unit": "iter/sec",
            "range": "stddev: 1.1412332567321964e-7",
            "extra": "mean: 445.596110134494 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2975574.437289132,
            "unit": "iter/sec",
            "range": "stddev: 8.833833314234253e-8",
            "extra": "mean: 336.0695627264027 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1873884.3926207884,
            "unit": "iter/sec",
            "range": "stddev: 1.3270372156473822e-7",
            "extra": "mean: 533.6508505743726 nsec\nrounds: 140846"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 2021854.0066750862,
            "unit": "iter/sec",
            "range": "stddev: 9.546307816522713e-8",
            "extra": "mean: 494.5955527444081 nsec\nrounds: 90910"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1788511.5761262716,
            "unit": "iter/sec",
            "range": "stddev: 1.0732761713946225e-7",
            "extra": "mean: 559.1241417434661 nsec\nrounds: 71424"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1909491.0027893998,
            "unit": "iter/sec",
            "range": "stddev: 9.837502145599946e-8",
            "extra": "mean: 523.699770535321 nsec\nrounds: 76918"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1714630.4309035838,
            "unit": "iter/sec",
            "range": "stddev: 1.4064428907804637e-7",
            "extra": "mean: 583.2160575111137 nsec\nrounds: 151493"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2314601.738388066,
            "unit": "iter/sec",
            "range": "stddev: 1.065392187020118e-7",
            "extra": "mean: 432.0397688355266 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 5595711.240208525,
            "unit": "iter/sec",
            "range": "stddev: 3.9935061546136705e-8",
            "extra": "mean: 178.7082923106494 nsec\nrounds: 199961"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49e2e1a3d21ba60022ad33ae497af7b1fefc379a",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-06T22:50:02+02:00",
          "tree_id": "4bdf1caded3e6e465604376ad1566ff927dd7a43",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/49e2e1a3d21ba60022ad33ae497af7b1fefc379a"
        },
        "date": 1651892453910,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 5852922.335821006,
            "unit": "iter/sec",
            "range": "stddev: 3.144778550680076e-7",
            "extra": "mean: 170.85482133929514 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 7972151.022441495,
            "unit": "iter/sec",
            "range": "stddev: 1.2752505075915372e-7",
            "extra": "mean: 125.43666034239483 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 8639029.512849353,
            "unit": "iter/sec",
            "range": "stddev: 4.81265530349128e-7",
            "extra": "mean: 115.7537427684599 nsec\nrounds: 86949"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 10715780.770930428,
            "unit": "iter/sec",
            "range": "stddev: 5.1483030425835115e-8",
            "extra": "mean: 93.32031154582108 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3414648.5672661015,
            "unit": "iter/sec",
            "range": "stddev: 4.414966560651969e-7",
            "extra": "mean: 292.85590604735785 nsec\nrounds: 34603"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 2395206.204948234,
            "unit": "iter/sec",
            "range": "stddev: 2.835830250751402e-7",
            "extra": "mean: 417.5005884395651 nsec\nrounds: 106383"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 3182669.741163275,
            "unit": "iter/sec",
            "range": "stddev: 2.2558576153762465e-7",
            "extra": "mean: 314.20162358228174 nsec\nrounds: 48781"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1982120.0822226026,
            "unit": "iter/sec",
            "range": "stddev: 4.0341838647177307e-7",
            "extra": "mean: 504.5103013531564 nsec\nrounds: 101011"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 2097012.1335936794,
            "unit": "iter/sec",
            "range": "stddev: 3.924820100713764e-7",
            "extra": "mean: 476.86896226295585 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1876853.7363557187,
            "unit": "iter/sec",
            "range": "stddev: 3.2781938721054844e-7",
            "extra": "mean: 532.806569116072 nsec\nrounds: 64103"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1990095.5122850428,
            "unit": "iter/sec",
            "range": "stddev: 3.9642928242850354e-7",
            "extra": "mean: 502.48844531694084 nsec\nrounds: 101011"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1829308.9704373986,
            "unit": "iter/sec",
            "range": "stddev: 3.860406086645554e-7",
            "extra": "mean: 546.6545106161209 nsec\nrounds: 68494"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2539488.712936319,
            "unit": "iter/sec",
            "range": "stddev: 2.760813840036521e-7",
            "extra": "mean: 393.78005301038297 nsec\nrounds: 126583"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 5537619.695741056,
            "unit": "iter/sec",
            "range": "stddev: 1.412855640638442e-7",
            "extra": "mean: 180.5830040601409 nsec\nrounds: 44445"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52e5d211a905239f8a20762e4354791c2e313c93",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-10T06:32:42+02:00",
          "tree_id": "7f27599a1837135e5c66aa135639c9f4bfa18ff1",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/52e5d211a905239f8a20762e4354791c2e313c93"
        },
        "date": 1652169762300,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 3189357.6408295385,
            "unit": "iter/sec",
            "range": "stddev: 6.523630369047691e-8",
            "extra": "mean: 313.54276083628685 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 7877625.51014423,
            "unit": "iter/sec",
            "range": "stddev: 6.782193671601878e-9",
            "extra": "mean: 126.94180482580043 nsec\nrounds: 75758"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 8969349.696082562,
            "unit": "iter/sec",
            "range": "stddev: 4.129908383582449e-9",
            "extra": "mean: 111.49080299963812 nsec\nrounds: 86949"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 10246380.479997931,
            "unit": "iter/sec",
            "range": "stddev: 5.257432730712329e-9",
            "extra": "mean: 97.59543889201964 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3376800.887132686,
            "unit": "iter/sec",
            "range": "stddev: 2.1587234125046295e-8",
            "extra": "mean: 296.1382780403759 nsec\nrounds: 99010"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 2246803.4834707193,
            "unit": "iter/sec",
            "range": "stddev: 2.3626240060970245e-8",
            "extra": "mean: 445.0767534220611 nsec\nrounds: 163908"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 3108443.9003658798,
            "unit": "iter/sec",
            "range": "stddev: 1.4009851072684302e-8",
            "extra": "mean: 321.7043742955422 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1905761.5597520873,
            "unit": "iter/sec",
            "range": "stddev: 3.0408152564263755e-8",
            "extra": "mean: 524.7246146209253 nsec\nrounds: 138889"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 1984847.6984570392,
            "unit": "iter/sec",
            "range": "stddev: 2.558291200015506e-8",
            "extra": "mean: 503.8169935041416 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1691852.40639211,
            "unit": "iter/sec",
            "range": "stddev: 2.6535156398450895e-8",
            "extra": "mean: 591.0681074909307 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 2008037.6510381447,
            "unit": "iter/sec",
            "range": "stddev: 1.9544900955759263e-8",
            "extra": "mean: 497.9986303954596 nsec\nrounds: 79366"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1753252.0783713148,
            "unit": "iter/sec",
            "range": "stddev: 2.1097654831073844e-8",
            "extra": "mean: 570.3686379936845 nsec\nrounds: 72988"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2426832.927897806,
            "unit": "iter/sec",
            "range": "stddev: 2.2775461025222787e-8",
            "extra": "mean: 412.0596801303285 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 5259784.020118278,
            "unit": "iter/sec",
            "range": "stddev: 1.0334665252584856e-8",
            "extra": "mean: 190.12187499985072 nsec\nrounds: 200000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1aba25a7932aa82a715f29e48151aacc53ac677d",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-11T12:45:37+02:00",
          "tree_id": "9772a12f1b3923fc7acd0094174807aef8f029ca",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/1aba25a7932aa82a715f29e48151aacc53ac677d"
        },
        "date": 1652291289363,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 3323009.84925177,
            "unit": "iter/sec",
            "range": "stddev: 5.971844944836193e-8",
            "extra": "mean: 300.9320000135318 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 7888896.356701704,
            "unit": "iter/sec",
            "range": "stddev: 4.757467473592512e-9",
            "extra": "mean: 126.76044338569997 nsec\nrounds: 75758"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 8943977.963792758,
            "unit": "iter/sec",
            "range": "stddev: 4.444783109323318e-9",
            "extra": "mean: 111.80707332342183 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 10366984.288151566,
            "unit": "iter/sec",
            "range": "stddev: 3.812382247604593e-9",
            "extra": "mean: 96.4600670942832 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3398898.362038643,
            "unit": "iter/sec",
            "range": "stddev: 1.771616567235238e-8",
            "extra": "mean: 294.2129753479246 nsec\nrounds: 93458"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 2269492.3100083894,
            "unit": "iter/sec",
            "range": "stddev: 2.396856239514771e-8",
            "extra": "mean: 440.6271815023969 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 3029093.81755566,
            "unit": "iter/sec",
            "range": "stddev: 2.132272026963177e-8",
            "extra": "mean: 330.1317358357577 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1860406.106660733,
            "unit": "iter/sec",
            "range": "stddev: 3.259600766592564e-8",
            "extra": "mean: 537.5170487885547 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 2079673.6843019335,
            "unit": "iter/sec",
            "range": "stddev: 1.832114111660081e-8",
            "extra": "mean: 480.844666905264 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1755012.6385975906,
            "unit": "iter/sec",
            "range": "stddev: 3.152472910709533e-8",
            "extra": "mean: 569.7964664218734 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 2005051.0250125504,
            "unit": "iter/sec",
            "range": "stddev: 2.1399416291650522e-8",
            "extra": "mean: 498.7404248194582 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1767331.06589972,
            "unit": "iter/sec",
            "range": "stddev: 4.34499827721669e-7",
            "extra": "mean: 565.8249432117864 nsec\nrounds: 129871"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2426649.655352876,
            "unit": "iter/sec",
            "range": "stddev: 2.79213710673177e-8",
            "extra": "mean: 412.09080090883856 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 5203203.084022143,
            "unit": "iter/sec",
            "range": "stddev: 1.3673617367056876e-8",
            "extra": "mean: 192.18930798029683 nsec\nrounds: 97088"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00f795bbe1943b825cbd7b061837bf22230dbc0d",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-13T18:29:35+02:00",
          "tree_id": "a9629d42ab3b1589ac0bd4ce3552b64494dadea8",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/00f795bbe1943b825cbd7b061837bf22230dbc0d"
        },
        "date": 1652497605616,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 2938798.7907634396,
            "unit": "iter/sec",
            "range": "stddev: 2.1363277836529578e-7",
            "extra": "mean: 340.2750821672349 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 6656240.664404817,
            "unit": "iter/sec",
            "range": "stddev: 1.5469361248957188e-8",
            "extra": "mean: 150.23495249315516 nsec\nrounds: 64517"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 7703667.3454087265,
            "unit": "iter/sec",
            "range": "stddev: 1.2911236058117926e-8",
            "extra": "mean: 129.80830494922435 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 8752650.67246705,
            "unit": "iter/sec",
            "range": "stddev: 1.3779100706876853e-8",
            "extra": "mean: 114.25110374233309 nsec\nrounds: 84739"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 2878946.6220058263,
            "unit": "iter/sec",
            "range": "stddev: 5.919572589362541e-8",
            "extra": "mean: 347.3492673870408 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 1907710.7112524942,
            "unit": "iter/sec",
            "range": "stddev: 8.719933023504406e-8",
            "extra": "mean: 524.1884915262979 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2492266.158464513,
            "unit": "iter/sec",
            "range": "stddev: 7.639492890643829e-8",
            "extra": "mean: 401.24125451188166 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1568400.0990606037,
            "unit": "iter/sec",
            "range": "stddev: 1.2058883024111107e-7",
            "extra": "mean: 637.5924106354379 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 1739189.8163664201,
            "unit": "iter/sec",
            "range": "stddev: 7.354952756413315e-8",
            "extra": "mean: 574.980367634193 nsec\nrounds: 76924"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1471274.8105269358,
            "unit": "iter/sec",
            "range": "stddev: 8.108077712317681e-8",
            "extra": "mean: 679.6826757617802 nsec\nrounds: 51021"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1682644.5863554967,
            "unit": "iter/sec",
            "range": "stddev: 6.781980136643361e-8",
            "extra": "mean: 594.3025687710111 nsec\nrounds: 74627"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1516815.4846201937,
            "unit": "iter/sec",
            "range": "stddev: 8.192820667112835e-8",
            "extra": "mean: 659.2759700432069 nsec\nrounds: 68966"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2144858.239492765,
            "unit": "iter/sec",
            "range": "stddev: 1.0232659741852858e-7",
            "extra": "mean: 466.2312788730884 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 4680850.6476978315,
            "unit": "iter/sec",
            "range": "stddev: 4.00722381433434e-8",
            "extra": "mean: 213.63638262874792 nsec\nrounds: 126583"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74951307fbc1c722f7ed7ce3fdaa7d61454e48d8",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-16T14:45:24+02:00",
          "tree_id": "860aec2baaae8130009740e947afe353b6d027e7",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/74951307fbc1c722f7ed7ce3fdaa7d61454e48d8"
        },
        "date": 1652722724141,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 3457983.583236289,
            "unit": "iter/sec",
            "range": "stddev: 1.291883362978472e-7",
            "extra": "mean: 289.18587261311137 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 8208557.78806017,
            "unit": "iter/sec",
            "range": "stddev: 6.1088940560129955e-9",
            "extra": "mean: 121.82407991990868 nsec\nrounds: 74075"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 9120946.63369507,
            "unit": "iter/sec",
            "range": "stddev: 4.513190405695175e-9",
            "extra": "mean: 109.63774267749945 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 10540490.93271182,
            "unit": "iter/sec",
            "range": "stddev: 4.23407851606032e-9",
            "extra": "mean: 94.87224137699812 nsec\nrounds: 100001"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3358292.0951854778,
            "unit": "iter/sec",
            "range": "stddev: 2.234651493250721e-8",
            "extra": "mean: 297.7704058057177 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 2260523.7723230347,
            "unit": "iter/sec",
            "range": "stddev: 2.812774687270563e-8",
            "extra": "mean: 442.3753522273214 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2976283.8915249747,
            "unit": "iter/sec",
            "range": "stddev: 2.8314654515637055e-8",
            "extra": "mean: 335.9894541129123 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1903554.3302717905,
            "unit": "iter/sec",
            "range": "stddev: 3.213401196721106e-8",
            "extra": "mean: 525.3330488641027 nsec\nrounds: 140846"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 2042375.2950842953,
            "unit": "iter/sec",
            "range": "stddev: 2.71070044016237e-8",
            "extra": "mean: 489.6259773639428 nsec\nrounds: 59881"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1722237.3255567884,
            "unit": "iter/sec",
            "range": "stddev: 4.986393110216348e-8",
            "extra": "mean: 580.6400692638813 nsec\nrounds: 135136"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1992405.733535858,
            "unit": "iter/sec",
            "range": "stddev: 2.2555928474158847e-8",
            "extra": "mean: 501.9058032047412 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1804899.8833744002,
            "unit": "iter/sec",
            "range": "stddev: 2.268234433786124e-8",
            "extra": "mean: 554.0473514410024 nsec\nrounds: 75758"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2461611.1974900737,
            "unit": "iter/sec",
            "range": "stddev: 3.0616696054899055e-8",
            "extra": "mean: 406.2379960819714 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 5200584.6527973795,
            "unit": "iter/sec",
            "range": "stddev: 1.6323650025366498e-8",
            "extra": "mean: 192.2860729634334 nsec\nrounds: 90091"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "871aedf090776d29b67e91324d36b48c3edab29c",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-20T14:18:53+02:00",
          "tree_id": "77286f00ccf0464d8488818c8012cc11d2b33019",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/871aedf090776d29b67e91324d36b48c3edab29c"
        },
        "date": 1653094616938,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 2472239.3936456353,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058385940322158035",
            "extra": "mean: 404.4915725274368 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 6400932.503156953,
            "unit": "iter/sec",
            "range": "stddev: 4.252998530773327e-7",
            "extra": "mean: 156.22723712629048 nsec\nrounds: 64936"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 7293885.447331452,
            "unit": "iter/sec",
            "range": "stddev: 2.467015212699434e-7",
            "extra": "mean: 137.10113864835017 nsec\nrounds: 79366"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 8766555.387691539,
            "unit": "iter/sec",
            "range": "stddev: 2.22752361694833e-7",
            "extra": "mean: 114.06988900155035 nsec\nrounds: 100001"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 2892477.3801583024,
            "unit": "iter/sec",
            "range": "stddev: 8.383727706819548e-7",
            "extra": "mean: 345.72439765961667 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 1882842.909416137,
            "unit": "iter/sec",
            "range": "stddev: 8.964875487624127e-7",
            "extra": "mean: 531.1117539329199 nsec\nrounds: 90910"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2617016.6197118787,
            "unit": "iter/sec",
            "range": "stddev: 6.936546983935349e-7",
            "extra": "mean: 382.1145010955625 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1587146.831941303,
            "unit": "iter/sec",
            "range": "stddev: 0.000002296014752281429",
            "extra": "mean: 630.0614283916699 nsec\nrounds: 56819"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 1635510.7999320698,
            "unit": "iter/sec",
            "range": "stddev: 0.000001198152110778181",
            "extra": "mean: 611.429774747759 nsec\nrounds: 74627"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1453333.5239397448,
            "unit": "iter/sec",
            "range": "stddev: 0.000001085553170867645",
            "extra": "mean: 688.0733042538176 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1589586.5025541023,
            "unit": "iter/sec",
            "range": "stddev: 9.299768243148276e-7",
            "extra": "mean: 629.0944207145103 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1486196.8129140437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011565917324716446",
            "extra": "mean: 672.8583935252758 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2055125.1217074606,
            "unit": "iter/sec",
            "range": "stddev: 8.197719094164501e-7",
            "extra": "mean: 486.58837821473026 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 4110363.7997988826,
            "unit": "iter/sec",
            "range": "stddev: 9.630655294419368e-7",
            "extra": "mean: 243.28746765638434 nsec\nrounds: 82645"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a87fceaf51d475bb6c5b37b5c454af3d6b0cc522",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-22T19:08:32+02:00",
          "tree_id": "af6735ed5d538d591037cf0308bf1cc702974ded",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/a87fceaf51d475bb6c5b37b5c454af3d6b0cc522"
        },
        "date": 1653248372948,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 3324598.1238423786,
            "unit": "iter/sec",
            "range": "stddev: 1.6239001486459553e-7",
            "extra": "mean: 300.7882344721586 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 8246995.138387452,
            "unit": "iter/sec",
            "range": "stddev: 5.067615454904562e-9",
            "extra": "mean: 121.25628586162144 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 9109348.314405646,
            "unit": "iter/sec",
            "range": "stddev: 7.057211367546552e-9",
            "extra": "mean: 109.77733702634399 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 10459684.146933403,
            "unit": "iter/sec",
            "range": "stddev: 4.0845404699603055e-9",
            "extra": "mean: 95.60518137571465 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3451372.904141928,
            "unit": "iter/sec",
            "range": "stddev: 1.449838517092127e-8",
            "extra": "mean: 289.7397724825791 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 2212038.858844162,
            "unit": "iter/sec",
            "range": "stddev: 3.076666574513979e-8",
            "extra": "mean: 452.07162433087285 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2957912.119804341,
            "unit": "iter/sec",
            "range": "stddev: 2.3471112743583343e-8",
            "extra": "mean: 338.076305007114 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1900196.772691543,
            "unit": "iter/sec",
            "range": "stddev: 2.956042819144518e-8",
            "extra": "mean: 526.2612874475318 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 2015498.0232523058,
            "unit": "iter/sec",
            "range": "stddev: 1.836529201871231e-8",
            "extra": "mean: 496.15528691330525 nsec\nrounds: 81295"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1742747.1113061374,
            "unit": "iter/sec",
            "range": "stddev: 3.361007585154586e-8",
            "extra": "mean: 573.8067178602873 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1902481.1364919243,
            "unit": "iter/sec",
            "range": "stddev: 2.012696387205501e-8",
            "extra": "mean: 525.6293903885389 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1709856.3100313032,
            "unit": "iter/sec",
            "range": "stddev: 3.555814302765804e-8",
            "extra": "mean: 584.8444656627732 nsec\nrounds: 149232"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2450487.9721704083,
            "unit": "iter/sec",
            "range": "stddev: 2.3091379320561048e-8",
            "extra": "mean: 408.0819866719573 nsec\nrounds: 156251"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 5058904.896272465,
            "unit": "iter/sec",
            "range": "stddev: 1.909309629826306e-8",
            "extra": "mean: 197.67123923112823 nsec\nrounds: 111112"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbad4501da1ba7d84875ad9672b7394e5d89a05e",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-26T12:03:12+02:00",
          "tree_id": "31456557949a6afeca15578581a2b0d9789ae4e1",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/dbad4501da1ba7d84875ad9672b7394e5d89a05e"
        },
        "date": 1653595847933,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 3321931.8217104515,
            "unit": "iter/sec",
            "range": "stddev: 6.427699888470366e-8",
            "extra": "mean: 301.02965794316134 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 8254819.716579345,
            "unit": "iter/sec",
            "range": "stddev: 3.1817595290907703e-9",
            "extra": "mean: 121.14134945812661 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 9116920.113875758,
            "unit": "iter/sec",
            "range": "stddev: 3.706209117777951e-9",
            "extra": "mean: 109.6861645720576 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 10497245.057725616,
            "unit": "iter/sec",
            "range": "stddev: 3.1780653475392842e-9",
            "extra": "mean: 95.26308993467488 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3406943.4648081292,
            "unit": "iter/sec",
            "range": "stddev: 2.4167811885763626e-8",
            "extra": "mean: 293.51822544985055 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 2228286.8500844394,
            "unit": "iter/sec",
            "range": "stddev: 2.103147919627947e-8",
            "extra": "mean: 448.77525528780956 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 3100400.874552555,
            "unit": "iter/sec",
            "range": "stddev: 1.606139352109183e-8",
            "extra": "mean: 322.5389362413718 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1900225.4509050879,
            "unit": "iter/sec",
            "range": "stddev: 2.478557361176349e-8",
            "extra": "mean: 526.2533451090055 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 2028813.3631797659,
            "unit": "iter/sec",
            "range": "stddev: 1.5180500253611655e-8",
            "extra": "mean: 492.8989616042408 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1674225.0846417928,
            "unit": "iter/sec",
            "range": "stddev: 4.944283028846066e-8",
            "extra": "mean: 597.2912538303011 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1936687.3188758413,
            "unit": "iter/sec",
            "range": "stddev: 1.7461081574565152e-8",
            "extra": "mean: 516.3456125589546 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1747208.3738626062,
            "unit": "iter/sec",
            "range": "stddev: 2.2749980640051045e-8",
            "extra": "mean: 572.3415792635432 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2437206.2912770635,
            "unit": "iter/sec",
            "range": "stddev: 2.0965668229835578e-8",
            "extra": "mean: 410.3058504231802 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 5129163.475557545,
            "unit": "iter/sec",
            "range": "stddev: 1.1108582819546688e-8",
            "extra": "mean: 194.96356565057096 nsec\nrounds: 117648"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c93e6eab52ab41c314861a586450f57e7f91a163",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-31T12:22:09+02:00",
          "tree_id": "e3f6f26baa53e9945209c9b54f87177ae013dfb9",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/c93e6eab52ab41c314861a586450f57e7f91a163"
        },
        "date": 1654020213126,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 3281052.9850113597,
            "unit": "iter/sec",
            "range": "stddev: 1.471884821217987e-7",
            "extra": "mean: 304.78020457707964 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 8247356.493177847,
            "unit": "iter/sec",
            "range": "stddev: 6.037923669933885e-9",
            "extra": "mean: 121.25097306355056 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 9126747.645102842,
            "unit": "iter/sec",
            "range": "stddev: 4.588353984572142e-9",
            "extra": "mean: 109.56805632034825 nsec\nrounds: 90910"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 10368410.703165928,
            "unit": "iter/sec",
            "range": "stddev: 2.949443020810839e-9",
            "extra": "mean: 96.44679677816521 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3477894.3867065525,
            "unit": "iter/sec",
            "range": "stddev: 1.613031367343475e-7",
            "extra": "mean: 287.5302952915102 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 2165211.1629089573,
            "unit": "iter/sec",
            "range": "stddev: 1.4144966018002428e-7",
            "extra": "mean: 461.8487180974429 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 3087313.9277793197,
            "unit": "iter/sec",
            "range": "stddev: 2.8101440238921554e-8",
            "extra": "mean: 323.90616030398047 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1868714.7349920012,
            "unit": "iter/sec",
            "range": "stddev: 2.6929555046165007e-8",
            "extra": "mean: 535.127155190999 nsec\nrounds: 140846"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 2012939.0585248694,
            "unit": "iter/sec",
            "range": "stddev: 2.4743433077662794e-8",
            "extra": "mean: 496.7860282532534 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1718483.89842249,
            "unit": "iter/sec",
            "range": "stddev: 2.854339191738503e-8",
            "extra": "mean: 581.9082744495757 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 2020151.0672237407,
            "unit": "iter/sec",
            "range": "stddev: 1.6765982799974556e-8",
            "extra": "mean: 495.01248506859844 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1696811.973037802,
            "unit": "iter/sec",
            "range": "stddev: 2.7544556846726993e-8",
            "extra": "mean: 589.3404902190463 nsec\nrounds: 142837"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2529150.369597865,
            "unit": "iter/sec",
            "range": "stddev: 2.2010506361041172e-8",
            "extra": "mean: 395.38969767008336 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 5170431.055715477,
            "unit": "iter/sec",
            "range": "stddev: 1.3375925996800945e-8",
            "extra": "mean: 193.4074720702092 nsec\nrounds: 91744"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e0c349ef410020042ba9e2a9b8bdc29c1a6fd54",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-06-04T16:55:56+02:00",
          "tree_id": "000b6dad2514e4969916835936ecbaa97d0cc4eb",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/7e0c349ef410020042ba9e2a9b8bdc29c1a6fd54"
        },
        "date": 1654394763459,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 2599288.211281422,
            "unit": "iter/sec",
            "range": "stddev: 8.690843094457639e-8",
            "extra": "mean: 384.72070763826935 nsec\nrounds: 166639"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 6579548.519040655,
            "unit": "iter/sec",
            "range": "stddev: 9.94290615084501e-9",
            "extra": "mean: 151.98611228508204 nsec\nrounds: 63284"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 7289446.13800654,
            "unit": "iter/sec",
            "range": "stddev: 5.695398053961851e-9",
            "extra": "mean: 137.1846339306811 nsec\nrounds: 72459"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 8097894.3531688405,
            "unit": "iter/sec",
            "range": "stddev: 5.1041822272922245e-9",
            "extra": "mean: 123.48889185112247 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 2662804.551310361,
            "unit": "iter/sec",
            "range": "stddev: 3.079773257169626e-8",
            "extra": "mean: 375.5438976953444 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 1768112.4979939342,
            "unit": "iter/sec",
            "range": "stddev: 3.47292766209905e-8",
            "extra": "mean: 565.5748721504099 nsec\nrounds: 135117"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2425180.3770517213,
            "unit": "iter/sec",
            "range": "stddev: 3.025084149494557e-8",
            "extra": "mean: 412.34046319279815 nsec\nrounds: 102031"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1534382.0841092095,
            "unit": "iter/sec",
            "range": "stddev: 4.3624941194185036e-8",
            "extra": "mean: 651.7281519098713 nsec\nrounds: 114930"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 1643098.986316074,
            "unit": "iter/sec",
            "range": "stddev: 2.5856413683332424e-8",
            "extra": "mean: 608.6060598466995 nsec\nrounds: 73525"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1389626.5004929744,
            "unit": "iter/sec",
            "range": "stddev: 2.9472123916594566e-8",
            "extra": "mean: 719.617825109988 nsec\nrounds: 62886"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1524341.1913431848,
            "unit": "iter/sec",
            "range": "stddev: 2.8672102070903457e-8",
            "extra": "mean: 656.0211097612998 nsec\nrounds: 68961"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1362287.6749508912,
            "unit": "iter/sec",
            "range": "stddev: 2.7992347969901847e-8",
            "extra": "mean: 734.0593461921204 nsec\nrounds: 58473"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2012130.483763428,
            "unit": "iter/sec",
            "range": "stddev: 2.8404471019432195e-8",
            "extra": "mean: 496.98566174981227 nsec\nrounds: 84027"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 3922871.537847269,
            "unit": "iter/sec",
            "range": "stddev: 2.0688177702063384e-8",
            "extra": "mean: 254.9153063903784 nsec\nrounds: 79353"
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
        "date": 1625813222405,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 93395,
            "range": "± 5004",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 293231,
            "range": "± 11583",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2929181,
            "range": "± 121726",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5666572,
            "range": "± 279243",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3300508,
            "range": "± 196876",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10789358,
            "range": "± 662123",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13735380,
            "range": "± 729970",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8436971,
            "range": "± 629174",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 118,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 143,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1673303,
            "range": "± 69085",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1763040,
            "range": "± 58091",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 790301,
            "range": "± 37099",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5477,
            "range": "± 22629",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4668,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2146965,
            "range": "± 90739",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10284538,
            "range": "± 461229",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12842634,
            "range": "± 488248",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6293865,
            "range": "± 350361",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 966865,
            "range": "± 34781",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1764574,
            "range": "± 76026",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 530085,
            "range": "± 16503",
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
          "id": "a53491d7a273cf78e74772256c746fb52ba0d56b",
          "message": "Merge pull request #114 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-15T10:06:12+02:00",
          "tree_id": "3e4cacdb94e4717dc90b5c16120f1189de80c045",
          "url": "https://github.com/sthagen/pyo3/commit/a53491d7a273cf78e74772256c746fb52ba0d56b"
        },
        "date": 1626337689919,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 92306,
            "range": "± 1565",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 259616,
            "range": "± 15857",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2781713,
            "range": "± 46695",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5650739,
            "range": "± 158623",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3316554,
            "range": "± 41189",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8391020,
            "range": "± 281999",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12994411,
            "range": "± 275710",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6571197,
            "range": "± 209083",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 106,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 110,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1473405,
            "range": "± 59458",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1637781,
            "range": "± 62551",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 704272,
            "range": "± 35183",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4805,
            "range": "± 22687",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3782,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1911998,
            "range": "± 66256",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7827670,
            "range": "± 303768",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10772215,
            "range": "± 286324",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4928824,
            "range": "± 125697",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 889145,
            "range": "± 32548",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1606638,
            "range": "± 50198",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 441613,
            "range": "± 12514",
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
          "id": "dc0bb711a013e61d2130128ff686ea612e0b1042",
          "message": "Merge pull request #115 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-16T09:32:06+02:00",
          "tree_id": "ede8ea23e140dfc79698b1ec37ba717dd956fa7c",
          "url": "https://github.com/sthagen/pyo3/commit/dc0bb711a013e61d2130128ff686ea612e0b1042"
        },
        "date": 1626422602303,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 77086,
            "range": "± 4566",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 220291,
            "range": "± 13659",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2464315,
            "range": "± 27140",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4942232,
            "range": "± 122030",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2805480,
            "range": "± 11507",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6648940,
            "range": "± 99896",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11283027,
            "range": "± 47492",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5385510,
            "range": "± 71037",
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
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1272149,
            "range": "± 62925",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1573759,
            "range": "± 61317",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 629193,
            "range": "± 25518",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4381,
            "range": "± 20352",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3454,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1723771,
            "range": "± 45380",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7023387,
            "range": "± 36642",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9868531,
            "range": "± 23587",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4331430,
            "range": "± 28533",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 824637,
            "range": "± 1355",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1546428,
            "range": "± 74915",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 404116,
            "range": "± 639",
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
          "id": "0b8aa52cc7cfbf8ec16c423c394eaca846bfec0d",
          "message": "Merge pull request #116 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-19T20:02:36+02:00",
          "tree_id": "21b8a140b58c6a1999a50e8065c070ed8ef419bd",
          "url": "https://github.com/sthagen/pyo3/commit/0b8aa52cc7cfbf8ec16c423c394eaca846bfec0d"
        },
        "date": 1626718303081,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 77998,
            "range": "± 2458",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 222926,
            "range": "± 13709",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2541379,
            "range": "± 23600",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5133825,
            "range": "± 122750",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2845662,
            "range": "± 28754",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7344316,
            "range": "± 239489",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11412433,
            "range": "± 93336",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5772258,
            "range": "± 151381",
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
            "value": 1487483,
            "range": "± 60298",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1565787,
            "range": "± 90331",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 719309,
            "range": "± 25852",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4420,
            "range": "± 23739",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3455,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1743158,
            "range": "± 49521",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7234338,
            "range": "± 114713",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9875622,
            "range": "± 58045",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4479729,
            "range": "± 64725",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 817982,
            "range": "± 6682",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1548265,
            "range": "± 55942",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 405682,
            "range": "± 3828",
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
          "id": "b855dd55aa7c5451cb61af65ae2b1dc615ef77d6",
          "message": "Merge pull request #117 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-19T21:37:05+02:00",
          "tree_id": "eda4ca0ee426b19ed89888775022910f997770c0",
          "url": "https://github.com/sthagen/pyo3/commit/b855dd55aa7c5451cb61af65ae2b1dc615ef77d6"
        },
        "date": 1626723884427,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 71477,
            "range": "± 7216",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 226468,
            "range": "± 18940",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2358396,
            "range": "± 150496",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4954702,
            "range": "± 281904",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2719985,
            "range": "± 167168",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8585985,
            "range": "± 511965",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11454745,
            "range": "± 826939",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7002205,
            "range": "± 472526",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 93,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 108,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1323036,
            "range": "± 115940",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1474829,
            "range": "± 115684",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 677384,
            "range": "± 71626",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4511,
            "range": "± 22294",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3762,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1941497,
            "range": "± 136951",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8381273,
            "range": "± 411410",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9677930,
            "range": "± 761738",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5058770,
            "range": "± 272974",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 766351,
            "range": "± 38750",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1720655,
            "range": "± 142368",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 436712,
            "range": "± 37201",
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
          "id": "cc48212eeef5cc3554813a0560d940b99d44bbaa",
          "message": "Merge pull request #118 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-20T05:28:02+02:00",
          "tree_id": "767d830d955ab81eeedfa6a6cf70d1e77d310934",
          "url": "https://github.com/sthagen/pyo3/commit/cc48212eeef5cc3554813a0560d940b99d44bbaa"
        },
        "date": 1626752796220,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80828,
            "range": "± 4717",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 254376,
            "range": "± 23529",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2657662,
            "range": "± 138163",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4987551,
            "range": "± 274498",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3099018,
            "range": "± 221390",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8867995,
            "range": "± 632512",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12352791,
            "range": "± 766911",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7103538,
            "range": "± 398537",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 105,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 109,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1651616,
            "range": "± 101044",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1536574,
            "range": "± 101120",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 723574,
            "range": "± 46084",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4871,
            "range": "± 23880",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4207,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1995624,
            "range": "± 104205",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9118192,
            "range": "± 508420",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10592561,
            "range": "± 556261",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5280758,
            "range": "± 284586",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 860893,
            "range": "± 30347",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1672436,
            "range": "± 147708",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 473545,
            "range": "± 27203",
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
          "id": "ce293152c37f1d3c0380aa32ce0f2ee2b5df9643",
          "message": "Merge pull request #119 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-21T10:55:35+02:00",
          "tree_id": "3dd2ae26a8d0d6eca84ef5755ca2133145c9c08e",
          "url": "https://github.com/sthagen/pyo3/commit/ce293152c37f1d3c0380aa32ce0f2ee2b5df9643"
        },
        "date": 1626859303167,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78029,
            "range": "± 2454",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 224784,
            "range": "± 13321",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2558962,
            "range": "± 17992",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5130706,
            "range": "± 124982",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2893588,
            "range": "± 23799",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7316702,
            "range": "± 166268",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11644926,
            "range": "± 108685",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5744555,
            "range": "± 131866",
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
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1297832,
            "range": "± 57760",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1583416,
            "range": "± 90267",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 649150,
            "range": "± 24113",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4537,
            "range": "± 23398",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3455,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1756117,
            "range": "± 60032",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7224819,
            "range": "± 98522",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9975648,
            "range": "± 62117",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4494603,
            "range": "± 57101",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 811272,
            "range": "± 1553",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1562176,
            "range": "± 58312",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 402261,
            "range": "± 1374",
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
          "id": "6429ba17c306d0c6d7165eaca82a9172db32b941",
          "message": "Merge pull request #120 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-22T09:44:06+02:00",
          "tree_id": "1e98c7c2cf0a72aabb5a6f2ba50b0e576afb5752",
          "url": "https://github.com/sthagen/pyo3/commit/6429ba17c306d0c6d7165eaca82a9172db32b941"
        },
        "date": 1626941274189,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 91457,
            "range": "± 3185",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 288536,
            "range": "± 8246",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2990825,
            "range": "± 138919",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5664298,
            "range": "± 158602",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3342932,
            "range": "± 75835",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 11741287,
            "range": "± 762870",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13954421,
            "range": "± 770657",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 9423217,
            "range": "± 1582605",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 20,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 116,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 127,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1839046,
            "range": "± 113770",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1834285,
            "range": "± 115167",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 797689,
            "range": "± 58137",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5315,
            "range": "± 22272",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4793,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2482060,
            "range": "± 198441",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 12409061,
            "range": "± 859285",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 14077534,
            "range": "± 1172374",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 8679644,
            "range": "± 928011",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 955272,
            "range": "± 29157",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1738596,
            "range": "± 66500",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 535382,
            "range": "± 22333",
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
          "id": "949d02ab93d240eb4750c57682b047648dbea873",
          "message": "Merge pull request #121 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-24T09:54:01+02:00",
          "tree_id": "9cebdb9f037977b7b594fa792f0c1da4a5aab1a6",
          "url": "https://github.com/sthagen/pyo3/commit/949d02ab93d240eb4750c57682b047648dbea873"
        },
        "date": 1627113783790,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 77637,
            "range": "± 2205",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 222534,
            "range": "± 13754",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2450713,
            "range": "± 15104",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5129197,
            "range": "± 117574",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2909792,
            "range": "± 14948",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7685171,
            "range": "± 194450",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13106871,
            "range": "± 87138",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5911868,
            "range": "± 131663",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1291038,
            "range": "± 46295",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1577918,
            "range": "± 87302",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 616667,
            "range": "± 21573",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4463,
            "range": "± 26242",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3457,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1846545,
            "range": "± 76741",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7983785,
            "range": "± 281589",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10078739,
            "range": "± 103947",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4506138,
            "range": "± 79374",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 781404,
            "range": "± 8711",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1562552,
            "range": "± 54220",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 422160,
            "range": "± 452",
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
          "id": "e968203f16b6c5527af8921fda3f789e6cf1fa24",
          "message": "Merge pull request #122 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-24T10:48:41+02:00",
          "tree_id": "d95fb16507f08984501047a53e164a65e0c97add",
          "url": "https://github.com/sthagen/pyo3/commit/e968203f16b6c5527af8921fda3f789e6cf1fa24"
        },
        "date": 1627118522438,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 70245,
            "range": "± 3664",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 215083,
            "range": "± 23132",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2173694,
            "range": "± 208456",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4513991,
            "range": "± 482999",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2632251,
            "range": "± 142493",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9842962,
            "range": "± 605036",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 10304060,
            "range": "± 417505",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6789281,
            "range": "± 668311",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 17,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 91,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 102,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1248575,
            "range": "± 146352",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1411310,
            "range": "± 84822",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 617711,
            "range": "± 62042",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4542,
            "range": "± 21912",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3754,
            "range": "± 391",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1850269,
            "range": "± 152970",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8693382,
            "range": "± 650728",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9476418,
            "range": "± 693218",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5202394,
            "range": "± 417849",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 779216,
            "range": "± 64435",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1380626,
            "range": "± 122103",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 405098,
            "range": "± 49944",
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
          "id": "6ced166ed75d88d0e639b1d115f4d1cf18a17eff",
          "message": "Merge pull request #123 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-24T13:47:49+02:00",
          "tree_id": "197f2fc38b104193f9e54362115a253836375fc9",
          "url": "https://github.com/sthagen/pyo3/commit/6ced166ed75d88d0e639b1d115f4d1cf18a17eff"
        },
        "date": 1627128597074,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 91546,
            "range": "± 3999",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 261620,
            "range": "± 11878",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3152243,
            "range": "± 129737",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 6003215,
            "range": "± 128403",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3385294,
            "range": "± 41655",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8716062,
            "range": "± 646094",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14151547,
            "range": "± 679970",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6614876,
            "range": "± 327795",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 21,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 111,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 112,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1524774,
            "range": "± 131300",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1800621,
            "range": "± 94123",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 712417,
            "range": "± 37516",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5064,
            "range": "± 24058",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3737,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1964862,
            "range": "± 89099",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7744488,
            "range": "± 452867",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10600171,
            "range": "± 602756",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4954015,
            "range": "± 251083",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 857482,
            "range": "± 41837",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1754910,
            "range": "± 108615",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 499286,
            "range": "± 29012",
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
          "id": "9f1e26758698d028b14a4e7497d08594b85d58f3",
          "message": "Merge pull request #124 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-25T07:52:36+02:00",
          "tree_id": "94b0d69e9b5767e0cc73a12bfd3830e925f048a2",
          "url": "https://github.com/sthagen/pyo3/commit/9f1e26758698d028b14a4e7497d08594b85d58f3"
        },
        "date": 1627193572576,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 77678,
            "range": "± 4803",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 239034,
            "range": "± 18077",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2524109,
            "range": "± 107063",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5061657,
            "range": "± 354217",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2827571,
            "range": "± 152226",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9375775,
            "range": "± 659205",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11825737,
            "range": "± 676407",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7855382,
            "range": "± 511109",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 102,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 109,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1352148,
            "range": "± 90792",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1555877,
            "range": "± 105193",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 663916,
            "range": "± 48677",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4833,
            "range": "± 24295",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4075,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1933515,
            "range": "± 161183",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9265277,
            "range": "± 619747",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10603056,
            "range": "± 583167",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5635180,
            "range": "± 394133",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 839652,
            "range": "± 34454",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1746271,
            "range": "± 116946",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 469252,
            "range": "± 20356",
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
          "id": "0ef7582d8f0852a2b35e3a93525365b3e57c6d11",
          "message": "Merge pull request #125 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-07-26T21:08:43+02:00",
          "tree_id": "b0fb5c54c2ab9fc4d804982ecc2b3553de705979",
          "url": "https://github.com/sthagen/pyo3/commit/0ef7582d8f0852a2b35e3a93525365b3e57c6d11"
        },
        "date": 1627328370037,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 98077,
            "range": "± 1441",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 272528,
            "range": "± 4910",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2998563,
            "range": "± 43761",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 6055940,
            "range": "± 132396",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3360537,
            "range": "± 18038",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9674260,
            "range": "± 657570",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 16105673,
            "range": "± 445757",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7593794,
            "range": "± 509394",
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
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 122,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1583794,
            "range": "± 32309",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1883019,
            "range": "± 11077",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 753357,
            "range": "± 21184",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5188,
            "range": "± 20912",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4148,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2129643,
            "range": "± 23535",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8964305,
            "range": "± 250781",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11768192,
            "range": "± 131689",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5585870,
            "range": "± 95674",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 921874,
            "range": "± 5514",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1818623,
            "range": "± 12982",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 545949,
            "range": "± 4335",
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
          "id": "c63c5d166a5d8859fca9ae92bb7f3a8f90c8004d",
          "message": "Merge pull request #126 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-08-01T06:55:18+02:00",
          "tree_id": "ed0a1573d54007ebd3cd46de652f13fd9c1ab6eb",
          "url": "https://github.com/sthagen/pyo3/commit/c63c5d166a5d8859fca9ae92bb7f3a8f90c8004d"
        },
        "date": 1627795763957,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78826,
            "range": "± 3825",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 237659,
            "range": "± 24523",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2484170,
            "range": "± 134931",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5166239,
            "range": "± 395313",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2890000,
            "range": "± 142708",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8938042,
            "range": "± 411981",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12418853,
            "range": "± 747516",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7062143,
            "range": "± 342799",
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
            "value": 105,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 111,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1354144,
            "range": "± 89701",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1505678,
            "range": "± 147712",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 649418,
            "range": "± 46820",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4657,
            "range": "± 23933",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4038,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1801924,
            "range": "± 111879",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8850607,
            "range": "± 372876",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10772146,
            "range": "± 503429",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5210522,
            "range": "± 242243",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 830718,
            "range": "± 37987",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1567874,
            "range": "± 132887",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 429938,
            "range": "± 19347",
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
          "id": "5f1a9c0b1985ee1e6af45069b57c1e2aa7c90998",
          "message": "Merge pull request #128 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-08-02T12:40:22+02:00",
          "tree_id": "9c146cd716de4ae8396413d0b7db621d02787c97",
          "url": "https://github.com/sthagen/pyo3/commit/5f1a9c0b1985ee1e6af45069b57c1e2aa7c90998"
        },
        "date": 1627902613810,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 95841,
            "range": "± 2176",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 270685,
            "range": "± 7871",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2984688,
            "range": "± 50851",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5997317,
            "range": "± 163044",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3361494,
            "range": "± 57493",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9853217,
            "range": "± 1045351",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15138183,
            "range": "± 410832",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6572325,
            "range": "± 799085",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 119,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 123,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1658336,
            "range": "± 88187",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1827997,
            "range": "± 40462",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 744814,
            "range": "± 21529",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5265,
            "range": "± 20856",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4103,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2132901,
            "range": "± 23384",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8861469,
            "range": "± 329475",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 13975189,
            "range": "± 147727",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5351467,
            "range": "± 139238",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 894079,
            "range": "± 12654",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1828321,
            "range": "± 14386",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 503589,
            "range": "± 4523",
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
          "id": "31cff63da35052d7f366b977414b2114857f9ad7",
          "message": "Merge pull request #129 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-08-03T12:34:45+02:00",
          "tree_id": "79a3bba88442b73354a345dcfa5104092cf9c33f",
          "url": "https://github.com/sthagen/pyo3/commit/31cff63da35052d7f366b977414b2114857f9ad7"
        },
        "date": 1627987953506,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 91318,
            "range": "± 4246",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 268627,
            "range": "± 19762",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2591577,
            "range": "± 134549",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5286715,
            "range": "± 296851",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3055427,
            "range": "± 161708",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9282447,
            "range": "± 614180",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13354065,
            "range": "± 762506",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7603208,
            "range": "± 371506",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 110,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 115,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1490291,
            "range": "± 86549",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1637723,
            "range": "± 82275",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 690370,
            "range": "± 56032",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5092,
            "range": "± 23849",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4332,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1917074,
            "range": "± 107401",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9573942,
            "range": "± 670009",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11919469,
            "range": "± 386508",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5571304,
            "range": "± 313206",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 919490,
            "range": "± 31719",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1514397,
            "range": "± 88775",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 456454,
            "range": "± 18659",
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
          "id": "d205d445542869900389afa43bd3811572adc439",
          "message": "Merge pull request #130 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-08-04T13:44:48+02:00",
          "tree_id": "9f1da8e28992840c05ce93cc115b356fb15eb194",
          "url": "https://github.com/sthagen/pyo3/commit/d205d445542869900389afa43bd3811572adc439"
        },
        "date": 1628080969423,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 81194,
            "range": "± 2411",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 225017,
            "range": "± 13592",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2503698,
            "range": "± 13991",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5105005,
            "range": "± 123269",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2810108,
            "range": "± 17298",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7312394,
            "range": "± 235456",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12479857,
            "range": "± 108020",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5037849,
            "range": "± 150026",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1401998,
            "range": "± 34731",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1596891,
            "range": "± 47135",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 622622,
            "range": "± 21979",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4456,
            "range": "± 19422",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3417,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1795081,
            "range": "± 44206",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7092279,
            "range": "± 81495",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11401336,
            "range": "± 132770",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4250276,
            "range": "± 62803",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 746074,
            "range": "± 2818",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1556602,
            "range": "± 64234",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 419617,
            "range": "± 1321",
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
          "id": "76a85ddb71cf42de19176bb61f379807e090c68c",
          "message": "Merge pull request #132 from PyO3/main\n\nSync Fork from Upstream Repo",
          "timestamp": "2021-08-14T09:58:18+02:00",
          "tree_id": "58f18cc1c30c4144fd631fc6a008204b1301ecb5",
          "url": "https://github.com/sthagen/pyo3/commit/76a85ddb71cf42de19176bb61f379807e090c68c"
        },
        "date": 1628928431426,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79014,
            "range": "± 1449",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 224470,
            "range": "± 14308",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2745546,
            "range": "± 24529",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5125371,
            "range": "± 124857",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2925139,
            "range": "± 15083",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7353959,
            "range": "± 282256",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12582238,
            "range": "± 206787",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5873046,
            "range": "± 126633",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 104,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1446638,
            "range": "± 41158",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1622875,
            "range": "± 48093",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 737290,
            "range": "± 26207",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4459,
            "range": "± 23641",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3418,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1809942,
            "range": "± 39092",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7193525,
            "range": "± 99488",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11012162,
            "range": "± 56298",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4447860,
            "range": "± 49859",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 864881,
            "range": "± 1989",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1573696,
            "range": "± 68171",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 507931,
            "range": "± 382",
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
          "id": "6f9e262840238e4fa89e36740a88f7f80812e5d4",
          "message": "Merge pull request #133 from PyO3/main\n\nSync Fork from Upstream",
          "timestamp": "2021-08-16T13:03:46+02:00",
          "tree_id": "5a57dcff7b0b6bddc53523d3d182f2bba64a3af4",
          "url": "https://github.com/sthagen/pyo3/commit/6f9e262840238e4fa89e36740a88f7f80812e5d4"
        },
        "date": 1629113658064,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 83790,
            "range": "± 3606",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 245408,
            "range": "± 25283",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2666721,
            "range": "± 211155",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5586987,
            "range": "± 425120",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3113871,
            "range": "± 172898",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8902506,
            "range": "± 616080",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11781277,
            "range": "± 648174",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7130602,
            "range": "± 619803",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 17,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 103,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 105,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1504883,
            "range": "± 177100",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1548879,
            "range": "± 116486",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 852629,
            "range": "± 56695",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4888,
            "range": "± 24238",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4068,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1996750,
            "range": "± 138580",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9561582,
            "range": "± 617900",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11243624,
            "range": "± 624267",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6007780,
            "range": "± 415110",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 875212,
            "range": "± 39562",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1575067,
            "range": "± 126767",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 541023,
            "range": "± 25896",
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
          "id": "823ff144b85aa969c0053fbb760bf90789dcac1a",
          "message": "Merge pull request #134 from PyO3/main\n\nSync Fork from Upstream",
          "timestamp": "2021-08-17T10:31:06+02:00",
          "tree_id": "3a5eba4155f18c3bbccf52f286a38fcba69365ad",
          "url": "https://github.com/sthagen/pyo3/commit/823ff144b85aa969c0053fbb760bf90789dcac1a"
        },
        "date": 1629193448032,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 81585,
            "range": "± 1322",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 228484,
            "range": "± 13274",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2512695,
            "range": "± 28318",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5157210,
            "range": "± 109942",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2928747,
            "range": "± 35685",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8014387,
            "range": "± 321539",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12616367,
            "range": "± 65229",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6383516,
            "range": "± 497350",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 104,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1480687,
            "range": "± 70313",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1571755,
            "range": "± 81075",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 767629,
            "range": "± 22704",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4514,
            "range": "± 26762",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3415,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1837124,
            "range": "± 49843",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7530662,
            "range": "± 110376",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11117355,
            "range": "± 65450",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4618514,
            "range": "± 67859",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 866266,
            "range": "± 4084",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1571057,
            "range": "± 53046",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 509484,
            "range": "± 1490",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2685081b870270262fa938574690d44166255dd1",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-25T20:49:29+02:00",
          "tree_id": "e5d752fffa99d4279dfe72a28758536e2d941150",
          "url": "https://github.com/sthagen/pyo3/commit/2685081b870270262fa938574690d44166255dd1"
        },
        "date": 1629918123861,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 91654,
            "range": "± 4176",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 249578,
            "range": "± 15738",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2975991,
            "range": "± 154562",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5146912,
            "range": "± 303738",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3170850,
            "range": "± 156927",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9059166,
            "range": "± 493345",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14161465,
            "range": "± 839804",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7525366,
            "range": "± 650711",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 108,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 118,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1535323,
            "range": "± 88983",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1556616,
            "range": "± 112248",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 989568,
            "range": "± 49739",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 902126,
            "range": "± 33394",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5723,
            "range": "± 22774",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4555,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2245873,
            "range": "± 85508",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10690524,
            "range": "± 434870",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 13259231,
            "range": "± 445118",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6165779,
            "range": "± 380998",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 998764,
            "range": "± 36822",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1604347,
            "range": "± 97852",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 754884,
            "range": "± 24070",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 607235,
            "range": "± 19310",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d7030ea54c970e7f642223d53597cbd8b7bc350",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-26T12:14:33+02:00",
          "tree_id": "79b088edfb429151625d594bed9dd1e0565c5a61",
          "url": "https://github.com/sthagen/pyo3/commit/0d7030ea54c970e7f642223d53597cbd8b7bc350"
        },
        "date": 1629973449897,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78254,
            "range": "± 2512",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 223190,
            "range": "± 3639",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2456360,
            "range": "± 17832",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5000503,
            "range": "± 131267",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2896139,
            "range": "± 14872",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7179153,
            "range": "± 101886",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14001144,
            "range": "± 73501",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5709188,
            "range": "± 71775",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 106,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1369430,
            "range": "± 39946",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1602009,
            "range": "± 46985",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 877080,
            "range": "± 26116",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 733575,
            "range": "± 26244",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4479,
            "range": "± 26607",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3417,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1825454,
            "range": "± 43348",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7087835,
            "range": "± 64853",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10945133,
            "range": "± 30876",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4395949,
            "range": "± 35483",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 807930,
            "range": "± 1762",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1550425,
            "range": "± 75065",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 668782,
            "range": "± 541",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 539999,
            "range": "± 442",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e09bf82fc50c5814427ee6981e26fecbe563a055",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-27T12:48:40+02:00",
          "tree_id": "824fc64854f2b55cfb5dee56469b033e8d9d89ae",
          "url": "https://github.com/sthagen/pyo3/commit/e09bf82fc50c5814427ee6981e26fecbe563a055"
        },
        "date": 1630062034312,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79478,
            "range": "± 1336",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 226770,
            "range": "± 3141",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2510276,
            "range": "± 18698",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5126681,
            "range": "± 109224",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2923950,
            "range": "± 34514",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7493677,
            "range": "± 182383",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14337622,
            "range": "± 76949",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6017085,
            "range": "± 260535",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 106,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1380192,
            "range": "± 40003",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1583163,
            "range": "± 103353",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 930390,
            "range": "± 23390",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 758812,
            "range": "± 24334",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4470,
            "range": "± 27030",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3416,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1848537,
            "range": "± 44685",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7266926,
            "range": "± 138436",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11039442,
            "range": "± 56526",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4450771,
            "range": "± 114537",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 807803,
            "range": "± 3155",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1545419,
            "range": "± 65552",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 669093,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 540178,
            "range": "± 1159",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69269902ac6e5daeade23fb4c999a43a8b200ef6",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-28T09:32:27+02:00",
          "tree_id": "c11116aa0c1f356cc41454687c14afe39d8a4c3d",
          "url": "https://github.com/sthagen/pyo3/commit/69269902ac6e5daeade23fb4c999a43a8b200ef6"
        },
        "date": 1630136626826,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80749,
            "range": "± 2285",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 225708,
            "range": "± 5585",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2531676,
            "range": "± 14299",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5040421,
            "range": "± 125216",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2905928,
            "range": "± 19051",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7574833,
            "range": "± 203915",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13945735,
            "range": "± 174079",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5772466,
            "range": "± 110322",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 97,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1421035,
            "range": "± 69800",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1588515,
            "range": "± 60201",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 899343,
            "range": "± 22047",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 747640,
            "range": "± 22636",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4333,
            "range": "± 20120",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3416,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1826935,
            "range": "± 61657",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7235614,
            "range": "± 73988",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11036499,
            "range": "± 40869",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4386877,
            "range": "± 53733",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 830066,
            "range": "± 4477",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1554226,
            "range": "± 64835",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 638952,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 523957,
            "range": "± 1228",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8356c0a68a5bfc4d19064850635497b4cf214d31",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-28T11:06:34+02:00",
          "tree_id": "caa1ed2044aa223a7b61c580f1d2f9e7495d8082",
          "url": "https://github.com/sthagen/pyo3/commit/8356c0a68a5bfc4d19064850635497b4cf214d31"
        },
        "date": 1630145822740,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 88219,
            "range": "± 8884",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 277107,
            "range": "± 10806",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3423425,
            "range": "± 142882",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5344064,
            "range": "± 249587",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3218651,
            "range": "± 103278",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9466610,
            "range": "± 474788",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14683994,
            "range": "± 946506",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7823271,
            "range": "± 1152638",
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
            "value": 111,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 116,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1677103,
            "range": "± 68153",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1695603,
            "range": "± 133666",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1093810,
            "range": "± 69513",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 899119,
            "range": "± 86615",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5220,
            "range": "± 22972",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4467,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2210116,
            "range": "± 96368",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9874121,
            "range": "± 915272",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12710398,
            "range": "± 818851",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5617262,
            "range": "± 496446",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 983168,
            "range": "± 46187",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1642686,
            "range": "± 117881",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 748043,
            "range": "± 54662",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 590760,
            "range": "± 26745",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0845f8c90a7575fb281ab931f03ca5c156128c00",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-28T15:43:32+02:00",
          "tree_id": "d91b6ca2fca3bf78ab93b1ec37c60f5fbdd3670d",
          "url": "https://github.com/sthagen/pyo3/commit/0845f8c90a7575fb281ab931f03ca5c156128c00"
        },
        "date": 1630158692812,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80674,
            "range": "± 1987",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 226880,
            "range": "± 2980",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2475981,
            "range": "± 146853",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4994366,
            "range": "± 156954",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2890916,
            "range": "± 9933",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7241604,
            "range": "± 133585",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14052179,
            "range": "± 98258",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5849988,
            "range": "± 81303",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 97,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1406389,
            "range": "± 50225",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1591699,
            "range": "± 58255",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 902232,
            "range": "± 37766",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 745887,
            "range": "± 37175",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4455,
            "range": "± 23782",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3418,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1827028,
            "range": "± 89129",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7137149,
            "range": "± 57243",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10951148,
            "range": "± 121797",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4488197,
            "range": "± 113275",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 842045,
            "range": "± 4980",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1554782,
            "range": "± 70820",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 638913,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 524126,
            "range": "± 2242",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba362b79dfd252bba72b66cdfbd86aacaa436e1d",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-29T12:36:04+02:00",
          "tree_id": "0a78ae704189b15ac01bf7e5bcb41229f0a06927",
          "url": "https://github.com/sthagen/pyo3/commit/ba362b79dfd252bba72b66cdfbd86aacaa436e1d"
        },
        "date": 1630233974495,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 82788,
            "range": "± 1271",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 228152,
            "range": "± 13166",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2781417,
            "range": "± 26359",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5148963,
            "range": "± 113893",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2963715,
            "range": "± 22738",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7819290,
            "range": "± 513815",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14338539,
            "range": "± 162475",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6090870,
            "range": "± 355767",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 97,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1426248,
            "range": "± 37608",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1594376,
            "range": "± 45802",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 898776,
            "range": "± 22262",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 762905,
            "range": "± 24262",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4358,
            "range": "± 25948",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3417,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1846276,
            "range": "± 58580",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7467158,
            "range": "± 180340",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11537729,
            "range": "± 96935",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4696400,
            "range": "± 140715",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 835864,
            "range": "± 6531",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1568297,
            "range": "± 57040",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 640535,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 525408,
            "range": "± 1035",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d5d0f2bc3dfde60e32b5080ef31c13894a865e5",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-30T12:43:57+02:00",
          "tree_id": "3ae9c6d711e3c2c4d6cd305592f88dbba247be83",
          "url": "https://github.com/sthagen/pyo3/commit/0d5d0f2bc3dfde60e32b5080ef31c13894a865e5"
        },
        "date": 1630321051123,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 98044,
            "range": "± 2039",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 290582,
            "range": "± 3642",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3030530,
            "range": "± 193950",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 6002490,
            "range": "± 125855",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3493038,
            "range": "± 48208",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9235657,
            "range": "± 402480",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 16533331,
            "range": "± 287078",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6883739,
            "range": "± 182582",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 116,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 120,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1654468,
            "range": "± 50796",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1751599,
            "range": "± 42241",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1076625,
            "range": "± 55601",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 928850,
            "range": "± 30987",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5057,
            "range": "± 21551",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4102,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2178374,
            "range": "± 12666",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8801725,
            "range": "± 207184",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 13858157,
            "range": "± 145431",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5191137,
            "range": "± 140380",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 919081,
            "range": "± 14827",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1741814,
            "range": "± 32738",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 756888,
            "range": "± 12571",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 602594,
            "range": "± 9947",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e1555f7b556bb06a356bb3f86f892e80efd09d0",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-08-31T13:01:07+02:00",
          "tree_id": "382710896bf5b265083748307f77de4b4cec3883",
          "url": "https://github.com/sthagen/pyo3/commit/8e1555f7b556bb06a356bb3f86f892e80efd09d0"
        },
        "date": 1630408680446,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 99236,
            "range": "± 1361",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 274699,
            "range": "± 3791",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2990319,
            "range": "± 30886",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5913658,
            "range": "± 165121",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3665780,
            "range": "± 26821",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9223225,
            "range": "± 342045",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 17142061,
            "range": "± 218126",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7223671,
            "range": "± 228737",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 115,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 120,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1704200,
            "range": "± 40494",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1871704,
            "range": "± 6635",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1066030,
            "range": "± 48613",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 902752,
            "range": "± 19364",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5080,
            "range": "± 21065",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4102,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2206056,
            "range": "± 15142",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8820766,
            "range": "± 99784",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 13651383,
            "range": "± 52288",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5565875,
            "range": "± 76711",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 971352,
            "range": "± 1544",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1837756,
            "range": "± 6681",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 773515,
            "range": "± 1830",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 592048,
            "range": "± 4355",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e4915c4ebf43b674fa64173fed94a48a2c0b4ed",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-01T12:38:36+02:00",
          "tree_id": "819298f4e2a1ba7789bc97ed88f5e4dc94647e4d",
          "url": "https://github.com/sthagen/pyo3/commit/8e4915c4ebf43b674fa64173fed94a48a2c0b4ed"
        },
        "date": 1630493480447,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 82557,
            "range": "± 7083",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 248643,
            "range": "± 20300",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2692513,
            "range": "± 183863",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5015440,
            "range": "± 433007",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2941687,
            "range": "± 254355",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9706815,
            "range": "± 946082",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13226529,
            "range": "± 1469212",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8250302,
            "range": "± 811291",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 15,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 106,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 119,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1550767,
            "range": "± 135111",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1633467,
            "range": "± 191339",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 975193,
            "range": "± 101191",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 879147,
            "range": "± 96511",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4874,
            "range": "± 21948",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4332,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1951786,
            "range": "± 137548",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9507582,
            "range": "± 646655",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11368854,
            "range": "± 725543",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5787663,
            "range": "± 531148",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 921106,
            "range": "± 64209",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1562905,
            "range": "± 160380",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 714733,
            "range": "± 69256",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 553674,
            "range": "± 39629",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0812e8552e88da380c50e5b3fc0cbae9904cc6b",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-03T12:24:23+02:00",
          "tree_id": "7d4e182bc63a53779be026e769b43d7721db0fc5",
          "url": "https://github.com/sthagen/pyo3/commit/d0812e8552e88da380c50e5b3fc0cbae9904cc6b"
        },
        "date": 1630666579253,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 91803,
            "range": "± 3604",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 262051,
            "range": "± 7872",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3319870,
            "range": "± 65672",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5793811,
            "range": "± 212472",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3398932,
            "range": "± 63321",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8826072,
            "range": "± 248393",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 16263836,
            "range": "± 419192",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6395714,
            "range": "± 408755",
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
            "value": 107,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 113,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1616756,
            "range": "± 79909",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1750621,
            "range": "± 72196",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 959797,
            "range": "± 65598",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 827317,
            "range": "± 52749",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4798,
            "range": "± 23697",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3819,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2052172,
            "range": "± 544414",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7835422,
            "range": "± 254379",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12665059,
            "range": "± 488512",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5001915,
            "range": "± 186186",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 885417,
            "range": "± 25317",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1649675,
            "range": "± 69471",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 720599,
            "range": "± 16910",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 542709,
            "range": "± 20168",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc28ccfa3045c4661ac6e01328b19ae67c048e58",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-06T12:14:01+02:00",
          "tree_id": "51e32fefed622bc3cb025798651cf713176cdaa9",
          "url": "https://github.com/sthagen/pyo3/commit/cc28ccfa3045c4661ac6e01328b19ae67c048e58"
        },
        "date": 1630924294997,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 97113,
            "range": "± 1475",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 271059,
            "range": "± 3966",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3009991,
            "range": "± 16134",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 6015544,
            "range": "± 133821",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3498825,
            "range": "± 15494",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9937711,
            "range": "± 690914",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 17389241,
            "range": "± 144852",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7677892,
            "range": "± 417496",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 116,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 121,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1748953,
            "range": "± 46780",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1866828,
            "range": "± 67242",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1090692,
            "range": "± 46665",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 886911,
            "range": "± 31572",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5039,
            "range": "± 23682",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4107,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2189533,
            "range": "± 30075",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8897531,
            "range": "± 136707",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 13968054,
            "range": "± 88032",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5500426,
            "range": "± 104301",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 994384,
            "range": "± 6819",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1812163,
            "range": "± 6301",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 785741,
            "range": "± 26796",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 616205,
            "range": "± 2334",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "488bfc33337925a9ee273bbecbacdb7cb652dfdd",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-09T12:22:46+02:00",
          "tree_id": "0457eeeb2f5109a6c8d3a2a5e951616adfd45101",
          "url": "https://github.com/sthagen/pyo3/commit/488bfc33337925a9ee273bbecbacdb7cb652dfdd"
        },
        "date": 1631185057779,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 94390,
            "range": "± 3709",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 282079,
            "range": "± 8423",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2990433,
            "range": "± 61322",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5444466,
            "range": "± 196944",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3274955,
            "range": "± 100655",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9795357,
            "range": "± 466911",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14952904,
            "range": "± 643392",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7722088,
            "range": "± 436936",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 113,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 118,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1686350,
            "range": "± 96136",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1768551,
            "range": "± 63578",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1063074,
            "range": "± 64758",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 918173,
            "range": "± 56062",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5460,
            "range": "± 24609",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4586,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2214036,
            "range": "± 85445",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10100454,
            "range": "± 362558",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 13093016,
            "range": "± 408824",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5779977,
            "range": "± 255016",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1003532,
            "range": "± 35369",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1680044,
            "range": "± 102461",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 789394,
            "range": "± 15445",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 614848,
            "range": "± 12451",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3047280977532088208624f101f2132b85624748",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-13T12:28:58+02:00",
          "tree_id": "2dd5b5813212f207bd82f8d5981a4b617fd55e7b",
          "url": "https://github.com/sthagen/pyo3/commit/3047280977532088208624f101f2132b85624748"
        },
        "date": 1631529524578,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78042,
            "range": "± 2357",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 223873,
            "range": "± 4838",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2579664,
            "range": "± 22173",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5179689,
            "range": "± 94532",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2995350,
            "range": "± 39513",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7759193,
            "range": "± 276830",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12648849,
            "range": "± 148780",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7307346,
            "range": "± 359086",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 97,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1473732,
            "range": "± 31367",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1592764,
            "range": "± 70461",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 938073,
            "range": "± 21995",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 766019,
            "range": "± 22048",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4441,
            "range": "± 26316",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3417,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1848495,
            "range": "± 50400",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8374451,
            "range": "± 75092",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11244514,
            "range": "± 103827",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4724556,
            "range": "± 91506",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 808323,
            "range": "± 5451",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1559953,
            "range": "± 41290",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 671211,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 540640,
            "range": "± 514",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b256cedd7531df862026a67a23baefc7d37d409",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-14T07:46:35+02:00",
          "tree_id": "720c924c4e9fe937efde4c8c8024c70a53523dc4",
          "url": "https://github.com/sthagen/pyo3/commit/2b256cedd7531df862026a67a23baefc7d37d409"
        },
        "date": 1631600615455,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 87269,
            "range": "± 5033",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 251552,
            "range": "± 14731",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2753394,
            "range": "± 121743",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4771654,
            "range": "± 232427",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3025920,
            "range": "± 144402",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9317895,
            "range": "± 1211440",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13913639,
            "range": "± 894633",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6880501,
            "range": "± 395635",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 110,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 108,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1560963,
            "range": "± 126634",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1592270,
            "range": "± 62412",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 996797,
            "range": "± 59863",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 844511,
            "range": "± 53589",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4740,
            "range": "± 23894",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4164,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2085168,
            "range": "± 108043",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10437833,
            "range": "± 1040449",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11955244,
            "range": "± 796957",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5274070,
            "range": "± 363297",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 989267,
            "range": "± 60611",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1667334,
            "range": "± 119125",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 728571,
            "range": "± 39037",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 574832,
            "range": "± 37359",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c35207401d206f8d22c572308603412086707c83",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-17T12:30:14+02:00",
          "tree_id": "93b8924b0467e497d4bd9a317e7c362ce3bceb2e",
          "url": "https://github.com/sthagen/pyo3/commit/c35207401d206f8d22c572308603412086707c83"
        },
        "date": 1631875266468,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 85505,
            "range": "± 6060",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 244727,
            "range": "± 23336",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2579281,
            "range": "± 205502",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5048242,
            "range": "± 414819",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3062185,
            "range": "± 227110",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9758850,
            "range": "± 779983",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13143225,
            "range": "± 1237134",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7627755,
            "range": "± 607246",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 107,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 105,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1476942,
            "range": "± 157267",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1667461,
            "range": "± 103755",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 950777,
            "range": "± 102831",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 844765,
            "range": "± 62482",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4848,
            "range": "± 24526",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4227,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2026328,
            "range": "± 122775",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9198278,
            "range": "± 396760",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10938681,
            "range": "± 697737",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5522479,
            "range": "± 381914",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 874678,
            "range": "± 101553",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1582454,
            "range": "± 157545",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 727233,
            "range": "± 47329",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 533535,
            "range": "± 31671",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd93776803a3940dfba369c9198c37b4d9cbfcf7",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-19T09:05:03+02:00",
          "tree_id": "82abf8c1f5b3e8ff27ac5334cee0cf9ac7cc6984",
          "url": "https://github.com/sthagen/pyo3/commit/bd93776803a3940dfba369c9198c37b4d9cbfcf7"
        },
        "date": 1632036250343,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79592,
            "range": "± 4768",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 253838,
            "range": "± 11387",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2725777,
            "range": "± 90933",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4828068,
            "range": "± 223781",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3081632,
            "range": "± 172147",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8384140,
            "range": "± 268819",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12518025,
            "range": "± 353488",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6689457,
            "range": "± 181276",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 105,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 104,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1467344,
            "range": "± 81366",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1499403,
            "range": "± 66293",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 940093,
            "range": "± 37425",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 800022,
            "range": "± 30950",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4581,
            "range": "± 23926",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4036,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1939137,
            "range": "± 53570",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8582979,
            "range": "± 295784",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11065631,
            "range": "± 236285",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4988786,
            "range": "± 146014",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 873042,
            "range": "± 24974",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1491363,
            "range": "± 95860",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 686518,
            "range": "± 46734",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 534592,
            "range": "± 18832",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479e4c7518d95a4bf4084e66f4ba1f64bc87a107",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-25T08:20:33+02:00",
          "tree_id": "83716fa293f98fada4d251e3e41835cbe00d0c72",
          "url": "https://github.com/sthagen/pyo3/commit/479e4c7518d95a4bf4084e66f4ba1f64bc87a107"
        },
        "date": 1632552794746,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 83434,
            "range": "± 1506",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 233282,
            "range": "± 3087",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2616708,
            "range": "± 34037",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5190669,
            "range": "± 117436",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2974845,
            "range": "± 14926",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9087466,
            "range": "± 645561",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13387918,
            "range": "± 260499",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7179424,
            "range": "± 919346",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 106,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1460325,
            "range": "± 47859",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1603306,
            "range": "± 42529",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 923601,
            "range": "± 27997",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 756014,
            "range": "± 32101",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4516,
            "range": "± 24820",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3419,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1933634,
            "range": "± 78092",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7887345,
            "range": "± 125624",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11200518,
            "range": "± 100452",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4772128,
            "range": "± 166538",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 809145,
            "range": "± 1266",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1578068,
            "range": "± 36026",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 656548,
            "range": "± 1179",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 496588,
            "range": "± 418",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "576272d268372d596ebd04e0981659bde56c8d63",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-09-26T09:04:42+02:00",
          "tree_id": "1ac504950f524a2fe157abe0558cf1fb1c9c72bd",
          "url": "https://github.com/sthagen/pyo3/commit/576272d268372d596ebd04e0981659bde56c8d63"
        },
        "date": 1632641826360,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 88413,
            "range": "± 8795",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 262398,
            "range": "± 19268",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2819859,
            "range": "± 196541",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5312979,
            "range": "± 363037",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3408569,
            "range": "± 256272",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10096219,
            "range": "± 783992",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13324266,
            "range": "± 774673",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7761635,
            "range": "± 597311",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 20,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 108,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 115,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1547657,
            "range": "± 122397",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1647228,
            "range": "± 85145",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1000413,
            "range": "± 89761",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 876073,
            "range": "± 71349",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5159,
            "range": "± 22235",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4260,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2087569,
            "range": "± 155538",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9766034,
            "range": "± 741229",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11349518,
            "range": "± 771542",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5733395,
            "range": "± 382436",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 943399,
            "range": "± 43429",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1588256,
            "range": "± 127907",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 712919,
            "range": "± 41852",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 566977,
            "range": "± 59372",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5cf0b7f5aaabace9b775d135bc657eae1f9bcd93",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-10-02T08:43:15+02:00",
          "tree_id": "8eec50774a2a18826fe32716d4df564fd389d394",
          "url": "https://github.com/sthagen/pyo3/commit/5cf0b7f5aaabace9b775d135bc657eae1f9bcd93"
        },
        "date": 1633158177676,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 96192,
            "range": "± 10137",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 280240,
            "range": "± 12848",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2969049,
            "range": "± 99222",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5387703,
            "range": "± 241122",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3388839,
            "range": "± 244063",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10000350,
            "range": "± 924098",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14813847,
            "range": "± 487976",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7950188,
            "range": "± 758211",
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
            "value": 115,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 119,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1641331,
            "range": "± 76533",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1716511,
            "range": "± 86608",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1039301,
            "range": "± 66256",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 896586,
            "range": "± 72877",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5585,
            "range": "± 23709",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4523,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2169323,
            "range": "± 81737",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9954192,
            "range": "± 409180",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12579337,
            "range": "± 374684",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5603378,
            "range": "± 549438",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 979842,
            "range": "± 28088",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1679040,
            "range": "± 101204",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 759592,
            "range": "± 58534",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 608825,
            "range": "± 20247",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "785a04575500a68cda4160c8ef00cae773c3cd5d",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-10-03T10:14:56+02:00",
          "tree_id": "7556519968fa0183c55f75f1e41a71c78115f108",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/785a04575500a68cda4160c8ef00cae773c3cd5d"
        },
        "date": 1633249540674,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 94994,
            "range": "± 4659",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 296771,
            "range": "± 21960",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3117572,
            "range": "± 106969",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5815347,
            "range": "± 423993",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3645405,
            "range": "± 145347",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 12146888,
            "range": "± 1717185",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15586967,
            "range": "± 956850",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8785552,
            "range": "± 962764",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 122,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 125,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1809665,
            "range": "± 106455",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1815659,
            "range": "± 70451",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1097218,
            "range": "± 50428",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 965292,
            "range": "± 38795",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5629,
            "range": "± 21798",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4843,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2271631,
            "range": "± 85522",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 11320414,
            "range": "± 618504",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 13736156,
            "range": "± 1105385",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6678203,
            "range": "± 370560",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1062547,
            "range": "± 40531",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1823642,
            "range": "± 66104",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 793846,
            "range": "± 23750",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 646272,
            "range": "± 18641",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b9c521ec11a51b574b91a7343e1c8673f8d35713",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-10-10T18:41:24+02:00",
          "tree_id": "cbdbc1109b2160dfb8652e8b31a8a39869a61051",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/b9c521ec11a51b574b91a7343e1c8673f8d35713"
        },
        "date": 1633884710253,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 87995,
            "range": "± 8385",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 254484,
            "range": "± 12025",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2628930,
            "range": "± 310919",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4978231,
            "range": "± 412528",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3193923,
            "range": "± 256079",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10703516,
            "range": "± 844399",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14001279,
            "range": "± 848758",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7450908,
            "range": "± 412533",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 110,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 106,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1600211,
            "range": "± 126183",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1619103,
            "range": "± 114248",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1011670,
            "range": "± 89718",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 851378,
            "range": "± 69644",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4900,
            "range": "± 23306",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4277,
            "range": "± 637",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1977120,
            "range": "± 142908",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9965862,
            "range": "± 609485",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11254448,
            "range": "± 838235",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5781866,
            "range": "± 466173",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 911421,
            "range": "± 72875",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1629827,
            "range": "± 158572",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 736646,
            "range": "± 47161",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 578906,
            "range": "± 36389",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b38e04808deb6c0b4e49cc6dd3d58d08677001f8",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-10-13T07:04:54+02:00",
          "tree_id": "92da41206f62123d77b196e561ef520b8c4a0c4d",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/b38e04808deb6c0b4e49cc6dd3d58d08677001f8"
        },
        "date": 1634102128837,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 132376,
            "range": "± 9914",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 323142,
            "range": "± 20840",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2985446,
            "range": "± 183713",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5673552,
            "range": "± 383431",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3388441,
            "range": "± 157311",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10535814,
            "range": "± 736064",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14741300,
            "range": "± 792426",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8745175,
            "range": "± 631434",
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
            "value": 127,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 123,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1755110,
            "range": "± 100405",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1745107,
            "range": "± 140691",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1072641,
            "range": "± 88251",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 969312,
            "range": "± 55775",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5672,
            "range": "± 22783",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4803,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2253000,
            "range": "± 76372",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 11086096,
            "range": "± 785607",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 13568517,
            "range": "± 776924",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6449961,
            "range": "± 556275",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1039020,
            "range": "± 99018",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1792128,
            "range": "± 108753",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 767617,
            "range": "± 49244",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 643076,
            "range": "± 30263",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "672a767905da002c741bbb76501ca95794884c65",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2021-11-19T17:24:09+01:00",
          "tree_id": "ae38c4ca23ccb10155b23af1eb4ca668a85e5d02",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/672a767905da002c741bbb76501ca95794884c65"
        },
        "date": 1637339637101,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 96444,
            "range": "± 2259",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 262059,
            "range": "± 6156",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3274744,
            "range": "± 62579",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5572982,
            "range": "± 164839",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3414400,
            "range": "± 68022",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8765346,
            "range": "± 187108",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15161675,
            "range": "± 226728",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7937890,
            "range": "± 166968",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 116,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 124,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2166876,
            "range": "± 33337",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1729634,
            "range": "± 20165",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1330940,
            "range": "± 42962",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1136531,
            "range": "± 47506",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5069,
            "range": "± 23490",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4066,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2731583,
            "range": "± 39715",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10058961,
            "range": "± 151130",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 13394838,
            "range": "± 241416",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 7125382,
            "range": "± 100800",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1489969,
            "range": "± 17987",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1691058,
            "range": "± 23856",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 986406,
            "range": "± 11128",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 860370,
            "range": "± 5858",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ab4a7acc55a4e4a7c2e2df00ea0ba2c86cd545b",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-02-20T16:44:48+01:00",
          "tree_id": "624e3c69586bde9be496ed93d30a30a1cf742f9c",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/0ab4a7acc55a4e4a7c2e2df00ea0ba2c86cd545b"
        },
        "date": 1645372534225,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 77931,
            "range": "± 2236",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 223037,
            "range": "± 3396",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2818404,
            "range": "± 21668",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4920131,
            "range": "± 123863",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2943400,
            "range": "± 15608",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7788566,
            "range": "± 254330",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13507499,
            "range": "± 80517",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6703103,
            "range": "± 185864",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1825497,
            "range": "± 66020",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1554344,
            "range": "± 45453",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1114734,
            "range": "± 59862",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 976068,
            "range": "± 26489",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4641,
            "range": "± 21260",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3416,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2299090,
            "range": "± 15056",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8597007,
            "range": "± 107521",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 3929790,
            "range": "± 21724",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6072612,
            "range": "± 73137",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1249013,
            "range": "± 2283",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1520714,
            "range": "± 52533",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 830633,
            "range": "± 1139",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 711163,
            "range": "± 1235",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d35db930b3252d06b4f946238cb1430218aa9861",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-02-28T06:56:32+01:00",
          "tree_id": "6b26cd54cc4f604316da68e2eff563cccd32373b",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/d35db930b3252d06b4f946238cb1430218aa9861"
        },
        "date": 1646028463375,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 83851,
            "range": "± 7493",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 247086,
            "range": "± 19487",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2844008,
            "range": "± 92158",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5081657,
            "range": "± 246017",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2978377,
            "range": "± 133785",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8816980,
            "range": "± 476195",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13815686,
            "range": "± 329938",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7615709,
            "range": "± 410096",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 20,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 119,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 114,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2053101,
            "range": "± 61764",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1627291,
            "range": "± 107616",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1282227,
            "range": "± 51648",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1090194,
            "range": "± 50611",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5176,
            "range": "± 21937",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4513,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2563686,
            "range": "± 143218",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 11135246,
            "range": "± 593150",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 4380854,
            "range": "± 207347",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 7328678,
            "range": "± 320442",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1390612,
            "range": "± 41938",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1553281,
            "range": "± 98638",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 953155,
            "range": "± 49973",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 826338,
            "range": "± 51377",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7379e1e89c721437a75a7383a21a2141511d01c",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-03-06T08:45:15+01:00",
          "tree_id": "0d9d90eb99a56ee7f7e6057f4aa1d312fced9b46",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/d7379e1e89c721437a75a7383a21a2141511d01c"
        },
        "date": 1646553369811,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 95354,
            "range": "± 4499",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 288648,
            "range": "± 32117",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3440465,
            "range": "± 179086",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5919040,
            "range": "± 221969",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3572819,
            "range": "± 157017",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 11504859,
            "range": "± 761958",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15933858,
            "range": "± 749565",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 10385698,
            "range": "± 774287",
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
            "value": 124,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 129,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2231128,
            "range": "± 97181",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1828632,
            "range": "± 61206",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1410984,
            "range": "± 70696",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1251767,
            "range": "± 77597",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5672,
            "range": "± 21821",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4720,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2681960,
            "range": "± 113195",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 12322313,
            "range": "± 600337",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 4834201,
            "range": "± 230765",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 8952501,
            "range": "± 538480",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1558396,
            "range": "± 54906",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1980095,
            "range": "± 101194",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 1008617,
            "range": "± 40147",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 874091,
            "range": "± 35267",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fea94c7e92a09fdbf2fa0bbb85f20b0a14660619",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-03-16T07:32:25+01:00",
          "tree_id": "35f00be72057d110fad69d663904bd9bc585e013",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/fea94c7e92a09fdbf2fa0bbb85f20b0a14660619"
        },
        "date": 1647412959285,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79393,
            "range": "± 1579",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 228573,
            "range": "± 3056",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2818871,
            "range": "± 19510",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5104991,
            "range": "± 123011",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2995141,
            "range": "± 57166",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8454079,
            "range": "± 460670",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13183103,
            "range": "± 198348",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7574241,
            "range": "± 454423",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 104,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1867246,
            "range": "± 36757",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1552281,
            "range": "± 88959",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1125284,
            "range": "± 48551",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 992072,
            "range": "± 24048",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4814,
            "range": "± 24488",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3461,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2390397,
            "range": "± 18905",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8851713,
            "range": "± 121113",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 3933674,
            "range": "± 23853",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6337032,
            "range": "± 115960",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1275517,
            "range": "± 2720",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1696430,
            "range": "± 72672",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 828867,
            "range": "± 2008",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 715205,
            "range": "± 818",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aae843afd2550806ac582fb341ba129c5bd56692",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-04-05T21:44:22+02:00",
          "tree_id": "4089948283c2e535f703147b14b48fc04118d420",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/aae843afd2550806ac582fb341ba129c5bd56692"
        },
        "date": 1649189871187,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80874,
            "range": "± 4772",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 228632,
            "range": "± 5999",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2883369,
            "range": "± 20208",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5209728,
            "range": "± 114549",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3014763,
            "range": "± 12475",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9226234,
            "range": "± 812307",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13610148,
            "range": "± 175610",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7485061,
            "range": "± 225286",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 104,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1877507,
            "range": "± 58036",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1602689,
            "range": "± 74333",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1124185,
            "range": "± 47503",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 993982,
            "range": "± 46966",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4781,
            "range": "± 22502",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3418,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2294833,
            "range": "± 10252",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8966830,
            "range": "± 75953",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 3854156,
            "range": "± 33501",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6501797,
            "range": "± 84440",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1281260,
            "range": "± 4714",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1603764,
            "range": "± 30148",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 829215,
            "range": "± 867",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 710040,
            "range": "± 620",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d3729ab7d28dfec6c1dadac5dd6d1a13dc2395d1",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-04-22T15:15:44+02:00",
          "tree_id": "82bc0cef70f1dbcc814f84ed206f1857d1275950",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/d3729ab7d28dfec6c1dadac5dd6d1a13dc2395d1"
        },
        "date": 1650653820826,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 69551,
            "range": "± 1590",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 221856,
            "range": "± 2414",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2721891,
            "range": "± 14166",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4205024,
            "range": "± 109657",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2624618,
            "range": "± 11204",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9489109,
            "range": "± 557062",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13052580,
            "range": "± 87827",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7644043,
            "range": "± 377984",
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
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 105,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1908070,
            "range": "± 41715",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1328470,
            "range": "± 33584",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1138901,
            "range": "± 21453",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1101041,
            "range": "± 16111",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4500,
            "range": "± 18391",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 6383,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2271633,
            "range": "± 19680",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10053428,
            "range": "± 117487",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 3577297,
            "range": "± 95300",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6645739,
            "range": "± 37735",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1467442,
            "range": "± 3516",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1305571,
            "range": "± 35352",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 848437,
            "range": "± 7670",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 796988,
            "range": "± 15625",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7bd5ce3f8e5659e48fb2b543f6e74bab6eb8e30c",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-04-23T19:50:33+02:00",
          "tree_id": "0656ba20d47ab250d7429f0734d0652d696f183f",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/7bd5ce3f8e5659e48fb2b543f6e74bab6eb8e30c"
        },
        "date": 1650744535923,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 71590,
            "range": "± 1068",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 227399,
            "range": "± 2334",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2589415,
            "range": "± 37749",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4744927,
            "range": "± 114970",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2677633,
            "range": "± 26068",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8752756,
            "range": "± 1075569",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12241456,
            "range": "± 218833",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7404846,
            "range": "± 786651",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 88,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 92,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1684069,
            "range": "± 57175",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1485484,
            "range": "± 45304",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1014889,
            "range": "± 25090",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 891456,
            "range": "± 36246",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4111,
            "range": "± 25178",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3423,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2075488,
            "range": "± 34033",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8264463,
            "range": "± 213950",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 3594236,
            "range": "± 60081",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5860991,
            "range": "± 210572",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1124461,
            "range": "± 1909",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1448552,
            "range": "± 54852",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 731669,
            "range": "± 1080",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 628133,
            "range": "± 974",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b727f70e525097ee732ef3456281ff93050380d9",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-04-25T09:38:38+02:00",
          "tree_id": "c9517290d363600ca700bcf5c9f21895cfcb3051",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/b727f70e525097ee732ef3456281ff93050380d9"
        },
        "date": 1650874571177,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 97803,
            "range": "± 1593",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 273212,
            "range": "± 3394",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3364446,
            "range": "± 54483",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 6058815,
            "range": "± 119546",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3556108,
            "range": "± 23833",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10390239,
            "range": "± 866190",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 16341336,
            "range": "± 344187",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 9299372,
            "range": "± 814281",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 120,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2237122,
            "range": "± 8700",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1871467,
            "range": "± 11363",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1353624,
            "range": "± 47399",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1183539,
            "range": "± 47803",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5313,
            "range": "± 22133",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4108,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2772892,
            "range": "± 22005",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 11025892,
            "range": "± 241983",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 4789399,
            "range": "± 32797",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 7842441,
            "range": "± 135902",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1526406,
            "range": "± 5101",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1872750,
            "range": "± 4516",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 993780,
            "range": "± 3069",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 852635,
            "range": "± 2055",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9283dec5e0bac901b977e7ed6ceb6bc6b186d81a",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-04-27T06:59:10+02:00",
          "tree_id": "7a8265ea060c323d940a84c6a14a8e84be85eb13",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/9283dec5e0bac901b977e7ed6ceb6bc6b186d81a"
        },
        "date": 1651057801717,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 106724,
            "range": "± 8779",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 291599,
            "range": "± 17352",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3605284,
            "range": "± 226990",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 6839484,
            "range": "± 439936",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3966993,
            "range": "± 149469",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 13717927,
            "range": "± 1494924",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 18411243,
            "range": "± 1133611",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 12369050,
            "range": "± 996914",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 28,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 125,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 128,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2392047,
            "range": "± 159160",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1873755,
            "range": "± 72297",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1356802,
            "range": "± 27345",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1284872,
            "range": "± 60040",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5582,
            "range": "± 21392",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4108,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2988384,
            "range": "± 204017",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 12076456,
            "range": "± 659509",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 5119640,
            "range": "± 223702",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 8440178,
            "range": "± 492588",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1625070,
            "range": "± 88308",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1870834,
            "range": "± 4486",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 1031244,
            "range": "± 45886",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 900817,
            "range": "± 39751",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49e2e1a3d21ba60022ad33ae497af7b1fefc379a",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-06T22:50:02+02:00",
          "tree_id": "4bdf1caded3e6e465604376ad1566ff927dd7a43",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/49e2e1a3d21ba60022ad33ae497af7b1fefc379a"
        },
        "date": 1651892022836,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 90637,
            "range": "± 4435",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 340558,
            "range": "± 34780",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3077338,
            "range": "± 176458",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 6123286,
            "range": "± 208200",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3618960,
            "range": "± 81813",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9714123,
            "range": "± 515114",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 16646818,
            "range": "± 424799",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8416309,
            "range": "± 397685",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 120,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 125,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2189130,
            "range": "± 14757",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1844904,
            "range": "± 11270",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1345540,
            "range": "± 57998",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1138336,
            "range": "± 63333",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5178,
            "range": "± 20410",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4061,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2689518,
            "range": "± 64144",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10295288,
            "range": "± 282364",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 4611267,
            "range": "± 58704",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 7663379,
            "range": "± 86063",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1450638,
            "range": "± 34408",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1975725,
            "range": "± 53422",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 927594,
            "range": "± 26742",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 818694,
            "range": "± 24035",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52e5d211a905239f8a20762e4354791c2e313c93",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-10T06:32:42+02:00",
          "tree_id": "7f27599a1837135e5c66aa135639c9f4bfa18ff1",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/52e5d211a905239f8a20762e4354791c2e313c93"
        },
        "date": 1652162540269,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 92318,
            "range": "± 3625",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 398482,
            "range": "± 43714",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3154654,
            "range": "± 108233",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5599552,
            "range": "± 278859",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3484874,
            "range": "± 114172",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10953299,
            "range": "± 820274",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15723836,
            "range": "± 633530",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8700382,
            "range": "± 657302",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 113,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 122,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2152771,
            "range": "± 84710",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1652020,
            "range": "± 64534",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1334845,
            "range": "± 44481",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1162313,
            "range": "± 60772",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5255,
            "range": "± 22047",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4568,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2645801,
            "range": "± 128453",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 11981304,
            "range": "± 467259",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 4340223,
            "range": "± 154651",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 8223677,
            "range": "± 436191",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1526692,
            "range": "± 49167",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1674539,
            "range": "± 66764",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 1025880,
            "range": "± 37769",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 887567,
            "range": "± 32936",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1aba25a7932aa82a715f29e48151aacc53ac677d",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-11T12:45:37+02:00",
          "tree_id": "9772a12f1b3923fc7acd0094174807aef8f029ca",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/1aba25a7932aa82a715f29e48151aacc53ac677d"
        },
        "date": 1652270592600,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 97096,
            "range": "± 1784",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 406371,
            "range": "± 47695",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3373113,
            "range": "± 26869",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 6273433,
            "range": "± 136584",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3743247,
            "range": "± 33762",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9809634,
            "range": "± 291244",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 16378857,
            "range": "± 168929",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8523203,
            "range": "± 263581",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 122,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 126,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2198017,
            "range": "± 23631",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1840996,
            "range": "± 32803",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1336006,
            "range": "± 48504",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1169462,
            "range": "± 69557",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5674,
            "range": "± 22094",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4122,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2769439,
            "range": "± 25718",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 11083704,
            "range": "± 135534",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 4792305,
            "range": "± 45885",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 7357805,
            "range": "± 90762",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1539662,
            "range": "± 7476",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1866514,
            "range": "± 17540",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 1003074,
            "range": "± 8288",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 858376,
            "range": "± 2434",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00f795bbe1943b825cbd7b061837bf22230dbc0d",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-13T18:29:35+02:00",
          "tree_id": "a9629d42ab3b1589ac0bd4ce3552b64494dadea8",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/00f795bbe1943b825cbd7b061837bf22230dbc0d"
        },
        "date": 1652496917002,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 82411,
            "range": "± 1292",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 333310,
            "range": "± 36348",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2832638,
            "range": "± 8570",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5262221,
            "range": "± 124912",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3079143,
            "range": "± 19617",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8307485,
            "range": "± 364795",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13503112,
            "range": "± 203037",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7003956,
            "range": "± 153643",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 104,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1850375,
            "range": "± 54379",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1601175,
            "range": "± 40039",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1118480,
            "range": "± 38318",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 980215,
            "range": "± 20745",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4480,
            "range": "± 20828",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3419,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2286889,
            "range": "± 31234",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8904622,
            "range": "± 138046",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 3926189,
            "range": "± 31147",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6615040,
            "range": "± 71773",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1253625,
            "range": "± 1288",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1578587,
            "range": "± 37198",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 825643,
            "range": "± 1240",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 707163,
            "range": "± 630",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74951307fbc1c722f7ed7ce3fdaa7d61454e48d8",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-16T14:45:24+02:00",
          "tree_id": "860aec2baaae8130009740e947afe353b6d027e7",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/74951307fbc1c722f7ed7ce3fdaa7d61454e48d8"
        },
        "date": 1652706335290,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 101261,
            "range": "± 1802",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 400620,
            "range": "± 36175",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3425965,
            "range": "± 49126",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 6359073,
            "range": "± 155618",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3777871,
            "range": "± 38815",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9598490,
            "range": "± 313647",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 17066954,
            "range": "± 136890",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8241378,
            "range": "± 118764",
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
            "value": 126,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 130,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2223744,
            "range": "± 15011",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1892391,
            "range": "± 9706",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1370186,
            "range": "± 50786",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1196440,
            "range": "± 52198",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5419,
            "range": "± 22182",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4332,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2771216,
            "range": "± 20336",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10635314,
            "range": "± 117858",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 4859997,
            "range": "± 25256",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 7598190,
            "range": "± 86203",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1558151,
            "range": "± 2707",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1887703,
            "range": "± 16715",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 1030833,
            "range": "± 1705",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 882199,
            "range": "± 5720",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "871aedf090776d29b67e91324d36b48c3edab29c",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-20T14:18:53+02:00",
          "tree_id": "77286f00ccf0464d8488818c8012cc11d2b33019",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/871aedf090776d29b67e91324d36b48c3edab29c"
        },
        "date": 1653093745855,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 82718,
            "range": "± 2115",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 334542,
            "range": "± 35973",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2793723,
            "range": "± 26077",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5529139,
            "range": "± 129058",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3089244,
            "range": "± 13574",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7952028,
            "range": "± 208597",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13588704,
            "range": "± 99456",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6242444,
            "range": "± 152449",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 104,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1875624,
            "range": "± 63667",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1606051,
            "range": "± 45191",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1126582,
            "range": "± 62219",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 908657,
            "range": "± 28983",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4577,
            "range": "± 22681",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3421,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2265264,
            "range": "± 24471",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8791885,
            "range": "± 114582",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 3886551,
            "range": "± 29657",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6317573,
            "range": "± 111647",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1252477,
            "range": "± 2827",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1778901,
            "range": "± 69647",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 839275,
            "range": "± 2074",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 736089,
            "range": "± 1389",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a87fceaf51d475bb6c5b37b5c454af3d6b0cc522",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-22T19:08:32+02:00",
          "tree_id": "af6735ed5d538d591037cf0308bf1cc702974ded",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/a87fceaf51d475bb6c5b37b5c454af3d6b0cc522"
        },
        "date": 1653248193160,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 95103,
            "range": "± 3305",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 384138,
            "range": "± 55836",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3194393,
            "range": "± 61198",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 6178012,
            "range": "± 180506",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3512283,
            "range": "± 79357",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 13686092,
            "range": "± 1090295",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 16545602,
            "range": "± 317225",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 9912260,
            "range": "± 869859",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 118,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 124,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2209812,
            "range": "± 43239",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1832043,
            "range": "± 34661",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1363117,
            "range": "± 41542",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1218435,
            "range": "± 36781",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5254,
            "range": "± 22054",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4085,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2783121,
            "range": "± 66029",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 11098105,
            "range": "± 252913",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 4764301,
            "range": "± 38305",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 7678965,
            "range": "± 243266",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1544329,
            "range": "± 31979",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 2025850,
            "range": "± 14379",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 978882,
            "range": "± 18739",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 837878,
            "range": "± 18564",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbad4501da1ba7d84875ad9672b7394e5d89a05e",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-26T12:03:12+02:00",
          "tree_id": "31456557949a6afeca15578581a2b0d9789ae4e1",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/dbad4501da1ba7d84875ad9672b7394e5d89a05e"
        },
        "date": 1653563174427,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 82234,
            "range": "± 2094",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 349603,
            "range": "± 54115",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2906417,
            "range": "± 21025",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5400938,
            "range": "± 112893",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3098383,
            "range": "± 27454",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9564912,
            "range": "± 851490",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13616102,
            "range": "± 145033",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7826014,
            "range": "± 477164",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 106,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1902114,
            "range": "± 62678",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1635663,
            "range": "± 40448",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1137217,
            "range": "± 24977",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1030663,
            "range": "± 25561",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4616,
            "range": "± 23461",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3421,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2320485,
            "range": "± 23406",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9264462,
            "range": "± 175646",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 4003357,
            "range": "± 68126",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6724935,
            "range": "± 146123",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1253848,
            "range": "± 2836",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1579452,
            "range": "± 31847",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 839803,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 736468,
            "range": "± 1240",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c93e6eab52ab41c314861a586450f57e7f91a163",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-05-31T12:22:09+02:00",
          "tree_id": "e3f6f26baa53e9945209c9b54f87177ae013dfb9",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/c93e6eab52ab41c314861a586450f57e7f91a163"
        },
        "date": 1654020012391,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 103441,
            "range": "± 6855",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 402909,
            "range": "± 46928",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3386061,
            "range": "± 144115",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5924882,
            "range": "± 365797",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3932158,
            "range": "± 238893",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 12456842,
            "range": "± 1126328",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15758014,
            "range": "± 787016",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 10127146,
            "range": "± 952602",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 23,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 129,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 126,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2638262,
            "range": "± 126288",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1789207,
            "range": "± 57770",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1349954,
            "range": "± 84948",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1195056,
            "range": "± 90560",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5545,
            "range": "± 22159",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4788,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 3905393,
            "range": "± 145834",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 12526150,
            "range": "± 1102053",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 4821095,
            "range": "± 229326",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 9247401,
            "range": "± 480233",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1527150,
            "range": "± 75111",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1802616,
            "range": "± 86242",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 1013883,
            "range": "± 48428",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 899322,
            "range": "± 31812",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stefan@dilettant.eu",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e0c349ef410020042ba9e2a9b8bdc29c1a6fd54",
          "message": "Merge branch 'PyO3:main' into main",
          "timestamp": "2022-06-04T16:55:56+02:00",
          "tree_id": "000b6dad2514e4969916835936ecbaa97d0cc4eb",
          "url": "https://github.com/sthagen/PyO3-pyo3/commit/7e0c349ef410020042ba9e2a9b8bdc29c1a6fd54"
        },
        "date": 1654392934042,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 71058,
            "range": "± 1635",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 313326,
            "range": "± 27511",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2830396,
            "range": "± 13587",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4483972,
            "range": "± 98129",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2679535,
            "range": "± 9221",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9243173,
            "range": "± 160871",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13412633,
            "range": "± 79929",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7549335,
            "range": "± 122542",
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
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 106,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1908593,
            "range": "± 47646",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1415707,
            "range": "± 40526",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1159510,
            "range": "± 36202",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1081628,
            "range": "± 39682",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4438,
            "range": "± 18332",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 6413,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2337740,
            "range": "± 26884",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9803755,
            "range": "± 58603",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 3706700,
            "range": "± 21178",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6812748,
            "range": "± 22773",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1467381,
            "range": "± 1825",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1383210,
            "range": "± 37215",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 832148,
            "range": "± 4855",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 811345,
            "range": "± 11563",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}