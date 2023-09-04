### Über diese Seite
Nach der Installation von {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %}, wird der {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} Service unter dem lokalen System-Account (Local System) ausgeführt.
In den folgenden Szenarien muss der Service stattdessen unter einem Windows Service-Account ausgeführt werden:

- [Kerberos Authentifizierung](../sicherheit/serversicherheit#zugriffsbeschränkung-auf-windows-ad-benutzer-kerberos-authentifizierung) für den {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} Webserver verwenden.
- Windows Authentizizierung für eine {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} Destination verwenden, die Windows-Anmeldedaten erlauben (z.B. SQL Server Destination, PostgreSQL Destination).
- [SSO mit Kerberos SNC](https://kb.theobald-software.com/xtract-universal/sso-with-kerberos-snc) verwenden.
- [SSO mit SAP Logon Tickets](https://kb.theobald-software.com/xtract-universal/sso-with-logon-ticket).

Dieser Abschnitt enthält Informationen darüber, wie man den Xtract Universal Service unter einem Service-Account ausführt.

{: .box-note }
**Hinweis:** Ab {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} Version 5.0 werden SAP Passwörter anhand eines Schlüssels verschlüsselt, der von dem Windows Service-Account abgeleitet wird, unter dem der {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} Service läuft.
Auf die Passwörter kann man nur von diesem Service-Account aus zugreifen. Achten Sie darauf, wenn Sie Backups aufspielen oder Dateien auf eine andere Maschine verschieben.
Wenn Sie das Service-Account wechseln, müssen Sie Passwörter manuell neu eingeben.

### Allgemeine Einstellungen

1. Erstellen Sie ein Windows AD Service-Account und weisen Sie ihm eine SPN (Service Principal Name) im folgenden Format zu: ```HTTP/[FQDN of {% if page.product == "xtract-universal" %}XU{% else %}BC{% endif %} Server]```.<br>
Mit dem ```setspn``` Befehl können die SPNs eines Service-Accounts eingesehen werden.
![xu service account](/img/content/xu/xu-service-account-SPN.png){:class="img-responsive"}

2. Gewähren Sie Zugriffsrechte auf {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %}'s Installationsordner und allen Unterordnern des Service-Accounts wie in folgendem Screenshot:
![xu service account permissions](/img/content/xu/xu-service-account-permissions.png){:class="img-responsive"}

3. Falls anwendbar, stellen Sie sicher, dass das Service-Account Lese-Zugriff auf den privaten Schlüssel des [X.509 Zertifikats](../sicherheit/x.509-zertifikat-installieren) hat.
![xu service account private key 1](/img/content/xu/xu-service-account-privatekey_1.png){:class="img-responsive"}
![xu service account private key 2](/img/content/xu/xu-service-account-privatekey_2.png){:class="img-responsive"}

4. Führen Sie den {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} Service unter dem Service-Account aus. Stellen Sie sicher, dass die korrekte Domäne verwendet wird (z.B. *.Firma.local* anstatt *.Firma.com*).
![xu service account services](/img/content/xu/xu-service-account-services.png){:class="img-responsive"}

5. Im Startfenster "Connect to {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} Server" vom {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} Designer wählen Sie *Windows credentials* oder *Custom Credentials (Kerberos authentication)* als *Authentication* aus. Geben Sie den UPN (User Principal Name) des Service-Accounts als *Target Principal* wie im Knowledge Base Artikel ["How to use target principal field"](https://kb.theobald-software.com/xtract-universal/target-principal-TPN) beschrieben ein.<br>
{% if page.product == "xtract-universal" %}![xu service account login](/img/content/xu/xu-service-account-login.png){:class="img-responsive"}{% else %}![bc service account login](/img/content/bc-service-account-login.png){:class="img-responsive"}{% endif %}

### Einstellungen für SSO mit Kerberos SNC

Wenn Sie [SSO mit Kerberos SNC](https://kb.theobald-software.com/xtract-universal/sso-with-kerberos-snc) verwenden, sind zusätzliche Schritte nötig:<br>

1. Konfigurieren Sie für den Windows Service-Account, unter dem der {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} Service ausgeführt wird, eine eingeschränkte Delegierung.
![xu_service_account_constr_deleg](/img/content/XU_SSO_WinAD_Delegation.png){:class="img-responsive"}
2. Geben Sie den SPN, unter dem der SAP ABAP Server ausgeführt wird (SAP Service Account), z.B. SAPServiceERP/do_not_care.
Weitere Informationen über die Notation des Partnernamen in SAP finden Sie im [SAP Help Portal](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/de-DE/440ebb40b9920d1be10000000a114a6b.html).


*********
#### Weiterführende Links
- [Über Service Logon Accounts](https://docs.microsoft.com/de-de/windows/win32/ad/about-service-logon-accounts)
- [Service Principal Names](https://docs.microsoft.com/de-de/windows/win32/ad/service-principal-names)
