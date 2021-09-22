---
ref: xu-amazon-aws-s3-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: amazon-aws-s3
permalink: /:collection/:path
weight: 3
progressstate: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=settings5
---

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../../getting-started/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![XU_S3_DestinationEinstellungen](/img/content/XU_S3_DestinationEinstellungen.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}

{: .box-note }
**Note:** If the name of an object does not begin with a letter, it will be prefixed with an ‘x’, e.g. an object by the name `_namespace_tabname.csv` will be renamed `x_namespace_tabname.csv` when uploaded to the destination.
This is to ensure that all uploaded objects are compatible with Azure Data Factory, Hadoop and Spark, which require object names to begin with a letter or give special meaning to objects whose names start with certain non-alphabetic characters. 


{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}


### Folder

Enter a folder name without slashes here if you want the extraction to be extracted to a folder within an S3 bucket.<br>
Subfolders are also supported and can be entered as follows: `Folder/Subfolder1/Subfolder2/` <br>
This field allows entry of [script expressions](../../advanced-techniques/script-expressions#using-script-expressions-as-dynamic-folder-paths). 
This way, a folder path can be dynamically determined at extraction execution.

### File Splitting

**File Splitting**<br>

Writes extraction data of a single extraction to multiple files in Azure storage. Each filename is appended by *_part[nnn]*. 

**Max. file size** <br>
The value set in *Max. file size* determines the maximum size of the file stored in Azure storage. 


{: .box-note }
**Note:** The option *Max. file size* does not apply to gzip files. The size of a gzipped file cannot be determined in advance.
