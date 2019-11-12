**Operational Data Provider**<br/>
shows the name of the source object 

**Context**<br/>
shows the ODP provider context 

**Type**<br/>
shows the data type of the source object

**Update Mode** 
- Full update: extracts the data in full mode
- Delta update: runs a delta initialization, in case there is none for this subscriber. Runs a delta update, in case there already is a delta initialization for this subscriber. 
- Delta recovery: re-runs the last delta update 

**On delta initialization** <br/>
Check the *Extract data* checkbox, if you want to extract data on running a delta initialization. Leaving this box unchecked will run a delta initialization without extracting data. 

**Auto-sync subscription**<br/>
This option allows to delete the existing subscription and create a new one if required. Each extraction has an internal ID, which is part of the subscriber. If you then change the filter of an extraction after the delta init, this option will automatically delete the existing subscription and create a new one. This is only done if the error "Illegal change in selection parameters" comes from the SAP system.


**Hint:** The *Delta update* option will be ready for input only if the ODP provider in the SAP source system supports delta updates. 
<br/><br/>
![ODP Settings](/img/content/odp/odp-settings-01.png){:class="img-responsive"}
<br/>

