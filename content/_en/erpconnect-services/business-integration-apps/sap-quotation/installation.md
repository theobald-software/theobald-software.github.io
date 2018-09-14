---
layout: page
title: Installation
description: Installation
product: erpconnect-services
parent: sap-quotation
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=sapquotation-installation
---

**Download**

You can download the installation files [here](). 

The following files are delivered: 

Theobald.SAPQuotation.exe: The installer package that must be installed on the SharePoint 2013 Server. It contains the WSP package needed to implement the solution in SharePoint.

Theobald.SAPQuotation2016.exe: The installer package that must be installed on the SharePoint 2016 Server. It contains the WSP package needed to implement the solution in SharePoint.

Note:

We do not deliver installer packages for SharePoint 2010. The required WSP package has to be installed manually via Management Shell. 

You can download the WSP package for SP2010 and the SAP transport request as a ZIP-file [here]().  


**System requirements** 

ERPConnect Services must be installed on the SharePoint Server.
An ECS Service Application must be created, for more information refer to our [online help]().


**Installation of the solution package using the installer** 

Execute file Theobald.SAPQuotation.exe and follow the installation routine. 
The SharePoint WSP-package will be automatically deployed to your SharePoint Server and the feature will be activated. 

**Adding the web part** 

After installing the solution you can add the App as a Web Part to any SharePoint site collection you like.

On a newly created SharePoint page click Edit -> Insert -> Web Part. Under Categories -> Theobald select the web part Theobald SAPQuotation and click Add.

![ECS-BIA-SAPQuotation20](/img/content/ECS-BIA-SAPQuotation20.png){:class="img-responsive"}

Save the SharePoint page. The solution‘s start screen will be shown. 

![ECS-BIA-SAPQuotation21](/img/content/ECS-BIA-SAPQuotation21.png){:class="img-responsive"}