---
ref: xu-postgres-02
layout: page
title: connection
description: connection
product: xtract-universal
parent: postgres
permalink: /:collection/:path
weight: 2
lang: en_GB

---

The following settings must be defined for the connection to the target database.

![DESTINATION DETAILS](/img/content/xu/postgres_destination_details.png){:class="img-responsive"}

**Server Name**<br>
Name or IP of the database server and the port number.

**Require SSL encryption**<br>
PostgreSQL provides native support for using SSL connections to encrypt client/server communication for increased security, see also [Secure TCP/IP Connections with SSL](https://www.postgresql.org/docs/11/ssl-tcp.html).

**Windows Authentication**<br>
Uses the service account under which the XU service runs to authenticate itself to the PostgreSQL server.

**Port**<br>
Port 5432 is selected by default

**Username**
Name of the database user.

**Password**<br>
Password of the database user

**Database**<br>
Name of the database

**Test Connection**<br>
Click on the button to test the database connection.

![DESTINATION DETAILS](/img/content/xu/postgres_test_connection.png){:class="img-responsive"}

