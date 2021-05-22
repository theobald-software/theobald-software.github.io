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

Various settings of an Xtract IS component (e.g., package size, selection criteria, etc.) can be parameterized so that a different value can be assigned at SSIS package runtime.
Parameters can be populated using standard SSIS functionality, such as expressions, SSIS variables, etc. 
Xtract IS offers two technical options for parameterization:
- [Properties](./parameterization-prop)
- [SSIS Variables](./parameterization-var)

{: .box-tip }
**Recommendation:** Microsoft's preferred and recommended way of parameterization is using properties. 

Depending on the Xtract IS component you can either use SSIS variables or properties or both to set parameters.

### Parameterization Options in the Components 

| Component   | SSIS Variables | Properties |
|-------------|:-----:|:----:|
| [BAPI](../bapi/parametrization)        |   x    |      | 
| [BW Cube](../bw-cube/parametrization)     |   x    |      | 
| [BW Hierarchy](../hierarchy/paramerization)|    x   |      |
| [DeltaQ](../deltaq/parametrization)      | x      |  x    |
| [ODP](../odp/odp-parametrization)         |   x    |   x   |
| [OHS](../open-hub-service-ohs/parametrization)         |     x  |    x  |
|[Query](../query/parametrization)       |   x    |      |
| [Report](../report/parametrization) |    x   |      | 
| [Table](../table/table-parametrization)       | x      |  x    |


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
