---
ref: ecs-configuration-01
layout: page
title: Service Applications
description: Service Applications
product: erpconnect-services
parent: configuration
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-service-applications
---

You can view all service applications that are installed on your SharePoint server using Central Administration. Under *Application Management* you will find the *Service Applications group*:


![ECS-SP-Service-Applications-Overview](/img/content/ECS-SP-Service-Applications-Overview.jpg){:class="img-responsive" }


**Manage Services Applications**

Select *Manage service applications* to see a list of service applications that are available within the SharePoint farm.

![ECS-SP-Service-Applications-Manage](/img/content/ECS-SP-Service-Applications-Manage.jpg){:class="img-responsive" }


ERPConnect Services can be installed on multiple servers within a farm and provide a combined and load-balanced feature set to the developer for accessing SAP data.

Programmatic access to the ERPConnect Services object model is provided by the class ERPConnectServiceClient. This class is available in all development environments through the provided assemblies. 
The class can be used in SharePoint solutions, including web parts or application pages, as well as in desktop applications. 


**Service Application Associations**

For every Web application in SharePoint you can specify which service applications it will be associated with. The *default* association for a 
Web application is defined via the default  application proxy group.
Unless a specific service application is provided, the one in the default group will be used. 

To manage the default group, select Application Management und from the *Service Applications* group select *Configure service application associations*. The *Service Application Associations page* will be displayed.

![ECS-SP-Service-Applications-Assocication-01](/img/content/ECS-SP-Service-Applications-Assocication-01.jpg){:class="img-responsive" }

Select the *default* application proxy group to see the associations to the service applications. In case you have configured multiple ERPConnect Services applications, for example for different SAP systems, you can specify the default ERPConnect Services application.

![ECS-SP-Service-Applications-Assocication-02](/img/content/ECS-SP-Service-Applications-Assocication-02.jpg){:class="img-responsive" }


**Important:**

You should only select one ERPConnect Services application as the default service application. SharePoint will use the first service application, if multiple applications of the same type are included in the default group.


**Manage Services on Server**

To manage the services on the SharePoint server, go to the *Service Applications* group and select *Manage services on server*. The Services page will be displayed and you should see the *ERPConnect* Service in status Started.

![ECS-SP-Manage-Services-On-Server](/img/content/ECS-SP-Manage-Services-On-Server.jpg){:class="img-responsive" }

On this page you can view the status of each service and start or stop a service.