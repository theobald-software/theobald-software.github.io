---
ref: xu-oracle-02
layout: page
title: Connection
description: Connection
product: xtract-universal
parent: oracle
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=oracle-connection
---

{% include _content/en/xu-specific/xu-destinations/general/connection.md %}	

### Destination Details

![XU_oracle_connection_test_1](/img/content/XU_oracle_connection_test_1.png){:class="img-responsive"}


**Host / Data source** <br>
Enter the name of the Oracle server. 
Alternatively you can enter the [connect descriptor](https://docs.oracle.com/html/E10927_01/featConnecting.htm), such as:

*(DESCRIPTION =*<br>
*(ADDRESS = (PROTOCOL = TCP)*<br>
*(HOST = [oracle host name])(PORT = [port number]))*<br>
*(CONNECT_DATA =*<br>
*(SERVER = DEDICATED)*<br>
*(SERVICE_NAME = [oracle service name])))*<br>

**Port** <br>
Enter the Oracle server connection port (Default: 1521).

**SID / Service name** <br>
Enter the unique name (SID) or the alias (service name) of the Oracle database.

**Username** <br> 
Enter the user name.

**Password** <br>
Enter the password.

**Test Connection** <br>
Check the database connection. 