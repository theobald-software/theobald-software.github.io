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

Zum Ausführen von Extraktionen bietet Xtract Universal ein Kommandozeilen-Tool an, sowohl in einer Windows-Version (xu.exe) als auch in einer für Unix- / Linux-Version (xu.elf). 
Die Funktionalität beider Versionen ist identisch. 

### Installation des Kommandozeilen-Tools

xu.exe / xu.elf sind eigenständige Programme, die keine Installation benötigen. Die xu.exe / xu.elf-Datei kann einzeln in beliebige Verzeichnisse kopiert und dort ausgeführt werden. 

Die Windows-Version des Kommandozeilen-Tools `xu.exe` finden Sie im Installationsverzeichnis (standardmäßig unter: `C:\Program Files\XtractUniversal´).

Die Linux-Version Kommandozeilen-Tools `xu.elf` können Sie von der [Theobald Software](https://cdn-files.theobald-software.com/download/XtractUniversal/xu.elf.tar.gz ) herunterladen.


### Eine Extraktion aufrufen
Das Kommandozeilen-Tool `xu.exe / xu.elf` verbindet sich zu einem XU-Service und startet eine Extraktion mit optionalen Laufzeitparametern. 

Der XU-Service, die Extraktion, sowie die Laufzeitparameter werden über Kommandozeilenparameter angegeben.

Um eine Extraktion auf dem Xtract Universal Server zu starten, nutzen Sie den folgenden Befehl:

`xu.exe -n <name> [-s <host>] [-p <port>] [-o <option>]`


### Bedienung des Kommandozeilen-Tools

| Befehl   | Beschreibung |   |
|----------|-----| ----- |
| -h       | Eine Kurzdokumentation zur Verwendung kann mit dem Parameter -h angezeigt werden  |   |
|   -s     |   HOST   |  Die Host- oder IP-Adresse, die für die Verbindung verwendet werden soll. [Standardwert: localhost]. Den aktuellen Wert finden Sie im Dialog "Run" des Xtract Universal Designers.|
| -p   |  PORT | Der Port vom XU Server. [Standardwert: 8065]. Den aktuellen Wert finden Sie im Dialog "Run" des Xtract Universal Designers.  |
|  -o    |   OPTION    | Laufparameter, die beim Ausführen der Extraktion verwendet werden. Das Format für OPTION ist <Name>=<Wert>. Es können mehrere Parameter verwendet werden. Format ist: `-o parameter1=wert1 -o parameter2=wert2`.|
|  -e   | Verwendet TLS (1.1 oder höher) für die Transportsicherheit. |  |
| -a   |  Bricht alle aktuell laufenden Instanzen der angegebenen Extraktion ab.|   |
|  -c  |  Löscht den Ergebnis-Cache für die angegebene Extraktion und Optionen. Dies gilt nur für Pull-Destinationen.  |     | 
| -n  |     |    |

Unten werden ein paar Beispiele aufgeführt.
`xu.exe -n MaterialText`
Vordefinierte bzw. Benutzerdefinierte Parameter finden Sie im "Run Extraction"-Dialog. Diese Parameter können Sie mit der Option -o überschreiben.

`xu.exe -n MaterialText -s 10.0.0.42 -p 80 -o rows=1000` <br>
`xu.exe -n MaterialText -s xusrv.corp.local -p 443 -o rows=1000 -o SPRAS=D -e` <br>
`xu.exe -n MaterialText -a` <br>

### Aufruf über URL-Parameter (nicht mehr empfohlen)
Die Möglichkeit, eine URL als einzigen Parameter mitzugeben, existiert nur aus Rückwärtskompatibilitätsgründen und wird nicht mehr empfohlen:
`xu.exe <url>`
Führt eine Extraktion basierend auf der <url> die Extraktion. 
Die URL finden Sie im "Run Extraction"-Dialog des Xtract Universal Designers. <url> sollte in doppelte Anführungszeichen (") gesetzt werden.

Beispiel: <br>
`xu.exe "http://localhost:8065/?name=MaterialText"` <br>
`xu.exe "http://localhost:8065/?name=MyExtractionName&Variable=Value"`

### Rückgabewert 
Nachdem xu.exe / xu.elf beendet wurde, zeigt der Rückgabewert des Programms an, ob Fehler während der Ausführung aufgetreten sind oder nicht. 
Ein Rückgabewert 0 zeigt eine fehlerfreie Ausführung an. 
Rückgabewerte unter 1000 entsprechen dem HTTP Status Code des Fehlers. 
Rückgabewerte ab 1000 zeigen andere Fehler an. Die Details des jeweiligen Fehlers können den Logmeldungen (stderr) entnommen werden. 

|Rückgabewert |	Beschreibung |
|  ----  |  -------    |
|0	|	Extraktion wurde erfolgreich ausgeführt |
|404 |	Extraktion existiert nicht |
|1001 |	Ein undefinierter Fehler ist aufgetreten |
|1002 |	Die Datei konnte nicht gefunden werden |
|1013 |	Ungültige Eingabedaten |
|1014 |	Die Anzahl der Argumente ist ungültig |
|1015 |	Der Name des Parameters ist unbekannt |
|1016 |	Das Argument ist ungültig |
|1053 |	Die URL ist falsch |
|1087 |	Der Parameter ist ungültig |


### Standardausgabe
Die Ausgabe ist abhängig vom Destinationstyp der Extraktion. 
Bei einem erfolgreichen Aufruf kommt der Rückgabewert 0.

#### Standardausgabe bei Pull-Destinations
Bei Pull Destinations (z.B. HTTP-CSV, HTTP-JSON, ...) werden die extrahierten Daten im entsprechenden Format (3) (z.B. CSV, JSON, ...) in die Standardausgabe (stdout) geschrieben.

#### Standardausgabe bei Push-Destinations
Bei Push Destinations wird standardmäßig das Log der Extraktion im CSV-Format in die Standardausgabe (stdout) geschrieben. 

#### Standardfehlerausgabe
Log- und Fehlermeldungen werden dabei in die Standardfehlerausgabe (stderr) geschrieben.

### Weitere Optionen zum Aufruf einer Extraktion
#### Log-Ausgabe einer Extraktion unterdrücken 
Mit dem Parameter 
```
-o quiet-push=true 
```
kann man die Log-Ausgabe unterdrücken, wenn die Extraktion  
- synchron aufgerufen wird und  
- eine Push-Destination hat 
unterdrücken. Default Wert ist false und somit wird standardmäßig das Log der Extraktion bei einer Push-Destination zurückgegeben. Sowohl bei einer Pull-Destination als auch bei einem asynchronem Aufruf hat dieser Parameter keine Wirkung.

#### Asynchroner Aufruf einer Extraktion
Standardmäßig wird eine Extraktion synchron aufgerufen. Mit dem Parameter
```
-o wait=false 
```
kann der Aufruf asynchron erfolgen, wie z.B. im folgenden Befehl:
```
"C:\Program Files\XtractUniversal\xu.exe" -n sapcustomers2 -o wait=false 1>>false_output1.txt 2>>false_output2.txt 
```
In diesem Fall wird der Zeitstempel der Ausführung zurückgegeben:
```
2020-04-06_16:13:19.926 
```
### Weiterführende Abfragen
Xtract Universal bietet auch weitere [Webservices](./call-via-webservice#weitere-webservices), über die weitere Informationen aufgerufen werden können. 
- Status der (asynchronen) Extraktion prüfen
- Log der Extraktion abfragen 
- Medataten der Extraktion abfragen 
Siehe dazu die Dokumentation zum Aufruf via Webservice.

#### Weiterführende Links:
- [Extraktion via Skript ausführen](./call-via-script)
- [Extraktion via Scheduler ausführen](./call-via-scheduler)
- [Extraktion via ETL-Tool ausführen](./call-via-etl)
