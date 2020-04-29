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
![XU_azure_Destination](/img/content/xu/azure_destination-det.png){:class="img-responsive"}
3. Select the *Azure Storage (Blob / Data Lake)* destination from the drop-down list.

The window "Destination Details" consists of two tabs:
- Blob Storage Settings
- CSV Settings

### Blob Storage Settings
The tab *Blob Storage Settings* consists of two subsections:
- Connection 
- Container
![xu-azure-blob-con-01](/img/content/xu-azure-blob-con-01_.png){:class="img-responsive"}

The subsection *Connection* offers two different methods for authenticating and authorizing access to an Azure storage account:
1. Authentication via Access Key
2. Authentication via Azure Active Directory  

### Authentication via Access Key
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
This subsection is activated after a connection to the storage account has successfully been established.<br><br>
**Storage account** <br>
When authenticating with an access key, this field is deactivated for input.

**Container**<br>
When authenticating with an access key, a Blob container can be selected from the drop down menu.

**Test connection to container**<br>
Button to check if the storage container can be accessed. <br>
If the connection is successful, a "Connection to container <*name of container*> successful" info window opens. <br>
Click **[OK]** to confirm. <br>
Go to the *CSV Settings* tab or click **[OK]**. The *Azure Storage (Blob / Data Lake)* destination can now be used.

![xu-azure-blob-con-02](/img/content/xu-azure-blob-con-02_.png){:class="img-responsive"}


### Authentication via Azure Active Directory
This method uses OAuth 2.0 and Azure AD for authentication. Compared to *Authentication via Access Key*, it allows a more granular way of authorizing access to a storage account and its individual storage containers. General information about this method of authentication can be found in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app).

#### Prerequisites 

{: .box-note }
**Note:** Authentication via Azure Active Directory requires an Azure AD tenant. Setting up an Azure AD tenant is described in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant). 

Before using authentication via Azure active directory, perform the following steps on the Azure portal:
1. On the Azure portal, open the *Azure Active Directory* service.
2. Register an app with your Azure AD tenant. To do this, follow the steps described in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app#register-your-application-with-an-azure-ad-tenant). Register the app as *Public client/native (mobile & desktop)*.
3. Add *API permissions* to the registered app to grant access to the Azure Storage web API. The following permissions are required: *Azure Storage - Delegated permissions - user impersonation*, *Microsot Graph - User.Read*. Follow the steps as outlined in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app#grant-your-registered-app-permissions-to-azure-storage).
4. On the Azure portal, open your Azure storage account.
4. Assign access rights to the Azure storage as outlined in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-rbac-portal#assign-rbac-roles-using-the-azure-portal). The required RBAC role is *Storage Blob Data Contributor*.
![xu-azure-blob-con-07](/img/content/xu-azure-blob-con-07.png){:class="img-responsive"}

{: .box-tip }
**Tip:** Access rights can be granted on storage account or on container level. 

#### Connection
**Tenant ID**<br>
ID of the Azure AD tenant

**Client ID**<br>
ID of the registered app.

{: .box-tip }
**Tip:** Copy tenant ID and client ID from the Azure portal.

![xu-azure-blob-con-08](/img/content/xu-azure-blob-con-08.png){:class="img-responsive"}



**Connect**<br>
Button to establish a connection to the storage account.<br>
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
When authenticating via Azure Active directory, the storage account name needs to be entered here.

**Container**<br>
When authenticating via Azure Active directory, a Blob container needs to be entered here.

{: .box-note }
**Note:** With Azure Active directory authentication, the drop down menu is not supported. Enter the name of the Blob container manually.

**Test connection to container**<br>
Button to check if the storage container can be accessed. <br>
If the connection is successful, a "Connection to container <*name of container*> successful" info window opens. <br>
Click **[OK]** to confirm. <br>
Go to the *CSV Settings* tab or click **[OK]**. The *Azure Storage (Blob / Data Lake)* destination can now be used.

![xu-azure-blob-con-09](/img/content/xu-azure-blob-con-09.png){:class="img-responsive"}

### CSV Settings

The settings in the tab *CSV Settings* correspond to the settings in the general [http-csv settings](../csv-via-http).

![azure_blob_destination_settings_csv_settings](/img/content/xu-azure-blob-con-04.png){:class="img-responsive"}


