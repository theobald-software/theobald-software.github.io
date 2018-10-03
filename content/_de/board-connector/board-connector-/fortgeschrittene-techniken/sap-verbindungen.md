---
layout: page
title: SAP-Verbindungen
description: SAP-Verbindungen
product: board-connector
parent: fortgeschrittene-techniken
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=sap-verbindungen
---

Wählen Sie den Menüeintrag *Server -> Manage Sources*, um die SAP-Verbindungen zu verwalten. Dort können Sie SAP-Verbindungen anlegen, editieren und löschen.

![Shared-SAP-Connections](/img/content/Shared-SAP-Connections.png){:class="img-responsive"}

Um eine Verbindungsvorlage anzulegen, klicken Sie auf *Add*.<br>
Geben Sie der Vorlage einen Namen und füllen Sie die notwendigen Felder. 


![SAP-Connection-Settings](/img/content/SAP-Connection-Settings.png){:class="img-responsive"}

Wenn Sie die erforderlichen Verbindungsparameter angegeben haben können Sie die Verbindung mit einem Klick auf den *Test Connection* Button überprüfen. Wenn die Verbindung hergestellt wurde, erscheint das nachfolgende Informationsfenster.

![SAP-Connection-Test-Ok](/img/content/SAP-Connection-Test-Ok.png){:class="img-responsive"}

Um eine Vorlage zu editieren bzw. zu löschen, klicken Sie entsprechend auf *Edit* bzw. Delete.

**Authentifizierung via SSO/SNC**

Wenn das SAP-System für den Zugriff via SSO mit SNC konfiguriert ist, wählen Sie SNC uund setzen Sie Partner Name und Mechanism anstelle von User und Password. 

Bei dem SNC-Mechanismus  haben Sie die folgenden Optionen: 
- Kerberos5
- NTLM 
- SNC Library: Mit dieser Eigenschaft können Sie den Pfad zur SNC DLL selbst angeben.

![SAP-Connection-SNC-Ok](/img/content/SAP-Connection-SNC-Ok.jpg){:class="img-responsive"}

Wenn Sie bei Mechanism die Option SNC Library wählen, dann werden die Felder SNC Library and X.509 Certificate aktiviert.

**Informationen über die SAP-Verbindung** 

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

Für die Authentifizierung können Sie einen SAP-Benutzername und Kennwort eigeben. 
Insgesamt werden aber folgende Authentifizierungsformen unterstützt: <br>
a. SAP-Benutzername und Passwort<br>
b. SNC (Secure Network Communication) mit Benutzername und Passwort<br>
c. SNC mit SSO (Single Sign On) <br>
d. Log On Ticket (verfügbar nur für ERPConnect und ERPConnect Services)

SAP Library: [SNC]()<br>
SAP Library: [SNC Parameters]() <br>

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

**SAP Log On**

In diesem Abschnitt zeigen wir Ihnen, wo Sie die benötigten Informationen für die SAP-Verbindung im SAP-Logon finden können. 

Für die Anmeldung an einem SAP-System müssen Sie folgende Daten angeben: <br>
Mandant (Client)<br>
Sprache (Logon Language)

Für die Authentifizierung können Sie einen SAP-Benutzername und Kennwort eigeben. 

![sapgui-client-lang](/img/content/sapgui-client-lang.jpg){:class="img-responsive"}

**SAP-Zielsystem**


Das SAP-Zielsystem kann ein Application Server oder ein Message Server (Load Balancing) sein.

**Application Server** 

Im Fall eines Applikationsservers werden folgende Angaben benötigt: 

- Name oder IP-Adresse des Applikationsservers (Eigenschaft Host) 
- Systemnummer (Instance Number), eine Zahl zwischen 0 und 99 (Eigenschaft SystemNumber)

![sapgui-appserver](/img/content/sapgui-appserver.jpg){:class="img-responsive"}

**Message Server (Load Balancing)** 

Im Fall von einer Anmeldung an einem Message Server (Load Balancing) sind folgende Daten zu füllen: 

- Dreistellige System-ID (Eigenschaft SID, z.B. MSS) 
- Name oder IP-Adresse des Message-Servers (Eigenschaft MessageServer) 
- Logon-Gruppe (Eigenschaft LogonGroup, i.d.R. ist das PUBLIC)

![sapgui-messageserver](/img/content/sapgui-messageserver.jpg){:class="img-responsive"}

**Authentifizierung**

Für die Authentifizierung mit SNC benötigen Sie den **SNC-Partnernamen**, den Sie im Feld *SNC Name* finden.

![sapgui-sncname](/img/content/sapgui-sncname.jpg){:class="img-responsive"}
