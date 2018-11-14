---
ref: bc-introduction-01
layout: page
title: Requirements
description: Requirements
product: board-connector
parent: introduction
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=requirements
---

**Supported SAP Releases**

- SAP R/3 Version 4.0B and higher versions or SAP ECC.
- SAP S/4 HANA
- SAP BW Version 3.1 and higher.
- SAP BW/4 HANA

The Integration occurs on the SAP application server level. The database under the SAP system is irrelevant. 
SAP systems on HANA particularly are supported without any restrictions.  

**Installation and Configuration on SAP**

| Component      | SAP Release       | Requirements to the SAP system                                                |
|----------------|-------------------|-------------------------------------------------------------------------------|
| **Table**      | Rel. above 4.0B   | For most tasks, the installation of a Z-module is necessary, but not for all. |
| **Table Join** | Rel. 7.0 or above | Installation of a custom function module is necessary.                        |
| **Query**      | Rel. above 4.0B   | Nothing.                                                                      |
| **BAPI**       | Rel. above 4.0B   | Nothing.                                                                      |
| **Report**     | Rel. above 4.0B   | Installation of a custom function module is necessary.                        |
| **BW Cube**    | Rel. above BW 3.1 | Nothing.                                                                      |
| **Hierarchy**  | Rel. above BW 3.1 | Nothing.                                                                      |
| **OHS**        | Rel. above BW 3.5 | Customizing.                                                                  |
| **DeltaQ**     | Rel. above 4.6A   | Customizing.                                                                  |


For Information about the Installation of the custom function modules and the SAP customizing please check the section SAP Customizing.

**SAP Authentication** 

- Custom authentication.
- SAP authentication: SSO (Single Sign On) or SAP credentials.
- SAP system or dialog user with appropriate [authority objects](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/7/67/authority-objects).

**Ports**<br>
Following ports have to be opened depending on the SAP system, <br>
where nn is the instance number of the SAP system (e.g. 00 or 99).

- SAP Application Server: Port 33nn
- SAP Message Server (Load Balancing): Port 36nn
- Secure Communication Network (SCN): Port 48nn
- SAP Router: Port 3399

**SAP Licenses**<br> 
Additional SAP licenses might be required for extracting data from SAP. Contact SAP to verify these requirements.

{% include _content/en/operating-systems.md %}

**Other Applications and Frameworks**
 	
- .NET Framework 4.5.2 or higher. You can get it [here](https://www.microsoft.com/en-US/download/details.aspx?id=42643).

**Hardware Requirements**
 	
- **Processor Cores**
	Minimum: 2 Cores.<br> 
	1 additional core is required for each additional parallel extraction. 

- **Processor Speed**    
	Minimum: Processor: 1.4 GHz, Recommended: 2.0 GHz or faster

- **Memory**
	Memory consumption depends on many factors including component type, number of columns and number of rows in each data package (i.e. package size). The BW Cube component needs more memory for extracting BW data than e.g. the Table component. <br>
	Minimum: 8 GB, Recommended: 12 GB or more.

- **Disk space**
	For the installation 50 MB disk space is required.
 
**32/64-Bit Environment**
 	
- The product can be installed on 32-Bit and 64-Bit operating systems.

**Security Settings**
 	
- Custom authentication.
- SAP authentication: SSO (Single Sign On) or SAP credentials.
- SAP system or dialog user with appropriate [authority objects](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/7/67/authority-objects).

**Network Settings**
 	
- Port 33nn has to be opened where nn = System Number of the SAP system.
