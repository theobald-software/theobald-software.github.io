
### Update Mode 
**Full update**: <br/>
Extracts the data in full mode <br/>

{: .box-note }
**Note:** The **Delta update** option is ready for input only if the ODP provider in the SAP source system supports delta updates.

**Delta update**:<br/>
Runs a delta initialization, if no delta initialization is available for selected subscriber. Runs a delta update, if there is a delta initialization for the selected subscriber. <br/>

- **Extract data** <br/>
Allows extracting data when running a delta initialization. 
Leaving this checkbox unchecked runs a delta initialization without extracting data. <br/>
- **Auto-sync subscription**<br/>
Allows deletion of the existing subscription and creates a new subscription, if required.
Each extraction has an internal ID, which is part of the subscriber. 
If you change the filter of an extraction after the delta initialization, the *Auto-sync subscription* option automatically deletes the existing subscription and creates a new one. 
A subscription is deleted, if the error message "Illegal change in selection parameters" returns from the SAP system.<br/>

**Delta recovery:**<br/>
Re-runs the last delta update 

**Direct read (without ODQ):**<br/>
Directly reads all available data, bypassing the ODQ (Operational Delta Queue). 
This is not suited for extracting large amounts of data, because there is no packaging available. It is also the only update mode that supports data aggregation.
