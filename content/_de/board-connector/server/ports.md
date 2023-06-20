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
Der Board Connector Server läuft als Windows-Service mit dem Hauptprozess `C:\Program Files\BOARDConnector\BCService.exe`. 

*BCService.exe* startet die folgenden Listener-Prozesse, die standardmäßig auf folgende Ports lauschen:

Listener Prozesse| Standard Port | Beschreibung
------------ | ------------- | -------------
*Theobald.Bc.Web.Listener.exe* | 8097 (HTTP) und 8197 (HTTPS) | Ports können geändert werden
*BCConfigServer.exe* | 8096 | Port kann geändert werden
*BCAPIServer.exe* | 8098 | Port kann nicht geändert werden, keine Verschlüsselung

Die Server-Prozesse nutzen verschiedene Ports für die Kommunikation. 
- Der Webserver nimmt Extraktionsaufrufe über HTTP(S) entgegen. 
- Der Configuration-Server kommuniziert mit dem Board Connector Designer.
- Der API-Server stellt dem Datareader des Board Servers die Metadaten der Extraktion zur Verfügung.

{: .box-warning }
**Warnung! Änderung der Standardports**<br>
Nach der manuellen Anpassung der Standardports, startet der Board Connector Service nicht.<br>
Die hinterlegten Ports sind bereits vergeben und müssen in den nachfolgenden Config-Dateien angepasst werden.<br>
`C:\Program Files\BOARDConnector\config\server\config\general.json`<br>
`C:\Program Files\BOARDConnector\config\server\web\general.json`

Sollten manuelle Anpassungen der Portnummer notwendig sein, erfragen Sie die korrekten Ports bei Ihrem Netzwerk-Team.

{: .box-note }
**Hinweis:** Administratorberechtigungen sind für die Änderung der [Config-Dateien](../einfuehrung/installation-und-update#dateien-des-programmverzeichnisses) notwendig.

*****
#### Weiterführende Links
 - [Installation](../einfuehrung/installation-und-update)

