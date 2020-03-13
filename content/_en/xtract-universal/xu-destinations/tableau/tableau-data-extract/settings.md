---
ref: xu-tableau-data-extract-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: tableau-data-extract
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=settings
---

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Table](../../../getting-started-table/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![Tableau-Extraction-Specific-Settings](/img/content/Tableau-Extraction-Specific-Settings.png){:class="img-responsive"}
      
{% include _content/en/xu-specific/xu-destinations/general/file-name.md %}
### Column name style
{% include _content/en/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/xu-destinations/general/date-conversion.md %}
     
**Existing files** <br>
**Replace file**: The export process will overwrite existing files.<br>
**Append results**: The export process will append new data to an already existing file.<br>
**Abort extraction**: The process will be aborted if the file already exists. 

