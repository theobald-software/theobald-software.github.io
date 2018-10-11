---
layout: page
title: Creating an ECS Service Application
description: Creating an ECS Service Application
product: erpconnect-services
parent: configuration
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=create-an-ecs--service-application
---

An ERPConnect Service Application in SharePoint represents the main connectivity component to an SAP system. The service application stores all the information required to establish a connection to the SAP system (see screen below). 

To create a new ECS Service Application, go to the *Manage service applications* page in SharePoint Central Administration. Select *New -> ERPConnect Service Application*.

Specify a *Service Application Name* and the *SAP Connection* parameters, including the Host Name of a single SAP application server or the Message Server for a connection using load balancing. In addition, you can provide service application-specific parameters, for example the *Application Pool* or the *Default* flag for the ERPConnect Services Application.

![ECS-Create-Application-01](/img/content/ECS-Create-Application-01.png){:class="img-responsive" }


To enable individual SAP access for every SharePoint user, ERPConnect Services supports using a *Secure Store Service* in SharePoint. 
In the following steps, we will utilize an already existing Secure Store Service Application. 
Alternatively you can the technical access (SAP user name and password).

See [Creating a Secure Store Servicese Application](./creating-a-secure-store-app) for further information.<br>
See [SAP Authentication](../erpconnect-services-runtime/sap-connection/sap-authentication) for further information on authentication with ERPConnect Services Runtime.

![ECS-Create-Application-02](/img/content/ECS-Create-Application-02.png){:class="img-responsive" }


For the *IIS Application Pool* you can select an existing pool or create a new one. The available application pools will be shown in the drop-down list.

It is not necessary to create a new application pool with every new ERPConnect Services application. Multiple service applications can share the same application pool.

By selecting the Default flag, the ERPConnect Service Application will be used as the default application. When SAP data is accessed using ERPConnect Services, the settings of the default application will be used, unless another application is specified explicitly.

Select the *Create* button to create the new ERPConnect Service Application.

![ECS-Create-Application-03](/img/content/ECS-Create-Application-03.png){:class="img-responsive" }


Every new ERPConnect Services Application will be displayed with two entries in the list of service applications. The first entry is the Service Application itself, and the second entry is the Service Application Proxy object. The proxy object is important for developing a solution.

After the installation check that the created ERPConnect Service is associated to the SharePoint Web Application (e.g. SharePoint - 80) under Central Administration -> Manage Web Applications -> Service Connections.

The new Service Application will start immediately and will be available within the SharePoint farm. For further information on the SharePoint service architecture, please refer to the Microsoft documentation. 

