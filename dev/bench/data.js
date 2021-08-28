window.BENCHMARK_DATA = {
  "lastUpdate": 1630136281777,
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
      }
    ]
  }
}