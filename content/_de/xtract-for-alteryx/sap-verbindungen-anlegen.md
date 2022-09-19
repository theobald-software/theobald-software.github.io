---
ref: xtract-for-alteryx-04
layout: page
title: SAP-Verbindung 
description: SAP-Verbindung konfigurieren
product: xtract-for-alteryx
parent: xtract-for-alteryx
permalink: /:collection/:path
weight: 4
redirect_from:
  - de/xtract-for-alteryx/einfuehrung/sap-verbindung
  - de/xtract-for-alteryx/einfuehrung/sap-verbindungen-anlegen
lang: de_DE
progressstate: 5
---

Um die Xtract for Alteryx-Komponente zu verwenden, ist Sie eine SAP-Verbindung notwendig.

### SAP-Verbindung Erstellen
1. Ziehen Sie aus der Alteryx-Designer-Toolbox per Drag-and-Drop eine beliebige Xtract for Alteryx-Komponente (z.B. Xtract Table (1)) auf die Arbeitsfläche. Das Konfigurationsfenster wird geöffnet. 
![Create-New-Table-Extraction](/img/content/xfa/xfa_create_table_extraction_01.png){:class="img-responsive"}
2. Im Unterabschnitt **Connection** öffnen Sie das Dropdown-Menü (2), um alle SAP-Systeme anzuzeigen, die mit dem lokalen Rechner verbunden sind.
3. Klicken Sie auf **[New]** um eine neue Verbindung anzulegen. Das Fenster "SAP Connection Details" wird geöffnet. 


### Verbindungsdetails
Das Fenster "SAP Connection Details" besteht aus vier Unterabschnitten:
- System
- Client and Language
- Authentication
- Miscellaneous

![Connection details](/img/content/xfa/xfa_connection-det.png){:class="img-responsive"}

Ergänzen Sie die Verbindungsdetails, um eine SAP-Verbindung herzustellen.

{: .box-tip }
**Tipp:** Die richtigen Werte finden Sie im SAP-Logon-Pad unter *Properties*. Alternativ können Sie sich an Ihre SAP-Basis wenden.

{: .box-note }
**Hinweis:** Die Verbindungsdetails einer SAP-Verbindung werden als JSON-Datei in folgendem Verzeichnis abgelegt:<br>
`C:\Users\<UserName>\AppData\Roaming\Theobald Software\Xtract for Alteryx\Connections\<SAPSourceName>.json`


### System
Es gibt zwei Möglichkeiten eine Verbindung zu einem SAP-Quellsystem herzustellen:

- Verwendung eines Single-Application-Servers (Anwendungsserver) (1)
	- **Host**:  Hostname oder IP-Adresse des Anwendungsservers (Property Host) 
	- **Sys. No.:**: eine zweistellige Zahl zwischen 00 und 99 (Property SystemNumber)

- Verwendung eines Load-Balancing-Servers (Message-Servers) (2)
	- **Message Server**: Name oder IP-Adresse des Message-Servers (Property MessageServer) 
	- **Group**: Einstellung LogonGroup, meistens *PUBLIC*
	- **SID**: Dreistellinge System-ID (Property SID z.B. MSS) 
	
