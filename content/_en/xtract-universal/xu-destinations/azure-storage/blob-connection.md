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


### Adding an Azure Storage Destination
1. In the main window of the Designer, navigate to **[Server] > [Manage Destinations]**. The window "Manage Destinations" opens.
2. Click **[Add]** to add a new destination. The window "Destination Details" opens.
![XU_azure_Destination](/img/content/add-select-destination.png){:class="img-responsive"}
3. Select the *Azure Storage (Blob / Data Lake)* destination from the drop-down list.

The window "Destination Details" consists of two tabs:
- Azure Storage Connection
- File Format

### Azure Storage Connection
The tab *Azure Storage Connection* consists of two subsections:
- Connection 
- Container
![xu-azure-blob-con-01](/img/content/xu-azure-blob-con-01_.png){:class="img-responsive"}

The subsection *Connection* offers two different methods for authenticating and authorizing access to an Azure storage account:
1. Authentication via Access Key
2. Authentication via Azure Active Directory  

### Authentication via Access Key (1)
This method of authentication authorizes access to the complete storage account. General information about this method of authentication can be found in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage).


#### Connection
**Storage account**<br>
Storage account name.

**Access key**<br>
Access key of the Azure storage account.  

{: .box-tip }
**Tip:** Copy storage account name and access key from the [Azure portal](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=/azure/storage/blobs/toc.json#view-access-keys-and-connection-string).

![xu-azure-blob-con-10](/img/content/xu-azure-blob-con-10.png){:class="img-responsive"}

**Connect**<br>
Button to establish a connection to the storage account.<br>
If the connection is successful, a "Connection successful" info window opens. <br>
Click **[OK]** to confirm. <br>


#### Container
This subsection is activated after a connection to the storage account was successfully established.<br><br>
**Storage account** <br>
When authenticating with an access key, this field is deactivated for input.

**Container**<br>
When authenticating with an access key, a Blob container can be selected from the drop down menu.

**Test connection to container**<br>
Button to check if the storage container can be accessed. <br>
If the connection is successful, a "Connection to container <*name of container*> successful" info window opens. 
![azure_blob_test-connection](/img/content/xu-azure-blob-con-09.png){:class="img-responsive"}
Click **[OK]** to confirm. <br>
Go to the *File Format* tab or click **[OK]**. The *Azure Storage (Blob / Data Lake)* destination can now be used.


**Folder path** <br>
Option to create a directory within the container for saving files. See also [Destination Settings > Folder Path](./blob-settings#destination-settings).

*********

### Authentication via Azure Active Directory (2)
Authentication via Azure Active Directory uses OAuth 2.0 and Azure AD for authentication. 
Compared to *Authentication via Access Key*, this option allows a more granular way of authorizing access to a storage account and its individual storage containers. 
General information about this method of authentication can be found in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app).

#### Prerequisites 

{: .box-note }
**Note:** Authentication via Azure Active Directory requires an Azure AD tenant. Setting up an Azure AD tenant is described in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant). 

Before using authentication via Azure Active Directory, perform the following steps on the Azure portal:
1. On the Azure portal, open the *Azure Active Directory* service.
2. Register an app with your Azure AD tenant. To do this, follow the steps as described in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app#register-your-application-with-an-azure-ad-tenant). Register the app as *Public client/native (mobile & desktop)*.
3. Add *API permissions* to the registered app to grant access to the Azure Storage web API.<br> The following permissions are required: *Azure Storage - Delegated permissions - user impersonation*, *Microsot Graph - User.Read*. Follow the steps described in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app#grant-your-registered-app-permissions-to-azure-storage).
4. On the Azure portal, open your Azure storage account.
5. Assign access rights to the Azure storage as described in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-rbac-portal#assign-rbac-roles-using-the-azure-portal). The required RBAC role is *Storage Blob Data Contributor*.
![xu-azure-blob-con-07](/img/content/xu-azure-blob-con-07.png){:class="img-responsive"}

{: .box-tip }
**Tip:** Access rights can be granted on storage account or on container level. 

#### Connection
**Tenant ID**<br>
ID of the Azure AD tenant

**Client ID**<br>
ID of the registered app

{: .box-tip }
**Tip:** Copy tenant ID and client ID from the Azure portal.

![xu-azure-blob-con-08](/img/content/xu-azure-blob-con-08.png){:class="img-responsive"}

**Connect**<br>
Button to establish a connection to the Azure storage account.<br>
1. Click **[Connect]**. A browser window pops up.
2. Sign in using your Azure AD credentials.
![xu-azure-blob-con-05](/img/content/xu-azure-blob-con-05.png){:class="img-responsive"}
3. The "Permissions requested" window lists the requested permissions (see above). Click **[Accept]**.
![xu-azure-blob-con-06](/img/content/xu-azure-blob-con-06.png){:class="img-responsive"}
4. If the connection is successful, a "Connection successful" info window opens. <br>
Click **[OK]** to confirm. <br>

#### Container
This subsection is activated after a connection to the storage account was successfully established.<br><br>
**Storage account** <br>
When authenticating via Azure Active Directory, the storage account name needs to be entered in this field.

**Container**<br>
When authenticating via Azure Active Directory, a Blob container needs to be entered in this field.

{: .box-note }
**Note:** With Azure Active Directory authentication, the drop down menu is not supported. Enter the name of the Blob container manually.

**Test connection to container**<br>
Button to check if the storage container can be accessed. <br>
If the connection is successful, a "Connection to container <*name of container*> successful" info window opens. <br>

![azure_blob_test-connection](/img/content/xu-azure-blob-con-09.png){:class="img-responsive"}

Click **[OK]** to confirm. <br>
The *Azure Storage (Blob / Data Lake)* destination can now be used.

**Folder path** <br>
Option to create a directory within the container for saving files. See also [Destination Settings > Folder Path](./blob-settings#destination-settings).

### File Format 
Select the required file format between "Parquet" and "CSV".

The settings for file type "CSV" correspond to the [Flat File CSV settings](../csv-flat-file).

![azure_blob_destination_settings_csv_settings](/img/content/xu/xu-azure-blob-con-04.png){:class="img-responsive"}

### Connection Retry and Rollback

Connection retry and rollback are built-in functions of the Azure Storage destination, which are automatically activated.

Connection retry is a functionality that prevents extractions from failing in case of transient connection interruptions to Azure.
The retry function is implemented according to [Microsoft Guidelines](https://docs.microsoft.com/en-us/azure/architecture/best-practices/retry-service-specific#retry-strategies).
The retry logic is based on WebExceptionStatus. If any exception is thrown, Xtract Universal tries to reestablish connection to Azure following an exponential retry strategy.
The selected exponential retry strategy results in 7 retry attempts and an overall timespan of 140 seconds. If a retry is not successful during the timespan of 140 seconds, the extraction fails.

Rollback covers scenarios, where an extraction fails due to an issue that is not caused by a connection failure to Azure. An example is an extraction that fails due to an error when connecting to SAP.
In particular cases, Xtract Universal tries and removes any files from Azure storage that were created in the course of the extraction.
  

<!---- using an exponential backoff, meaning 8 retries with an increasing waiting time between the requests: 1s, 2s, 4s, 8s, 16s, etc.
See also [Microsoft documentation](https://docs.microsoft.com/en-us/azure/architecture/best-practices/retry-service-specific#general-rest-and-retry-guidelines). --->
