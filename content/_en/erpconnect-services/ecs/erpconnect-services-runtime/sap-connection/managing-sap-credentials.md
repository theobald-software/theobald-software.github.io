---
layout: page
title: Managing SAP Credentials
description: Managing SAP Credentials
product: erpconnect-services
parent: sap-connection
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-managing-sap-credentials
---

ERPConnect Services provides a solution that enables SharePoint users to maintain their SAP credentials in the SharePoint Secure Store Services.

The SharePoint user does not need to be explicitly created in the Secure Store. He will be automatically created at the first login attempt.
The solution package ERPConnectServices.WebParts.wsp can be found in the installation folder (e.g. C:\Program Files\ERPConnect Services). 

**Deploy the solution**

At first the solution must be installed and activated. The following steps show how to achieve that with the SharePoint Management Shell:

add-spsolution -LiteralPath "C:\Program Files\ERPConnect Services\ERPConnectServices.WebParts.wsp"
install-spsolution -WebApplication http://juliet2/ -Identity erpconnectservices.webparts.wsp -GACDeployment
install-spfeature -path ERPConnectServices.WebParts_Feature
enable-spfeature -identity ERPConnectServices.WebParts_Feature -URL http://juliet2/

**Check the installation:**

In the central administration the solution is deployed (under System settings -> Manage farm solutions).

The following folder has been created
C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\14\TEMPLATE\FEATURES\ERPConnectServices.WebParts_Feature 

The feature is activated under the site collection features of your web application (Site settings -> Site collection features).

**Add the Webpart**

Now we want to add the web part to a dedicated page.

![ECS-SS-Manager-Webpart-01](/img/content/ECS-SS-Manager-Webpart-01.jpg){:class="img-responsive" }

Select ERPConnect Services and then Secure Store Web Part. Click on Add.

![ECS-SS-Manager-Webpart-02](/img/content/ECS-SS-Manager-Webpart-02.jpg){:class="img-responsive" }

Click on Edit Web part to open the settings.

![ECS-SS-Manager-Webpart-03](/img/content/ECS-SS-Manager-Webpart-03.jpg){:class="img-responsive" }

Select the Secure Store Service from the drop down list, for which the SharePoint users should maintain their credentials.Click on OK.


![ECS-SS-Manager-Webpart-04](/img/content/ECS-SS-Manager-Webpart-04.jpg){:class="img-responsive" }

Then Click on Save and Close.

![ECS-SS-Manager-Webpart-05](/img/content/ECS-SS-Manager-Webpart-05.jpg){:class="img-responsive" }

Now the web part can be used. Fill in SAP user name and Password. 


![ECS-SS-Manager-Webpart-06](/img/content/ECS-SS-Manager-Webpart-06.jpg){:class="img-responsive" }

The SAP credentials will be saved in the Secure Store application and mapped to the logged SharePoint user.


![ECS-SS-Manager-Webpart-07](/img/content/ECS-SS-Manager-Webpart-07.jpg){:class="img-responsive" }

**Note about Access Rights to the Secure Store Service**

The SharePoint user must have the permission *Manage Target Application* at minimum to be able to use this web part to set his credentials. 
Permissions can be set in the SharePoint Central Administration:
- Browse to *Application Management*
- Click *Manage Service Applications*
- Click to the right of the *Secure Store Application* link to highlight the row. 
- Click on the *Administrators* button in the menu ribbon and add the user or the user group to the field. 
- Click *Add* and check *Manage target applications*.
