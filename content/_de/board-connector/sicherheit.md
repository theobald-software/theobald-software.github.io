---
ref: board-connector-sicherheit
layout: page
title: Sicherheit
description: Sicherheit
product: board-connector
parent: board-connector
childidentifier: sicherheit
permalink: /:collection/:path
weight: 8
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=sicherheit
---

Dieses Kapitel gibt eine allgemeine Übersicht über das Sicherheitskonzept.

**Benutzerverwaltung**

Es stehen Ihnen alle Ihre Active Directory (AD) Benutzer und Benutzergruppen zur Verfügung. Ausführliche Informationen finden Sie im Kapitel [Benutzerverwaltung](./sicherheit/benutzerverwaltung).

**Mit dem Designer arbeiten**

Wenn die Zugriffsverwaltung aktiviert ist, können sich nur berechtigte Benutzer mit dem Server verbinden und mit dem Designer arbeiten. Ausführliche Informationen finden Sie im Kapitel [Zugriffsverwaltung](./sicherheit/zugriffsverwaltung).

**Extraktionen verwalten**

Auf der Extraktionsebene können Sie die Extraktionsverwaltung auf bestimmte Benutzer oder Benutzergruppen einschränken. Ausführliche Informationen erhalten Sie im Kapitel [Extraktionssicherheit](./sicherheit/extraktionssicherheit).

**Extraktionen ausführen**

Sie können die Ausführung von Extraktionen auf einzelne Benutzer und Benutzergruppen beschränken. Diese Restriktion kann auf Server-Ebene für alle Extraktionen definiert werden (siehe Kapitel [Serversicherheit](./sicherheit/serversicherheit)) oder auf Extraktionsebene für eine bestimmte Extraktion ([Extraktionssicherheit](./sicherheit/extraktionssicherheit)).

Zusätzlich können Sie auf Extraktionsebene festlegen, dass Benutzer Ihre SAP-Anmeldedaten (Benutzername und Kennwort) bei der Ausführung der Extraktion angeben müssen. Nähere Informationen hierzu finden Sie im Kapitel [Extraktionssicherheit](./sicherheit/extraktionssicherheit).

Zusätzlich können Sie auf Verbindungsebene festlegen, dass Benutzer sich über Single Sign On auf dem SAP-System anmelden. Dazu siehe das Kapitel [SSO mit SNC](./fortgeschrittene-techniken/sso-und-snc) .

**Authentifizierung**

Beim Aufruf aus PowerPivot unterliegt die Ausführung der Extraktion der Zugriffsrechte des Benutzers.  

In der SAP-Verbindung kann der SAP-Benutzer entweder über Single Sign On (SSO mit SNC) oder über die SAP-Benutzerdaten (Benutzername und Passwort) authentifiziert werden. 

Optional können Sie auch festlegen, dass bei der Ausführung in PowerPivot die SAP-Logondaten mitgegeben werden werden.

**Zugriffsverwaltung**

Um die Zugriffsverwaltung zu aktivieren, wählen Sie die Server-Einstellung *Allow everybody to access this server*.

Um die Zugriffsverwaltung zu deaktivieren, wählen Sie die Server-Einstellung *Allow only specific users/groups*.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}