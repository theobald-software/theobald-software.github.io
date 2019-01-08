---
ref: ecs-core-administration-settings-03
layout: page
title: API Keys
description: API Keys
product: erpconnect-services
parent: settings
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=api_keys
---

ECSCore unterstützt die Authentifizierung mit einem **API Key** (**A**pplication **P**rogramming**I**nterface **K**ey).

API Keys können als Authentifizierungsmethode verwendet werden, wenn der Zugriff nicht über benutzerspezifische Zugangsdaten erfolgen soll. 
Ein API Key fungiert dabei als eindeutige Kennung und kann sehr einfach hinzugefügt, neu generiert oder entfernt werden. 
Für zahlreiche Cloud-Szenarien stellt dies einen praktikablen und typischen Authentifizierungsmechanismus dar.


Um einen neuen API Key hinzuzufügen klicken Sie auf *Add API Key* im Abschnitt API Keys. Sie müssen einen API Key immer einem gültigen Windows Benutzer mit seinem entsprechenden Windows-Kennwort zuweisen.

Nach der Erstellung des Schlüssels wird dieser unter API Keys angezeigt. Sie können diesen jetzt zur Authentifizierung innerhalb einer Cloud-Anwendung (z.B. Microsoft Flow) verwenden. Unter Umständen muss der Cache zunächst noch bereinigt werden (beschrieben unter *System Operations*). 

Klicken Sie auf den API Key, um die folgenden Optionen angezeigt zu bekommen: 

- Update
- Remove

Sie benötigen die Update Option, falls sich die Windows Zugangsdaten geändert haben.
