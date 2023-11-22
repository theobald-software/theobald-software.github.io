---
ref: xi-table-09
layout: page
title: Parameterization 
description: Parametrization 
product: xtract-is
parent: table-cdc
permalink: /:collection/:path
weight: 8
lang: en_GB
---
### Custom Properties

The *Custom Properties* define the properties unique to the component.
When parameterizing the component using SSIS variables, the *Custom Porperties* are overwritten.

List of relevant *Custom Properties*:

|Property|Comment|
|:----|:----|
| *ColumnNameStyle* | *Code*: the SAP technical column name is used as column name in the destination e.g., MAKTX. <br>*PrefixedCode*: the SAP technical column name is prefixed by SAP object name and the tilde character e.g., MAKT~MAKTX. <br>*CodeAndText*: the SAP technical column name and the SAP description separated by an underscore are used as column name in the destination e.g., MAKTX_Material Description (Short Text).<br>*TextAndCode*: the SAP description and the SAP technical column name description separated by an underscore are used as column name in the destination e.g., Material Description (Short Text)_MAKTX. |
| *ConvertsDates* | When this property is set to *True* (default) SAP date fields (YYYYMMDD) assume the SSIS pipeline type DT_DBDATE instead of DT_WSTR. In case of invalid data in SAP date fields, the following date conversions are applied: <br>*InvalidDateReplacement*, *MaxDateReplacement*, *MinDateReplacement*. |
| *InvalidDateReplacement* | Allows the replacement of an invalid date format. The default value of the property is *1970-01-02*. <br>To use the property enter a replacement value for invalid SAP dates, such as '20190132' (January 32nd  2019) in the format yyyy-mm-dd. The value NULL is supported.|
| *MaxDateReplacement* | Allows replacing the SAP dates with the year 9999. The default value of the property is 2099-12-31. <br>To use the property enter a replacement value in the format `yyyy-mm-dd` that contains the year ‘9999’. Example: ‘99990101’ (January 1st 9999). The value NULL is supported.|
| *MinDateReplacement* | Allows replacing the SAP dates with the year *0000*. The default value of the property is 1970-01-01. <br>To use the property enter a replacement value in the format `yyyy-mm-dd` that contains the year '0000'. Example: '00000000'. The value NULL is supported.|

{% include _content/en/xis-specific/parameterization/parameterization-prop.md  %}

#### Available Data Flow Properties
List of *Data Flow Properties* that can be parameterized:

|Property Name|Description|
|:----|:----|
| *[Xtract Table CDC].[ConvertsDates]*|Enable or disable conversion of SAP dates, see [Custom Properties](#custom-properties). |
| *[Xtract Table CDC].[InvalidDateReplacement]*|Every invalid value will be converted into the entered value, see [Custom Properties](#custom-properties).|
| *[Xtract Table CDC].[MinDateReplacement]*|Converts the SAP date 00000000 to the entered value, see [Custom Properties](#custom-properties).|
| *[Xtract Table CDC].[MaxDateReplacement]*|Converts the SAP date 9999XXXX to the entered value, see [Custom Properties](#custom-properties).|


****
#### Related Links
- [Table Extraction Settings](./extraction-settings) <br>
- [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/tables/xtract-is-Dynamization-of-WHERE-conditions-of-the-XIS-table-components)
