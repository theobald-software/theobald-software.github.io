---
ref: ecs-core-webservice-designer-04
layout: page
title: Test the REST web service
description: Test the REST web service
product: erpconnect-services
parent: webservices
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=test_the_web_service
---

You can use the integrated test dialog to check the functionality of the web service. To use the test function you have to deploy the newly created web service to ECS Core first. 

Click *Test* below the *Operations* section to call up the *Web Service Operation Test Dialog*.

**Web Service URL**<br>
The web service URL is displayed here according the settings in the connection dialog. You cannot change the URL in the dialog.

**Query String**<br>
In the *Query String* section all scalar input parameters are listed. 

**Request Body**<br>
Complex parameters such as *List-Of* and *Structure* parameters are listed in the current section. You don't have to fill values for more than one item if you have complex parameters for multiple items defined. In standard always two items are proposed for *List-Of* parameters.

**Execute**<br>
Clicking on Execute will execute the service in live mode, any updates made will be comitted.  

**Validate JSON**<br>
With *Validate JSON* the JSON string of the service will be checked and validated for corectness.

**Response Body**<br>
In **the Response Body** the web service's return values will be displayed. If you mapped any output parameters, they will be displayed under *result*.  

To test your web service fill the input parameters with valid values and execute it. Note that the input parameters have to be in SAP compliant format. 

![ecscore-webservices20](/img/content/ecscore-webservices20.png){:class="img-responsive"}

You are free to test the web service in a separate REST client. The configuration settings for a web service call in a REST client are described [here]().  All the other information such as Web Service URL, Query String and Request Body you can copy and paste from the test dialog to a REST client, or other consumer apps.   

