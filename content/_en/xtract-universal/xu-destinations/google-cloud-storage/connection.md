---
ref: xu-google-cloud-storage-02
layout: page
title: Connection
description: Connection
product: xtract-universal
parent: google-cloud-storage
permalink: /:collection/:path
weight: 2
lang: en_GB
progressstate: 5
---

### Adding a Google Cloud Storage Destination
1. In the main window of the Designer, navigate to **Server > Manage Destinations**. The window "Manage Destinations" opens.
2. Click **[Add]** to add a new destination. The window "Destination Details" opens.
![xu-google-cloud-req-01](/img/content/xu/googlecloudstorage/xu-google-cloud-con-01.png){:class="img-responsive"}
3. Select the *Google Cloud Storage* destination from the drop-down list.

The window "Destination Details" consists of two tabs:
- GCS Settings
- File Format

### GCS Settings
The tab *GCS Settings* consists of three subsections:
- Connection 
- Bucket
- Encryption

#### Connection
**Client ID**<br>
*Client ID* created in the OAuth 2.0 setup (see [Requirements](./requirements)).

**Client Secret**<br>
*Client Secret* created in the OAuth 2.0 setup.

**Connect**<br>
Processes the previously created OAuth flow to establish a connection with the storage account.
Choose your Google account and grant access to Xtract Universal in all required windows. <br>

{: .box-note }
**Note**: If you did not verify the app, a window with the message: "This app isn't verified" is displayed. Click **[Advanced]** and **[Go to Xtract Universal (unsafe)]**. <br>  

When a connection is successful, an "Authentication succeeded" message is displayed in the browser. In Xtract Universal a "Connection established" message is displayed in a separate dialogue. <br>  

![xu-google-cloud-con-01](/img/content/xu/googlecloudstorage/xu-google-cloud-con-03.png){:class="img-responsive"}

#### Bucket
The "Bucket" subsection can be filled after a successful connection to the storage account.<br>
**Project ID** <br>
The Project ID can be looked up in the GCP dashboard under *Project info*.

![xu-google-cloud-con-04](/img/content/xu/googlecloudstorage/xu-google-cloud-con-04.png){:class="img-responsive"}

**Bucket name**<br>
Click **[Get buckets]** to display available buckets.

A bucket can be created in the navigation menu under **Storage > Browser**.

![xu-google-cloud-con-05](/img/content/xu/googlecloudstorage/xu-google-cloud-con-05.png){:class="img-responsive"}

You can freely choose the bucket name, the location type and the storage class or access control. 

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
Select the required file format between "CSV", "JSON" and "Parquet".

The settings for file type "CSV" correspond to the [Flat File CSV settings](../csv-flat-file).

![xu-google-cloud-con-02](/img/content/xu/googlecloudstorage/xu-google-cloud-con-02.png){:class="img-responsive"}

### Connection Retry

Connection retry is a built-in function of the Google Cloud Storage destination. The retry function is automatically activated.

Connection retry is a functionality that prevents extractions from failing in case of transient connection interruptions to Google Cloud Storage.
For more general information about retry strategies in a Google Cloud Storage environment go to the official [Google Clous Help] (https://cloud.google.com/storage/docs/gsutil/addlhelp/RetryHandlingStrategy).
Xtract universal follows an exponential retry strategy. The selected exponential strategy results in 8 retry attempts and an overall timespan of 140 seconds. If a retry is not successful during the timespan of 140 seconds, the extraction fails.

