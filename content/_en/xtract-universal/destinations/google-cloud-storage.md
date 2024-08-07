---
ref: destinations-31
layout: page
title: Google Cloud Storage
description: Google Cloud Storage
product: xtract-universal
parent: destinations
childidentifier: google-cloud-storage
permalink: /:collection/:path
weight: 31
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=amazon-aws-s3
progressstate: 5
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract Universal.<br>
Make sure to use the documentation within the new [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

The following section describes data extraction to a Google Cloud Storage.

Google Cloud Platform (GCP) is a collection of cloud services provided by Google.
Google Cloud Platform is available at [cloud.google.com](https://cloud.google.com).
Google Cloud Storage is one of the Google services used for storing data in the Google infrastructure.
For more information see [Google Cloud Storage Documentation](https://cloud.google.com/storage/docs#docs).

## Requirements 

- Google account
- Google Cloud Platform (GCP) subscrition (trial version offered)
- Project ("My First Project" is pre-defined)
- Google Cloud Storage (GCS) bucket for data extractions

## GCP console
The GCP console allows configuring of all resources and services. 
To get to the overview dashboard, navigate to the [Google Cloud Storage](https://cloud.google.com/storage) page and click **[Console]** or **[Go to console]**. 

To access all settings and services use the navigation menu on the upper left side.

![xu-google-cloud-req-01](/img/content/xu/googlecloudstorage/xu-google-cloud-req-01.png){:class="img-responsive"}
 
## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	 

### Destination Details

![xu-google-cloud-req-01](/img/content/xu/googlecloudstorage/xu-google-cloud-con-01.png){:class="img-responsive"}

### GCS Settings

#### Connection Type

Two types of authentication are supported:
- Select **User Login** to log into Google Cloud Storage using the OAuth client ID authentication, see [Connection Parameters](#connection-parameters).<br>
- Select **Service Account** to log into Google Cloud Storage using the credentials of a service account for authentication, see [Service Acccount File Location](#service-acccount-file-location).


#### Connection Parameters

The following settings are only available if the *Connection Type* is set to **User Login**.<br>
To enable the OAuth 2.0 protocol, configure an OAuth flow with the required access permissions to Xtract Universal.
For more information, see [Knowledge Base Article: Setting Up OAuth 2.0 for the Google Cloud Storage Destination](https://kb.theobald-software.com/xtract-universal/google-cloud-storage-oauth).


**Client ID**<br>
*Client ID* created in the OAuth 2.0 setup.

**Client Secret**<br>
*Client Secret* created in the OAuth 2.0 setup.

**Connect**<br>
Processes the previously created OAuth flow to establish a connection with the storage account.
Choose your Google account and grant access to Xtract Universal in all required windows. <br>

{: .box-note }
**Note**: If you did not verify the app, a window with the message: "This app isn't verified" is displayed. Click **[Advanced]** and **[Go to Xtract Universal (unsafe)]**. <br>  

When a connection is successful, an "Authentication succeeded" message is displayed in the browser. In Xtract Universal a "Connection established" message is displayed in a separate window. <br>  

#### Service Acccount File Location

The following settings are only available if the *Connection Type* is set to **Service Account**.

![xu-google-cloud-req](/img/content/xu/googlecloudstorage/xu-google-cloud-con.png){:class="img-responsive"}

**Key File**<br>
The service account is identified by a RSA key pair.
When creating the keys, the user receives a service account file from Google containing information about the account.
Provide the location of the service account file.
Make sure that the Xtract Universal service has access to the file.

#### Bucket
When using OAuth 2.0 authenthication, the "Bucket" subsection can only be filled after a connection to the storage account has been established.<br>

**Project ID** <br>
The Project ID can be looked up in the GCP dashboard under *Project info*.

![xu-google-cloud-con-04](/img/content/xu/googlecloudstorage/xu-google-cloud-con-04.png){:class="img-responsive"}

**Bucket name**<br>
When using OAuth 2.0 authenthication, click **[Get buckets]** to display available buckets.<br>
A bucket can be created in the navigation menu under **Storage > Browser**.

![xu-google-cloud-con-05](/img/content/xu/googlecloudstorage/xu-google-cloud-con-05.png){:class="img-responsive"}

Choose a bucket name, location type and storage class or access control. 

Under **Advanced Settings (optional)** you can select the desired encryption method applied to the bucket. Get more details on encryption on the official [Google Help Page](https://cloud.google.com/storage/docs/encryption).      
![xu-google-cloud-con-06](/img/content/xu/googlecloudstorage/xu-google-cloud-con-06.png){:class="img-responsive"}


#### Encryption
**Default** <br>
Applies the encryption method specified in your GCS bucket. <br>
Google encrypts all data that is stored on the Google servers by default. In addition you can use the Google Cloud Key Management Service (KMS) to create and apply keys to your buckets. <br>
The KMS can be enabled in the GCP console's navigation menu under **Security > Cryptographic Keys**.

**Customer-supplied** <br>
If you check the *Customer-supplied* option, you need to provide a valid AES256 Crypto Key (256 bit in length). <br>
The Crypto key is not stored in the GCP and demands the additional effort to be able to to decrypt your data later. 

**Crypto field** <br>
Enter the cryptographic key into the *Crypto field* if you selected "*Customer Supplied"* as the encryption method.

### File Format 
**File type**<br>
Select the required file format between "CSV", "JSON" and "Parquet".

![xu-google-cloud-con-02](/img/content/xu/googlecloudstorage/xu-google-cloud-con-02.png){:class="img-responsive"}
#### CVS Settings
The settings for file type "CSV" correspond to the [Flat File CSV settings](./csv-flat-file).

#### Parquet Settings
The following compatibility modes are available:
- *Pure* 
- *Spark* 
- *BigQuery*

Spark does not support the data types used in pure mode, so other data types need to be used. <br>
In spark mode special characters and spaces are replaced with an underscore `_`.

| SAP | Pure / BigQuery | Spark |
|------|-------------|-------|-------|
| INT1 | UINT_8 | INT16 |
| TIMS | TIME_MILLIS | UTF8 |

![AWS S3 compability](/img/content/xu/xu_S3_dest_comp_mode.png){:class="img-responsive"}

### Connection Retry

Connection retry is a built-in function of the Google Cloud Storage destination. The retry function is automatically activated.

Connection retry is a functionality that prevents extractions from failing in case of transient connection interruptions to Google Cloud Storage.
For more general information about retry strategies in a Google Cloud Storage environment go to the official [Google Cloud Help](https://cloud.google.com/storage/docs/gsutil/addlhelp/RetryHandlingStrategy).
Xtract universal follows an exponential retry strategy. The selected exponential strategy results in 8 retry attempts and an overall timespan of 140 seconds. If a connection is not established during the timespan of 140 seconds, the extraction fails.

## Settings


### Opening the Destination Settings
1. Create or select an existing extraction, see [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![xu-google-cloud-dest-01](/img/content/xu/googlecloudstorage/xu-google-cloud-dest-01.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}

{: .box-note }
**Note:** If the name of an object does not begin with a letter, it will be prefixed with an ‘x’, e.g. an object by the name `_namespace_tabname.csv` will be renamed `x_namespace_tabname.csv` when uploaded to the destination.
This is to ensure that all uploaded objects are compatible with Azure Data Factory, Hadoop and Spark, which require object names to begin with a letter or give special meaning to objects whose names start with certain non-alphabetic characters. 

{% include _content/en/xu-specific/destinations/general/file-name-script-expressions.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

### Folder name

To write extraction data to a location within a specific folder in a Google Cloud Storage bucket, enter a folder name without slashes.
Subfolders are supported and can be defined using the following syntax: 
`[folder]/[subfolder_1]/[subfolder_2]/…`

{% include _content/en/xu-specific/destinations/general/folder-script-expressions.md %}

{% include _content/en/xu-specific/destinations/general/compression.md %}

{% include _content/en/xu-specific/destinations/general/file-splitting.md %}
