The DeltaQ component is primarily used for delta extractions.
This means that only recently added or changed data is extracted, instead of a full load.
The data that is extracted is defined by the **Update Mode** setting of the DeltaQ component.

### Update Modes

In the main window of the component select an **Update Mode** from the drop-down menu.
![Update-Mode2](/img/content/deltaq-extraction-seetings.png ){:class="img-responsive"}

**Update Mode** offers the following options:

| Letter |  Mode   | Description |
| :------: |:--- | :--- |
| F | Full  | Extracts all data that match the set selection criteria.|
| D | Delta Update | Only extracts data added or changed on the SAP system since the last delta request. [Initialize the delta process](#initializing-a-delta-process) before running a delta update. To prevent errors, aborts and gaps in your data during a delta run, run the next extraction in the update mode **Repeat**. |
| C | Delta Initialization | Extracts all data as full load and initializes the delta process. When re-initializing a delta process, first delete any existing Inits by clicking **[Maintenance]** in the [extraction settings](./extraction-settings).|
| R | Repeat  | Repeats the last delta run and updates and any delta data accumulated since the last run. Deletes any data from the last (unsuccessful) delta update before running a repeat. You can run a repeat multiple times.|
| S | Delta Init (without data)   | Initializes the delta process without extracting any data from the SAP DataSources. The result of the *Delta Init* is a **[Maintenance]** on the SAP side. When re-initializing a delta process, first delete any existing Inits by clicking **[Maintenance]** in the [extraction settings](./extraction-settings).|
| I | Non-cumulative Init    |  Relevant for DataSources like *2LIS_03_BX*.  |
| A | Activate (don't extract)  | Activates a DataSource similar to clicking **[Activate]**, but it is more practical when activating DataSources in a batch. No data is extracted. |
| V | **[Xtract IS only]** SSIS Variable; Deprecated, see [Variables](../bwcube/variables) |  If *V* is selected, a variable name needs to be entered in the [DeltaQ settings](https://help.theobald-software.com/en/xtract-is/deltaq/settings). The same SSIS variable needs to be created in SSIS and assigned a value. The following values are possible: F, D, C, R, S, I and A. |

{% if page.product == "xtract-universal" %}
**Update mode** can be set dynamically at runtime using the **updateType** extraction parameter, see [Run an Extraction](../execute-and-automate-extractions/extraction-parameters#run-an-extraction).<br>
![Update-Mode1](/img/content/updatetype_runtime_parameter.png ){:class="img-responsive"}
{% elsif page.product == "xtract-is" %}
**Update mode** can be set dynamically at runtime using SSIS variables, see
{% endif %}

For more information about when to use which update mode, see [Initializing a Delta Process](#initializing-a-delta-process)


<!---
The following content was moved here from the page "Delta". 
-->

### Initializing a Delta Process

To start a delta process, delta must be initialized first. 
The following delta process shows when to use which [Update Mode](./update-mode). 

#### Step 1: Delta Initialization [C]
This mode requests all data that meets the selection criteria.

Set **Update Mode** to *Delta Initialization* and run the extraction.<br>
The initialization selections are copied to load the delta records. You can now use *Delta Update*.

{: .box-note } 
**Note:** When re-initializing a delta process, first delete any existing Inits (initialization requests) by clicking **[Maintenance]** in the [extraction settings](./extraction-Settings).

#### Alternative Step 1: Delta Init (without data) [S]
This mode is similar to *Delta Initialisation*, but no data is extracted from the SAP DataSource.

Set **Update Mode** to *Delta Init (without data)* and run the extraction.<br>
You can now use *Delta Update*.

{: .box-note } 
**Note:** When re-initializing a delta process, first delete any existing Inits (initialization requests) by clicking **[Maintenance]** in the [extraction settings](./extraction-Settings).

#### Step 2: Delta Update [D]
*Delta Update* only extracts data added or changed on the SAP system since the last delta request.

Run the extraction with *Delta Initialization* or *Delta Init (without data)* once before setting the **Update Mode** to *Delta Update*.

{: .box-note } 
**Note:** To prevent errors, aborts and gaps run the next extraction in the update mode *Repeat*.

#### Optional: Repeat [R]
This mode repeats the last delta run and updates all data accumulated since the last run. 
If the last run was unsuccessful, all data from the last delta update are deleted before a new run is started.<br>
A **Repeat** can be started several times.

Many DataSources have the field ROCANCEL. This field defines if records are added or overwritten depending on the delta process type of the DataSource. 
It defines how a record is updated in the delta process.<br>
In an ABR mode: <br>
* *blank* returns an after image,<br>
* *'X'*  returns a before image,<br>
* *'D'* deletes the record and<br>
* *'R'* returns a reverse image.


#### Optional: Delta Queue - RSA7
Once delta is activated, you can view the queued datasets in the Delta queue in SAP transaction RSA7.<br>
If there is no new data to be transferred, a corresponding protocol message is displayed and the data pipeline is empty.

{: .box-note } 
**Note:** Before initiating the next update, make sure that a delta update has been executed successfully. Running a new delta update removes the last one. 


*****
#### Releated Links
- [Delta Transfer to BI](https://help.sap.com/doc/saphelp_nw70/7.0.31/en-US/37/4f3ca8b672a34082ab3085d3c22145/content.htm?no_cache=true)
- [Delta Process](https://help.sap.com/viewer/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/7.4.23/en-US/4f18f6aa3fca410ae10000000a42189d.html)
