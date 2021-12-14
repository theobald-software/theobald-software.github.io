---
ref: yunio-07
layout: page
title: Server Settings
description: Server
product: yunio
parent: yunio
childidentifier: server
permalink: /:collection/:path
weight: 30
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=server
---

Dieser Abschnitt enthält Informationen über die yunIO Server-Einstellungen.<br>
Öffnen Sie die Einstellungen unter dem Menüpunkt **Settings**. 
Speichern Sie Änderungen der Einstellungen mit **[Save]**.

{: .box-note }
**Hinweis:** Die vorgenommenen Änderungen werden durch den Neustart des yunIO-Servers aktiviert.

![Server-Settings](/img/content/yunio/Server-settings.png){:class="img-responsive" }

### Transport Layer Security

Die Sicherheitsmethode der Transportverschlüsselung verhindert das Ausspionieren oder Manipulieren der Daten (z.B. SAP-Credentials), die zwischen dem Designer und dem Server ausgetauscht werden.
Wenn *Transport Layer Security (TLS)* aktiviert ist, wird auf den Webserver über eine https-Verbindung zugegriffen.
Dafür muss ein X.509 Zertifikat installiert sein. 
Für mehr Informationen zu TLS, siehe [Microsoft: TLS-Protokoll](https://docs.microsoft.com/de-de/windows/win32/secauthn/transport-layer-security-protocol).


#### Pick Certificate
Klicken Sie auf **[Pick Certificate]** und wählen Sie ein X.509 Zertifikat aus der Liste verfügbarer Zertifikate aus.
Falls das Zertifikat nicht in der Liste oder im Windows Certificate Store aufgelistet ist, installieren Sie das X.509 Zertifikat.

#### TLS enabled
Wenn ein Zertifikat gewählt wurde, ist die Option **TLS enabled** verfügbar.<br>
Über **TLS enabled** aktivieren oder deaktivieren Sie die Verwendung von Transportverschlüsselung für den Webserver.

### Allowed Origins (CORS)

{: .box-warning }
**Warnung! Cross-Origin Request Blocked** Wenn Sie auf einen CORS-Fehler stoßen, ist die URL Ihres Origins nicht authorisiert auf yunIO zuzugreifen.
Fügen Sie die URL Ihres Origins der Liste authorisierter URL hinzu.

Geben Sie URLs ein, die über Cross-Origin-Requests auf yunIO zugreifen dürfen.<br>
Beispiel: Um einem Tool wie Swagger Inspector zu ermöglichen, Dienste aus yunIO zu laden und zu testen, muss die URL `https://inspector.swagger.io` hinterlegt sein.

{: .box-note }
**Hinweis:** Während der Testphase können Sie ( * ) verwenden, um alle URLs zuzulassen.
Wenn Sie yunIO zum ersten Mal installieren, ist diese Einstellung automatisch gesetzt.

### Services

Definieren Sie die Ports für Ihre Dienste.

#### HTTP port
Dieser Port wird für Ihre Dienste verwendet, wenn keine Transportverschlüsselung aktiv ist. Die maximale Portnummer ist 65535.

#### HTTPS port
Dieser Port wird für Ihre Dienste verwendet, wenn die Transportverschlüsselung aktiv ist. Die maximale Portnummer ist 65535.

### Designer

Definieren Sie die Ports für den Designer.

#### HTTP port
Dieser Port wird verwendet, um auf den Designer zuzugreifen, wenn keine Transportverschlüsselung aktiv ist. Die maximale Portnummer ist 65535.

#### HTTPS port
Dieser Port wird verwendet, um auf den Designer zuzugreifen, wenn die Transportverschlüsselung aktiv ist. Die maximale Portnummer ist 65535.

### WebSockets

Definieren Sie die Ports für die Kommunikation zwischen dem Designer und dem yunIO-Server.

#### HTTP port
Dieser Port wird für die Kommunikation zwischen dem Designer und dem yunIO-Server, wenn keine Transportverschlüsselung aktiv ist. Die maximale Portnummer ist 65535.

#### HTTPS port
Dieser Port wird für die Kommunikation zwischen dem Designer und dem yunIO-Server, wenn die Transportverschlüsselung aktiv ist. Die maximale Portnummer ist 65535.
