---
ref: xi-table-07
layout: page
title: Parameterization 
description: Parametrization 
product: xtract-is
parent: table
permalink: /:collection/:path
weight: 7
lang: en_GB

---

{% include _content/en/parametrization/parametrization-about.md  %}

{: .box-tip }
**Recommendation:** Where possible, use properties for parameterization. 

### Parameterization using Properties
The following properties can be parameterized:

|Property Name|Description|
|:----|:----|
| *[Xtract Table].[WhereClause]*|Corresponds to the tab *WHERE clause* in the Table component. Allows parameterization of the complete WHERE clause, see [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).|
| *[Xtract Table].[ConvertsDates]*|See [Custom Properties - ConvertsDates](./extraction-settings#custom-properties). Permitted values are *True* and *False*. |
| *[Xtract Table].[CustomFunctionName]*| Corresponds to the drop-down menu *Function Module* in the Table component's [Settings](./extraction-settings).|
| *[Xtract Table].[MaxRows]*|Corresponds to the field *Row Limit* in the Table component's [Settings](./extraction-settings).|
| *[Xtract Table].[MinDateReplacement]*|See [Custom Properties - MinDateReplacement](./extraction-settings#custom-properties).|
| *[Xtract Table].[MaxDateReplacement]*|See [Custom Properties - MaxDateReplacement](./extraction-settings#custom-properties).|
| *[Xtract Table].[InvalidDateReplacement]*|See [Custom Properties - InvalidDateReplacement](./extraction-settings#custom-properties).|
| *[Xtract Table].[PackageSize]*| Corresponds to the field *Package Size* in the Table component's [Settings](./extraction-settings).|


### Parameterization using SSIS Variables
The following fields and/or custom properties of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *WHERE clause* tab| Allows parameterization of the complete WHERE clause or only parts of the WHERE clause. Example: AEDAT > @v_aedat|

****
#### Related Links
- [Table Extraction Settings](./extraction-settings) <br>
- [Parameterization](../parameterization) <br>
- [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)