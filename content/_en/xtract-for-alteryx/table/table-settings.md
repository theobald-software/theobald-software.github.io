---
ref: xfa-table-03
layout: page
title: Table Settings
description: Table Settings
product: xtract-for-alteryx
parent: table
permalink: /:collection/:path
weight: 3
lang: en_GB
---

The "Extraction Settings" button can be used to make settings for the behavior:

**Package Size**<br>
defines how many data records are fetched from SAP in an data package. <br>
Values between 10,000 and 100,000 are useful, but only if the data volume is large enough. <br>
If the value is 0, then the complete result set is fetched in one go.

**Max Rows**<br>
defines the maximum number of rows in the result set. <br>
If the value is 0, then the complete result set is fetched.<br>
For example, when testing, it may be useful to specify something other than 0 (e.g. 1000) here in order to test first with little data.<br>
If you change the value, remember to set it to 0 again.<br>

**Column Name Style**<br>
defines the logic for naming the columns: 
- Code names the columns with the technical name of the original element. 
- CodeAndText with the technical name and the plain text 
- TextAndCode with Larschrift and then the technical name

**Function Module**<br>
The function modules existing in your SAP System that can be used for data extraction are listed here. <br>
If you have installed our supplied function module (Z_THEO_READ_TABLE), it is selected automatically. <br>
Be sure that the user has the access rights to execute the function module selected.

![Designer](/img/content/xfa/table/xfa-table-settings.png){:class="img-responsive"}


