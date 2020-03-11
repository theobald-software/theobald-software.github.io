---
ref: xu-azure-blob-storage-02
layout: page
title: Connection
description: Connection
product: xtract-universal
parent: azure-storage
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=blob-connection
---

### Blob Storage Settings

The following settings are required to connect to the Azure storage account. 
The required input values can be determined from the Azure Portal.

![azure-blob-access-keys](/img/content/azure-blob-access-keys.png){:class="img-responsive"}

### Adding Azure Storage Destination
1. In the main window of the Designer, navigate to **[Server] > [Manage Destinations]**. The window "Manage Destinations" opens.
2. Click **[Add]** to add a new destination. The window "Destination Details" opens.
![XU_azure_Destination](/img/content/xu/azure_destination-det.png){:class="img-responsive"}
3. Select the *Azure Storage* destination from the drop-down list.

The window "Destination Details" consists of two tabs:
- Blob Storage Settings
- CSV Settings

### Blob Storage Settings
The tab *Blob Storage Settings* consists of two subsections:
- Connection 
- Container

#### Connection
**Account name**<br>
Storage account name.

**Key**<br>
Access key of the Azure storage account.  

**Connect**<br>
Button to establish a connection.<br>
If the connection is successful, a "Connection successful" info window opens. <br>
Click **[OK]** to confirm.

#### Container
**Container**<br>
Allows selecting a Blob container into which, the extracted data is written.

![xu-azure-blob-con-01](/img/content/xu-azure-blob-con-01_.png){:class="img-responsive"}

### CSV Settings

The settings in the tab CSV Settings correspond to the ones in the general [http-csv settings](../csv-via-http).

![azure_blob_destination_settings_csv_settings](/img/content/xu-azure-blob-con-04.png){:class="img-responsive"}


