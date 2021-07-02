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

### To Open Extraction Settings

1. In the main window of the component click **[Extraction Settings]**. The window “Cube Settings” opens.
![Cube Extraction Settings](/img/content/xfa/xfa_cube_settings.png){:class="img-responsive"}
2. Change the settings, if needed.
3. Click **[OK]** to confirm.

### Cube Settings
The window “Cube Settings” contains two subsections:
- Extraction Settings
- Automatic Slicing Dimension

#### Extraction Settings
**Package Size**<br>
defines how many data records are fetched from SAP in a data package. <br>
Values between 10,000 and 100,000 are practical for large data volumes. <br>
If the value is set to 0, the complete result set is fetched at one time.

{: .box-tip }
**Recommendation**: Always define a package size.

**Row Limit**<br>
Defines the maximum number of rows in the result set. <br>
Defines the maximum number of rows in the result set. <br>
If the value is set to 0, the complete result set is fetched.<br>
For example, when testing, it may be useful to specify a row limit of e.g., 1000 (**not** 0) to perform a test with a small amount of data.<br>

{: .box-note }
**Note:** if you change the row limit value, remember to set it to 0 again to get the complete result set fetched.<br>

#### Automatic Slicing Dimension

This option sets a dimension for an automatic slicing. Slicing is the act of picking a subset of a cube by choosing a single value for one of its dimensions. Automatic slicing means that a loop is executed for each single value of the chosen slicing dimension (characteristic) to extract the result from BW.
Automatic Slicing Dimension allows the extraction of a large amount of data (millions of records) from BW, which was previously not possible due to errors on BW-side (such as buffer overflow and timeout).

{: .box-note }
**Note:** make sure to choose the appropriate dimension for automatic slicing. In some cases, it is advisable to select a dimension with more granular values (e.g. period or week).


