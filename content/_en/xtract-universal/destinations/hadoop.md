---
ref: destinations-35
layout: page
title: Hadoop
description: Hadoop
product: xtract-universal
parent: destinations
permalink: /:collection/:path
weight: 35
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=amazon-aws-s3
progressstate: 5
---

The following section describes data extraction to Amazons's cloud storage S3.

## Requirements

-Hadoop user with write access


## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	 

### Destination Details

![XU_Hadoop_DestinationDetails](/img/content/xu/hadoop/hadoop-destination-details.png){:class="img-responsive"}

### Hadoop Settings

#### HDFS Web API

**Web Hdfs URL**<br>

**User name**<br>

**Connect**<br>
After entering the web API and the user, click **[Connect]** to ckeck if a connection can be established.


### File Format

**File type**<br>
Select the required file format. You can choose between *CSV*, *Parquet* and *Json*.

![XU_Hadoop_DestinationDetails2](/img/content/xu/hadoop/hadoop-destination-details2.png){:class="img-responsive"}

#### CVS Settings

The settings for file type *CSV* correspond to the [Flat File CSV settings](./csv-flat-file).

#### Parquet Settings

**Compatibility mode**<br>
You can choose between *Pure* and *Spark* for the compatibility mode.
Spark does not support the data types used in pure mode, so other data types need to be used.

| SAP | Pure | Spark |
|------|-------------|-------|
| INT1 | UINT_8 | INT16 |
| TIMS | TIME_MILLIS | UTF8 |

#### Json Settings

To write data in json format, no further settings have to be made.

## Settings

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![XU_Hadoop_DestinationEinstellungen](/img/content/xu/hadoop/hadoop-destination-settings.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}

{: .box-note }
**Note:** If the name of an object does not begin with a letter, it will be prefixed with an ‘x’, e.g. an object by the name `_namespace_tabname.csv` will be renamed `x_namespace_tabname.csv` when uploaded to the destination.
This is to ensure that all uploaded objects are compatible with Azure Data Factory, Hadoop and Spark, which require object names to begin with a letter or give special meaning to objects whose names start with certain non-alphabetic characters. 


{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

### Hadoop Remote Folder

Enter a folder name without slashes here if you want the extraction to be extracted to a folder within an S3 bucket.<br>
Subfolders are also supported and can be entered as follows: `Folder/Subfolder1/Subfolder2/` <br>
This field allows entry of [script expressions](../advanced-techniques/script-expressions#using-script-expressions-as-dynamic-folder-paths). 
This way, a folder path can be dynamically determined at extraction execution.

