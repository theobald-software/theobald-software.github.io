---
layout: page
title: Requirements
description: Requirements
product: xtract-rs
parent: requirements-and-installation
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-RS-EN/default.aspx?pageid=requirements
---

**SQL Server**
 	
- SQL Server 2005 (Standard, Professional or Enterprise)
- SQL Server 2008
- SQL Server 2008 R2
- SQL Server 2012
- SQL Server 2014
- SQL Server 2016
- SQL Server Reporting Services
- Power BI Report Server

**SAP Releases**
 	
- SAP R/3 Version 4.0B and later versions or SAP ECC.
- SAP BW Version 3.1 and later.

| Component | SAP Release       | Requirements to the SAP system                                                    |
|-----------|-------------------|-----------------------------------------------------------------------------------|
| Table     | Rel.above 4.0B    | For most tasks, the installation of a [Z-module]() is necessary, but not for all. |
| Query     | Rel. above 4.0B   | Nothing.                                                                          |
| BAPI      | Rel. above 4.0B   | Nothing.                                                                          |
| Report    | Rel. above 4.0B   | [Installation of a Z-module is necessary]()                                       |
| BW Cube   | Rel. above BW 3.1 | Nothing.                                                                          |
| Hierarchy | Rel. above BW 3.1 | Nothing.                                                                          |
| OHS       | Rel. above BW 3.5 | [Customizing]().                                                                  |
| DeltaQ    | Rel. above 4.6A   | [Customizing]().                                                                  |


**Operating System**
 	
- Windows XP
- Windows Vista
- Windows 7
- Windows 8
- Windows 10
- Windows Server 2003
- Windows Server 2008
- Windows Server 2008 R2
- Windows Server 2012
- Windows Server 2012 R2

**Other Applications and Frameworks**
 	
- Visual C++ 2005 Runtime. You can get it here.
- .NET Framework 3.0 or higher. You can get it here.
- Librfc32.dll if no SAP GUI is installed. A downloadlink you will find here.

**Memory**
 	
- 2 GB minimum, depending on data volume, more may be required.

**Disk space**
 	
- For the installation 30 MB total required to install.

**32/64-Bit Environment**
 	
- The product can be installed on 32-Bit and 64-Bit operating systems.

**Security Settings**
 	
- Custom authentication.
- SAP authentication: SSO (Single Sign On) or SAP credentials.
- SAP system or dialog user with appropriate authority objects.

**Network Settings**
 	
- Port 33nn has to be opened where nn = System Number of the SAP system.