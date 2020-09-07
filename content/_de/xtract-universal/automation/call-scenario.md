---
ref: xu-extract-scenario-01
layout: page
title: Beispiel zum Aufruf einer Extraktion
description: Beispiel zum Aufruf einer Extraktion
product: xtract-universal
parent: automation
permalink: /:collection/:path
weight: 13
lang: de_DE
---
In diesem Abschnitt beschreiben wir den Aufruf einer Extraktion über die Kommandozeile. 

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
