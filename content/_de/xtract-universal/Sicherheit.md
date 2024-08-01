---
ref: xtract-universal-09
layout: page
title: Sicherheit
description: Sicherheit
product: xtract-universal
parent: xtract-universal
childidentifier: Sicherheit
permalink: /:collection/:path
weight: 40
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=sicherheit_in_xu_3_x
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract Universal.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

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
-	[Kerberos](https://msdn.microsoft.com/de-de/library/windows/desktop/aa374762(v=vs.85).aspx)
-	[Transport Layer Security (TLS)](https://docs.microsoft.com/de-de/windows/win32/secauthn/transport-layer-security-protocol)

Die Verschlüsselung wurde unter Verwendung der .NET APIs implementiert. 
Die Auswahl der Verschlüsselungssammlung hängt von dem Betriebssystem der Maschine ab, auf der der Xtract Universal Server läuft. 
Für detailierte Informationen zur Verschlüsselung, siehe [Verschlüsselungs Sammlungen in TLS/SSL](https://docs.microsoft.com/de-de/windows/win32/secauthn/cipher-suites-in-schannel) und [SslStream Klasse](https://docs.microsoft.com/de-de/dotnet/api/system.net.security.sslstream?view=net-5.0).

### Zugriffskontrolle
Die Sicherheitsmethode der Zugriffskontrolle ermöglicht die Zugriffsgewährung und -einschränkung für bestimmte Benutzer oder Benutzergruppen. 
Die Zugriffsrechte werden auf Serverebene zugewiesen, können aber für ausgewählte Extraktionen oder Quellen (Sources) weiter eingeschränkt werden.
Mehr Details finden Sie auch [Zugriffsverwaltung](./sicherheit/zugriffsverwaltung).




