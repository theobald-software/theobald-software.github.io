---
ref: destinations-50
layout: page
title: IBM DB2
description: IBM DB2
product: xtract-universal
parent: destinations
childidentifier: ibm-db2
permalink: /:collection/:path
weight: 50
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=db2
progressstate: 5
---

The following section describes the loading of the SAP extraction data to an IBM DB2 destination.


## Requirements

For the use of this destination, the appropriate version (32bit for 32bit OS, 64bit for 64bit OS) of the ADO .NET driver must be installed.  Select the *IBM Data Server Driver Package* and then the *IBM Data Server Driver Package (Windows AMD64 and Intel EM64T)* or 
*IBM Data Server Driver Package (Windows 32-bit AMD and Intel x86), see [IBM Data Server Client Packages - Version 11.5 GA](https://www.ibm.com/support/pages/node/387577.


If a fixed version is available, download the fixed version of the provider from the software vendor's website, see [Overview IBM Data Server Client Packages](https://www.ibm.com/support/pages/node/323035).<br> 

## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	

### Destination Details

![DB2-Connection](/img/content/DB2-Connection.png){:class="img-responsive"}

**Provider**<br>
Enter the .Net provider for DB2. To install the provider refer to requirements.

**Host Name / Port**<br>
Enter the name or IP of the DB2 server and the port number. 

**Username / Password**<br>
IBM DB2 authentication user name and password.

**Database name**<br>
Enter the name of the IBM database.

**Default schema**<br>
Enter the schema of the DB2 database.

**Test Connection**<br>
Check the database connection.

## Settings

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../../getting-started/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![ext_spec_set_de_form](/img/content/ibmdb2-configurations.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

{% include _content/en/xu-specific/destinations/general/sql-commands.md %}

{% include _content/en/xu-specific/destinations/general/transaction-style.md %}


## Merging Data

{% include _content/en/xu-specific/destinations/merge-data/db-merge-data.md  %}
