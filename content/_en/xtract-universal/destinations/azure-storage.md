---
ref: destinations-24
layout: page
title: Azure Storage
description: Azure Storage
product: xtract-universal
parent: destinations
childidentifier: azure-storage
permalink: /:collection/:path
weight: 24
lang: en_GB
progressstate: 5
---
The following section describes the loading of SAP data to a cloud based Azure Storage. 

## Requirements

The Azure Storage (Blob / Data Lake) destination supports the following Azure storage account types:

- General-purpose V2 (including Azure Data Lake Storage Gen2)
- General-purpose V1
- BlockBlobStorage
- BlobStorage
 
To use the Azure Storage (Blob / Data Lake) destination you need one of the above Azure storage accounts. For further information refer to the official [Microsoft Azure storage documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview).


## Connection


{% include _content/en/xu-specific/destinations/general/connection.md %}	 

### Destination Details

![xu-azure-blob-con-01](/img/content/xu/xu-azure-blob-con-01.png){:class="img-responsive"}

### Connection Type (1)

The subsection *Connection Type* offers two different methods for authenticating and authorizing access to an Azure Storage account:
1. Authentication via Access Key
2. Authentication via Azure Active Directory  

#### 1. Authentication via Access Key
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

![xu-azure-blob-con-10](/img/content/xu-azure-blob-con-10.png){:class="img-responsive"}

**Connect** <br>
Click **[Connect]** to establish a connection to the storage account. 
If the connection is successful, a "Connection successful" info window opens.
Click **[OK]** to confirm. <br>


#### 2. Authentication via Azure Active Directory
Authentication via Azure Active Directory uses OAuth 2.0 and Azure AD for authentication. 
Compared to *Authentication via Access Key*, this option allows a more granular way of 
authorizing access to a storage account and its individual storage containers. 
General information about this method of authentication can be found in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app).

#### Prerequisites 

{: .box-note }
**Note:** Authentication via Azure Active Directory requires an Azure AD tenant. How to set up an Azure AD tenant is described in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant). 

Before using authentication via Azure Active Directory, perform the following steps in the Azure Portal:
1. In the Azure Portal, open the *Azure Active Directory* service.
2. Register an app with your Azure AD tenant. To do this, follow the steps as described in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app#register-your-application-with-an-azure-ad-tenant). Register the app as *Public client/native (mobile & desktop)*.
3. Add *API permissions* to the registered app to grant access to the Azure Storage web API. The following permissions are required:<br> 
*Azure Storage - Delegated permissions - user impersonation*,<br> 
*Microsoft Graph - User.Read*. <br>
Follow the steps described in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app#grant-your-registered-app-permissions-to-azure-storage).
4. Assign [https://login.microsoftonline.com/common/oauth2/nativeclient](https://login.microsoftonline.com/common/oauth2/nativeclient) as the standard Redirect URI (1). 
This can be done in the Azure AD app registration via **Manage > Authentication > Add a platform > Mobile and desktop applications**. 
Copy and paste the URL into in the *Custom redirect URI* field (2) and click **[Configure]** (3). 
In the *Authentication* screen confirm with **[Save]**.
![xu-azure-blob-con-11](/img/content/xu/xu-azure-blob-con-11.png){:class="img-responsive"} 
5. In the Azure Portal, open your Azure Storage account.
6. Assign access rights to the Azure Storage as described in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-rbac-portal#assign-rbac-roles-using-the-azure-portal). 
The required RBAC role is *Storage Blob Data Contributor*.
![xu-azure-blob-con-07](/img/content/xu-azure-blob-con-07.png){:class="img-responsive"}

{: .box-tip }
**Tip:** Access rights can be granted on storage account or container level. 

#### Connection via Azure Active Directory

![xu-azure-active-directory-connection](/img/content/xu/azure_destination-activedirectory.png){:class="img-responsive"}

**Storage account** <br>
Enter your storage account name.

**Tenant ID**<br>
Enter the ID of the Azure AD tenant.

**Client ID**<br>
Enter the ID of the registered app.

{: .box-tip }
**Tip:** Copy tenant ID and client ID from the Azure portal.

![xu-azure-blob-con-08](/img/content/xu-azure-blob-con-08.png){:class="img-responsive"}

**Connect** <br>
To establish a connection to the Azure Storage account:<br>
1. Click **[Connect]**. A browser window pops up.
2. Sign in using your Azure AD credentials.
![xu-azure-blob-con-05](/img/content/xu-azure-blob-con-05.png){:class="img-responsive"}
3. The "Permissions requested" window lists the requested permissions (see *Prerequisites* above). Click **[Accept]**.
![xu-azure-blob-con-06](/img/content/xu-azure-blob-con-06.png){:class="img-responsive"}
4. If the connection is successful, a "Connection successful" info window opens. <br>
Click **[OK]** to confirm. <br>

### Container (2)
This subsection is activated after a connection to the storage account was successfully established.<br>

**Container** <br>

When using Access Key authentication, choose a Blob container from the drop-down menu.
When using Azure Active Directory authentication, enter the name of the Blob container manually.

**Test connection** <br>
Click **[Test Connection]** to check if the storage container can be accessed. <br>
If the connection is successful, a "Connection to container <*name of container*> successful" info window opens. <br>

![azure_blob_test-connection](/img/content/xu-azure-blob-con-09.png){:class="img-responsive"}

Click **[OK]** to confirm. <br>

The *Azure Storage (Blob / Data Lake)* destination can now be used.

### Misc (3)

{: .box-note }
**Note:** The settings in *Misc* can only be used in combination with a Blob container.<br> 

**Folder path** <br>
Option to create a folder structure within the container for saving files. 
See also [**Destination Settings > Folder Path**](#folder-path). <br>
For creating a single folder, enter a folder name without slashes: `[folder]` <br>
Subfolders are supported and can be defined using the following syntax: `[folder]/[subfolder_1]/[subfolder_2]/[..]`

**Folder path** allows entry of [script expressions](./../advanced-techniques/script-expressions).
This allows to dynamically set a folder path when running an extraction. <br>

### Column Encryption (4)

{% include _content/en/xu-specific/destinations/general/column-encryption.md %}

### File Format

**File type**<br>
Select the required file format. You can choose between *Parquet* and *CSV*.
![Azure](/img/content/xu/XU_AzureStorage_DestinationDetails2.png){:class="img-responsive"}

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
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![xu-azure-blob-con-03](/img/content/xu-azure-blob-con-03.png){:class="img-responsive"}

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

{% include _content/en/xu-specific/destinations/general/compression.md %}

{% include _content/en/xu-specific/destinations/general/file-splitting.md %}

*****
## Related Links
- [Youtube Tutorial: SAP data in Azure Storage via Xtract Universal](https://www.youtube.com/watch?v=Q9mF-vsFxnQ){:target="_blank"}
- [Integration via Azure Data Factory](../execute-and-automate-extractions/call-via-etl#integration-via-azure-data-factory)