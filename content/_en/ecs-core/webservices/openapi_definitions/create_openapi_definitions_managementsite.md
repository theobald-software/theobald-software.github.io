---
ref: ecs-core-webservice-designer-06
layout: page
title: Create definitions via the Management Site
description: Create definitions via the Management Site
product: ecs-core
parent: openapi_definitions
permalink: /:collection/:path
weight: 2
lang: en_GB
---

Via the ECS Core *Management Site* the export of web services in OpenAPI definitions is also possible. To do this, go to the *Web Services* tab in the menu, click on the wanted web service on the left and then on *Download Open Api Definition*.

![ecscore-nwc_1](/img/content/ecscore-wsd_25.png){:class="img-responsive"} 

Advantage: When exporting via the management site, the correct consumer endpoint (standard port 8080) is directly set in the definition. If a connection to an Azure Relay was established via the Management Site, then this connection is used in the definition, the file does not have to be edited afterwards.


The import and use of an OpenAPI definition in a consumer application is described for Microsoft Flow [here](../../integration_with_office_365/integration_with_microsoft_flow) and for Nintex Workflow Cloud in [following](../../integration_with_nintex/nintex_workflow_cloud) section.