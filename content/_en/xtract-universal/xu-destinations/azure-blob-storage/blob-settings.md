---
ref: xu-azure-blob-storage-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: azure-blob-storage
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=blob-settings
---
When you click the **Destination** button, you can set extraction-specific settings for the destination.

![xu-azure-blob-con-03](/img/content/xu-azure-blob-con-03.png){:class="img-responsive"}

{% include _content/en/xu-specific/xu-destinations/general/table-name.md %}

{% include _content/en/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/xu-destinations/general/date-conversion.md %}

#### Compression

**None**<br>
The data is transferred uncompressed and stored as a csv file.

**gzip**<br>
The data is transferred compressed and stored as a gz file. 

#### Blob Type

**Append Blob**<br>
Consists of blocks, analogous to Blob Type, and are optimized for attachment operations.

**Block Blob**<br>
Text and binary data consisting of data blocks that can be managed individually.



After the successful extraction you will find the data in the Azure BLOB Storage.

![azure-blob-file-gz](/img/content/azure-blob-file-gz.png){:class="img-responsive"}


