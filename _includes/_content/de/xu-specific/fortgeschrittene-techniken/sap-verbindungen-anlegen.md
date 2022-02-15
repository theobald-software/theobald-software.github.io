


### Verbindungsdetails

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
- **Plain**: SAP-Benutzername und Passwort (System- oder Dialogbenutzer)
- **Secure Network Communication (SNC)**: Benutzername und Passwort
- [SNC with SSO](../fortgeschrittene-techniken/sap-single-sign-on) (Single Sign On)
- **SAP Log On Ticket**

#### Plain

Geben Sie Ihren SAP-Benutzernamen und Ihr Passwort ein.<br>
![XU-Authentication](/img/content/xu/sap_source-auth.png){:class="img-responsive"} 

**Request SAP credentials from caller when running extractions** <br>
Option nur bei Verwendung der Authentifizierungsmethode *Plain* oder *SNC* verfügbar. 
Die SAP-Anmeldeinformationen in den Feldern *User* und *Password* werden nicht übernommen.
Stattdessen müssen die SAP-Anmeldeinformationen über die Basisauthentifizierung angegeben werden, wenn eine Extraktion ausgeführt wird. 
Das Zwischenspeichern (Result Cache) des Ergebnisses von Extraktionen ist inaktiv.

**Nur Xtract Universal**: Siehe [Power BI Connector](https://help.theobald-software.com/de/xtract-universal/destinationen/Power-BI-Connector#single-sign-on-und-sap-authentifizierung) oder [Alteryx](https://help.theobald-software.com/de/xtract-universal/destinationen/alteryx-de#verbindung) Destinationen für mögliche Beispiele. 

{: .box-note }
**Hinweis:** Die Option **Request SAP credentials from caller when running extractions** erfordert, dass die Extraktionen über [HTTPS - unrestricted](../server/server_einstellungen#web-server) aufgerufen werden.

#### Secure Network Communication (SNC)

![XU-Authentication](/img/content/xu/sap_source-snc1.png){:class="img-responsive"} 

1. Überprüfen Sie den SAP Parameter *snc/gssapi_lib* um zu bestimmen, welche Bibliothek für die Verschlüsselung in Ihrem SAP System verwendet wird.
2. Ihre SAP-Basis muss auf dem Applikationsserver und auf dem Rechner, auf dem Xtract Unversal oder BOARD Connector installiert ist, die gleiche Bibliothek importieren und konfigurieren.
3. Geben Sie in das Feld **SNC library** den vollständigen Pfad zum Speicherort der Bibliotheken an z.B. `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll`.
4. Geben Sie in das Feld **Partner Name** den SAP-Partnernamen ein, der für den SAP-Anwendungsserver konfiguriert ist z.B. `p:SAPserviceERP/do_not_care@THEOBALD.LOCAL`.

Mehr Informationen zu SNC finden Sie im Kowledge Base-Artikel [Enabling Secure Network Communication (SNC) via X.509 certificate](https://kb.theobald-software.com/sap/enable-snc-using-pse-file).

**Use static SAP credentials / Windows service account** <br>
Die SAP-Anmeldeinformationen in den Feldern *User* und *Password* werden für die Authentifizierung verwendet.

**Request SAP credentials from caller** <br>
Die SAP-Anmeldeinformationen in den Feldern *User* und *Password* werden nicht übernommen.
Stattdessen müssen die SAP-Anmeldeinformationen über die Basisauthentifizierung angegeben werden, wenn eine Extraktion ausgeführt wird. 
Das Zwischenspeichern (Result Cache) des Ergebnisses von Extraktionen ist inaktiv.

**Impersonate caller (Kerberos SSO)** <br>
Wenn diese option aktiv ist, folgen Sie den Schritten, die unter [SSO mit Kerberos SNC](../fortgeschrittene-techniken/sap-single-sign-on/sso-mit-kerberos-snc) beschrieben sind.

**Enroll certificate on behalf of caller (Certificate SSO)** <br>
Bald verfügbar.

#### SAP Logon Ticket
Für Informationen zur Authentifizierung mit SAP Logon Tickets, siehe [**SAP Log On Ticket**](../fortgeschrittene-techniken/sap-single-sign-on/sso-mit-sap-logon-ticket).

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

### Test Connection

**Test Designer Connection**<br>
Klicken Sie **[Test Designer Connection]**, um die Verbindung zwischen dem Designer und SAP zu überprüfen. 
Ein Bestätigungsfenster öffnet sich. 

**Test Server Connection**<br>
Klicken Sie **[Test Server Connection]**, um die Verbindung zwischen dem Server und SAP zu überprüfen. 
Ein Bestätigungsfenster öffnet sich. 

### Angelegte SAP-Verbindung überprüfen

1. Im Hauptfenster des Designers navigieren Sie zur Menüleiste und wählen den Menüpunkt **Server > Manage Sources**.<br>
Das Fenster "Manage Sources" öffnet sich.<br>
2. Überprüfen Sie, ob die angelegte SAP-Verbindung aufgelistet ist. 
![XU Manage Sources Fenster](/img/content/xu_manage_source_2.png){:class="img-responsive"}
