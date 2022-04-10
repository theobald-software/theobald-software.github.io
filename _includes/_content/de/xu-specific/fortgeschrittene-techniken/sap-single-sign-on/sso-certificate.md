Dieser Abschnitt beschreibt die notwendigen Schritte, um Single Sign-On (SSO) mit Secure Network Communication (SNC) und Client-Zertifikaten einzurichten.

### Was ist SNC?
Secure Network Connection (SNC) ermöglicht die Authentisierung und Transportverschlüsselung zwischen SAP Systemen untereinander, sowie zwischen SAP und Third-Party-Systemen wie Xtract Universal und BOARD Connector.
Für mehr Informationen zu SNC, siehe [SAP Dokumentation: Secure Network Communications](https://help.sap.com/viewer/e73bba71770e4c0ca5fb2a3c17e8e229/LATEST/de-DE/e656f466e99a11d1a5b00000e835363f.html).

### Voraussetzungen

Voraussetzung für die Verwendung der *SSO Certificate* Funktion in Xtract Universal ist die konkrete Ausprägung der Architektur für SSO: 
- SAP SSO ohne Secure Login Server mit X.509 Zertifikaten muss implementiert sein, siehe [SAP-Dokumentation: Authentication Methods without Secure Login Server](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/LATEST/en-US/7c45fe620ab9469083f7ab50a9008c37.html).
- Microsoft Certificate Store und Active Directory Certificate Templates für SAPGUI/RFC müssen implementiert sein, siehe [Microsoft TechNet: Certificate Template](https://social.technet.microsoft.com/wiki/contents/articles/53249.active-directory-certificate-services-enterprise-ca-architecture.aspx#Certificate_Template).
- Ein Enrollment Agent für Xtract Univerval muss im AD eingerichtet werden, siehe [Microsoft TechNet: Establish Restricted Enrollment Agents](https://social.technet.microsoft.com/wiki/contents/articles/10942.ad-cs-security-guidance.aspx#Establish_Restricted_Enrollment_Agents.

_ Secure Login Client + Service Account als konkrete Voraussetzungen auf dem XU Server sind korrekt.
Die Voraussetzung eines Service Accounts ergibt sich aus der Notwendigkeit, Access Control für AD Benutzer einzurichten (Abschnitt Zugriffsbeschränkung).
Die Voraussetzung Secure Login Client ergibt sich daraus, dass man eine SNC Bibliothek angeben muss (Abschnitt SAP Quelle). 
Die einzig korrekte Bibliothek in diesem Szenario ist die, die mit dem Secure Login Client mitkommt und den Secure Login Client beim Öffnen der Verbindung schließlich auch benutzt._

- Der SAP Secure Login Client muss auf dem Xtract Universal Server installiert sein, siehe [SAP-Dokumentation: Secure Login Client](https://help.sap.com/viewer/8ac26ac20064447ba9e65b18e1bb747e/Cloud/en-US/b304e57f6393461dafd7affc2760b05b.html).
- Der Sign-On mit Client-Zertifikaten muss über den SAP Secure Login Client SAP-seitig eingerichtet sein.
- Der XU-Service muss unter einem Windows AD Service Account ausgeführt werden, siehe [Xtract Universal Dienst unter einem Windows Dienstkonto ausführen](../service-account).
- Der Service Account muss Xtract Universal ein Enrollment Agent Zertifikat zur Verfügung stellen, das im Namen von Windows-Benutzern Zertifikate anmelden kann, siehe [X.509 Zertifikat installieren](../../sicherheit/x.509-zertifikat-installieren).

### Zugriffsbeschränkung
_Das ist eigentlich schon hier beschrieben, oder?
https://help.theobald-software.com/en/xtract-universal/security/server-security#restrict-access-to-windows-ad-users-kerberos-authentication

Punkt 5 ist nicht korrekt. Das Enrollment Agent Zertifikat wird nur in der SAP Quelle angegeben per Thumbprint._

Richten Sie die Zugriffsbeschränkung für den Designer und den Server ein:<br>

1. Öffnen Sie die [Server Einstellungen](../../server/server_einstellungen).
2. Aktivieren Sie die Option **Restrict Designer Access to the following users/groups**, um den Zugriff auf den Designer zu beschränken.<br>
![ConfigurationServerSettings_](/img/content/server-settings-sso-certificate-users.png){:class="img-responsive"}
3. Klicken Sie auf **[Add]**, um Windows AD Benutzer auszuwählen, die auf den Designer zugreifen dürfen.<br>
4. Wechseln Sie in den *Web Server* Tab und aktivieren Sie das Zugriffskontrollprotokoll *HTTPS - Restricted to AD user with Designer Access*. 
Damit können nur Benutzer, die Designer-Zugriff haben, Extraktionen aufrufen.
![WebServerSettings_https](/img/content/server-settings-sso-certificate.png){:class="img-responsive"}
5. Verweisen Sie auf das Enrollment Agent Zertifikat, um Zugriff auf die Client-Zertifikate der Benutzer zu erhalten, siehe [X.509 Zertifikat installieren](../../sicherheit/x.509-zertifikat-installieren)..
6. Klicken Sie auf **[OK]**, um Ihre Eingaben zu bestätigen. <br>

{: .box-note }
**Hinweis:** Überprüfen Sie die Standardports in Abhängigkeit von Ihrem Produkt. Der Standard HTTPS-Port ist *8165* bei Xtract Universal und
*8197* bei BOARD Connector.

### Einstellungen der SAP-Quelle 

Erstellen Sie für den SSO mit Client-Zertifikaten eine neue SAP-Quelle:

1. Navigieren Sie im Hauptmenü des Designers zu **[Server > Manage Sources]**. Das Fenster "Manage Sources" öffnet sich.<br>
2. Klicken Sie auf **[Add]**, um ein neues SAP-Quellsystem anzulegen.<br>
3. Öffnen Sie den Tab *General* und geben Sie die Verbindungsdetails Ihres SAP-Systems ein.
![SAP-Source-Details](/img/content/xu/sap_source-details.png){:class="img-responsive"}
4. Öffnen Sie den Tab *Authentication* und aktivieren Sie die Option **SNC**.
![sso-certificate-auth](/img/content/sso-certificate-auth.png){:class="img-responsive"}
5. Geben Sie den vollständigen Pfad der 64-bit-Version der SAP-Cryptographic-Library in das Feld *SNC library* ein, z.B. `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll`.
Die SAP Crypto Library wird bei der Installation des SAP Secure Login Clients mitinstalliert.
6. Geben Sie den SNC Partnernamen des SAP Systems in das Feld *Partner name* ein. Dies ist der selbe Partnername, der auch bei der Einrichtung von SAPGUI benötigt wird.
7. Aktivieren Sie die Option **Enroll certificate on behalf of caller (Certificate SSO)**.
8. Geben Sie den technischen Namen des Active Directory Certificate Templates an, das für die Authentisierung von SAP Benutzern verwendet wird.
9. Geben Sie den Thumbprint des Zertifikats des Enrollment Agents an (4). Wenn Sie den Namen oder den Thumbprint nicht kennen, wenden Sie sich an die IT-Abteilung, welche die Active Directory Certificate Services betreut.
9. Klicken Sie auf **[Test Client Connection]**, um Ihre Verbindungseinstellungen zu überprüfen.
10. Klicken Sie auf **[OK]**, um Ihre Eingaben zu bestätigen.

{: .box-tip }
**Tipp:** Legen Sie neue Extraktionen in der Testumgebung mit einer SAP-Verbindung mit Plain Authentication an.
Wechseln Sie beim Übergang zur Produktivumgebung die SAP-Quelle.

*****

#### Weiterführende Links
- [SAP Dokumentation: Secure Network Communications](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/de-DE/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true)
- [SAP-Dokumentation: Secure Login Client](https://help.sap.com/viewer/8ac26ac20064447ba9e65b18e1bb747e/Cloud/en-US/b304e57f6393461dafd7affc2760b05b.html)
- [SAP Dokumentation: Logging on with Secure Login Client Using SNC](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/3.0/en-US/68a6caca798e4adbba5608fb69ea6398.html)

