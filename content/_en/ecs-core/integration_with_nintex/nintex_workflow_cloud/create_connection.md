---
ref: ecscore-nintex-workflow-cloud-nwc-04
layout: page
title: Create connection
description: Create connection
product: ecs-core
parent: nintex_workflow_cloud
permalink: /:collection/:path
weight: 4
lang: en_GB
---

After successfully importing the OpenAPI definition and publishing the custom connector, you can create a new connection in the NWC. This connection points to the SAP services created in ECS Core and enables the connection to the SAP system.    

This example is explained using an API key as the authentication method. Please use the settings for authentication using an API key in the Connection dialog of the Web Service Designer. The API Key is then automatically proposed as the authentication method when you create a new connection.  

Click on *Connections* and *Add new* to create a new connection and select the previously created custom connector from the list:

![ecscore-nwc_8](/img/content/ecscore-nwc_8.png){:class="img-responsive"}

Give the connection a name and insert a valid API key in the following form:
APIKEY [ECS Core API Key]

Example: APIKEY QjGCMTMxMjE0MTA3NDhCMUE5MUNZTzAyQjBDRTg1OUP= (see Connection Settings with API Key in [Webservice Authentication](../../webservices/webservice_authentication))

{ecscore-nwc_9](/img/content/ecscore-nwc_9.png){:class="img-responsive"}

The connection can then be used in an NWC workflow.