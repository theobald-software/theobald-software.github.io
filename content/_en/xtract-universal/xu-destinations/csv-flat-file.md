---
ref: xu-destinations-14
layout: page
title: Flat File - CSV
description: Flat File - CSV
product: xtract-universal
parent: xu-destinations
childidentifier: csv-flat-file
permalink: /:collection/:path
weight: 10
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=csv-flat-file
progressstate: 5
---

This destination is a CSV (comma-separated values) flat file. 

### Adding a Destination

1. In the main window of the Designer, navigate to **Server > [Manage Destinations](./managing-destinations)**. The window “Manage Destinations” opens.
2. Click **[Add]** to create a new destination. The window "Destination Details" opens.
3. Enter a **Name** for the destination.
4. Select the destination **Type** from the drop-down menu.

### Destination Details
![CSV-Flat-Destination-Details](/img/content/xu/CSV-Flat-Destination-Details.png){:class="img-responsive"}

**File output path**<br>
Enter the directory to save the destination flat files in. 

{: .box-note }
**Note:** Filling out the field **Directory** creates a new folder, if it doesn't exist. 

{% include _content/en/xu-specific/xu-destinations/general/csv-settings.md %}														 

{% include _content/en/xu-specific/xu-destinations/general/convert-encoding.md %}	

### Column encryption
{% include _content/en/xu-specific/xu-destinations/general/column-encryption.md %}