---
layout: page
title: Server starten
description: Server starten
product: xtract-universal
parent: server
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=server-starten
---

Die Server-Komponente wird standardmäßig als Windows-Service installiert und gestartet. Sie können den Server als Konsolenprogramm oder als Windows Service starten. In einer Umgebung, in der mehrere Anwender auf dasselbe Repository zugreifen möchten, ist es sinnvoll, die Server-Komponente als Windows-Dienst auf einem zentralen Server zu betreiben. 

Nach der Installation kann der Service über die Windows-Dienste-Verwaltung gestartet und gestoppt werden.

![Services-Start-Server](/img/content/Services-Start-Server.jpg){:class="img-responsive"}

Wenn Sie den Service manuell deinstallieren wollen, dann nutzen Sie folgendes Kommando

*XtractService.exe /u* 

Wenn Sie den Server nicht starten können, weil der Default-Port belegt ist, dann öffnen Sie die Datei *XtractServerConfig.xml* bzw. *general.json* im Ordner config des Installationsorders und legen Sie einen passenden Port fest. Zusätzlich können Sie hier verschiedene Server-Einstellungen vornehmen.