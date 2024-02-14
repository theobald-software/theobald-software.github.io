---
ref: xu-logging-02
layout: page
title: Zugriffslogs
description: Zugriff auf Logs im Designer
product: xtract-universal
parent: logging
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=extraktion-logging
progressstate: 5
---

Auf Server-und Extraktionslogs kann man im Designer und über die [Web-API](../web-api) zugreifen.<br>
Sowohl die Server- als auch die Extraktionslogs werden nach einem definierten Zeitraum automatisch gelöscht.
Der Zeitraum kann in den [Servereinstellungen] definiert werden.(../server/servereinstellungen).

### Server-Logs (Web Worker)

Die Server-Logs (Web Worker) können im Designer über das Hauptmenü **[Server]>[Log (Web Worker)]** angezeigt werden.

![View-Server-Log](/img/content/View-Server-Log.png){:class="img-responsive"}
 
Die Logs werden pro TCP-Verbindung erstellt. Um zwischen den Logs zu wechseln, verwenden Sie die Liste auf der linken Seite:

Serverprotokolle werden nach einem definierten Zeitraum automatisch gelöscht, siehe [Servereinstellungen](../server/servereinstellungen).<br>
For information on how to query server logs using the web API, see [Web API - Get Server Logs](../web-api#get-server-logs).


### Extraktions-Logs

Die Extraktions-Logs können im Designer über die Schaltfläche **[Logs]** angezeigt werden. 
Markieren Sie dafür die Extraktion, deren Logs angezeigt werden sollen.

1. Der Zeitstempel für jeden Extraktionsprozess wird im linken Teil des Fensters "View Extraction Log" angezeigt.
Um Extraktionen nach Ausführungsdatum zu filtern, geben Sie einen Zeitraum in (1) ein.
2. Markieren Sie die Checkboxen unter der Log-Anzeige, um nach Log-Levels zu filtern (2).
3. Klicken Sie auf **[Copy To Clipboard]** Symbol (3) um das aktuelle Log in die Zwischenablage zu kopieren. 

![View-Extraction-Log](/img/content/View-Extraction-Log.png){:class="img-responsive"}

Sowohl die Server- als auch die Extraktionslogs werden nach einer definierten Zeitspanne automatisch gelöscht. 
Der Zeitraum kann in den [Servereinstellungen](../server/server_einstellungen) eingestellt werden.

Informationen zum Abfragen von Serverlogs mithilfe der Web-API finden Sie unter [Web API - Extraktionslogs abrufen](../web-api#extraktionslogs-abrufen).


****
#### Weiterführende Links
- [Server-Prozesse](../server)