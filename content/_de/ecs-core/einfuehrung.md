---
ref: ecs-core-01
layout: page
title: Einführung
description: Einführung
product: ecs-core
parent: ecs-core
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=ecs-core
---

**ECS Core** ist ein Konnektor für die SAP-Integration mit Cloud-Umgebungen und anderen autonomen Enterprise-Portalen. Die Anwendung bietet zum einen die Möglichkeit, SAP Daten und Geschäftsprozesse ohne Programmierkenntnisse über standardisierte REST-Services in unterschiedlichen Plattformen und Anwendungen, cloudbasiert oder nicht, zu integrieren. Zum anderen wird die Entwicklung individueller SAP-basierter Anwendungen in der Cloud (z.B. Office365) ermöglicht. Entwicklern wird dafür eigens eine einfach zu nutzende Javascript-Bibliothek zur Verfügung gestellt.

Die Software-Architektur sieht folgendermaßen aus: ECS Core wird auf einer lokalen oder Cloud-gehosteten Windows-Serverumgebung installiert und stellt eine Konfigurationsplattform zum Einrichten der Konnektivität zwischen SAP- und Cloud-Anwendungen zur Verfügung. Eine Azure Relay-Registrierung kann als sicherer Gateway verwendet werden, um das lokale SAP-System mit der jeweiligen Cloud-Anwendung zu verbinden.  

![ecscore-architecture](/img/content/ecscore-architecture.png){:class="img-responsive"}

Diese Softwarearchitektur ermöglicht unzählige Integrationsszenarien für den Lese- und Schreibzugriff auf alle gängigen SAP ERP Systeme. Die SAP-Integration wird sowohl für Entwickler als auch mit Non-Code-Konzepten auch für Power-User und Software-Architekten ohne Programmierkenntnisse ermöglicht. 
Unabhängig vom gewählten Integrationsansatz ist die Anwendungssicherheit eines der Kernelemente von ECS Core - die Unterstützung verschiedener Authentifizierungsmethoden ermöglicht eine sichere Verbindung der Cloud-Anwendungen mit dem lokalen SAP-System. Um die Konnektivität herzustellen, sind auf SAP-Seite keine zusätzlichen Installationen oder Customizing erforderlich.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}