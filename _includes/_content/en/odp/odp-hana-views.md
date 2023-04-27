Operational Data Provisioning (ODP) can be used to connect SAP HANA database of an SAP ABAP source system. The connection is provided via RFC. 

### Available HANA Views

- Analysis Views
- Calculation Views 
- Associated Attribute Views 

### Using HANA Views
Things that need to be considered when using HANA Views:

1. When [searching](./odp-define) for HANA Views, make sure to select the correct context. 
![ODP HANA View](/img/content/odp/odp-component-hanaview-salesdocumentitem-01.png){:class="img-responsive"}
2. When the delta load is available for the source object in the SAP source system, the **Delta Update** option is available in the ODP component. 
3. Click **[Load live preview]** to preview the data without running an extraction.