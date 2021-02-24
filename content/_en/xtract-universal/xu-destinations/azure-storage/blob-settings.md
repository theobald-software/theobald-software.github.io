---
ref: xu-azure-blob-storage-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: azure-storage
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

![xu-azure-blob-con-03](/img/content/xu-azure-blob-con-03.png){:class="img-responsive"}

{% include _content/en/xu-specific/xu-destinations/general/file-name.md %}

<!-- ### Column name style -->
{% include _content/en/xu-specific/xu-destinations/general/column-name-style.md %}


<!-- ### Date Conversion -->
{% include _content/en/xu-specific/xu-destinations/general/date-conversion.md %}

### Compression

**None**<br>
The data is transferred uncompressed and stored as a csv file.

**gzip**<br>
The data is transferred compressed and stored as a gz file. 

### Blob Type

**Append Blob**<br>
Creates an [Append Blob](https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs#about-append-blobs).

**Block Blob**<br>
Creates a [Block Blob](https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs#about-block-blobs).

{: .box-note }
**Note:** For both file types an MD5 hash is created upon upload to Azure storage.

### Folder path

Option to create a folder structure within the container for saving files. See also [Connection > Folder Path](./blob-connection#azure-storage-connection). <br>
For creating a single folder, enter a folder name without slashes: `[folder]` <br>
Subfolders are supported and can be defined using the following syntax: `[folder]/[subfolder_1]/[subfolder_2]/[..]`

This field allows entry of [script expressions](/../../advanced-techniques/script-expressions#using-script-expressions-as-dynamic-folder-paths). This way, a folder path can be dynamically determined at extraction execution. <br>

### File Splitting

**File Splitting**<br>

Writes extraction data of a single extraction to multiple files in Azure storage. Each filename is appended by *_part[nnn]*. 

**Max. file size** <br>
The value set in *Max. file size* determines the maximum size of the file stored in Azure storage. 


{: .box-note }
**Note:** The option *Max. file size* does not apply to gzip files. The size of a gzipped file cannot be determined in advance.

