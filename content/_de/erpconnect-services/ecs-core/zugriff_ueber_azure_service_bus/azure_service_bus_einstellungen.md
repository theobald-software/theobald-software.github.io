---
ref: ecs-core-access-via-azure-service-bus-01
layout: page
title: Azure Service Bus Einstellungen
description: Azure Service Bus Einstellungen
product: erpconnect-services
parent: zugriff_ueber_azure_service_bus
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=azure_service_bus_einstellungen
---

Beginnen Sie mit der Azure Service Bus Konfiguration, indem Sie eine neue Service Bus Instanz im Azure [Management Portal](https://portal.azure.com/) anlegen:

![ecscore-managementsite28](/img/content/ecscore-managementsite28.png){:class="img-responsive"}

Beachten Sie, dass es alternative Methoden gibt, um Azure Ressourcen anzulegen und zu verwalten (z.B. mit Powershell, falls Sie diesen Prozess automatisieren möchten).

Der Connection String (oder auch Service Bus Credentials) kann mit dem Schlüssel-Symbol (Connection Information) unten auf der Seite aufgerufen werden:

![ecscore-managementsite29](/img/content/ecscore-managementsite29.png){:class="img-responsive"}

![ecscore-managementsite30](/img/content/ecscore-managementsite30.png){:class="img-responsive"}

Anschließend müssen die den kompletten Connection String (Endpoint=sb://...) kopieren, der Name dient lediglich zur Beschreibung, um unterschiedliche Strings auseinanderhalten zu können. 


Gehen Sie auf der ECS Core Management Site zu *Settings>Azure Service Bus* und fügen eine neue Service Bus Registrierung durch:

![ecscore-managementsite31](/img/content/ecscore-managementsite31.png){:class="img-responsive"}

Fügen Sie den vorab kopierten Connection String in das entsprechende Feld ein und sichern Sie den Eintrag, indem Sie auf *Add Service Bus Registration* klicken:

![ecscore-managementsite32](/img/content/ecscore-managementsite32.png){:class="img-responsive"}

![ecscore-managementsite33](/img/content/ecscore-managementsite33.png){:class="img-responsive"}

Sie können nun zur Services Site gehen (Standardport 8080) und überprüfen, ob der Service Bus erfolgreich registriert wurde und verbunden ist.

![ecscore-managementsite34](/img/content/ecscore-managementsite34.png){:class="img-responsive"}

Im Azure Management Portal sollte nun ein zusätzliches Relay mit vorgenommenen Registrierung aufgeführt sein:

![ecscore-managementsite35.png](/img/content/ecscore-managementsite35.png){:class="img-responsive"}
