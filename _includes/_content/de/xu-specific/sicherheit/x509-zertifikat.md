Einige der Funktionalitäten unserer Software erfordern die Installation eines X.509-Zertifikats für Datensicherheit und -verschlüsselung. <br>
In diesem Abschnitt werden die Voraussetzungen für die Installation eines X.509-Zertifikats beschrieben.

Lassen Sie ein TLS Zertifikat von Ihrem IT Netzwerk Team erstellen. Stellen Sie bitte folgendes sicher:

- In der Zertifikatseigenschaft “Subject Alternative Name” muss der DNS Name des Servers stehen, auf dem der Windows-Dienst (z.B. Xtract Universal oder Board Connector) läuft. Ansonsten erscheint das Zertifikat nicht im Lookup Dialog.
- Das Zertifikat muss im Windows Certificate Store auf dem Server, auf dem der Windows-Dienst (z.B. Xtract Universal oder Board Connector) läuft, hinterlegt werden.
- Das Zertifikat muss den Hostnamen des Servers in der Common-Name (CN) Eigenschaft enthalten. 


In Testumgebungen können Sie ein selbst signiertes Zertifikat verwenden. Für Ihre Produktionsumgebung empfehlen wir, ein von einer (internen) Zertifizierungsstelle (CA) freigegebenes Zertifikat zu verwenden. 


**Importieren Sie das Zertifikat über die Microsoft Management Console (mmc) in den Windows Certificate Store**
![XU-X509-MMC](/img/content/XU-X509-MMC.png){:class="img-responsive"}

<br>

**Verweisen Sie auf das Zertifikat (hier in Xtract Universal)**
![XU-X509-Lookup](/img/content/XU-X509-Lookup.png){:class="img-responsive"}




 
