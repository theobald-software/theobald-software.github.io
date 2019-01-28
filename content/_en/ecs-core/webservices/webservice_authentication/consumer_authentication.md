---
ref: ecs-core-webservice-designer-02
layout: page
title: Consumer authentication
description: Consumer authentication
product: ecs-core
parent: webservice_authentication
permalink: /:collection/:path
weight: 2
lang: en_GB
---

The following authentication methods are supported for consuming web services: 

- **API Key authentication** (supported only in combination with Azure Relay): A dedicated API key created on the ECS Core Management site is used for authentication. The API key must be created to consume to a Windows user or Windows user group.  

- **Basic Authentication** (HTTPS recommended): Windows Basic Authentication is used for authentication.

- **Windows Authentication (NTLM)**: The local Windows user with his credentials is used for authentication. This allows the Web services creator to connect from any machine in Active Directory, provided the account is recognized on the ECS Core Server. <br>
NTLM can only be used for authentication if supported by the client application.


The connection settings for a web service call are explained here using the *Postman* REST client as an example. These settings can be transferred for example for REST service calls in a workflow application (e.g. Flow, Nintex). 

**Connection Settings with API Key** (only supported with Azure Relay)

*Web Service Method*:           POST<br>

*Webservice URL:*               https://[Service Bus Name].servicebus.windows.net/ecs/ws/custom/[Webservice Name]/[Webservice Name Operation]<br>

Example: https://theobald-proxyservices.servicebus.windows.net/ecs/ws/custom/SAPCustomerWebservice/CustomerGet                  

*Authorization*
                
*Type:*                         No Auth

*Headers*

*Authorization:*                APIKEY [API Key created in ECS Core]<br>
*Accept:*                       application/json (XML not supported)<br>
*Content-Type:*                 application/json (XML not supported) 

*Params:*                       Scalar input parameters (only required if the Web service contains such parameters; are automatically added to the URL)

*Body:*                         List-like input parameters or input structures (only required if the Web service contains such parameters) 

![ecscore-webservicetest_4](/img/content/ecscorewebservicetest_4.png){:class="img-responsive"}

**Connection Settings with Basic Authentication**

*Web Service Method:*         POST<br>

*Webservice URL:*             http(s)://[ECS Core Server]:[ECS Core Services Site port (default 8080)]/wsd/[Webservice Name]/[Name of Webservice Operation]<br>

Example: http://52.88.254.77:8080/wsd/SAPCustomerWebservice/CustomerGet 

*Authorization*	   

*Type:*                        Basic Auth<br>
*Username:*                    Windows username (supported with domain)<br>
*Password:*                    Windows password

*Headers*

*Authorization:*              Basic key (automatically generated) <br>
*Accept:*                     application/json (XML not supported)<br>
*Content-Type:*               application/json (XML not supported) 

*Params:*                     Scalar input parameters (only required if the Web service contains such parameters; are automatically added to the URL)

*Body:*                       List-like input parameters or input structures (only required if the web service contains such parameters) 

![ecscore-webservicetest_5](/img/content/ecscorewebservicetest_5.png){:class="img-responsive"}

![ecscore-webservicetest_6](/img/content/ecscorewebservicetest_6.png){:class="img-responsive"}

**Connection settings with Windows authentication (NTLM)**

*Web Service Method:*        POST<br>

*Web Service URL:*           http(s)://[local ECS Core Server]:[ECS Core Services Site port (default 8080)]/wsd/[Web Service Name]/[name of the Web Service Operation]<br>

Example: http://localhost:8080/wsd/SAPCustomerWebservice/CustomerGet

*Authorization*

*Type:*                      NTLM Authentication<br>
*Username:*                  Windows Username<br>
*Password:*                  Windows Password<br>
*Domain (Optional):*         Domain name	
 
*Headers*

*Authorization:*             NTLM key (automatically generated) <br>
*Accept:*                    application/json (XML not supported)<br>
*Content-Type:*              application/json (XML not supported) 

*Params:*                    Scalar input parameters (only required if the Web service contains such parameters; are automatically added to the URL)

*Body:*                      List-like input parameters or input structures (only required if the Web service contains such parameters) 

![ecscore-webservicetest_7](/img/content/ecscorewebservicetest_7.jpg){:class="img-responsive"}

![ecscore-webservicetest_8](/img/content/ecscorewebservicetest_8.jpg){:class="img-responsive"}