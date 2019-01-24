---
ref: xfa-introduction-01
layout: page
title: Requirements
description: Requirements
product: xtract-for-alteryx
parent: introduction
permalink: /:collection/:path
weight: 1
lang: en_GB
---

**Alteryx**
 	
- Alteryx Designer and Server version 2018 or higher. 

**SAP Releases**
Basically, all SAP systems based on the ABAP Netweaver Stack are supported. 

- SAP R/3 Version 4.0B or higher and SAP ECC
- SAP S/4 HANA (on-premises)
- SAP BW Version 3.1 or higher
- SAP BW/4 HANA
- SAP-Systems in the SAP Business Suite (CRM, SRM, SCM etc.) 
- All SAP systems based on the ABAP Netweaver Stack (e.g. SAP Business All in One)

The systems purchased by SAP and not based on the ABAP Netweaver Stack, such as Sybase, Ariba, Success Factors and Concur, are not supported.
Integration takes place via the SAP application server. For this reason, the database under the SAP System is irrelevant. <br>
SAP systems on HANA (such as S/4 HANA or BW/4 HANA) are supported without restriction.
Direct read access from the HANA database is not supported. <br>

**Installation and Configuration on SAP**

| Component  | SAP Release       | Requirements to the SAP system                                                |
|------------|-------------------|-------------------------------------------------------------------------------|
| Table      | Rel. above 4.0B   | Recommended but not necessary is the installation of a custom function module |
| Table Join | Rel. 7.0 or above | Installation of a custom function module is necessary.                        |
| Query      | Rel. above 4.0B   | Nothing.                                                                      |
| BAPI       | Rel. above 4.0B   | Nothing.                                                                      |
| Report     | Rel. above 4.0B   | Installation of a custom function module is necessary.                        |
| BW Cube    | Rel. above BW 3.1 | Nothing.                                                                      |
| Hierarchy  | Rel. above BW 3.1 | Nothing.                                                                      |
| OHS        | Rel. above BW 3.5 | Customizing.                                                                  |
| DeltaQ     | Rel. above 4.6A   | Customizing.                                                                  |


For Information about the Installation of the custom function modules and the SAP customizing please check the section SAP Customizing.

**SAP User Authentication**

- SAP user authentication (user name and password).
- SAP authentication with Single Sign On (SSO) and kerberos. 
- SAP Logon Ticket (über SAP Ticket Issuer)
- SAP System- oder Dialog-Anwender mit entsprechenden [Berechtigungsobjekten](https://kb.theobald-software.com/sap/authority-objects---sap-user-rights).


**Ports**<br>
Following ports have to be opened depending on the SAP system, 
where nn is the instance number of the SAP system (e.g. 00 or 99).

- SAP Application Server: Port 33nn
- SAP Message Server (Load Balancing): Port 36nn
- Secure Communication Network (SCN): Port 48nn
- SAP Router: Port 3399



**SAP Licenses**<br>
Additional SAP licenses might be required for extracting data from SAP. Contact SAP to verify these requirements.



**Other Applications and Frameworks**
 	
- .NET Framework 4.7.1 or higher. You can get it [here](https://www.microsoft.com/en-US/download/details.aspx?id=56116).
- Visual C++ 2005 Runtime library is required and would be by the setup program installed. 


**Hardware Requirements**

Please note first of all the requirements for the Alteryx Designer or Server. 
 	
- **Memory**<br>
Memory consumption depends on many factors including component type, number of columns and number of rows in each data package (i.e. package size). The BW Cube component needs more memory for extracting BW data than e.g. the Table component. <br>
Minimum: 8 GB, Recommended: 12 GB or more.

- **Disk space**<br>
For the installation 150 MB disk space is required.
