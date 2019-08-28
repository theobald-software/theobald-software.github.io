---
ref: xu-table-05
layout: page
title: Extraction Settings 
description: Extraction Settings
product: xtract-universal
parent: table
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=extraction-settings
---

An extraction has two types of settings. The *Extraction Settings* include settings that affect only the respective extraction type, while the *General Settings* are the same for all extraction types and determine common settings. You can find information about *General Settings* in chapter [General Settings](../advanced-techniques/general-settings).

![Extraction-Settings-01](/img/content/Extraction-Settings-01.png){:class="img-responsive"} 

In the following chapter we explain Extraction Settings.    

![Table-Extraction-Settings](/img/content/Table-Extraction-Settings.jpg){:class="img-responsive"}

**Row limit**<br>
Maximum numbers of rows to be extracted. *0* means no limit.

**Rows per package**<br>
The number of rows that are extracted per data package.

**Use conversion routines**<br>
Defines whether SAP conversion routines should be used.<br>
Typical examples are the language key (e.g. D in the database, but DE after conversion) or the project number (e.g. T000012738GT in the database, but T/12738/GT after conversion).<br>
After conversion, the value is always displayed, as it would appear in the SAP GUI.<br>
This option is only supported with the function module Z_THEO_READ_TABLE and Z_XTRACT_IS_TABLE_COMPRESSION. 

**Function module**<br>
This field contains the name of the SAP function module used for data extraction. This field will be automatically populated depending on the function modules available on the SAP system. We recommend using our custom function module Z_THEO_READ_TABLE [SAP Customizing](../sap-customizing/custom-function-module-for-table-extraction).
