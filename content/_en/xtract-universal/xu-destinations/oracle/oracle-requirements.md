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

1. download the 64-bit driver from the above Oracle website
2. unpack the **ODP.NET_Managed_ODAC122cR1.zip** directory
3. start the command prompt and execute the **install_odpm.bat** file

![install_odpm_parameters](/img/content/xu/install_odpm.bat_paramter.png){:class="img-responsive"}
- Execution as **Admin-User** 
- Installation with the following parameter **c:\oracle x64 true**

![xu-oracle-odp-net-managed-driver](/img/content/xu-oracle-odp-net-managed-driver.png){:class="img-responsive"}
