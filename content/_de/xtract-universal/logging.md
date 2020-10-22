---
ref: xtract-universal-08
layout: page
title: Logging
description: Logging
product: xtract-universal
parent: xtract-universal
childidentifier: logging
permalink: /:collection/:path
weight: 8
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=logging
progressstate: 3
---

Xtract Universal protokolliert verschiedene Aktionen in Log-Dateien.
Die Log-Dateien befindet sich im Logs-Unterverzeichnis des Programmverzeichnisses: `C:ProgramFiles\XtractUniversal\logs` (standartmäßig).

Es werden verschiedene Arten der Log-Dateien erstellt.


|Typ | Name | Beschreibung | Pfad zum Ablageort |
|:------ | :------ |:--- | :--- |
|Server| ServiceLog.txt | Enthält die Aktivitäten von XtractService.exe.| `C:ProgramFiles\XtractUniversal\logs` |
|Server| ConfigServer-Log: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log | Der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Start des Servers angelegt, zusätzlich wird auch alle 24 Stunden eine neue Log-Datei angelegt. XtractConfigServer.exe ist der dazugehörige Prozess.| `C:ProgramFiles\XtractUniversal\logs\server\config` |
|Server| WebServer-Log: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log  | Der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Start des Servers angelegt, zusätzlich wird auch alle 24 Stunden eine neue Log-Datei angelegt. XtractWebServer.exe ist der dazugehörige Prozess.| `C:ProgramFiles\XtractUniversal\logs\server\web` |
|Server| Run-Logs: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log  | Der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Zeitpunkt der Entgegennahme einer TCP-Verbindung erstellt. XtractRun.exe ist der dazugehörige Prozess.| `C:ProgramFiles\XtractUniversal\logs\server\run` |  
|Extraktion| Extraktions-Logs: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log | Der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Start einer Extraktion erstellt. XtractRun.exe ist der dazugehörige Prozess. | `C:\Program Files\XtractUniversal\logs\extractions\[Name_der_Extaktion]`|

### Logs im Designer

Extraktions-Logs und die Run-Logs genannt Sever-Logs im Designer.
Das sind auch die Logs, die man sich im Designer unter **[Server]>[Logs]** anzeigen lassen kann.

### Logs Lesen

Um die Abläufe von Xtract Universal besser verstehen zu können, können Sie die in verständlicher Sprache geschriebenen Logs lesen.  Im folgenden Beispiel von einem Extraktions-Log werden die Abläufe näher erläutert.
1. Allgemeine technische Informationen werden angezeigt.
 ![XU_logging_1](/img/content/xu/logging-extract-detail-01.png){:class="img-responsive"}
2. Die [SQL-Destination]() wird für Empfang von Daten vorbereitet.
3. Die Lizenzprüfung wird durchgeführt inklusive Entität und anderen relevanten Informationen.
4. Verbindung zum SAP wird hergestellt.
5. [Run-Parameter](./erste-schritte/eine-extraktion-ausfuehren#extraktionsparameter-festlegen) werden gelogt.
6. Daten von SAP werden angefordert.
 ![XU_logging_2](/img/content/xu/logging-extract-detail-02.png){:class="img-responsive"}
7. Paket Nr. 1 wird von SAP empfangen.
8. Paket Nr. 1 wird in den SQL-Server geschrieben.
9. Paket Nr. 2 wird von SAP empfangen.
10. Paket Nr. 2 wird in den SQL-Server geschrieben.
11. Paket Nr. 3 wird von SAP empfangen.
 ![XU_logging_3](/img/content/xu/logging-extract-detail-03.png){:class="img-responsive"}
12. Paket Nr. 3 wird in den SQL-Server geschrieben.
13. Extraktion wird abgeschlossen.


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}