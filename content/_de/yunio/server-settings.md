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
Dafür muss das X.509 Zertifikat installiert sein. 
Für mehr Informationwn zu TLS, siehe [Microsoft: TLS-Protokoll](https://docs.microsoft.com/de-de/windows/win32/secauthn/transport-layer-security-protocol).


#### Pick Certificate
Klicken Sie auf **[Pick Certificate]** und wählen Sie ein X.509 Zertifikat aus der Liste verfügbarer Zertifikate aus.
Falls das Zertifikat nicht in der Liste oder im Windows Certificate Store aufgelistet ist, [installieren Sie das X.509 Zertifikat](./x.509-zertifikat-installieren).

#### TLS enabled
Wenn ein Zertifikat gewählt wurde, ist die Option **TLS enabled** verfügbar.<br>
Über **TLS enabled** aktivieren oder deaktivieren Sie die Verwendung von Transportverschlüsselung für den Webserver.

### CORS List

Geben Sie eine URL ein, die Sie zur Liste der ...

{: .box-note }
**Hinweis:** Während der Testphase können Sie ( * ) verwenden, um alle URLs zuzulassen.

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
