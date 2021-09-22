---
ref: xfa-bw-cube-01
layout: page
title: Defining a BW Cube Extraction
description: Using BW Cube component
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 1
lang: en_GB
---
The following section shows how to use the Xtract Cube component. <br>

### Look up a BEx Query or BW InfoProvider
1. In the main window of the component click the **[Search]** button (magnifying glass symbol). The window “Cube and Query Lookup” opens.
![Cube Query search](/img/content/xfa/xfa_cube-query-look.png){:class="img-responsive"}
2. In the field Name (1) enter a name of a BEx Query or InfoProvider. Use wildcards (*), if needed.
3.  Define the **Extractor** and **Type** of the object (2).<br>
- **Extractor** defines if data is extracted using SAP's OLAP BAPI interface (MDX) or SAP's native BICS interface. BICS is still in beta phase.
- **Type** specifies if the name entered in 2. is a BEx Query or InfoProvider. (2)
4. Click **[Search]** (magnifying glass icon)(3).
5. Select (4) an entry from the list and click **[OK]** (5) to confirm. <br>
The metadata (measures, dimensions, properties, BEx variables) of the selected BEx Query or InfoProvider is fetched from SAP.

#### MDX versus BICS (beta)

{: .box-note }
**Note:** The BICS component is still in beta phase. Contact [Theobald Support](mailto:support@theobald-software.com) in case of errors.

|                                    | MDX                                                                                         | BICS (beta)                                        |
|------------------------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------|
| Syntax in lookup for BEx Queries   | `[tech. name of InfoPovider]/[tech. name of BEx Query]` <br /> example: 0SD_C03/0SD_C03_Q0018        | `[tech. name of BEx Query]` <br /> example: 0SD_C03_Q0018   |
| Syntax in lookup for InfoProivders | `$[tech. name of InfoProvoider]`  <br /> example: $0SD_C03                                            | `[tech. name of InfoProvider]` <br /> example: 0SD_C03      |
| Wildcards in lookup                | supported<br /> example: *0SD_C03_Q0018 instead of 0SD_C03/0SD_C03_Q0018                          | not required and therefore not supported           |
| Supported InfoProviders            | InfoCubes, Multiproviders, Composite Providers                                              | InfoCubes, MuliProviders, Composite Providers, DSOs |
| Setting in BEx Query               | Setting "Allow External Access to this Query" is required. If not set, BEx Query won't appear in the lookup, see [Allow External Access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries). | not required                                       |


 
### Selecting Measures (Key Figures), Dimensions and Properties
After completing the steps described in [Look up a BEx Query or BW InfoProvider](#look-up-a-bex-query-or-bw-infoprovider), the BEx Query's/InfoProvider's key figures, dimensions and properties are displayed in the tree structure at the left hand-side of the window. </br>

![Query Structure](/img/content/xfa/xfa_cube-query-select.png){:class="img-responsive"}
The first directory contains all the measures (key figures) (6). 
The following directories are the dimensions and often contain additional dimension properties (7). <br>

1. Select key figures, dimensions and properties for the extraction. In BICS mode, dimensions that are placed on rows in the BEx Query definition, are preselected and can't be deselected.
2. In MDX mode, expand the key figures to display available currency/unit fields. Select a currency/unit field if needed in the output. This is not available in BICS mode.
3. If applicable, fill any mandatory BEx variables with values.
4. Click **[Load live preview]** to display the output with data from BW. If a unit is selected (e.g., currency) the corresponding field is displayed in the preview.

{: .box-note }
**Note:** Select at least one dimension and key figure for the preview to work.

#### Column name style

The following display options for the column names are available: 

![Column name style](/img/content/xfa/xfa_cube_column_name_style.png)

### Setting a Dimension Filter 
1. Right-click a dimension. The button **[Edit Filter]** pops-up.
![Query Filter](/img/content/xfa/xfa_cube-query-filter.png){:class="img-responsive"}
2. Click **[Edit Filter]**. The window "Member Filter" opens. In MDX mode the first 500,000 dimension members are loaded. In BICS mode 1,001 members are loaded. You can set *Single Values* and / or define *Value Ranges*.
![Query Filter Define](/img/content/xfa/xfa_cube-query-filter-def.png){:class="img-responsive"}
3. Select a single value (8) and / or  click **[Add]** (9) to add value ranges. 
4. Define values for filtering. Dynamic parameters are supported, see [Runtime Parameters](./edit-runtime-parameters). If needed, delete filters using the **[Remove]** button (dustbin symbol)(10).
5. Click **[OK]** to confirm. The "Member Filter" window closes.

When a filter is set, a funnel symbol appears next to the dimension the filter is applied on.

{: .box-note }
**Note:** BEx queries often use BEx variables to set a filter before query execution. To edit BEx variables, see [Variables](./bw-cube-variables).

****
#### Related Links
- [Allow external access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries).
- [Variables](./bw-cube-variables)
