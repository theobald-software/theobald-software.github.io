---
ref: xu-server-03
layout: page
title: Server Einstellungen
description: Server Einstellungen
product: xtract-universal
parent: server
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=server-einstellungen
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract Universal.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

### Servereinstellungen öffnen
Navigieren Sie im Hauptfenster des Designers zu **[Server] > [Settings]**. Das Fenster  wird geöffnet. Im Fenster "Server-Settings" gibt es zwei Tabs:
- *Configuration Server*
- *Web Server*


### Configuration Server

![XU3_ServerSettings_config_tab](/img/content/XU3_ServerSettings_config_tab.png){:class="img-responsive"}


#### Designer connection

**Port (1)**<br>
Definiert die Portnummer, über die der Server mit dem Designer kommuniziert. Standardport ist 8064. Wird ein anderer Port verwendet, fügen Sie die neue Portnummer dem Hostnamen auf der Anmeldemaske hinzu ([host name]:[port]).

![XU-Designer-Logon](/img/content/xu/xu-designer-logon.png){:class="img-responsive"}

**Max. age of log files (days)**<br>
Definiert das maximale Alter der [Logdateien](../logging/log-zugriff-ueber-designer#server-logs-run) des Config-Servers in Tagen. Danach werden die Logdateien gelöscht. 

**Authentication methods**<br>
Siehe Abschnitt [Benutzerverwaltung](../sicherheit/benutzerverwaltung).

**Select X.509 certificate**<br>

Siehe Abschnitt [X.509 Zertifikat installieren](../sicherheit/x.509-zertifikat-installieren).

**Access Management**<br>
Siehe Abschnitt [Zugriffsverwaltung](../sicherheit/zugriffsverwaltung).


### Web Server

![XU3_ServerSettings_web_tab](/img/content/XU3_ServerSettings_web_tab.png){:class="img-responsive"}


#### Protocol / Access control

**HTTP - Unrestricted / HTTP port** (Standard)<br>
Definiert die Portnummer, über die der Server den Aufruf der Extraktionen über HTTP entgegen nimmt. 

**HTTPS - Unrestricted / HTTPS port**<br>
Aktiviert den sicheren Datentransfer via HTTPS. Der run-Befehl generiert eine HTTPS-URL. Port-Einstellung definiert den HTTPS Listener-Port.

Wenn Sie Daten über HTTPS empfangen wollen, müssen Sie ein TLS-Zertifikat installieren, damit der Server den HTTPS-Port verwalten kann. 
Siehe Abschnitt [X.509 Zertifikat installieren](../sicherheit/x.509-zertifikat-installieren).

**HTTPS - Restricted to AD users with Designer read access**<br>
Siehe *HTTPS - Unrestricted*. Darüber hinaus ermöglicht diese Einstellung eine Zugriffskontrolle auf die Ausführung von Extraktionen. Extraktionen können nur von Windows AD Benutzern ausgeführt werden, denen im Tab *Configuration Server* mindestens ein *Read* (Lesezugriff) zugewiesen wurde. Siehe auch [Release Note 3.11](https://kb.theobald-software.com/release-notes/XtractUniversal-3.11.0.html) und Abschnitt [Serversicherheit](../sicherheit/serversicherheit).

**HTTPS - Restricted to custom users with Designer read access** <br>
Siehe *HTTPS - Unrestricted*. Darüber hinaus ermöglicht diese Einstellung eine Zugriffskontrolle auf die Ausführung von Extraktionen. Extraktionen können nur von benutzerdefinierten (custom) Benutzern ausgeführt werden, denen im Tab *Configuration Server* mindestens ein *Read* (Lesezugriff) zugewiesen wurde. Siehe auch [Release Note 4.20 für Xtract Universal](https://kb.theobald-software.com/release-notes/XtractUniversal-4.20.0.html) und Abschnitt [Serversicherheit](../sicherheit/serversicherheit).

#### Misc.

**Max. age of log files (days)**<br>
Definiert das maximale Alter der [Webserver-Logdateien](../logging/log-zugriff-ueber-designer#server-logs-run) in Tagen. Danach werden die Logdateien gelöscht. 

**Enable setup distribution for clients**<br>
Legt fest, ob das Setup der Produktversion, die auf dem Server läuft, vom Server heruntergeladen werden kann.<br>
Wenn man sich mit einer älteren Designer-Version an einem neueren Server anmeldet und diese Option aktiviert ist,
fragt der Designer, ob man das neuere Setup herunterladen möchte.


#### Result cache

{:.box-note}
**Hinweis:** Die Option *Cache results* ist nur Verfügbar in [Pull-Destinationen](../destinationen#pull--und-push-destinationen) (z.B. PBI, Qlik etc.).

**Target directory**<br>
Definiert das Verzeichnis, in dem Extraktionen gepuffert werden. Standardmäßig ausgewählt ist der result-cache Ordner im Programmverzeichnis des Produkts: <br>
`C:\Program Files\XtractUniversal\result-cache`.

**Max. cached runs**<br>
Definiert die maximale Anzahl der Ergebnisse verschiedener Extraktionen im Puffer.

**Max. age (minutes)**<br>
Definiert das maximale Alter einer Extraktion in Minuten im Puffer.


