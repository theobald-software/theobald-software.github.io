### Look up Data Objects
1. Click ![magnifying-glass](/img/content/icons/magnifying-glass.png). The window "Operational Data Provider Lookup" opens.<br>
{% if page.product == "xtract-for-alteryx" %}![Lookup](/img/content/xfa/odp-lookup.png){:class="img-responsive"}{% elsif page.product == "xtract-is" %}![Lookup](/img/content/xis/odp-lookup.png){:class="img-responsive"}{% else %}![Lookup](/img/content/xu/odp-lookup.png){:class="img-responsive"}{% endif %}
2. Enter a name of an extractor in the field **Name** (1). Use wildcards (*), if needed.
![Datasource Sales Document Item Data (2LIS_11_VAITM)](/img/content/odp/odp-datasource-2lis-11-vaitm-01.png){:class="img-responsive"}
3. Select a *Context* (2). Depending on the connected SAP source system there are differences in available provider context.
	
	ODP context | SAP Source objects |
	------------ |------------ |
	ABAP Core Data Services [[ABAP_CDS](./odp-abap-cds-views)]|- CDS Views |
	SAP NetWeaver Business Warehouse [[BW](./odp-bw-infoproviders)] |**BW/4HANA:**<br> - DSO / aDSO<br> - CompositeProvider<br> - InfoObjects <br> - Query as InfoProvider<br> **BW systems:**<br> - CompositeProvider<br> - InfoCubes<br> - Semantically partitioned objects<br> - HybridProviders<br> - MultiProviders<br> - InfoSets |
	SAP HANA Information Views [[HANA](./odp-hana-views)] | - Analysis Views<br> - Calculation Views<br> - Associated Attribute Views |
	DataSources/Extractors [[SAPI](./odp-extractors)] | - DataSources and Extractors |
	SAP LT Queue Alias [[SLT~your_queue_alias](./odp-slt-server)] | - SAP Tables<br> - Views<br> - Cluster tables<br> - Pool tables |
4. Click ![magnifying-glass](/img/content/icons/magnifying-glass.png) and select the extractor of your choice from the displayed list (3).
5. Click **[OK]** to confirm your input.

The application now returns to the main window of the component.

{: .box-note }
**Note:** To find DataSources, they have to be activated in SAP.


### Define an ODP Extraction
1. Optional: Create selections by activating or deactivating fields (4). <br>
To add [filters](#selections-and-filters) click the **[Edit]** option next to the fields. 
If your data source is a Hierarchy, see [Select Hierarchy](./odp-extractors#hierarchies) for filter options.
2. Optional: To create delta extractions, select the corresponding [Update Mode](#update-mode).
3. Click **[Load live preview]** (5) to display a live preview of the data without executing an extraction.
![Datasource Preview](/img/content/odp/odp-datasource-2lis-11-vaitm-02-preview.png){:class="img-responsive"}
4. Before executing an extraction, check the [extraction settings](./odp-settings).

