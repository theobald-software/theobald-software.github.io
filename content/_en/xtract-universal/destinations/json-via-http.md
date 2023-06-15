---
ref: destinations-10
layout: page
title: Web Service - JSON
description: JSON (via HTTP)
product: xtract-universal
parent: destinations
permalink: /:collection/:path
weight: 13
lang: en_GB
progressstate: 5
---

The JSON destination is a generic JSON stream over HTTP. 

## Connection

### Adding a Destination

1. In the main window of the Designer, navigate to **Server > [Manage Destinations](./managing-destinations)**. The window “Manage Destinations” opens.
2. Click **[Add]** to create a new destination. The window "Destination Details" opens.
3. Enter a **Name** for the destination.
4. Select the destination **Type** from the drop-down menu.

### Destination Details
To use the JSON destination, no further settings have to be made.

## Settings

### Opening the Destination Settings
1. Create or select an existing extraction, see [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![XU_JSON_Destination](/img/content/XU_http-json_Destination.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}	  
{% include _content/en/xu-specific/destinations/general/date-conversion.md %}	  


## Running an Extraction in Browser
1. Run the extraction with HTTP-JSON destination in browser (see also [Getting Started with Xtract Universal](../getting-started/run-an-extraction)).
2. Check the extraction results.
![JSON-Extraction-in-Browser](/img/content/xu/json/json_run-in-browser.png){:class="img-responsive"}


