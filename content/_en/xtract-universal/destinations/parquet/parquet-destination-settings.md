---
ref: xu-parquet-01
layout: page
title: Settings
description: Destination Settings
product: xtract-universal
parent: parquet
permalink: /:collection/:path
weight: 3
lang: en_GB
progressstate: 5
---

### Opening Destination Settings

1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../../getting-started/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the Parquet destination.  
  
### Destination Settings

![XU_parquet_Destination](/img/content/xu/parquet/parquet_destination_settings.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}
{% include _content/en/xu-specific/destinations/general/column-name-style.md %}        
{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

### Existing files
The option *Existing files* is connected to the *Directory* option defined in the [Destination Details](../parquet#destination-details).<br>
**Replace file** - replaces the existing file in the directory, where the parquet file is saved.<br>
**Abort extraction** - aborts the extraction, if the flat file already exists in the defined directory.
