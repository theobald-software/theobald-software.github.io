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

Zum Ausführen von Extraktionen bietet Xtract Universal (XU) ein Kommandozeilenprogramm an, sowohl in einer Windows-Version (xu.exe) als auch in einer für Unix / Linux (xu.elf). 
Die Funktionalität beider Versionen ist dieselbe. Daher sprechen wir im Folgenden meistens nur von der Windows-Version xu.exe stellvertretend für beide Versionen. Wenn es Unterschiede gibt, werden wir explizit drauf hinweisen.

### Installation der Kommandozeile

xu.exe / xu.elf sind eigenständige Programme, die keine Installation benötigen. Die xu.exe / xu.elf Datei kann einzeln in beliebige Verzeichnisse kopiert und dort ausgeführt werden. 
Die Windows-Version xu.exe finden Sie im Installationsverzeichnis (Standardmäßig unter: C:\Program Files\XtractUniversal).

#### Linux-Version der Kommandozeile
Die Linux Version können Sie unter folgendem Link herunterladen:
https://cdn-files.theobald-software.com/download/XtractUniversal/xu.elf.tar.gz 

## Bedienung der Kommandozeile 
Eine Kurzdokumentation zur Verwendung kann mit dem Parameter -h angezeigt werden:
```
xu.exe -h
xu.elf -h
```
### Eine Extraktion aufrufen
xu.exe verbindet sich zu einem XU Service und startet dort eine Extraktion mit optionalen Laufzeitparametern. Der XU Service, die Extraktion, sowie die Laufzeitparameter werden per über Kommandozeilenparameter angegeben.
Um eine Extraktion auf dem Xtract Universal Server zu starten, nutzen Sie den folgenden Befehl
```
xu.exe -n <name> [-s <host>] [-p <port>] [-o <option>]
```

Es gibt folgende Optionen beim Aufruf einer Extraktion: 
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

Unten werden ein paar Beispiele aufgeführt.
```
xu.exe -n MaterialText
```
Vordefinierte bzw. Benutzerdefinierte Parameter finden Sie im "Run Extraction"-Dialog. Diese Parameter können Sie mit der Option -o überschreiben.

```
xu.exe -n MaterialText -s 10.0.0.42 -p 80 -o rows=1000
xu.exe -n MaterialText -s xusrv.corp.local -p 443 -o rows=1000 -o SPRAS=D -e
xu.exe -n MaterialText -a
```

#### Aufruf über URL-Parameter (nicht mehr empfohlen)
Die Möglichkeit, eine URL als einzigen Parameter mitzugeben, existiert nur aus Rückwärtskompatibilitätsgründen und wird nicht mehr empfohlen:
```
xu.exe <url>
```
Führt eine Extraktion basierend auf der <url> die Extraktion. 
Die URL finden Sie im "Run Extraction"-Dialog des Xtract Universal Designers. <url> sollte in doppelte Anführungszeichen (") gesetzt werden.

Beispiel:
```
xu.exe "http://localhost:8065/?name=MaterialText"
xu.exe "http://localhost:8065/?name=MyExtractionName&Variable=Value"
```

### Rückgabewert 
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
### Weiterführende Abfragen über den Webservice
Xtract Universal bietet auch einen Webservice, über den z.B. folgende Informationen aufgerufen werden können. 
- Status der (asynchronen) Extraktion prüfen
- Log der Extraktion abfragen 
- Medataten der Extraktion abfragen 
Siehe dazu die Dokumentation zum Aufruf via Webservice.

### Ausführliches Beispiel
Mit dem folgenden Befehl wird die Extraktion mit dem Namen sapcustomers ausgeführt. Für Host und Port werden die Standardwerte verwendet.
```
"C:\Program Files\XtractUniversal\xu.exe" -n sapcustomers 1>>output1.txt 2>>output2.txt
```
Mit den Optionen 1>>output1.txt bzw. 2>>output2.txt wird die Standardausgabe bzw. Standardfehlerausgabe in die entsprechende Datei geschrieben. 

Die Extraktion hat eine Push-Destination, somit wird standardmäßig das Log im CSV-Format in die Standardausgabe (stdout) geschrieben:
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
Siehe oben die Optionen, um die Log-Ausgabe zu underdrücken oder die Extraktion asynchron aufzurufen. 

Wenn wir nun eine Pull-Destination wie z.B. im HTTP-JSON-Format nehmen, dann zeigt die Standardausgabe die extrahierten Daten im JSON-Format: 
```
[
{"KUNNR":"0000000001","LAND1":"US","NAME1":"B2B Demo Peakboard","ORT01":"PHILADELPHIA"},
{"KUNNR":"0000000002","LAND1":"DE","NAME1":"Wett","ORT01":"Walldorf"}
]
```

Weitere Themen:
- [Extraktion via Skript ausführen](./call-via-script)
- [Extraktion via Scheduler ausführen](./call-via-scheduler)
- [Extraktion via ETL-Tool ausführen](./call-via-etl)
