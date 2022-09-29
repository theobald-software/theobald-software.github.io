---
ref: destinations-25
layout: page
title: Azure Synapse Analytics (SQL pool)
description: Azure Synapse Analytics (SQL pool)
product: xtract-universal
parent: destinations
childidentifier: azure-synapse-analytics
permalink: /:collection/:path
weight: 25
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=azure_dwh
progressstate: 5
---

The following section describes the loading of the SAP extraction data to Azure Synapse Analytics (SQL pool).

## Requirements

To use the Azure Synapse Analytics (SQL pool) destination, you need:

- an existing [Azure Analytics SQL database](https://docs.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart?tabs=azure-portal).
- [Azure portal firewall rules](https://docs.microsoft.com/en-us/azure/azure-sql/database/secure-database-tutorial#create-firewall-rules) that grant access for the IP addresses Xtract Universal is running on.

## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	

### Destination Details
![XU_AzureSA_Verbindungen](/img/content/XU_AzureSA_Verbindungen.png){:class="img-responsive"}

#### Connection
**Server Name**<br>
Enter the name of the Azure Servers: `[servername].database.windows.net`

**User Name**<br> 
Enter the user name.

**Password**<br>
Enter the password.

**Database Name**<br>
Enter the name of the Azure Synapse Analytics (SQl pool).

**Test Connection**<br>
Check the database connection. 


## Settings
### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  


### Destination Settings
![ext_spec_set_de_form](/img/content/azuredwh-configurations.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}
{% include _content/en/xu-specific/destinations/general/file-name-script-expressions.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

{% include _content/en/xu-specific/destinations/general/sql-commands.md %}

{% include _content/en/xu-specific/destinations/general/debugging-bulk-insert.md %}

{% include _content/en/xu-specific/destinations/general/transaction-style.md %}

## Merging Database

{% include _content/en/xu-specific/destinations/merge-data/db-merge-data.md  %}

*****
## Related Links
- [Microsoft Azure Synapse Analytics](https://docs.microsoft.com/en-us/azure/synapse-analytics/)
- [Integration via Azure Data Factory](../execute-and-automate-extractions/call-via-etl#integration-via-azure-data-factory)