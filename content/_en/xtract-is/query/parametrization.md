---
ref: xi-query-05
layout: page
title: Parameterization
description: parametrization
product: xtract-is
parent: query
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=query-settings
---

### Custom Properties

The *Custom Properties* define the properties unique to the component.

List of relevant *Custom Properties*:

|Property|Comment|
|:----|:----|
| *MaxRows* | Corresponds to the field *MaxRows* in [Settings](./settings) of the Query component.|
| *Variant* | Corresponds to the field *Use Variant Variable* in the [Settings](./settings) of the Query component. |

{% include _content/en/xis-specific/parameterization/parameterization-prop.md  %}

#### Available Data Flow Properties
List of *Data Flow Properties* that can be parameterized:

|Property|Comment|
|:----|:----|
| *[Xtract Report].[Variant]*|See [Variants and Selections](./variants-and-selections).|

### Parameterization using SSIS Variables

You can use SSIS variables for selections.<br>
Available SSIS variables are listed in the selection settings when parameter input is active (1), see [Edit Selections](./variants-and-selections#edit-selections).<br> 
![Selection-via-Variables](/img/content/xis/report_selection_via_variables.png){:class="img-responsive"}

{: .box-note }
**Note**: The Xtract Report component does not support variables of the data types *DateTime* and *DBNull*. 
For more information on the data types of system variables, see [Microsoft Help: System Variables](https://docs.microsoft.com/en-us/sql/integration-services/system-variables?view=sql-server-ver15).

****
#### Related Links
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/tables/xtract-is-Dynamization-of-WHERE-conditions-of-the-XIS-table-components).
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)