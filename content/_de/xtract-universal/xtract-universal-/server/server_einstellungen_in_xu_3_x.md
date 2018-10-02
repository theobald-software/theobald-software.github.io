---
layout: page
title: Server-Einstellungen in XU 3.x
description: Server-Einstellungen in XU 3.x
product: xtract-universal
parent: server
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=server-einstellungen
---

Um die Server-Einstellungen zu ändern, klicken Sie im Hauptmenü auf *Server -> Settings*. 

Die Server-Einstellungen verteilen sich auf zwei Reiter: *Configuration Server* und *Web Server*.

![XU3_ServerSettings_config_tab](/img/content/XU3_ServerSettings_config_tab.jpg){:class="img-responsive"}

**Port**<br>
Definiert die Portnummer, über die der Server mit dem Designer kommuniziert. Standardport ist 8064. Wird ein anderer Port verwendet, muss dieser in der Anmeldemaske dem Hostnamen mit :[Port] hinten angestellt werden.

**Max. age of log files (days)**<br>
Definiert das maximale Alter der Logdateien des Config-Servers in Tagen. Danach werden die Logdateien gelöscht. 

**Authentication methods**<br>
siehe Kapitel [Benutzerverwaltung]()

**Select X.509 certificate**<br>
1. Lassen Sie ein TLS Zertifikat von Ihrem IT Netzwerk Team erstellen.
2. Das Zertifikat muss im Windows Certificate Store auf dem XU Server hinterlegt werden.
3. In der Zertifikatseigenschaft "Subject Alternative Name" muss der DNS Name des Servers stehen, auf dem der Xtract Universal Windows Dienst läuft. Ansonsten erscheint das Zertifikat nicht im Lookup Dialog.

**Access Management**<br>
siehe Kapitel [Zugriffsverwaltung]()

![XU3_ServerSettings_web_tab](/img/content/XU3_ServerSettings_web_tab.jpg){:class="img-responsive"}

**General**

**HTTP / HTTP port**<br>
Definiert die Portnummer, über die der Server den Aufruf der Extraktionen über HTTP entgegen nimmt. 

**HTTPS / HTTPS port**<br>
Aktiviert den Datentransfer via HTTPS.

Mit dieser Einstellung können Sie HTTP, HTTPS oder beide Protokolltypen aktivieren. Der run-Befehl generiert eine HTTPS-URL wenn HTTPS aktiviert ist, auch dann wenn HTTP aktiviert sein sollte.

Wenn Sie Daten über HTTPS empfangen wollen, müssen Sie ein SSL-Zertifikat installieren, damit der Server den HTTPS-Port verwalten kann. Dieses Zertifikat muss den Hostnamen des Servers in der Common-Name (CN) Eigenschaft enthalten und durch eine Zertifizierungsstelle erstellt worden sein.

Weitere Informationen finden Sie in unserem blog: http://www.theobald-software.com/blog/?p=389

**Max. parallel requests**<br>
Definiert die höchste Anzahl der verschiedenen Extraktionsanfragen, welche parallel bearbeitet werden. Zwei Extraktionsanfragen sind verschieden, wenn sie Extraktionen mit verschiedenen Namen aufrufen. 

**Max. age of log files (days)**<br>
Definiert das maximale Alter der Webserver-Logdateien in Tagen. Danach werden die Logdateien gelöscht. 

**Enable setup distribution for clients**<br>
Legt fest, ob das Setup der XU-Version, die auf dem Server läuft, vom Server runtergeladen werden kann.<br>
Wenn man sich mit einer älteren Designer-Version an einem neueren Server anmeldet und diese Option aktiviert ist,
fragt der Designer, ob man das neuere Setup runterladen möchte.


**Result cache**

**Target directory**<br>
Definiert das Verzeichnis, in dem Extraktionen gepuffert werden. Default ist der Ordner result-cache im Installationsverszeichnis von Xtract Universal.

**Max. cached runs**<br>
Definiert die maximale Anzahl der Ergebnisse verschiedener Extraktionen im Puffer.

**Max. age (minutes)**<br>
Definiert das maximale Alter in Minuten einer Extraktion im Puffer.


**HTTP client filter**<br>
siehe Kapitel Serversicherheit.