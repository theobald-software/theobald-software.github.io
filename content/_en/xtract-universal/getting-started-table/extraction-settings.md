---
ref: xu-getting-started-table-06
layout: page
title: Extraction Settings 
description: Extraction Settings
product: xtract-universal
parent: getting-started-table
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=extraction-settings
---

An extraction has two types of settings. The *Extraction Settings* include settings that affect only the respective extraction type, while the *General Settings* are the same for all extraction types and determine common settings. You can find information about General Settings in chapter [General Settings](../advanced-techniques/general-settings).

![Table-Form-Extraction-Settings-Button-Location](/img/content/Table-Form-Extraction-Settings-Button-Location.jpg){:class="img-responsive"} 

In the following chapter we explain *Extraction Settings*.

![Table-Extraction-Settings](/img/content/Table-Extraction-Settings.jpg){:class="img-responsive"}

**Row limit**<br>
Maximum numbers of rows to be extracted. 0 is unlimited.

**Rows per package**<br>
The number of rows that are extracted with one single RFC call. If you want to download more than 20,000 data rows, please set this parameter to a value between 15,000 and 50,000 to avoid timeouts.

**None**<br>
The default RFC_READ_TABLE will be used to extract the table data. No custom function module is used.

**Compression**<br>
The compression function module Z_XTRACT_IS_TABLE_COMPRESSION is used to extract table data and avoid SAP restrictions.

**Use conversion routines**<br>
defines wether the conversion routines should be used.
Typical examples are the language key (e.g. D in the database, but DE after conversion)
or the project number (e.g. T000012738GT in the database, but T/12738/GT after conversion).
After conversion, the value is always displayed, as it would appear in the SAP GUI.
This option is only supported with the function module Z_XTRACT_IS_TABLE_COMPRESSION. 

**Background extraction (obsolete)**<br>
Don't use this option. It is obsolete. Please use Compression option instead.
The background function module Z_XTRACT_IS_TABLE_EX is used to extract table data in background and avoid SAP restrictions. 

**Function module**<br>
This field contains the name of the function module used for the data extraction.
