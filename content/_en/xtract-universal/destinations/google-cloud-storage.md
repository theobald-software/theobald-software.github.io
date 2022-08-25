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

The following section describes data extraction to a Google Cloud Storage.

Google Cloud Platform (GCP) is a collection of cloud services provided by Google.
Google Cloud Platform is available at [cloud.google.com](https://cloud.google.com).
Google Cloud Storage is one of the Google services used for storing data in the Google infrastructure.


## Requirements 

- Google account
- Google Cloud Platform (GCP) subscrition (trial version offered)
- Project ("My First Project" is pre-defined)
- Google Cloud Storage (GCS) bucket for data extractions

### GCP console
The GCP console allows configuring of all resources and services. 
To get to the overview dashboard, navigate to the [Google Cloud Storage](https://cloud.google.com/storage) page and click **[Console]** or **[Go to console]**. 

To access all settings and services use the navigation menu on the upper left side.

![xu-google-cloud-req-01](/img/content/xu/googlecloudstorage/xu-google-cloud-req-01.png){:class="img-responsive"}
 
### To set up OAuth 2.0
Xtract Universal uses OAuth 2.0 for authentication with the Google servers.
To enable the OAuth 2.0 protocol configure an OAuth flow with the required access permissions to Xtract Universal.

{: .box-note }
**Note**: Google initially classifies third-party applications generally as unsafe and issues a warning. 
The verification process is optional. Official app verification involves ongoing charges.

1. In the navigation menu, select **APIs & Services > Credentials** .
![xu-google-cloud-req-02](/img/content/xu/googlecloudstorage/xu-google-cloud-req-02.png){:class="img-responsive"}
2. In the "Credentials" section select **Create Credentials > OAuth client ID**.
![xu-google-cloud-req-03](/img/content/xu/googlecloudstorage/xu-google-cloud-req-03.png){:class="img-responsive"}
3. Click **[Configure consent screen]**. The "Configure consent screen" is processed with the OAuth flow that is started when a connection is established in the Designer (see [Connection](#connection)).
![xu-google-cloud-req-04](/img/content/xu/googlecloudstorage/xu-google-cloud-req-04.png){:class="img-responsive"}
4. If your account belongs to an organization, you can restrict the usage of Xtract Universal in combination with GCS to your organization. To do so, select “internal” in the “User Type” option.  The restriction option is only available, if you are a [GSuite](https://gsuite.google.com/) user. <br>
Alternatively you can allow any user with access to the OAuth credentials to grant Xtract Universal the permission to write data to your GCS buckets. To do so, select "external" in the “User Type” option. <br> 
Click **[Create]** to continue.
![xu-google-cloud-req-05](/img/content/xu/googlecloudstorage/xu-google-cloud-req-05.png){:class="img-responsive"}
5. In the "App information" section enter an app name of your choice. <br>
"Support email" and "Developer contact information" are also mandatory fields. Click **[Save and continue]** to get to the next section. <br>
![xu-google-cloud-req-06](/img/content/xu/googlecloudstorage/xu-google-cloud-req-06.png){:class="img-responsive"}
![xu-google-cloud-req-07](/img/content/xu/googlecloudstorage/xu-google-cloud-req-07.png){:class="img-responsive"}
6. In the following section click **[Add or remove scopes]**.
Xtract Universal needs read and write permissions for its operations, which are configured in the "Scopes" section.
![xu-google-cloud-req-08](/img/content/xu/googlecloudstorage/xu-google-cloud-req-08.png){:class="img-responsive"}
7. Enter `https://www.googleapis.com/auth/devstorage.read_write` under **Manually add scopes** and click **[Add to table]**.
![xu-google-cloud-req-09](/img/content/xu/googlecloudstorage/xu-google-cloud-req-09.png){:class="img-responsive"}
The newly added scope is the first entry in the table. Click **[Update]** to create the entry. 
![xu-google-cloud-req-10](/img/content/xu/googlecloudstorage/xu-google-cloud-req-10.png){:class="img-responsive"}
8. Click **[Continue]** when the "Verfification required" window is prompted. <br>
![xu-google-cloud-req-11](/img/content/xu/googlecloudstorage/xu-google-cloud-req-11.png){:class="img-responsive"}
9. Confirm twice with **[Save and continue]**. Click **[Back to dashboard]** to return to the dashboard.      
![xu-google-cloud-req-12](/img/content/xu/googlecloudstorage/xu-google-cloud-req-12.png){:class="img-responsive"}
![xu-google-cloud-req-13](/img/content/xu/googlecloudstorage/xu-google-cloud-req-13.png){:class="img-responsive"}
![xu-google-cloud-req-14](/img/content/xu/googlecloudstorage/xu-google-cloud-req-14.png){:class="img-responsive"}
10. Return to the "Credentials" menu, click **[Create credentials]** and select "OAuth client ID". <br>
Select "Desktop app" as application type, give the app a name of your choice and click **[Create]**.
![xu-google-cloud-req-15](/img/content/xu/googlecloudstorage/xu-google-cloud-req-15.png){:class="img-responsive"}
11. Your OAuth client is now created. <br>
The "Client ID" and the "Client secret" are needed for the destination configuration in Xtract Universal (see [Connection](#connection)).
![xu-google-cloud-req-16](/img/content/xu/googlecloudstorage/xu-google-cloud-req-16.png){:class="img-responsive"}

{: .box-note }
Note: As of version 5.11.16 Xtract Universal also supports authentication via a service account. Prerequisite is that the Designer and the XU server must run on the same machine.

## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	 

### Destination Details

![xu-google-cloud-req-01](/img/content/xu/googlecloudstorage/xu-google-cloud-con-01.png){:class="img-responsive"}

### GCS Settings

#### Connection Type

- Select **User Login** to log into Google Cloud Storage using the OAuth client ID authentication, see [Connection Parameters](#connection-parameters).<br>
- Select **Service Account** to log into Google Cloud Storage using the credentials of a service account for authentication, see [Service Acccount File Location](#service-acccount-file-location).

{: .box-note }
**Note**: To use a service account for authentication, the Designer and the XU server must run on the same machine.

#### Connection Parameters

The following settings are only available if the *Connection Type* is set to **User Login**.

**Client ID**<br>
*Client ID* created in the OAuth 2.0 setup (see [Requirements](#requirements)).

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

**Key File**<br>
The service account is identified by a RSA key pair.
When creating the keys, the user receives a service account file from Google containing information about the account.
Provide the location of the service account file.
Note that the Designer and the XU server must run on the same machine to use this authentication method.

**Connect**<br>
Click **[Connect]** to establish a connection with the storage account.

#### Bucket
The "Bucket" subsection can only be filled after a connection to the storage account has been established.<br>

**Project ID** <br>
The Project ID can be looked up in the GCP dashboard under *Project info*.

![xu-google-cloud-con-04](/img/content/xu/googlecloudstorage/xu-google-cloud-con-04.png){:class="img-responsive"}

**Bucket name**<br>
Click **[Get buckets]** to display available buckets.

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
**Compatibility mode**<br>
You can choose between *Pure* and *Spark* for the compatibility mode.
Spark does not support the data types used in pure mode, so other data types need to be used. In spark mode special characters and spaces are replaced with an underscore `_`.

| SAP | Pure | Spark |
|------|-------------|-------|
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
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![xu-google-cloud-dest-01](/img/content/xu/googlecloudstorage/xu-google-cloud-dest-01.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}

{: .box-note }
**Note:** If the name of an object does not begin with a letter, it will be prefixed with an ‘x’, e.g. an object by the name `_namespace_tabname.csv` will be renamed `x_namespace_tabname.csv` when uploaded to the destination.
This is to ensure that all uploaded objects are compatible with Azure Data Factory, Hadoop and Spark, which require object names to begin with a letter or give special meaning to objects whose names start with certain non-alphabetic characters. 


{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

### Folder name

To write extraction data to a location within a specific folder in a Google Cloud Storage bucket, enter a folder name without slashes.
Subfolders are supported and can be defined using the following syntax: 
`[folder]/[subfolder_1]/[subfolder_2]/…`

{% include _content/en/xu-specific/destinations/general/compression.md %}

{% include _content/en/xu-specific/destinations/general/file-splitting.md %}
