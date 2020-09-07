---
layout: page
title: Verbindungsdaten
description: Verbindungsdaten
product: erpconnect
parent: sap-verbindung
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=verbindungsdaten
---

Grundsätzlich stehen zwei Methoden zur Anmeldung zur Verfügung; entweder direkt an einem Applikationsserver oder per Load Balancing an einem Message-Server. Unabhängig des Zielsystems sind folgende Parameter zu füllen: 

**Client** - Der SAP-Mandant. Dreistellig, z.B. 800<br>
**Language** - Die Sprache in der die Anmeldung am SAP System erfolgen soll. Beispiel: EN für Englisch oder DE für Deutsch<br>

**Authentifizierung**

Für die Authentifizierung können Benutzername und Passwort verwendet werden. Andere Optionen werden ebenfalls angeboten. 

**Username**-	Der Benutzername für die SAP-Verbindung.<br>
**Password**-	Das Kennwort für die SAP-Verbindung.

Diese Parameter können Sie direkt über die entsprechenden Eigenschaften der SAP-Verbindung (R3Connection) setzen.
Alternativ können Sie auch einen ConnectionString verwenden. 

**ConnectionString**

Sie können auch die Methode R3Connection.Open(string connectionString) aufrufen und gleich den ConnectionString übergeben.
Für die Verbindung mit einem Single application server nutzen Sie:<br>
"USER=YourUser LANG=EN CLIENT=800 SYSNR=00 ASHOST=ecc.theobald-software.com PASSWD=YourPassword"

Für weitere Beispiele mit dem ConnectionString bitte in die Datei saprfc.ini des classic RFC SDKs bzw. 
sapnwrfc.ini des NW RFC SDKs schauen. 
