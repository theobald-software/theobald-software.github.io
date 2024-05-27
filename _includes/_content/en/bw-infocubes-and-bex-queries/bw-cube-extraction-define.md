
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

### MDX versus BICS

|                                    | MDX                                                                                         | BICS                                        |
|------------------------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------|
| Syntax in lookup for BEx Queries   | `[tech. name of InfoPovider]/[tech. name of BEx Query]` <br /> example: 0SD_C03/0SD_C03_Q0018        | `[tech. name of BEx Query]` <br /> example: 0SD_C03_Q0018   |
| Syntax in lookup for InfoProivders | `$[tech. name of InfoProvoider]`  <br /> example: $0SD_C03                                            | `[tech. name of InfoProvider]` <br /> example: 0SD_C03      |
| Wildcards in lookup                | The BEx-Query setting "Allow External Access to this Query" is required, see [Allow External Access to BW Queries](https://support.theobald-software.com/helpdesk/KB/View/13800-allow-external-access-to-bw-queries). <br /> example: *0SD_C03_Q0018 instead of 0SD_C03/0SD_C03_Q0018                          | not required and therefore not supported           |
| Supported InfoProviders            | InfoCubes, Multiproviders, Composite Providers                                              | InfoCubes, MuliProviders, Composite Providers, DSOs |
| Column names of Key figures           | EnterpriseID                                              | Technical name<br>  If techn. name is empty: name of the base measure.  <br> If name of the base measure is empty: EnterpriseID. <br>**Tip:** In case of duplicate names, change the technical name in the BEx Query Designer. |
| Character limit for dimension members | max. 60 characters      | -      |


### Select Measure (Key Figures), Dimensions and Properties
When an object is selected, in the main main window of the component, there is a tree structure at the left hand-side. 
The tree structure represents the metadata of the Query (or InfoProvider). <br>
![Cube-Details](/img/content/xu/cube-measures.png){:class="img-responsive"}
The first directory contains all the measures (key figures) (1). 
The following directories correspond to dimensions and often contain additional dimension properties (2). <br>

1. Select key figures, dimensions, and properties for the extraction.
2. Within the key figures directory, click the arrow to display the available units. Select a unit, if needed.
3. Click **[Load live preview]** to display the output with data from BW. If a unit is selected (e.g., currency) the corresponding field is displayed in the preview.

{: .box-note }
**Note:** For every selected dimension or property, a key figure and a unit is displayed in the result. 

### Set a Dimension Filter 
 
Follow the steps below to create dimension filters.

{: .box-note }
**Note:** BW queries often have variables defined in SAP to create filter options. To edit existing variables, see [Query Variables](./variables).

1. Right-click a dimension to open the context menu.<br>
![Query Filter](/img/content/cube-query-filter.png){:class="img-responsive"}
2. Click **[Edit Filter]**. The window "Edit Selections" opens. 
3. Add one or more of the following filter types:<br>
a) Click **[Single]** to compare the data to a single specified value.<br>
b) Click **[Range]** to check if the data is (not) withing a specified range of values.<br>{% if page.product != "xtract-is" %}c) Click **[List]** to check if the data is (not) part of a specified list of values. {% endif %}<br>
3. In the **Sign** column (1), select *Include* to add the filtered data to the output or select *Exclude* to remove the filtered data from the output.<br>
{% if page.product == "xtract-is" %} ![selections](/img/content/selections-xis.png){:class="img-responsive"} {% else %}![selections](/img/content/selections.png){:class="img-responsive"} {% endif %}
4. Select an operator in the **Option** column (2). The operator filters data according to the table below.

   | Operator   |      Meaning      |  
   |:---------|:------------- |
   |(not) like pattern |  True if data values do (not) contain to the content of operand 1.|
   |(not) equal to |  True if data is (not)equal to the content of operand 1.|
   |at least |  True if data is greater than or equal to the content of operand 1.|
   |more than |  True if data is greater than the content of operand 1.|
   |at most | True if data is less than or equal to the content of operand 1.|
   |less than | True if data is less than the content of operand 1.|
   |(not) between | True if data values do (not) lie between the values of operand 1 and operand 2. |
5. Enter values or assign {% if page.product == "xtract-is"%}SSIS variables{% else %}[runtime parameters](./edit-runtime-parameters){% endif %} to the selection fields (3). <br>
a) Static values: Enter values directly into the **Low** and **High** input fields. 
If {% if page.product == "xtract-is"%}SSIS variables{% else %}runtime parameters{% endif %} are available, make sure that the ![static-value](/img/content/icons/runtime-parameters-static.png) icon is displayed next to the input field.
Clicking on the icon switches between static and dynamic input values.<br>
b) {% if page.product == "xtract-is"%}SSIS variables:{% else %}Runtime parameters:{% endif %} Click ![static-value](/img/content/icons/runtime-parameters-static.png) to change the input type to dynamic values ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png).
Select an existing {% if page.product == "xtract-is"%}SSIS variable{% else %}runtime parameter{% endif %} from the drop-down list.
6. Click **[OK]** to confirm your input.
7. Click **[Load Preview]** in the main window of the component to check the result of your selection. <br>
If {% if page.product == "xtract-is"%}SSIS variables{% else %}runtime parameters{% endif %} are defined, you are prompted to populate the parameters with actual values.

When filters are applied, the ![filter](/img/content/icons/designer/filter.png) symbol is displayed in the treeview of the cube dimensions.
