---
ref: erpconnect-02
layout: page
title: SAP-Verbindung
description: SAP-Verbindung
product: erpconnect
parent: erpconnect
childidentifier: sap-verbindung
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=sap-verbindung
---

Für die Anmeldung an einem SAP-System müssen Sie folgende Daten angeben: 
1. Mandant
2. Sprache
3. Authentifizierung
4. SAP-Zielsystem
5. SAP-Router

Abgesehen davon können Sie wählen, ob Sie die klassiche oder die Netweaver RFC-Bibliothek (API) verwenden wollen, wobei die klassische RFC API die Standardeinstellung ist. 

**Mandant** 

Die dreistellige Mandantennummer Ihres SAP-Systems, z.B. 800. 

**Sprache**

Den Sprachenschlüssel für die von Ihnen verwendete Sprache, z.B. DE für Deutsch oder EN für Englisch. 

**Authentifizierung**

Für die Authentifizierung können Sie einen SAP-Benutzername und Kennwort eigeben. <br>
Insgesamt werden aber folgende Authentifizierungsformen unterstützt: <br>
a. SAP-Benutzername und Passwort<br>
b. SNC (Secure Network Communication) mit Benutzername und Passwort<br>
c. SNC mit SSO (Single Sign On) <br>
d. Log On Ticket (verfügbar nur für ERPConnect und ERPConnect Services)<br>

SAP Library: [SNC](https://help.sap.com/saphelp_nw70ehp1/helpdata/de/e6/56f466e99a11d1a5b00000e835363f/frameset.htm?original_fqdn=help.sap.de)<br>
SAP Library: [SNC Parameters](https://help.sap.com/saphelp_nw73ehp1/helpdata/de/d9/e8a740bbaa4d8f8bee6f7b173bd99f/frameset.htm) 

**Zielsystem**

Das SAP-Zielsystem, welches ein Application Server oder ein Message Server (Load Balancing) sein kann.

Im Fall eines Applikationsservers werden folgende Angaben benötigt: 

- Name oder IP-Adresse des Applikationsservers (Eigenschaft Host) 
- Systemnummer, eine Zahl zwischen 0 und 99 (Eigenschaft SystemNumber)

Im Fall von einer Anmeldung an einem Message Server (Load Balancing) sind folgende Daten zu füllen:

- Dreistellige System-ID (Eigenschaft SID, z.B. MSS) 
- Name oder IP-Adresse des Message-Servers (Eigenschaft MessageServer) 
- Logon-Gruppe (Eigenschaft LogonGroup, i.d.R. ist das PUBLIC)

SAP Library: [Load Balancing](https://help.sap.com/saphelp_dm40/helpdata/de/22/04295c488911d189490000e829fbbd/content.htm?no_cache=true)

**SAP-Router**

Falls Sie auf das SAP-System (Application-Server oder Message-Server) über einen SAP-Router zugreifen, setzen Sie den Routerstring unmittelbar vor dem Hostnamen bzw. dem Message-Server. 

SAP Library: [SAP-Router](https://help.sap.com/saphelp_nw70/helpdata/de/4f/992df1446d11d189700000e8322d00/content.htm?no_cache=true) 

**RFC-Bibliothek (API)**: Klassich oder Netweaver. 

Die RFC API (Remote Function Call) erlaubt den Aufbau einer RFC-Verbindung zu einem SAP-System von einem externen System, welches als Client oder Server mit dem SAP-System kommunizieren kann. 
Die RFC API existiert in zwei unterschiedlichen Versionen: 
- Klassiche RFC-API (klassische RFC-Bibliothek).
- Netweaver-RFC-API (Netweaver RFC-Bibliothek). 

Achtung: Die Netweaver-RFC-Option unterstützt kein DeltQ und kein OHS. 

SAP Library: [RFC API: Classical & NetWeaver](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm) 

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}