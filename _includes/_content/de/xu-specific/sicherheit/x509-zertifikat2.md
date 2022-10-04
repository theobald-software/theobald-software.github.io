Für Transportverschlüsselung und Authentisierung wird ein X.509-Zertifikat benötigt.

Es gibt zwei Ansätze für die Erstellung eines X.509-Zertifikats für SSO mit Kerberos SNC erstellen:
- Ein von einer (internen) Zertifizierungsstelle (CA) freigegebenes Zertifikat 
- Ein selbst signiertes Zertifikat (self-signed certificate)

{: .box-note }
**Hinweis:** In Testumgebungen können Sie ein selbst signiertes Zertifikat verwenden. Für Ihre Produktionsumgebung wird ein von einer (internen) Zertifizierungsstelle (CA) freigegebenes Zertifikat empfohlen. 

### X.509-Zertifikat für SSO mit Kerberos SNC erstellen

Lassen Sie ein TLS Zertifikat von Ihrem IT-Netzwerk-Team unter Beachtung folgender Punkte erstellen:

- In der Zertifikatseigenschaft “Subject Alternative Name” muss der DNS Name des Servers stehen, auf dem der Windows-Service (z.B. Xtract Universal Service oder Board Connector Service) läuft.
- Das Zertifikat muss im [Windows Certificate Store](https://technet.microsoft.com/en-us/ms788967(v=vs.91)) auf dem Server hinterlegt werden, auf dem der Windows-Service läuft.<br>
- Das Zertifikat muss den Hostnamen des Servers in der Common-Name (CN) Eigenschaft enthalten. 

{: .box-tip }
**Tipp:** Um den Common-Name (CN) des Zertifikats anzeigen zu lassen, doppelklicken Sie auf das Zertifikat im Cetrificate Manager und navigieren Sie zum Tab *Details*.

### X.509-Zertifikat für SSO mit Client-Zertifikaten erstellen

Lassen Sie ein Enrolment Agent Zertifikat von Ihrem IT-Netzwerk-Team unter Beachtung folgender Punkte erstellen:

- Das Zertifikat authorisiert die Beantragung von Client-Zertifikaten über "Enroll on Behalf of..."
- Das Zertifikat muss im [Windows Certificate Store](https://technet.microsoft.com/en-us/ms788967(v=vs.91)) auf dem Server hinterlegt werden, auf dem der Windows-Service läuft.<br>


### X.509-Zertifikat einbinden

1. Importieren Sie das Zertifikat über die Microsoft Management Console (mmc) in den Windows Certificate Manager. <br>
Im abgebildeten Beispiel lautet der Servername "TODD":
![XU-X509-MMC](/img/content/XU-X509-MMC.png){:class="img-responsive"}
2. Verweisen Sie auf das Zertifikat im Designer unter **Server > Settings > Tab *Web Server* > [Select X.509 certificate]**. 
Der Name des aktuell gespeicherten Zertifikats wird im unteren Bereich des Fensters angezeigt.
![Server-settings_manage](/img/content/server-settings_manage.png){:class="img-responsive"}
![Server-settings_manage](/img/content/server-settings-certificate-web.png){:class="img-responsive"}
![Server-settings_manage](/img/content/certificate-edit-location.png){:class="img-responsive"}
![Server-new-start](/img/content/xu/restart-server.png){:class="img-responsive"}
3. Bestätigen Sie mit **[OK]**. Die vorgenommenen Änderungen werden durch den Neustart des XU-Server aktiviert.


#### Weiterführende Links:
- [Enabling Secure Network Communication (SNC) via X.509 certificate](https://kb.theobald-software.com/sap/enable-snc-using-pse-file)
