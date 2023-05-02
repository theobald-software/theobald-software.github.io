---
ref: xi-requirements-and-installation-01
layout: page
title: Requirements
description: Requirements
product: xtract-is
parent: introduction
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=requirements
progressstate: 5
---
### Supported Visual Studio Versions  	

- Visual Studio 2015
- Visual Studio 2017
- Visual Studio 2019

{: .box-note }
**Note:** To create SSIS packages in Visual Studio, SQL Server Data Tools (SSDT) are required. 
Make sure to use the SSDT that correlates to your SQL Server version.
For more information, see [Microsoft Documentation: Download SQL Server Data Tools (SSDT) for Visual Studio](https://docs.microsoft.com/en-us/sql/ssdt/download-sql-server-data-tools-ssdt?view=sql-server-ver15).

### Supported SQL Server Versions  	

- SQL Server 2014 
- SQL Server 2016
- SQL Server 2017
- SQL Server 2019
- SQL Server 2022

### Supported SQL Server Integration Services (SSIS) 	

- SQL Server Integration Services (SSIS) 2014 SP3 (until 2024-07-09)
- SQL Server Integration Services (SSIS) 2016 SP2 (until 2026-07-14)
- SQL Server Integration Services (SSIS) 2017 (until 2027-10-12)
- SQL Server Integration Services (SSIS) 2019 (until 2030-01-08) 

The version of the SQL Server Database used to read or write data can differ from the SQL Server Integration Services (SSIS) version, e.g., you can use SSIS version 2019 to write data to SQL Server Database version 2022.  

{% include _content/en/requirements/sap-systems.md %}
{% include _content/en/requirements/sap-installation.md %}
{% include _content/en/requirements/sap-authentication-xtract.md %}
{% include _content/en/requirements/sap-misc.md %}
{% include _content/en/requirements/operating-systems.md %}

### Other applications and frameworks	
.NET Framework 4.7.2 or higher. [Download .NET Framework from the Microsoft website](https://support.microsoft.com/en-us/help/4054530/microsoft-net-framework-4-7-2-offline-installer-for-windows).

### Hardware

#### Memory 	
- Minimum 4 GB.<br> Depending on data volume, more memory may be required.

#### Disk space 	
- 50 MB total for installation

#### 32/64-Bit Environment 	
- 32-Bit and 64-Bit operating systems
