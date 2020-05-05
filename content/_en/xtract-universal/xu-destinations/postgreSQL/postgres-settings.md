---
ref: xu-postgres-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: postgreSQL
permalink: /:collection/:path
weight: 3
lang: en_GB
---

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Table](../../getting-started-table/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![postgres_destination](/img/content/xu\postgres_destination.png){:class="img-responsive"}

{% include _content/en/xu-specific/xu-destinations/general/table-name.md %}
### Column name style
{% include _content/en/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/xu-destinations/general/date-conversion.md %}

{% include _content/en/xu-specific/xu-destinations/general/sql-commands.md %}

{% include _content/en/xu-specific/xu-destinations/general/debugging-bulk-insert.md %}

{% include _content/en/xu-specific/xu-destinations/general/transaction-style.md %}