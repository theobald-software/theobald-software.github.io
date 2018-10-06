---
layout: page
title: Installation
description: Installation
product: erpconnect-services
parent: leave-request
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=leave-installation
---

**Download**

You can download the installation files [here](https://my.theobald-software.com/files/ECS/Theobald.LeaveRequest.zip).

The following files are delivered: 

*Theobald.LeaveRequest.exe*: The installer package for the Leave Request App that must be installed on the SharePoint Server. It contains the WSP package needed to implement the solution in SharePoint.

*Theobald.LeaveRequestManager.exe*: The installer package for the Leave Approval App that must be installed on the SharePoint Server. It contains the WSP package needed to implement the solution in SharePoint.

*SAP tranport request (2 Files)*: The SAP transport request contains the custom function module required to run the app and must be installed on your SAP system.

Note:

We do not deliver installer packages for SharePoint 2010. The required WSP package has to be installed manually via Management Shell. 

You can download the WSP package for SP2010 and the SAP transport request as a ZIP-file [here](https://my.theobald-software.com/files/ECS/Theobald.LeaveRequestSP2010.zip).  


**System requirements** 

ERPConnect Services must be installed on the SharePoint Server.
An ECS Service Application must be created, for more information refer to our [online help](../../ecs/configuration/creating-an-ecs-service-app).



**SAP Customizing**

Since the Business Integration Apps get use of the SAP customizing settings for leave requests and leave approvals some configurations have to be made on SAP side:

- Organizational management for building teams and assign managers for approval  
- Time quotas for quota deduction
- Customized absence types
- Service specific settings about absence requests, team calendar and working time accounts
- ESS user with appropriate authorization roles
- Linked ESS user to a personell number (maintained in Infotype 0105) 
- Functioning approval workflow

In principle many SAP standard settings can be used as customizing, e.g. in standard a functioning approval workflow should be available. The effort required to get the app running is therefore at a manageable level.  
 
**Installing the SAP transport** 

The SAP transport request must be installed in SAP. For more information about the installation of the transport request check our [Knowledgebase](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/68/0/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms).

**Installation of the solution package using the installer**

Execute files Theobald.LeaveRequest.exe and Theobald.LeaveRequestManager.exe and follow the installation routine. 
The SharePoint WSP-packages will be automatically deployed to your SharePoint server and the features will be activated. 


**Adding the Web Part**

After installing the solution you can add the App as a Web Part to any SharePoint site collection you like.

On a newly created SharePoint page click Edit -> Insert -> Web Part. Under Categories -> Theobald select the Web Part Theobald Leave Request/ Theobald Leave Request Manager and click Add.

![bia-leave-install-01](/img/content/bia-leave-install-01.png){:class="img-responsive"}

Save the SharePoint page. The solution‘s start screen will be shown. 

![bia-leave-install-02](/img/content/bia-leave-install-02.png){:class="img-responsive"}