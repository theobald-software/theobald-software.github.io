---
ref: yunio-06
layout: page
title: Benutzerverwaltung
description: Benutzerverwaltung
product: yunio
parent: yunio
childidentifier: integration
permalink: /:collection/:path
weight: 22
lang: de_DE
progressstate: 5
---

Mit der yunIO Benutzerverwaltung können Sie Benutzer erstellen, um den Zugriff auf den yunIO Designer und die yunIO Services zu beschränken.

### Benutzer Anlegen

Die Einstellungen für die Benutzerverwaltung befinden sich im yunIO Designer unter dem Abschnitt *Users*.

1. Klicken Sie auf **[Add User]** (1), um einen neuen Benutzer anzulegen. <br>
Um einen bereits vorhandenen Benutzer zu bearbeiten, klicken Sie auf *Edit* (![Edit](/img/content/yunio/edit.png) Icon) (2).<br>
![Users](/img/content/yunio/yunio-users.png){:class="img-responsive" }
2. Füllen Sie die Benutzerdaten aus.
Wenn **Allowed to log in** aktiv ist, hat der Benutzer Zugriff auf den Designer und kann Services aufrufen.
![New-User](/img/content/yunio/yunio-new-user.png){:class="img-responsive" }
3. Klicken Sie auf **[Save]**, um die Benutzerdaten zu speichern.

<!---
**Allowed to log in**<br>
Wenn diese Checkbox aktiv ist, hat der Benutzer Zugriff auf den Designer.
Wenn **Allowed to log in**  inaktiv ist, kann der Benutzer Services aufrufen, aber nicht im Designer bearbeiten.
-->
### Zugriff auf Designer Einschränken

Folgen Sie diesen Schritten, um den Designer-Zugriff auf angelegte Benutzer zu beschränken: 

1. Erstellen Sie einen oder mehrere Benutzer, die Designer-Zugriff haben, siehe [Benutzer anlegen](#benutzer-anlegen).
Die Checkbox **Allowed to log in** muss in den Benutzereinstellungen aktiviert sein.
2. Navigieren Sie zu *Settings* und aktivieren Sie Transport Layer Security, siehe [Server Settings: Transport Layer Security](./server-settings#transport-layer-security).
3. Starten Sie den yunio-Service neu und verbinden Sie sich über eine sichere HTTPS-Verbindung mit dem Designer.
4. Deaktivieren Sie *Anonymous Access*, siehe [Server Settings: Anonymous Access](./server-settings#anonymous-access) und starten Sie den yunIO-Service erneut.

Wenn Sie sich auf den Designer verbinden, werden Sie aufgefordert, Ihre Zugangsdaten einzugeben:<br>
![Login](/img/content/yunio/yunio-login.png){:class="img-responsive" }

{: .box-note }
**Hinweis:** Wenn Sie sich aussperren und sich nicht mehr einloggen können, löschen Sie die Datei `permission.json` aus Ihrem Installationsverzeichnis, z.B. `C:\Program Files\Theobald Software\yunIO\config\servers\permission.json`.
Starten Sie anschließend den Server neu.

### Benutzer für Basic Authentication verwenden

Folgen Sie diesen Schritten, um Basic Authentication für yunIO-Services einzurichten: 

1. Erstellen Sie einen oder mehrere Benutzer, siehe [Benutzer anlegen](#benutzer-anlegen).
2. Navigieren Sie zu *Settings* und aktivieren Sie Transport Layer Security, siehe [Server Settings: Transport Layer Security](./server-settings#transport-layer-security).
3. Starten Sie den yunio-Service neu und verbinden Sie sich über eine sichere HTTPS-Verbindung mit dem Designer.
4. Navigieren Sie zu *Services* und kopieren oder laden Sie eine Service-Definition herunter.<br>
![Run-Service](/img/content/yunio/yunio-run-services-https.png){:class="img-responsive" }
5. Rufen Sie den Service unter Verwendung von Basic Authentication auf. Sie können die Zugangsdaten aller angelegten Benutzer verwenden.

{: .box-tip }
**Tipp:** Sie können auch SAP-Zugangsdaten für die Basic Authentication von Services verwenden, siehe [SAP-Verbindung: Authentifizierung](./sap-verbindungen-anlegen#authentifizierung).
Die parallele Verwendung von SAP-Zugangsdaten und Zugangsdaten von angelegten Benutzern wird nicht unterstützt.
