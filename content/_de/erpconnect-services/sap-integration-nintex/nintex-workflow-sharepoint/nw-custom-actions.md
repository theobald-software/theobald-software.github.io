---
layout: page
title: Nintex Workflow Custom Actions
description: Nintex Workflow Custom Actions
product: erpconnect-services
parent: nintex-workflow-sharepoint
childidentifier: nw-custom-actions
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=nw-custom-actions
---

Neben den beiden Optionen der SAP-Integration mit Nintex in SharePoint über die Verwendung von Webservices und Externen Listen (Beispiele siehe unter [Nintex-Integrationsszenarien]()) besteht mit den sogenannten Nintex Workflow Custom Actions die Möglichkeit, direkt aus einem Nintex Workflow heraus mit dem SAP-System zu interagieren.   

Nintex Workflow bietet standardmäßig bereits einen umfangreichen Katalog sogenannter Workflow-Actions an, die zur Ausgestaltung von Workflow-Abläufen genutzt werden können. Für spezielle Anforderung kann dieser Katalog durch individuell programmierte Custom Actions erweitert werden. Theobald Software hat in Kombination mit den ERPConnect Services die Custom Actions [Call SAP Function](./nw-custom-actions/call_sap_function), [Read SAP Table](./nw-custom-actions/call_sap_table) und [Query XQL](./nw-custom-actions/ecs-nintex-custom-action) entwickelt, die unabhängig voneinander für die Integration und Weiterverarbeitung von SAP-Daten in SharePoint verwendet werden können. Die Custom Actions werden mit ERPConnect Services ausgeliefert und müssen gesondert installiert werden (siehe [Installation](./nw-custom-actions/nintex-action-installation)). Während die Query XQL Action auch für SharePoint 2010 und Nintex Workflow 2010 verfügbar ist, unterstützen die Custom Actions Call SAP Function und Read SAP Table im Moment nur SharePoint 2013 und Nintex Workflow 2013.  

![ECS-Nintex-Integration2](/img/content/ECS-Nintex-Integration2.png){:class="img-responsive"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}