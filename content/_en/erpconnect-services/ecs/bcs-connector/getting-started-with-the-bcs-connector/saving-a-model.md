---
layout: page
title: Saving a Model
description: Saving a Model
product: erpconnect-services
parent: getting-started-with-the-bcs-connector
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-saving-a-model
---

**Saving a Model to SharePoint**

You can save your model directly to the SharePoint BCS metadata store. This requires that you have configured your SharePoint connection and that you have sufficient privileges in SharePoint to write to the BCS metadata store. When you save a model to SharePoint, each entity will create an External Content Type (ECT).

From the BCS Connector ribbon, select the *Save Model* command. When prompted whether you really want to transfer your model to SharePoint, select the *Yes* button.

![BCS-Model-Save](/img/content/BCS-Model-Save.png){:class="img-responsive"}

You should see a success message, indicating that the model was successfully saved and transferred to the SharePoint server.

![BCS-Model-Save-Success](/img/content/BCS-Model-Save-Success.png){:class="img-responsive"}

Using the *Open Model* command on the ribbon, you can open an existing model from SharePoint.

To find the saved models in SharePoint  navigate  to *Manage Service Applications* in your *Central Administration* and select the *Business Data Connectivity Service Application*. Here you can find the BDC-Models and the External Systems as well as the above mentioned External Content Types.  


**Saving a Model to File**

In situations when you are not connected to a SharePoint Server or you don’t have sufficient privileges to save the model in the BCS metadata store, you can save the model to a file using the 'Save to File' command from the ribbon.

![BCS-Model-Save-File](/img/content/BCS-Model-Save-File.png){:class="img-responsive"}