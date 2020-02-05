---
ref: ecscore-wd-getting-started-01
layout: page
title: Menu bar
description: Menu bar
product: ecs-core
parent: getting_started_with_the_webservice_designer
permalink: /:collection/:path
weight: 1
lang: en_GB
---

The following items can be selected in the menu bar of the ECS Core WebService Designer:

![WSD-11](/img/content/ecscore-wsd_11.png){:class="img-responsive"}


**Connections** <br>
The server and SAP connections are defined here.

**Server actions for web services** <br>
This menu section contains the following actions:
- *Open*: Open an already deployed web service from the ECS Core Server.

- *Import*: Import web service operations from another deployed web service to the open web service. Single or all operations can be added. 

- Deploy*: Deployment of a newly created Web service to the ECS Core Server. 

- *Remove*: Removing web services from the ECS Core Server. 
  

**Project Actions** <br>
This menu section refers to new Web service projects and includes the following actions:

- *New*: Create a new Web service project. Important: Already opened data will be lost, please save before!

- *Open*: Open a saved web service definition (files with the extension *.wsdef*) in the Designer.

- *Import*: Import operations from a web service definition to a started web service project.

- *Recent*: Access to recently opened Web service definitions.

**Options** <br>
This menu section contains advanced options for Web service projects in general and for exporting to OpenApi format.

Project Options:
- *Underlying SAP system is using UNICODE encoding (default: Yes)*: Select whether the system is an SAP UNICODE system or not.

- *Include error details (default: Yes)*: Output of more detailed error messages in the Designer.

- *Use empty string as default value for input parameters, variables and custom data types of type string (Default: Yes)*.

- *Use empty structure as default value for input parameters and variables of type collection or custom data type (Default: Yes)*.

OpenAPi Options (described in detail under [OpenAPI Definitions](../openapi_definitions)):
- *Add generic service operations to the definition*
- *Add SAP connection parameter ("Service Application") to the definitions of operations* <br>
- *Use variable names as "title" parameter*

**Export** <br>
Here web services can be exported in certain formats.

OpenAPI (described in detail under [OpenAPI Definitions](../openapi_definitions)):
- The web service is exported as an OpenAPI definition.

C#:
- The web service is exported as a C# project (developer tools such as Visual Studio are required for further processing). 

**App** <br>
Use this menu section to access the help page or exit the application.