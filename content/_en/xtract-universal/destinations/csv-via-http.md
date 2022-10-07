---
ref: destinations-11
layout: page
title: Web Service - CSV
description: CSV (via HTTP)
product: xtract-universal
parent: destinations
permalink: /:collection/:path
weight: 12
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=csv-via-http
progressstate: 5
---

This destination is a generic CSV stream over HTTP. 
The CSV (via HTTP) destination is supported by many products. The following products have been tested: Layer2, INFONEA and KNIME. 

## Connection
### Adding a Destination

1. In the main window of the Designer, navigate to **Server > [Manage Destinations](./managing-destinations)**. The window “Manage Destinations” opens.
2. Click **[Add]** to create a new destination. The window "Destination Details" opens.
3. Enter a **Name** for the destination.
4. Select the destination **Type** from the drop-down menu.

### Destination Details
![CSV-Destination-Details](/img/content/xu/CSV-Destination-Details.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/csv-settings.md %}														 

{% include _content/en/xu-specific/destinations/general/convert-encoding.md %}	

## Settings

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction)).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![XU_http-csv_Destination](/img/content/XU_http-csv_Destination.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}	  
{% include _content/en/xu-specific/destinations/general/date-conversion.md %}	  

