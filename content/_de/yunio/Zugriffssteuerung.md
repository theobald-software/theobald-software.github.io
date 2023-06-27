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

Die Zugriffssteuerung von yunIO ermöglicht es Ihnen, die folgenden Zugriffsrechte zu definieren:
- Zugriffsberechtigung für Server und yunIO Designer, siehe []()
- Zugriffsberechtigung für bestimmte Services, siehe []()

## Global Access Control (Globale Zugriffssteuerung)
Global Access Control --- Globale Zugriffssteuerung ermöglicht es Ihnen Zugriffsberechtigung für Server und yunIO Designer zu definieren.<br>
![Access_Control](/img/content/yunio/access-control.png){:class="img-responsive"}

### Server Access

Aktivieren oder deaktivieren Sie die Zugriffsbeschränkungen für den Designer und den Server.

- Wenn **Anonymous Access** aktiv ist, gibt es keine Zugangsbeschränkungen für den Designer und den Server.
**Anonymous** ist die Standard-Einstellung.
- Wenn **Authenticated** aktiv ist, haben nur angelegte Benutzer mit entsprechender Beschränkungsstufe Zugriff auf den Designer und den Server.<br>
Diese Option ist verfügbar, wenn mindestens ein Benutzer angelegt und [Transport Layer Security](#transport-layer-security) aktiv ist. 


### Privileges (Global)

Weisen Sie Benutzern Beschränkungsstufen für den Zugriff auf Designer und Server zu.

Alle Benutzer, die in der [Benutzerverwaltung](./benutzer) angelegt sind, werden im Unterabschnitt **Privileges** aufgelistet.
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

1. Öffnen Sie das Menu *Settings* und aktivieren Sie *Transport Layer Security*, siehe [Server Settings: Transport Layer Security](./server-settings#transport-layer-security).<br>
2. Starten Sie den yunIO-Service neu und verbinden Sie sich mit dem Designer über eine sichere HTTPS-Verbindung.
3. Öffnen Sie das Menu *Access Control*.
4. Aktivieren Sie **Authenticated**, siehe [Server Access](#server-access).<br>
![Access_Control](/img/content/yunio/access-control2.png){:class="img-responsive"}
5. Vergeben Sie den angelegten Benutzern Zugriffsrechte, siehe [Privileges (Global)](#privileges-global).
6. Klicken Sie **[Save]** und starten Sie den yunIO-Service erneut.
7. Wenn Sie sich auf den Designer verbinden, werden Sie aufgefordert, Ihre Zugangsdaten einzugeben:<br>
![Login](/img/content/yunio/yunio-login.png){:class="img-responsive" }


{: .box-note }
**Hinweis:** Wenn Sie sich aussperren und sich nicht mehr einloggen können, löschen Sie die Datei `permission.json` aus Ihrem Installationsverzeichnis, z.B. `C:\Program Files\Theobald Software\yunIO\config\servers\permission.json`.
Starten Sie anschließend den Server neu.

{: .box-tip }
**Tipp:** Sie können auch SAP-Zugangsdaten für die Basic Authentication von Services verwenden, siehe [SAP-Verbindung: Authentifizierung](./sap-verbindungen-anlegen#authentifizierung).
Die parallele Verwendung von SAP-Zugangsdaten und Zugangsdaten von angelegten Benutzern wird nicht unterstützt.

### Service Access Control 
Aktivieren oder deaktivieren Sie die Zugriffsbeschränkungen für bestimmte Services. <br>
Um die Einstellungen für die Service-Zugriffssteuerung (Service Access Control) zu öffnen, klicken Sie auf (![Login](/img/content/yunio/key.png)) beim Service, derauf den Sie den Zugriff beschränken möchten. <br>
![service-access-control](/img/content/yunio/service-access-control-settings0.png){:class="img-responsive"}

### Service Access
Aktivieren oder deaktivieren Sie die Zugriffsbeschränkungen für den ausgewählten Service.
- Wenn die Option **Inherit** aktiviert ist, die globalen Zugriffsrechte gelten für den Service, siehe [Global Access Control](#global-access-control). 
 **Inherit** ist die Standard-Einstellung.
- Wenn die Option **Custom**  aktiviert ist, die im Unterabschnitt [*Privileges*](#privileges-services) definierten Zugriffsrechte gelten für den Service. <br>
Benutzerdefinierte Service-Einschränkungen betreffen nicht die Benutzer mit globalen *Administrator*-Rechten.

### Privileges (Services)

Assign restriction levels for the service access to users.

All users defined in [User management](./users) are listed in the subsection *Privileges*.
Select a restriction level from the dropdown list next to the user name to assign a restriction level.
The following restriction levels are available:
- **Modify**: The user can read, run and modify the service.
- **Read / Execute**: The user can read and run the service.
- **No access**: The user can not access, modify, read or run the service.

### Restrict Access to Services

By default services inherit access restrictions from the server-level, see [Global Access Control](#global-access-control).
Follow the steps below to set up custom access restrictions for specific services:

1. Open the *Services* menu.
2. Click (![Login](/img/content/yunio/key.png)) at the service you want to restrict access to. 
The access control menu of the service opens.<br>
![service-access-control](/img/content/yunio/service-access-control.png){:class="img-responsive"}
3. Activate **Custom**, see [Service Access](#service-access)<br>
![service-access-control-settings](/img/content/yunio/service-access-control-settings.png){:class="img-responsive"}
4. Assign user rights to existing users, see [Privileges (Services)](#privileges-services).
5. Click **[Save]**.
6. Open the *Services* menu and copy or download the service definition.<br>
![Run-Service](/img/content/yunio/yunio-run-services-https.png){:class="img-responsive"}
7. Call the service using basic authentication. Enter the credentials of a user that is allowed to run services.


{: .box-note }
**Note:** When access rights from the server and service levels differ, the more restrictive access right applies, e.g., a user with *Read/Execute* privilege on the server level cannot be upgraded to *Modify* on the service level.
The *Administrator* privilege is the only privilege on the server level that cannot be downgraded on the service level.

{: .box-tip }
**Tip:** Click **[Reset permissions]** to set all user rights to *No Access*.

