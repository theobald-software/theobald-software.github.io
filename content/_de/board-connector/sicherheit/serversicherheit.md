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

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Board Connector.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Board Connector HelpCenter](https://helpcenter.theobald-software.com/board-connector/documentation/introduction/).

### Über diese Seite

Dieser Abschnitt behandelt den eingeschränkten Zugriff zu dem integrierten Webserver von Xtract Universal/Board Connector.
Durch Zugriffsbeschränkungen auf den Webserver können nur ausgewählte Benutzer Extraktionen ausführen.

Es gibt zwei Typen von [Benutzern und Benutzergruppen](benutzerverwaltung#benutzer-und-benutzergruppen), auf die der Zugriff eingeschränkt werden kann:
- Windows AD Benutzer (Kerberos Authentication)
- benutzerdefinierte Benutzer (Basic Authentication) 

Wenn der Zugang zum Webserver eingeschränkt ist, müssen zum Ausführen einer Extraktion Windows AD Benutzerdaten oder Benutzerdaten eines benutzerdefinierten Benutzers übergeben werden.

{: .box-note}
**Hinweis**: Die Angabe von Benutzerdaten für Basic Authentisierung wird im SAP Data Reader des Board-Servers (Stand Version 11.3) nicht unterstützt.<br> 
Eine Absicherung des Web-Zugriffs auf die im Board Connector angelegten Extraktionen kann auf Netzwerkebene, z.B. durch eine Firewall, erfolgen.

{% include _content/de/xu-specific/sicherheit/serversicherheit1.md %}

### Einen Service unter einem Windows Service-Account ausführen

Wenn eine Zugriffsbeschränkung mit Windows AD Benutzern erfolgt, muss der Board Connector Service unter einem entsprechenden Service-Account ausgeführt werden.
Die Vorgehensweise dafür entspricht dem des XU-Dienstes unter [Xtract Universal Service unter einem Windows Service-Account ausführen](../../xtract-universal/fortgeschrittene-techniken/service-account).


*********
#### Weiterführende Links
- [Benutzerverwaltung](./benutzerverwaltung)
- [Zugriffsverwaltung](./zugriffsverwaltung)
- [SPNEGO](https://en.wikipedia.org/wiki/SPNEGO)