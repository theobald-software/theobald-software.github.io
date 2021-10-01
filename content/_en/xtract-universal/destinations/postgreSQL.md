---
ref: destinations-81
layout: page
title: PostgreSQL
description: PostgreSQL
product: xtract-universal
parent: destinations
childidentifier: postgreSQL
permalink: /:collection/:path
weight: 81
lang: en_GB
progressstate: 5
---

The following section describes the loading of the SAP extraction data into PostgreSQL target database.

## Requirements

### Data Provider

To load data into this destination, you need the Open Source ADO.NET Data Provider [Npgsql.dll](https://www.postgresql.org/docs/11/external-interfaces.html).
This is already available in the setup of the Xtract Universal and is provided when the **XtractUniversalSetup.exe** is executed. 

### Supported Versions

The following PostgreSQL versions are supported:
- 13
- 12
- 11
- 10
- 9.6
- 9.5
- 9.4

For further information on versioning, refer to the official [website](https://www.postgresql.org/support/versioning/).

## Connection


{% include _content/en/xu-specific/destinations/general/connection.md %}	

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


## Settings

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../../getting-started/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![postgres_destination](/img/content/xu/postgres_destination.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

{% include _content/en/xu-specific/destinations/general/sql-commands.md %}

{% include _content/en/xu-specific/destinations/general/debugging-bulk-insert.md %}

{% include _content/en/xu-specific/destinations/general/transaction-style.md %}

## Merging Data
{% include _content/en/xu-specific/destinations/merge-data/db-merge-data.md  %}

