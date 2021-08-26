---
ref: xfa-bw-cube-04
layout: page
title: Extraction Settings
description: BW Cube Settings
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 4
lang: en_GB
---

Click the button **[Extraction Settings]** in the main window of the component to open the “Cube Settings” window.
![XU_BWCube_Settings](/img/content/XU_BWCube_Settings1.png){:class="img-responsive"}

### Extraction Settings

**Package Size** <br> 
Defines how many data records are fetched from SAP in a data package.
Values between 10,000 and 100,000 are practical for large data volumes.
If the value is set to 0, the complete result set is fetched at one time.

{: .box-tip }
**Recommendation**: Always define a package size.

**Row Limit** <br>
Defines the maximum number of rows in the result set.
If the value is set to 0, the complete result set is fetched.

You can use **Row Limit** to perform tests with a small amount of data by entering a row limit of e.g., 1000 (not 0).

**Formatted Values** <br>
If this option is active, the values of key figures are formatted as defined in the Query Designer e.g., scaling factor and number of decimal places.


### Automatic Slicing Dimension

This option sets a dimension for an automatic slicing. 
Slicing is the act of picking a subset of a cube by choosing a single value for one of its dimensions. 
Automatic slicing means that a loop is executed for each single value of the chosen slicing dimension (characteristic) to extract the result from BW. 

**Automatic Slicing Dimension** allows the extraction of a large amount of data (millions of records) from BW.

### Legacy settings

**Description for Columns (deprecated)** <br>
If this option is active, the key figure's description will be used for the column name, instead of the technical name. 
