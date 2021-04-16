---
ref: xu-destinations-11
layout: page
title: Web Service - CSV
description: CSV (via HTTP)
product: xtract-universal
parent: xu-destinations
permalink: /:collection/:path
weight: 12
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=csv-via-http
progressstate: 5
---

The destination is a generic CSV stream over HTTP. 

The CSV (via HTTP) destination is supported by many products. The following products have been tested: Layer2 und INFONEA. 

### Adding HTTP - CSV Destination
1. To add a new destination, see [Managing Destinations](./managing-destinations)
2. Fill in **Name**.
3. Select the *HTTP - CSV* destination from the drop-down list.

### Destination Details
The window "Destination Details" consists of four subsections:
- Name (states the file name)
- Type (states the destination type)
- CSV Settings (see below)
- Convert / Encoding (see below)

![CSV-Destination-Details](/img/content/xu/CSV-Destination-Details.png){:class="img-responsive"}

{% include _content/en/xu-specific/xu-destinations/general/csv-settings.md %}														 

{% include _content/en/xu-specific/xu-destinations/general/convert-encoding.md %}		