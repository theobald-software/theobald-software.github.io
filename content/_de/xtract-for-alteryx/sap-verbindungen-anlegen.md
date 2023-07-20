---
ref: xtract-for-alteryx-40
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

Dieser Artikel wird kurzzeitig nur in englischer Sprache angeboten:
[SAP Connection](https://help.theobald-software.com/en/xtract-for-alteryx/sap-connection)


*****
#### Weiterführende Links
- [Alteryx Documentation: Data Connection Manager - Server](https://help.alteryx.com/20223/server/dcm-server)

<!---
Der folgende Abschnitt zeigt Ihnen, wie Sie eine SAP-Verbindung erstellen.<br>
Eine SAP-Verbindung ist notwendig, um Xtract for Alteryx-Komponenten zu verwenden.

### SAP-Verbindung erstellen
1. Ziehen Sie aus der Alteryx-Designer-Toolbox eine Xtract for Alteryx-Komponente auf die Arbeitsfläche (1). Das Konfigurationsfenster geöffnet sich. 
2. Klicken Sie auf **[New]** (2) um eine neue Verbindung anzulegen. Das Fenster "SAP Connection Details" öffnet sich. 
3. Ergänzen Sie die Verbindungsdetails, um eine SAP-Verbindung herzustellen.<br>
Die Verbindungsdetails bestehen aus vier Unterabschnitten: [System](#system), [Client and Language](#client-and-language), [Authentication](#authentifizierung) und [Miscallaneous](#miscellaneous).<br>
4. Klicken Sie auf **[Test Connection]**, um die SAP-Verbindung zu testen. Ein Bestätigungsfenster öffnet sich.<br>
5. Klicken Sie auf **[OK]**, um die SAP-Verbindung zu speichern.

Die SAP-Verbindung kann nun im Konfigurationsfenster ausgewählt werden (2).<br>
Um die SAP-Verbindung zu bearbeiten, wählen Sie die SAP-Verbindung aus der Dropdown-Liste (2) aus und klicken Sie auf **[Edit]**.

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
	
Für mehr Informationen, siehe [SAP Dokumentation: Load Balancing](https://help.sap.com/saphelp_nwpi711/helpdata/en/c4/3a644c505211d189550000e829fbbd/content.htm?no_cache=true).

#### Zugriff über SAP-Router

Wenn Sie auf ein SAP-Quellsystem (Anwendungsserver oder Message-Server) mittels eines SAP-Routers zugreifen, müssen Sie den Router-String vor dem Hostnamen setzen. <br>
Beispiel: Wenn der Hostname "hamlet" und der Router-String ``/H/lear.theobald-software.com/H/`` lauten, muss das Feld der Host-Einstellung folgendermaßen befüllt werden: ``/H/lear.theobald-software.com/H/hamlet``.

Für mehr Informationen, siehe [SAP Dokumentation: SAP-Router](https://help.sap.com/viewer/6d9a59096c4b1014b507f15bed51571f/7.01.22/en-US/486b41efb74c07bee10000000a42189d.html).

### Client and Language
- **Client**: eine dreistellige Nummer des SAP-Mandats zwischen 000 und  999, z.B. 800.
- **Language**: die Logon-Sprache des SAP-Systems z.B. *EN* für Englisch oder *DE* für Deutsch.

### Authentifizierung
Die folgenden Authentifizierungsmethoden werden unterstützt:
- **SNC** (1): verschlüsselte Verbindung zwischen Xtract for Alteryx und SAP with Benutzernamen und Passwort. Für mehr Informationen, siehe [SAP Dokumentation: Secure Network Communications (SNC)](https://help.sap.com/viewer/6f3e0bea6c4b101484fcf5305b4d624b/7.01.22/de-DE/e656f466e99a11d1a5b00000e835363f.html).
- **Plain** (2): SAP-Benutzername und Passwort (System- oder Dialog-Benutzer)
- **SAP Log On Ticket** (3): verwendet SAP Logon-Tickets anstelle der Benutzerdaten. Diese Verbindung ist nicht verschlüsselt.


#### SNC (1)
1. Überprüfen Sie den SAP parameter snc/gssapi_lib *snc/gssapi_lib* um zu bestimmen, welche Bibliothek für die Verschlüsselung in Ihrem SAP System verwendet wird. 
Ihre SAP-Basis muss auf dem Anwendungsserver und auf dem Rechner, auf dem Xtract for Alteryx installiert ist, die gleiche Bibliothek importieren und konfigurieren.
2. Wenn Sie SNC verwenden, achten Sie darauf den vollständigen Pfad zum Speicherort der SNC Bibliothek anzugeben, z.B. ``C:\SNC\gx64krb5.dll``.
3. Geben Sie den SAP-Partnernamen (Partner Name) ein, der für den SAP-Anwendungsserver konfiguriert ist z.B. ``p:SAPserviceERP/do_not_care@THEOBALD.LOCAL``.

Für mehr Informationen über SNC, siehe den Knowledge Base Artikel [Enabling Secure Network Communication (SNC) via X.509 certificate](https://kb.theobald-software.com/sap/enable-snc-using-pse-file).

#### Plain (2)
Geben Sie in den Feldern **User** und **Password** Ihren SAP-Benutzernamen und Ihr Passwort ein.

#### SAP Log On Ticket (3)
Geben Sie in dem Feld **Ticket issuer** die URL des Application Server Java (AS Java) ein, der die Anmeldetickets ausstellt. <br>
Für mehr Informationen, siehe [SAP Dokumentation: AS Java für das Ausstellen von Anmeldetickets konfigurieren](https://help.sap.com/doc/saphelp_nw75/7.5.5/DE-DE/4a/412251343f2ab1e10000000a42189c/frameset.htm).

### Miscellaneous
Wählen Sie eine RFC Bibliothek aus. Die folgenden Bibliotheken werden untertsützt:
- **RFC library (librfc32.dll)** - Klassische RFC Bibliothek
- **NetWeaver RFC libraries** - NetWeaver RFC Bibliothek (sapnwrfc.dll)

Die RFC API (Remote Function Call) erlaubt den Aufbau einer RFC-Verbindung zu einem ABAP basierten SAP-System von einem externen System, welches als Client oder Server mit dem SAP-System kommunizieren kann. 
Für mehr Informationen, siehe [SAP Dokumentation: RFC Libraries](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm). 

SAP hat den [Support für die librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/) eingestellt. 

{: .box-note }
**Hinweis:** Wenn Sie die NetWeaver RFC-Bibliothek bei DeltaQ oder OHS-Extraktionen nutzen, muss die RFC-Destination in der SM59 auf Unicode eingestellt sein. 

**Trace Directory**<br>
Sie können Debug-Informationen loggen und lokal ablegen. 
Geben Sie im Feld **Trace directory** einen Pfad zu einem lokalen Verzeichnis ein, in dem die Debug-Informationen gespeichert werden sollen.
Für mehr Informationen, siehe den Knowledge Base Artikel [How to activate tracing for Xtract Products](https://support.theobald-software.com/helpdesk/KB/View/14455-how-to-activate-tracing-for-xtract-products).<br>
Leeren Sie das Feld **Trace Directory**, wenn es nicht mehr gebraucht wird.

{: .box-warning }
**Warnung!: ****Erhöhter Verbrauch des Festplattenspeichers** <br>
Bei der Aktivierung des Debug-Logging wird eine große Menge an Informationen gesammelt. Dies kann die Kapazität Ihrer Festplatten drastisch verringern.
Aktivieren Sie das Debug-Logging nur bei Bedarf, z.B. auf Anfrage des Support-Teams.
--->