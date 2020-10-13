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

Es gibt verschiedene Arten der Log-Dateien.


|Typ | Name | Beschreibung | Pfad zum Ablageort |
|:------ | :------ |:--- | :--- |
|Server| ServiceLog.txt | Enthält die Aktivitat von XtractService.exe.| C:ProgramFiles\XtractUniversal\logs |
|Server| ConfigServer-Log: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log | der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Start des Servers angelegt, zusätzlich wird auch alle 24 Stunden eine neue Log-Datei angelegt. XtractConfigServer.exe ist der dazugehörige Prozess.| C:ProgramFiles\XtractUniversal\logs\server\config |
|Server| WebServer-Log: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log  | der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Start des Servers angelegt, zusätzlich wird auch alle 24 Stunden eine neue Log-Datei angelegt. XtractWebServer.exe| C:ProgramFiles\XtractUniversal\logs\server\web |
|Server| Run-Logs: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log  | der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Zeitpunkt der Entgegennahme einer TCP-Verbingung erstellt.  der dazugehörige Prozess XtractRun.exe| C:ProgramFiles\XtractUniversal\logs\server\run |  
|Extraktion| Extraktions-Logs: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log | Der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Start einer Extraktion erstellt. der dazugehörige Prozess XtractRun.exe | C:\Program Files\XtractUniversal\logs\extractions\[Name_der_Extaktion]|

### Logs im Designer

Extraktions-Logs und die Run-Logs genannt Sever-Logs im Designer.
Das sind auch die Logs, die man sich im Designer unter **[Server]>[Logs]** anzeigen lassen kann.

### Logs Lesen
1. allg Technische Informationen
2. SQL Destination für Empfang von Daten vorbereiten
3. Lizenzprüfung, mit Entität usw. Link
4. Verbindung zum SAP herstellen
5. [Run-Parameter](./erste-schritte/eine-extraktion-ausfuehren#extraktionsparameter-festlegen) werden gelogt.
6. Daten von SAP anfordern
7. Paket Nr. 1 von SAP empfangen
8. Paket Nr. 1 in SQL Server schreiben.
9. Paket Nr. 2 von SAP empfangen
10. Paket Nr. 2 in SQL Server schreiben.
11. Paket Nr. 3 von SAP empfangen
12. Paket Nr. 3 in SQL Server schreiben.
13. Extraktion abschließen.


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}