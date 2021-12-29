---
ref: board-connector-08
layout: page
title: Logging
description: Logging
product: board-connector
parent: board-connector
childidentifier: logging
permalink: /:collection/:path
weight: 8
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=logging
---

BOARD Connector protokolliert alle auf einem System durchgeführten Schritte in Log-Dateien. 
Die Log-Dateien werden im Produktverzeichnis gespeichert:<br>
z.B.: `C:\Program Files\BOARDConnector\logs`

Es werden verschiedene Arten der Log-Dateien erstellt.


|Typ | Name | Beschreibung | Pfad zum Ablageort |
|:------ | :------ |:--- | :--- |
|Server| ServiceLog.txt | Enthält die Aktivitäten von BCService.exe.| `C:ProgramFiles\BOARD Connector\logs` |
|Server| WebServer-Log: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log  | Der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Start des Servers angelegt, zusätzlich wird auch alle 24 Stunden eine neue Log-Datei angelegt. Theobald.Bc.Web.Listener.exe ist der dazugehörige Prozess.| `C:ProgramFiles\BOARD Connector\logs\servers\web\listener` |
|Server| Run-Logs: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log  | Der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Zeitpunkt der Entgegennahme einer TCP-Verbindung erstellt. Theobald.Bc.Web.Worker.exe ist der dazugehörige Prozess.| `C:ProgramFiles\BOARD Connector\logs\servers\web\worker` |  
|Extraktion| Extraktions-Logs: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log | Der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Start einer Extraktion erstellt. Theobald.Bc.Web.Worker.exe ist der dazugehörige Prozess. | `C:\Program Files\BOARDConnector\logs\extractions\[Name_der_Extaktion]`|

Für mehr Informationen zu den Server-Prozessen, siehe [Server](./server).

### Log Levels
Jeder Log-Eintrag ist einem so genannten Log-Level zugewiesen. Es gibt folgende Log-Levels:

- **Errors** sind Fehlermeldungen, die während des Extraktionsprozesses ausgegeben werden.
- **Information** - Statusmeldungen, über Vorgänge, die nicht zu einem Fehler führen.
- **Warnings** - Informationen über Probleme, die nicht zu einem Extraktionsfehler führen. Zum Beispiel Authentifizierungsfehler.
- **Debug Details** - detaillierte Informationen, die helfen, den Grund für aufgetretene Fehler zu finden.

### Logs Lesen - Extraktions-Log

![View-Extraction-Log](/img/content/View-Extraction-Log.png){:class="img-responsive"} 
Markieren Sie die Checkboxen oben links, um zu entscheiden, welche Log-Levels angezeigt werden sollen.

Um die Prozesse von BOARD Connector besser zu verstehen, können Sie die in verständlicher Sprache verfassten Logs lesen.
Das [Beispiel eines lesbaren Logs] (https://help.theobald-software.com/de/xtract-universal/logging#logs-lesen---extraktions-log) kann von Xtract Universal übernommen werden, da die Prozeduren ähnlich sind. Der einzige Unterschied besteht darin, dass der BOARD Connector keine Destinationen hat und die Daten immer nach BOARD geschrieben werden. 

****
{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}