---
layout: page
title: SAP Logon
description: SAP Logon
product: erpconnect
parent: sap-verbindung
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=sap-logon
---

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

**Authentifizierung**

Für die Authentifizierung mit SNC benötigen Sie den **SNC-Partnernamen**, den Sie im Feld *SNC Name* finden.

![sapgui-sncname](/img/content/sapgui-sncname.jpg){:class="img-responsive"}



