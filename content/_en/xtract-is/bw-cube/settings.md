---
ref: xi-bw-cube-04
layout: page
title: Settings
description: Settings
product: xtract-is
parent: bw-cube
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=bw-cube-settings
---
Click the *Settings* link to open the settings dialog.

![XIS_BWCube_Settings](/img/content/XIS_BWCube_Settings.png){:class="img-responsive" }

### String Conversion
**Automatic String Conversion**<br>
All strings are converted into VarChar strings if the source system is non-Unicode, and all strings are converted into NVarChar if the source system is Unicode.

**Convert Strings to VarChar**<br>
All strings are converted to VarChar regardless if the source system is Unicode or not.

**Convert Strings to NVarChar**<br>
All strings are converted to NVarChar regardless if the source system is Unicode or not.


### Misc
**Do not tread 'Axis has no rows' as Error**<br>
Defines whether an error message is given when there is no data to be selected.

**Use Description for Pipeline**<br>
Defines that the name of the pipeline element is given by the column description and not by the technical name.

**User Formatted Values**<br>
Defines that the valuie of the key data will be extracted as defined in the query designer (e.g. scaling factor and decimal places).
Debug Details
Creates an detailed output of the single steps in the SSIS-protocol.

**Debug Details**<br>
Generates more detailed log entries to enable easier error detection.

**Measure Unit in Resultset**<br>
Displays the units of the key figures.

**Package Size**<br>
Setting the packkage size to a value larger than zero cause that the query result will be splitted into packages with the defined size.

**Automatic Slicing dimension**<br>
enables to set a dimension for an automatic slicing.
Automatic slicing means that a loop is executed for each value of the selected dimension (characteristic) to extract the result from BW.
This option allows the extraction of a large amount of data (several million records) from BW via the MDX interface  despite the limitation (memory overflow) on the BW side.
Be sure to select the appropriate dimension for automatic slicing. In some cases you may want to select an dimension with granular values (e.g. period or week)

**Legacy metadata retrieval**<br>
This is for BWCube extractions that were created with  Xtract IS version 2.5.17 or smaller. If you need to refresh the BW Cube's metadata please check this flag first. This is necessary as the metadata retrieval has changed after 2.5.17 which does especially affect BEx Queries which contain two structures.


### Extraction Type
**Regular**<br>
extracts the data using the MDX interface.

**BEX**<br>
This option has to be used in case of BEx Queries with rows containing structures. In this case the query will be delivered with the same output (structure and data) as in the BEx analyser. 
There are no options to change the selection of the dimension or the keyfigures.

Using the BEX Extraction mode you can even extract a Query View. After selecting the BEx query, set the query view name in the field *Query View.*

![BWCube-Settings-02](/img/content/BWCube-Settings-02.png){:class="img-responsive" }

**Fill Empty Cells**
The empty cells of the dimension will be filled accordingly.

**Eliminate Result Lines**
To eliminate the result row (e.g. sum).


**MDX**
The main form provides a text field where you can directly insert an MDX statement. 

![BWCube-Settings-03](/img/content/BWCube-Settings-03.png){:class="img-responsive" }

After inserting the MDX statement, click *Execute MDX and refresh statement* to get the metadata from the BW system. 

![BWCube-Settings-04](/img/content/BWCube-Settings-04.png){:class="img-responsive" }

Variables can be used either for the whole MDX statement or within the MDX statement. 

**Use new OLAP BAPIs**<br>
Those BAPIs will be used by default if they are available on the BW system to remove the 1,000,000 cell restriction. It requires the following version of the SAP Netweaver BI
- version 7.01 SP2 or higher (7.0 with ehp1 and support package 2 or later)
- version 7.11 with support package 00 or higher (SAPKW71100)

**Decimal Separator (deprecated)**<br>
If the packaging is enabled (Package Size > 0)  the component has to find out the correct decimal place conversion for the current SAP user. In case of security reasons you can declare a decimal separator so the component will not look for the settings and use the defined separator. Normally you will use a dot (.) or a comma (,).