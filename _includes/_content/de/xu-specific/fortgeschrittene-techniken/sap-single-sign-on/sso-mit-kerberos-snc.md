In diesem Abschnitt werden die notwendigen Schritte beschrieben, um Single Sign-On (SSO) mit Secure Network Communication (SNC) und Kerberos Verschlüsselung einzurichten.

{: .box-warning }
**Warnung! Single Sign-On Verfügbarkeit** <br> 
ABAP-Applikationsserver muss auf einem Windows-Betriebssystem laufen, dabei muss SNC mit Kerberos-Verschlüsselung auf SAP-Seite eingestellt sein. <br>


### Was ist SNC?

Secure Network Connection (SNC) seichert die Datenübertragung zu Ihrem SAP-System.
Dafür bietet SNC kryptografische Algorithmen, die Sie auf Ihre Daten anwenden können, um den Schutz Ihrer Daten auf Anwendungsebene zu erhöhen und eine End-to-End Security zu gewährleisten. <br>
Jede Kommunikation, die zwischen SNC-geschützten Komponenten stattfindet ist dadurch gesichert, z-B die Kommunikation zwischen einer SAP-Anwendung und Theobald Produkten.

Es gibt drei Sicherheitsgrade, die Sie mit SNC anwenden können:
- nur Authentifizierung
- Schutz der Integrität
- Schutz der Vertraulichkeit

Für weitere Informationen zu SNC, siehe [SAP Hilfe: SNC](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/de-DE/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true).

### Aktivierung von HTTPS
1. Aktivieren Sie das Zugriffskontrollprotokoll HTTPS (1) innerhalb des Tabs *Web Server* Einstellungen. 
2. Verweisen Sie auf ein vorhandenes [X.509-Zertifikat](../../sicherheit/x.509-zertifikat-installieren) (2).<br>
3. Klicken Sie auf **[OK]** zum Bestätigen. (3)<br>

{: .box-note }
**Hinweis:** Überprüfen Sie die Standardports in Abhängigkeit von Ihrem Produkt. Der Standard HTTPS-Port ist *8165* bei Xtract Universal und
*8197* bei BOARD Connector .


![XU_WebServerSettings_https](/img/content/XU_Server_Settings_Webserver_HTTPS.png){:class="img-responsive"}



### Konfiguration vom Windows AD Service-Account.
Wenn SSO mit Kerberos SNC verwendet wird, muss der Xtract Universal Service unter einem entsprechenden Service Account ausgeführt werden.
Die Vorgehensweise ist in [Xtract Universal Dienst unter einem Windows Dienstkonto ausführen](../service-account) beschrieben.

{: .box-note }
**Hinweis:** Ab Xtract Universal Version 5.0 werden SAP Passwörter anhand eines Schlüssels verschlüsselt, der von dem Windows Dienstkonto abgeleitet wird, unter dem der Xtract Universal Dienst läuft.
Auf die Passwörter kann man nur von diesem Dienstkonto aus zugreifen. Achten Sie darauf, wenn Sie Backups aufspielen oder Dateien auf eine andere Maschine verschieben.
Wenn Sie das Dienstkonto wechseln, müssen Sie Passwörter manuell neu eingeben.

### Servereinstellungen

{: .box-warning}
**Warnung! Inkompatible Bibliothek**  <br>
Xtract-Produkte laufen nur auf einem 64-Bit-Betriebssystem. Die Kerberos Wrapper-Bibliothek gx64krb5.dll (64-Bit Version) ist erforderlich. <br>
Laden Sie die Bibliothek `gx64krb5.dll` direkt aus der [SAP Note 2115486](https://launchpad.support.sap.com/#/notes/2115486) herunter.

1. Kopieren Sie die Kerberos Wrapper-Bibliothek in das Dateisystem des Rechners, auf dem der Xtract Dienst läuft, z.B. nach `C:\SNC\gx64krb5.dll`.
2. Legen Sie die heruntergeladene .dll-Datei auf jedem Rechner ab, auf dem der Designer läuft.
3. Öffnen Sie "Computer Management", indem Sie den folgenden Befehl eingeben: `compmgmt.msc`.
4. Unter **Local Users and Groups** wählen Sie **Groups > Administrators**.
5. Klicken Sie auf **[Add]** (4) um den Service-Account zur lokalen Admingruppe hinzuzufügen (5).<br>
![XU_SSO_WinAD_SPN](/img/content/admin_groups_xu_service_account.png)
6. Öffnen Sie "Local Security policy", indem Sie den folgenden Befehl eingeben: `secpol.msc`. <br>
![XU_SSO_LocSecPol](/img/content/XU_SSO_LocSecPol.png){:class="img-responsive"}
7. Wählen Sie **[Local Policies > User Rights Assignment]**
    - Act as part of the operating system (Als Teil des Betriebssystems handeln) 
    - Impersonate a client after authentication (Sich nach der Authentifizierung als Client ausgeben)
8. Ändern Sie die Registry-Einstellungen des Servers:

**Feld** | **Registry-Eintrag**
------------ | -------------
SubKey | HKEY_LOCAL_MACHINE\SOFTWARE\SAP\gsskrb5
Entry (Eintrag) | ForceIniCredOK
Type (Typ) | REG_DWORD
Value (Wert) | 1


### Einstellungen der SAP-Quelle 

{: .box-note }
**Hinweis:** Eine bestehende [SAP-Verbindung](../../einfuehrung/sap-verbindungen-anlegen) zu einem Single Application Server oder einem Message Server ist die Voraussetzung für die Verwendung von SSO mit SNC.

1. Im Hauptmenü des Designers, navigieren Sie zu **[Server > Manage Sources]**. Das Fenster "Source Details" öffnet sich.<br>
![XU_SSO_SAPSource](/img/content/XU_SSO_SAP_Source.png){:class="img-responsive"}
2. Wählen Sie eine vorhandene SAP-Quellsystem aus und klicken Sie auf **[Edit]** (Bleistift-Symbol).<br>
![Edit-SAP-source](/img/content/edit_sap_source.png){:class="img-responsive"}
3. Aktivieren Sie die Option **SNC** (1) in der Sektion *Authentication*.
4. Markieren Sie die Checkbox *Impersonate authenticated caller (SSO)* (2).
5. Geben Sie den vollständigen Pfad der Kerberos-Bibliothek in das Feld *SNC library* ein.
z.B. `C:\SNC\gx64krb5.dll` (3).
6. Geben Sie die SPN des SAP-Service-Accounts in das Feld *Partner name* ein. Verwenden Sie die folgende Notation: *p:[SPN]@[Domain-FQDN-Uppercase]* (4). 
7. Klicken Sie auf **[Test Connection]**, um Ihre Verbindungseinstellungen zu überprüfen.
8. Klicken Sie auf **[OK]** zum Bestätigen.


{: .box-note}
**Hinweis:** Die SNC-Einstellungen des SAP-Logon-Pads für den Partnernamen unterscheiden sich von denen, die in Xtract-Produkten verwendet werden. 
Das SAP Logon-Pad verwendet den UPN der SAP-Server-Accounts und Xtract-Produkt den Service Principal Name (SPN). Verwenden Sie die folgende Notation:
*p:[SAP Service Account]@[domain]*. Bei SPN's wird im SNC-Partnernamen zwischen Groß- und Kleinschreibung unterschieden.
