---
ref: yunio-introduction-05
layout: page
title: SAP-Verbindung
description: SAP-Verbindung
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 10
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=sap-verbindungen-anlegen
---


{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um eine Verbindung zu SAP herzustellen, muss der Zugriff auf allgemeine Berechtigungsobjekte verfügbar sein.
Stellen Sie sicher, dass der Zugriff auf die erforderlichen Berechtigungsobjekte möglich ist. Weitere Informationen finden Sie im Knowledge-Base-Artikel zu [SAP Zugriffsrechten](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).


### Eine SAP-Verbindung herstellen

SAP-Verbindungen befinden sich im yunIO Designer unter dem Abschnitt *Connections*.<br>
- Um eine neue Verbindung anzulegen, klicken Sie auf **[Add Connection]** (1). <br>
- Um eine bereits vorhandene Verbindung zu bearbeiten, klicken Sie auf ![Edit](/img/content/yunio/edit.png).

![yunIO-Create-Connection](/img/content/yunio/web-ui.png){:class="img-responsive" }

### Verbindungsdetails

Das Menü zum Erstellen und Bearbeiten von SAP-Verbindungen ist in drei Unterabschnitte unterteilt:
- [System](#system) (2)
- [Authentication](#authentifizierung) (Authentifizierung) (3)
- [Test Connection](#angelegte-sap-verbindung-überprüfen) (4)

Ergänzen Sie die Verbindungsdetails und klicken Sie auf **[Save]**, um eine SAP-Verbindung herzustellen.<br>
![yunIO-Create-Connection](/img/content/yunio/yunio-connections.png){:class="img-responsive" }

{: .box-tip }
**Tipp:** Werte zum Ausfüllen der Felder können Sie die Logon Pad unter *Properties* einsehen oder Sie wenden sich an Ihr SAP-Basis-Team.

### System
Es gibt zwei Möglichkeiten, sich mit einem SAP-Quellsystem zu verbinden:

- Verwendung eines Single Application Servers
	- **Host**:  Name oder IP-Adresse des Applikationsservers (Property *Host*). 
	- **Instance No**: Instanznummer, eine Zahl zwischen 0 und 99 (Property *SystemNumber*).
	- **Client**:  die dreistellige Mandantennummer Ihres SAP-Systems zwischen 000 und 999, z.B. 800. 
	- **Language**: der Sprachschlüssel für die von Ihnen verwendete Sprache, z.B. EN für Englisch oder DE für Deutsch.

- Verwendung eines Load-Balancing/Message-Servers
	- **Logon group**: Logon-Gruppe (Property *LogonGroup*, i.d.R. *PUBLIC*).
	- **Message Server**: Name oder IP-Adresse des Message-Servers (Eigenschaft MessageServer). 
	- **System ID**: Dreistellige System-ID (Property *SID*, z.B. *MSS*). 
	- **Client**:  die dreistellige Mandantennummer Ihres SAP-Systems zwischen 000 und 999, z.B. 800. 
	- **Language**: der Sprachschlüssel für die von Ihnen verwendete Sprache, z.B. EN für Englisch oder DE für Deutsch.

Nähere Informationen zu Load Balancing finden Sie in der [SAP Online-Help: Load Balancing](https://help.sap.com/saphelp_nwpi711/helpdata/en/c4/3a644c505211d189550000e829fbbd/content.htm?no_cache=true).


#### Zugriff über SAP-Router

Wenn Sie auf das SAP-System (Application-Server oder Message-Server) über einen SAP-Router zugreifen, setzen Sie den Router-String unmittelbar vor dem Hostnamen bzw. dem Message-Server. <br>
Beispiel:
Wenn der Anwendungsserver "hamlet" und der Router-String ``/H/lear.theobald-software.com/H/`` lautet, setzen Sie die Host Property auf ``/H/lear.theobald-software.com/H/hamlet``.

Nähere Informationen zu SAP-Routern finden Sie in der [SAP Online-Help: SAP-Router](https://help.sap.com/viewer/6d9a59096c4b1014b507f15bed51571f/7.01.22/en-US/486b41efb74c07bee10000000a42189d.html). <br>


### Authentifizierung

Die folgenden Authentifizierungsmethoden werden unterstützt:
- Plain - SAP-Benutzername und Passwort (System- oder Dialogbenutzer).
- Secure Network Communication (SNC) - Benutzername und Passwort über Basisauthentifizierung.

#### Plain

**User**<br>
SAP-Benutzername.

**Passwort**<br>
Passwort des SAP-Benutzers.<br>

**Request credentials from callers when running services**<br> 
Wenn diese Checkbox aktiv ist, werden SAP-Zugangsdaten verwendet, um den Aufruf von Services einzuschränken.
Gültige SAP-Zugangsdaten können beim Aufruf von yunIO-Services via Basic Authentication übergeben werden.

{: .box-note }
**Hinweis:** Um *Request credentials from callers when running services* zu verwenden, muss [*Anonymous Access*](./server-settings#anonymous-access) aktiviert sein.

#### SNC

Secure Network Connection (SNC) ermöglicht Authentifizierung und Transportverschlüsselung zwischen SAP-Systemen und Drittanbieter-Tools wie yunIO.

1. Überprüfen Sie den SAP-Parameter *snc/gssapi_lib*, um festzustellen, welche Bibliothek in Ihrem SAP-System für die Verschlüsselung verwendet wird.
Ihre SAP-Basis muss dieselbe Bibliothek auf dem Anwendungsserver und auf der Maschine, auf der yunIO ausgeführt wird, importieren und konfigurieren.
2. Geben Sie den vollständigen Pfad zum Bibliotheksspeicherort im Feld **SNC library path** ein, z. B. „C:\Programme\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll“.
3. Geben Sie den für den SAP-Anwendungsserver konfigurierten SAP-Partnernamen in das Feld **SNC partner name** ein, z. B. „p:SAPserviceERP/Alice@THEOBALD.LOCAL“.

### Angelegte SAP-Verbindung testen

Klicken Sie auf **[Test Connection]**, um die Verbindungsparameter zu prüfen. <br>
Je nachdem ob der Verbindungsaufbau zu SAP erfolgreich war oder nicht, öffnet sich in der unteren rechten Ecke des Fensters eine entsprechende Statusmeldung.
