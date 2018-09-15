---
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

The following settings can be defined for the Oracle destination.

![XU_oracle_connection_test_1](/img/content/XU_oracle_connection_test_1.png){:class="img-responsive"}


Alternatively you can enter the [connect descriptor](), such as:

(DESCRIPTION =<br>
 (ADDRESS = (PROTOCOL = TCP)<br>
(HOST = [oracle host name])(PORT = [port number]))<br>
(CONNECT_DATA =<br>
(SERVER = DEDICATED)<br>
(SERVICE_NAME = [oracle service name])))<br>

![XU_oracle_connection_test_2](/img/content/XU_oracle_connection_test_2.png){:class="img-responsive"}


**Connection**

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