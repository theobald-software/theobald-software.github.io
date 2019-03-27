---
ref: xi-table-02
layout: page
title: Settings
description: Settings
product: xtract-is
parent: table
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=table-settings
---

Use the Settings link in the editor to open the Settings dialog as shown in the picture below.

![XIS_Table_Settings](/img/content/settings_xtractis_table.png){:class="img-responsive"}

**Max Rows**<br>
Specifies the maximum number of extracted records. The value 0 stands for unlimited.

**Package Size**<br>
Specifies the number of records to be sent per packet. Which values are optimal in your case depends on your infrastructure. Experience shows that a package size between 15000 and 50000 makes sense for very large amounts of data. The value 0 means that there is no packaging. This can lead to an RFC timeout for large data extracts.

**Custom Function**<br>
The name of the SAP function module used for table extraction. <br>
On table lookup, the table component will automatically check for a suitable function module on the SAP system and enter its name in the _Custom Function_ field. This function module will be used for table extraction. However, you are free to overwrite this field and enter a different function module.<br>
<br>
Following is a list of supported function modules. Some of them may already be available on your SAP system, others you may need to install first, in case you need to use them.
* Z_THEO_READ_TABLE, Z_XTRACT_IS_TABLE_COMPRESSION, Z_XTRACT_IS_TABLE
* RFC_READ_TABLE, /SAPDS/RFC_READ_TABLE, /SAPDS/RFC_READ_TABLE2, /BODS/RFC_READ_TABLE, /BODS/RFC_READ_TABLE2


We recommend using our custom function module [Z_THEO_READ_TABLE](https://help.theobald-software.com/en/xtract-is/sap-customizing/custom-function-module-for-table-extraction). You need to install this function module on your SAP system first.
Please make sure to always use the latest [version](https://kb.theobald-software.com/version-history/xtract-is-version-history) of this function module.
<br>
 
**Automatic String Conversion**<br>
means that the data source converts all strings to NVarChar if SAP is a Unicode system and to VarChar if SAP is not a Unicode system.

**Convert Strings to VarChar**<br>
means that the data source converts all strings to VarChar.

**Convert Strings to NVarChar**<br>
means that the data source converts all strings to NVarChar.
 
**Automatic Date Conversion**<br>
Converts an SAP date (YYYYMMDD) to an SQL date. If an SAP date cannot be converted to a valid SQL date, a default date value must be entered in the text box. Each invalid value is then converted to the date entered. NULL is supported as a value. The SAP date '00000000' is always converted to NULL, in contrast to the date entered.

**Use Field Exits**<br>
Defines whether the conversion routines stored in the Data Dictionary are used for the respective fields. Typical examples are the language key (for example, D in the database, but DE after conversion) or the project number (for example, T000012738GT in the database, T/12738/GT after conversion). After the conversion, the value is always displayed as it would appear in a transaction in the SAP GUI. <br>
This option is only supported in conjunction with the "Data Compression" option.

