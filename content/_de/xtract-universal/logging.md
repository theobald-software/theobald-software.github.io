---
ref: xtract-universal-08
layout: page
title: Logging
description: Logging
product: xtract-universal
parent: xtract-universal
childidentifier: logging
permalink: /:collection/:path
weight: 35
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=logging
progressstate: 3
---

Xtract Universal protokolliert alle auf einem System durchgeführten Schritte in Log-Dateien. 
Die Log-Dateien werden im Installationsverzeichnis `C:\Program Files\XtractUniversal\logs` abgelegt.

Folgende Log-Dateien werden erstellt:


|Typ | Name | Beschreibung | Pfad zum Ablageort |
|:------ | :------ |:--- | :--- |
|Server| ServiceLog.txt | Enthält die Aktivitäten von XtractService.exe.| `C:ProgramFiles\XtractUniversal\logs` |
|Server| WebServer-Log: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log  | Der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Start des Servers angelegt, zusätzlich wird auch alle 24 Stunden eine neue Log-Datei angelegt. Theobald.Xu.Web.Listener.exe ist der dazugehörige Prozess.| `C:ProgramFiles\XtractUniversal\logs\servers\web\listener` |
|Server| WebWorker-Logs: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log  | Der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Zeitpunkt der Entgegennahme einer TCP-Verbindung erstellt. Theobald.Xu.Web.Worker.exe ist der dazugehörige Prozess.| `C:ProgramFiles\XtractUniversal\logs\servers\web\worker` |  
|Extraktion| Extraktions-Logs: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log | Der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Start einer Extraktion erstellt. Theobald.Xu.Web.Worker.exe ist der dazugehörige Prozess. | `C:\Program Files\XtractUniversal\logs\extractions\[Name_der_Extaktion]`|

Für mehr Informationen zu den Server-Prozessen, siehe [Server](./server).

### Log Levels
Jeder Log-Eintrag ist einem der folgenden Log-Levels zugewiesen:

- **Errors** - Fehlermeldungen, die während des Extraktionsprozesses ausgegeben werden.
- **Information** - Statusmeldungen, über Vorgänge, die nicht zu einem Fehler führen.
- **Warnings** - Informationen über Probleme, die nicht zu einem Extraktionsfehler führen. Zum Beispiel Authentifizierungsfehler.
- **Debug Details** - detaillierte Informationen, die helfen, den Grund für aufgetretene Fehler zu finden.

### Logs Lesen - Extraktions-Log

Lesen Sie die in verständlicher Sprache geschriebenen Logs, um die Abläufe von Xtract Universal besser zu verstehen.  
Im folgenden Beispiel-Log werden Daten in eine SQL-Destination geschrieben.

1. Allgemeine technische Informationen werden angezeigt.
2. Die [SQL-Destination](./destinationen/microsoft-sql-server) wird für Empfang von Daten vorbereitet.
3. Die Lizenzprüfung wird durchgeführt, inklusive Entität-Prüfung und anderen relevanten Informationen.
4. Verbindung mit SAP wird hergestellt.
5. [Laufzeitparameter](./erste-schritte/eine-extraktion-ausfuehren#extraktionsparameter-festlegen) werden geloggt.
6. Daten werden von SAP angefordert.
7. Paket Nr. 1 wird von SAP empfangen.
8. Paket Nr. 1 wird in den SQL-Server geschrieben.
9. Extraktion wird abgeschlossen.

![XU_logging_1](/img/content/xu/logging-extract-detail-03.png){:class="img-responsive"}

******

Die folgenden Abschnitte enthalten weitere Informationen zu den Xtract Universal Logs:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}