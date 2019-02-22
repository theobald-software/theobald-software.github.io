---
ref: xtract-universal-09
layout: page
title: Sicherheit in XU 3.x
description: Sicherheit in XU 3.x
product: xtract-universal
parent: xtract-universal
childidentifier: sicherheit_in_xu_3_x
permalink: /:collection/:path
weight: 8
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=sicherheit_in_xu_3_x
---

Die Security in XU 3.0 hat drei Komponenten:
- Transportverschlüsselung (transport encryption),
- Authentisierung (authentication) und
- Zugriffskontrolle (access control).

Die **Transportverschlüsselung** dient dem Schutz der zwischen XU Server + Designer übertragenenen Daten gegen Abhören und Manipulation. <br>
Es werden zwei Verfahren zur Transportverschlüsselung unterstützt:
-	Kerberos ([https://msdn.microsoft.com/en-us/library/windows/desktop/aa374762(v=vs.85).aspx](https://msdn.microsoft.com/en-us/library/windows/desktop/aa374762(v=vs.85).aspx))
-	Transport Layer Security (TLS)

Bei der **Authentisierung** wird sichergestellt, dass ein Benutzer tatsächlich derjenige ist, der er vorgibt zu sein. XU untersützt zwei Arten von Benutzerverwaltungssystemen:
-	Active Directory Benutzer + Gruppen, verwaltet über die Windows Domäne
-	Eigene Benutzer + Gruppen (Custom), verwaltet über XU


Über die **Zugriffskontrolle** können Benutzern/Gruppen unterschiedliche Rechte zugewiesen werden. Die Rechte werden grundsätzlich auf Serverebene erteilt, können aber für einzelne Extraktionen und Sources eingeschränkt werden.
-	read
-	modify
-	create
-	admin

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}