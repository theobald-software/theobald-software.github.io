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

Die Security im BOARD Connector hat drei Komponenten:

- Transportverschlüsselung (transport encryption),
- Authentisierung (authentication) und
- Zugriffskontrolle (access control)

Die Transportverschlüsselung dient dem Schutz der zwischen Server und Designer übertragenenen Daten gegen Abhören und Manipulation. 
Es werden zwei Verfahren zur Transportverschlüsselung unterstützt:

- [Kerberos](https://msdn.microsoft.com/en-us/library/windows/desktop/aa374762(v=vs.85).aspx)
- Transport Layer Security (TLS)

Bei der Authentisierung wird sichergestellt, dass ein Benutzer tatsächlich derjenige ist, der er vorgibt zu sein. 
Der BOARD Connector untersützt zwei Arten von Benutzerverwaltungssystemen:

- Active Directory Benutzer + Gruppen, verwaltet über die Windows Domäne
- Eigene Benutzer + Gruppen (Custom), verwaltet über den BOARD Connector

Über die Zugriffskontrolle können Benutzern/Gruppen unterschiedliche Rechte zugewiesen werden. Die Rechte werden grundsätzlich auf Serverebene erteilt, können aber für einzelne Extraktionen und Sources eingeschränkt werden.

- read
- modify
- create
- admin

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
