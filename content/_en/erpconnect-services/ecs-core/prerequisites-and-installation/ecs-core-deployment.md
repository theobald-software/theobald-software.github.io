---
ref: ecs-core-prerequisites-and-installation-03
layout: page
title: Deployment
description: Deployment
product: erpconnect-services
parent: prerequisites-and-installation
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=deployment_manager
---

Deployment Manager is an installation engine, which creates the administration portal for ECSCore. Required local resources such as a database are created and web sites for Services and Management are installed into IIS. 

**Prerequisites**

The following IIS components are required for the deployment:

Common HTTP-Features
- HTTP Redirection

Security
- Basic Authentication
- Windows Authentication

Application Development
- ASP.NET 4.5
- ISAPI Extension
- ISAPI Filters

Management Tools
- IIS Management Tools and Scripts
             
Please go to the Server Manager (Windows Server) or to Windows Features (Windows ) and install them manually.

**Deployment** 

To start the Deployment Manager after the ECSCore installation go to the installation folder (normally C:\Program Files\ERPConnect Services Core) and run the file:
**ERPConnectServices.DeploymentManager.exe**. Please also run the Deployment Manager after doing a software update or re-installation of ECS Core. In this case only an update is processed in the Deployment Manager and you don't have to go through all the steps described here again. 

![Deployment-Manager](/img/content/Deployment-Manager.jpg){:class="img-responsive"}

The Wizard checks the prerequisites

![ecscore-deploymentmanager-2](/img/content/ecscore-deploymentmanager-2.jpg.png){:class="img-responsive"}

If some components could not be acquired and installed automatically, they will be shown on the *Prerequisites* screen. 
When all prerequisites are fulfilled, you will get the following screen.

![ecscore-deploymentmanager-1](/img/content/ecscore-deploymentmanager-1.jpg.png){:class="img-responsive"}

In the next steps you have to configure the specific targets of the ECSCore administration portal.

**Installation Directory**

Default deployment path: C:\ECSCore

**Services Site**

The *Services Site* is used to check the current status of the SAP connection, clear caches.
Default port is 8080. You can open the web site after the deployment process via IIS or directly in the web browser using the given port (http://localhost:8080).

![Deployment-Manager-02](/img/content/Deployment-Manager-02.jpg){:class="img-responsive"}

**Management Site**

The *Management Site* incorporates administration tasks such as adding SAP services and users for them, Secure Stores, API Keys, managing Azure Service Bus, UI Administrators, License. Default port is 8085. You can open the web site after the deployment process via IIS or directly in the web browser using the given port (http://localhost:8085).

![Deployment-Manager-03](/img/content/Deployment-Manager-03.jpg){:class="img-responsive"}

**Database**

In the *Database* ribbon *Microsoft SQL Server Compact*  is already selected. In this database all ECSCore configuration settings will be stored. 

![Deployment-Manager-04](/img/content/Deployment-Manager-04.jpg){:class="img-responsive"}

**Master Key** 

The Master Key can be used to manually recover settings from the database in case of failure (Windows / SQL).
We recommend to save the Master Key at a save place.  


Press *Finish* to let the DM Wizard complete the configuration.


![Deployment-Manager-05](/img/content/Deployment-Manager-05.jpg){:class="img-responsive"}

After this step the Websites should be ready and functional. You can open them from the IIS Manager. 
Check [Management Site](../administration/management-site) and [Services Site](../administration/services-site). 