---
ref: xu-microsoft-sql-server-02
layout: page
title: Connection
description: Connection
product: xtract-universal
parent: microsoft-sql-server
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=sql-server-connection
---

{% include _content/en/xu-specific/destinations/general/connection.md %}	

### Destination Details

![MSSql-Destination-Details](/img/content/MSSql-Destination-Details.png){:class="img-responsive"}

**Server Name**<br>
Specifies the host address of the SQL Server. Please note the following syntax:

|syntax | e.g. |
|:---|:---|
|[ServerName]| `dbtest`|
|[ServerName],[Port]| `dbtest,1433`|
|[ServerName].[Domain],[Port] |  `dbtest.theobald.software,1433`|

It is only necessary to specify the port if it has been edited outside the SQL standard.

**Require TLS encryption**<br>
Client-side enforcement for using [TLS encrpytion](https://docs.microsoft.com/en-us/azure/sql-database/sql-database-connect-query#tls-considerations-for-sql-database-connectivity). Adds the following paramenters to the connection string:<br>
* Encrypt = On
* TrustServerCertificate = Off
<br>
For further information, please see [Enable Encrypted Connections to the Database Engine](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/enable-encrypted-connections-to-the-database-engine?view=sql-server-2017)

**Windows Authentication**<br>
Uses the service account, under which the XU service is running, for authentication against SQL Server.

{: .box-note }
**Note:** To successfully connect to the database using Windows authentication, make sure to [run the XU service under a Windows AD user](../../advanced-techniques/service-account) with access to the database.

**Impersonate authenticated caller**<br>
Uses the Windows AD user, executing the extraction, for authentication against SQL Server using [Kerberos authentication.](https://blogs.msdn.microsoft.com/sqlupdates/2014/12/05/sql-server-kerberos-and-spn-quick-reference/)
<br>
For using this functionality a similar configuration as for [Kerberos Single Sign On against SAP](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/sap-single-sign-on/sso-with-kerberos-snc) is required.


**User Name**<br>
SQL Server authentication - user name 

**Password**<br>
SQL Server authentication - password

**Database Name**<br>
Defines the name of the SQL Server database.

**Test Connection**<br>
Checks the database connection. 
