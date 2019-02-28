---
ref: xu-advanced-techniques-05
layout: page
title: SAP-Verbindungen
description: SAP-Verbindungen
product: xtract-universal
parent: fortgeschrittene-techniken
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=sap-verbindungen-anlegen
---

Wählen Sie den Menüeintrag *Server -> Manage Sources*, um die SAP-Verbindungen zu verwalten. Dort können Sie SAP-Verbindungen anlegen, editieren und löschen.


![Shared-SAP-Connections](/img/content/Shared-SAP-Connections.png){:class="img-responsive"}

Um eine Verbindungsvorlage anzulegen, klicken Sie auf *Add*.<br>
Geben Sie der Vorlage einen Namen und füllen Sie die notwendigen Felder. 

![SAP-Connection-Settings](/img/content/SAP-Connection-Settings.png){:class="img-responsive"}

Wenn Sie die erforderlichen Verbindungsparameter angegeben haben können Sie die Verbindung mit einem Klick auf den *Test Connection* Button überprüfen. Wenn die Verbindung hergestellt wurde, erscheint das nachfolgende Informationsfenster.


![SAP-Connection-Test-Ok](/img/content/SAP-Connection-Test-Ok.png){:class="img-responsive"}

Um eine Vorlage zu editieren bzw. zu löschen, klicken Sie entsprechend auf *Edit* bzw. *Delete*.

**Authentifizierung via SSO/SNC**

siehe [hier](https://help.theobald-software.com/de/xtract-universal/fortgeschrittene-techniken/SAP-Single-Sign-On)



![SAP-Connection-SNC-Ok](/img/content/SAP-Connection-SNC-Ok.jpg){:class="img-responsive"}

Wenn Sie bei *Mechanism* die Option *SNC Library* wählen, dann werden die Felder SNC Library and X.509 Certificate aktiviert.

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

Für die Authentifizierung können Sie einen SAP-Benutzername und Kennwort eigeben. <br>
Insgesamt werden aber folgende Authentifizierungsformen unterstützt: 

a. SAP-Benutzername und Passwort<br>
b. SNC (Secure Network Communication) mit Benutzername und Passwort<br>
c. SNC mit SSO (Single Sign On) <br>
d. SAP Log On Ticket 


**Zielsystem**

Das SAP-Zielsystem, welches ein Application Server oder ein Message Server (Load Balancing) sein kann.

Im Fall eines Applikationsservers werden folgende Angaben benötigt: 

- Name oder IP-Adresse des Applikationsservers (Eigenschaft Host) 
- Systemnummer, eine Zahl zwischen 0 und 99 (Eigenschaft SystemNumber)

Im Fall von einer Anmeldung an einem Message Server (Load Balancing) sind folgende Daten zu füllen: 

- Dreistellige System-ID (Eigenschaft SID, z.B. MSS) 
- Name oder IP-Adresse des Message-Servers (Eigenschaft MessageServer) 
- Logon-Gruppe (Eigenschaft LogonGroup, i.d.R. ist das PUBLIC)

[SAP Dokumentation zu Load Balancing](https://help.sap.com/saphelp_dm40/helpdata/de/22/04295c488911d189490000e829fbbd/content.htm?no_cache=true)
<br>

**SAP-Router**

Falls Sie auf das SAP-System (Application-Server oder Message-Server) über einen SAP-Router zugreifen, setzen Sie den Routerstring unmittelbar vor dem Hostnamen bzw. dem Message-Server. 

[SAP Dokumentation zu SAP-Router](https://help.sap.com/saphelp_nw70/helpdata/de/4f/992df1446d11d189700000e8322d00/content.htm?no_cache=true) 
(<br>

**RFC Bibliothek (API)**: Klassisch oder NetWeaver. 

Die RFC API (Remote Function Call) erlaubt den Aufbau einer RFC-Verbindung zu einem SAP-System von einem externen System, welches als Client oder Server mit dem SAP-System kommunizieren kann. <br>
Die RFC API existiert in zwei unterschiedlichen Versionen: 
- Klassiche RFC Bibliothek (librfc32.dll).
- NetWeaver RFC Bibliothek (sapnwrfc.dll). 


Weitere Informationen finden Sie hier [RFC API: Classical & SAP NetWeaver](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/48/a994a77e28674be10000000a421937/frameset.htm) in der SAP Dokumentation. 
<br>
SAP hat den [Support für die librfc32.dll[(https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/) eingestellt. Diese funktioniert nach unserer Erfahrung jedoch nach wie vor und läuft in machen Fällen (z.B. DeltaQ) stabiler als die NetWeaver RFC Bibliothek.

<br>

<h2>SAP Log On

In diesem Abschnitt zeigen wir Ihnen, wo Sie die benötigten Informationen für die SAP-Verbindung im SAP-Logon finden können. 

Für die Anmeldung an einem SAP-System müssen Sie folgende Daten angeben: <br>
Mandant (Client)<br>
Sprache (Logon Language)<br>

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


