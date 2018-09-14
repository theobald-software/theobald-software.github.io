---
layout: page
title: Installation
description: Installation
product: erpconnect-services
parent: stock-info
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=stockinfo-installation
---

**Download**

You can download the installation files [here](). 

The following files are delivered: 

*Theobald.StockInfo.exe*: The installer package that must be installed on the SharePoint 2013 Server. It contains the WSP package needed to implement the solution in SharePoint.

*Theobald.StockInfo2016.exe*: The installer package that must be installed on the SharePoint 2016 Server. It contains the WSP package needed to implement the solution in SharePoint.
  
*SAP transport  request (2 Files)*: The SAP transport request contains the custom function module required for the StockInfo app and must be installed on your SAP system.

Note:

We do not deliver installer packages for SharePoint 2010. The required WSP package has to be installed manually via Management Shell. 

You can download the WSP package for SP2010 and the SAP transport request as a ZIP-file [here]().

**System requirements** 

ERPConnect Services must be installed on the SharePoint Server.<br>
An ECS Service Application must be created, for more information refer to our [online help]().

**Installing the SAP transport** 

The SAP transport request must be installed in SAP. For more information about the installation of the transport request check our [Knowledgebase]().

**Installation of the solution package using the installer** 

Execute file Theobald.StockInfo.exe and follow the installation routine. <br>
The SharePoint WSP-package will be automatically deployed to your SharePoint Server and the feature will be activated. 


**Adding the Web Part** 

After installing the solution you can add the App as a Web Part to any SharePoint site collection you like.

On a newly created SharePoint page click on Edit -> Insert -> Web Part. Under Categories -> Theobald select the web part Theobald Stock Info and click on Add.

![ECS-BIA-StockInfo7](/img/content/ECS-BIA-StockInfo7.png){:class="img-responsive"}

Save the SharePoint page. The solution‘s start screen will be shown. 

![ECS-BIA-StockInfo8](/img/content/ECS-BIA-StockInfo8.png){:class="img-responsive"}

