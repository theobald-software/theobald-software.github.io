---
ref: xu-google-cloud-storage-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: google-cloud-storage
permalink: /:collection/:path
weight: 3
lang: en_GB
---

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../../getting-started/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![xu-google-cloud-dest-01](/img/content/xu/googlecloudstorage/xu-google-cloud-dest-01.png){:class="img-responsive"}

{% include _content/en/xu-specific/xu-destinations/general/file-name.md %}

### Column name style
{% include _content/en/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/xu-destinations/general/date-conversion.md %}

#### Folder name

To write extraction data to a location within a specific folder in a Google Cloud Storage bucket, enter a folder name without slashes.
Subfolders are supported and can be defined using the following syntax: 
`[folder]/[subfolder_1]/[subfolder_2]/…`

#### Compression

**None**<br>
The data is transferred uncompressed and stored as a csv file.

**gzip**<br>
The data is transferred compressed and stored as a gz file. 

### CSV File Splitting

**No Splitting**<br>
Writes extraction data of a single extraction to a single file in Google Cloud Storage.

**Split**<br>
Writes extraction data of a single extraction to multiple files in Google Cloud Storage. Each filename is appended by *_part[nnn]*. In case of .csv files, the file size is determined by the value set in *Max. CSV file size*.

**Max. CSV file size** <br>
Maximum size of a .csv file stored in the Google Cloud Storage account. 

{: .box-note }
**Note:** The option *Max. CSV file size* does not apply to gzip files. The size of a gzipped file cannot be determined in advance.
