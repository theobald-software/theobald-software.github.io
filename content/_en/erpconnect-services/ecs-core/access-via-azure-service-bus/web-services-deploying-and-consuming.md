---
layout: page
title: Deploying and consuming web services
description: Deploying and consuming web services
product: erpconnect-services
parent: access-via-azure-service-bus
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=web_service_authentication1
---

Access via Azure Service Bus can be used for deploying and consuming web services built with the WebService Designer. <br>
How to create cloud enabled ECS Core web services is explained [here](../webservice-designer).    <br>
Basic information about web service authentication with ECS Core is described in [this](../webservice-designer/web-service-authentication) chapter.     

**Authentication between the WebService Designer and ECS Core** 

For the web service deployment to ECS Core you have to define the connection settings in the connection dialog. 

Connection settings with Azure Service Bus and API Key:


**Base URL:** 	https://[SERVICEBUSNAME].servicebus.windows.net  

**API Key:** 	ECS Core API key (BASE64 encoded or not)  

![ecscore-webservices27](/img/content/ecscore-webservices27.png){:class="img-responsive"}

Basic Authentication with Azure Service Bus is also supported. 



**Authentication between a web service consumer and ECS Core**
              
To consume the web service in a REST client for example you have to provide the following information for the web service call (example with Postman REST client).

General settings:

**Web service method:** 	POST<br>
**Web service URL:** 		https://[Azure Service Bus name].servicebus.windows.net/ecs/ws/custom/[web service name]/[name of the  web service operation]<br>
**Params:** 				Scalar input parameters (will be added automatically to the URL)

Authorization: 		   

**Type:** 				   No Auth

Headers:

**Authorization:**   		APIKEY [BASE64 encoded ECSCore API Key]<br>
**Accept:**                		application/json (XML not supported)<br>
**Content-Type:**      		application/json  (XML not supported)

![ecscore-webservices28](/img/content/ecscore-webservices28.png){:class="img-responsive"}

Basic Authentication with Azure Service Bus is also supported for web service calls. 

