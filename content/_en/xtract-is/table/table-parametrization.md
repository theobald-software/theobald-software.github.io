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

### About
Some of the values that can be entered or selected in the component's UI can be dynamically changed at SSIS package runtime. This is explained in section [Parameterization](/../parameterization). <br>
This section lists the component's fields whose values can be dynamically changed.


{: .box-tip }
**Recommendation:** Where possible, use properties for parameterization. 

### Parameterization using Properties
The following properties can be parameterized:

|Property Name|Description|
|:----|:----|
| `[Xtract Table].[WhereClause]`|Corresponds to the tab *WHERE clause* in the Table component. Allows parameterization of the complete WHERE clause.|
| `[Xtract Table].[ConvertsDates]`|see [Custom Properties - ConvertsDates](./extraction-settings#custom-properties). Permitted Values are *True* and *False*. |
| `[Xtract Table].[CustomFunctionName]`| Corresponds to the drop-down menu *Function Module* in the Table component's Settings.|
| `[Xtract Table].[MaxRows]`|Corresponds to the field *Row Limit* in the Table component's Settings.|
| `[Xtract Table].[MinDateReplacement]`|see [Custom Properties - MinDateReplacement](./extraction-settings#custom-properties).|
| `[Xtract Table].[MaxDateReplacement]`|see [Custom Properties - MaxDateReplacement](./extraction-settings#custom-properties).|
| `[Xtract Table].[InvalidDateReplacement]`|see [Custom Properties - InvalidDateReplacement](./extraction-settings#custom-properties).|
| `[Xtract Table].[PackageSize]`| Corresponds to the field *Package Size* in the Table component's Settings.|


### Parameterization using SSIS Variables
The following fields in the Table component allow entry of an SSIS variable (instead of a hard coded value):

|Field Name|Comment|
|:----|:----|
| *WHERE clause* tab|Allows parameterization of the complete WHERE clause or only parts of the WHERE clause. Example: AEDAT > @v_aedat|


{: .box-tip }
**Recommendation:** Where possible, use properties for parameterization. 



****
#### Related Links
[Table Extraction Settings](./extraction-settings/) <br>
[Parameterization](../parameterization/) <br>
[Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).