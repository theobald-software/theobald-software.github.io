### Supported SAP Systems and Releases
All communication with SAP is performed via the RFC protocol. All SAP ABAP based systems, that provides RFC Connectivity are supported.
The integration occurs at SAP application server level. Therefore, the database used by the SAP system is irrelevant. SAP ABAP Systems on any Database (including HANA) are supported. This also means, that the operating system of the SAP system is irrelevant - all operating systems are supported.
SAP Systems running on Big Endian and Little Endian hardware are supported.

SAP Releases 4.6C and newer are supported.

This includes:<br/> 	
* SAP R/3 Version 4.6C and later
* mySAP
* SAP ERP / ECC 5.0 / ECC 6.0 (including all EhPs)
* SAP Business Suite 7 (CRM, SRM, SCM etc.)
* SAP Business All in One, CAR, APO, PI, IS-U etc.
* SAP S/4HANA
* SAP BW 3.1 and later
* SAP BW/BI 7.x
* SAP BW/4HANA
* SAP Application Server ABAP, Message Server, Router, Standalone Gateway

### HANA Database
You can use Operational Data Provisioning (ODP) to connect the SAP HANA database of an SAP ABAP source system. Communication is performed using RFC. With the ODP context for SAP HANA (HANA) the followings HANA views types are availble for extraction:
- Analysis Views
- Calculation Views and
- Associated Attribute Views

Direct Access to a HANA Database without an SAP ABAP source system running on it is not supported.

### Not Supported SAP Systems
Not supported are the SAP systems, that don’t run on ABAP systems or don't provide RFC Connectivity like:
- Business By Design 
- Business One
- Business Objects
- Sybase
- Ariba
- Success Factors
- Concur