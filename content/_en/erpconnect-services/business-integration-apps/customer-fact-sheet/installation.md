---
layout: page
title: Installation
description: Installation
product: erpconnect-services
parent: customer-fact-sheet
childidentifier: 
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=cfs-installation
---

**Download**

You can download the installation files [here](). 

The following files are delivered: 

*Theobald.CustomerFactsheet.exe*: The installer package that must be installed on the SharePoint 2013 Server. It contains the WSP package needed to implement the solution in SharePoint.<br>
*Theobald.CustomerFactsheet2016.exe*: The installer package that must be installed on the SharePoint 2016 Server. It contains the WSP package needed to implement the solution in SharePoint.
  
*SAP transport request*: The SAP transport request contains a custom function module required to run the app and must be installed on your SAP system. 

             

**System requirements** 

ERPConnect Services must be installed on the SharePoint Server.
An ECS Service Application must be created, for more information refer to our [online help]().

**Installing the SAP transport** 

A SAP transport request must be installed in SAP. For more information about the installation of the transport request check our [Knowledgebase]().

**Installation of the solution package using the installer**

Execute file *Theobald.CustomerFactsheet.exe* and follow the installation routine. 
The SharePoint WSP-package will be automatically deployed to your SharePoint server and the feature will be activated. 

**Adding the Web Part**

After installing the solution you can add the App as a Web Part to any SharePoint site collection you like.
On a newly created SharePoint page click *Edit -> Insert -> Web Part*. Under *Categories -> Theobald* select the *Web Part Customer Fact Sheet (BIA Theobald Software)* and click *Add*.

![ECS-BIA-CustomerFactsheet9](/img/content/ECS-BIA-CustomerFactsheet9.png){:class="img-responsive"}

Save the SharePoint page. The solution‘s startscreen will be shown. 

![ECS-BIA-CustomerFactsheet10](/img/content/ECS-BIA-CustomerFactsheet10.png){:class="img-responsive"}

