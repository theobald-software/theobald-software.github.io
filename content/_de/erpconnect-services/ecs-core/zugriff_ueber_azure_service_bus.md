---
ref: ecs-core-05
layout: page
title: Zugriff über Azure Service Bus
description: Zugriff über Azure Service Bus
product: erpconnect-services
parent: ecs-core
childidentifier: zugriff_ueber_azure_service_bus
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=zugriff__ber_azure_service_bus
---

Azure Service Bus ist ein generisches Cloud-basiertes Messaging-System zur Verbindung von Anwendungen, Services und Geräten - egal wo diese sich befinden. 

Mit der Hilfe von Azure Service Bus können Sie eine sichere System-Umgebung einrichten, entkoppelt von Ihrem Geschäftssystem mit ECS Core und SAP. Azure Service Bus (Relay) verbindet sich per TCP zu einem dedizierten Server und stellt einen Endpunkt bereit, der sichtbar ist für Client-Anwendungen und für den Datenaustausch mit ECS Core und Ihrem SAP System genutzt werden kann. 
Der Vorteil einer solchen Systemarchitektur liegt darin, dass aus der Cloud keine Ports zum On-Premises installierten SAP System geöffnet werden müssen. 

Um diese Funktionalität zu nutzen ist eine [Standard Tier](https://azure.microsoft.com/de-de/pricing/details/service-bus/) Subscription für Microsoft Azure notwendig, die nicht in ECS Core enthalten ist. 

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}