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
### Adding Oracle Destination
1. To add a new destination, see [Managing Destinations](../managing-destinations)
2. Fill in **Name**.
3. Select the *Oracle* destination from the drop-down list.

### Destination Details

![XU_oracle_connection_test_1](/img/content/XU_oracle_connection_test_1.png){:class="img-responsive"}


Alternatively you can enter the [connect descriptor](https://docs.oracle.com/html/E10927_01/featConnecting.htm), such as:

(DESCRIPTION =<br>
 (ADDRESS = (PROTOCOL = TCP)<br>
(HOST = [oracle host name])(PORT = [port number]))<br>
(CONNECT_DATA =<br>
(SERVER = DEDICATED)<br>
(SERVICE_NAME = [oracle service name])))<br>

**Example**
- Host Name: dbtest
- Instance Name: oracle12c
- Server Version: 12.2.0.2.0

![XU_oracle_connection_test_2](/img/content/XU_oracle_connection_test_2.png){:class="img-responsive"}


**Host / Data source** <br>
Defines the name of the Oracle server or the connect descriptor. 

**Port** <br>
Defines the Oracle server connection port (Default: 1521).

**SID / Service name** <br>
Defines the unique name (SID) or the alias (service name) of the Oracle database.

**Username** <br> 
Defines the user name.

**Password** <br>
Defines the password.
            
**Test Connection** <br>
Checks the database connection. 