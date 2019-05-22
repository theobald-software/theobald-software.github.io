**Operation Data Provider**<br/>
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
-- Auto-sync subscription: tbd 

When the delta load is available for the source object in the SAP source system, the Delta Update option will be available in the ODP component. 
<br/><br/>
![ODP Settings](/img/content/odp/odp-settings-01.png){:class="img-responsive"}
<br/>
**Show Subscriptions**<br/>
Click on Show Subscriptions to find information about the subscriber. That includes: 
- Subscriber Name
- Last request timestamp
- Creation timestamp 
To delete the subscription click on the Delete icon on the right side. <br/><br/>
![ODP Subscriber](/img/content/odp/odp-settings-02.png){:class="img-responsive"}

**Filtering**<br/>
In the main windows, you can click next to each field on Edit to define a filter.
In the square brackets to the left of the field name, e.g. [1], you can see the number of defined filters. <br/><br/>
![ODP ABAP CDS View Filter](/img/content/odp/odp-component-cds-costcenter-03-filter.png){:class="img-responsive"}

