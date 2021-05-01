---
ref: xu-sap-hana-02
layout: page
title: Connection
description: Connection
product: xtract-universal
parent: sap-hana
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=hana-connection
---

{% include _content/en/xu-specific/destinations/general/connection.md %}	

### Destination Details
The following settings can be defined for the HANA database or SAP Data Warehouse Cloud (DWC) connection:

- SAP HANA database
![hana-destination](/img/content/hana-destination2.png){:class="img-responsive"}
- SAP Data Warehouse Cloud
![hana-destination](/img/content/hana-destination.png){:class="img-responsive"}

**Server Name**<br>
Enter the address of the server (including the port number). Note the different port numbers for HANA and DWC (see screenshots).

**User Name**<br>
Enter the SAP HANA/DWC user name. 

**Password**<br>
Enter the user password.

**Database**<br> 
Enter the name of the database.
 
**Schema**<br>
Enter the name of the database schema.

**Use encryption**<br>
Activates connection encryption. This is required when connecting to SAP DWC.

**Test Connection**<br>
Check the database connection.  