---
ref: xtract-universal-08
layout: page
title: Sicherheit in XU 2.x
description: Sicherheit in XU 2.x
product: xtract-universal
parent: xtract-universal
childidentifier: sicherheit_xu2x
permalink: /:collection/:path
weight: 7
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=sicherheit_xu2x
---

Dieses Kapitel gibt eine allgemeine Übersicht über das Sicherheitskonzept.

**Benutzerverwaltung**

Es stehen Ihnen alle Ihre Active Directory (AD) Benutzer und Benutzergruppen zur Verfügung. Ausführliche Informationen finden Sie im Kapitel [Benutzerverwaltung](./sicherheit_xu2x/benutzerverwaltung) .

**Mit dem Designer arbeiten**

Wenn die Zugriffsverwaltung aktiviert ist, können sich nur berechtigte Benutzer mit dem Server verbinden und mit dem Designer arbeiten. Ausführliche Informationen finden Sie im Kapitel [Zugriffsverwaltung](./sicherheit_xu2x/zugriffsverwaltung).

**Extraktionen verwalten**

Auf der Extraktionsebene können Sie die Extraktionsverwaltung auf bestimmte Benutzer oder Benutzergruppen einschränken. Ausführliche Informationen erhalten Sie im Kapitel [Extraktionssicherheit](./sicherheit_xu2x/extraktionssicherheit).

**Extraktionen ausführen**

Sie können die Ausführung von Extraktionen auf einzelne Benutzer und Benutzergruppen beschränken. Diese Restriktion kann auf Server-Ebene für alle Extraktionen definiert werden (siehe Kapitel [Serversicherheit](./sicherheit_xu2x/serversicherheit)) oder auf Extraktionsebene für eine bestimmte Extraktion ([Extraktionssicherheit](./sicherheit_xu2x/extraktionssicherheit)).

Zusätzlich können Sie auf Extraktionsebene festlegen, dass Benutzer Ihre SAP-Anmeldedaten (Benutzername und Kennwort) bei der Ausführung der Extraktion angeben müssen. Nähere Informationen hierzu finden Sie im Kapitel [Extraktionssicherheit](./sicherheit_xu2x/extraktionssicherheit).

Zusätzlich können Sie auf Verbindungsebene festlegen, dass Benutzer sich über Single Sign On auf dem SAP-System anmelden. Dazu siehe das Kapitel [SSO mit SNC](./fortgeschrittene-techniken/SAP-Single-Sign-On).

**Zugriffsverwaltung**

Um die Zugriffsverwaltung zu aktivieren, wählen Sie die Server-Einstellung *Allow everybody to access this server*.

Um die Zugriffsverwaltung zu deaktivieren, wählen Sie die Server-Einstellung *Allow only specific users/groups*.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
