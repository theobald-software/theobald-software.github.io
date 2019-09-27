---
ref: xi-sap-connection-01
layout: page
title: Der Verbindungsmanager
description: Der Verbindungsmanager
product: xtract-is
parent: sap-verbindung
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=verbindungsmanager
---

Jede Xtract IS Datenquelle benötigt einen Xtract IS Verbindungsmanager, um über ihn auf das SAP-System zuzugreifen. Um innerhalb eines SSIS Packages einen neuen Verbindungsmanager anzulegen, klicken Sie mit der rechten Maustaste unten in den Bereich für die Verbindungsmanager und wählen Sie *Neue Verbindung*. <br>
Wählen Sie den Verbindungsmanager XTRACT (siehe Bild).

![Connection-Manager-01](/img/content/Connection-Manager-01.png){:class="img-responsive"}

Um den Verbindungsmanager korrekt zu konfigurieren, klicken Sie doppelt auf das Verbindungsmanager-Symbol für die Xtract-Verbindung.

![Connection-Manager-02](/img/content/Connection-Manager-02.png){:class="img-responsive"}

Die folgende Maske öffnet sich. Sie müssen nun die Anmeldedaten (*Benutzername, Mandant, Passwort, Sprache*) und die Angaben zum Zielsystem ausfüllen. 

![Connection-Manager](/img/content/Connection-Manager.png){:class="img-responsive"}

**Zielsystem**

Das SAP-Zielsystem, welches ein Application-Server oder ein Message-Server (Load Balancing) sein kann.

Im Fall eines Applikationsservers werden folgende Angaben benötigt: 

- Name oder IP-Adresse des Applikationsservers (Eigenschaft Host) 
- Systemnummer, eine Zahl zwischen 0 und 99 (Eigenschaft SystemNumber)

Im Fall einer Anmeldung an einem Message Server (Load Balancing) sind folgende Daten zu füllen: 

- Dreistellige System-ID (Eigenschaft SID, z.B. MSS) 
- Name oder IP-Adresse des Message-Servers (Eigenschaft MessageServer) 
- Logon-Gruppe (Eigenschaft LogonGroup, i.d.R. ist das PUBLIC)

[SAP Dokumentation zu Load Balancing](https://help.sap.com/saphelp_dm40/helpdata/de/22/04295c488911d189490000e829fbbd/content.htm?no_cache=true)
<br>

**SAP-Router**

Falls Sie auf das SAP-System (Application-Server oder Message-Server) über einen SAP-Router zugreifen, setzen Sie den Routerstring unmittelbar vor dem Hostnamen bzw. dem Message-Server. 

[SAP Dokumentation zu SAP-Router](https://help.sap.com/saphelp_nw70/helpdata/de/4f/992df1446d11d189700000e8322d00/content.htm?no_cache=true) (<br>

Falls Sie nicht wissen, welche Parameter Sie eingeben müssen, können Sie die Informationen im SAP Logon Pad in den *Properties* nachschauen.
Fragen Sie ansonsten bei Ihrer SAP-Basis nach. 

Wenn alles korrekt ausgefüllt ist, klicken Sie auf *Test Connection*, um zu prüfen, ob das SAP-System auch wirklich erreichbar ist. Wenn alles geklappt hat, kann es jetzt mit der Nutzung der Datenquellen losgehen.

Hinweis: Mit der Option *Encrypt Password* haben Sie die Möglichkeit, das Passwort innerhalb des Connection-Strings zu verschlüsseln. Dies ist nur dann sinnvoll und empfehlenswert, wenn Sie den Connection-String nicht dynamisch füllen (z.B. über eine separate XML-Konfigurationsdatei). Wenn der Connection-String extern abgelegt wird, nutzen Sie andere Möglichkeiten der Verschlüsselung, da ein verschlüsseltes Passwort nur im Connection-Manager geändert werden kann.

**RFC Bibliothek (API)**: Klassisch oder NetWeaver. <br>

Die RFC API (Remote Function Call) erlaubt den Aufbau einer RFC-Verbindung zu einem SAP-System von einem externen System, welches als Client oder Server mit dem SAP-System kommunizieren kann. <br>
Die RFC API existiert in zwei unterschiedlichen Versionen: 
- Klassische RFC Bibliothek (librfc32.dll).
- NetWeaver RFC Bibliothek (sapnwrfc.dll). 

Hinweis: Wenn Sie die NetWeaver RFC-Bibliothek bei DeltaQ oder OHS-Extraktionen nutzen, muss die RFC-Destination in der SM59 auf Unicode eingestellt sein.

Weitere Informationen finden Sie hier [RFC API: Classical & SAP NetWeaver](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/48/a994a77e28674be10000000a421937/frameset.htm) in der SAP Dokumentation. 
<br>
SAP hat den [Support für die librfc32.dll[(https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/) eingestellt. Diese funktioniert nach unserer Erfahrung jedoch nach wie vor und läuft in machen Fällen (z.B. DeltaQ) stabiler als die NetWeaver RFC Bibliothek.

**Log Directory**<br>
Sie haben die Möglichkeit Debug-Informationen zu loggen. Wenn Sie Debug-Informationen loggen wollen, so muss im Connection Manager in das Feld *Log Directory* ein gültiger Pfad eintragen werden. 

Bitte beachten Sie, dass das Logging in der Regel nur nach Aufforderung durch den Support aktiviert werden sollte. Beim Logging werden eine Vielzahl von Informationen gesammelt. Dies kann bei permanent aktiviertem Logging dazu führen, dass die Kapazitätsgrenzen des Speichermediums schnell erschöpft ist. Das Standard Logging ist von dieser Einstellung unabhängig und wird auch bei einem leeren Trace Directory Eintrag ausgeführt.

**Additions**

**Force Codepage in Strings** <br>
Bei Daten aus non-Unicode SAP-Systemen werden Zeichenfolgen in einer Codepage konvertiert, die der des Quellsystems möglichst ähnlich ist (z.B. 1250 für Zentraleuropa). Mit Hilfe dieses Parameters kann die automatisch ermittelte Zielcodepage übersteuert werden.

**Alternate BAPI for Internal Table Queries**<br>
Unsere Produkte nutzen den Funktionsbaustein RFC_READ_TABLE um look-ups auszuführen und Metadaten aus SAP zu lesen. Die Ausführung dieses Funktionsbausteins kann in manchen SAP-Systemen gesperrt sein. Diese Option erlaubt einen Ersatz-Funktionsbaustein zu definieren, z.B. Z_XTRACT_IS_TABLE. 