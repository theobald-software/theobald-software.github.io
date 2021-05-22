---
ref: xis-parametrization-01
layout: page
title: SSIS Properties
description: Parameterization using SSIS Properties
product: xtract-is
parent: parameterization
permalink: /:collection/:path
weight: 1
lang: en_GB

---
### Properties of Xtract Components in SSIS

The custom properties of an Xtract IS component are displayed in the window "Properties". 

![Properties](/img/content/xis/properties_component.png){:class="img-reagierend"}

{: .box-note }
**Note:** The properties that can be set via SSIS expressions are displayed in the "Properties" window of the Data Flow Task. 

<!---(technically: the property's *expressionType* XML-attribute is set to *notify*).
VS: und was heißt das? Muss ich das wissen? Und falls ja, wofür

![DataFlow Properties](/img/content/xis/properties_data_flow.png){:class="img-reagierend"}????-->

{% include _content/en/parametrization/parametrization-via-properties.md  %}

*****
#### Related Links:
- [Use Property Expressions in Packages](https://docs.microsoft.com/en-us/sql/integration-services/expressions/use-property-expressions-in-packages?view=sql-server-ver15)
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).
