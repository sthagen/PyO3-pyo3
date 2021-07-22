window.BENCHMARK_DATA = {
  "lastUpdate": 1626941290096,
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
      }
    ]
  }
}