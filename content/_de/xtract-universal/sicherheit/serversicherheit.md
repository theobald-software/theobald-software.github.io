---
ref: xu-security-xu3-03
layout: page
title: Serversicherheit
description: Serversicherheit
product: xtract-universal
parent: Sicherheit
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=serversicherheit1
---
{% include _content/de/xu-specific/sicherheit/serversicherheit1.md %}

 {: .box-note}
**Hinweis**: Für Informationen zu Extraktionsaufrufen mit Basic Authentication über die *xu.exe*, siehe [Basic Authentication via Kommandozeile](./extraktionen-ausfuehren-und-einplanen/call-via-commandline#basic-authentication-via-kommandozeile).


### Xtract Universal Dienst unter einem Windows Dienstkonto ausführen

Wenn eine Zugriffsbeschränkung mit Windows AD Benutzern erfolgt, muss der Xtract Universal Dienst unter einem entsprechenden Dienstkonto ausgeführt werden.
Folgen Sie dafür den Schritten in [Xtract Universal Dienst unter einem Windows Dienstkonto ausführen](../fortgeschrittene-techniken/service-account).


*********
#### Weiterführende Links
- [Benutzerverwaltung](./benutzerverwaltung)
- [Zugriffssteuerung](./zugriffsverwaltung)
- [SPNEGO](https://en.wikipedia.org/wiki/SPNEGO)
- [Enabling Secure Network Communication (SNC) via X.509 certificate](https://kb.theobald-software.com/sap/enable-snc-using-pse-file)
