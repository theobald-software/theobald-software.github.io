

Das Fenster "Change Source" enthält die Verbindungsdetails und ist in vier Abschnitte unterteilt:
- [General](#general) (Allgemeine Einstellungen)
- [Authentication](#authentication) (Authentifizierung)
- [RFC Options](#miscellaneous) 
- [Access Control](#access-control) (Zugriffsbeschränkung)

Ergänzen Sie die Verbindungsdetails, um eine SAP-Verbindung herzustellen.

{: .box-tip }
**Tipp:** Eingabewerte für die Verbindung können dem SAP Logon Pad unter *Properties* entnommen werden oder wenden Sie sich an Ihr SAP-Basis.
 
### General

![XU-Create-Connection-3-A](/img/content/xu/sap_source-details.png){:class="img-responsive"}

#### System
Es gibt zwei Möglichkeiten, sich mit einem SAP-Quellsystem zu verbinden:
- **Single Application Server** (Verwendung eines Single Application Servers)
	- **Host**:  Name oder IP-Adresse des Applikationsservers (Eigenschaft Host) 
	- **Instance No**: Instanznummer, eine Zahl zwischen 0 und 99 (Eigenschaft SystemNumber)

- **Load Balancing** (message server) (Verwendung eines Load-Balancing / Message-Servers)
	- **Message Server**: Name oder IP-Adresse des Message-Servers (Eigenschaft MessageServer) 
	- **Group**: Logon-Gruppe (Eigenschaft LogonGroup, i.d.R. *PUBLIC*)
	- **SID**: Dreistellige System-ID (Eigenschaft SID, z.B. MSS) 
Für mehr Informationen, siehe [SAP Dokumentation: Load Balancing](https://help.sap.com/saphelp_nwpi711/helpdata/en/c4/3a644c505211d189550000e829fbbd/content.htm?no_cache=true).


#### Zugriff über SAP-Router

Wenn Sie auf das SAP-System (Application-Server oder Message-Server) über einen SAP-Router zugreifen, setzen Sie den Router-String unmittelbar vor dem Hostnamen bzw. dem Message-Server. <br>
Beispiel: <br>
Wenn der Anwendungsserver "hamlet" ist und der Router-String ``/H/lear.theobald-software.com/H/`` lautet, sollten Sie die Host Property auf ``/H/lear.theobald-software.com/H/hamlet`` setzen.

Für mehr Informationen, siehe [SAP Dokumentation: SAP-Router](https://help.sap.com/saphelp_nw70/helpdata/de/4f/992df1446d11d189700000e8322d00/content.htm?no_cache=true). <br>

#### Client and Language 

- **Client (Mandant)**  die dreistellige Mandantennummer Ihres SAP-Systems zwischen 000 und 999, z.B. 800. 
- **Language (Sprache)** der Sprachenschlüssel für die von Ihnen verwendete Sprache, z.B. EN für Englisch oder DE für Deutsch.


### Authentication 
Die folgenden Authentifizierungsmethoden werden unterstützt:
- *Plain*: SAP-Benutzername und Passwort (System- oder Dialogbenutzer).
- *Secure Network Communication (SNC)*: Benutzername und Passwort, Basic Authentifizierung, SSO mit Kerberos, SSO mit Zertifikaten.
- *SAP Log On Ticket*: siehe [SAP Log On Ticket](https://kb.theobald-software.com/xtract-universal/sso-with-logon-ticket).

![XU-Authentication](/img/content/xu/sap_source-auth.png){:class="img-responsive"} 

### Plain Authentication

Geben Sie Ihren SAP-Benutzernamen und Ihr Passwort ein.<br>

**Request SAP credentials from caller when running extractions** <br>
Die SAP-Anmeldeinformationen in den Feldern *User* und *Password* werden nicht übernommen.
Stattdessen müssen die SAP-Anmeldeinformationen über die HTTP Basisauthentifizierung angegeben werden, wenn eine Extraktion ausgeführt wird. 
Das Zwischenspeichern (Result Cache) des Ergebnisses von Extraktionen ist inaktiv.
In Xtract Universal werden Sie zur Eingabe der SAP-Anmeldeinformation aufgefordert, wenn Sie Extraktionen im Designer ausführen, siehe [Eine Extraktion ausführen](./eine-extraktion-ausfuehren).

{: .box-note }
**Hinweis:** Die Option **Request SAP credentials from caller when running extractions** erfordert, dass die Extraktionen über [HTTPS - unrestricted](../server/server_einstellungen#web-server) aufgerufen werden.

### Secure Network Communication (SNC)

Secure Network Connection (SNC) ermöglicht die Authentisierung und Transportverschlüsselung zwischen SAP Systemen untereinander, sowie zwischen SAP und Third-Party-Systemen wie Xtract Universal und Board Connector.

1. Überprüfen Sie den SAP Parameter *snc/gssapi_lib* um zu bestimmen, welche Bibliothek für die Verschlüsselung in Ihrem SAP System verwendet wird.
Ihre SAP-Basis muss auf dem Applikationsserver und auf dem Rechner, auf dem Xtract Unversal oder Board Connector installiert ist, die gleiche Bibliothek importieren und konfigurieren.
3. Geben Sie in das Feld **SNC library** den vollständigen Pfad zum Speicherort der Bibliotheken an z.B. `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll`.
4. Geben Sie in das Feld **Partner Name** den SAP-Partnernamen ein, der für den SAP-Anwendungsserver konfiguriert ist z.B. `p:SAPserviceERP/do_not_care@THEOBALD.LOCAL`.

Mehr Informationen zu SNC finden Sie im Kowledge Base-Artikel [Enabling Secure Network Communication (SNC) via X.509 certificate](https://kb.theobald-software.com/sap/enable-snc-using-pse-file).

![XU-Authentication](/img/content/xu/sap_source-auth-snc1.png){:class="img-responsive"} 

**Use static SAP credentials / Windows service account** <br>
Diese Einstellung aktiviert SNC ohne SSO.
Falls gesetzt, werden die SAP-Anmeldeinformationen in den Feldern **User** und **Password** für die Authentifizierung verwendet.
Der Windows Active Directory Benutzer, in dessen Kontext die Verbindung geöffnet wird, ist der Service Account unter dem der XU Windows Service läuft.
 
**Request SAP credentials from caller** <br>
Diese Einstellung aktiviert SNC mit Benutzer und Passwort.
Die SAP-Anmeldeinformationen in den Feldern *User* und *Password* werden nicht übernommen.
Stattdessen müssen die SAP-Anmeldeinformationen über die Basisauthentifizierung angegeben werden, wenn eine Extraktion ausgeführt wird. 

**SSO - Log in as caller via External ID** <br>
Diese Einstellung aktiviert SSO via External ID.
SSO via External ID verwendet Personal Security Environment (PSE), um ein Vertrauensverhältnis zwischen dem SAP Server und dem Dienstkonto herzustellen, unter dem {% if page.product == "xtract-universal" %}Xtract Universal {% elsif page.product == "board-connector" %}Board Connector {% endif %} ausgeführt wird.
Das erlaubt {% if page.product == "xtract-universal" %}Xtract Universal {% elsif page.product == "board-connector" %}Board Connector{% endif %} jeden SAP Benutzer zu imitieren.<br>
Für mehr Informationen, siehe [Knowledge Base Artikel: SSO with External ID](https://kb.theobald-software.com/xtract-universal/sso-with-external-id).

**SSO - Impersonate caller via Kerberos** <br>
Diese Einstellung aktiviert Kerberos SSO.  
Die Authentifizierung erfolgt über den Windows Active Directory Benutzer des Aufrufers. 
Dafür muss "HTTPS - Restricted to AD users with Designer read access" in den [Server Settings](../server/server_einstellungen#web-server) ausgewählt und eingestellt werden.<br>
Für mehr Informationen, siehe [Knowledge Base Artikel: SSO with Kerberos SNC](https://kb.theobald-software.com/xtract-universal/sso-with-kerberos-snc).

**SSO - Enroll certificate on behalf of caller** <br>
Diese Einstellung aktiviert Certifcate SSO. 
Die Authentifizierung erfolgt über ein Certificate Enrollment (Enroll-On-Behalf-Of) via Active Directory Certificate Services für den Windows AD Benutzer des Aufrufers.
Dafür muss "HTTPS - Restricted to AD users with Designer read access" muss in den [Server Settings](../server/server_einstellungen#web-server) eingestellt sein.<br>
Für mehr Informationen, siehe [Knowledge Base Artikel: SSO with Client Certificates](https://kb.theobald-software.com/xtract-universal/sso-with-client-certificates).

### SAP Logon Ticket

Sie können für die Authentifizierung Single-Sign-On (SSO) mit SAP Logon-Tickets verwenden.
Diese Verbindung ist nicht verschlüsselt.<br>
Für mehr Informationen zur Authentifizierung mit SAP Logon Tickets, siehe [Knowledge Base Artikel: SAP Log On Ticket](https://kb.theobald-software.com/xtract-universal/sso-with-logon-ticket).

![SAP-Logon-Ticket](/img/content/sap-logon-ticket.png){:class="img-responsive"}


**Ticket issuer URL**<br>
Geben Sie die URL des Application Server Java (AS Java) ein, der die Anmeldetickets ausstellt.
Für mehr Informationen, siehe [SAP Dokumentation: AS Java für das Ausstellen von Anmeldetickets konfigurieren](https://help.sap.com/doc/saphelp_nw75/7.5.5/DE-DE/4a/412251343f2ab1e10000000a42189c/frameset.htm).

**Impersonate caller when running extractions**<br>
Wenn diese Option aktiv ist, wird die Verbindung in einem Windows Active Directory Benutzerkontext des Aufrufer geöffnet.
Wenn diese Option inaktiv ist, wird die Verbindung im Kontext des Dienstkontos geöffnet, unter dem der Windows Dienst läuft.
Für mehr Informationen, siehe [Knowledge Base Artikel: SAP Log On Ticket](https://kb.theobald-software.com/xtract-universal/sso-with-logon-ticket).

{: .box-tip }
**Tipp:** Deaktivieren Sie die Option **Impersonate caller when running extractions**, um die Kerberos Authentifizierung gegen den AS Java direkt zu testen.
Als letzten Schritt fügen Sie die Impersonierung hinzu.


### RFC Options
Wählen Sie eine Bibliothek aus und definieren Sie optional ein Verzeichnis für das Debug-Logging.

![XU-Create-Connection-RFC-Options](/img/content/xu/sap_source-rfc.png){:class="img-responsive"}

#### RFC libraries (RFC-Bibliotheken)

Die RFC API (Remote Function Call) erlaubt den Aufbau einer RFC-Verbindung zu einem ABAP basierten SAP-System von einem externen System, welches als Client oder Server mit dem SAP-System kommunizieren kann. <br>
Es gibt zwei Möglichkeiten die RFC-Bibliotheken zu nutzen:
- **Use classic RFC library (librfc32.dll)** - Klassische RFC Bibliothek 
- **Use NetWeaver RFC libraries** - NetWeaver RFC Bibliothek (sapnwrfc.dll)

Für mehr Informationen über SAP-Bibliotheken, siehe [SAP Dokumentation: RFC API - Classical & SAP NetWeaver](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/48/a994a77e28674be10000000a421937/frameset.htm).<br>
SAP hat den [Support für die librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/) eingestellt. 

{: .box-note }
**Hinweis:** Wenn Sie die NetWeaver RFC-Bibliothek bei DeltaQ oder OHS-Extraktionen nutzen, muss die RFC-Destination in der SM59 auf Unicode eingestellt sein.

#### Trace Directory (Verzeichnis zur Ablage der Debug-Logs)
Sie haben die Möglichkeit Debug-Informationen zu loggen. Wenn Sie Debug-Informationen loggen wollen, so muss im Connection Manager in das Feld **Trace Directory** ein gültiger Pfad eintragen werden. <br> 

{: .box-warning }
**Warnung!: Erhöhter Verbrauch des Festplattenspeichers** <br>
Bei der Aktivierung des Debug-Logging wird eine große Menge an Informationen gesammelt. Dies kann die Kapazität Ihrer Festplatten drastisch verringern.
Aktivieren Sie das Debug-Logging nur bei Bedarf, z.B. auf Anfrage des Support-Teams.

### Access Control

Eine Zugriffssteuerung kann auf Datenquellebene (Source-Ebene) vorgenommen werden. 
Diese Zugriffssteuerung übersteuert die Einstellungen auf Serverebene.<br>
Für mehr Informationen, siehe [Zugriffssteuerung](../sicherheit/zugriffsverwaltung).

![XU-Create-Connection-AccessControl](/img/content/xu/sap_source-accesscontrol.png){:class="img-responsive"}

### Test Connection

**Test Designer Connection**<br>
Klicken Sie **[Test Designer Connection]**, um die Verbindung zwischen dem Designer und SAP zu überprüfen. 
Ein Bestätigungsfenster wird geöffnet. 

**Test Server Connection**<br>
Klicken Sie **[Test Server Connection]**, um die Verbindung zwischen dem Server und SAP zu überprüfen. 
Ein Bestätigungsfenster wird geöffnet. 

### Angelegte SAP-Verbindung bearbeiten

1. Navigieren Sie im Hauptfenster des Designers zur Menüleiste und wählen Sie den Menüpunkt **Server > Manage Sources**.<br>
Das Fenster "Manage Sources" wird geöffnet.<br>
2. Überprüfen Sie, ob die angelegte SAP-Verbindung aufgelistet ist. 
![XU Manage Sources Fenster](/img/content/xu_manage_source_2.png){:class="img-responsive"}
3. Klicken Sie auf das ![pen](/img/content/icons/pen.png) Symbol. Das Fenster "Change Source" öffnet sich.
4. Bearbeiten Sie die Einstellungen in "Change Source".

### Eine SAP Quelle einer Extraktion zuweisen

Eine SAP Quelle wird beim Erstellen einer Extraktion angegeben.
Um einer Extraktion eine neue Quelle zuzuweisen, folgen Sie den unten stehenden Anweisungen:
 
1. Wählen Sie im Hauptfenster des Designers eine Extraktion aus der Liste der Extraktionen aus.
2. Klicken Sie auf **[Source]**. Das Fenster "Change Source" öffnet sich.<br>
![Change-Source](/img/content/Change_Source.png){:class="img-responsive"}
3. Wählen Sie eine SAP Quelle aus der Dropdown-Liste aus.
4. Bestätigen Sie Ihre Auswahl mit **[OK]**.
