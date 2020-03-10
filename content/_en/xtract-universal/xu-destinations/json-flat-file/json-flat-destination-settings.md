---
ref: xu-JSON-flat-file-01
layout: page
title: Destination Settings
description: Destination Settings
product: xtract-universal
parent: json-flat-file
permalink: /:collection/:path
weight: 1
lang: en_GB

---

### Opening Destination Settings

1. Create or select an existing extraction (see also [Getting Started with Table](./getting-started-table/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination JSON flat file destination.  
  
### Destination Settings
The window "Destination Settings" consists of the following subsections:
- File Name
- Column Name Style
- Date Conversion
- Existing files

![XU_flatfile_JSON_Destination](/img/content/xu/json/XU_flatfile_JSON_Destination.png){:class="img-responsive"}

{% include _content/en/xu-specific/xu-destinations/general/file-name.md %}
{% include _content/en/xu-specific/xu-destinations/general/column-name-style.md %}        
{% include _content/en/xu-specific/xu-destinations/general/date-conversion.md %}

### Existing files
The option *Existing files* is connected to the *Directory* option defined in the [Destination Details](/json-flat-file). <br>
**Replace file** - replaces the existing file in the directory, where the flat file is saved. <br>
**Abort extraction** - aborts the extraction, if the flat file already exists in the defined directory.