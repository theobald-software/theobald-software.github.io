---
ref: yunio-07
layout: page
title: Server-Einstellungen
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
**Hinweis:** Starten Sie den yunIO-Dienst neu, um die Änderungen zu übernehmen.

![Server-Settings](/img/content/yunio/Server-settings.png){:class="img-responsive" }

### Services Endpoint

Die Option **Service URL Kind** definiert die URL, mit der man sich mit yunIO Services verbindet.

- *Default*: <br>
Wenn TLS aktiv ist ist, wird der *Subject Alternative Name* aus dem X.509 Zertificate als Hostname verwendet, siehe [Transport Layer Security](#transport-layer-security). <br>
- *Custom*: <br>
Geben Sie im Feld **Custom Hostname** einen benutzerdefinierten Hostnamen ein und klicken Sie auf **[Save]**, um die OpenAPI Definitionen aller angelegten Services zu aktualisieren.
- *Azure Relay Hybrid Connection*:<br>
Wenn eine Azure Relay Hybrid Verbindung eingerichtet ist, verwenden die Services eine Azure Relay Adresse, um für Anwendungen in der Azure Cloud erreichbar zu sein. Für mehr Informationen zu Azure Relay, siehe [Establish an Azure Relay Hybrid Connection to yunIO](https://kb.theobald-software.com/yunio/establish-an-azure-relay-hybrid-connection). <br>

{: .box-note }
**Hinweis:** Wildcard-Zertifikate werden unterstützt. Geben Sie den Hostnamen des Zertifikats als benutzerdefinierten Endpunkt an.

{: .box-tip }
**Tipp:** Um mehrere Endpunkte zu verwenden, richten Sie mehrere yunIO Server ein, einen Server für jeden Endpunkt.


### Transport Layer Security

Das *Transport Layer Security (TLS)*-Protokoll ermöglicht eine verschlüsselte Datenübertragung.
Wenn TLS aktiviert ist, wird auf den jeweiligen Dienst über eine HTTPS-Verbindung zugegriffen.
Dafür muss ein X.509 Zertifikat installiert sein, siehe [Knowledge Base: Installing an X.509 Certificate](https://kb.theobald-software.com/yunio/x509-certificate). <br>
Für mehr Informationen zu TLS, siehe [Microsoft: TLS-Protokoll](https://docs.microsoft.com/de-de/windows/win32/secauthn/transport-layer-security-protocol).

#### Pick Certificate
Klicken Sie auf **[Pick Certificate]** und wählen Sie ein X.509 Zertifikat aus der Liste verfügbarer Zertifikate aus.
Falls das Zertifikat nicht in der Liste oder im Windows Certificate Store aufgelistet ist, installieren Sie das X.509 Zertifikat.
In dem Zertifikat muss ein *Subject Alternative Name* hinterlegt sein. Dieser wird als neuer Hostname verwendet.
Einen benutzerdefinierten Hostnamen können Sie in der [Services Endpoint](#endpoint) Einstellung angeben.

Informationen zur Erneuerung eines Zertifikats, finden Sie in dem Knowledge Base Artikel [Certificate Renewal for TLS](https://kb.theobald-software.com/yunio/certificate-renewal).

{: .box-note }
**Hinweis:** Je nachdem, ob yunIO auf einer lokalen Serverumgebung oder Cloudumgebung gehostet ist, unterscheidet sich das Vorgehen zur Zertifikaterstellung.<br>
Orientieren Sie sich an den verfügbaren Dokumentationen dazu im Netz oder wenden Sie sich an Ihre Netzwerk-Administratoren.

#### TLS enabled
Wenn ein Zertifikat gewählt wurde, ist die Option **TLS enabled** verfügbar.<br>
Über **TLS enabled** aktivieren oder deaktivieren Sie die Verwendung von Transportverschlüsselung für den Webserver.

{: .box-note }
**Hinweis:** Um sich über TLS auf den Designer zu verbinden, starten Sie den yunIO-Server neu und verbinden Sie sich über folgendes URL-Pattern mit dem Designer: `https://[host]:[port]`. 
Wenn der Designer aufgrund von Problemen mit dem Zertifikat nicht mehr erreichbar ist, löschen Sie die `tls.json` aus Ihrem Installationsverzeichnis, z.B. `C:\Program Files\Theobald Software\yunIO\config\servers\tls.json`.
Starten Sie anschließend den Server neu.


### Services, Designer und WebSockets 

Definieren Sie hier die Ports für Serviceaufrufe, den Designer-Zugang und WebSocket-Konfigurationen. Gültige Portnummern reichen von 1-65535. 
Es ist nicht empfohlen, Ports unter 1000 zu verwenden, da diese oftmals bereits belegt sind und die Verwendung mit anderen Diensten zu Störungen der Dienste führen kann.

#### Standardports

|Service-Name|HTTP|HTTPS|Beschreibung|
|---|---|---|---|
|Services|8075|8175|Dieser Port wird vom Webserver verwendet, der die Anfragen annimmt, um Services zu starten.|
|Designer|8077|8177|Dieser Port wird genutzt, um den yunIO Designer aufzurufen.|
|WebSockets|8076|8176|Dieser Port wird vom yunIO Designer verwendet, um Konfigurationen, Services, etc. anzupassen.|
