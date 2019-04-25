---
ref: xu-security-xu3-01
layout: page
title: Benutzerverwaltung
description: Benutzerverwaltung
product: xtract-universal
parent: sicherheit_in_xu_3_x
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=benutzerverwaltung1
---
### Authentisierung- und Verschlüsselungsverfahren<br>
Die Verbindung zwischen dem Xtract Universal Designer und dem Xtract Universal Server kann durch unterschiedliche Authentisierung- und Verschlüsselungsverfahren durchgeführt werden. 

1. Windows AD Benutzer (außerhalb von Xtract Universal angelegt)
2. Custom Benutzer (innerhalb von Xtract Universal angelegt, in XU 2.x als "basic user" bezeichnet)
3. Anonym (keine Anmeldedaten benötigt, keine Verschlüsselung)

![XU3_Designer_Authentication](/img/content/xu/authentication_xu.png){:class="img-responsive"}

XU unterstützt folgende Kombinationen von Transportverschlüsselung + Authentisierung:

**Windows credentials (current user)**<br>
Der AD-Benutzer, der den XU Designer ausführt, authentisiert sich gegenüber dem XU Server per Kerberos. Alle zwischen Designer + Server ausgetauschten Daten werden per Kerberos verschlüsselt.

**Windows credentials (different user)**<br> 
Der AD-Benutzer, dessen Benutzername und Passwort in das Anmeldefenster eingegeben werden, authentisiert sich gegenüber dem XU Server per Kerberos. Alle zwischen Designer + Server ausgetauschten Daten werden per Kerberos verschlüsselt.

**Custom credentials (TLS encryption)**<br>
Der Custom User, dessen Benutzername und Passwort in das Anmeldefenster eingegeben werden, authentisiert sich gegenüber dem XU Server. Alle zwischen Designer + Server ausgetauschten Daten werden per TLS verschlüsselt.<br>
Um TLS Transportverschlüsselung zu verwenden, wird ein X.509 Serverzertifikat für den XU Service benötigt (kann in den Server Settings hinterlegt werden).<br>
Im Anmeldefenster muss im Feld Server der DNS Hostname des Servers eingetragen werden, für den das Zertifikat ausgestellt wurde.

**Custom credentials (Kerberos encryption)**<br>
Der Custom User, dessen Benutzername und Passwort in das Anmeldefenster eingegeben werden, authentisiert sich gegenüber dem XU Server. Alle zwischen Designer + Server ausgetauschten Daten werden per Kerberos verschlüsselt.

**Anonymous (no encryption)**<br>
Es findet keine Authentisierung statt. Die zwischen Designer + Server ausgetauschten Daten werden ohne Transportverschlüsselung im Klartext übertragen.

Diese unterschiedlichen Anmeldeoptionen können in den Server Settings aktiviert/deaktiviert werden.

![XU3_ServerSettings_authenticaion_methods](/img/content/xu/authentisierung_xu.png){:class="img-responsive"}

### Target principal<br>
Um Kerberos Transportverschlüsselung zu verwenden oder einen Active Directory Benutzer zu authentisieren, wird ein Kerberos Target Principal Name (TPN) benötigt. Dieser kann entweder ein User Principal Name (UPN) sein oder ein Service Principal Name (SPN).<br>

Der Target Principal Name muss entweder dem UPN des Benutzers entsprechen, unter dem der XU Windows Service ausgeführt wird, oder einem SPN, der diesem Benutzer zugeordnet ist.<br>

Standardmäßig wird der XU Service unter dem Local System Account ausgeführt. Im AD tritt dieser Benutzer als Computeraccount auf. Dem Computeraccount ist standardmäßig der SPN in folgender Form zugeordnet:
```
HOST/[hostname]@[domain]
```
Beispiel:
```
XU Server: TODD.theobald.local:8064 (or localhost:8064)
TPN:       HOST/TODD.theobald.local@THEOBALD.LOCAL
```
![XU3_Designer_Authentication](/img/content/XU3_Designer_Authentication.png){:class="img-responsive"}

