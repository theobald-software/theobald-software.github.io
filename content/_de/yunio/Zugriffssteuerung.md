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

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für yunIO.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für yunIO](https://helpcenter.theobald-software.com/yunio/).

Die Zugriffssteuerung von yunIO ermöglicht es Ihnen, die folgenden Zugriffsrechte zu definieren:
- Zugriffsberechtigung für Server und yunIO Designer, siehe [Global Access Control](#global-access-control-globale-zugriffssteuerung)
- Zugriffsberechtigung für bestimmte Services, siehe [Service Access Control](#service-access-control-zugriffssteuerung-für-services)

## Global Access Control (Globale Zugriffssteuerung)
Global Access Control --- Globale Zugriffssteuerung ermöglicht es Ihnen Zugriffsberechtigung für Server und yunIO Designer zu definieren.<br>
![Access_Control](/img/content/yunio/access-control.png){:class="img-responsive"}

### Server Access

Aktivieren oder deaktivieren Sie die Zugriffsbeschränkungen für den Designer und den Server.

- Wenn **Anonymous Access** aktiv ist, gibt es keine Zugangsbeschränkungen für den Designer und den Server.
**Anonymous** ist die Standard-Einstellung.
- Wenn **Authenticated** aktiv ist, haben nur angelegte Benutzer mit entsprechender Beschränkungsstufe Zugriff auf den Designer und den Server.<br>
Diese Option ist verfügbar, wenn mindestens ein Benutzer angelegt und [Transport Layer Security](./server-settings) aktiv ist. 


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
6. Klicken Sie auf **[Save]** und starten Sie den yunIO-Service erneut.
7. Wenn Sie sich auf den Designer verbinden, werden Sie aufgefordert, Ihre Zugangsdaten einzugeben:<br>
![Login](/img/content/yunio/yunio-login.png){:class="img-responsive" }


{: .box-note }
**Hinweis:** Wenn Sie sich aussperren und sich nicht mehr einloggen können, löschen Sie die Datei `permission.json` aus Ihrem Installationsverzeichnis, z.B. `C:\Program Files\Theobald Software\yunIO\config\servers\permission.json`.
Starten Sie anschließend den Server neu.

{: .box-tip }
**Tipp:** Sie können auch SAP-Zugangsdaten für die Basic Authentication von Services verwenden, siehe [SAP-Verbindung: Authentifizierung](./sap-verbindungen-anlegen#authentifizierung).
Die parallele Verwendung von SAP-Zugangsdaten und Zugangsdaten von angelegten Benutzern wird nicht unterstützt.

## Service Access Control (Zugriffssteuerung für Services)
Aktivieren oder deaktivieren Sie die Zugriffsbeschränkungen für bestimmte Services. <br>
Um die Einstellungen für die Service-Zugriffssteuerung (Service Access Control) zu öffnen, klicken Sie auf (![Login](/img/content/yunio/key.png)) beim Service, derauf den Sie den Zugriff beschränken möchten. <br>
![service-access-control](/img/content/yunio/service-access-control-settings0.png){:class="img-responsive"}

### Service Access
Aktivieren oder deaktivieren Sie benutzerdefinierte Zugriffsbeschränkungen für den ausgewählten Service.
- Wenn die Option **Inherit** aktiviert ist, die globalen Zugriffsrechte gelten für den Service, siehe [Global Access Control](##global-access-control-globale-zugriffssteuerung). 
 **Inherit** ist die Standard-Einstellung.
- Wenn die Option **Custom**  aktiviert ist, die im Unterabschnitt [*Privileges*](#privileges-services) definierten Zugriffsrechte gelten für den Service. <br>
Benutzerdefinierte Service-Einschränkungen betreffen nicht die Benutzer mit globalen *Administrator*-Rechten.

### Privileges (Services)

Vergeben der Restriktions-Stufen von Service-Zugang an Benutzer.

Alle Benutzer, die in der [Benutzerverwaltung](./benutzer) angelegt sind, werden im Unterabschnitt **Privileges** aufgelistet.
Wählen Sie eine Beschränkungsstufe aus der Dropdown-Liste neben dem Benutzernamen aus, um die Beschränkungsstufe dem Benutzer zuzuweisen.
Die folgenden Beschränkungsstufen sind verfügbar:
- **Modify**:  Benutzer können Services anschauen, ausführen und bearbeiten.
- **Read / Execute**: Benutzer können Services anschauen und ausführen.
- **No access**: Benutzer können nicht auf die Services zugreifen, anschauen, bearbeiten oder ausführen.


### Zugriff auf Services einschränken

Standardmäßig erben Services Zugriffsbeschränkungen von der Server-Ebene, siehe [Global Access Control](#global-access-control-globale-zugriffssteuerung).
Führen Sie die folgenden Schritte aus, um benutzerdefinierte Zugriffsbeschränkungen für bestimmte Services einzurichten:

1. Öffnen Sie das Menu *Settings*.
2. Klicken Sie auf (![Login](/img/content/yunio/key.png)) beim Service auf den Sie den Zugriff einschränken möchten. 
Das *Menu Access Control* (Zugriffssteuerung) wird geöffnet.<br>
![service-access-control](/img/content/yunio/service-access-control.png){:class="img-responsive"}
3. Aktivieren Sie die Option **Custom**, siehe [Service Access](#service-access)<br>
![service-access-control-settings](/img/content/yunio/service-access-control-settings.png){:class="img-responsive"}
4. Vergeben Sie den angelegten Benutzern Zugriffsrechte, siehe [Privileges (Services)](#privileges-services).
5. Klicken Sie auf **[Save]**.
6. Öffnen Sie das Menü *Services*, kopieren Sie oder laden Sie die Service-Definition herunter. <br>
![Run-Service](/img/content/yunio/yunio-run-services-https.png){:class="img-responsive"}
7. Rufen Sie den Service mit einfacher Authentifizierung auf. Geben Sie die Anmeldedaten eines Benutzers ein, der berechtigt ist, Services auszuführen.

{: .box-note }
**Hinweis:** Wenn sich die Zugriffsrechte von Server- und Service-Ebene unterscheiden, gilt das restriktivere Zugriffsrecht, z.B. der Benutzer mit *Read/Execute*- Rechten auf der Server-Ebene kann nicht auf der Service-Ebene auf *Modify* hochgestuft werden.
Die *Administrator*-Rechte sind die einzigen Rechte auf der Server-Ebene, die auf der Service-Ebene nicht runtergestuft werden können. 

{: .box-tip }
**Tipp:** Klicken Sie auf **[Reset permissions]**, um alle Benutzer auf *No Access* zu setzen.

