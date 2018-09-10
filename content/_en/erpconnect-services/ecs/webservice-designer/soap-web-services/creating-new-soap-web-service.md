---
layout: page
title: Creating a new SOAP web service
description: Creating a new SOAP web service
product: erpconnect-services
parent: soap-web-services
childidentifier: creating-new-soap-web-service
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=creating_a_new_web_service
---

To create a new standard web service in SOAP format, start by selecting the type of web service that you want to create.
From the ribbon, select the *New* button in the *SharePoint Package* group.

![WSD-NewPackage](/img/content/WSD-NewPackage.PNG){:class="img-responsive"}

You will be prompted to select a web service type.
You can either create a WCF web service with arbitrary operations, or you can create an OData service based on an entity model.
For this Getting Started example, select the *Creates default web service* option.

![WSD-WebServiceType](/img/content/WSD-WebServiceType.PNG){:class="img-responsive"}

Select OK to close the dialog.

Enter a *Name*, and optionally a *Title* and *Description*for the web service. In this example, we will create a web service that returns customer records from SAP.

![WSD-WSName](/img/content/WSD-WSName.PNG){:class="img-responsive"}

Please take care not to use blank characters in the web service name. This cannot be processed and leads to an error message in the next steps (creation of a service operation).      

![WSD-WSName2](/img/content/WSD-WSName2.png){:class="img-responsive"}


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}