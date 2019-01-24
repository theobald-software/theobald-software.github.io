---
ref: ecs-core-webservice-designer-06
layout: page
title: OpenAPI Definitionen erstellen über die Management Site
description: OpenAPI Definitionen erstellen über die Management Site
product: ecs-core
parent: openapi_definitionen
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=openapi_definitionen_erstellen_managementsite
---

Über die ECS Core Management Site ist ebenfalls der Export von Webservices in OpenAPI-Definitionen möglich. Rufen Sie dazu den Karteireiter *Web Services* im Menü auf, klicken links den gewünschten Webservice an und anschließend auf *Download Open Api Definition*.

![ecscore-nwc_1](/img/content/ecscore-wsd_25.png){:class="img-responsive"} 

Vorteil: Beim Export über die Management Site wird direkt der korrekte Konsumenten-Endpoint (Standardport 8080) in der Definition gesetzt. Wenn über die Management Site eine Verbindung zu einem Azure Relay hergestellt wurde, dann wird diese Verbindung verwendet in der Definition, die Datei muss nicht nachträglich editiert werden.


Der Import und die Nutzung einer OpenAPI-Definition in einer Konsumenten-Awendung wird für Microsoft Flow [hier](../../integration_mit_office_365/integration_mit_microsoft_flow) und für Nintex Workflow Cloud in [folgendem](../../integration_mit_nintex/nintex_workflow_cloud) Abschnitt beschrieben.  