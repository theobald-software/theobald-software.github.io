---
ref: xu-logging-02
layout: page
title: Zugriff auf Logs im Designer
description: Zugriff auf Logs im Designer
product: xtract-universal
parent: logging
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=extraktion-logging
progressstate: 5
---

### Logs im Designer
Im Designer können Server- und Extraktions-Logs angezeigt werden.

Sowohl die Server- als auch die Extraktions-Logs werden nach einer definierten Zeitspanne automatisch gelöscht. Der Zeitraum kann in den [Servereinstellungen](../server/server_einstellungen) definiert werden.

### Server-Logs (Web Worker)

Die Server-Logs (Web Worker) können im Designer über das Hauptmenü **[Server]>[Log (Web Worker)]** angezeigt werden.

![View-Server-Log](/img/content/View-Server-Log.png){:class="img-responsive"}
 
Die Logs werden pro TCP-Verbindung erstellt. Um zwischen den Logs zu wechseln, verwenden Sie die Liste auf der linken Seite. 

### Extraktions-Logs

Die Extraktions-Logs können im Designer über die Schaltfläche **[Logs]** angezeigt werden. 
Markieren Sie dafür die Extraktion, deren Logs angezeigt werden sollen.

1. Der Zeitstempel für jeden Extraktionsprozess wird im linken Teil des Fensters "View Extraction Log" angezeigt.
Um Extraktionen nach Ausführungsdatum zu filtern, geben Sie einen Zeitraum in (1) ein.
2. Markieren Sie die Checkboxen unter der Log-Anzeige, um nur bestimmte Log-Levels anzeigen zu lassen (2).
3. Klicken Sie auf das **[Copy To Clipboard]**-Symbol (3), um das aktuelle Log in die Zwischenablage zu kopieren. 

![View-Extraction-Log](/img/content/View-Extraction-Log.png){:class="img-responsive"}

Sowohl die Server- als auch die Extraktionslogs werden nach einer definierten Zeitspanne automatisch gelöscht. 
Der Zeitraum kann in den [Servereinstellungen](../server/server_einstellungen) eingestellt werden.

### Kopieren von Logs
Klicken Sie auf das **[Copy To Clipboard]**-Symbol (3), um das aktuelle Log in die Zwischenablage zu kopieren. 
Das kopierte Log kann im Fall einer Supportanfrage in Ihre Nachricht eingefügt werden.


****
#### Weiterführende Links
- [Server-Prozesse](../server)