The update mode allows delta update meaning that only added or changed data is extracted, instead of a full update.
The update mode can be set dynamically in the "updatemode" parameter in the "Run" dialogue.

Alternatively you can select the update mode in the main window of the component:
 ![Update-Mode](/img/content/deltaq-extraction-seetings.png ){:class="img-responsive"}

| Letter |  Desgination   | Description |
| :------: |:--- | :--- |
| F | Full  | Extracts all data corresponding to any selection criteria set. |
| D | Delta Update | Only extracts data added or changed on the SAP system since the last delta request. Initialize the delta process before running a delta update. To prevent errors, aborts and gaps in your data during a delta run, run the next extraction in the update mode "Repeat". |
| C | Delta Initialisation | Initiliazies the delta process and extracts all data in full mode simultaneously. When re-initilizing a delta process, delete any exsiting Inits by clicking **[Request Maintenance]** in the DeltaQ extraction settings.|
| R | Repeat  | Repeats the last delta run and updates and any delta data accumulated since the last run. Delete any data from the last (unsuccesful) delta update before running a repeat. You can run a repeate multiple times.|
| S | Delta Init (without data)   | Initiliazies the delta process without extracting any data from the SAP Datasource. The result of the Delta inits is a so called "Request Maintenance" on the SAP side. When re-initilizeing a delta process, delete any exsiting Inits by clicking **[Request Maintenance]** in the DeltaQ extraction settings.|
| I |  Non-cumulative Init    |  Relevant for DataSources such as *2LIS_03_BX*.  |
| A | Activate (don't extract)  | Activates a DataSource similar to clicking **[Activate]**, but is more practical when activating all DataSources in batch. Activate option is an alternative to "Automatic Synchronization".  No data is extracted. |
| V | **[Xtract IS only:]** SSIS Variable; Depricated, see [Variables](https://help.theobald-software.com/en/xtract-is/bw-cube/variables) |  If "V" is selected, a variable name needs to be entered in the [DeltaQ settings](https://help.theobald-software.com/en/xtract-is/deltaq/settings). The same SSIS variable needs to be created in SSIS and assigned a value. The following values are possible: F, D, C, R, S, I and A. |


