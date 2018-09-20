---
layout: page
title: SAP-Verbindung
description: SAP-Verbindung
product: erpconnect
parent: erpconnect
childidentifier: sap-verbindung
permalink: /:collection/:path
weight: 3
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

SAP Library: [SNC]()<br>
SAP Library: [SNC Parameters]() 

**Zielsystem**

Das SAP-Zielsystem, welches ein Application Server oder ein Message Server (Load Balancing) sein kann.

Im Fall eines Applikationsservers werden folgende Angaben benötigt: 

- Name oder IP-Adresse des Applikationsservers (Eigenschaft Host) 
- Systemnummer, eine Zahl zwischen 0 und 99 (Eigenschaft SystemNumber)

Im Fall von einer Anmeldung an einem Message Server (Load Balancing) sind folgende Daten zu füllen:

- Dreistellige System-ID (Eigenschaft SID, z.B. MSS) 
- Name oder IP-Adresse des Message-Servers (Eigenschaft MessageServer) 
- Logon-Gruppe (Eigenschaft LogonGroup, i.d.R. ist das PUBLIC)

SAP Library: [Load Balancing]()

**SAP-Router**

Falls Sie auf das SAP-System (Application-Server oder Message-Server) über einen SAP-Router zugreifen, setzen Sie den Routerstring unmittelbar vor dem Hostnamen bzw. dem Message-Server. 

SAP Library: [SAP-Router]() 

**RFC-Bibliothek (API)**: Klassich oder Netweaver. 

Die RFC API (Remote Function Call) erlaubt den Aufbau einer RFC-Verbindung zu einem SAP-System von einem externen System, welches als Client oder Server mit dem SAP-System kommunizieren kann. 
Die RFC API existiert in zwei unterschiedlichen Versionen: 
- Klassiche RFC-API (klassische RFC-Bibliothek).
- Netweaver-RFC-API (Netweaver RFC-Bibliothek). 

Achtung: Die Netweaver-RFC-Option unterstützt kein DeltQ und kein OHS. 

SAP Library: [RFC API: Classical & NetWeaver]() 

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}