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

![XIS_Table_Settings](/img/content/Table-Settings.png){:class="img-responsive"}

**Row Limit**<br>
Specifies the maximum number of extracted records. The value 0 extracts the complete table.

**Package Size**<br>
Specifies the number of records to be sent per package. There is no hard and fast rule as to which value is optimal. That is something you need to find out for your environment. Experience shows that a package size between 15000 and 50000 makes sense for very large amounts of data. The value 0 means that there is no packaging. The whole table is extracted in one single package. This can lead to an RFC timeout for large data extracts.

**Function Module**<br>
The name of the SAP function module used for table extraction. <br>
On table lookup, the table component will automatically check for a suitable function module on the SAP system. This function module will be used for table extraction. However, you are free to overwrite this field and enter a different function module.<br>
<br>
Following is a list of supported function modules. Some of them may already be available on your SAP system, others you may need to install first, in case you need to use them.
* Z_THEO_READ_TABLE, Z_AW_RFC_READ_TABLE, Z_XTRACT_IS_TABLE
* RFC_READ_TABLE, /SAPDS/RFC_READ_TABLE, /SAPDS/RFC_READ_TABLE2, /BODS/RFC_READ_TABLE, /BODS/RFC_READ_TABLE2
* Z_XTRACT_IS_TABLE_COMPRESSION  (*only for legacy table components*)


We recommend using our custom function module [Z_THEO_READ_TABLE](https://help.theobald-software.com/en/xtract-is/sap-customizing/custom-function-module-for-table-extraction). You need to install this function module on your SAP system first.
Please make sure to always use the latest [version](https://kb.theobald-software.com/version-history/xtract-is-version-history) of this function module.
<br>
 


