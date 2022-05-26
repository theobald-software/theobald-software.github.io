---
ref: yunio-08
layout: page
title: Zugriffssteuerung
description: Zugriffssteuerung
product: yunio
parent: yunio
childidentifier: integration
permalink: /:collection/:path
weight: 25
lang: de_DE
progressstate: 5
---

Mit der yunIO Zugriffssteuerung können Sie den Zugriff auf den yunIO Designer und die yunIO Services auf designierte Benutzer beschränken.

![Access_Control](/img/content/yunio/access-control.png){:class="img-responsive"}

### Server Access

Aktivieren oder deaktivieren Sie die Zugriffsbeschränkungen für den Designer und den Server.<br>
Die Zugriffsrechte gelten auch für den Aufruf von Services. 

#### Anonymous
Wenn **Anonymous Access** aktiv ist, gibt es keine Zugangsbeschränkungen für den Designer und den Server.
**Anonymous** ist die Default-Einstellung.

#### Authenticated
Diese Option ist nur verfügbar, wenn mindestends ein Benutzer angelegt und [Transport Layer Security](#transport-layer-security) aktiv ist. <br>
Wenn diese Option deaktiviert ist, haben nur angelegte Benutzer mit entsprechender Beschränkungsstufe Zugriff auf den Designer und den Server.

### Privileges

Weisen Sie Benutzern Beschränkungsstufen für den Zugriff auf Designer und Server zu.

Alle Benutzer, die in der [Benutzerverwaltung](./benutzer) angelegt sind, werden unter **Privileges** aufgelistet.
Wählen Sie eine Beschränkungsstufe aus der Dropdown-Liste neben dem Benutzernamen aus, um die Beschränkungsstufe dem Benutzer zuzuweisen.
Die folgenden Beschränkungsstufen sind verfügbar:
- **Server Admin**: erlaubt Benutzern Zugriff auf alle Funktionen und Einstellungen. 
- **Create / Modify**: erlaubt Benutzern Services und SAP-Verbindungen zu erstellen, zu bearbeiten und auszuführen.
- **Read / Execute**: erlaubt Benutzern den Designer zu öffnen, um Services herunterzuladen und auszuführen.
- **No access**: verweigert Benutzern den Zugriff auf den Designer. Das Ausführen von Services ist nicht authorisiert.