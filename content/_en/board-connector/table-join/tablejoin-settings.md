---
ref: bc-table-join-07
layout: page
title: Settings
description: Settings
product: board-connector
parent: table-join
permalink: /:collection/:path
weight: 7
lang: en_GB
---

In the following chapter we explain Extraction Settings.     

![tj-xu-settings](/img/content/tj-xu-settings.png){:class="img-responsive"}


**Row limit**<br>
Maximum numbers of rows to be extracted. 0 is unlimited.

**Rows per package**<br>
The number of rows that are extracted with one single RFC call. If you want to download more than 20,000 data rows, please set this parameter to a value between 15,000 and 50,000 to avoid timeouts.<br>
ATTENTION: When using a Left Outer Join, no packaging is possible. This is a restriction of SAP OpenSQL, which does not allow fields from the right table to be part of SQL Where clause.

**Function module**<br>
This field contains the name of the function module used for the data extraction.

**Use conversion routines**<br>
defines wether the conversion routines should be used.<br>
Typical examples are the language key (e.g. D in the database, but DE after conversion)
or the project number (e.g. T000012738GT in the database, but T/12738/GT after conversion).<br>
After conversion, the value is always displayed, as it would appear in the SAP GUI.