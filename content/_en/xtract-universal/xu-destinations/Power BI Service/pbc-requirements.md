---
ref: xu-powerbi-cloud-01
layout: page
title: Requirements
description: Requirements
product: xtract-universal
parent: Power BI Service
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=powerbi-requirements
---

You need a Power BI account and a Power BI application ID that you receive when you register a client application for PowerBI.  
No further installation is required on your local machine. 

You register a client app to allow Xtract Universal to access Power BI. This will allow you to establish an identity for your application and specify permissions to Power BI resources. 

Please follow the instructions on this site [Register your application for Power BI](https://dev.powerbi.com/apps).
When you register a client app, you receive an application ID that will be used by Xtract Universal to have access to Power BI. 

To register your client app, you have to enter some information:  <br>
**Application Name**: The name of your application, e.g. Xtract Universal.<br>
**Application Type**: Choose *Native App*.

The following access permissions are required:  
- Read all datasets 
- Read and write all datasets. 

After the app is registered, the application ID will be displayed. Make sure you copy this ID as you will need it later on.

Furthermore, you require a *Redirect URI*. Please follow the instructions under chapter [Register with the Azure portal.](https://docs.microsoft.com/EN-US/power-bi/developer/register-app)