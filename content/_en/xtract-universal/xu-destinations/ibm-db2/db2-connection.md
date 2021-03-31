---
ref: xu-ibm-db2-02
layout: page
title: Connection
description: Connection
product: xtract-universal
parent: ibm-db2
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=db2-connection
---
### Adding DB2 Destination
1. In the main window of the Designer, navigate to **[Server] > [Manage Destinations]**. The window "Manage Destinations" opens.
2. Click **[Add]** to add a new destination. The window "Destination Details" opens.
![XU_DB2_Destination](/img/content/add-select-destination.png){:class="img-responsive"}
3. Fill in **Name**.
4. Select the *DB2* destination from the drop-down list.

### Destination Details

![DB2-Connection](/img/content/DB2-Connection.png){:class="img-responsive"}

**Type**<br>
Defines the Destination type.

**Provider**<br>
Defines the .Net provider for DB2. To install the provider refer to requirements.

**Host Name / Port**<br>
Defines the name or IP of the DB2 server and the port number. 

**Username / Password**<br>
IBM DB2 authentication user name and password.

**Database name**<br>
Defines the name of the IBM database.

**Default schema**<br>
Defines the schema of the DB2 database.

**Test Connection**<br>
Check the database connection.