---
layout: page
title: Server-Einstellungen in XU 2.x
description: Server-Einstellungen in XU 2.x
product: xtract-universal
parent: server
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=server-einstellungen
---

Um die Server-Einstellungen zu ändern, klicken Sie im Hauptmenü auf *Server -> Settings*.<br> 
Um den Wert eines Parameters zu ändern, klicken Sie in der *Kind*-Spalte auf Individual und geben Sie in der *Value*-Spalte den Wert ein. 
Um die Default-Werte wieder herzustellen, klicken Sie in der Kind-Spalte auf Default. <br>Nach dem Speichern neuer Werte wird der Server automatisch neu gestartet. 

**Misc. Reiter** 

![Server-Settings](/img/content/Server-Settings.png){:class="img-responsive"}  

**BufferDirectory**<br>
Definiert das Verzeichnis für den Buffer. 

**BufferExtractionCount**<br>
Definiert die maximale Anzahl der Ergebnisse verschiedener Extraktionen im Puffer.

**BufferLifespanMinutes**<br>
Definiert das maximale Alter in Minuten einer Extraktion im Puffer.

**DistributeSetup**<br> 
legt fest, ob das Setup der XU-Version, die auf dem Server läuft, vom Server runtergeladen werden kann. <br>
Wenn man sich mit einer älteren Designer-Version an einem neueren Server anmeldet und diese Option aktiviert ist, 
fragt der Designer, ob man das neuere Setup runterladen möchte.

**ConfigurationPort**<br>
Definiert die Portnummer, über die der Server mit dem Designer via HTTP kommuniziert.

**Enable Listener**<br>
Aktiviert den Datentransfer über HTTP (default: yes).

**EnableSecureListener**<br>
Aktiviert den Datentransfer via HTTPS (default: no).

Mit dieser Einstellung können Sie HTTP, HTTPS oder beide Protokolltypen aktivieren. Der run-Befehl generiert eine HTTPS-URL wenn HTTPS aktiviert ist, auch dann wenn HTTP deaktiviert sein sollte.

Wenn Sie Daten über HTTPS empfangen wollen, müssen Sie ein SSL-Zertifikat installieren, damit der Server den HTTPS-Port verwalten kann. Dieses Zertifikat muss den Hostnamen des Servers in der Common-Name (CN) Eigenschaft enthalten und durch eine Zertifizierungsstelle erstellt worden sein.

Weitere Informationen finden Sie in unserem blog: [http://www.theobald-software.com/blog/?p=389](http://www.theobald-software.com/blog/?p=389)

**ListenerPort** <br>
Definiert die Portnummer, über die der Server den Aufruf der Extraktionen über HTTP entgegen nimmt. 

**ListenerThreads** <br>
Definiert die höchste Anzahl der verschiedenen Extraktionsanfragen, welche parallel bearbeitet werden. Zwei Extraktionsanfragen sind verschieden, wenn sie Extraktionen mit verschiedenen Namen aufrufen. 

**MaxLogDays** <br>
Definiert das maximale Alter der Logdateien in Tagen. Danach werden die Logdateien gelöscht. 

**SecureListenerPort** <br>
Definiert die Portnummer, über die der Server mit dem Designer via HTTPS kommuniziert.

Der Puffer dient der Zwischenspeicherung der Extraktionsergebnisse. Eine Extraktion wird dabei durch ihren Namen identifiziert. Beim Aufruf einer Extraktion mit neuen Parametern werden die Daten aus dem SAP-System erneut abgerufen.


Die Beschreibung der Sicherheitseinstellungen im Security Reiter finden Sie im Kapitel [Serversicherheit](../sicherheit_xu2x/serversicherheit).