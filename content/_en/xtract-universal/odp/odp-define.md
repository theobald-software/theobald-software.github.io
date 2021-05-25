---
ref: xu-odp-define
layout: page
title: Define an ODP Extraction
description: ODP Extracttion
product: xtract-universal
parent: Operational Data Provisioning (ODP)
permalink: /:collection/:path
weight: 1
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
6. Update mode/Hierarchy
7. Optional: Create selections by activating or deactivating fields. To add [filters](#selections-and-filters) click the **Edit** option next to the fields.
8. Click **[Load live preview]** (7) to display a live preview of the data without executing an extraction.
![Datasource Preview](/img/content/odp/odp-datasource-2lis-11-vaitm-02-preview.png){:class="img-responsive"}
9. Before executing an extraction, check the [extraction settings](./odp-settings).

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

{% include _content/en/odp/odp-settings-filtering.md %}