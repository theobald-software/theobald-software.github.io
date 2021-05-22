---
ref: xis-parametrization-01
layout: page
title: Parameterization using SSIS Properties
description: Parameterization using SSIS Properties
product: xtract-is
parent: parameterization
permalink: /:collection/:path
weight: 1
lang: en_GB

---
### Displaying Properties within SSIS
The custom properties of an Xtract IS component are visible in the *Properties* window. 

![Properties](/img/content/xis/properties_component.png){:class="img-reagierend"}

Some custom properties of an Xtract IS component can be set via an SSIS expression. These properties are visible in the *Properties* window of the Data Flow Task (technically: the property's *expressionType* XML-attribute is set to *notify*).

![DataFlow Properties](/img/content/xis/properties_data_flow.png){:class="img-reagierend"}

{% include _content/en/parametrization/parametrization-via-properties.md  %}

