---
ref: xu-extraction-in-browser-01
layout: page
title: Extraktion im Browser aufrufen
description: Extraktion im Browser oder über HTTP aufrufen
product: xtract-universal
parent: automation
permalink: /:collection/:path
weight: 3
lang: de_DE
---

### Ausführen mit der Kommandozeile

Zum Ausführen von Extraktionen bietet Xtract Universal (XU) bietet ein Kommandozeilenprogramm an.
Die Windows-Version heißt xu.exe, während xu.elf die Version für Unix / Linux ist. 
Die Funktionalitäten von von den beiden Versionen sind dieselben. Daher sprechen wir im Folgenden meistens nur von der Windows-Version xu.exe stellvertretend für beide Versionen. Wenn es Unterschiede gibt, werden wir explizit drauf hinweisen.

### Installation der Kommandozeile

xu.exe / xu.elf sind eigenständige Programme, die keine Installation benötigen. Die xu.exe / xu.elf Datei kann einzeln in beliebige Verzeichnisse kopiert und dort ausgeführt werden. 
Die Windows-Version xu.exe finden Sie im Installationsverzeichnis (Standardmäßig unter: C:\Program Files\XtractUniversal).
Die Linux Version können Sie unter folgendem Link herunterladen:
https://cdn-files.theobald-software.com/download/XtractUniversal/xu.elf.tar.gz 

### Hilfe anzeigen
Eine Kurzdokumentation zur Verwendung kann mit dem Parameter -h angezeigt werden:
```
xu.exe -h
xu.elf -h
```
### Eine Extraktion starten
xu.exe verbindet sich zu einem XU Service und startet dort eine Extraktion mit optionalen Laufzeitparametern. Der XU Service, die Extraktion, sowie die Laufzeitparameter werden per über Kommandozeilenparameter angegeben.
Um eine Extraktion auf dem Xtract Universal Server zu starten, nutzen Sie den folgenden Befehl
```
xu.exe -n <name> [-s <host>] [-p <port>] [-o <option>]
```

#### Optionen
* -h 
Gibt die Hilfe-Seite aus
* -s HOST    
Die Host- oder IP-Adresse, die für die Verbindung verwendet werden soll. [Standardwert: localhost]. Den aktuellen Wert finden Sie im Dialog "Run" des Xtract Universal Designers.
* -p PORT    
Der Port vom XU Server. [Standardwert: 8065]. Den aktuellen Wert finden Sie im Dialog "Run" des Xtract Universal Designers.
* -o OPTION  
Laufparameter, die beim Ausführen der Extraktion verwendet werden.
Das Format für OPTION ist <Name>=<Wert>. Es können mehrere Parameter verwendet werden. Format ist: 
```
-o parameter1=wert1 -o parameter2=wert2  
```
* -e         Verwendet TLS (1.1 oder höher) für die Transportsicherheit.
* -a         Bricht alle aktuell laufenden Instanzen der angegebenen Extraktion ab.
* -c         Löscht den Ergebnis-Cache für die angegebene Extraktion und Optionen. Dies gilt nur für Pull-Destinationen.

#### Beispiele
```
xu.exe -n MaterialText
xu.exe -n MaterialText -s 10.0.0.42 -p 80 -o rows=1000
xu.exe -n MaterialText -s xusrv.corp.local -p 443 -o rows=1000 -o SPRAS=D -e
xu.exe -n MaterialText -a
```
#### Vordefinierte & eigens definierte Parameter
Vordefinierte bzw. eigens definierte Parameter finden Sie im Run-Dialog unter dem Reiter Extraction bzw. Custom. Diese Parameter können Sie mit der Option -o überschreiben.

