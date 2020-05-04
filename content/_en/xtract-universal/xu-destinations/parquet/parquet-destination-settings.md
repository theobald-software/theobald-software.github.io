---
ref: xu-parquet-01
layout: page
title: Destination Settings
description: Destination Settings
product: xtract-universal
parent: parquet
permalink: /:collection/:path
weight: 1
lang: en_GB
---

### Opening Destination Settings

1. Create or select an existing extraction (see also [Getting Started with Table](../../getting-started-table/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the Parquet destination.  
  
### Destination Settings
The window "Destination Settings" consists of the following subsections:
- File Name
- Column Name Style
- Date Conversion
- Existing files

![XU_parquet_Destination](/img/content/xu/parquet/parquet_destination_settings.png){:class="img-responsive"}

{% include _content/en/xu-specific/xu-destinations/general/file-name.md %}
{% include _content/en/xu-specific/xu-destinations/general/column-name-style.md %}        
{% include _content/en/xu-specific/xu-destinations/general/date-conversion.md %}

### Existing files
The option *Existing files* is connected to the *Directory* option defined in the [Destination Details](../parquet#destination-details).<br>
**Replace file** - replaces the existing file in the directory, where the parquet file is saved.<br>
**Abort extraction** - aborts the extraction, if the flat file already exists in the defined directory.
