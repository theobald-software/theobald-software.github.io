---
ref: xu-csv-flat-file-01
layout: page
title: Destination Settings
description: Destination Settings
product: xtract-universal
parent: csv-flat-file
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=csv-destination-settings
---
### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../../getting-started/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![XU_flatfile_csv_Destination](/img/content/XU_flatfile_csv_Destination.png){:class="img-responsive"}
      
{% include _content/en/xu-specific/xu-destinations/general/file-name.md %}	 

{% include _content/en/xu-specific/xu-destinations/general/column-name-style.md %}	  
{% include _content/en/xu-specific/xu-destinations/general/date-conversion.md %}	  
 
### Existing files
**Replace file**: The export process overwrites existing files.<br>
**Append results**: The export process appends new data to an already existing file.<br>
**Abort extraction**: The process is aborted, if the file already exists.  

