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

Im folgenden Abschnitt wird gezeigt, wie Sie mit dem [Data Connection Manager](https://help.alteryx.com/20231/designer/dcm-designer) (DCM) von Alteryx eine SAP-Verbindung erstellen.<br>
Für die Nutzung einer beliebigen Xtract for Alteryx-Komponente ist eine SAP-Verbindung erforderlich.

{: .box-note }
**Hinweis:** Der Alteryx Data Connection Manager ist ab Alteryx Designer Version 2021.4 verfügbar.
Wenn Sie eine ältere Version des Alteryx Designers verwenden, lesen Sie den Knowledge-Base-Artikel[Creating an SAP Connecion](https://kb.theobald-software.com/xtract-for-alteryx/xtract-sap-connection), um SAP-Verbindungen mithilfe der Xtract for Alteryx-Benutzeroberfläche zu erstellen.

## Xtract Data Source

Sie können Xtract Data Sources (Datenquellen) mit Anmeldeinformationen kombinieren, um eine SAP-Verbindung herzustellen. <br>
Die Installation von Xtract für Alteryx beinhaltet die Xtract Data Source Technologie, die eine Verbindung zu SAP-Systemen herstellt.

### Eine Xtract Data Source Erstellen

1. Navigieren Sie im Hauptmenü des Alteryx Designers zu **File > Manage Connections**. Das Fenster „Connection Manager" wird geöffnet.
2. Klicken Sie im Tab *Data Sources* auf **[New]**, um eine neue Data Source zu erstellen.<br>
3. Wählen Sie die **Xtract**-Technologie aus, um eine Xtract-Data Source zu erstellen.
4.Füllen Sie die Data Source Einstellungen für Ihr SAP-System aus, siehe [Data Source Settings](#data-source-settings).<br>
![Data-Connection-Manager](/img/content/xfa/dcm/data-connection-manager.png){:class="img-responsive"}
4. Klicken Sie auf **[Save]** um die SAP-Verbindung zu speichern. Der Unterabschnitt *Connection* wird angezeigt.
5. Im Unterabschnitt *Connection* wählen Sie eine der folgenden Authentifizierungsmethoden:<br>
- [*Plain*](#plain-authentication) verwendet den SAP-Benutzernamen und das Passwort.
- [*SNC*](#secure-network-communication-snc) nutzt eine verschlüsselte Verbindung zwischen Xtract for Alteryx und SAP mit Benutzername und Passwort.
- [*Ticket Issuer*](#sap-logon-ticket) verwendet SAP Logon-Tickets anstelle von Benutzeranmeldeinformationen. Diese Verbindung ist nicht verschlüsselt.
6. Wählen Sie einen [vorhandenen Benutzer](#benutzerinformationen-erstellen) für Ihr SAP-System aus oder klicken Sie auf **+ Connect Credentials**, um einen neuen Benutzer zu erstellen.
7. Klicken Sie auf **[Link]** / **[Create and link]** um den Benutzer mit der Verbindung zu verknüpfen. Beispiel:<br>
![new-data-source](/img/content/xfa/dcm/new-data-source.gif){:class="img-responsive" style="border:1px solid black;"}

Die SAP-Verbindung steht nun in den Xtract für Alteryx-Komponenten zur Auswahl.


### Data Source Einstellungen

<!---
An SAP data source consists of the following settings:<br>
![Data-Connection-Manager](/img/content/xfa/dcm/data-connection-manager.png){:class="img-responsive"}
-->

**Technology**<br>
Es gibt zwei Möglichkeiten, eine Verbindung zu einem SAP-Quellsystem herzustellen:
- *SAP Application Server* verwendet einen Single-Application-Server.
	- **Host**: Hostname oder IP-Adresse des Application-Servers (Property Host).
	- **Sys. No.:**:Eine zweistellige Zahl zwischen 00 und 99 (Property SystemNumber)
- *SAP Load Balancing* verwendet einen Load-Balancing-Server. Weitere Informationen finden Sie unter [SAP Help: Load Balancing](https://help.sap.com/saphelp_nwpi711/helpdata/en/c4/3a644c505211d189550000e829fbbd/content.htm?no_cache=true).
	- **Message Server**: Name oder IP-Adresse des Message-Servers (Property MessageServer) 
	- **Group**:Eigenschaft LogonGroup, normalerweise *PUBLIC*
	- **SID**: Dreistellige System-ID (Eigenschafts-SID, z. B. MSS)
	
{: .box-tip }
**Tipp:** Werte zum Ausfüllen der Data-Source-Einstellungen finden Sie im SAP-Logon-Pad in den *Properties* (Einstellungen) oder über die Anfrage bei dem SAP-Basis-Team.
	
**Data Source Name**<br>
Name der Verbindung.

**Client**<br>
Eine dreistellige Nummer des SAP-Mandanten zwischen 000 und 999, z. B. 800.

**Language**<br> 
Die Anmeldesprache für das SAP-System, z. B. EN für Englisch oder DE für Deutsch

#### Advanced Options (Erweiterte Optionen)

**Client RFC Library**<br>
Wählen Sie eine RFC-Bibliothek aus. Die folgenden RFC-Bibliotheken werden unterstützt:
- NetWeaver RFC library (sapnwrfc.dll)
- Classic RFC library (librfc32.dll)

Die RFC API (Remote Function Call) ermöglicht den Aufbau einer RFC-Verbindung zu einem SAP-System von einem externen System, das als Client oder Server mit dem SAP-System kommuniziert.
Weitere Informationen zu SAP-Bibliotheken finden Sie unter[SAP Help: RFC Libraries](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm). 

SAP stoppte die Unterstützung für die [Bibliothek librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/). 

**Trace Directory**<br>
Sie können Debug-Informationen protokollieren und lokal speichern. Geben Sie im Feld **Trace Directory** einen lokalen Pfad zu einem Ordner ein, in dem Sie die Debug-Informationen speichern möchten.
Weitere Informationen finden Sie im Knowledge-Base-Artikel [How to activate tracing for Xtract Products](https://support.theobald-software.com/helpdesk/KB/View/14455-how-to-activate-tracing-for-xtract-products).<br>
Leeren Sie das Feld **Trace Directory**, wenn es nicht benötigt wird.

{: .box-warning }
**Warnung!: Erhöhung des genutzten Festplattenspeichers** <br>
Wenn die Debug-Logging aktiviert ist, wird eine große Menge an Informationen gesammelt. Dies kann die Kapazität Ihrer Festplatten drastisch verringern.
Aktivieren Sie die Debug-Logging nur bei Bedarf, z. B. auf Anfrage des Support-Teams.


## Benutzerinformationen und Authentifizierung

Sie können SAP Data Sources mit Benutzerinformationen kombinieren, um eine SAP-Verbindung herzustellen. <br>
Die Benutzerinformationen im DCM umfassen die Definition der Authentifizierungsmethode, die für die Verbindung mit SAP verwendet wird.

### Benutzerinformationen Erstellen

<!---
The SAP connection for Xtract for Alteryx uses existing credentials from the Data Connection Manager.<br>
If no credentials exist, follow the steps below to add credentials for your SAP connection:
-->

1. Navigieren Sie im Hauptmenü des Alteryx Designers zu **File > Manage Connections**. Das Fenster "Connection Manager" wird geöffnet.
2. In the tab *Credentials* click **[New]** to create a new credential.<br>
![Credentials](/img/content/xfa/dcm/credentials.png){:class="img-responsive"}
3. Enter a name for the credential and select one of the following authentication methods: <br>
- [*Username and password*](#plain-authentication) uses the SAP username and password.
- [*SAP SNC*](#secure-network-communication-snc) uses an encrypted connection between Xtract for Alteryx and SAP with username and password. 
- [*SAP Ticket Issuer*](#sap-logon-ticket) uses SAP Logon-Tickets in place of user credentials. This connection is not encrypted.
4. Fill out the authentication details.
5. Click **[Save]** to save the credential.

The credential is displayed in the list of credentials.

{: .box-tip }
**Tip:** You can link credentials to multiple data sources.

### Plain Authentication

Enter your SAP username and password.

![Plain-Credential](/img/content/xfa/dcm/plain.png){:class="img-responsive"}

### Secure Network Communication (SNC)

Secure Network Connection (SNC) enables authentication and transport encryption between SAP systems and between SAP systems and third-party tools like Xtract for Alteryx.

1. Check the SAP parameter *snc/gssapi_lib* to determine which library is used for encryption in your SAP system.
Make sure your SAP basis imports and configures the same library on the application server and on the machine that runs Xtract for Alteryx.
2. When using SNC, make sure to enter the complete path of the library in the field **SNC library** e.g., ``C:\SNC\gx64krb5.dll``.
3. Enter the SAP **Partner Name** configured for the SAP application server e.g., ``p:SAPserviceERP/example@THEOBALD.LOCAL``.

For more information, see [SAP Help: Secure Network Communications (SNC)](https://help.sap.com/viewer/6f3e0bea6c4b101484fcf5305b4d624b/7.01.22/en-US/e656f466e99a11d1a5b00000e835363f.html) or refer to the knowledge base article [Enabling Secure Network Communication (SNC) via X.509 certificate](https://kb.theobald-software.com/sap/enable-snc-using-pse-file).

![SNC-Credential](/img/content/xfa/dcm/snc.png){:class="img-responsive"}

### SAP Logon Ticket

You can use Single-Sign-On (SSO) with SAP Logon-Tickets for authentication. This connection is not encrypted.

Enter the URL of an Application Server Java (AS Java) that is configured to issue logon tickets in the field **Ticket issuer**. <br>
For more information, see [SAP Documentation: Configuring the AS Java to Issue Logon Tickets](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4a/412251343f2ab1e10000000a42189c/frameset.htm).

![SAP-Logon-Ticket-Credential](/img/content/xfa/dcm/logon-tickets.png){:class="img-responsive"}

## Assigning an SAP Connection to an Xtract Component

1. Drag&drop an Xtract for Alteryx component from the Alteryx Designer toolbox onto the canvas (1). The configuration window of the component opens.<br>
![Create-New-Table-Extraction](/img/content/xfa//xfa_create_table_extraction_02.png){:class="img-responsive"}
2. Select an SAP connection from the dropdown list (2).

{: .box-note }
**Note:** If no SAP connections are available, create an SAP connection in the Alteryx Connection Manager, see [Creating an SAP Connection](#creating-an-sap-connection).



*****
#### Weiterführende Links
- [Alteryx Documentation: Data Connection Manager - Server](https://help.alteryx.com/20223/server/dcm-server)

