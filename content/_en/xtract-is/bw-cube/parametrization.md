---
ref: xi-bw-cube-05
layout: page
title: Parameterization
description: parametrization
product: xtract-is
parent: bw-cube
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=bw-cube-settings
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract IS.<br>
Make sure to use the documentation within the new [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

### Custom Properties

The *Custom Properties* define the properties unique to the component.
When parameterizing the component using SSIS variables, the *Custom Porperties* are overwritten.

List of relevant *Custom Properties*:

|Property |Comment|
|:----|:----|
| *CubeName* | Corresponds to the field *Cube Name* in the BW Cube component, see [Defining a BW Cube Extraction](./bw-cube-extraction-define#defining-a-bw-cube-extraction).|
| *DelimiterForMultipleSSISVariableValues* | Delimiter for multiple input variables, see *Variables* in [Parameterizing using SSIS Variables](#parameterizing-using-ssis-variables).|
| *IgnoreMDXErrors* | If set to *true*, MDX errors do not lead to SSIS errors.|
| *MDXVariable* | Enter an SSIS variable in the MDX textbox and fill the SSIS variable with the complete MDX statement, see *MDXVariable* in [Parameterizing using SSIS Variables](#parameterizing-using-ssis-variables). |
| *StringConversion* | See [Settings - String Conversion](./settings#string-conversion). |


{% include _content/en/xis-specific/parameterization/parametrization-via-variables.md  %}

#### Available Parameters for SSIS Variables
List of input fields that allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
|*Variables*| Enter an SSIS variable to fill a BEx variable, see [Variables](./variables). <br>For BEx variables of type *Multiple Single* enter a single SSIS variable, set a delimiter for custom property *DelimiterForMultipleSSISVariableValues*, enter multiple single values in the SSIS variable separated by the delimiter. |
|*Member Filter*        |Enter an SSIS variable in the field *Variable*, see [Filter](./filter). The SSIS variable can be filled with multiple single entries separated by comma.|
|*MDXVariable*        | Enter an SSIS variable in the MDX textbox and fill the SSIS variable with the complete MDX statement.|



*****
#### Related Links:
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/tables/xtract-is-Dynamization-of-WHERE-conditions-of-the-XIS-table-components).
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)