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
**Hinweis:** Starten Sie den yunIO-Server neu, um die Änderungen zu übernehmen.

![Server-Settings](/img/content/yunio/Server-settings.png){:class="img-responsive" }

### Anonymous Access
Wenn diese Option aktiv ist, gibt es keine Zugangsbeschränkungen für den Designer.
*Anonymous Access* kann in Kombination mit ....


### Transport Layer Security

Das *Transport Layer Security (TLS)*-Protokoll ermöglicht eine verschlüsselte Datenübertragung.
Wenn TLS aktiviert ist, wird auf den jeweiligen Dienst über eine HTTPS-Verbindung zugegriffen.
Dafür muss ein X.509 Zertifikat installiert sein.
Für mehr Informationen zu TLS, siehe [Microsoft: TLS-Protokoll](https://docs.microsoft.com/de-de/windows/win32/secauthn/transport-layer-security-protocol).

#### Pick Certificate
Klicken Sie auf **[Pick Certificate]** und wählen Sie ein X.509 Zertifikat aus der Liste verfügbarer Zertifikate aus.
Falls das Zertifikat nicht in der Liste oder im Windows Certificate Store aufgelistet ist, installieren Sie das X.509 Zertifikat.

{: .box-note }
**Hinweis:** Je nachdem, ob yunIO auf einer lokalen Serverumgebung oder Cloudumgebung gehostet ist, unterscheidet sich das Vorgehen zur Zertifikaterstellung.<br>
Orientieren Sie sich an den verfügbaren Dokumentationen dazu im Netz oder wenden Sie sich an Ihre Netzwerk-Administratoren.

#### TLS enabled
Wenn ein Zertifikat gewählt wurde, ist die Option **TLS enabled** verfügbar.<br>
Über **TLS enabled** aktivieren oder deaktivieren Sie die Verwendung von Transportverschlüsselung für den Webserver.

{: .box-note }
**Hinweis:** Um sich über TLS auf den Designer zu verbinden, starten Sie den yunIO-Server neu und verbinden Sie sich über folgendes URL-Pattern mit dem Designer: `https://[host]:[HTTPS port]`. 

### Allowed Origins (CORS)

{: .box-warning }
**Warnung! Cross-Origin Request Blocked** Wenn Sie auf einen CORS-Fehler stoßen, ist die URL Ihres Origins nicht authorisiert auf yunIO zuzugreifen.
Fügen Sie die URL Ihres Origins der Liste authorisierter URL hinzu.

Geben Sie URLs ein, die über Cross-Origin-Requests auf yunIO zugreifen dürfen.<br>
Beispiel: Um einem Tool wie Swagger Inspector zu ermöglichen, Dienste aus yunIO zu laden und zu testen, muss die URL `https://inspector.swagger.io` hinterlegt sein.

{: .box-note }
**Hinweis:** Während der Testphase können Sie ( * ) verwenden, um alle URLs zuzulassen.
Wenn Sie yunIO zum ersten Mal installieren, ist diese Einstellung automatisch gesetzt.

### Services, Designer und WebSockets 

Definieren Sie hier die Ports für Serviceaufrufe, den Designer-Zugang und WebSocket-Konfigurationen. Gültige Portnummern reichen von 1-65535. 
Es ist nicht empfohlen, Ports unter 1000 zu verwenden, da diese oftmals bereits belegt sind und die Verwendung mit anderen Diensten zu Störungen der Dienste führen kann.

#### Standardports

|Service-Name|HTTP|HTTPS|Beschreibung|
|---|---|---|---|
|Services|8075|8175|Dieser Port wird vom Webserver verwendet, der die Anfragen annimmt, um Services zu starten.|
|Designer|8077|8177|Dieser Port wird genutzt, um den yunIO Designer aufzurufen.|
|WebSockets|8076|8176|Dieser Port wird vom yunIO Designer verwendet, um Konfigurationen, Services, etc. anzupassen.|
