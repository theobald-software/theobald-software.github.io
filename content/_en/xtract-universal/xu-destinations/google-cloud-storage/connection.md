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
By clicking this button the previously created OAuth flow to establish a connection with the storage account is processed.<br>
Choose your Google account and allow access to Xtract Universal in all windows where it is asked. <br>

{: .box-note }
**Note**: If you did not verify the app, a window with the message "This app isn't verified" is displayed. Click **[Advanced]** here and **[Go to Xtract Universal (unsafe)]**. <br>  

An "Authentication suceeded" message is shown in the browser when the connection is successful. In Xtract Universal "Connection established" is displayed in a separate window. <br>  

![xu-google-cloud-con-01](/img/content/xu/googlecloudstorage/xu-google-cloud-con-03.png){:class="img-responsive"}

#### Bucket
This subsection can be filled after a connection to the storage account was successfully established.<br>
**Project ID** <br>
The Project ID can be looked up in the GCP dashboard under *Project info*.

![xu-google-cloud-con-04](/img/content/xu/googlecloudstorage/xu-google-cloud-con-04.png){:class="img-responsive"}

**Bucket name**<br>
Available buckets are displayed when you click **[Get buckets]**.

A bucket can be created in the navigation menu under **Storage > Browser**.

![xu-google-cloud-con-05](/img/content/xu/googlecloudstorage/xu-google-cloud-con-05.png){:class="img-responsive"}

You can freely choose the bucket name, location type, storage class or access control. 

Under **Advanced Settings (optional)** you can select the desired encryption method applied to the bucket. For more information about encryption click **[here](https://cloud.google.com/storage/docs/encryption)**.      
![xu-google-cloud-con-06](/img/content/xu/googlecloudstorage/xu-google-cloud-con-06.png){:class="img-responsive"}


#### Encryption
**Default** <br>
Applies the encryption method specified in your GCS bucket. <br>
Google encrypts all data that is stored on their servers by default. In addition you can use the Google Cloud Key Management Service (KMS) to create keys and apply them to your buckets. <br>
The KMS can be enabled in the GCP console's navigation menu under **Security > Cryptographic Keys**.

**Customer-supplied** <br>
If you check *Customer-supplied*, you need to provide a valid AES256 Crypto Key (256 bit in length). <br>
This key will be passed to Google to encrypt your data. The key will not be stored within the GCP that's why you need to take care of it. Otherwise you won´t be able to decrypt your data later.

**Crypto field** <br>
Depending on the selected encryption method apply the respective cryptographic key here. 

### File Format 
Select the required file format between "Csv", "Json" and "Parquet".

The settings for file type "CSV" correspond to the [Flat File CSV settings](../csv-flat-file).

![xu-google-cloud-con-02](/img/content/xu/googlecloudstorage/xu-google-cloud-con-02.png){:class="img-responsive"}

