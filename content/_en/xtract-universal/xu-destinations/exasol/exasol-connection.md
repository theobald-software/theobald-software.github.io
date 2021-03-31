---
ref: xu-exasol-02
layout: page
title: Connection
description: Connection
product: xtract-universal
parent: exasol
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=exasol-connection
---
### Adding Exasol Destination
1. In the main window of the Designer, navigate to **[Server] > [Manage Destinations]**. The window "Manage Destinations" opens.
2. Click **[Add]** to add a new destination. The window "Destination Details" opens.
![XU_Exasol_Destination](/img/content/add-select-destination.png){:class="img-responsive"}
3. Fill in **Name**. 
4. Select the *EXASOL* destination from the drop-down list.

### Destination Details

![Exa-Connection](/img/content/Exa-Connection.png){:class="img-responsive"}

**Connection string**<br>
Defines the name or IP of the DB2 server and the port number. 

**User Id / Password**<br>
Defines the user Id and password of the database user.

**Schema**<br>
Defines the schema of the database.

**Provider**<br>
Defines the .Net provider for the database. To install the provider refer to [requirements](../amazon-aws-s3/requirements).
            
**Test Connection**<br>
Checks the database connection.