The Xtract ODP component can be used to extract data via the SAP Operational Data Provisioning (ODP) framework.

{: .box-warning}
**Warning!** **Missing Authorization**
To use the ODP component, access to the designated authority objects (RFC) in SAP must be available.
For more information, refer to the knowledge base article [SAP User Rights: ODP](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#odp).

{: .box-note }
**Note:** Before creating ODP extractions, test the ODP source in SAP using the ABAP report RODPS_REPL_TEST to rule out and troubleshoot ODP problems in the ODP source.
For more information, see [SAP Wiki: Replication test with RODPS_REPL_TEST](https://wiki.scn.sap.com/wiki/display/BI/Replication+test+with+RODPS_REPL_TEST).

### About ODP
ODP is a framework in SAP ABAP applications for transferring data between systems.<br> 
ODP provides a technical infrastructure for data extraction and replication from different SAP (ABAP) Systems e.g.:
- ECC 
- S/4 HANA
- BW 
- BW/4 HANA

The Xtract ODP component acts as a subscriber (consumer) and subscribes to a data provider, for example to an SAP Extractor or to a CDS View.  

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

Depending on the connected SAP source system there are differences in available provider context.<br>
For more information on SAP ODP, see [SAP Wiki: Operational Data Provisioning (ODP) and Delta Queue (ODQ)](https://wiki.scn.sap.com/wiki/pages/viewpage.action?pageId=449284646).
 

{: .box-note }
**Note:** To find DataSources, they have to be activated in SAP, see [Activating DataSources in the SAP OLTP System](https://kb.theobald-software.com/sap/activating-datasource-in-the-SAP-OLTP-System).

### Prerequisites

Implement the following SAP notes to use ODP:
- [1931427 - ODP Data Replication API 2.0](https://launchpad.support.sap.com/#/notes/1931427)
- [2232584 - Release of SAP extractors for ODP replication (ODP SAPI)](https://launchpad.support.sap.com/#/notes/2232584)
- [1560241 - Release of DataSources for ODP data replication API](https://launchpad.support.sap.com/#/notes/1560241)
- [2196500 - ODP Package size cannot be reduced below 50 MB](https://launchpad.support.sap.com/#/notes/2196500/D)
- [2191995 - ODQ Package Size cannot be reduced below 50 MByte](https://launchpad.support.sap.com/#/notes/2191995/D)

{: .box-note }
**Note:** The ODP API 1.0 has limitations compared to ODP API 2.0, e.g., ODP API 1.0 does not support the extraction of Hierarchy DataSources. 
For more information, see [SAP Wiki: Limitation of ODP API 1.0](https://wiki.scn.sap.com/wiki/display/BI/Limitation+of+ODP+API+1.0). 
