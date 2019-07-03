---
ref: xi-table-06
layout: page
title: Table Properties
description: Table Properties
product: xtract-is
parent: table
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: 
---



![Table-XIS-Properties](/img/content/Table-XIS-Properties.png){:class="img-responsive"}

### Custom Properties

**Converts Dates**<br>
Set to *true* to convert an SAP date (YYYYMMDD) to an SQL date type. Also, applies the following date conversions in case of invalid data in SAP date fields. <br>

**InvalidDateReplacement** <br>
If an SAP date cannot be converted to a valid SQL date, a default date value must be entered in the text box. Each invalid value (such as '20190500') is then converted to the date entered. NULL is supported as a value. 

**MaxDateReplacement** <br>
Replaces SAP dates with an invalid max. year value, such as '9999mmdd', with the date entered or with 'NULL'.

**MinDateReplacement** <br>
Replaces SAP dates with an invalid min. year value, such as '0000mmdd'  with the date entered or with 'NULL'.

**Use Field Exits**<br>
Defines whether the conversion routines stored in the ABAP Data Dictionary are used for the respective fields. Typical examples are the language key (for example, D in the database, but DE after conversion) or the project number (for example, T000012738GT in the database, T/12738/GT after conversion). After the conversion, the value is always displayed as it would appear in a transaction in the SAP GUI. <br>
This option is only supported when Z_THEO_READ_TABLE is used as a custom function for table extraction.





