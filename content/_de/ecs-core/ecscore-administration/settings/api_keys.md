---
ref: ecs-core-administration-settings-03
layout: page
title: API Keys
description: API Keys
product: ecs-core
parent: settings
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=api_keys
---

ECSCore unterstützt die Authentifizierung mit einem **API Key** (**A**pplication **P**rogramming**I**nterface **K**ey).

API Keys können als Authentifizierungsmethode verwendet werden, wenn der Zugriff nicht über benutzerspezifische Zugangsdaten erfolgen soll. 
Ein API Key fungiert dabei als eindeutige Kennung und kann sehr einfach hinzugefügt, neu generiert oder entfernt werden. 
Für zahlreiche Cloud-Szenarien stellt dies einen praktikablen und typischen Authentifizierungsmechanismus dar.


Um einen neuen API Key hinzuzufügen klicken Sie auf *Add API Key* im Abschnitt API Keys. Sie können einen API Key für zwei Arten von Benutzern hinzufügen: <br>
1. Gültiger **Windows Benutzer** mit Windows-Kennwort: Ein solcher, zu einem Windows-Benutzer erzeugter API Key, kann ausschließlich für Authentifizierung innerhalb einer Cloud-Anwendung verwendet werden, welche mit ECS Core erstellte Webservices oder von ECS Core bereitgestellte REST API konsumiert. <br>
2. Auf der Management Site angelegter **Dashboard-Benutzer**: Ein solcher API Key, der auf einen von Windows unabhängigen Dashboard-Benutzer erstellt wurde, kann ausschließlich für das Deployment von Webservices im WebService Designer verwendet werden.   

![ecscore-apikeys](/img/content/ecscore_apikeys.png){:class="img-responsive"}

Einzelheiten zum Thema Deployment und Konsumieren von Services finden Sie im Abschnitt [Webservice Authentifizierung](.../webservices/webservice_authentifizierung).
 
Nach der Erstellung des Schlüssels wird dieser unter API Keys angezeigt. Unter Umständen muss zunächst der Cache noch bereinigt werden (beschrieben unter *System Operations*). 

Klicken Sie auf den API Key, um die folgenden Optionen angezeigt zu bekommen: 

- Update
- Remove

Sie benötigen die *Update* Option, falls sich die Zugangsdaten des Benutzers geändert haben.
