---
ref: ecs-read-write-access-05
layout: page
title: Saving the Model to SharePoint
description: Saving the Model to SharePoint
product: erpconnect-services
parent: read-write-access
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-crud-saving-the-model-to-sharepoint
---

You can now save your model to the SharePoint BCS metadata store. The 'PRODUCTS' entity in your model will create a new External Content Type (ECT) in SharePoint.

From the BCS Connector ribbon, select the Save Model command. When prompted whether you really want to transfer your model to SharePoint, select the Yes button.

The BCS Connector will establish a connection to the SharePoint BCS metadata store to save the model there. Note that you need to have sufficient privileges in SharePoint to be able to write to the BCS metadata store.  

![BCS-CRUD-Model-Save](/img/content/BCS-CRUD-Model-Save.png){:class="img-responsive"}

You should see a success message, indicating that the model was successfully saved and transferred to the SharePoint server.