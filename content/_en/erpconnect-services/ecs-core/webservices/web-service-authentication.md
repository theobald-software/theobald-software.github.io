---
ref: ecs-core-webservice-designer-02
layout: page
title: Web service authentication
description: Web service authentication
product: erpconnect-services
parent: webservices
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=web_service_authentication
---

Web service authentication in ECS Core refers to two areas:
1. Authentication between the WebService Designer and ECS Core: This relates to the deployment of a web service to the ECS Core server.  
2. *Authentication between a web service consumer and ECS Core*: This relates to a web service call from a consumer app (i.e. cloud app, workflow etc.)

The following authentication methods are supported: 

- *Authentication via API Key (recommended with https)*: A dedicated API Key created on the ECS Core Management Site is used for authentication.
- *Basic Authentication (recommended with https)*: Windows Basic Authentication is used for authentication.
- *Windows Authentication (NTLM)*: Use it for web service calls only if supported by the client. The local Windows User and password is used for authentication. This enables the service configurator to connect from any machine in the Active Directory, providing the account is recognized on the server where ECS Core is installed.
- *Authentication via Azure Service Bus*: Authentication via Azure Service Bus is described separately [here](../access-via-azure-service-bus/web-services-deploying-and-consuming). 

**Authentication between the WebService Designer and ECS Core** 

When you want to use a web service created with the WebService Designer in the cloud you first have to deploy the web service to your ECS Core installation. The connection settings for the deployment in ECSCore have to be set in the Connection Dialog (*Edit Connection button*). 

**Connection settings with API Key:**

**Base URL:** 	http://[ECS Core Server]:[ECS Core Services Site port (8080 by default)] <br>
**API Key:**   	ECSCore API key (BASE64 encoded or not)  

![ecscore-webservices23](/img/content/ecscore-webservices23.png){:class="img-responsive"}

**Connection settings with Basic Authentication**

**Base URL:** 	http://[ECS Core Server]:[ECS CoreServices Site port (8080 by default)] <br> 
**Username:** 	Windows username<br>
**Password:** 	Windows server password<br> 

![ecscore-webservices21](/img/content/ecscore-webservices21.png){:class="img-responsive"}

**Connection settings with Windows Authentication**


**Base URL:** 	http://[ECS Core Server or localhost (when the designer is located on the same machine as ECS Core)]:[ECS Core Services Site port (8080 by default)] <br>
**Username:** 	Can be left blank (local Windows User is used)<br>
**Password:** 	Can be left blank (password for local Windows User is used)<br> 

![ecscore-webservices29](/img/content/ecscore-webservices29.png){:class="img-responsive"}

With the *Test* button you can test the connection settings. 

**Authentication between a web service consumer and ECS Core**
  
Between the web service consumer and ECS Core the same authentication methods are supported. The web service consumer can be for instance a REST client, a workflow, a JavaScript app, etc.

Setting the authentication for the web service call ist described for the Postman REST Client here. These settings can be applied to REST web service calls in a workflow solution (i.e. Flow, Nintex). If you just want to test the functionality of a workflow quickly please use the web service operation [test dialog](./test-the-rest-web-service). 

**General settings for REST web service calls in a REST Client**

**Web service method:** 	POST<br>
**Web service URL:** 		http(s)://[ECS Core Server]:[ECS Core Services Site port (8080 by default)]/wsd/[web service name]/[name of the web service operation]<br>
**Params:** 			Scalar input parameters (will be added automatically to the URL)

**Connection Settings with API key**

Authorization: 
                
**Type:** 			No Auth

Headers:

**Authorization:**      	APIKEY [BASE64 encoded ECSCore API key]<br>
**Accept:**                	application/json (XML not supported)<br>
**Content-Type:**      	application/json (XML not supported) 


![ecscore-webservices26](/img/content/ecscore-webservices26.png){:class="img-responsive"}

**Connection settings with Basic Authentication**  

Authorization		   

**Type:** 				   Basic Auth<br>
**Username:**			   Windows username (supported with domain)<br>
**Password:**			   Windows password

Headers

**Authorization:**      	Basic Key (Automatically generated)<br>
**Accept:**                	application/json (XML not supported)<br>
**Content-Type:**      		application/json (XML not supported) 

![ecscore-webservices24](/img/content/ecscore-webservices24.png){:class="img-responsive"}

![ecscore-webservices25](/img/content/ecscore-webservices25.png){:class="img-responsive"}

Connection settings with Windows Authentication  

Authorization	   

**Type:** 				   NTLM Authentication<br>
**Username:**			   Windows username<br>
**Password:**			   Windows password<br>
**Domain (Optional):**	   Domain name	
 
Headers

**Authorization:**      		NTLM Key (Automatically generated)<br>
**Accept:**                		application/json (XML not supported)<br>
**Content-Type:**      		application/json (XML not supported) 

![ecscore-webservices30](/img/content/ecscore-webservices30.png){:class="img-responsive"}

![ecscore-webservices31](/img/content/ecscore-webservices31.png){:class="img-responsive"}

