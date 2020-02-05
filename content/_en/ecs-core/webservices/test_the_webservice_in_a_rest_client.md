---
ref: ecs-core-webservice-designer-06
layout: page
title: Test the web service
description: Test the web service
product: ecs-core
parent: webservices
permalink: /:collection/:path
weight: 6
lang: en_GB
---

To be able to test a web service, you must first deploy it to the ECS Core Server. 
To facilitate testing the service in a REST client, you can look up the settings in the *Web Service Test Data Generation dialog* and copy them from there. 

![ecscore-webservicetestdialog](/img/content/ecscore-wsd_20.png){:class="img-responsive"}

The following settings are displayed in the dialog:

**Operation Endpoint with URL parameters** <br>
The Web service URL with dummy port 9999 is displayed. If the service contains scalar input parameters, these are listed directly in the URL. <br>
With *Copy to clipboard* the web service URL is copied to the clipboard. 

**Query String** <br>
All scalar input parameters are listed in the Query String window. 

**Request Body** <br>
Complex input parameters such as lists (List-Of) and structure parameters are displayed in this window. By default, there are two positions for entering list parameters. <br> 
With *Copy to clipboard* the content of the request body is copied to the clipboard. 

**Validate JSON** <br>
With *Validate JSON* the JSON string of the web service is checked and validated for correctness. 
