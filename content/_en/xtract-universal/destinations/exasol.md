---
ref: destinations-30
layout: page
title: EXASolution
description: EXASolution
product: xtract-universal
parent: destinations
childidentifier: exasol
permalink: /:collection/:path
weight: 30
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=exasol
progressstate: 5
---

The following section describes the loading of the SAP extraction data to an EXASOL Database destination.

## Requirements

Starting from the version Xtract Universal 4.2.26.0 the Exasol ADO.Net driver ExaDataProvider is provided with the setup of Xtract Universal. There are no additional installations needed to use Exasol database destination.


## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	 

### Destination Details

![Exa-Connection](/img/content/Exa-Connection.png){:class="img-responsive"}

**Connection string**<br>
Enter the name or IP of the DB2 server and the port number. 

**User Id / Password**<br>
Enter the user ID and password of the database user.

**Schema**<br>
Enter the schema of the database.
  
**Test Connection**<br>
Checks the database connection.


## Settings

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![ext_spec_set_de_form](/img/content/exasol-configuration.PNG){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}
{% include _content/en/xu-specific/destinations/general/file-name-script-expressions.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

{% include _content/en/xu-specific/destinations/general/sql-commands.md %}

{% include _content/en/xu-specific/destinations/general/debugging-bulk-insert.md %}

{% include _content/en/xu-specific/destinations/general/transaction-style.md %}

## Merging Data

{% include _content/en/xu-specific/destinations/merge-data/db-merge-data.md  %}

