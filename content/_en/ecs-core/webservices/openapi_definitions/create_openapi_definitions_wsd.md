---
ref: ecs-core-webservice-designer-06
layout: page
title: Create OpenAPI definitions with WebService Designer
description: Create OpenAPI definitions with WebService Designer
product: ecs-core
parent: openapi_definitions
permalink: /:collection/:path
weight: 1
lang: en_GB
---

You can use the **WebService Designer** to create an OpenAPI definition as follows: 

Create a new Web service or call an already deployed Web service from the server. 

Click on *OpenAPI...* under *Exports* in the menu bar. The definition is exported to the specified destination in JSON format and can be edited there manually with any JSON editor (e.g. Visual Studio). 

![ecscore-nwc_1](/img/content/ecscore-wsd_21.jpg){:class="img-responsive"}

The export to OpenAPI also works for newly created web services that have not yet been deployed to the ECS Core Server. However, the web service call only works after the deployment has been completed.

In the *OpenAPI Options dialog* (in the menu bar under *Options*) you can make the following settings:


**Add generic service operations to the definition** (Default: No)

Additional generic services are added to the definition:

- ECS Execute SAP Function: This service enables generic calls of SAP function modules. An example of the service definition can be found [here](../../ecs-en/ecs-runtime/ecs-webservices/rest-without-tecs/ecs-function-module-with-rest).
- ECS Get SAP Function Metadata: This service can be used to determine the input and output parameters of the ECS Execute Function Services.
- ECS Table Query: This service enables the generic call of any SAP table or view. An example of the service definition can be found [here](../../ecs-en/ecs-runtime/ecs-webservices/rest-without-tecs/ecs-table-wit-rest). 
- ECS XQL Query: This service can be used to send specific XtractQL (short: XQL) query statements to the SAP system for read and write access. The XQL syntax is described [here](../.../ecs-en/ecs-runtime/ecs-xtractql/ecs-xtractql-syntax). 

**Use variable names as "title" parameter** (Default: No)

This setting uses a shortened name for the web service parameters in the OpenApi definition. The complete path of Request Body and Response Body is omitted (e.g. *Result* instead of *Result Result*).


**Add SAP Connection parameter ("Service Application") to the definitions of operations** (Default: No)

This adds the parameter *Custom Service Application* to the OpenAPI definition, which makes it possible to select the SAP connection later in the consumer application (for example, Nintex Workflow Cloud). If this setting is not used, the service selected in the WebService Designer is used (default if no service was selected).  

Important: Note that when exporting from the WebService Designer, the connection settings from the Connection dialog are used as the web service URL ("Deployment Endpoint", default port: 8085). These settings must be edited before use in the exported OpenAPI definition (possible e.g. with notepad ++). <br>
The call of a web service is only possible via the "Consumer Endpoint" (standard port 8080) or via Azure Relay.

![ecscore-nwc_1](/img/content/ecscore-wsd_22.png){:class="img-responsive"}
  
In this case, the HOST name would have to be adapted accordingly. 

![ecscore-nwc_1](/img/content/ecscore-wsd_23.png){:class="img-responsive"}

When using Azure Relay, the path ("basePath") would have to be changed to */ecs/ws* and the schema ("schemes") to *https*.  

If Basic authentication is to be used explicitly for the call, the security definitions must also be adapted. Authentication via API-Key and Basic are listed by default, the section for API-Key must be deleted.  

![ecscore-nwc_1](/img/content/ecscore-wsd_24.png){:class="img-responsive"}


The import and use of an OpenAPI definition in a consumer application is described for Microsoft Flow [here](../../integration_with_office_365/integration_with_microsoft_flow) and for Nintex Workflow Cloud in [following](../../integration_with_nintex/nintex_workflow_cloud) section.  