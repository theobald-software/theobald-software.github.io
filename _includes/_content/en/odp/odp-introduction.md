
### Technical Prerequisites

There are a few prerequisites that need to be fulfilled on the SAP side, when using ODP. SAP released a number of SAP notes that apply when using Xtract ODP component:
- [1931427 - ODP Data Replication API 2.0](https://launchpad.support.sap.com/#/notes/1931427)
- [2232584 - Release of SAP extractors for ODP replication (ODP SAPI)](https://launchpad.support.sap.com/#/notes/2232584)
- [1560241 - Release of DataSources for ODP data replication API](https://launchpad.support.sap.com/#/notes/1560241)

### About Xtract ODP

The Xtract ODP component can be used to extract data via the SAP Operational Data Provisioning (ODP) framework. 

ODP is a framework in SAP ABAP applications for transferring data between systems.<br> 
ODP provides a technical infrastructure for data extraction and replication from different SAP (ABAP) Systems e.g.:
- ECC 
- S/4 HANA
- BW and 
- BW/4 HANA

Xtract ODP allows to subscribe to (ODP Consumer) and publish various data providers (ODP Providers). Data can be sent to different ODP Consumers (also several in 
parallel).  

Operational data provisioning supports mechanisms to load data incrementally, e.g., from extractors, ABAP CDS Views and aDSO objects (see below).
With SAP BW/4HANA, Operational Data Provisioning (ODP) becomes the central infrastructure for data extraction and replication from SAP (ABAP) applications to a SAP BW/4HANA Data Warehouse. 
<br/>

ODP provides data transfer from the following providers (also called Provider Context): 
- ABAP Core Data Services (CDS) Views 
- BW and BW/4HANA InfoProviders
- HANA Information Views in HANA based SAP Systems 
- DataSources and Extractors 

{: .box-note }

**Note:** depending on the connected SAP source system there are differences in available provider context. 

The following example depicts the available provider context with BW /4 HANA connected as SAP source system.
A BW or ECC system contains less options in the provider context list.

![ODP Provider Context from an BW/4 HANA System](/img/content/odp/odp-component-context-bw.png){:class="img-responsive"}


#### SAP Source Objects and Suitable ODP Contexts
 
ODP context | SAP Source objects |
------------ |------------ |
ABAP Core Data Services [[ABAP_CDS](./odp-abap-cds-views)]|- CDS Views |
SAP NetWeaver Business Warehouse [[BW](./odp-bw-infoproviders)] |**BW/4HANA:**<br> - DSO / aDSO<br> - CompositeProvider<br> - InfoObjects <br> - Query as InfoProvider<br> **BW systems:**<br> - CompositeProvider<br> - InfoCubes<br> - Semantically partitioned objects<br> - HybridProviders<br> - MultiProviders<br> - InfoSets |
HANA Information Views [[HANA](./odp-hana-views)] | - Analysis Views<br> - Calculation Views<br> - Associated Attribute Views |
DataSources/Extractos [[SAPI](./odp-extractors)] | - DataSources and Extractors |

Suitable ODP contexts can be selected within the [ODP Lookup window](./odp-extractors#extractor-search).


### To Use Xtract ODP 
Basic knowledge of Xtract for Alteryx is required to understand the following sections, see [Extraction with Xtract Table - Use case](../getting-started-xfa/use-case-extraction-with-table).
1. Drag & drop Xtract ODP the component to your Alteryx workflow.
2. Select an SAP connection, navigate to **Selected Extraction** and click **[Edit]**. The main window of the component “Xtract ODP” opens.
The majority of the functions of the component can be accessed using the main window.
All settings that can be accessed using the main window are described in section [Xtract ODP Functions Overview](./odp-functions-ov).


###  Xtract ODP - Functions Overview
The window “Xtract ODP” contains several subsections:

- [Operational Data Provider](./odp-functions-ov#operational-data-provider) - displays the name of the source object
- [Additional info](./odp-functions-ov#additional-info) - displays the ODP provider context and the data type of the source object
- [Update mode](./odp-functions-ov#update-mode) - defines the update mode, full or delta update
- [Fields](./odp-functions-ov#filtering---dynamic-setting-of-the-selection-filters) - allows selection and setting of the filter options for [extractors](./odp-extractors)
- Preview - Section with a real-time preview of the extraction data
![ODP Component](/img/content/xfa/xfa_odp_overview.png){:class="img-responsive"}

#### Buttons
- **[[Show subscriptions](./odp-functions-ov#subscriptions)]** - Button to display details on subscriber process
- **[[Edit parameters](./odp-functions-ov#edit-parameters-)]** - Button to define run-time parameters that can be used as placeholders for data selections
- **[Load Live Preview]** - Button to display a real-time preview of the extraction data without executing the extraction 

More information on working with Xtract ODP component is provided in the following sections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}

****
#### Related Links
- [SAP community Wiki](https://wiki.scn.sap.com/wiki/pages/viewpage.action?pageId=449284646)



