---
ref: ecs-configuration-04
layout: page
title: Managing ERPConnect Services
description: Creating a Secure Store Application
product: erpconnect-services
parent: configuration
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-creating-secure-store-application
---

In *Central Administration* you will find the *ERPConnect Services* group with the following functions:

- *Manage Licenses* (also see [Installing a License](../requirements-and-installation/installing-a-license))
- *Manage Objects*
- *Test Application Proxy*
- *Version History*
 
![ECS-SP-Admin-ECS](/img/content/ECS-SP-Admin-ECS.jpg){:class="img-responsive" }


**ERPConnect Services Objects**

Select this function to display the ERPConnect Services objects that were created on the SharePoint server.

![ECS-SP-ECS-Objects](/img/content/ECS-SP-ECS-Objects.jpg){:class="img-responsive" }

This page should not be used to create or delete service objects. It is mainly intended for the Product Support team to assist with technical problems.


**Test Application Proxy**

Select the *Test* link next to the ERPConnect Services Application name to check the connection to the application proxy.
Select the *Test SAP*  link to check the connection to the SAP system.


![ECS-SP-ECS-Test](/img/content/ECS-SP-ECS-Test.jpg){:class="img-responsive" }
![ECS-SP-ECS-Test-Success](/img/content/ECS-SP-ECS-Test-Success.jpg){:class="img-responsive" }


To run successfully the SAP connection test be sure of the following: 

- the service "Claims to Windows Token Service" must be running (CA -> Manage services on server). 
- the Windows Services "Claims to Windows Token Service" must be running. 
- the farm account and each other tester (e.g. CA admin) must be a member of the local group "WSS_WPG". 

After any changes restart IIS. 


**Version History**


Select the *Version History* link to show a list of product versions and the changes that were introduced.

![ECS-SP-ECS-Version-History](/img/content/ECS-SP-ECS-Version-History.jpg){:class="img-responsive" }