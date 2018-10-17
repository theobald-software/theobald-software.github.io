---
ref: ecs-getting-started-with-the-bcs-connector-02
layout: page
title: Creating a new Model
description: Creating a new Model
product: erpconnect-services
parent: getting-started-with-the-bcs-connector
childidentifier: creating-a-new-model
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=creating-a-new-model
---

In a SharePoint system, a BCS model contains all the information required for SharePoint to interact with an external system, such as SAP.

To create a new BCS model, start by specifying a name in the *Model*  field, or by accepting the default value 'SAP Model'. Changing the model name will ensure that you will not overwrite an existing model in SharePoint. The 'Modified' indicator in the bottom right corner of your screen will appear once you make a change to the default values of the BCS Connector.

![BCS-Generic-New-Model](/img/content/BCS-Generic-New-Model.png){:class="img-responsive"}

A SharePoint BCS model requires some information about the external system, or LOB (Line-of-Business) system that it connects to. In the LOB System field, enter the name or type of the SAP system that you are connecting to, or simply accept the default value 'SAP Model LOB'. 

Similarly, in the LOB System Instance field, enter the name of the specific SAP system that you are connecting to, or simply accept the default value 'SAP Model LOB Instance'. 

You can specify additional localized values for any of the parameter fields, using the ellipsis button next to them. For further information see [Localization](./creating-a-new-model/localization).


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}