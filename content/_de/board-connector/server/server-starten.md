---
layout: page
title: Server starten
description: Server starten
product: board-connector
parent: server
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=server-starten
---

Die Server-Komponente wird standardmäßig als Windows-Service installiert und gestartet. Sie können den Server als Konsolenprogramm oder als Windows Service starten. In einer Umgebung, in der mehrere Anwender auf dasselbe Repository zugreifen möchten, ist es sinnvoll, die Server-Komponente als Windows-Dienst auf einem zentralen Server zu betreiben. 

Nach der Installation kann der Service über die Windows-Dienste-Verwaltung gestartet und gestoppt werden.

![Start-Service](/img/content/Start-Service.png){:class="img-responsive"}

Wenn Sie den Service manuell deinstallieren wollen, dann nutzen Sie folgendes Kommando  

*installutil.exe /u BCService.exe*

Wenn Sie den Server nicht starten können, weil der Default-Port belegt ist, dann öffnen Sie die Datei XtractServerConfig.xml im Ordner *config des* Installationsorders und legen Sie einen passenden Port fest. Zusätzlich können Sie hier verschiedene Server-Einstellungen vornehmen.

