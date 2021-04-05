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
### Adding PostgreSQL Destination
1. In the main window of the Designer, navigate to **[Server] > [Manage Destinations]**. The window "Manage Destinations" opens.
2. Click **[Add]** to add a new destination. The window "Destination Details" opens.
![XU_MySQL_Destination](/img/content/add-select-destination.png){:class="img-responsive"}
3. Fill in **Name**.
4. Select the *PostgreSQL* destination from the drop-down list.

### Destination Details

![DESTINATION DETAILS](/img/content/xu/postgres_destination_details.png){:class="img-responsive"}

**Server Name**<br>
Name or IP of the database server.

**TLS Mode**<br>
The following TLS modes can be selected for the connection:

|Mode|Description
|:--:|:---|
| Prefer | Default Value that uses TLS encryption, if supported by the server. If this is not the case, unencrypted connections are used|
| Require | Xtract Universal forces an encrypted TLS connection to the PostgreSQL server - unencrypted connections are not established |
| Disable |**Caution** - An unencrypted, insecure connection is established to the PostgreSQL server |

Please make sure that the Certification authority (CA) that signed the certificate or the certificate itself is trusted by the client.
For further information please see the following link: - [Secure TCP/IP Connections with SSL](https://www.postgresql.org/docs/11/ssl-tcp.html).

**Private endpoint?**<br>
Alternative hostname under which you can establish a connection. Example use case is hosting a PostgreSQL on an Azure cloud.

**Port**<br>
Port 5432 is selected by default.

**Windows Authentication**<br>
Uses the service account under which the XU service runs to authenticate itself to the PostgreSQL server, see also [Client authentication](https://www.postgresql.org/docs/11/client-authentication.html).

**Username**<br>
Name of the database user.

**Password**<br>
Password of the database user

**Database**<br>
Name of the database.

**Test Connection**<br>
Click on the button to test the database connection.

![DESTINATION DETAILS](/img/content/xu/postgres_test_connection.png){:class="img-responsive"}

