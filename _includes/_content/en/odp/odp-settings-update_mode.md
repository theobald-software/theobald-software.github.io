
### Operational Data Provider
Displays the name of the source object. Look up function allows searching for objects.

#### To Search for a Data Object
1. Within the main window of the component "Xtract ODP" navigate to **Operational Data Provider** and click **Search** (magnifying glass symbol) (1). <br>
The window "Operational Data Provider Lookup" opens.
2. In the field **Name** (2) enter a name of an extractor using wildcards (*), if needed.
3. Select the *Context* (3) and type to search for an extractor.
4. Click **Search** (magnifying glass symbol) (4) and select the extractor of your choice from the displayed list (5).
5. Click **[OK]** (6) to confirm.
![Datasource Sales Document Item Data (2LIS_11_VAITM)](/img/content/odp/odp-datasource-2lis-11-vaitm-01.png){:class="img-responsive"}
6. Click **[Load live preview]** (7) to display a live preview of the data without executing an extraction.
![Datasource Preview](/img/content/odp/odp-component-hanaview-salesdocumentitem-02-preview.png){:class="img-responsive"}

{: .box-note }
**Note:** when the delta load is available for the source object in the SAP source system, the Delta Update option is available in the Xtract ODP component. 


### Additional info 
**Context**<br/>
Displays the ODP provider context 

**Type**<br/>
Displays the type of the source object

### Update Mode 
**Full update**: <br/>
Extracts the data in full mode <br/>

{: .box-note }
**Note:** The **Delta update** option is ready for input only if the ODP provider in the SAP source system supports delta updates.

**Delta update**:<br/>
Runs a delta initialization, if no delta initialization is available for selected subscriber. Runs a delta update, if there is a delta initialization for the selected subscriber. <br/>

- **On delta initialization** <br/>
Checking the *Extract data* checkbox, allows extracting data when running a delta initialization. 
Leaving the checkbox unchecked runs a delta initialization without extracting data. <br/>
- **Auto-sync subscription**<br/>
Allows deletion of the existing subscription and creates a new subscription, if required.
Each extraction has an internal ID, which is part of the subscriber. 
If you change the filter of an extraction after the delta initialization, the *Auto-sync subscription* option automatically deletes the existing subscription and creates a new one. 
A subscription is deleted, if the error message "Illegal change in selection parameters" returns from the SAP system.<br/>

**Delta recovery:**<br/>
Re-runs the last delta update 


