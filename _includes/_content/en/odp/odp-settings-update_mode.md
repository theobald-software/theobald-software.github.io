The following section gives an overview over the settings that can be changed for the ODP component.
The settings can be changed in the window "Define data source for SAP ODP". 
There are two ways to open the "Define data source for SAP ODP" window:
- Create a new extraction (see [Define an Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started-table/define-a-table-extraction) with the *table* component as an example)
- Choose an existing ODP extraction and click **Edit**.<br/>

The settings are located the left side of the window "Define data source for SAP ODP" under subsections:<br/>
- Operational Data Provider
- Additional info
- Update mode
<br/>
![ODP Settings](/img/content/odp/odp-settings-01.png){:class="img-responsive"}
<br/>

### Operational Data Provider <br/>
shows the name of the source object 

### Additional info <br/>
**Context**<br/>
shows the ODP provider context 

**Type**<br/>
shows the data type of the source object

### Update Mode <br/>
**Full update**: <br/>
extracts the data in full mode <br/>
<div class="alert alert-info">
  <i class="fas fa-info-circle"></i> <strong>Note:</strong> The <em>Delta update</em> option is ready for input only if the ODP provider in the SAP source system supports delta updates.
</div>
**Delta update**:<br/>
runs a delta initialization, in case there 
is none for this subscriber. Runs a delta update, in case there already is a delta initialization for this subscriber. <br/>

- **On delta initialization** <br/>
checking the *Extract data* checkbox, allows extracting data when running a delta initialization. 
Leaving the checkbox unchecked runs a delta initialization without extracting data. <br/>
- **Auto-sync subscription**<br/>
allows deletion of the existing subscription and creates a new one if required.
Each extraction has an internal ID, which is part of the subscriber. 
If you then change the filter of an extraction after the delta initialization, this option automatically deletes the existing subscription and creates a new one. 
A subscription is deleted if the error message "Illegal change in selection parameters" returns from the SAP system.<br/>

**Delta recovery:**<br/>
re-runs the last delta update 


