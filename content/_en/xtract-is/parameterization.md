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

Various settings of the extractions (e.g., package size, selection criteria, etc.) can be parameterized. 
The parameters and properties be populated at SSIS package runtime using standard SSIS functionality, such as expressions, variables, etc. 
Xtract IS offers two technical options for parameterization using:
- [Properties](./parameterization-prop)
- [Variables](./parameterization-var)

Depending on a component you can either use variables or properties or both to set parameters.

### Parameterization Options in the Components 

| Component   | Variables | Properties |
|-------------|:-----:|:----:|
| ABAP Report |       |      | 
| BAPI        |       |      | 
| BW Cube     |       |      | 
| BW Hierarchy|       |      |
| BW Loader   |       |      |
| DeltaQ      |       |      |
| ODP         |   x    |   x   |
| OHS         |       |      |
| Query       |       |      |
| Table       |       |      |
| Table Join  |       |      |

### Displaying Parameters within SSIS
Parameters appear as properties of the Xtract ODP object as well as the SSIS Data Flow. 

![Properties](/img/content/xis/properties.png){:class="img-reagierend"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
