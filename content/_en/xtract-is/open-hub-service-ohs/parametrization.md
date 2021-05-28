---
ref: xi-open-hub-service-ohs-05
layout: page
title: Parameterization
description: Parametrization
product: xtract-is
parent: open-hub-service-ohs
permalink: /:collection/:path
weight: 5
lang: en_GB

---

{% include _content/en/parametrization/parametrization-about.md  %}

### Parameterization using Properties
The following custom properties can be parameterized:

|Property Name|Description|
|:----|:----|
| *[Xtract OHS].[ConvertsDates]*| Enable or disable conversion of SAP dates. |
| *[Xtract OHS].[ConvertsTimes]*| Enable or disable conversion of SAP times. |
| *[Xtract OHS].[InvalidDateReplacement]*| In case of invalid date values you need to enter a default date value. Every invalid value will be converted into this value.|
| *[Xtract OHS].[MaxDateReplacement]*| Converts the SAP date 9999XXXX to the entered value. |
| *[Xtract OHS].[MinDateReplacement]*| Converts the SAP date 00000000 to the entered value.|


### Parameterization using SSIS Variables
The following fields and/or custom properties of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *Gateway host* | Corresponds to the field *Gateway host* in the OHS component, see [Third party tool Settings](./settings#third-party-tool-settings). |
| *Gateway service* | Corresponds to the field *Gateway service* in the OHS component, see [Third party tool Settings](./settings#third-party-tool-settings).|
| *Program ID* | Corresponds to the field *Program ID* in the OHS component, see [Third party tool Settings](./settings#third-party-tool-settings).|

****
#### Related Links
- [How to Use Expressions for Properties](../parameterization/parameterization-prop#how-to-use-expressions-for-properties) 
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)
- [How to use SSIS Variables with Xtract Components](../parameterization/parameterization-var) 
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)

