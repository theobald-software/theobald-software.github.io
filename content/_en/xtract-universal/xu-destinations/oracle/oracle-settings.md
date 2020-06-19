---
ref: xu-oracle-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: oracle
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=oracle-settings
---
### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Table](../../getting-started-table/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![ext_spec_set_de_form](/img/content/ext_spec_set_de_form.png){:class="img-responsive"}

{% include _content/en/xu-specific/xu-destinations/general/table-name.md %}
### Column name style
{% include _content/en/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/xu-destinations/general/date-conversion.md %}

{% include _content/en/xu-specific/xu-destinations/general/sql-commands.md %}


### Debugging

![Debugging](/img/content/debugging-bulk-insert.png){:class="img-responsive"}

{: .box-warning}
**Warning! Performance decrease!**
The performance decreases when bulk insert is disabled.
Disable the bulk insert only when necessary, e.g., upon request of the support team.


By activating the checkbox **Disable bulk operations**, 
the default bulk insert is deactivated when writing to a database.

This option enables detailed error analysis, if certain data rows cannot be persisted on the database.
Possible causes for the incorrect behavior could be incorrect values with regard to the stored data type.

Debugging needs to be deactivated again after the successful error analysis, otherwise the performance of the database write processes remains low. 

#### Using Custom SQL

{: .box-note }
**Note:** Bulk operations are generally supported when using [Custom SQL statements](#sql-commands) (e.g., by *Row Processing*) with an Oracle destination.

{: .box-tip }
**Tip:** To increase performance when using [Custom SQL statements](#sql-commands), it is recommended to perform the custom processing in the *Finalization* step.

{% include _content/en/xu-specific/xu-destinations/general/transaction-style.md %}
