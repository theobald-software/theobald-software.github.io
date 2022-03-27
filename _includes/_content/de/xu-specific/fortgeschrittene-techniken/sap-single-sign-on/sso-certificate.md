Dieser Abschnitt beschreibt die notwendigen Schritte, um Single Sign-On (SSO) mit Secure Network Communication (SNC) und Client-Zertifikaten einzurichten.

{: .box-warning }
**Warnung! Single Sign-On Verfügbarkeit** <br> 
Der ABAP-Applikationsserver muss auf einem Windows-Betriebssystem laufen, dabei muss SNC mit SAP Cryptographic Library auf SAP-Seite eingestellt sein. 
Für mehr Informationen zur SAP Cryptographic Library, siehe [SAP-Dokumentation: Verwendung der SAP Cryptographic Library für SNC](https://help.sap.com/viewer/129dc8e26c531014a028840c4c35d3aa/7.0.39/de-DE/4145453c3ff4110ee10000000a11405a.html).<br>


### Was ist SNC?

Secure Network Connection (SNC) sichert die Datenübertragung zu Ihrem SAP-System.
Dafür bietet SNC kryptografische Algorithmen, die Sie auf Ihre Daten anwenden können, um den Schutz Ihrer Daten auf Anwendungsebene zu erhöhen und eine End-to-End Security zu gewährleisten. <br>
Jede Kommunikation, die zwischen SNC-geschützten Komponenten stattfindet ist dadurch gesichert, z-B die Kommunikation zwischen einer SAP-Anwendung und Theobald Produkten.

Es gibt drei Sicherheitsgrade, die Sie mit SNC anwenden können:
- nur Authentifizierung
- Schutz der Integrität
- Schutz der Vertraulichkeit

Für mehr Informationen zu SNC, siehe [SAP Dokumentation: Secure Network Communications](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/de-DE/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true).

### Voraussetzungen

Damit der Server, auf dem Xtract Universal läuft, auf die Zertifikate der Windows-Benutzer zugreifen kann, muss er im Namen der Windows-Benutzer Zertifikate anmelden können.
Dafür wird über den Windows AD Service Account ein Enrollment Agent Zertifikat ausgestellt, das den Server authorisiert, Zertifikate....

- Single Sign-On mit Client-Zertifikaten muss SAP-seitig eingerichtet sein, siehe [SAP-Dokumentation: Single Sign-On mit Client-Zertifikaten](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/202110.001/de-DE/4e1262e31e3d2287e10000000a15822b.html).
- Der XU-Service muss unter einem Windows AD Service Account ausgeführt werden, siehe [Xtract Universal Dienst unter einem Windows Dienstkonto ausführen](../service-account).
- Der Service Account muss dem XU-Service ein Enrollment Agent Zertifikat zur Verfügung stellen, das im Namen von Windows-Benutzern Zertifikate anmelden kann, siehe [X.509 Zertifikat installieren](../../sicherheit/x.509-zertifikat-installieren).

### Zugriffsbeschränkung

Richten Sie eine Zugriffssteuerung für den Designer und den Server ein, siehe [Zugriffssteuerung auf Serverebene](../../sicherheit/zugriffsverwaltung#zugriffssteuerung-auf-serverebene---server-settings).<br>

1. Öffnen Sie die [Server Einstellungen](../../server/server_einstellungen).
2. Aktivieren Sie die Option **Restrict Designer Access to the following users/groups**, um den Zugriff auf den Designer zu beschränken.<br>
![ConfigurationServerSettings_](/img/content/server-settings-sso-certificate-users.png){:class="img-responsive"}
3. Klicken Sie auf **[Add]**, um Windows AD Benutzer auszuwählen, die auf den Designer zugreifen dürfen.<br>
4. Wechseln Sie in den *Web Server* Tab und aktivieren Sie das Zugriffskontrollprotokoll *HTTPS - Restricted to AD user with Designer Access*. 
![WebServerSettings_https](/img/content/server-settings-sso-certificate.png){:class="img-responsive"}
5. Verweisen Sie auf das Enrollment Agent Zertifikat, siehe [X.509 Zertifikat installieren](../../sicherheit/x.509-zertifikat-installieren)..
6. Klicken Sie auf **[OK]**, um Ihre Eingaben zu bestätigen. <br>

{: .box-note }
**Hinweis:** Überprüfen Sie die Standardports in Abhängigkeit von Ihrem Produkt. Der Standard HTTPS-Port ist *8165* bei Xtract Universal und
*8197* bei BOARD Connector.

### Einstellungen der SAP-Quelle 

Erstellen Sie für den SSO mit Client-Zertifikaten eine neue SAP-Quelle:

1. Im Hauptmenü des Designers, navigieren Sie zu **[Server > Manage Sources]**. Das Fenster "Source Details" öffnet sich.<br>
2. Klicken Sie auf **[Add]**, um ein neues SAP-Quellsystem anzulegen.<br>
![Edit-SAP-source](/img/content/edit_sap_source.png){:class="img-responsive"}
3. Öffnen Sie den Tab *General* und geben Sie die Verbindungsdetails zu Ihrem SAP-System ein.
![SAP-Source-Details](/img/content/xu/sap_source-details.png){:class="img-responsive"}
4. Öffnen Sie den Tab *Authentication* und aktivieren Sie die Option **SNC** (1).
![sso-certificate-auth](/img/content/sso-certificate-auth.png){:class="img-responsive"}
5. Geben Sie den vollständigen Pfad der SAP Cryptographic Library in das Feld *SNC library* ein, z.B. `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll`.
Für mehr Informationen zur SAP Cryptographic Library, siehe [SAP-Dokumentation: SAP Cryptographic Library](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/3.0/en-US/f0549a4d52124a38a575295b15923f91.html).
6. Geben Sie die SPN des SAP-Service-Accounts in das Feld *Partner name* ein (2). Verwenden Sie die folgende Notation: *p:[SPN]@[Domain-FQDN-Uppercase]*. 
7. Markieren Sie die Checkbox *Enroll certificate on behalf of caller (Certificate SSO)* (3).
8. Geben Sie den technischen Namen und den Thumbprint des Zertifikats ein (4). Wenn Sie den Namen oder den Thumbprint nicht kennen, wenden Sie sich an das IT-Netzwerkteam, welches das Zertifikat erstellt hat.
9. Klicken Sie auf **[Test Server Connection]**, um Ihre Verbindungseinstellungen zu überprüfen.
10. Klicken Sie auf **[OK]**, um Ihre Eingaben zu bestätigen.

{: .box-note}
**Hinweis:** Die SNC-Einstellungen des SAP-Logon-Pads für den Partnernamen unterscheiden sich von denen, die in Xtract-Produkten verwendet werden. 
Das SAP Logon-Pad verwendet den UPN der SAP-Server-Accounts und Xtract-Produkt den Service Principal Name (SPN). Verwenden Sie die folgende Notation:
*p:[SAP Service Account]@[domain]*. Bei SPN's wird im SNC-Partnernamen zwischen Groß- und Kleinschreibung unterschieden.

{: .box-tip }
**Tipp:** Legen Sie neue Extraktionen in der Testumgebung mit einer einfachen SAP-Verbindung an (z.B. Basic Authentication) und wechseln Sie beim Übergang zur Produktivumgebung die Quelle.

*****

#### Weiterführende Links
- [SAP Dokumentation: Secure Network Communications](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/de-DE/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true).
- [SAP-Dokumentation: Verwendung der SAP Cryptographic Library für SNC](https://help.sap.com/viewer/129dc8e26c531014a028840c4c35d3aa/7.0.39/de-DE/4145453c3ff4110ee10000000a11405a.html).<br>
- [SAP-Dokumentation: SAP Cryptographic Library](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/3.0/en-US/f0549a4d52124a38a575295b15923f91.html)