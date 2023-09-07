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
When parameterizing the component using SSIS variables, the *Custom Porperties* are overwritten.

List of relevant *Custom Properties*:

|Property|Comment|
|:----|:----|
| *MaxRows* | Corresponds to the field *MaxRows* in [Settings](./settings) of the Query component.|
| *QueryDescription* | Description of the Query to be extracted.|
| *QueryName* | Name of the Query to be extracted.|
| *StringConversion* | Corresponds to the [Settings](./settings) of the Query component.|
| *UserGroup* | Name of the User Group where the Query is located.|
| *Variant* | Corresponds to the field *Use Variant Variable* in the [Settings](./settings) of the Query component. |
| *VariantDescription* | Description of the Variant.|

{% include _content/en/xis-specific/parameterization/parametrization-via-variables.md  %}

#### Available Parameters for SSIS Variables
List of input fields that allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *Variant* | In the Xtract Query component, go to [Settings](./settings) and activate the check box *Use Variant Variable*. <br>This allows using an SSIS variable for the field *Variant*. |

****
#### Related Links
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/tables/xtract-is-Dynamization-of-WHERE-conditions-of-the-XIS-table-components).
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)