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
Clic the **[Destination]** button to set extraction-specific settings for the destination.

![xu-azure-blob-con-03](/img/content/xu-azure-blob-con-03.png){:class="img-responsive"}

{% include _content/en/xu-specific/xu-destinations/general/file-name.md %}

### Column name style
{% include _content/en/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/xu-destinations/general/date-conversion.md %}

### Compression

**None**<br>
The data is transferred uncompressed and stored as a csv file.

**gzip**<br>
The data is transferred compressed and stored as a gz file. 

### Blob Type

**Append Blob**<br>
Creates an [Append Blob](https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs#about-append-blobs)

**Block Blob**<br>
Creates a [Block Blob](https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs#about-block-blobs) 

{: .box-note }
**Note:** For both file types an MD5 hash will be created upon upload to Azure storage.

### Folder Path

Enter a folder name without slashes if you want the extraction to be extracted to a specific folder within an Azure Blob container.
Subfolders are supported and can be entered using the following syntax: [folder[/[subfolder_1]/[subfolder_2]/…


### CSV File Splitting

**No Splitting**
Writes extraction data of a single extraction to a single file in Azure storage.

**Split**
Writes extraction data of a single extraction to multiple files in Azure storage. Each filename will be appended by *_part[nnn]*. In case of csv files, the file size is determined by the value set in *Max. CSV file size*.

**Max. CSV file size**
Maximum size of a csv file stored in an Azure storage account. 

{: .box-note }
**Note:** The Max. CSV file size does not apply to gzip files. The size of a gzipped file cannot be determined in advance.

