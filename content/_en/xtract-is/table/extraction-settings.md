---
ref: xi-table-06
layout: page
title: Extraction settings
description: Table Properties
product: xtract-is
parent: table
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: 
---

### Opening Extraction Settings
Within the window "Define data source for SAP Tables" click **Settings**. The window "Table Settings" opens. 
{% include _content/en/tables/extraction-settings.md  %}


### Custom Properties

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

**InvalidDateReplacement** <br>
Allows the replacement of an invalid date format. The default value of the property **InvalidDateReplacement** is *1970-01-02*. To use the property:
* Enter a replacement value for invalid SAP dates, such as '20190132' (January 32nd  2019).
* Enter the replacement value in the following format: yyyy-mm-dd

{: .box-note }	
**Note:** the value *NULL* is supported. 

**MaxDateReplacement** <br>
Allows replacing the SAP dates with the year *9999*. The default value of the property **MaxDateReplacement** is 2099-12-31. To use the property:
* Enter a replacement value for SAP dates that contain the year '9999'. Example: '99990101' (January 1st 9999)
* Enter the replacement value in the following format: yyyy-mm-dd

{: .box-note }	
**Note:** the value *NULL* is supported. 

**MinDateReplacement** <br>
Allows replacing the SAP dates with the year *0000*. The default value of the property **MinDateReplacement** is 1970-01-01. To use the property:
* Enter a replacement value for SAP dates that contain the year '0000'. Example: '00000000' 
* Enter the replacement value in the following format: yyyy-mm-dd

{: .box-note }	
**Note:** the value *NULL* is supported. 


**UseLegacyDateConversion**<br>
The property **UseLegacyDateConversion** is used for migration of table extractions from Xtract IS versions < 5.0.0. The default value of this property is *False*. As a prerequisite for using **UseLegacyDateConversion** property, the **ConvertsDates** property must be set to *True*. Setting *UseLegacyDateConversion* to *True* does the following:
* Invalid SAP date values are replaced with the value entered in the **InvalidDateReplacement** property.
* There is no replacement for SAP dates that contain the year '9999'. The value entered in the **MaxDateReplacement** property is *not* considered.
* SAP dates that contain the year '0000' are replaced with *NULL*. The value entered in the **MinDateReplacement** property is *not* considered.

**Use Field Exits**<br>
Defines whether the conversion routines stored in the ABAP Data Dictionary are used for the respective fields. Typical examples are the language key (for example, D in the database, but DE after conversion) or the project number (for example, T000012738GT in the database, T/12738/GT after conversion). After the conversion, the value is always displayed as it appears in a transaction in the SAP GUI. <br>

