---
ref: yunio-08
layout: page
title: Zugriffssteuerung
description: Zugriffssteuerung
product: yunio
parent: yunio
childidentifier: integration
permalink: /:collection/:path
weight: 25
lang: de_DE
progressstate: 5
---

Mit der yunIO Zugriffssteuerung können Sie die Zugriffsrechte von Benutzern auf den Server und den yunIO Designer beschränken.

![Access_Control](/img/content/yunio/access-control.png){:class="img-responsive"}

### Server Access

Aktivieren oder deaktivieren Sie die Zugriffsbeschränkungen für den Designer und den Server.

- Wenn **Anonymous Access** aktiv ist, gibt es keine Zugangsbeschränkungen für den Designer und den Server.
**Anonymous** ist die Standard-Einstellung.
- Wenn **Authenticated** aktiv ist, haben nur angelegte Benutzer mit entsprechender Beschränkungsstufe Zugriff auf den Designer und den Server.<br>
Diese Option ist nur verfügbar, wenn mindestens ein Benutzer angelegt und [Transport Layer Security](#transport-layer-security) aktiv ist. 


### Privileges

Weisen Sie Benutzern Beschränkungsstufen für den Zugriff auf Designer und Server zu.

Alle Benutzer, die in der [Benutzerverwaltung](./benutzer) angelegt sind, werden unter **Privileges** aufgelistet.
Wählen Sie eine Beschränkungsstufe aus der Dropdown-Liste neben dem Benutzernamen aus, um die Beschränkungsstufe dem Benutzer zuzuweisen.
Die folgenden Beschränkungsstufen sind verfügbar:
- **Server Admin**: Keine Beschränkungen. 
- **Create / Modify**: Benutzer können Services und SAP-Verbindungen erstellen, bearbeiten und ausführen.
Benutzer haben keinen Zugriff auf die Benutzer- und Zugriffsverwaltung, sowie die Servereinstellungen.
- **Read / Execute**: Benutzer können den Designer öffnen, aber keine Einstellungen bearbeiten.
Benutzer können Services ausführen.
- **No access**: Benutzer haben keinen Zugriff auf den Designer. Services können nicht ausgeführt werden.
Diese Option kann verwendet werden, um Benutzer zeitweise von der Benutzung von yunIO auszuschließen.

### Zugriff auf Designer und Server einschränken

1. Vergeben Sie den angelegten Benutzern Zugriffsrechte, siehe [Privileges](#privileges).
2. Navigieren Sie zu *Settings* und aktivieren Sie Transport Layer Security, siehe [Server Settings: Transport Layer Security](./server-settings#transport-layer-security).<br>
3. Starten Sie den yunIO-Service neu und verbinden Sie sich über eine sichere HTTPS-Verbindung mit dem Designer.
4. Unter [Server Access](#server-access) aktivieren Sie **Authenticated**.
5. Klicken Sie **[Save]** und starten Sie den yunIO-Service erneut.
6. Wenn Sie sich auf den Designer verbinden, werden Sie aufgefordert, Ihre Zugangsdaten einzugeben:<br>
![Login](/img/content/yunio/yunio-login.png){:class="img-responsive" }
7. Navigieren Sie zu *Services* und kopieren oder laden Sie eine Service-Definition herunter.<br>
![Run-Service](/img/content/yunio/yunio-run-services-https.png){:class="img-responsive" }
8. Rufen Sie den Service unter Verwendung von Basic Authentication auf. 
Verwenden Sie die Zugangsdaten eines Benutzers mit ausreichenden Zugriffsrechten, um einen Service auszuführen.

{: .box-note }
**Hinweis:** Wenn Sie sich aussperren und sich nicht mehr einloggen können, löschen Sie die Datei `permission.json` aus Ihrem Installationsverzeichnis, z.B. `C:\Program Files\Theobald Software\yunIO\config\servers\permission.json`.
Starten Sie anschließend den Server neu.

{: .box-tip }
**Tipp:** Sie können auch SAP-Zugangsdaten für die Basic Authentication von Services verwenden, siehe [SAP-Verbindung: Authentifizierung](./sap-verbindungen-anlegen#authentifizierung).
Die parallele Verwendung von SAP-Zugangsdaten und Zugangsdaten von angelegten Benutzern wird nicht unterstützt.

