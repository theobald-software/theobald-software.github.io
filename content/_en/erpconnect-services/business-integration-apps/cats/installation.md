---
layout: page
title: Installation
description: Installation
product: erpconnect-services
parent: cats
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=cats-install
---

**Installation files**

You can download the installation files [here](). 

The following files are delivered: 

Theobald.CATS.exe: The installer package that must be installed on the SharePoint Server. It contains the WSP package needed to implement the solution in SharePoint.


**System requirements** 

ERPConnect Services must be installed on the SharePoint Server.<br>
An ECS Service Application must be created, for more information refer to our [online help]().

For secure authorization within the application a Secure Store Application is required. Create one in the SharePoint Central Administration. It is described in detail how to do this in our [online help](). 

Permissions: Make sure that the users stored in the Secure Store have the necessary permissions. They need full rights on the Secure Store Service Application and at least reading rights on the ERPConnect Service Application. 

**SAP customizing**

On the SAP side you have to do the necessary customizing for CATS (i.e. data entry profile) and for recording working hours in the SAP project system. In SAP personal administration (infotype 0105) the SAP user calling up the CATS application has to be assigned to an employee.  


**Installation of the solution package using the installer**

Execute file Theobald.CATS.exe and follow the installation routine. 
The SharePoint WSP-package will be automatically deployed to your SharePoint Server and the feature will be activated. 
 
**Adding the Web Part** 

After installing the solution you can add the App as a Web Part to any SharePoint site collection you like.

On a newly created SharePoint page click on Edit -> Insert -> Web Part. Under Categories -> Custom select the web part CATS4SharePoint and click on Add.

 
![cats-install-01](/img/content/cats-install-01.png){:class="img-responsive"}

Save the SharePoint page. At first an error message will be shown because the Web Part is not configured yet. 

**Configuring the Web Part**

Open the Web Parts configuration settings in the right upper corner of the error message window. 

 
![cats-install-02](/img/content/cats-install-02.png){:class="img-responsive"}


You can select the ECS Service Application and Secure Store Service Application in the *CATS4SharePoint Configuration* section. You also have to enter a Controlling Area (CO-Area) and CATS-Profile to finish the app configuration. 

![cats-install-03](/img/content/cats-install-03.png){:class="img-responsive"}
 

Confirm the configuration entries with OK and save the SharePoint page.  


![cats-install-04](/img/content/cats-install-04.png){:class="img-responsive"} 

The solution‘s start screen will be shown. 

![cats-install-05](/img/content/cats-install-05.png){:class="img-responsive"}