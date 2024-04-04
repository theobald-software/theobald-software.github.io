
This component can be used to extract MDX or BICS data from BW InfoProviders (e.g., Cubes) directly or from BW Queries. 
The BW Queries can be based on all possible InfoProviders.


### Look Up a BW Cube or Query

1. In the main window of the component click the **[Search]** button ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon). The window “Cube and Query Lookup” opens.
![Bw-Cube-Data-Source](/img/content/Bw-Cube-Data-Source.png){:class="img-responsive"}
2. Select the *Extractor*, *Datasource Type* and *Extraction Settings* of the object (1).<br>
![Look-Up-Cube](/img/content/xfa/xfa_cube-query-look.png){:class="img-responsive"} 

   |------------------------------------|---------------------------------------------------------------------------------------------|
   | *Extractor*   | defines if data is extracted using the OLAP BAPI Interface (MDX) or the native BICS Interface. BICS can only be used in combination with the [NetWeaver RFC protocol](../introduction/sap-connection). |
   | *Datasource Type* | defines if the look up searches for a BEx Query or an InfoProvider.  | 
   | *Extraction Settings*  | only available for the MDX extractor. Use **Only Structure** if your BWCube extraction was created in an older software version, see [Extraction Settings](./bw-cube-extraction-settings#extraction-settings) for more information. | 

3. Enter the name of a Query or a BW Cube / InfoProvider in the search bar (2). Use wildcards (*), if needed.
4. Click  ![magnifying-glass](/img/content/icons/magnifying-glass.png) and select the object of your choice from the displayed list (3).<br>
Alternatively click **[Direct Load]** to skip the lookup and load the BW Cube / InfoProvider directly. **[Direct Load]** only works if the full name is entered correctly in the search bar.
5. Click **[OK]** to confirm your selection.

The application now returns to the main window of the component.


{: .box-note }
**Note:** Click **[Refresh Metadata]** to renew metadata. 
This is necessary if a data source has been adjusted in SAP, another source system has been connected, or the source system has been updated.

{: .box-warning }
**Warning! Invalid action**<br>
 A BW Query must have the attribute *Allow External Access to this Query* switched on in the BEx Query Designer or the BW Modeling Tool to appear in the list.
 For additional details see the knowledge base article [Allow external access to BW Queries](https://support.theobald-software.com/helpdesk/KB/View/13800-allow-external-access-to-bw-queries). 

### MDX versus BICS (beta)

|                                    | MDX                                                                                         | BICS (beta)                                        |
|------------------------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------|
| Syntax in lookup for BEx Queries   | `[tech. name of InfoPovider]/[tech. name of BEx Query]` <br /> example: 0SD_C03/0SD_C03_Q0018        | `[tech. name of BEx Query]` <br /> example: 0SD_C03_Q0018   |
| Syntax in lookup for InfoProivders | `$[tech. name of InfoProvoider]`  <br /> example: $0SD_C03                                            | `[tech. name of InfoProvider]` <br /> example: 0SD_C03      |
| Wildcards in lookup                | The BEx-Query setting "Allow External Access to this Query" is required, see [Allow External Access to BW Queries](https://support.theobald-software.com/helpdesk/KB/View/13800-allow-external-access-to-bw-queries). <br /> example: *0SD_C03_Q0018 instead of 0SD_C03/0SD_C03_Q0018                          | not required and therefore not supported           |
| Supported InfoProviders            | InfoCubes, Multiproviders, Composite Providers                                              | InfoCubes, MuliProviders, Composite Providers, DSOs |
| Column names of Key figures           | EnterpriseID                                              | Technical name<br>  If techn. name is empty: name of the base measure.  <br> If name of the base measure is empty: EnterpriseID. <br>**Tip:** In case of duplicate names, change the technical name in the BEx Query Designer. |
| Character limit for dimension members | max. 60 characters      | -      |


### Selecting Measure (Key Figures), Dimensions and Properties
When an object is selected, in the main main window of the component, there is a tree structure at the left hand-side. 
The tree structure represents the metadata of the Query (or InfoProvider). <br>
![Cube-Details](/img/content/xu/cube-measures.png){:class="img-responsive"}
The first directory contains all the measures (key figures) (4). 
The following directories correspond to dimensions and often contain additional dimension properties (5). <br>

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
3. Select a single value (6) or click **[Add]** (7) to add value ranges.
4. Define values for filtering. Dynamic parameters are supported, see [Runtime Parameters](./edit-runtime-parameters). <br>
To use a dynamic list of values, select a *List Parameter* from the drop-down-menu (8). If needed, delete filters using the ![dustbin](/img/content/icons/trashbin.png) button.
5. Click **[OK]** to confirm. The "Member Filter" window closes.

When filters are applied, a filter symbol appears in the metadata structure.
