The Xtract ODP component can be used to extract data via the SAP Operational Data Provisioning (ODP) framework.

### About ODP
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
 
ODP context | SAP Source objects |
------------ |------------ |
ABAP Core Data Services [[ABAP_CDS](./odp/odp-abap-cds-views)]|- CDS Views |
SAP NetWeaver Business Warehouse [[BW](./odp/odp-bw-infoproviders)] |**BW/4HANA:**<br> - DSO / aDSO<br> - CompositeProvider<br> - InfoObjects <br> - Query as InfoProvider<br> **BW systems:**<br> - CompositeProvider<br> - InfoCubes<br> - Semantically partitioned objects<br> - HybridProviders<br> - MultiProviders<br> - InfoSets |
SAP HANA Information Views [[HANA](./odp/odp-hana-views)] | - Analysis Views<br> - Calculation Views<br> - Associated Attribute Views |
DataSources/Extractors [[SAPI](./odp/odp-extractors)] | - DataSources and Extractors |

{: .box-note }
**Note:** Depending on the connected SAP source system there are differences in available provider context. 

For more information on SAP ODP, see [SAP Wiki: Operational Data Provisioning (ODP) and Delta Queue (ODQ)](https://wiki.scn.sap.com/wiki/pages/viewpage.action?pageId=449284646).

### Technical prerequisites

There are a few prerequisites that need to be fulfilled on the SAP side, when using ODP. SAP released a number of SAP notes that apply when using Xtract ODP component:
- [1931427 - ODP Data Replication API 2.0](https://launchpad.support.sap.com/#/notes/1931427)
- [2232584 - Release of SAP extractors for ODP replication (ODP SAPI)](https://launchpad.support.sap.com/#/notes/2232584)
- [1560241 - Release of DataSources for ODP data replication API](https://launchpad.support.sap.com/#/notes/1560241)
- [2196500 - ODP Paketgröße kann nicht auf einen Wert unter 50 MB reduziert](https://launchpad.support.sap.com/#/notes/2196500/D)
- [2191995 - ODQ Paketgröße kann nicht unter 50 MByte reduziert werden](https://launchpad.support.sap.com/#/notes/2191995/D)

