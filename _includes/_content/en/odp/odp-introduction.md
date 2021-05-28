
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
- BW 
- BW/4 HANA

The Xtract ODP component, which requires the data, acts as a so-called subscriber (consumer). The ODP component subscribes to a data provider, for example to an SAP Extractor or to a CDS View.  

Operational data provisioning supports mechanisms to load data incrementally, e.g., from extractors, ABAP CDS Views and aDSO objects (see below).
With SAP BW/4HANA, Operational Data Provisioning (ODP) becomes the central infrastructure for data extraction and replication from SAP (ABAP) applications to an SAP BW/4HANA Data Warehouse. 
<br/>

ODP provides data transfer from the following providers (also called Provider Context): 
- ABAP Core Data Services (CDS) Views 
- BW and BW/4HANA InfoProviders
- HANA Information Views in HANA based SAP Systems 
- DataSources and Extractors 

{: .box-note }
**Note:** Depending on the connected SAP source system there are differences in available provider context. 

The following example depicts the available provider context with BW /4 HANA connected as SAP source system.
A BW or ECC system contains less options in the provider context list.

![ODP Provider Context from an BW/4 HANA System](/img/content/odp/odp-component-context-bw.png){:class="img-responsive"}


### SAP Source Objects and Suitable ODP Contexts
 
ODP context | SAP Source objects |
------------ |------------ |
ABAP Core Data Services [[ABAP_CDS](./odp/odp-abap-cds-views)]|- CDS Views |
SAP NetWeaver Business Warehouse [[BW](./odp/odp-bw-infoproviders)] |**BW/4HANA:**<br> - DSO / aDSO<br> - CompositeProvider<br> - InfoObjects <br> - Query as InfoProvider<br> **BW systems:**<br> - CompositeProvider<br> - InfoCubes<br> - Semantically partitioned objects<br> - HybridProviders<br> - MultiProviders<br> - InfoSets |
SAP HANA Information Views [[HANA](./odp/odp-hana-views)] | - Analysis Views<br> - Calculation Views<br> - Associated Attribute Views |
DataSources/Extractos [[SAPI](./odp/odp-extractors)] | - DataSources and Extractors |

Suitable ODP contexts can be selected within the [ODP Lookup window](./odp/odp-extractors#extractor-search).

###  Xtract ODP - Functions Overview
The window “Define Data Source for SAP ODP” contains several subsections:

- [Operational Data Provider](./odp/odp-functions-ov#operational-data-provider) - displays the name of the source object
- [Additional info](./odp/odp-functions-ov#additional-info) - displays the ODP provider context and the data type of the source object
- [Update mode](./odp/odp-functions-ov#update-mode) - defines the update mode, full or delta update
- [Fields](./odp/odp-functions-ov#filtering---dynamic-setting-of-the-selection-filters) - allows selection and setting of the filter options for [extractors](../odp/odp-extractors)
- Preview - Section with a real-time preview of the extraction data

#### Buttons
- **[[Show active subscriptions ](./odp/odp-functions-ov#subscriptions)]** - Button to display details on subscriber process
- **[[Edit parameters](./odp/odp-functions-ov#edit-parameters-)]** - Button to define run-time parameters that can be used as placeholders for data selections
- **[Load Live Preview]** - Button to display a real-time preview of the extraction data without executing the extraction 

****
#### Related Links
- [SAP community Wiki](https://wiki.scn.sap.com/wiki/pages/viewpage.action?pageId=449284646)





