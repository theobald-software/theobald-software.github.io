---
layout: page
title: Connection
description: Connection
product: xtract-universal
parent: azure-blob-storage
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=blob-connection
---

The following settings can be made when setting up an connection. 

**Account Name and Key**

This is how you authenticate against your Account. You can determine these values via Azure Portal. 
- Account Name: is the storage account name.
- Key: can be found under Settings -> Access keys -> key1. 

![azure-blob-access-keys](/img/content/azure-blob-access-keys.png){:class="img-responsive"}

Please see Azure documentation for further information.

![xu-azure-blob-con-01](/img/content/xu-azure-blob-con-01.png){:class="img-responsive"}

**Connect**

After entering Account Name and Key, click on the Connect button. After a successful connection you can select the BLOB container. 

![xu-azure-blob-con-02](/img/content/xu-azure-blob-con-02.png){:class="img-responsive"}

**Container**

Select a BLOB Container. The SAP data will be extracted into this BLOB Container.


**CSV Settings**

The settings in the tab CSV Settings correspond to the ones in the general [http-csv settings](../csv-via-http).