---
ref: bc-server-02
layout: page
title: Ports
description: Ports
product: board-connector
parent: server
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=ports
---
Der BOARD Connector Server läuft als Windows-Service mit dem Hauptprozess `C:\Program Files\BOARDConnector\BCService.exe`. 

*BCService.exe* startet zwei Listener-Prozesse und lauscht standardmäßig auf folgenden Ports:

Listener-Prozess| Standardport
------------ | -------------
*BCWebServer.exe* | 8097 (HTTP) und 8197 (HTTPS)
*BCConfigServer.exe* | 8096

Die Server-Prozesse nutzen verschiedene Ports für die Kommunikation. Der Webserver nimmt Extraktionsaufrufe über HTTP(S) entgegen. 
Der Configuration-Server kommuniziert mit dem BOARD Connector Designer über einen dedizierten Port. <br>

{: .box-warning }
**Warnung! Änderung der Standardports**<br>
Nach der manuellen Anpassung der Standardports, startet der BOARD Connector Dienst nicht.<br>
Die hinterlegten Ports sind bereits vergeben und müssen in den nachfolgenden Config-Dateien angepasst werden.<br>
`C:\Program Files\BOARDConnector\config\server\config\general.json`<br>
`C:\Program Files\BOARDConnector\config\server\web\general.json`

Sollten manuelle Anpassungen der Portnummer notwendig sein, erfragen Sie die korrekten Ports bei Ihrem Netzwerk-Team.

{: .box-note }
**Hinweis:** Administratorberechtigungen sind für die Änderung der [Config-Dateien](./einfuehrung/installation-und-update#dateien-des-programmverzeichnisses) notwendig.

*****
#### Weiterführende Links
 - [Installation](./einfuehrung/installation-und-update)

