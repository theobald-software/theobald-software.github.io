---
ref: xu-call-command-line-01
layout: page
title: Aufruf via Kommandozeile 
description: Aufruf einer Extraktion via Kommandozeile 
product: xtract-universal
parent: automation
permalink: /:collection/:path
weight: 2
lang: de_DE
---

Die Ausführung von Extraktionen kann in Xtract Universal über die Kommandozeilen-Tools `xu.exe` (Windows Umgebung) als auch `xu.elf` (Unix-, Linuxumgebung) durchgeführt werden.
Beide Versionen unterscheiden sich nicht in ihrer Funktionalität und können als eigenständige Programme in beliebigen Verzeichnissen kopiert uns ausgeführt werden. 

Das Kommandozeilen-Tools `xu.exe` befindet sich nach der Installation in das Standardverzeichnis `C:\Program Files\XtractUniversal`,<br> 
siehe [Dateien des Installationsverzeichnisses](./einfuehrung/installation-und-update#dateien-des-installationsverzeichnisses).

Die Linux-Version Kommandozeilen-Tools `xu.elf` kann von folgendem [Download Link](https://cdn-files.theobald-software.com/download/XtractUniversal/xu.elf.tar.gz ) bezogen werden.

oder als übersichtliche Tabelle

| command tool | access | environment |
|---|---|---|
| `xu.exe` | `C:\Program Files\XtractUniversal` | Windows |
| `xu.elf` | [Download Link](https://cdn-files.theobald-software.com/download/XtractUniversal/xu.elf.tar.gz ) | Unix / Linux |


### Eine Extraktion aufrufen
Der XU-Service, die Extraktion, sowie die Laufzeitparameter werden über Kommandozeilenparameter angegeben.

Um eine Extraktion auf dem Xtract Universal Server zu starten, muss der Befehl in folgender Form aufgerufen werden:

Syntax:
`xu.exe -n <name> [-s <host>] [-p <port>] [-o <option>]... [-e] [-a] [-c]`

Beispiel:
`xu.exe -n MaterialText -s xusrv.corp.local -p 443 -o rows=1000 -o SPRAS=D -e`

Das Kommandozeilen-Tool verbindet sich zu einem XU-Service und startet eine Extraktion mit den folgenden optionalen Laufzeitparametern.

| Laufzeit-<br>parameter   | Beschreibung | Syntax  |
|:---|:---| --- |
| -n   |  Angabe des Namens der Extraktion analog zum XU-Designer.  | `c:\Program Files\XtractUniversal>xu.exe -n <name>` |
| -h        |  Eine Kurzdokumentation zur Verwendung kann mit dem Parameter -h angezeigt werden  |   `c:\Program Files\XtractUniversal>xu.exe -h` |
|   -s       |  Die Host- oder IP-Adresse, die für die Verbindung verwendet werden soll - Standardwert: localhost. <br> Den aktuellen Wert finden Sie im Dialog "Run" des Xtract Universal Designers.|  `c:\Program Files\XtractUniversal>xu.exe -s <host>`|
| -p    | Der Port vom XU-Server - Standardwert: 8065. Den aktuellen Wert finden Sie im Dialog *Run* des Xtract Universal Designers.  | `c:\Program Files\XtractUniversal>xu.exe -p <port>` |
|  -o     | Laufparameter, die beim Ausführen der Extraktion verwendet werden. Es können mehrere Parameter verwendet werden. | `-o parameter1=wert1 -o parameter2=wert2`.|
|  -e  |Verwendet TLS (1.1 oder höher) für die Transportsicherheit. |   `c:\Program Files\XtractUniversal>xu.exe -e`|
| -a    |Bricht alle aktuell laufenden Instanzen der angegebenen Extraktion ab. | `c:\Program Files\XtractUniversal>xu.exe -a` |
|  -c   | Löscht den Ergebnis-Cache für die angegebene Extraktion und Optionen.<br> Dies gilt nur für Pull-Destinationen. | `c:\Program Files\XtractUniversal>xu.exe -c` |  

#### Beispiele

`xu.exe -n MaterialText`<br>
`xu.exe -n MaterialText -s 10.0.0.42 -p 80 -o rows=1000`<br>
`xu.exe -n MaterialText -s xusrv.corp.local -p 443 -o rows=1000 -o SPRAS=D -e`<br>
`xu.exe -n MaterialText -a`<br>
`xu.exe "http://localhost:8065/?name=MaterialText&rows=1000"`<br>


### Rückgabewert 
Folgende [Rückgabewerte der Extraktion](https://help.theobald-software.com/de/xtract-universal/fortgeschrittene-techniken/extraktion_einplanen#r%C3%BCckgabe) über die Kommandozeilen-Tools sind definiert.

oder einfach den Inhalt aus der Seite reinkopieren:

Wenn eine Operation erfolgreich abgeschlossen wurde, gibt das Programm den Wert 0 zurück.
Im Falle eines Fehlers, gibt das Programm einen der folgenden Codes zurück:

|HTTP Status-Codes	|Beschreibung|
|---|---|---|
|404 |	Extraktion existiert nicht|
|1001|	Ein undefinierter Fehler ist aufgetreten|
|1002|	Die Datei konnte nicht gefunden werden|
|1013|	Ungültige Eingabedaten|
|1014|	Die Anzahl der Argumente ist ungültig|
|1015|	Der Name des Parameters ist unbekannt<
|1016|	Das Argument ist ungültig|
|1040|	Timeout Fehler: Wartezeit auf HTTP-Antwort der `xu.exe` überschritten |
|1053|	Die URL ist falsch |
|1087|	Der Parameter ist ungültig |

#### Standardausgabe
Die Ausgabe ist abhängig vom Destinationstyp der Extraktion. 
Bei einem erfolgreichen Aufruf kommt der Rückgabewert 0.

#### Standardausgabe bei Pull-Destinations
Bei Pull Destinations (z.B. HTTP-CSV, HTTP-JSON, ...) werden die extrahierten Daten im entsprechenden Format (3) (z.B. CSV, JSON, ...) in die Standardausgabe (stdout) geschrieben.

#### Standardausgabe bei Push-Destinations
Bei Push Destinations wird standardmäßig das Log der Extraktion im CSV-Format in die Standardausgabe (stdout) geschrieben. 

#### Standardfehlerausgabe
Log- und Fehlermeldungen werden dabei in die Standardfehlerausgabe (stderr) geschrieben.

### Weitere Optionen zum Aufruf einer Extraktion

|Beschreibung	|Syntax|
|---|---|---|
|Log-Ausgabe einer Extraktion unterdrücken - nur bei synchroner Extraktion mit Push-Destination |`-o quiet-push=true`|
|Aufruf synchrone Extraktion (Standard)|	`-o wait=false`|
|Rückgabe des Zeitstempels einer Extraktion |`"C:\Program Files\XtractUniversal\xu.exe" -n sapcustomers2 -o wait=false 1>>false_output1.txt 2>>false_output2.txt`|

{: .box-tip }
**Tipp:** Xtract Universal bietet auch weitere [Webservices](./call-via-webservice#weitere-webservices), über die weitere Informationen aufgerufen werden können z.B. Status der (asynchronen) Extraktion prüfen, Logs oder Metadaten der Extraktion abfragen. 


#### Weiterführende Links:
- [Extraktion via Skript ausführen](./call-via-script)
- [Extraktion via Scheduler ausführen](./call-via-scheduler)
- [Extraktion via ETL-Tool ausführen](./call-via-etl)
