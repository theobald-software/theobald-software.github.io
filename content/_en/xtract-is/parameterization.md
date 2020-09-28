---
ref: xtract-is-88
layout: page
title: Parameterization
description: Parameterization
product: xtract-is
parent: xtract-is
childidentifier: parameterization
permalink: /:collection/:path
weight: 88
lang: en_GB

---

Various settings of the Xtract IS components (e.g., package size, selection criteria, etc.) can be parameterized. 
The parameters can be populated at SSIS package runtime using standard SSIS functionality, such as expressions, SSIS variables, etc. 
Xtract IS offers two technical options for parameterization using:
- [Properties](./parameterization-prop)
- [Variables](./parameterization-var)

{: .box-tip }
**Recommendation:** Microsoft's preferred and recommended way of parameterization is using properties. 

Depending on the Xtract IS component you can either use SSIS variables or properties or both to set parameters.

### Parameterization Options in the Components 

| Component   | SSIS Variables | Properties |
|-------------|:-----:|:----:|
| [BAPI](../bapi/parametrization)        |   x    |      | 
| [BW Cube](../bw-cube/parametrization)     |   x    |      | 
| [BW Hierarchy](../hierarchy/paramerization)|    x   |      |
| [BW Loader](../bw-loader/parametrization)   |  x     |      |
| [DeltaQ](../deltaq/parametrization)      | x      |  x    |
| [ODP](../odp/odp-parametrization)         |   x    |   x   |
| [OHS](../open-hub-service-ohs/parametrization)         |     x  |      |
|[Query](../query/parametrization)       |   x    |      |
| [Report](../report/parametrization) |    x   |      | 
| [Table](../table/table-parametrization)       | x      |  x    |


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
