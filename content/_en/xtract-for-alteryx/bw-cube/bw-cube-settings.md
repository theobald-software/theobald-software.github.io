---
ref: xfa-bw-cube-03
layout: page
title: BW Cube Settings
description: BW Cube Settings
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 3
lang: en_GB
---

Click on the "Extraction Settings" button to find and change the settings:

**Package Size**<br>
defines how many data records are to be fetched from SAP in a data package. <br>
Values between 10,000 and 100,000 are useful, but only if the data volume is large enough. <br>
If the value is 0, then the complete result set is fetched in one go.

**Row Limit**<br>
defines the maximum number of rows in the result set. <br>
If the value is 0, then the complete result set is fetched.<br>
For example, when testing, it may be useful to specify something other than 0 (e.g. 1000) here in order to test first with little data.<br>
If you change the value, remember to set it to 0 again.<br>

**Automatic Slicing dimension**
This allows to set a dimension for an automatic slicing. Slicing is the act of picking a subset of a cube by choosing a single value for one of its dimensions. Automatic slicing means that a loop is executed for each single value of the chosen slicing dimension (characteristic) to extract the result from BW. This option allows the extraction of a large amount of data (millions of records) from BW, which was previously not possible due to errors on BW-side (such as buffer overflow and timeout). Be sure to choose the appropriate dimension for automatic slicing. In some cases you should select a dimension with more granular values (e.g. period or week).

**Column Name Style**<br>
defines the logic for naming the columns: 
- Code names the columns with the technical name of the original element. 
- CodeAndText with the technical name and the plain text 
- TextAndCode with Larschrift and then the technical name

![Designer](/img/content/xfa/bwcube04.png){:class="img-responsive"}


