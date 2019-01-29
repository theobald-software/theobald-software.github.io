---
ref: ecs-core-prerequisites-and-installation-03
layout: page
title: Deployment
description: Deployment
product: ecs-core
parent: prerequisites-and-installation
permalink: /:collection/:path
weight: 3
lang: en_GB
---

The *Deployment Manager* installs the administration interface for the administration (e.g. SAP connection, Azure Relay, Web Services) of ECS Core. 
This is the setup of the IIS web pages and the associated resources such as database for the configurable ECS Core settings such as access and connection settings.

**Prerequisites** 

The following IIS components are required for execution:

*Common HTTP Features*
- HTTP Redirection

* Security*
- Basic Authentication
- Windows authentication

*Application development*
- ASP.NET 4.7
- ISAPI Extension
- ISAPI Filters

*Management Tools*
- IIS Management Tools and Scripts


Missing IIS components can be installed automatically when starting the Deployment Manager. Alternatively, they can be added manually in advance using Windows Server Management (*Add Roles and Features*).

**Deployment**

![ecscore-deploymentmanager-1.jpg](/img/content/ecscore-deploymentmanager-1.jpg){:class="img-responsive"}

Select *Express Install* to install with the default settings and ports. To adjust the default values, click *Next*. This will go through expert mode, which we recommend only to experienced users.  

In Expert mode, you can make the following fine adjustments:

**Installation Directory**

Default directory for setting up the components: C:\ECSCore

*Services Site* technically means the Web page that provides the consumer endpoint for deployed Web services and the client library for calling SAP functionality in the cloud environment.
The Deployment Manager creates the page in the IIS. You can call it directly from there or by specifying the port entered (8080) directly in the browser (http://localhost:8080).


![ecscore-deploymentmanager-2.jpg](/img/content/ecscore-deploymentmanager-2.jpg){:class="img-responsive"}

**Management Site**

The configuration for ECSCore is done on the *Management Site*. It is also used for deployment and administration of created web services. With the Deployment Manager, the management site is created in the IIS and can be called from there or directly in the browser by specifying the port (8085) (http://localhost:8085).

![ecscore-deploymentmanager-3.jpg](/img/content/ecscore-deploymentmanager-3.jpg){:class="img-responsive"}

**Database**

This setting is no longer supported, a *Microsoft SQL Server Compact* is no longer required in the current version and is installed. 

**Master Key**

The *Master Key* can be used to restore sensitive information such as logon data for the management dashboard or SAP connections.
Important: Keep the password in a safe place.

![ecscore-deploymentmanager-4.jpg](/img/content/ecscore-deploymentmanager-4.jpg){:class="img-responsive"}

Click *Finish* to complete the configuration.

The Management Site and Services Site setup is complete. The pages are then listed in the IIS Manager.
Learn more under [Management Site](../ecs-core-administration/management-dashboard) and [Services Site](../ecs-core-administration/services-site).