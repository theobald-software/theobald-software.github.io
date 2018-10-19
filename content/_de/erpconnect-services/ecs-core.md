---
ref: erpconnect-services-02
layout: page
title: ECS Core (für Cloud-Umgebungen)
description: ECS Core (für Cloud-Umgebungen)
product: erpconnect-services
parent: erpconnect-services
childidentifier: ecs-core
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-core
---

ERPConnect Services Core (kurz: **ECS Core**) stellt eine Entwickler-Schnittstelle zur Erstellung integrierter SAP-Businessanwendungen in SharePoint Online dar. Bei ECSCore wird das SharePoint App Modell genutzt, um innovative und integrative Webparts zu entwickeln, die direkt in SharePoint Online/Office 356 laufen. Entwicklern wird dafür eigens eine einfach zu nutzende Javascript-Bibliothek zur Verfügung gestellt. 

Die Apps, die mit ECSCore entwickelt werden, können sowohl SharePoint hosted als auch Provider hosted sein (nähere Erläuterungen für Apps in SharePoint finden Sie z.B. [hier](https://docs.microsoft.com/de-de/sharepoint/dev/sp-add-ins/sharepoint-add-ins)). Das SharePoint App Modell stellt eine eine verbreitete Methode dar, um Webanwendungen in SharePoint bereitzustellen. Theobald Software hat diesen Ansatz aufgegriffen und mit ECSCore ein Modell für die Integration von SAP-Daten entwickelt. 

Die Anwendung ist folgendermaßen konzipiert: ECSCore, das auf einem beliebigen Webserver installiert werden kann, verwendet die die APIs des SharePoint 2013 Modells, um SharePoint mit dem remote Webserver zu verbinden. Die Software fungiert dabei als Schnittstelle zwischen dem lokal installierten SAP System und Azure Service Bus, einem hochperformanten Cloud Service, der auf der Windows Azure Plattform gehosted wird. Azure Service Bus wird für die Kommunikation mit SharePoint Online genutzt. 


![ecscore-architecture](/img/content/ecscore-architecture.jpg){:class="img-responsive"}

Anwendungssicherheit ist dabei eine der Kerneigenschaften von ECS Core. Um autorisierten Zugriff auf ECSCore und das SAP System zu erhalten muss eine vom Anbieter gehostete App für SharePoint mit dem Azure Active Directory (AD) tenant registriert werden, das für jeden Office 365 Zugriff erstellt wird. OAuth 2.0 Protokoll wird verwendet, um eine sichere Kommunikation zwischen ECSCore und Azure herzustellen.  

Für den autorisierten Zugriff auf das zugrunde liegende SAP System wird eine Service Applikation auf der ECSCore Management Seite angelegt. Innerhalb dieser Service Applikation können unterschiedliche Authentifizierungsmethoden wie Secure Store, SSO Ticket oder SNC für den SAP Zugriff konfiguriert werden.   

Alles in allem ist ECS Core ein mächtiges und flexibles Tool, das höchsten Sicherheitsansprüchen genügt.   

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}