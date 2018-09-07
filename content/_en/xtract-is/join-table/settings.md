---
layout: page
title: Settings
description: Settings
product: xtract-is
parent: join-table
permalink: /:collection/:path
weight: 7
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=tablejoin-settings
---

Use the *Settings* link in the editor to open the Settings dialog as shown in the picture below.

![tj-xis-settings](/img/content/tj-xis-settings.jpg){:class="img-responsive" width="400px" }
 
**Max Rows**<br>
Maximum numbers of rows to be extracted. 0 is unlimited.

**Package Size**<br>
The number of rows that are extracted with one single RFC call. If you want to download more than 20,000 data rows, please set this parameter to a value between 15,000 and 50,000 to avoid timeouts.

**Custom Function**<br>
Name of the custom function that should be used to avoid SAP restrictions.

**Automatic String Conversion**<br>
All strings are converted into VarChar strings if the source system is non-Unicode, and all strings are converted into NVarChar if the source system is Unicode.

**Convert Strings to VarChar**<br>
All strings are converted to VarChar regardless if the source system is Unicode or not.

**Convert Strings to NVarChar**<br>
All strings are converted to NVarChar regardless if the source system is Unicode or not.

**Automatic Date conversion**<br>
Converts the values of an SAP date formated value into a SQL formatted (YYYYMMDD) date value. In case of no convertible date values you have to enter a default date value into the text box. Every invalid value will be converted into this value. NULL is supported as value.

**Use Field Exits**<br>
defines wether the conversion routines should be used. 
Typical examples are the language key (e.g. D in the database, but DE after conversion) 
or the project number (e.g. T000012738GT in the database, but T/12738/GT after conversion).
After conversion, the value is always displayed, as it would appear in the SAP GUI.