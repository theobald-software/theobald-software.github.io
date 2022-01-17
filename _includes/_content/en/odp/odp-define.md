### Look up Data Objects
1. Within the main window of the component "Xtract ODP" navigate to **Operational Data Provider** and click **[Search]** (magnifying glass icon) (1). <br>
The window "Operational Data Provider Lookup" opens.
![Datasource Sales Document Item Data (2LIS_11_VAITM)](/img/content/odp/odp-datasource-2lis-11-vaitm-01.png){:class="img-responsive"}
2. In the field **Name** (2) enter a name of an extractor using wildcards (*), if needed.
3. Select a *Context* (3). Depending on the connected SAP source system there are differences in available provider context.
	
	ODP context | SAP Source objects |
	------------ |------------ |
	ABAP Core Data Services [[ABAP_CDS](./odp-abap-cds-views)]|- CDS Views |
	SAP NetWeaver Business Warehouse [[BW](./odp-bw-infoproviders)] |**BW/4HANA:**<br> - DSO / aDSO<br> - CompositeProvider<br> - InfoObjects <br> - Query as InfoProvider<br> **BW systems:**<br> - CompositeProvider<br> - InfoCubes<br> - Semantically partitioned objects<br> - HybridProviders<br> - MultiProviders<br> - InfoSets |
	SAP HANA Information Views [[HANA](./odp-hana-views)] | - Analysis Views<br> - Calculation Views<br> - Associated Attribute Views |
	DataSources/Extractors [[SAPI](./odp-extractors)] | - DataSources and Extractors |
4. Click **[Search]** (magnifying glass icon) (4) and select the extractor of your choice from the displayed list (5).
5. Click **[OK]** (6) to confirm your input.
6. Optional: Create selections by activating or deactivating fields (7). To add [filters](#selections-and-filters) click the **[Edit]** option next to the fields. 
If your data source is Hierarchy, see [Select Hierarchy](./odp-extractors#hierarchies) for filter options.
7. Click **[Load live preview]** (8) to display a live preview of the data without executing an extraction.
![Datasource Preview](/img/content/odp/odp-datasource-2lis-11-vaitm-02-preview.png){:class="img-responsive"}
8. Before executing an extraction, check the [extraction settings](./odp-settings).

{: .box-note }
**Note:** To find DataSources, they have to be activated in SAP, see [Activating DataSources in the SAP OLTP System](https://kb.theobald-software.com/sap/activating-datasource-in-the-SAP-OLTP-System).
