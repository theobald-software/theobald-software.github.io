---
ref: xu-postgres-02
layout: page
title: Connection
description: connection
product: xtract-universal
parent: postgreSQL
permalink: /:collection/:path
weight: 2
lang: en_GB

---

The following settings must be defined for the connection to the target database.

![DESTINATION DETAILS](/img/content/xu/postgres_destination_details.png){:class="img-responsive"}

**Server Name**<br>
Name or IP of the database server and the port number.

**Require TLS encryption**<br>
If this option is enabled, Xtact Universal will enforce encrypted TLS connections to the PostgreSQL server - unencrypted connections will not be established. If this option is disabled, encrypted TLS connection will be established if supported by the server - otherwise, unencrypted connections will be used. see also [Secure TCP/IP Connections with SSL](https://www.postgresql.org/docs/11/ssl-tcp.html).

Please make sure that the Certification authority (CA) that signed the certificate or the certificate itself is trusted by the client.

**Windows Authentication**<br>
Uses the service account under which the XU service runs to authenticate itself to the PostgreSQL server, see also [Client authentication](https://www.postgresql.org/docs/11/client-authentication.html).

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

