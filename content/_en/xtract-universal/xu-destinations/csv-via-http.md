---
ref: xu-destinations-11
layout: page
title: Web Service - CSV
description: CSV (via HTTP)
product: xtract-universal
parent: xu-destinations
permalink: /:collection/:path
weight: 11
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=csv-via-http
progressstate: 5
---

The destination is a generic CSV stream over HTTP. 

The CSV (via HTTP) destination is supported by many products. The following products have been tested: Layer2 und INFONEA. 

### Adding HTTP - CSV Destination

1. In the main window of the Designer, navigate to **[Server] > [Manage Destinations]**. The window "Manage Destinations" opens.
2. Click **[Add]** to add a new destination. The window "Destination Details" opens.
3. Select the *HTTP - CSV* destination from the drop-down list.
4. Click **[OK]** to confirm.

### Destination Details
The window "Destination Details" consists of four subsections:
- Name (states the file name)
- Type (states the destination type)
- CSV Settings (see below)
- Convert / Encoding (see below)

![CSV-Destination-Details](/img/content/CSV-Destination-Details.png){:class="img-responsive"}

### CSV Settings

**Column seperator** <br>
Defines how two columns in CSV are separated.

**Row separator** <br>
Defines how two rows in CSV are separated.

**Quote symbol** <br>
Defines which character will be encased in the value of a table row, if the value contains the column separator.

**Column names in first row** <br>
Defines if the first row contains the column names. This option is set per default.

**Row separator after last row** <br>
Defines if the last row contains a row separator. This option is set per default.


### Convert / Encoding

**Decimal separator** <br>
Defines the decimal separator of decimal number for the output. Dot (.) is the default value. 
             
**Date format** <br>
Defines a customized date format (e.g. YYYY-MM-DD or MM/DD/YYYY) for converting valid SAP dates (YYYYMMDD). Default is YYYY-MM-DD.

**Time format** <br>
Defines a customized time format (e.g. HH-MM-SS or HH:MM:SS) for converting valid SAP times (HHMMSS). Default is HH:MM:SS.

**Text Encoding** <br> 
Defines the text encoding.