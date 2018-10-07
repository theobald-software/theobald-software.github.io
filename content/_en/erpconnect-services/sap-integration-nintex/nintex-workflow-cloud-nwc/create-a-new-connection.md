---
layout: page
title: Create a new connection
description: Create a new connection
product: erpconnect-services
parent: nintex-workflow-cloud-nwc
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=create_a_new_connection
---

After importing the OpenAPI file, create a new connection in NWC. This connection will point to the SAP [Services](../../ecs-core/administration/services) maintained in ECS Core and enables to connect to your on-premises SAP system. 

The given example is described with API Key as [authentication method](../../ecs-core/webserivce-designer/web-service-authentication). Please use the settings for API Key authentication in the WebService Designer's connection dialog. API Key will then automatically be used as authentication method when you create a new connection in NWC. 

Click on *Connections* and *Add new* to create a new connection. Choose the previously created custom connector from the selection list:

![ecscore-nwc_8](/img/content/ecscore-nwc_8.png){:class="img-responsive"}

Give your connection a name and enter a valid API Key in the following form:<br>
APIKEY [BASE64 encoded ECS Core API Key]

Example: APIKEY QjGCMTMxMjE0MTA3NDhCMUE5MUNZTzAyQjBDRTg1OUP= (vgl. Connection Settings for API Key in [Webservice Authentication](../../ecs-core/webserivce-designer/web-service-authentication))

![ecscore-nwc_9](/img/content/ecscore-nwc_9.png){:class="img-responsive"}

The connection can then be used in the NWC workflow. 
