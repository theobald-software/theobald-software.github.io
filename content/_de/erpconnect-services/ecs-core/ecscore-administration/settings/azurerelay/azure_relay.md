---
ref: ecs-core-administration-settings-azure_relay-01
layout: page
title: Azure Relay
description: Azure Relay
product: erpconnect-services
parent: azurereleay
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=azure_relay
---

*Azure Service Bus* ist ein generisches Cloud-basiertes Messaging-System zur Verbindung von Anwendungen, Services und Geräten - egal wo diese sich befinden.
**Azure Relay** heißt ein Dienst, der auf dem Service Bus aufsetzt und mit dem es möglich ist, On-Premise Webservices durch die Firewall in die Cloud zu tunneln. 

Mit der Hilfe von Azure Service Bus und dem Azure Relay können Sie eine sichere System-Umgebung einrichten, entkoppelt von Ihrem Geschäftssystem mit ECS Core und SAP. >br
Azure Relay verbindet sich dabei per TCP zu einem dedizierten Server und stellt einen Endpunkt bereit, der sichtbar ist für Client-Anwendungen. Dieser Endpunkt kann für den Datenaustausch mit ECS Core und Ihrem SAP System genutzt werden kann. 
Der Vorteil einer solchen Systemarchitektur liegt darin, dass aus der Cloud keine Ports zum On-Premise installierten SAP System geöffnet werden müssen. 

Wichtig: Um diese Funktionalität zu nutzen ist eine Standard Tier Subscription für Microsoft Azure notwendig, die nicht in ECS Core enthalten ist.

Die Einrichtung von *Azure Relay* mit ECS Core erfahren Sie [hier](./azure-relay-configuration)  

