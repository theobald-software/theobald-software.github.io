**Operational Data Provider**<br/>
shows the name of the source object 

**Context**<br/>
shows the ODP provider context 

**Type**<br/>
shows the data type of the source object

**Update Mode** 
- Full Update: extracts the data in full mode
- Delta Update: extracts the data in delta (incremental) mode 
On delta initialization you have the options to extract data or not
-- Extract data 
-- Extract no data 
-- Auto-sync subscription: This option allows to delete the existing subscription and create a new one if required. Each extraction has an internal ID, which is part of the subscriber. If you then change the filter of an extraction after the delta init, this option will automatically delete the existing subscription and create a new one. This is only done if the error "Illegal change in selection parameters" comes from the SAP system.  

When the delta load is available for the source object in the SAP source system, the Delta Update option will be available in the ODP component. 
<br/><br/>
![ODP Settings](/img/content/odp/odp-settings-01.png){:class="img-responsive"}
<br/>
