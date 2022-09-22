---
ref: ecs-core-webservice-designer-05
layout: page
title: Create OpenApi definitions
description: Create OpenApi definitions
product: erpconnect-services
parent: webservices
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=create_openapi_definitions
---

After you have successfully designed and tested your web service you can export it into an OpenAPI definition. OpenAPI (formerly known as Swagger) is an API description format for REST APIs. Some cloud applications such as Nintex Workflow Cloud or Microsoft Flow support the import of OpenAPI files as custom connectors. The advantage is that it is really easy to configure these connectors compared a the rather technical direct web service call.  

To export a web service into an OpenAPI definition click on *Export OpenAPI Definition* in the menu bar. The definition will be exported to the wanted destination in JSON-format. It is possible to adjust it manually within any JSON-editor of your choice (e.g. Visual Studio). 

![ecscore-nwc_1](/img/content/ecscore-nwc_1.png){:class="img-responsive"}

With the *Edit OpenAPI Options* Button you have the following options:


**Add default actions to the definition**<br>
Additional generic web services will be added to the definition:

- ECS Execute SAP Function: With this generic service SAP function calls are possible. Examples for the service definition can be found [here](../../ecs/erpconnect-services-runtime/web-services/rest-without-tecs/function-module-with-rest). 
- ECS Get SAP Function Metadata: To determine the input and output parameters of the SAP function for the *ECS Execute Function* action you can use this service first. 
- ECS Table Query: This generic service enables you to call any SAP table or table view. Examples for the service definition can be found [here](../../ecs/erpconnect-services-runtime/web-services/rest-without-tecs/table-with-rest). 
- ECS XQL Query: With the ECS XQL Query service you can send specific XtractQL (short: XQL) query statements for read and write access to the SAP system. XQL and its syntax is described in detail [here](../../ecs/xtractql).

**Use variable names as "title" parameter**<br>
With this setting shortened titles for the web service parameters will be used. The full technical path from the Request and Response Body is left away (i.e. *Result* instead of *Result Result*).  

**Add "ServiceApplication" parameter to WebServices**<br>
This setting will add the parameter *Custom Service Application*  to the OpenAPI definition which enables you to select the service application later in the consumer app (i.e. Nintex Workflow Cloud). Otherwise the service application defined in the WebService Designer is used (default if not). 
 
The import and use of OpenAPI definitions in a consumer app are described [here](https://help.theobald-software.com/en/erpconnect-services/ecs-core/integration-with-office-365/integration-with-microsoft-flow/import-the-openapi-definition-to-flow) for Microsoft Flow. 