---
ref: destinations-40
layout: page
title: Huawei Cloud OBS (Preview)
description: Huawei Cloud OBS (Preview)
product: xtract-universal
parent: destinations
permalink: /:collection/:path
weight: 40
lang: en_GB
progressstate: 5
---
The following section describes data extraction to a Huawei Cloud Object Storage Service (OBS).

## Requirements

storage accounts?

## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	 

### Destination Details

![huawei-destination-details](/img/content/xu/huawei-destination-details.png){:class="img-responsive"}


#### Authentication
This method of authentication authorizes access to the complete storage account. 
General information about this method of authentication can be found in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage). <br>
Check the **Access key** checkbox to select this connection type.

#### Connection via Access Key
**Storage account** <br>
Enter your storage account name. Do not enter the full URL.

**Access key** <br>
Enter the access key of the Azure Storage account. 
 
 {: .box-tip }
**Tip:** Copy your storage account name and access key from the [Azure Portal](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=/azure/storage/blobs/toc.json#view-access-keys-and-connection-string).


**Connect** <br>
Click **[Connect]** to establish a connection to the storage account. 
If the connection is successful, a "Connection successful" info window opens.
Click **[OK]** to confirm. <br>


**Test connection** <br>
Click **[Test Connection]** to check if the storage container can be accessed. <br>
If the connection is successful, a "Connection to container <*name of container*> successful" info window opens. <br>

### Bucket

{% include _content/en/xu-specific/destinations/general/column-encryption.md %}

### Misc

{: .box-note }
**Note:** The settings in *Misc* can only be used in combination with a Blob container.<br> 

**Folder path** <br>
Option to create a folder structure within the container for saving files. 
See also [**Destination Settings > Folder Path**](#folder-path). <br>
For creating a single folder, enter a folder name without slashes: `[folder]` <br>
Subfolders are supported and can be defined using the following syntax: `[folder]/[subfolder_1]/[subfolder_2]/[..]`

**Folder path** allows entry of [script expressions](./../advanced-techniques/script-expressions).
This allows to dynamically set a folder path when running an extraction. <br>


### File Format

**File type**<br>
Select the required file format. You can choose between *CSV*, *Parquet* and *JSON*.

![huawei-destination-details2](/img/content/xu/huawei-destination-details2.png){:class="img-responsive"}


#### CVS Settings

The settings for file type *CSV* correspond to the [Flat File CSV settings](./csv-flat-file).

#### Parquet Settings

The following compatibility modes are available:
- *Pure* 
- *Spark* 
- *BigQuery*

Spark does not support the data types used in pure mode, so other data types need to be used. Special characters (e.g. ~) can be used in column names, when the option *Allow special characters in column name* is activated.<br>

![huawei-destination-details3](/img/content/xu/huawei-destination-details3.png){:class="img-responsive"}

<!--
In spark mode special characters and spaces are replaced with an underscore `_`. -->

| SAP | Pure / BigQuery | Spark |
|------|-------------|-------|-------|
| INT1 | UINT_8 | INT16 |
| TIMS | TIME_MILLIS | UTF8 |

### Connection Retry and Rollback

Connection retry and rollback are built-in functions of the Azure Storage destination.
They are activated by default. 

Connection retry is a functionality that prevents extractions from failing if the connection to Azure is interrupted.
The retry function is implemented according to [Microsoft Guidelines](https://docs.microsoft.com/en-us/azure/architecture/best-practices/retry-service-specific#retry-strategies).
The retry logic is based on WebExceptionStatus. 

If an exception is thrown, Xtract Universal uses an exponential retry strategy to reestablish connection to Azure.
The selected exponential retry strategy results in 7 retry attempts and an overall timespan of 140 seconds. 
If a connection is not established during this timespan, the extraction fails.

Rollback covers scenarios where extractions do not fail due to connection failures to Azure but e.g. due to an error when connecting to SAP.
In those particular cases Xtract Universal tries to remove any files from Azure storage that were created in the course of the extraction.

<!---- using an exponential backoff, meaning 8 retries with an increasing waiting time between the requests: 1s, 2s, 4s, 8s, 16s, etc.
See also [Microsoft documentation](https://docs.microsoft.com/en-us/azure/architecture/best-practices/retry-service-specific#general-rest-and-retry-guidelines). --->


## Settings

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction)).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![huawei-destination-settings](/img/content/xu/huawei-destination-settings.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}

{: .box-note }
**Note:** If the name of an object does not begin with a letter, it will be prefixed with an ‘x’, e.g. an object by the name `_namespace_tabname.csv` will be renamed `x_namespace_tabname.csv` when uploaded to the destination.
This is to ensure that all uploaded objects are compatible with Azure Data Factory, Hadoop and Spark, which require object names to begin with a letter or give special meaning to objects whose names start with certain non-alphabetic characters. 

{% include _content/en/xu-specific/destinations/general/file-name-script-expressions.md %}

<!-- ### Column name style -->
{% include _content/en/xu-specific/destinations/general/column-name-style.md %}


<!-- ### Date Conversion -->
{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

### Blob Type

**Append Blob**<br>
Creates an [Append Blob](https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs#about-append-blobs).

**Block Blob**<br>
Creates a [Block Blob](https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs#about-block-blobs).

{: .box-note }
**Note:** For both file types an MD5 hash is created upon upload to Azure storage.

### Folder

Option to create a folder structure within the container for saving files. See also [Connection > Folder Path](#azure-storage-connection). <br>
For creating a single folder, enter a folder name without slashes: `[folder]` <br>
Subfolders are supported and can be defined using the following syntax: `[folder]/[subfolder_1]/[subfolder_2]/[..]`

{% include _content/en/xu-specific/destinations/general/folder-script-expressions.md %}

### Common Data Model

If this option is enabled, a Common Data Model JSON file is generated and written to the destination alongside the extracted data.<br>
The CDM file can be used to automate data transformation in Azure.

For more information on Common Data Models, see [Microsoft Documentation: Common Data Model](https://learn.microsoft.com/en-us/common-data-model/).

**Entity name**<br>
Enter a name for the generated .cdm.json file.

{: .box-note }
**Note:** This option is still in preview mode.

{% include _content/en/xu-specific/destinations/general/compression.md %}

{% include _content/en/xu-specific/destinations/general/file-splitting.md %}

*****
## Related Links
- [Youtube Tutorial: SAP data in Azure Storage via Xtract Universal](https://www.youtube.com/watch?v=Q9mF-vsFxnQ){:target="_blank"}
- [Integration via Azure Data Factory](../execute-and-automate-extractions/call-via-etl#integration-via-azure-data-factory)