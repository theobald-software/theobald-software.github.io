### Supported SAP Systems and releases
All communication with SAP is performed via the RFC protocol. All SAP ABAP based systems that provide RFC connectivity are supported.
The integration occurs at SAP application server level. Therefore, the database used by the SAP system is irrelevant. SAP ABAP Systems on any database (including HANA) are supported. This means that the operating system of the SAP system is irrelevant - all operating systems are supported.
SAP Systems running on Big Endian and Little Endian hardware are supported.

SAP Releases 4.6C and newer are supported. Including the following:
<br/> 	
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
You can use Operational Data Provisioning (ODP) to connect the SAP HANA database of an SAP ABAP source system. Communication is performed using RFC. With the ODP context for SAP HANA (HANA) the following HANA views types are available  for extracting:
- Analysis Views
- Calculation Views
- Associated Attribute Views

Direct access to a HANA database without an SAP ABAP source system running on the corresponding HANA database is not supported.


### Not supported SAP systems
Not supported are the SAP systems that don’t run on ABAP systems or don't provide RFC connectivity. For example, the following systems are not supported:
- Business By Design 
- Business One
- Business Objects
- Sybase
- Ariba
- Success Factors
- Concur
