---
ref: yunio-server-05
layout: page
title: X.509-Zertifikat installieren
description: Ein X.509-Zertifikat installieren
product: yunio
parent: server
permalink: /:collection/:path
weight: 5
lang: de_DE
---

Für Transportverschlüsselung und Authentisierung wird ein X.509-Zertifikat benötigt.

Es gibt zwei Ansätze für die Erstellung eines X.509-Zertifikats:
- Ein von einer (internen) Zertifizierungsstelle (CA) freigegebenes Zertifikat 
- Ein selbst signiertes Zertifikat (self-signed certificate)

{: .box-note }
**Hinweis:** In Testumgebungen können Sie ein selbst signiertes Zertifikat verwenden. Für Ihre Produktionsumgebung wird ein von einer (internen) Zertifizierungsstelle (CA) freigegebenes Zertifikat empfohlen. 


### X.509-Zertifikat erstellen

Lassen Sie ein TLS Zertifikat von Ihrem IT-Netzwerk-Team unter Beachtung folgender Punkte erstellen:

- In der Zertifikatseigenschaft “Subject Alternative Name” muss der DNS Name des Servers stehen, auf dem der Windows-Service (z.B. Xtract Universal Service oder BOARD Connector Service) läuft.
- Das Zertifikat muss im [Windows Certificate Store](https://technet.microsoft.com/en-us/ms788967(v=vs.91)) auf dem Server hinterlegt werden, auf dem der Windows-Service läuft.<br>
- Das Zertifikat muss den Hostnamen des Servers in der Common-Name (CN) Eigenschaft enthalten. 

{: .box-tip }
**Tipp:** Um den Common-Name (CN) des Zertifikats anzeigen zu lassen, doppel-klicken Sie auf das Zertifikat im Cetrificate Manager und navigieren Sie zum Tab *Details*.

### X.509-Zertifikat einbinden

1. Importieren Sie das Zertifikat über die Microsoft Management Console (mmc) in den Windows Certificate Manager. <br>
Im abgebildeten Beispiel lautet der Servername "TODD":
![XU-X509-MMC](/img/content/XU-X509-MMC.png){:class="img-responsive"}
2. Verweisen Sie auf das Zertifikat im Designer unter **Settings > Transport Layer Security**. 
Klicken Sie auf **[Pick Certificate]** und wählen Sie das Zertifikat aus der Liste verfügbarer Zertifikate aus. <br>
![TransportLayerSecurity](/img/content/yunio/Settings_transportlayersecurity.png){:class="img-responsive" width="800px" }
![TransportLayerSecurity-List](/img/content/yunio/tls-pickcertificate.png){:class="img-responsive" width="800px"}
![TransportLayerSecurity-Details](/img/content/yunio/tls-certificate.png){:class="img-responsive" width="800px"}
3. Aktivieren Sie die Option **TLS enabled**, um das *Transport Layer Security*-Protokoll zu aktivieren, siehe [Transport Layer Security](./server-einstellungen#transport-layer-security).<br>
4. Speichern Sie die Einstellungen. Die vorgenommenen Änderungen werden durch den Neustart des yunIO-Servers aktiviert.


#### Weiterführende Links:
- [Enabling Secure Network Communication (SNC) via X.509 certificate](https://kb.theobald-software.com/sap/enable-snc-using-pse-file)
