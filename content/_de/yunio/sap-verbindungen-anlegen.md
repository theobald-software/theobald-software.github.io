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

### Eine SAP-Verbindung herstellen

{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um eine Verbindung zu SAP herzustellen, muss der Zugriff auf allgemeine Berechtigungsobjekte verfügbar sein.
Stellen Sie sicher, dass der Zugriff auf die erforderlichen Berechtigungsobjekte möglich ist. Weitere Informationen finden Sie im Knowledge-Base-Artikel zu [SAP Zugriffsrechten](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).

Die Einstellungen für SAP-Verbindungen befinden sich im yunIO Designer unter dem Abschnitt *Connections*.<br>
- Um eine neue Verbindung anzulegen, klicken Sie auf **[Add Connection]** (1). <br>
- Um eine bereits vorhandene Verbindung zu bearbeiten, klicken Sie auf das ![Edit](/img/content/yunio/edit.png) Icon der Verbindung (2).

![yunIO-Create-Connection](/img/content/yunio/web-ui.png){:class="img-responsive" }

### Verbindungsdetails

Das Menü zum Erstellen und Bearbeiten von SAP-Verbindungen ist in drei Unterabschnitte unterteilt:
- [System](#system) (3)
- [Authentication](#authentifizierung) (Authentifizierung) (4)
- [Test Connection](#angelegte-sap-verbindung-überprüfen) (5)

Ergänzen Sie die Verbindungsdetails und klicken Sie auf **[Save]**, um eine SAP-Verbindung herzustellen.<br>
![yunIO-Create-Connection](/img/content/yunio/yunio-connections.png){:class="img-responsive" width="750px" }

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

Nähere Informationen zu SAP-Routern finden Sie in der [SAP Online-Help: SAP-Router](https://help.sap.com/saphelp_snc700_ehp01/helpdata/en/48/6e2ef629540e27e10000000a421937/frameset.htm). <br>


### Authentifizierung

<!----- Die folgenden Authentifizierungsmethoden werden unterstützt:
- Plain - SAP-Benutzername und Passwort (System- oder Dialogbenutzer).
- HTTP Basic Authentication - Basisauthentifizierung bei Ausführung der Extraktion.--->
<!---- - SNC (Secure Network Communication) (2) mit einem Benutzernamen und einem Passwort--->
<!----- [SNC with SSO](../fortgeschrittene-techniken/sap-single-sign-on) (Single Sign On) --->

**User**<br>
SAP-Benutzername.

**Passwort**<br>
Passwort des SAP-Benutzers.<br>

**Request credentials from callers when running services**<br> 
Wenn diese Checkbox aktiv ist, werden die eingegebenen SAP-Anmeldeinformationen aus *User* und *Password* nicht übernommen.
Stattdessen müssen die SAP-Anmeldeinformationen über die Windows Basic Authentifizierung angegeben werden, sobald eine Extraktion ausgeführt wird. 

{: .box-note }
**Hinweis:** Um *Request credentials from callers when running services* zu verwenden, muss [*Anonymous Access*](./server-settings#anonymous-access) aktiviert sein.


### Angelegte SAP-Verbindung überprüfen

Klicken Sie auf **[Test Connection]**, um die Verbindungsparameter zu prüfen. <br>
Je nachdem ob der Verbindungsaufbau zu SAP erfolgreich war oder nicht, öffnet sich in der unteren rechten Ecke des Fensters eine entsprechende Statusmeldung.