#### URL als Parameter (nicht mehr empfohlen)
Die Möglichkeit, eine URL als einzigen Parameter mitzugeben, existiert nur aus Rückwärtskompatibilitätsgründen und wird nicht empfohlen:
```
xu.exe <url>
```
Führt eine Extraktion basierend auf dem <url> aus dem "Run"-Dialog des Xtract Universal Designers aus. <url> sollte in doppelte Anführungszeichen (") gesetzt werden.

Beispiel:
```
xu.exe "http://localhost:8065/?name=MaterialText"
```

Wenn Sie Parameter nutzen, stellen Sie ein Escape-Zeichen ^ vor dem & Zeichen.
```
C:\Program Files\XtractUniversal\xu.exe http://localhost:8065/?name=MyExtractionName^&Variable=Value
```

#### Standardausgabe & Standardfehlerausgabe
xu.exe / xu.elf läuft während der gesamten Ausführungsdauer der Extraktion. 
Bei Pull Destinations werden die extrahierten Daten im Format der Destination (z.B. CSV, JSON, ...) in die Standardausgabe (stdout) geschrieben.

Bei Push Destinations wird, nachdem die Ausführung einer Extraktion beendet ist, das Log der Extraktion im CSV-Format in die Standardausgabe (stdout) geschrieben. Anschließend wird xu.exe / xu.elf beendet. 

Logmeldungen werden dabei in die Standardfehlerausgabe (stderr) geschrieben.

#### Rückgabewert 
Nachdem xu.exe / xu.elf beendet wurde, zeigt der Rückgabewert des Programms an, ob Fehler während der Ausführung aufgetreten sind oder nicht. 
Ein Rückgabewert 0 zeigt eine fehlerfreie Ausführung an. 
Rückgabewerte unter 1000 entsprechen dem HTTP Status Code des Fehlers. 
Rückgabewerte ab 1000 zeigen andere Fehler an. Die Details des jeweiligen Fehlers können den Logmeldungen (stderr) entnommen werden. 

Rückgabewert	Beschreibung
```
0		Extraktion wurde erfolgreich ausgeführt
404 	Extraktion existiert nicht
1001 	Ein undefinierter Fehler ist aufgetreten
1002 	Die Datei konnte nicht gefunden werden
1013 	Ungültige Eingabedaten
1014 	Die Anzahl der Argumente ist ungültig
1015 	Der Name des Parameters ist unbekannt
1016 	Das Argument ist ungültig
1053 	Die URL ist falsch
1087 	Der Parameter ist ungültig
```

#### Beispiel
Mit dem folgenden Befehl führe ich die Extraktion mit dem Namen sapcustomers aus. Für Host und Port werden die Standardwerte verwendet.
```
"C:\Program Files\XtractUniversal\xu.exe" -n sapcustomers 1>>output1.txt 2>>output2.txt
```

Mit den Befehlen 1>>output1.txt bzw. 2>>output2.txt wird die Standardausgabe bzw. Standardfehlerausgabe in die entsprechende Datei geschrieben. 
Die Extraktion hat eine Push-Destination, somit wird das Log im CSV-Format in die Standardausgabe (stdout) geschrieben:
```
LineCount,Name,Timestamp,State,StateDescr,LogLevel,Source,Message
1,sapcustomers,2020-04-06_16:26:32.354,3,FinishedNoErrors,Info,LiveDataExtraction,Product version 4.8.5.3
2,sapcustomers,2020-04-06_16:26:32.355,3,FinishedNoErrors,Info,LiveDataExtraction,Using Theobald.Extractors Interface
3,sapcustomers,2020-04-06_16:26:32.409,3,FinishedNoErrors,Info,LiveDataExtraction,Theobald.Extractors version 1.14.5.5
4,sapcustomers,2020-04-06_16:26:33.071,3,FinishedNoErrors,Info,LiveDataExtraction,Found demo license.
5,sapcustomers,2020-04-06_16:26:33.072,3,FinishedNoErrors,Debug,LiveDataExtraction,expires 2020-07-01
6,sapcustomers,2020-04-06_16:26:33.084,3,FinishedNoErrors,Debug,LiveDataExtraction,Using Classic RFC SDK
7,sapcustomers,2020-04-06_16:26:33.084,3,FinishedNoErrors,Debug,LiveDataExtraction,Connecting to SAP application server...
8,sapcustomers,2020-04-06_16:26:33.084,3,FinishedNoErrors,Debug,LiveDataExtraction,Using plain authentication
9,sapcustomers,2020-04-06_16:26:33.603,3,FinishedNoErrors,Debug,LiveDataExtraction,Connected to SAP
10,sapcustomers,2020-04-06_16:26:33.604,3,FinishedNoErrors,Debug,LiveDataExtraction,"Host: ec5.theobald-software.com, System number: 00"
11,sapcustomers,2020-04-06_16:26:33.604,3,FinishedNoErrors,Info,RunParameter,Parameter 'quiet-push' overriden (new value: 'true')
12,sapcustomers,2020-04-06_16:26:33.637,3,FinishedNoErrors,Info,TheoReadTableExtractor,Starting extraction - using function module Z_THEO_READ_TABLE
13,sapcustomers,2020-04-06_16:26:33.649,3,FinishedNoErrors,Info,TheoReadTableExtractor,Extracting table KNA1
14,sapcustomers,2020-04-06_16:26:33.659,3,FinishedNoErrors,Debug,TheoReadTableExtractor,WHERE clause is empty
15,sapcustomers,2020-04-06_16:26:33.659,3,FinishedNoErrors,Debug,TheoReadTableExtractor,HAVING clause is empty
16,sapcustomers,2020-04-06_16:26:33.659,3,FinishedNoErrors,Debug,TheoReadTableExtractor,Data will be extracted in dialog work process
17,sapcustomers,2020-04-06_16:26:33.659,3,FinishedNoErrors,Debug,TheoReadTableExtractor,"Fetching packages (50,000 rows per package)"
18,sapcustomers,2020-04-06_16:26:34.295,3,FinishedNoErrors,Debug,TheoReadTableExtractor,Z_THEO_READ_TABLE version 1.x
19,sapcustomers,2020-04-06_16:26:34.295,3,FinishedNoErrors,Debug,TheoReadTableExtractor,"Received package #1 (8,829 rows)"
20,sapcustomers,2020-04-06_16:26:34.298,3,FinishedNoErrors,Info,LiveDataExtraction,Starting to write 8829 rows to destination...
21,sapcustomers,2020-04-06_16:26:34.428,3,FinishedNoErrors,Info,TheoReadTableExtractor,"Extraction finished - received 8,829 rows in total"
22,sapcustomers,2020-04-06_16:26:34.429,3,FinishedNoErrors,Debug,LiveDataExtraction,Waiting for destination...
23,sapcustomers,2020-04-06_16:26:35.848,3,FinishedNoErrors,Info,LiveDataExtraction,Finished writing rows to destination
24,sapcustomers,2020-04-06_16:26:35.848,3,FinishedNoErrors,Debug,LiveDataExtraction,Writing results to destination completed
```
Die Datei zur Standardfehlerausgabe hat folgenden Inhalt:
```
xu.exe - Xtract Universal Command Line Utility, Version 4.8.5.3
Found 2 IP addresses for localhost
Connecting to [::1]:8065
Connected
Extraction timestamp: 2020-04-06_16:26:32.284
Detected push destination.
Content-Type: text/plain; charset=utf-8
Extraction finished successfully
```
Wenn wir nun eine Pull-Destination wie z.B. Webservice mit JSON-Format nehmen, dann zeigt die Standardausgabe die extrahierten Daten im JSON-Format: 
```
[
{"KUNNR":"0000000001","LAND1":"US","NAME1":"B2B Demo Peakboard","ORT01":"PHILADELPHIA"},
{"KUNNR":"0000000002","LAND1":"DE","NAME1":"Wett","ORT01":"Walldorf"}
]
```

### Extraktion asynchron aufrufen
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
Mit diesem Zeitstempel kann dann auf das entsprechende Log über die entsprechende URL zugegriffen werden: 
```
http://localhost:8065/log/?req_type=extraction&name=sapcustomers2&timestamp=2020-04-06_16:17:10.121 
```

### Aufruf einer URL direkt über HTTP(S)
Alternativ können Sie dann direkt die URL einer Extraktion im Browser oder in einem entsprechenden Skript oder Programm aufrufen. Als Ergebnis wird dasselbe wie bei der Standardausgabe des Kommandozeilenprogrammes geliefert. 

### Weitere Themen:
- Extraktion ausführen mit:
	- [Windows Script](./automation/run-w-windows-script)
	- [Power Shell](./automation/run-w-power-shell)
- Extraktion automatisieren mit:
	- [Windows Task Scheduler](./automation/automate-w-windows-task-scheduler)
	- [SQL Server Agent](./automation/automate-w-sql-server-agent)