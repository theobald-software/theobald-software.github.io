---
ref: xtract-rs-03
layout: page
title: Report-Datenquelle konfigurieren
description: Report-Datenquelle konfigurieren
product: xtract-rs
parent: xtract-rs
childidentifier: report-datenquelle-konfigurieren
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-RS-DE/default.aspx?pageid=report-datenquelle-konfigurieren
---

Nach der Installation steht Ihnen Xtract RS bei der Neuanlage von Datenquellen zur Verfügung. Die folgende Anleitung zeigt, wie Sie eine Verbindung einrichten. Die Abbildungen können leicht abweichen, je nach dem, ob Sie den Wizard oder die manuelle Anlage nutzen.

![Report-Data-Source-001](/img/content/Report-Data-Source-001.png){:class="img-responsive"}

Klicken Sie auf den *Edit* Button, um in den Dialog für die Verbindungseigenschaften zu gelangen.

![Report-Data-Source-002](/img/content/Report-Data-Source-002.png){:class="img-responsive"}

Falls Sie sich direkt mit einem einzelnen Applikationsserver verbinden möchten, füllen Sie bitte die Parameter *ApplicationHost* und *SystemNumber* aus. Für eine Anmeldung per Load Balancing müssen die Felder *MessageServer, SID* und *LogonGroup* gefüllt werden, außerdem muss der Parameter *UseLoadBalancing* auf true stehen. Falls Sie Schwierigkeiten beim Ausfüllen dieser technischen Parameter haben, fragen Sie bitte in ihrer Basis-Abteilung nach.

Neben diesen technischen Einstellungen sind noch Angaben zum Anmelde-Account zu machen. Dazu gehören insbesondere der Mandant (*Client*) und die Anmeldesprache (*Language*). Es besteht zwar die Möglichkeit, hier bereits Benutzername und Passwort auszufüllen. Dies ist aber aus Sicherheitsgründen nicht empfohlen, da diese beiden Angaben ohne Verschlüsselung frei sichtbar im Connection-String auftauchen würden.

Bestätigen Sie Ihre Angaben mit *OK*. Die Einstellungen werden nun in den ConnectionString übernommen:

![Report-Data-Source-003](/img/content/Report-Data-Source-003.png){:class="img-responsive"}

Um nun noch den Benutzernamen und das Passwort zu übergeben, klicken Sie bitte auf den Button *Credentials*... . Sie können dort entweder feste Anmeldedaten hinterlegen, oder den Benutzer jedesmal eigene Anmeldedaten eingeben lassen, wenn ein Report gestartet wird.

![Report-Data-Source-004](/img/content/Report-Data-Source-004.png){:class="img-responsive"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
