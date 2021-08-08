


### Verbindungsdetails

Der Tab *General* enthält die Verbindungsdetails und ist in vier Unterabschnitte unterteilt:
- [System](#system)
- [Client and Language](#client-and-language) (Mandant und Sprache)
- [Authentication](#authentication) (Authentifizierung)
- [Miscellaneous](#miscellaneous) (Verschiedenes)
![XU-Create-Connection-3-A](/img/content/xu/sap_source-details.png){:class="img-responsive"}

Ergänzen Sie die Verbindungsdetails, um eine SAP-Verbindung herzustellen.


Klicken Sie **[Test Connection]** (1), um eine erfolgreiche Verbindung zu SAP zu überprüfen. 
Das Bestätigungsfenster öffnet sich. <br>
Die SAP-Verbindung ist erfolgreich aufgebaut. 
![XU-Create-Connection-3](/img/content/xu_test_connection.png){:class="img-responsive"}


### System
Es gibt zwei Möglichkeiten, sich mit einem SAP-Quellsystem zu verbinden:

1. Use Single Application Server (Verwendung eines Single Application Servers)
- **Host**:  Name oder IP-Adresse des Applikationsservers (Eigenschaft Host) 
- **Instance No**: Instanznummer, eine Zahl zwischen 0 und 99 (Eigenschaft SystemNumber)

2. Use Load Balancing Server (message server) (Verwendung eines Load-Balancing / Message-Servers)
- **Message Server**: Name oder IP-Adresse des Message-Servers (Eigenschaft MessageServer) 
- **Group**: Logon-Gruppe (Eigenschaft LogonGroup, i.d.R. *PUBLIC*)
- **SID**: Dreistellige System-ID (Eigenschaft SID, z.B. MSS) 
Siehe auch SAP Online-Help: [Load Balancing](https://help.sap.com/saphelp_nwpi711/helpdata/en/c4/3a644c505211d189550000e829fbbd/content.htm?no_cache=true).


#### Zugriff über SAP-Router

Wenn Sie auf das SAP-System (Application-Server oder Message-Server) über einen SAP-Router zugreifen, setzen Sie den Router-String unmittelbar vor dem Hostnamen bzw. dem Message-Server. <br>
Beispiel: <br>
Wenn der Anwendungsserver "hamlet" ist und der Router-String ``/H/lear.theobald-software.com/H/`` lautet, sollten Sie die Host Property auf ``/H/lear.theobald-software.com/H/hamlet`` setzen.

Siehe auch SAP Online-Help: [SAP-Router](https://help.sap.com/saphelp_nw70/helpdata/de/4f/992df1446d11d189700000e8322d00/content.htm?no_cache=true). <br>

{: .box-tip }
**Tipp:** Falls Sie nicht wissen, welche Parameter einzugeben sind, können Sie die Informationen im SAP Logon Pad in den *Properties* nachschauen. Ansonsten fragen Sie Ihre SAP-Basis.
 

### Client and Language 

- Client (Mandant) -  die dreistellige Mandantennummer Ihres SAP-Systems zwischen 000 und 999, z.B. 800. 
- Language (Sprache) - der Sprachenschlüssel für die von Ihnen verwendete Sprache, z.B. EN für Englisch oder DE für Deutsch.


### Authentication 
Die folgenden Authentifizierungsmethoden werden unterstützt:
- Plain (1) - SAP-Benutzername und Passwort (System- oder Dialogbenutzer)
- SNC (Secure Network Communication) (2) mit einem Benutzernamen und einem Passwort
- [SNC with SSO](../fortgeschrittene-techniken/sap-single-sign-on) (Single Sign On) (3)
	
![XU-Authentication](/img/content/xu/sap-details-authentication.png){:class="img-responsive"} 
Zusätzlich können Sie auch [SAP Log On Ticket](../fortgeschrittene-techniken/sap-single-sign-on/sso-mit-sap-logon-ticket) zur Authentifizierung verwenden (verfügbar nur für einige Produkte, z.B. ERPConnect, ERPConnect Services, Xtract Universal und BOARD Connector).

**Require SAP credentials to be explicitly supplied for execution** (4) <br>
Option nur bei Verwendung der Authentifizierungsmethode *Plain* oder *SNC* verfügbar. Die in die Felder *User* und *Password* eingegebenen SAP-Anmeldeinformationen werden nicht übernommen.
Stattdessen müssen die SAP-Anmeldeinformationen über die Basisauthentifizierung angegeben werden, wenn eine Extraktion ausgeführt wird. 
Das Zwischenspeichern (Result Cache) des Ergebnisses von Extraktionen ist inaktiv.

**Nur Xtract Universal**: Siehe [Power BI Connector](https://help.theobald-software.com/de/xtract-universal/destinationen/Power-BI-Connector/pbi-SSO) oder [Alteryx](https://help.theobald-software.com/de/xtract-universal/destinationen/alteryx-de/einstellungen-alteryx-plugin-de#verbindung) Destinationen für mögliche Beispiele. 

{: .box-note }
**Hinweis:** Die Option "Require SAP credentials to be explicitly supplied for execution" erfordert, dass die Extraktionen über [HTTPS - unrestricted](../server/server_einstellungen#web-server) aufgerufen werden.


#### SNC

1. Überprüfen Sie den SAP parameter snc/gssapi_lib um zu bestimmen, welche Bibliothek für die Verschlüsselung in Ihrem SAP System verwendet wird.
2. Ihre SAP-Basis muss auf dem Applikationsserver und auf dem Rechner, auf dem Xtract Unversal oder BOARD Connector installiert ist, die gleiche Bibliothek importieren und konfigurieren.
3. Geben Sie in den SNC-Bibliotheksfeldern (**SNC library**) den vollständigen Pfad zum Speicherort der Bibliotheken z.B. `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll`.
4. Geben Sie den SAP-Partnernamen (**Partner Name**) ein, der für den SAP-Anwendungsserver konfiguriert ist z.B. `p:SAPserviceERP/do_not_care@THEOBALD.LOCAL`.

Weitere Informationen finden Sie im Knowledgebase-Artikel [Enabling Secure Network Communication (SNC) via X.509 certificate](https://kb.theobald-software.com/sap/enable-snc-using-pse-file).

Wenn Sie die Kerberos-Bibliothek verwenden, folgen Sie den Schritten beschrieben in  [SSO mit Kerberos SNC](../fortgeschrittene-techniken/sap-single-sign-on/sso-mit-kerberos-snc).

### Miscellaneous

Wählen Sie eine Bibliothek aus und definieren Sie optional ein Verzeichnis für das Debug-Logging.


#### RFC libraries (RFC-Bibliotheken)
Die RFC API (Remote Function Call) erlaubt den Aufbau einer RFC-Verbindung zu einem ABAP basierten SAP-System von einem externen System, welches als Client oder Server mit dem SAP-System kommunizieren kann. <br>
Es gibt zwei Möglichkeiten die RFC-Bibliotheken zu nutzen:
- Use classic RFC library (librfc32.dll) - Klassische RFC Bibliothek 
- Use NetWeaver RFC libraries - NetWeaver RFC Bibliothek (sapnwrfc.dll)


Weitere Informationen finden Sie auf der SAP Help-Seite [RFC API: Classical & SAP NetWeaver](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/48/a994a77e28674be10000000a421937/frameset.htm).<br>
SAP hat den [Support für die librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/) eingestellt. 

{: .box-note }
**Hinweis:** Wenn Sie die NetWeaver RFC-Bibliothek bei DeltaQ oder OHS-Extraktionen nutzen, muss die RFC-Destination in der SM59 auf Unicode eingestellt sein.


#### Trace Directory (Verzeichnis zur Ablage der Debug-Logs)
Sie haben die Möglichkeit Debug-Informationen zu loggen. Wenn Sie Debug-Informationen loggen wollen, so muss im Connection Manager in das Feld **Trace Directory** ein gültiger Pfad eintragen werden. <br> 

{: .box-warning }
**Warnung!: Erhöhter Verbrauch des Festplattenspeichers** <br>
Bei der Aktivierung des Debug-Logging wird eine große Menge an Informationen gesammelt. Dies kann die Kapazität Ihrer Festplatten drastisch verringern.
Aktivieren Sie das Debug-Logging nur bei Bedarf, z.B. auf Anfrage des Support-Teams.



### Angelegte SAP-Verbindung überprüfen

1. Im Hauptfenster des Designers navigieren Sie zur Menüleiste und wählen Sie den Menüpunkt **Server > Manage Sources**.<br>
Das Fenster "Manage Sources" wird geöffnet.<br>
2. Überprüfen Sie, ob die angelegte SAP-Verbindung aufgelistet ist. 
![XU Manage Sources Fenster](/img/content/xu_manage_source_2.png){:class="img-responsive"}
