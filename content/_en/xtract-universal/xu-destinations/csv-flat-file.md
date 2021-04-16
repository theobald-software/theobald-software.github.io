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

The destination is a CSV (comma-seperated values) flat file. 

### Adding Flat File CSV Destination
1. To add a new destination, see [Managing Destinations](../managing-destinations)
2. Fill in **Name**.
3. Select the *Flat File - CSV* destination from the drop-down list.

### Destination Details
The window "Destination Details" consists of subsections:
- Name (states the file name)
- Type (states the destination type)
- File (see below)
- CSV Settings (see below)
- Convert / Encoding (see below)
- Column encryption (see below)

![CSV-Flat-Destination-Details](/img/content/xu/CSV-Flat-Destination-Details.png){:class="img-responsive"}

### File
**Directory**<br>
Defines the directory to save the destination flat files.

{% include _content/en/xu-specific/xu-destinations/general/csv-settings.md %}														 

{% include _content/en/xu-specific/xu-destinations/general/convert-encoding.md %}	

### Column encryption
{% include _content/en/xu-specific/xu-destinations/general/column-encryption.md %}