---
ref: destinations-62
layout: page
title: MySQL
description: MySQL
product: xtract-universal
parent: destinations
childidentifier: mysql
permalink: /:collection/:path
weight: 62
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=mysql
progressstate: 5
---

The following section describes the loading of the SAP extraction data to a MySQL database destination.

## Requirements

Starting from the version Xtract Universal 4.2.26.0 the MySQL ADO.Net driver MySQL Data Provider is provided with the setup of Xtract Universal. 
There are no additional installations needed to use MySQL database destination.

## Connection
{% include _content/en/xu-specific/destinations/general/connection.md %}	

### Destination Details

![mysql_destination_details](/img/content/mysql_destination_details.png){:class="img-responsive"}

**Server Name** <br>
Enter the name of the server the MySQL database is hosted on.

**Server Port** <br>
Enter the port of the server the MySQL database is hosted on.

**User Name** <br>
Enter the MySQL database user ID.

**Password** <br>
Enter the password of the database user.

**Database** <br>
Enter the name of the MySQL database.

**Test Connection** <br>
Check the database connection. 

## Settings
### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![ext_spec_set_de_form](/img/content/mysql-configurations.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}
{% include _content/en/xu-specific/destinations/general/file-name-script-expressions.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

{% include _content/en/xu-specific/destinations/general/sql-commands.md %}

{% include _content/en/xu-specific/destinations/general/transaction-style.md %}

## Merging Data

{% include _content/en/xu-specific/destinations/merge-data/db-merge-data.md  %}