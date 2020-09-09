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
The parameters and properties be populated at SSIS package runtime using standard SSIS functionality, such as expressions, SSIS variables, etc. 
Xtract IS offers two technical options for parameterization using:
- [Properties](./parameterization-prop)
- [Variables](./parameterization-var)

{: .box-tip }
**Recommendation:** Microsoft's preferred and recommended way of parameterization is using properties. 

Depending on a component you can either use SSIS variables or properties or both to set parameters.

### Parameterization Options in the Components 

| Component   | SSIS Variables | Properties |
|-------------|:-----:|:----:|
| ABAP Report |    x   |      | 
| BAPI        |    x   |      | 
| BW Cube     |   x    |      | 
| BW Hierarchy|   x    |      |
| BW Loader   |    x   |      |
| DeltaQ      |   x    |  x    |
| ODP         |   x    |   x   |
| OHS         |   x    |      |
| Query       |   x    |      |
| Table       |   x    |    x  |


### Displaying Properties within SSIS
Parameters appear as properties of the SSIS Data Flow. 

![Properties](/img/content/xis/properties.png){:class="img-reagierend"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
