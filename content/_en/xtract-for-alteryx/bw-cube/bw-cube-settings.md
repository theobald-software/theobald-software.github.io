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

{: .box-note }
**Note:**  The following settings are only available in MDX mode.

**Package Size** <br> 
Defines how many data records are fetched from SAP in a data package.
Values between 10,000 and 100,000 are practical for large data volumes.
If the value is set to 0, the complete result set is fetched at one time.

{: .box-tip }
**Recommendation**: Always define a package size.

**Row Limit** <br>
Defines the maximum number of rows in the result set.
If the value is set to 0, the complete result set is fetched.

Enter a value, e.g. 1,000, for **Row Limit** to perform tests by extracting only a small amount of data.

**Formatted Values** <br>
If this option is active, the values of key figures are formatted as defined in the BEx Query Designer e.g., scaling factor and number of decimal places.


### Automatic Slicing Dimension

This option sets a dimension that is used for automatic slicing. 
Automatic slicing executes multiple smaller select statements instead of a single select statement. 
Slicing happens based on the members of the selected slicing dimension. 

In a first step, all members of the selected slicing dimension are determined, taking into account filters and BEx variables. In the second step, the Xtract Cube components sequentially iterates through the list of determined members, each time adding the current member as a filter to the select statement.

This way, out-of-memory-issues on the SAP side can be avoided.

{: .box-note }
**Note:**  Set an Automatic Slicing Dimension only for extractions that would otherwise run into out-of-memory issues on the SAP side. A suitable Slicing Dimension would contain an average amount of members e.g., 0COMP_CODE or 0CALMONTH.

