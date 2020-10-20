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

Extraktionen können über die Kommandozeilen-Tools `xu.exe` (Windows Umgebung) und `xu.elf` (Unix-, Linuxumgebung) ausgeführt werden.
Beide Versionen unterscheiden sich nicht in ihrer Funktionalität und können als eigenständige Programme auf beliebigen Rechnern kopiert und ausgeführt werden, solange der Host des Xtract Universal Servers erreichbar ist. 

Das Kommandozeilen-Tool `xu.exe` befindet sich nach der Installation im [Programmverzeichnis](./einfuehrung/installation-und-update#dateien-des-programmverzeichnisses) `C:\Program Files\XtractUniversal` (standardmäßig).

Die Linux-Version des Kommandozeilen-Tools `xu.elf` kann unter diesem [Download-Link](https://cdn-files.theobald-software.com/download/XtractUniversal/xu.elf.tar.gz ) heruntergeladen werden.

| Kommandozeilen-Tool | Ablageort | Betriebssystem |
|---|:---|---|
| `xu.exe` | `C:\Program Files\XtractUniversal` | Windows |
| `xu.elf` | [Download Link](https://cdn-files.theobald-software.com/download/XtractUniversal/xu.elf.tar.gz ) | Unix / Linux |


### Extraktion aufrufen
Der Host-Name unter dem der XU-Server bzw. Service läuft, der Extraktionsname, sowie die Laufzeitparameter werden über Kommandozeilenparameter angegeben.

Rufen Sie das Kommandozeilen-Tool in folgender Form auf, um eine Extraktion auf dem Xtract Universal Server zu starten:

**Syntax:** <br>
`xu.exe -n <name> [-s <host>] [-p <port>] [-o <option>]... [-e] [-a] [-c]`

Beispiel: <br>
`xu.exe -n MaterialText -s xusrv.corp.local -p 443 -o rows=1000 -o SPRAS=D -e`

Das Kommandozeilen-Tool verbindet sich zu einem XU-Service und startet eine Extraktion mit den folgenden optionalen Laufzeitparametern:

| Laufzeit-<br>parameter   | Beschreibung | Syntax  |
|:---|:---| --- |
| -n   |  Angabe des Namens der Extraktion  | `c:\Program Files\XtractUniversal>xu.exe -n <name>` |
| -h        |  Eine Kurzdokumentation des Kommandozeilen-Tools  |   `c:\Program Files\XtractUniversal>xu.exe -h` |
|   -s       |  Der Name oder die IP des Rechners, auf dem der Xtract Universal Service läuft. Der Standardwert ist localhost. <br> Den aktuellen Wert finden Sie im "Run" Dialog des [Designers](./erste-schritte/designer-overview#hauptmenüleiste-1).|  `C:\Program Files\XtractUniversal>xu.exe -s <host>`|
| -p    | Der Port, unter dem der Xtract Universal Service läuft. Der Standardwert ist 8065. <br> Den aktuellen Wert finden Sie im "Run" Dialog des [Designers](./erste-schritte/designer-overview#hauptmenüleiste-1)  | `C:\Program Files\XtractUniversal>xu.exe -p <port>` |
|  -o     | Parameter, deren Werte beim Ausführen der Extraktion gesetzt werden sollen. Es können mehrere Parameter verwendet werden. | `-o parameter1=wert1 -o parameter2=wert2`.|
|  -e  |Verwendet [TLS](https://docs.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol) (1.1 oder höher) für die Transportsicherheit. |   `c:\Program Files\XtractUniversal>xu.exe -e`|
| -a    |Bricht alle aktuell laufenden Instanzen der angegebenen Extraktion ab. | `c:\Program Files\XtractUniversal>xu.exe -a` |
|  -c   | Löscht den Result-Cache (Ergebnis Cache) für die angegebene Extraktion und Optionen.<br> Dies gilt nur für [Pull-Destinationen](./xu-destinationen#pull--und-push-destinationen). | `C:\Program Files\XtractUniversal>xu.exe -c` |  

#### Beispiele

`xu.exe -n MaterialText`<br>
`xu.exe -n MaterialText -s 10.0.0.42 -p 80 -o rows=1000`<br>
`xu.exe -n MaterialText -s xusrv.corp.local -p 443 -o rows=1000 -o SPRAS=D -e`<br>
`xu.exe -n MaterialText -a`<br>
`xu.exe "http://localhost:8065/?name=MaterialText&rows=1000"`<br>


### Rückgabewert 
Folgende [Rückgabewerte der Extraktion](./extraktion_einplanen#r%C3%BCckgabe) sind über die Kommandozeilen-Tools definiert.

Wenn eine Operation erfolgreich abgeschlossen wurde, gibt das Programm den Wert 0 zurück.
Im Falle eines Fehlers, gibt das Programm einen der folgenden Codes zurück:

|HTTP Status-Codes	|Beschreibung|
|---|---|
|404 |	Extraktion existiert nicht|
|1001|	Ein undefinierter Fehler ist aufgetreten|
|1002|	Die Datei konnte nicht gefunden werden|
|1013|	Ungültige Eingabedaten|
|1014|	Die Anzahl der Argumente ist ungültig|
|1015|	Der Name des Parameters ist unbekannt|
|1016|	Das Argument ist ungültig|
|1040|	Timeout-Fehler: Wartezeit auf HTTP-Antwort der `xu.exe` überschritten |
|1053|	Die URL ist falsch |
|1087|	Der Parameter ist ungültig |

### Standardausgabe und Standardfehlerausgabe
Die Ausgabe ist abhängig vom Destinationstyp der Extraktion. 
Bei einem erfolgreichen Aufruf wird der Rückgabewert 0 ausgegeben.

#### Standardausgabe bei Pull-Destinationen
Bei [Pull-Destinationen](./xu-destinationen#pull--und-push-destinationen) (z.B. HTTP-CSV, HTTP-JSON, etc.) werden die extrahierten Daten im entsprechenden Format (z.B. CSV, JSON, ...) in die Standardausgabe (stdout) geschrieben.

#### Standardausgabe bei Push-Destinations
Bei [Push-Destinationen](./xu-destinationen#pull--und-push-destinationen) wird standardmäßig das [Log der Extraktion](./logging/extraktion-logging) im CSV-Format in die Standardausgabe (stdout) geschrieben. 

#### Standardfehlerausgabe
Log- und Fehlermeldungen werden dabei in die Standardfehlerausgabe (stderr) geschrieben.

### Weitere Optionen zum Aufruf einer Extraktion

|Beschreibung	|Syntax|
|---|---|---|
|Log-Ausgabe einer Extraktion unterdrücken - nur bei synchroner Extraktion mit Push-Destinationen |`-o quiet-push=true`|
|Aufruf synchroner Extraktion (Standard)|	`-o wait=false`|
|Rückgabe des Zeitstempels einer Extraktion |`"C:\Program Files\XtractUniversal\xu.exe" -n sapcustomers2 -o wait=false 1>>false_output1.txt 2>>false_output2.txt`|

<!---
kann man das irgendwo noch erklären? Synchroner uns asynchroner Aufruf?
-->

{: .box-tip }
**Tipp:** Der XU-Server verfügt über weitere Funktionalitäten wie z.B. den Status eines (asynchronen) Extraktionsaufrufs prüfen, Logs oder Metadaten einer Extraktion abfragen usw. Diese Funktionalitäten werden nicht über das Kommandozeilen-Tool, sondern nur über [Webservices](./call-via-webservice#weitere-webservices) aufgerufen.

#### Weiterführende Links
- [Extraktion via Skript ausführen](./call-via-script)
- [Extraktion via Scheduler ausführen](./call-via-scheduler)
- [Extraktion via ETL-Tool ausführen](./call-via-etl)
