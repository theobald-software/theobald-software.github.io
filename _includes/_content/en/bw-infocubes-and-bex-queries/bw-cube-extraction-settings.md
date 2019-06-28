Click the *Extraction Settings* link to open the settings dialog. 

![XU_BWCube_Settings](/img/content/XU_BWCube_Settings.jpg){:class="img-responsive"}


**Do not treat 'Axis has no rows' as Error** <br> 
This defines whether an error message is given when there is no data to be selected or not.

**Use Description for Column (obsolete)** <br>
This defines that the key figure's description will be used for the column name, instead of the technical name. 
This setting is obsolete. Use the setting **Column Name Style** in the Destination Settings.

**User Formatted Values** <br>
This defines that the values of the key figures are formatted as defined in the Query Designer (e.g. scaling factor and number of decimal places).

**User Real Data for Preview** <br> 
This defines that real extraction data are used in the preview. 

**Measure Unit in Result set** <br>
This displays the units of the key figures.

**Package Size** <br> 
This defines the number of rows that are extracted with one single RFC call. If you want to download more than 50,000 data cells (rows number times columns number), please set this parameter to 10,000 or 20,000 to avoid timeouts.

**Automatic Slicing dimension** <br>
This allows to set a dimension for an automatic slicing. Slicing is the act of picking a subset of a cube by choosing a single value for one of its dimensions.
Automatic slicing means that a loop is executed for each single value of the chosen slicing dimension (characteristic) to extract the result from BW.
This option allows the extraction of a large amount of data (millions of records) from BW, which was previously not possible due to errors on BW-side (such as buffer overflow and timeout).
Be sure to choose the appropriate dimension for automatic slicing. In some cases you should select a dimension with more granular values (e.g. period or week).

**Legacy metadata retrieval** <br>
This is for BWCube extractions that were created with Xtract Kernel version 1.8.49 or earlier. If you need to refresh the BW Cube's metadata please check this flag first. This is necessary as the metadata retrieval has changed after 1.8.49 which does especially affect BEx Queries which contain two structures.


**Use BEX Extraction** <br>
This option has to be used in case of BEx Queries with rows containing structures. In this case the query will be delivered with the same output (structure and data) as in the BEx analyser. 
There are no options to change the selection of the dimension or the keyfigures.

- **Fill Emply Cells** <br>
The empty cells of the dimension will be filled accordingly.

- **Eliminate Result Lines** <br>
To eliminate the result row (e.g. sum).

**Use MDX Extraction** <br>
This provides a text field where you can directly insert an MDX statement. 
After inserting the MDX statement, click on Execute MDX and refresh statement to get the metadata from the BW system. 
Variables can be used either for the whole MDX statement or within the MDX statement. 

**Use new OLAP BAPIs** <br>
The new BAPIs will be used by default if they are available on the BW system to remove the 1,000,000 cell restriction. It requires the following version of the SAP Netweaver BI

- version 7.01 SP2 or higher (7.0 with ehp1 and support package 2 or later)
- version 7.11 with support package 00 or higher (SAPKW71100)