**Deswegen muss der Target Principal Name im Anmeldefenster nur geändert werden, wenn der Service Account des XU Windows Service geändert wurde.**

### User Principal Name – UPN<br>
Ein UPN tritt ist in folgender Form zugeordnet:
```
<benutzer>@<domain>
```
```
XU Server:  TODD.theobald.local:8064
TPN:        steffan@theobald.local
```
![XU TPN UPN](/img/content/xu/xu_UPN_steffan@.png){:class="img-responsive"}

Weiterführende Information entnehmen Sie bitte der offiziellen [Windows Bibliothek](https://msdn.microsoft.com/en-us/library/windows/desktop/aa380525(v=vs.85).aspx). 

### Service Principal Name - SPN<br>
Ein SPN tritt ist in folgender Form zugeordnet:
```
<service class>/<host>
HTTP/theosoftw2012r2
```
Die <Service Class> sowie der <Host Name> sind zur Authentisierung einer Service Instanz zu einem Logon-Konto mindestens notwendig. Generell sind für die Bearbeitung von Manage Service Accounts, Domain Admin Rechte erforderlich. Weiterführende Informationen entnehmen Sie bitte der offiziellen [Windows Bibliothek](https://msdn.microsoft.com/en-us/library/ms677949(VS.85).aspx)

![AD User and computers - SPN](/img/content/xu/xu_ad_spn.png){:class="img-responsive"}

Bei Einwahl auf einen Remote Server, bei dem der Dienst nicht auf der lokalen Umgebung verwendet wird, können sowohl ein UPN als auch ein SPN in der folgenden Form verwendet werden:
```
XU Server:     theosoftw2012r2.theobald.local:8064
TPN als UPN:   svc_xusrv@THEOBALD.LOCAL
TPN als SPN:   HTTP/theosoftw2012r2.theobald.local@THEOBALD.LOCAL
```
### Benutzer<br>
Das Anlegen von Custom Benutzern funktioniert so wie das Anlegen von Basic Benutzern in XU 2.x. Zum Zeitpunkt der Benutzeranlage müssen noch keine Rechte vergeben werden, siehe Kapitel Zugriffsverwaltung.<br>
Custom Benutzer werden angelegt und Custom Benutzergruppen zugeordnet via *Security - Manage Users*.

![XU3_assign_UserGroups](/img/content/XU3_assign_UserGroups.png){:class="img-responsive"}

### Benutzergruppen<br>
In XU 2.x konnten Benutzergruppen nur in Xtract Universal angelegt werden. XU 3.x unterstützt zusätzlich Windows AD Benutzergruppen, welche außerhalb von Xtract Universal angelegt werden. Zum Zeitpunkt der Benutzergruppenanlage müssen noch keine Rechte vergeben werden, siehe Kapitel Zugriffsverwaltung.<br>
Windows AD Benutzer werden Windows AD Benutzergruppen außerhalb von Xtract Universal zugeordnet.

**ACHTUNG:**<br>
Custom User können nur custom Benutzergruppen zugeordnet werden.<br>
Windows AD User können nur Windows AD Gruppen zugeordnet werden, jedoch nicht zu custom Benutzergruppen. Das ist ein "Breaking Change" im Vergleich zu XU 2.x.

Daraus folgt, dass Windows AD User, die unter XU 2.x custom Benutzergruppen zugeordnet waren bei der Migration nach XU 3.x aus diesen Gruppen verschwinden.

Die Zugriffsverwaltung wird dadurch nicht beeinflusst. Allerdings wird der Zugriff auf Benutzerebene aufgelöst. Soll der Zugriff auf Gruppenebene erfolgen, müssten die Windows AD Benutzer neu anzulegenden Windows AD Gruppen zugeordnet werden.

Im Gegensatz zu zu Windows AD Benutzergruppen werden Custom Benutzergruppen im Xtract Universal Designer angelegt.

![XU3_new_UserGroup](/img/content/XU3_new_UserGroup.jpg){:class="img-responsive"}


