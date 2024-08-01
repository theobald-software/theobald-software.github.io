---
ref: xi-table-08
layout: page
title: Parameterization 
description: Parametrization 
product: xtract-is
parent: table
permalink: /:collection/:path
weight: 8
lang: en_GB
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract IS.<br>
Make sure to use the documentation within the new [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

### Custom Properties

The *Custom Properties* define the properties unique to the component.
When parameterizing the component using SSIS variables, the *Custom Porperties* are overwritten.

For a list of available *Custom Properties*, see [Table Custom Properties](./properties).

{% include _content/en/xis-specific/parameterization/parameterization-prop.md  %}

#### Available Data Flow Properties
List of *Data Flow Properties* that can be parameterized:

|Property Name|Description|
|:----|:----|
| *[Xtract Table].[WhereClause]*|Corresponds to the tab *WHERE clause* in the Table component. Allows parameterization of the complete WHERE clause, see [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/tables/xtract-is-Dynamization-of-WHERE-conditions-of-the-XIS-table-components).|
| *[Xtract Table].[ConvertsDates]*|Enable or disable conversion of SAP dates, see [Table Custom Properties](./properties). |
| *[Xtract Table].[CustomFunctionName]*| Corresponds to the drop-down menu *Function Module* in the Table component's [Settings](./extraction-settings).|
| *[Xtract Table].[MaxRows]*|Corresponds to the field *Row Limit* in the Table component's [Settings](./extraction-settings).|
| *[Xtract Table].[MinDateReplacement]*|Converts the SAP date 00000000 to the entered value, see [Table Custom Properties](./properties).|
| *[Xtract Table].[MaxDateReplacement]*|Converts the SAP date 9999XXXX to the entered value, see [Table Custom Properties](./properties).|
| *[Xtract Table].[InvalidDateReplacement]*|Every invalid value will be converted into the entered value, see [Table Custom Properties](./properties).|
| *[Xtract Table].[PackageSize]*| Corresponds to the field *Package Size* in the Table component's [Settings](./extraction-settings).|


### Parameterization using SSIS Variables

List of input fields that allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *WHERE clause* tab| Allows parameterization of the complete WHERE clause or only parts of the WHERE clause. For more information, see [Using SSIS Variables in the WHERE Clause Editor](where-clause#using-ssis-variables-in-the-where-clause-editor).|


****
#### Related Links
- [Table Extraction Settings](./extraction-settings) <br>
- [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/tables/xtract-is-Dynamization-of-WHERE-conditions-of-the-XIS-table-components)