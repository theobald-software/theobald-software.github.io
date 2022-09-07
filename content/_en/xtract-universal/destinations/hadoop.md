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

The following section shows how to load extracted SAP data to [Hadoop](https://hadoop.apache.org/).

## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	 

### Destination Details

![XU_Hadoop_DestinationDetails](/img/content/xu/hadoop/hadoop-destination-details.png){:class="img-responsive"}

### Hadoop Settings

#### HDFS Web API

**Web Hdfs URL**<br>
Enter the URL of the REST API. The URL contains the prefix `/webhdfs/v1/`
and has the following format: `http://[host]:[port]/webhdfs/v1/[path]`<br>
For more information on Hdfs URLs, see [WebHDFS REST API: FileSystem URIs vs HTTP URLs](http://hadoop.apache.org/docs/r3.3.1/hadoop-project-dist/hadoop-hdfs/WebHDFS.html#FileSystem_URIs_vs_HTTP_URLs).

**User name**<br>
Enter a user name with write access to the hadoop destination.
If no user name is provided, the default user *dr.who* is used.

**Connect**<br>
After entering the web URL and the user, click **[Connect]** to check if a connection can be established.


### File Format

**File type**<br>
Select the required file format. You can choose between *CSV*, *Parquet* and *Json*.

![XU_Hadoop_DestinationDetails2](/img/content/xu/hadoop/hadoop-destination-details2.png){:class="img-responsive"}

#### CVS Settings

The settings for file type *CSV* correspond to the [Flat File CSV settings](./csv-flat-file).

#### Parquet Settings

**Compatibility mode**<br>
You can choose between *Pure* and *Spark* for the compatibility mode.
Spark does not support the data types used in pure mode, so other data types need to be used. In spark mode special characters and spaces are replaced with an underscore `_`.

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

Enter the name of a folder to write the data in.<br>
Subfolders are also supported and can be entered as follows: `Folder/Subfolder1/Subfolder2/`. 
If the entered folder does not exist, a new folder is created.<br>
If no folder is entered, the data will be written into the root folder.

{: .box-note }
**Note:** **Hadoop Remote Folder** allows entry of [script expressions](../advanced-techniques/script-expressions). 
This allows to dynamically set a folder path when executing an extraction

#### Using Script Expressions as Dynamic Folder Paths

Script expressions can be used to generate a dynamic folder path. <br>
This allows generating folder paths that are composed of an extraction's properties, e.g. extraction name, SAP source object.

This scenario supports:
- Script expressions based on .NET
- XU-specific custom script expressions

The following XU-specific custom script expressions are supported: 

| Input                                                   | Description|
|:--------------------------------------------------------|:-----------|
|```#{Source.Name}# ```|  Name of the extraction's SAP source.|
|```#{Extraction.ExtractionName}# ```| Name of the extraction. |
|```#{Extraction.Type}# ```|  Extraction type (*Table*, *ODP*, *DeltaQ*, etc.). |
|```#{Extraction.SapObjectName}# ```|  Name of the SAP object the extraction is extracting data from. |
|```#{Extraction.Timestamp}# ```|  Timestamp of the extraction.  |
|```#{Extraction.SapObjectName.TrimStart("/".ToCharArray())}# ```  |Trims the first slash '/' of an SAP object, e.g. /BIO/TMATERIAL to BIO/TMATERIAL, so as not to create an empty folder in a file path.
|```#{Extraction.SapObjectName.Replace('/', '_')}#``` | Replaces all slashes '/' of an SAP object, e.g. /BIO/TMATERIAL to _BIO_TMATERIAL, so as not to split the SAP object name by folders in a file path.         |
|```#{Extraction.Context}# ```|  Only for ODP extractions. Returns the context of the ODP object (*SAPI*, *ABAP_CDS*, etc). |
|```#{Extraction.Fields["[NameSelectionFiels]"].Selections[0].Value}#```| Only for ODP extractions. Input value of a defined selection / filter.| 
|```#{TableExtraction.WhereClause}#``` | Only for Table extractions. WHERE clause of the extraction.  |

### WebHdfs API's Option

**Overwrite existing**<br>
If this option is active, files with the same name will be overwritten.<br>
If this option is not active and the target folder contains a file with the same name as the new file, the upload will fail.

*****
### Related Links
- [Hadoop Documentation](http://hadoop.apache.org/docs/r3.3.1/index.html)
- [HDFS Users Guide](http://hadoop.apache.org/docs/r3.3.1/hadoop-project-dist/hadoop-hdfs/HdfsUserGuide.html)
