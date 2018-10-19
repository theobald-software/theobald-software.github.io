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

Click on the Destination button to define extraction-specific settings of the extraction.

![xu-azure-blob-con-03](/img/content/xu-azure-blob-con-03.png){:class="img-responsive"}

The settings in the left part of the window correspond to the ones of the [flatfile csv-destination](../csv-flat-file/csv-destination-settings).

**Compression**

**None**<br>
Data is being transferred uncompressed and stored as a .csv file.

**gzip**<br>
Data is being transferred in a compressed format and stored as a .gz file.  

After a successful extraction you would find the result in your BLOB Storage.

![azure-blob-file-gz](/img/content/azure-blob-file-gz.png){:class="img-responsive"}
