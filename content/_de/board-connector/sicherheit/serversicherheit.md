---
ref: bc-security-03
layout: page
title: Serversicherheit
description: Serversicherheit
product: board-connector
parent: sicherheit
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=serversicherheit
---
{% include _content/de/xu-specific/sicherheit/serversicherheit1.md %}

### Einen Dienst unter einem Windows Dienstkonto ausführen

Wenn eine Zugriffsbeschränkung mit Windows AD Benutzern erfolgt, muss der BOARD Connector Dienst unter einem entsprechenden Dienstkonto ausgeführt werden.
Die Vorgehensweise dafür entspricht dem des XU-Dienstes unter [Xtract Universal Dienst unter einem Windows Dienstkonto ausführen](../../xtract-universal/fortgeschrittene-techniken/service-account).


*********
#### Weiterführende Links
- [User Management](./benutzerverwaltung)
- [Access Management](./zugriffssteuerung)
- [SPNEGO](https://en.wikipedia.org/wiki/SPNEGO)