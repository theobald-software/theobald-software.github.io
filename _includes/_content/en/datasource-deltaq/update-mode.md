
| Letter | Desgination | Description |
| :------: |:--- | :--- |
| F | Full | Extracts all data corresponding to any selection criteria set. |
| D | Delta Update | Only extracts data added or changed on the SAP system since the last delta request. Initialize the delta process before running a delta update. To prevent errors, aborts and gaps in your data during a delta run, run the next extraction in the update mode "Repeat". |
| C | Delta Initialisation | Initiliazies the delta process and extracts all data in full mode simultaneously. When re-initilizing a delta process, delete any exsiting Inits by clicking **[Request Maintenance]** in the DeltaQ extraction settings.|
| R | Repeat | Repeats the last delta run and updates and any delta data accumulated since the last run. Delete any data from the last (unsuccesful) delta update before running a repeat. You can run a repeate multiple times.| S | Delta Init (without data)  | In order to run delta extractions, you firts need to initialize the delta process. This update mode only initiliazies the delta process but does not extract any data. Should you want to re-initilize a delta process, it's recommende to delete any exsiting Inits by clicking on the "Request Maintenance" button in the DeltaQ Extraction Settings.|
| I |  Non-cumulative Init   |  Relevant for DataSources such as *2LIS_03_BX*.  |
| A | Activate (don't extract) | Activates a DataSource similar to clicking **[Activate]**, but is more practical when activating all DataSources in batch. Activate option is an alternative to "Automatic Synchronization".  No data is extracted. |
| V | SSIS Variable  |  - |

