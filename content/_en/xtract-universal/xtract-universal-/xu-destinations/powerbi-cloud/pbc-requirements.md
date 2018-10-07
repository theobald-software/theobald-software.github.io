---
layout: page
title: Requirements
description: Requirements
product: xtract-universal
parent: powerbi-cloud
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=powerbi-requirements
---

You need a PowerBI account and a PowerBI Client ID that you receive when you register a Client App for PowerBI.  
No further installation is required on your local machine. 


You register a Client App to allow Xtract Universal to access Power BI. This will allow you to establish an identity for your application and specify permissions to Power BI resources. 

Please follow the instructions on the site [Register a client app](https://dev.powerbi.com/apps) in the section *Register a client app* with *Power BI App Registration Tool*.
When you register a client app, you receive a Client ID that will be used by Xtract Universal to have access to PowerBI. 

To register your client app, you have to enter some information:  <br>
**App Name**: The name of your app, e.g. Xtract universal.<br>
**App Type**: Choose Native app.
Redirect URI: Any valid Uri will work such as http://www.theobald-software.com.

The following access permissions are required:  
- Dataset Read und 
- Read and Write all Datasets. 

To register your app, click Register App. After the app is registered, you will get a Client ID. 
Make sure you copy the Client ID and your Redirect URI.