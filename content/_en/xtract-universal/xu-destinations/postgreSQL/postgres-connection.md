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

{% include _content/en/xu-specific/xu-destinations/general/connection.md %}	

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

**Private endpoint**<br>
This field is optional. You can enter an alternative hostname under which a connection is established. <br>
Example: The PostgreSQL database is hosted on a cloud and access to the database's cloud domain name is restricted by company policy. 
In this case the database can be accessed through a private endpoint. Enter the private endpoint in this field. 
The PostgreSQL cloud domain name must be entered in the field **Server Name** for certificate validation.

**Port**<br>
Port 5432 is selected by default.

**Windows Authentication**<br>
Uses the service account, under which the XU service is running, for authentication against the PostgreSQL server, see also [Client authentication](https://www.postgresql.org/docs/11/client-authentication.html).

{: .box-note }
**Note:** To successfully connect to the database using Windows authentication, make sure to [run the XU service under a Windows AD user](../../advanced-techniques/service-account) with access to the database.

**Username**<br>
Enter the name of the database user.

**Password**<br>
Enter the password of the database user.

**Database**<br>
Enter the name of the database.

**Test Connection**<br>
Test the database connection.


