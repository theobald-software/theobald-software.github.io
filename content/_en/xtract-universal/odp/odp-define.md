---
ref: xu-odp-define
layout: page
title: Define an ODP Extraction
description: ODP Extracttion
product: xtract-universal
parent: Operational Data Provisioning (ODP)
permalink: /:collection/:path
weight: 2
lang: en_GB
progressstate: 5
---
The following section shows how to use the Xtract ODP component.

### To Search for a Data Object
1. Within the main window of the component "Xtract ODP" navigate to **Operational Data Provider** and click **Search** (magnifying glass symbol) (1). <br>
The window "Operational Data Provider Lookup" opens.
![Datasource Sales Document Item Data (2LIS_11_VAITM)](/img/content/odp/odp-datasource-2lis-11-vaitm-01.png){:class="img-responsive"}
2. In the field **Name** (2) enter a name of an extractor using wildcards (*), if needed.
3. Select a *Context* (3). Depending on the connected SAP source system there are differences in available provider context.
	
	ODP context | SAP Source objects |
	------------ |------------ |
	ABAP Core Data Services [[ABAP_CDS](./odp/odp-abap-cds-views)]|- CDS Views |
	SAP NetWeaver Business Warehouse [[BW](./odp/odp-bw-infoproviders)] |**BW/4HANA:**<br> - DSO / aDSO<br> - CompositeProvider<br> - InfoObjects <br> - Query as InfoProvider<br> **BW systems:**<br> - CompositeProvider<br> - InfoCubes<br> - Semantically partitioned objects<br> - HybridProviders<br> - MultiProviders<br> - InfoSets |
	SAP HANA Information Views [[HANA](./odp/odp-hana-views)] | - Analysis Views<br> - Calculation Views<br> - Associated Attribute Views |
	DataSources/Extractors [[SAPI](./odp/odp-extractors)] | - DataSources and Extractors |
4. Click **Search** (magnifying glass symbol) (4) and select the extractor of your choice from the displayed list (5).
5. Click **[OK]** (6) to confirm.
6. Optional: Create selections by activating or deactivating fields (7). To add [filters](#selections-and-filters) click the **Edit** option next to the fields. 
If your data source is Hierarchy, see [Select Hierarchy](./odp-extractors#hierarchies) for filter options.
7. Click **[Load live preview]** (8) to display a live preview of the data without executing an extraction.
![Datasource Preview](/img/content/odp/odp-datasource-2lis-11-vaitm-02-preview.png){:class="img-responsive"}
8. Before executing an extraction, check the [extraction settings](./odp-settings).