Mehr Details dazu finden Sie auch in der SAP Online-Hilfe: [Load Balancing](https://help.sap.com/saphelp_nwpi711/helpdata/en/c4/3a644c505211d189550000e829fbbd/content.htm?no_cache=true).

#### Zugriff über SAP-Router

Wenn Sie auf ein SAP-Quellsystem (Anwendungsserver oder Message-Server) mittels eines SAP-Routers zugreifen, müssen Sie den Router-String vor dem Hostnamen setzen. <br>
Beispiel:<br>
Wenn der Hostname "hamlet" und der Router-String ``/H/lear.theobald-software.com/H/`` lauten, muss das Feld der Host-Einstellung folgendermaßen befüllt werden: ``/H/lear.theobald-software.com/H/hamlet``.

Mehr Details dazu finden Sie in der SAP Online-Hilfe: [SAP-Router](https://help.sap.com/viewer/6d9a59096c4b1014b507f15bed51571f/7.01.22/en-US/486b41efb74c07bee10000000a42189d.html).


![Details](/img/content/xfa/xfa_connection-det-02.png){:class="img-responsive"}<br> 

### Client and Language
- Client - eine dreistellige Nummer des SAP-Mandats zwischen 000 und  999, z.B. 800.
- Language - die Logon-Sprache des SAP-Systems z.B. EN für Englisch oder DE für Deutsch.

### Authentifizierung
Die folgenden Authentifizierungsmethoden werden unterstützt:
-  SNC (3) (Secure Network Communication) -  encrypted connection between Xtract for Alteryx and SAP with username and password. For more details see the official [SAP Help Site](https://help.sap.com/viewer/6f3e0bea6c4b101484fcf5305b4d624b/7.01.22/en-US/e656f466e99a11d1a5b00000e835363f.html).
-  Plain (4) - SAP-Benutzername und Passwort (System- oder Dialog-Benutzer)

#### SNC
1. Überprüfen Sie den SAP parameter snc/gssapi_lib *snc/gssapi_lib* um zu bestimmen, welche Bibliothek für die Verschlüsselung in Ihrem SAP System verwendet wird. 
Ihre SAP-Basis muss auf dem Anwendungsserver und auf dem Rechner, auf dem Xtract for Alteryx installiert ist, die gleiche Bibliothek importieren und konfigurieren.
2. Wenn Sie SNC verwenden, achten Sie darauf den vollständigen Pfad zum Speicherort der SNC Bibliothek anzugeben, z.B. ``C:\SNC\gx64krb5.dll``.
3. Geben Sie den SAP-Partnernamen (Partner Name) ein, der für den SAP-Anwendungsserver konfiguriert ist z.B. ``p:SAPserviceERP/do_not_care@THEOBALD.LOCAL``.

Zusätzlich können Sie auch [SAP Log On Ticket](https://kb.theobald-software.com/erpconnect-samples/how-to-login-to-sap-with-an-sso-logonticket) (5) zur Authentifizierung verwenden. 

### Miscellaneous
Wählen Sie eine Bibliothek aus und definieren Sie optional ein Verzeichnis für das Debug-Logging.

#### RFC libraries (RFC-Bibliotheken) (6)
Die RFC API (Remote Function Call) erlaubt den Aufbau einer RFC-Verbindung zu einem ABAP basierten SAP-System von einem externen System, welches als Client oder Server mit dem SAP-System kommunizieren kann.  
Es gibt zwei Möglichkeiten die RFC-Bibliotheken zu nutzen:
- mit der RFC library (librfc32.dll) - Klassische RFC Bibliothek
- mit der NetWeaver RFC libraries - NetWeaver RFC Bibliothek (sapnwrfc.dll)


Weitere Informationen finden Sie in der SAP Online-Help [SAP Help Site - RFC Libraries](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm). <br>

SAP hat den [Support für die librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/) eingestellt. 

{: .box-note }
**Hinweis:** Wenn Sie die NetWeaver RFC-Bibliothek bei DeltaQ oder OHS-Extraktionen nutzen, muss die RFC-Destination in der SM59 auf Unicode eingestellt sein. 

#### Trace Directory (Verzeichnis zur Ablage der Debug-Logs)

Sie haben die Möglichkeit Debug-Informationen zu loggen und lokal abzulegen. Füllen Sie das Feld **Trace directory** mit einem Pfad zu einem lokalen Verzeichnis aus, in das Sie die Debug-Informationen speichern wollen.
Weitere Informationen finden Sie im Knowledge-Base-Artikel [*How to activate tracing for Xtract Products*](https://support.theobald-software.com/helpdesk/KB/View/14455-how-to-activate-tracing-for-xtract-products).

Leeren Sie das Feld**Trace Directory** , wenn Debug-Logging nicht mehr gebraucht wird.

{: .box-warning }
**Warnung!: ****Erhöhter Verbrauch des Festplattenspeichers** <br>
Bei der Aktivierung des Debug-Logging wird eine große Menge an Informationen gesammelt. Dies kann die Kapazität Ihrer Festplatten drastisch verringern.
Aktivieren Sie das Debug-Logging nur bei Bedarf, z.B. auf Anfrage des Support-Teams.


### Neu angelegte SAP-Verbindung überprüfen
1. Klicken Sie auf **[Test Connection]** (7) , um eine erfolgreiche Verbindung zu überprüfen. Das Bestätigungsfenster wird geöffnet.
Die SAP-Verbindung ist erfolgreich aufgebaut. 
![Connection test](/img/content/xfa/xfa_test-con.png){:class="img-responsive"}
2. Prüfen Sie im Konfigurationsfenster (linke Fensterseite), ob die angelegte SAP-Verbindung aufgelistet ist.<br>
