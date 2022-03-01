
The following section shows how to use the BW Cube Component. <br>

The BW Cube component can be used to extract MDX or BICS data from BW InfoProviders (e.g., Cubes) directly or from BW Queries. 
The BW Queries can be based on all possible InfoProviders.

![Bw-Cube-Data-Source](/img/content/Bw-Cube-Data-Source.png){:class="img-responsive"}

### Look Up a BW Cube or Query

1. In the main window of the component click the **[Search]** button (magnifying glass symbol). The window “Cube and Query Lookup” opens.
![Look-Up-Cube](/img/content/xfa/xfa_cube-query-look.png){:class="img-responsive"}
2. In the field Name (1) enter a name of a Query or a BW Cube / InfoProvider. Use wildcards (*), if needed.
3. Define the **Extractor** and **Type** of the object (2).
- **Extractor** defines, if data is extracted using the OLAP BAPI Interface (MADX) or the native BICS Interface. BICS is still in beta phase.
- **Type** specifies if a BEx-Query or an InfoProvider is looked up.
4. Click **[Search]** (magnifying glass symbol) (3) and select the object of your choice from the displayed list (4).
5. Click **[OK]** (5) to confirm.

{: .box-note }
**Note:** Use **[Refresh Metadata]** to renew metadata. 
This is necessary if a data source has been adjusted in SAP, another source system has been connected, or the source system has been updated.

{: .box-warning }
**Warning! Invalid action**<br>
 A BW Query must have the attribute *Allow External Access to this Query* switched on in the BEx Query Designer or the BW Modeling Tool to appear in the list.
 For additional details see the knowledge base article [Allow external access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries)..
 
#### MDX versus BICS (beta)

{: .box-note }
**Note:** The BICS component is still in beta phase. Contact [Theobald Support](https://support.theobald-software.com) in case of errors.

|                                    | MDX                                                                                         | BICS (beta)                                        |
|------------------------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------|
| Syntax in lookup for BEx Queries   | `[tech. name of InfoPovider]/[tech. name of BEx Query]` <br /> example: 0SD_C03/0SD_C03_Q0018        | `[tech. name of BEx Query]` <br /> example: 0SD_C03_Q0018   |
| Syntax in lookup for InfoProivders | `$[tech. name of InfoProvoider]`  <br /> example: $0SD_C03                                            | `[tech. name of InfoProvider]` <br /> example: 0SD_C03      |
| Wildcards in lookup                | supported<br /> example: *0SD_C03_Q0018 instead of 0SD_C03/0SD_C03_Q0018                          | not required and therefore not supported           |
| Supported InfoProviders            | InfoCubes, Multiproviders, Composite Providers                                              | InfoCubes, MuliProviders, Composite Providers, DSOs |
| Setting in BEx Query               | Setting "Allow External Access to this Query" is required. If not set, BEx Query won't appear in the lookup, see [Allow External Access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries). | not required                                       |


### Selecting Measure (Key Figures), Dimensions and Properties
When an object is selected, in the main main window of the component, there is a tree structure at the left hand-side. 
The tree structure represents the metadata of the Query (or InfoProvider). <br>
![Cube-Details](/img/content/xu/cube-measures.png){:class="img-responsive"}
The first directory contains all the measures (key figures) (6). 
The following directories correspond to dimensions and often contain additional dimension properties (7). <br>

1. Select key figures, dimensions, and properties for the extraction.
2. Within the key figures directory, click the arrow to display the available units. Select a unit, if needed.
3. Click **[Load live preview]** to display the output with data from BW. If a unit is selected (e.g., currency) the corresponding field is displayed in the preview.

{: .box-note }
**Note:** For every selected dimension or property, a key figure and a unit is displayed in the result. 

### Setting a Dimension Filter 
1. Right-click a dimension. The button **[Edit Filter]** pops-up.
![Query Filter](/img/content/cube-query-filter.png){:class="img-responsive"}
2. Click **[Edit Filter]**. The window "Member Filter" opens. You can set *Single Values*, define *Value Ranges* or select a *List Parameter*.
![Query Filter Define](/img/content/xfa/xfa_cube-query-filter-def.png){:class="img-responsive"}
3. Select a single value (8) or click **[Add]** (9) to add value ranges.
4. Define values for filtering. Dynamic parameters are supported, see [Runtime Parameters](./edit-runtime-parameters). To use a dynamic list of values, select a *List Parameter* from the drop-down-menu (10). If needed, delete filters using the **[Remove]** button (dustbin symbol).
5. Click **[OK]** to confirm. The "Member Filter" window closes.

When filters are applied, a filter symbol appears in the metadata structure.

{: .box-note }
**Note:** BW queries often have defined variables to create filter options. To edit variables, see [Query Variables](./variables).
 
*****
#### Related Links
- [Allow external access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries).
- [Query Variables](./variables)
