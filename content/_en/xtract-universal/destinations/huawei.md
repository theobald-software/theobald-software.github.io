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

{: .box-warning }
**Warning:** **Breaking changes possible** <br>
The component is still in beta phase. Breaking changes can be released any time. 
Make sure to create backups of the configuration files regularly to switch back to the previous product version, if needed.


{: .box-warning }
**Warning! File fragments in the cloud storage**<br>
Huawei Cloud OBS destination uses multipart upload. That means that data is uploaded in fragments that are merged into a single file at the end of the extraction. 
When an extraction fails due to connection issues, the request to cancel the multipart upload can fail. 
In that case the uploaded fragments must be deleted manually, see [Huawei Cloud Support: Deleting Fragments Directly](https://support.huaweicloud.com/intl/en-us/obs_faq/obs_faq_0046.html#section1). 


## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	 

### Destination Details

![huawei-destination-details](/img/content/xu/huawei-destination-details.png){:class="img-responsive"}


### Authentication

**Access Key ID (AK)** <br>
Enter the access key of the Huawei Cloud OBS account. For more information on how to create access keys, see [Huawei Cloud Support: Creating Access Keys (AK and SK)](https://support.huaweicloud.com/intl/en-us/clientogw-obs/obs_03_0405.html)
 
**Secret Access Key ID (SK)** <br>
Enter the secret access key of the Huawei Cloud OBS account. For more information on how to create access keys, see [Huawei Cloud Support: Creating Access Keys (AK and SK)](https://support.huaweicloud.com/intl/en-us/clientogw-obs/obs_03_0405.html)

**Region**<br>
Select the region of the data storage.

**Connect** <br>
Click **[Connect]** to establish a connection to the storage account. 
If the connection is successful, "Connected" is displayed next to the button.

### Bucket

**Bucket**<br>
This setting only becomes available after a connection to the storage account is established.<br>
Select a bucket. The SAP data is extracted into the selected bucket. 
Click ![refresh](/img/content/icons/refresh.png){:class="img-responsive" style="display:inline"} to refresh the list of available buckets.

### Misc

**Folder path** <br>
Option to create a folder structure within the container for saving files, see also [**Destination Settings > Folder Path**](#folder-path). <br>
For creating a single folder, enter a folder name without slashes: `[folder]` <br>
Subfolders are supported and can be defined using the following syntax: `[folder]/[subfolder_1]/[subfolder_2]/[..]`

{% include _content/en/xu-specific/destinations/general/folder-script-expressions.md %}

### File Format

**File type**<br>
Select the required file format. Possible options are: *CSV*, *Parquet* and *JSON*.

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

<!---- The following section is copied 1:1 from Azure Storage --->

Connection retry and rollback are built-in functions of the Huawei Cloud OBS destination.
They are activated by default. 

Connection retry is a functionality that prevents extractions from failing if the connection to Huawei is interrupted.

If an exception is thrown, Xtract Universal uses an exponential retry strategy to reestablish connection to Huawei.
The selected exponential retry strategy results in 7 retry attempts and an overall timespan of 140 seconds. 
If a connection is not established during this timespan, the extraction fails.

Rollback covers scenarios where extractions do not fail due to connection failures to Huawei but e.g. due to an error when connecting to SAP.
In those cases Xtract Universal tries to remove any files from the Huawei Cloud storage that were created in the course of the extraction.


## Settings

### Opening the Destination Settings
1. Create or select an existing extraction, see [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![huawei-destination-settings](/img/content/xu/huawei-destination-settings.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}

{: .box-note }
**Note:** If the file name contains the character `/`, it is replaced with an underscore. 

{% include _content/en/xu-specific/destinations/general/file-name-script-expressions.md %}

<!-- ### Column name style -->
{% include _content/en/xu-specific/destinations/general/column-name-style.md %}


<!-- ### Date Conversion -->
{% include _content/en/xu-specific/destinations/general/date-conversion.md %}


### Folder

Option to create a folder structure within the container for saving files, see also [Connection > Folder Path](#connection). <br>
For creating a single folder, enter a folder name without slashes: `[folder]` <br>
Subfolders are supported and can be defined using the following syntax: `[folder]/[subfolder_1]/[subfolder_2]/[..]`

{% include _content/en/xu-specific/destinations/general/folder-script-expressions.md %}


{% include _content/en/xu-specific/destinations/general/compression.md %}

{% include _content/en/xu-specific/destinations/general/file-splitting.md %}
