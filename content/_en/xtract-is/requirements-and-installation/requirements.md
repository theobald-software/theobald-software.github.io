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
progressstate: 5
---
### Supported SQL Server Integration Services (SSIS) Versions <br/> 	

- SQL Server Integration Services (SSIS) 2012 SP4 (until 2022-07-12)
- SQL Server Integration Services (SSIS) 2014 SP3 (until 2024-07-09)
- SQL Server Integration Services (SSIS) 2016 SP2 (until 2026-07-14)
- SQL Server Integration Services (SSIS) 2017 (until 2027-10-12)
- SQL Server Integration Services (SSIS) 2019 (until 2030-01-08) 

For development: SQL Server Data Tools are required to create SSIS packages. Use the related SSDT for the SQL Server Integration Services (SSIS) version you are using. <br>
Check the [Microsoft Help](https://docs.microsoft.com/en-us/sql/ssdt/download-sql-server-data-tools-ssdt?view=sql-server-ver15) for details.

The version of the SQL Server Database used in SSIS to read or write data can differ from the version of the SQL Server Integration Services (SSIS) version, i.e. one can use SSIS version 2019 to write data to SQL Server Database version 2014.  


{% include _content/en/requirements/sap-requirements-xtract.md %}
{% include _content/en/requirements/operating-systems.md %}

#### Other applications and frameworks	
.NET Framework 4.7.2 or higher. <br>[Download .NET Framework from the Microsoft website](https://support.microsoft.com/en-us/help/4054530/microsoft-net-framework-4-7-2-offline-installer-for-windows).

### Hardware <br/>

#### Memory<br/> 	
- Minimum 4 GB.<br> Depending on data volume, more memory may be required.

#### Disk space<br/> 	
- 50 MB total for installation

### 32/64-Bit Environment<br/> 	
- 32-Bit and 64-Bit operating systems
