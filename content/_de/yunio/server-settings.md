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

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für yunIO.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für yunIO](https://helpcenter.theobald-software.com/yunio/).

Dieser Abschnitt enthält Informationen über die yunIO Server-Einstellungen.<br>
Öffnen Sie die Einstellungen unter dem Menüpunkt **Settings**. 
Speichern Sie Änderungen der Einstellungen mit **[Save]**.

{: .box-note }
**Hinweis:** Starten Sie den yunIO-Service neu, um die Änderungen zu übernehmen.

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

Die Option **OpenAPI Target Kind** definiert Eigenschaften, die der Swagger/OpenAPI-JSON-Datei von yunIO-Diensten hinzugefügt werden können.

- *Default*: <br>
Wenn diese Option aktiv ist, enthält die Swagger/OpenAPI-JSON-Datei keine zusätzlichen Eigenschaften.
- *Nintex Gateway*: <br>
Wählen Sie diese Option, wenn Sie yunIO-Dienste mit dem [Nintex Gateway](https://help.nintex.com/en-US/nwc/Content/Gateway/InstallAndConfigure.htm) integrieren. 
Nintex-Eigenschaften werden zur Swagger/OpenAPI-JSON-Datei hinzugefügt und es besteht keine Notwendigkeit, die Swagger-Definition manuell zu ändern.
Weitere Informationen finden Sie im Knowledge Base Artikel [Integrating a yunIO Service via Nintex Gateway](https://kb.theobald-software.com/yunio/integrating-yunio-via-nintex-gateway).


### Transport Layer Security

Das *Transport Layer Security (TLS)*-Protokoll ermöglicht eine verschlüsselte Datenübertragung.
Wenn TLS aktiviert ist, wird auf den jeweiligen Service über eine HTTPS-Verbindung zugegriffen.
Dafür muss ein X.509 Zertifikat installiert sein, siehe [Knowledge Base: Installing an X.509 Certificate](https://kb.theobald-software.com/yunio/x509-certificate). <br>
Für mehr Informationen zu TLS, siehe [Microsoft: TLS-Protokoll](https://docs.microsoft.com/de-de/windows/win32/secauthn/transport-layer-security-protocol).


#### Zertifikatszugriff
1. Importieren Sie das Zertifikat mithilfe der Microsoft Management Console (mmc) in den Windows-Zertifikatspeicher.
2. Wenn das Zertifikat nicht im Menü oder im Windows-Zertifikatspeicher aufgeführt ist, installieren Sie das X.509-Zertifikat.
Das Zertifikat muss einen *alternativen Antragstellernamen (Subject Alternative Name)* haben. Bei der Aktivierung von TLS, wird der *alternative Antragstellername (Subject Alternative Name)* als neuer Hostname verwendet. 
Ein benutzerdefinierter Hostname kann unter der Einstellung [Services Endpoint](#endpoint) eingegeben werden.
3. Nachdem Sie das gewünschte X.509-Zertifikat importiert haben, verwalten Sie dessen private Schlüssel, um einen Berechtigungseintrag für den Windows-Benutzer hinzuzufügen.
4. Klicken Sie auf **[Pick Certificate]** und wählen Sie ein X.509-Zertifikat aus der Liste der verfügbaren Zertifikate aus.
5. Geben Sie "NT Service\yunIO Service" innerhalb der Objektauswahl-Benutzeroberfläche ein. Überprüfen Sie die erteilte Berechtigung und übernehmen Sie die Änderungen.
![Access](/img/content/yunio/x509-certificate-permission.png){:class="img-responsive" }

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
