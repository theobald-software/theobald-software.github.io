---
ref: xu-server-02
layout: page
title: Ports
description: Ports
product: xtract-universal
parent: server
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=ports
---
Der Xtract Universal Server läuft als Windows-Service mit dem Hauptprozess `C:\Program Files\XtractUniversal\XtractService.exe`. 

*XtractService.exe* startet zwei Listener-Prozesse und lauscht standardmäßig auf folgenden Ports:

Listener-Prozess| Standardport
------------ | -------------
*XtractWebServer.exe* | 8065 (HTTP) und 8165 (HTTPS)
*Theobald.Xu.Rpc.Listener.exe* | 8064

{: .box-note }
**Hinweis:** Bei einer verteilten Verwendung sind entsprechende [Porteingangsregeln](https://docs.microsoft.com/de-de/windows/security/threat-protection/windows-firewall/create-an-inbound-port-rule) für den Protokoltyp **TCP** der oben genannten Listener-Prozesse vorzunehmen.

Die Server-Prozesse nutzen verschiedene Ports für die Kommunikation. Der Webserver nimmt Extraktionsaufrufe über HTTP(S) entgegen. 
Der Configuration-Server kommuniziert mit dem Xtract Universal Designer über einen dedizierten Port. <br>

{: .box-warning }
**Warnung! Änderung der Standardports**<br>
Nach der manuellen Anpassung der Standardports, startet der Xtract Universal Dienst nicht.<br>
Die hinterlegten Ports sind bereits vergeben und müssen in den nachfolgenden Config-Dateien angepasst werden.<br>
`C:\Program Files\XtractUniversal\config\server\config\general.json`<br>
`C:\Program Files\XtractUniversal\config\server\web\general.json`

Sollten manuelle Anpassungen der Portnummer notwendig sein, erfragen Sie die korrekten Ports bei Ihrem Netzwerk-Team.

{: .box-note }
**Hinweis:** Administratorberechtigungen sind für die Änderung der [Config-Dateien](../einfuehrung/installation-und-update#dateien-des-programmverzeichnisses) notwendig.

*****
#### Weiterführende Links
 - [Installation](../einfuehrung/installation-und-update)


