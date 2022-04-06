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
The BW Cube component can be used to extract data from BW InfoProviders (e.g., Cubes) directly or from BW Queries. The BW Queries, in this case, can be based on all possible InfoProviders. <br>
A common approach for this the extraction is to build the query that meets the business requirements.

### To Search for a BW Cube or Query
1. In the main window of the component navigate to subsection **Cube or Query** and click **Search** (magnifying glass symbol). The window “Cube or Query Lookup” opens.
![Cube Query search](/img/content/xfa/xfa_cube-query-look.png){:class="img-responsive"}
2. In the field **Name** (1) enter a name of a Query or a BW Cube / InfoProvider. Use wildcards (*), if needed. 
3. Define the type of the searched object in the field **Type** (2).
4. Click **Search** (magnifying glass symbol)(3).
5. Select (4) the object from the list and click **[OK]** (5) to confirm.

### Selecting Measure (Key Figures), Dimensions and Properties
When an object is selected, in the main main window of the component, there is a tree structure at the left hand-side. The tree structure represents the metadata of the Query (or InfoProvider). <br>
![Query Structure](/img/content/xfa/xfa_cube-query-select.png){:class="img-responsive"}
The first directory contains all the measures (key figures) (1). The following directories correspond to dimensions and often contain additional dimension properties (2). <br>
1. Select key figures, dimensions, and properties for the extraction.
2. Within the key figures directory, click the arrow to open the available units. Select a unit, if needed.
3. Click **[Load live preview]** to display the output with data from BW. If a unit is selected (e.g., currency) the corresponding field is displayed in the preview.

{: .box-note }
**Note:** For every selected dimension or property, a key figure and a unit is displayed in the result. 

### Setting a Dimension Filter 
1. Right-click a dimension. The button **[Edit Filter]** pops-up.
![Query Filter](/img/content/xfa/xfa_cube-query-filter.png){:class="img-responsive"}
2. Click **[Edit Filter]**. The window "Member Filter" opens. You can set the *Single Values* (left hand-side) and / or define the *Value Ranges* (right hand-side).
![Query Filter Define](/img/content/xfa/xfa_cube-query-filter-def.png){:class="img-responsive"}
3. Select a single value (3) or  click **[Add]** (4) to add value ranges.
4. Define the values for filtering. Delete the filters (dustbin symbol), if needed.
5. Click **[OK]** to confirm. The "Member Filter" window closes.
6. If a filter is defined, a filter symbol appears in the metadata structure.

****
#### Related Links
- [Query Variables](./bw-cube-variables)
