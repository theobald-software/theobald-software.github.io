---
ref: xi-table-07
layout: page
title: Custom Properties
description: Table Custom Properties
product: xtract-is
parent: table
permalink: /:collection/:path
weight: 7
lang: en_GB
progressstate: 5
---


The *Custom Properties* of the Xtract Table component are displayed in the "Properties" window of the component. 

### List of Properties

![Table-XIS-Properties](/img/content/Table-XIS-Properties.png){:class="img-responsive"}

**ColumnNameStyle**<br>
- *Code*: the SAP technical column name is used as column name in the destination e.g., MAKTX.<br>
- *PrefixedCode*: the SAP technical column name is prefixed by SAP object name and the tilde character e.g., MAKT~MAKTX
- *CodeAndText*: the SAP technical column name and the SAP description separated by an underscore are used as column name in the destination e.g., MAKTX_Material Description (Short Text).<br>
- *TextAndCode*: the SAP description and the SAP technical column name description separated by an underscore are used as column name in the destination e.g., Material Description (Short Text)_MAKTX.


**ConvertsDates**<br>
Allows converting the SAP date formats. The default value of the property **ConvertsDates** is *True*. Setting this property to *True* does the following:
* SAP date fields (YYYYMMDD) are typed to SSIS pipeline type DT_DBDATE (instead of DT_WSTR).
* The following date conversions are applied in case of invalid data in SAP date fields: 
	- InvalidDateReplacement
	- MaxDateReplacement
	- MinDateReplacement
	
{: .box-note }	
**Note:** for the date conversions to apply, set the property **UseLegacyDateConversion**  to *False*.

**CustomFunctionName**<br>
Corresponds to the drop-down menu *Function Module* in the Table component's [Settings](./extraction-settings).

**InvalidDateReplacement**<br>
Allows the replacement of an invalid date format. The default value of the property **InvalidDateReplacement** is *1970-01-02*. To use the property:
* Enter a replacement value for invalid SAP dates, such as '20190132' (January 32nd  2019).
* Enter the replacement value in the following format: yyyy-mm-dd

{: .box-note }	
**Note:** the value *NULL* is supported. 

**MaxDateReplacement**<br>
Allows replacing the SAP dates with the year *9999*. The default value of the property **MaxDateReplacement** is 2099-12-31. To use the property:
* Enter a replacement value for SAP dates that contain the year '9999'. Example: '99990101' (January 1st 9999)
* Enter the replacement value in the following format: yyyy-mm-dd

{: .box-note }	
**Note:** the value *NULL* is supported. 

**MinDateReplacement**<br>
Allows replacing the SAP dates with the year *0000*. The default value of the property **MinDateReplacement** is 1970-01-01. To use the property:
* Enter a replacement value for SAP dates that contain the year '0000'. Example: '00000000' 
* Enter the replacement value in the following format: yyyy-mm-dd

{: .box-note }	
**Note:** the value *NULL* is supported. 

**MaxRows**<br>
Specifies the maximum number of extracted records. 0 Extracts the entire table. This property corresponds to the field *Row Limit* in the Table component's [Settings](./extraction-settings).

**OrderBy**<br>
Defines the table field that is used as the sort criterion for the result.

**PackageSize**<br>
Specifies the number of records retrieved per data package: 
- The default value is 20000 lines. 
- 0 means no packaging. Not using packaging can lead to an RFC timeout for large data extracts. 
- A package size between 15000 and 50000 is advisable for large amounts of data. 

This property corresponds to the field *Package Size* in the Table component's [Settings](./extraction-settings).

{: .box-tip }
**Recommendation:** Especially when executing a table extraction as a background job, the package size plays an important role and should be chosen with regard to the total amount of data. 

**UseWideStrings**<br>
Defines whether DT_WSTR / DT_NTEXT (true) or DT_STR / DT_TEXT (false) is used as the data type for string columns.

**UseLegacyDateConversion**<br>
The property **UseLegacyDateConversion** is used for migration of table extractions from Xtract IS versions < 5.0.0. The default value of this property is *False*. As a prerequisite for using **UseLegacyDateConversion** property, the **ConvertsDates** property must be set to *True*. Setting *UseLegacyDateConversion* to *True* does the following:
* Invalid SAP date values are replaced with the value entered in the **InvalidDateReplacement** property.
* There is no replacement for SAP dates that contain the year '9999'. The value entered in the **MaxDateReplacement** property is *not* considered.
* SAP dates that contain the year '0000' are replaced with *NULL*. The value entered in the **MinDateReplacement** property is *not* considered.

**WhereClause**<br>
Corresponds to the tab *WHERE clause* in the Table component. This property allows parameterization of the complete WHERE clause, see [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).

****
#### Related Links
- [Parameterization](./table-parametrization) 