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

The following settings can be defined for the Microsoft SQL Server connection. 

![MSSql-Destination-Details](/img/content/MSSql-Destination-Details.jpg){:class="img-responsive"}


**Server Name**<br>
Defines the name of the host the SQL server is running on.

**Require TLS encryption**<br>
Clientside enforcement for using [TLS encrpytion](https://docs.microsoft.com/en-us/azure/sql-database/sql-database-connect-query#tls-considerations-for-sql-database-connectivity). Adds the following paramenters to the connection string:<br>
* Encrypt = On
* TrustServerCertificate = Off
<br>
For further information, please see [Enable Encrypted Connections to the Database Engine](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/enable-encrypted-connections-to-the-database-engine?view=sql-server-2017)

**Windows Authentication**<br>
Uses the service account, under which the XU service is running, for authentication against SQL Server.

**Impersonate authenticated caller**<br>
Uses the Windows AD user, executing the extraction, for authentication against SQL Server using [Kerberos authentication.](https://blogs.msdn.microsoft.com/sqlupdates/2014/12/05/sql-server-kerberos-and-spn-quick-reference/)
<br>
For using this functionality a similar configuration as for [Kerberos Single Sign On against SAP](https://help.theobald-software.com/de/xtract-universal/fortgeschrittene-techniken/sap-single-sign-on/sso-with-kerberos-snc) is required.


**User Name**<br>
SQL Server authentication - user name 

**Password**<br>
SQL Server authentication - password

**Database Name**<br>
Defines the name of the SQL Server database.
             
**Test Connection**<br>
Checks the database connection. 


**Database Schema**<br> 
By default the user's default schema dbo will be used. 
To use another schema, you should set it as the [default schema](https://docs.microsoft.com/en-us/sql/t-sql/statements/alter-user-transact-sql?view=sql-server-2017) for your user on the SQL Server database. 