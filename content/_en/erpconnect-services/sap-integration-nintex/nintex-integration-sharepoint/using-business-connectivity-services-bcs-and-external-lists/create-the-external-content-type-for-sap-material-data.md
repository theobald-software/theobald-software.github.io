---
layout: page
title: Create the external content type for SAP material data
description: Create the external content type for SAP material data
product: erpconnect-services
parent: using-business-connectivity-services-bcs-and-external-lists
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=create-the-external-content-type-for-sap-material-data
---

In the BCS Connector Designer which is part of ERPConnect Services, you first define the connections to your SharePoint and SAP systems.
You will then create a new Entity. Select the SAP table or function module that you want your entity to be based on, in this example we use custom function modules (Z modules) that simplify the access to material data in SAP.

![nintex-bcs-material](/img/content/nintex-bcs-material.jpg){:class="img-responsive"}

Add the desired operations for the entity, in this example we will add the Read Data Record, Read Data and Create Data Record operations.
Save the model to SharePoint.

You can [download](/img/SAP-Material-Model-Public.zip) the Model. Be sure to set the connections (SharePoint and SAP).