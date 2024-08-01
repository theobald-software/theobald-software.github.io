---
ref: board-connector-09
layout: page
title: Sicherheit
description: Sicherheit
product: board-connector
parent: board-connector
childidentifier: sicherheit
permalink: /:collection/:path
weight: 9
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=sicherheit
progressstate: 5
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Board Connector.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Board Connector HelpCenter](https://helpcenter.theobald-software.com/board-connector/documentation/introduction/).

Die Kommunikationssicherheit zwischen dem Designer und dem Server wird mit Hilfe folgender Verfahren gewährleistet:
- Authentisierung (authentication) 
- Transportverschlüsselung (transport encryption)
- Zugriffskontrolle (access control)


### Authentisierung

Das Sicherheitsverfahren der Authentisierung garantiert die Überprüfung der Identität des angemeldeten Benutzers.  
Nach der erstmaligen Verbindung mit dem Server unter Verwendung der Standardauthentifizierungsmethoden wie "Windows Credentials" oder "Anonymous" können Sie 
weitere Details innerhalb der Servereinstellungen anpassen. Mehr Details finden Sie im Abschnitt [Benutzerverwaltung](./sicherheit/benutzerverwaltung).



### Transportverschlüsselung

Die Sicherheitsmethode der Transportverschlüsselung verhindert das Ausspionieren oder Manipulieren der Daten (z.B. SAP-Credentials), die zwischen dem Designer und dem Server ausgetauscht werden. 

Es werden zwei Verfahren zur Transportverschlüsselung unterstützt:
-	[Kerberos](https://msdn.microsoft.com/en-us/library/windows/desktop/aa374762(v=vs.85).aspx)
-	[Transport Layer Security (TLS)](https://docs.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol)


### Zugriffskontrolle
Die Sicherheitsmethode der Zugriffskontrolle ermöglicht die Zugriffsgewährung und -einschränkung für bestimmte Benutzer oder Benutzergruppen. 
Die Zugriffsrechte werden auf Serverebene zugewiesen, können aber für ausgewählte Extraktionen oder Quellen (Sources) weiter eingeschränkt werden.
Mehr Details finden Sie auch [Zugriffsverwaltung](./sicherheit/zugriffsverwaltung).
