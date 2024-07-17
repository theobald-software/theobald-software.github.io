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

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Board Connector.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Board Connector HelpCenter](https://helpcenter.theobald-software.com/board-connector/documentation/introduction/).

Board Connector protokolliert alle auf einem System durchgeführten Schritte in Log-Dateien. 
Die Log-Dateien werden im Produktverzeichnis gespeichert:<br>
z.B.: `C:\Program Files\BOARDConnector\logs`

Es werden verschiedene Arten der Log-Dateien erstellt.


|Typ | Name | Beschreibung | Pfad zum Ablageort |
|:------ | :------ |:--- | :--- |
|Server| ServiceLog.txt | Enthält die Aktivitäten von BCService.exe.| `C:ProgramFiles\Board Connector\logs` |
|Server| WebServer-Log: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log  | Der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Start des Servers angelegt, zusätzlich wird auch alle 24 Stunden eine neue Log-Datei angelegt. Theobald.Bc.Web.Listener.exe ist der dazugehörige Prozess.| `C:ProgramFiles\Board Connector\logs\servers\web\listener` |
|Server| Run-Logs: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log  | Der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Zeitpunkt der Entgegennahme einer TCP-Verbindung erstellt. Theobald.Bc.Web.Worker.exe ist der dazugehörige Prozess.| `C:ProgramFiles\Board Connector\logs\servers\web\worker` |  
|Extraktion| Extraktions-Logs: yyyyMMddTHHmmss.fffZ.log, z.B. 20201013T055455.465Z.log | Der Name enthält den Zeitstempel in UTC. Eine neue Datei wird zum Start einer Extraktion erstellt. Theobald.Bc.Web.Worker.exe ist der dazugehörige Prozess. | `C:\Program Files\BOARDConnector\logs\extractions\[Name_der_Extaktion]`|

Für mehr Informationen zu den Server-Prozessen, siehe [Server](./server).

{: .box-tip }
**Tipp:** Um Logs in einem anderen Verzeichnis zu speichern, verwenden Sie eine symbolische Verknüpfung (Symlink) zum logs-Ordner des Installationsverzeichnisses.
Beispiel für PowerShell:<br>
`New-Item -ItemType SymbolicLink -Target "E:\yuniolog" -Path "C:\Program Files\XtractProduct\logs"`


### Log Levels
Jeder Log-Eintrag ist einem so genannten Log-Level zugewiesen. Es gibt folgende Log-Levels:

- **Errors** sind Fehlermeldungen, die während des Extraktionsprozesses ausgegeben werden.
- **Information** - Statusmeldungen, über Vorgänge, die nicht zu einem Fehler führen.
- **Warnings** - Informationen über Probleme, die nicht zu einem Extraktionsfehler führen. Zum Beispiel Authentifizierungsfehler.
- **Debug Details** - detaillierte Informationen, die helfen, den Grund für aufgetretene Fehler zu finden.

### Logs Lesen - Extraktions-Log

Um die Prozesse von Board Connector besser zu verstehen, lesen Sie die in verständlicher Sprache verfassten Logs.
Das [Beispiel eines lesbaren Logs] (https://help.theobald-software.com/de/xtract-universal/logging#logs-lesen---extraktions-log) kann von Xtract Universal übernommen werden, da die Prozeduren ähnlich sind. 
Der einzige Unterschied besteht darin, dass Board Connector keine Destinationen hat und die Daten immer nach Board geschrieben werden. 

****
{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
