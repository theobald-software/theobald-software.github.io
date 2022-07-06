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

Mit der yunIO Zugriffssteuerung können Sie die Zugriffsrechte von Benutzern auf den Server und den yunIO Designer beschränken.

![Access_Control](/img/content/yunio/access-control.png){:class="img-responsive"}

### Server Access

Aktivieren oder deaktivieren Sie die Zugriffsbeschränkungen für den Designer und den Server.<br>
Die Zugriffsrechte gelten auch für den Aufruf von Services. 

- Wenn **Anonymous Access** aktiv ist, gibt es keine Zugangsbeschränkungen für den Designer und den Server.
**Anonymous** ist die Standard-Einstellung.
- Wenn **Authenticated** aktiv ist, haben nur angelegte Benutzer mit entsprechender Beschränkungsstufe Zugriff auf den Designer und den Server.<br>
Diese Option ist nur verfügbar, wenn mindestens ein Benutzer angelegt und [Transport Layer Security](#transport-layer-security) aktiv ist. 


### Privileges

Weisen Sie Benutzern Beschränkungsstufen für den Zugriff auf Designer und Server zu.

Alle Benutzer, die in der [Benutzerverwaltung](./benutzer) angelegt sind, werden unter **Privileges** aufgelistet.
Wählen Sie eine Beschränkungsstufe aus der Dropdown-Liste neben dem Benutzernamen aus, um die Beschränkungsstufe dem Benutzer zuzuweisen.
Die folgenden Beschränkungsstufen sind verfügbar:
- **Server Admin**: Keine Beschränkungen. 
- **Create / Modify**: Benutzer können Services und SAP-Verbindungen erstellen, bearbeiten und ausführen.
Benutzer haben keinen Zugriff auf die Benutzer- und Zugriffsverwaltung, sowie die Servereinstellungen.
- **Read / Execute**: Benutzer können den Designer öffnen, aber keine Einstellungen bearbeiten.
Benutzer können Services ausführen.
- **No access**: Benutzer haben keinen Zugriff auf den Designer. Services können nicht ausgeführt werden.
Diese Option kann verwendet werden, um Benutzer zeitweise von der Benutzung von yunIO auszuschließen.