
The following section shows how to use the BW Cube Component. <br>

The BW Cube component can be used to extract MDX or BICS data from BW InfoProviders (e.g., Cubes) directly or from BW Queries. 
The BW Queries can be based on all possible InfoProviders.

![Bw-Cube-Data-Source](/img/content/Bw-Cube-Data-Source.png){:class="img-responsive"}

### Look Up a BW Cube or Query

1. In the main window of the component click the **[Search]** button (magnifying glass symbol). The window “Cube and Query Lookup” opens.
![Look-Up-Cube](/img/content/Look-Up-Cube.png){:class="img-responsive"}
2. In the field Name (1) enter a name of a Query or a BW Cube / InfoProvider. Use wildcards (*), if needed.
3. Define the **Extractor** and **Type** of the object (2).
4. Click **[Search]** (magnifying glass symbol) (3) and select the object of your choice from the displayed list (4).
5. Click **[OK]** (5) to confirm.

{: .box-warning }
**Warning! Invalid action**<br>
 A BW Query must have the attribute *Allow External Access to this Query* switched on in the BEx Query Designer or the BW Modeling Tool to appear in the list.
 For additional details see the knowledge base article [Allow external access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries)..
 
### Selecting Measure (Key Figures), Dimensions and Properties
When an object is selected, in the main main window of the component, there is a tree structure at the left hand-side. 
The tree structure represents the metadata of the Query (or InfoProvider). <br>
![Cube-Details](/img/content/XU-Tableau-BExQuery.png){:class="img-responsive"}
The first directory contains all the measures (key figures) (1). 
The following directories correspond to dimensions and often contain additional dimension properties (2). <br>

1. Select key figures, dimensions, and properties for the extraction.
2. Within the key figures directory, click the arrow to display the available units. Select a unit, if needed.
3. Click **[Load live preview]** to display the output with data from BW. If a unit is selected (e.g., currency) the corresponding field is displayed in the preview.

{: .box-note }
**Note:** For every selected dimension or property, a key figure and a unit is displayed in the result. 

### Setting a Dimension Filter 
1. Right-click a dimension. The button **[Edit Filter]** pops-up.
![Query Filter](/img/content/cube-query-filter.png){:class="img-responsive"}
2. Click **[Edit Filter]**. The window "Member Filter" opens. You can set *Single Values* and / or define *Value Ranges*.
![Query Filter Define](/img/content/xfa/xfa_cube-query-filter-def.png){:class="img-responsive"}
3. Select a single value (3) or  click **[Add]** (4) to add value ranges.
4. Define values for filtering. Dynamic parameters are supported, see [Runtime Parameters](./edit-runtime-parameters). If needed, delete filters using the **[Remove]** button (dustbin symbol).
5. Click **[OK]** to confirm. The "Member Filter" window closes.

When filters are applied, a filter symbol appears in the metadata structure.

{: .box-note }
**Note:** BW queries often have defined variables to create filter options. To edit variables, see [Query Variables](./variables).
 
*****
#### Related Links
- [Allow external access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries).
- [Query Variables](./variables)
