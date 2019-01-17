---
ref: xi-requirements-and-installation-01
layout: page
title: Requirements
description: Requirements
product: xtract-is
parent: requirements-and-installation
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=requirements
---

**SQL Server**
 	
- SQL Server 2008 (all SQL Server versions. Express Version don't include SSIS)
- SQL Server 2008 R2
- SQL Server 2012
- SQL Server 2014
- SQL Server 2016
- SQL Server 2017
- SQL Server Integration Services (SSIS)
- For Development: Visual Studio (except express version) for Business Intelligence is needed to create SSIS packages.

Check our KB for [the list of supported SSIS & VS Versions](https://kb.theobald-software.com/xtract-is/list-of-the-ssisvs-versions-supported-by-xtract-is). 

**Supported SAP Releases**

- SAP R/3 Version 4.0B and higher versions or SAP ECC.
- SAP S/4 HANA
- SAP BW Version 3.1 and higher.
- SAP BW/4 HANA

The Integration occurs on the SAP application server level. The database under the SAP system is irrelevant. 
SAP systems on HANA particularly are supported without any restrictions.  

**Installation and Configuration on SAP**

| Component  | SAP Release       | Requirements to the SAP system                                                |
|------------|-------------------|-------------------------------------------------------------------------------|
| Table      | Rel.above 4.0B    | For most tasks, the installation of a Z-module is necessary, but not for all. |
| Table Join | Rel. 7.0 or above | Installation of a custom function module is necessary.                        |
| Query      | Rel. above 4.0B   | Nothing.                                                                      |
| BAPI       | Rel. above 4.0B   | Nothing.                                                                      |
| Report     | Rel. above 4.0B   | Installation of a custom function module is necessary.                        |
| BW Cube    | Rel. above BW 3.1 | Nothing.                                                                      |
| Hierarchy  | Rel. above BW 3.1 | Nothing.                                                                      |
| OHS        | Rel. above BW 3.5 | Customizing.                                                                  |
| DeltaQ     | Rel. above 4.6A   | Customizing.                                                                  |



For Information about the Installation of the custom function modules and the SAP customizing please check the section SAP Customizing.

**SAP Authentication**

- Custom authentication.
- SAP authentication: SSO (Single Sign On) or SAP credentials.
- SAP system or dialog user with appropriate [authority objects](https://kb.theobald-software.com/sap/authority-objects---sap-user-rights).

**Ports**

Following ports have to be opened depending on the SAP system, 
where nn is the instance number of the SAP system (e.g. 00 or 99).

- SAP Application Server: Port 33nn
- SAP Message Server (Load Balancing): Port 36nn
- Secure Communication Network (SCN): Port 48nn
- SAP Router: Port 3399

**SAP Licenses**

Additional SAP licenses might be required for extracting data from SAP. Contact SAP to verify these requirements.

{% include _content/en/operating-systems.md %}

**Other Applications and Frameworks**
 	
- up to SSIS 2008: .NET Framework 3.5 SP1
- starting from SSIS 2012: .NET Framework 4.5.2 or higher. You can get it [here](https://www.microsoft.com/en-us/download/details.aspx?id=42643).

**Memory**
 	
- 4 GB minimum, depending on data volume, more may be required.

**Disk space**
 	
- For the installation 30 MB total required to install.

**32/64-Bit Environment**
 	
- The product can be installed on 32-Bit and 64-Bit operating systems.
