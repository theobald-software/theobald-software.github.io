---
ref: xu-oracle-01
layout: page
title: Requirements
description: Requirements
product: xtract-universal
parent: oracle
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=oracle-requirements
---


Loading data into Oracle requires installation of the **Oracle Data Provider for .NET, Managed Driver**.

[http://www.oracle.com/technetwork/database/windows/downloads/index-090165.html](http://www.oracle.com/technetwork/database/windows/downloads/index-090165.html)

**ATTENTION**: Only Oracle data provider version 4.122.1.0 (ODAC 12.2.0.1.0) is supported by Xtract Universal.

You should follow the instructions to install the 64-bit driver.<br>
As an alternative to the *managed driver* the complete ODAC or the complete Oracle DB Client can be installed. Please make sure to select the ODP.NET component. 

Please proceed as follows for the installation:

1. Download the 64-bit driver from the above Oracle website
2. Unpack the **ODP.NET_Managed_ODAC122cR1.zip** directory
3. Start the command prompt and run the **install_odpm.bat** command
	- Execution with admin user rights
	- Installation with the following parameter **C:\oracle x64 true**

![xu-oracle-odp-net-managed-driver](/img/content/xu-oracle-odp-net-managed-driver.png){:class="img-responsive"}
