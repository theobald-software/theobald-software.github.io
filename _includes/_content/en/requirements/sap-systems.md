### Supported SAP Systems and Releases

The following SAP Systems are supported:
- All SAP ABAP based systems that provide RFC connectivity are supported. 
All communication with SAP is performed via the RFC protocol. 
- SAP ABAP Systems on any database (including HANA) are supported. The database used by the SAP system is irrelevant, because the integration occurs at SAP application server level.
- SAP Systems running on Big Endian and Little Endian hardware are supported.
- SAP industry solutions like IS-U, IS-R, etc. are supported.
- SAP Releases 4.6C and newer are supported. 
- All operating systems are supported.

Examples:
[SAP S/4HANA](https://kb.theobald-software.com/sap/supported-sap-and-hana-versions-by-theobald-software-products), mySAP, SAP Application Server ABAP, Message Server, Router, Standalone Gateway, SAP Business Suite 7 (CRM, SRM, SCM etc.), SAP Business All in One, CAR, APO, PI, SAP BW 3.1 and later, SAP BW/BI 7.x, SAP ERP / ECC 5.0 / ECC 6.0 (including all EhPs), SAP R/3 Version 4.6C and later, SAP BW/4HANA and more.

{: .box-warning}
**Disclaimer:** While SAP versions that are no longer supported by SAP still work with Theobald Software products, they are excluded from the Theobald Software support service.

### Not supported SAP Systems

The following SAP Systems are not supported:
- SAP systems that don’t run on ABAP systems 
- SAP systems that don't provide RFC connectivity. <br>

Examples: SAP S/4HANA Cloud Essentials Edition (ES), Business By Design, Business One, Business Objects, Sybase, Ariba, Success Factors, Concur

### HANA Database
You can use Operational Data Provisioning (ODP) to connect the SAP HANA database of an SAP ABAP source system. 
Communication is done via RFC. 
With the ODP context for SAP HANA (HANA) the following HANA View types are available for extracting:
- Analysis Views
- Calculation Views
- Associated Attribute Views

Direct access to a HANA database without an SAP ABAP source system running on the corresponding HANA database is not supported.
