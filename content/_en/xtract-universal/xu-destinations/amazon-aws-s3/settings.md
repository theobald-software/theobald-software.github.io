---
ref: xu-amazon-aws-s3-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: amazon-aws-s3
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=settings5
---

Click on the Destination button to define extraction-specific settings of the extraction.

![XU_S3_DestinationEinstellungen](/img/content/XU_S3_DestinationEinstellungen.jpg){:class="img-responsive"}

The settings in the left part of the window correspond to the ones of the [flatfile csv-destination](../csv-flat-file/csv-destination-settings).

**Folder Path**<br>
Enter a folder name without slashes here if you want the extraction to be extracted to a folder within an S3 bucket.
Subfolders are also supported and can be entered as follows: Folder/Subfolder1/Subfolder2/...

**Compression**

**None**<br>
Data is being transferred uncompressed and stored as a .csv file on S3.

**gzip**<br>
Data is being transferred in a compressed format and stoard as a .gz file on S3.