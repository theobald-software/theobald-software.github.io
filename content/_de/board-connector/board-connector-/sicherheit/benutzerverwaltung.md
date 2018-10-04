---
layout: page
title: Benutzerverwaltung
description: Benutzerverwaltung
product: board-connector
parent: sicherheit
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=benutzerverwaltung
---

Der Designer bietet ihnen die Möglichkeit, Benutzer und Benutzergruppen zu verwalten.  

**Gruppenverwaltung**

Über dem Menübefehl *Security -> Manage Groups* können Sie Benutzergruppen anlegen, ändern und löschen. Die Benutzergruppe administrators ist standardmäßig angelegt und kann nicht gelöscht werden. Um eine neue Benutzergruppe anzulegen geben Sie den Namen ein und klicken Sie auf *Add*.

![User-Management-01](/img/content/User-Management-01.png){:class="img-responsive"}

Einer Benutzergruppe können Sie eines der folgenden Rechte zuweisen:

- *Admin rights*: Benutzer dieser Gruppe haben alle Privilegien. Einschränkungen des Zugriffs auf Extraktionen werden ignoriert.
- *Create new extractions*: Benutzer dieser Gruppe können neue Extraktionen anlegen oder vorhandene klonen. Der Benutzer darf keine Admin-Tätigkeiten durchführen, wie Server-Einstellungen ändern, Server-Logs einsehen und Verbindungen bzw. Benutzer verwalten.
- *Modify extractions*: Benutzer dieser Gruppe können bestehende Extraktionen ändern aber keine Neuen anlegen oder Vorhandene klonen. Ansonsten haben sie die Rechte wie bei Create new extractions.
- *Read extractions*: Benutzer dieser Gruppe können die Extraktion sehen aber nicht ändern. Ansonsten haben sie die Rechte wie bei Modify extractions.

![User-Management-02](/img/content/User-Management-02.png){:class="img-responsive"}

Extraktionen werden nur autorisierten Benutzern im Designer angezeigt.<br>
Eine neu angelegte Benutzergruppe hat stadardmäßig die Rechte *Read extractions*.

**Benutzerverwaltung**

Über den Menübefehl *Security -> Set User Password* können Sie das eigene Passwort setzen bzw. ändern.

Über dem Menübefehl *Security -> Manage Users* können Sie Benutzer anlegen, ändern und löschen. Der Benutzer admin ist standardmäßig angelegt und kann nicht gelöscht werden.

![User-Management-03](/img/content/User-Management-03.png){:class="img-responsive"}

Um einen neuen Benutzer anzulegen klicken Sie auf Add. Geben Sie einen Namen ein und wähen Sie einen Active Directory Benutzer.

![User-Management-04](/img/content/User-Management-04.png){:class="img-responsive"}

Über den Button *Edit* können Sie einen Benutzer editieren. Sie können den Benutzer sperren oder einer bzw. mehreren Benutzergruppen zuweisen. Über *Set Password* können Sie das Passwort eines Benutzers setzen bzw. ändern.

![User-Management-05](/img/content/User-Management-05.png){:class="img-responsive"}

Ein neu angelegter Benutzer hat standardmäßig die Rechte *Read extractions*.