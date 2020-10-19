---
ref: xu-extraction-via-webservice-01
layout: page
title: Aufruf via Webservice
description: Extraktion via Webservice z.B. im Browser aufrufen
product: xtract-universal
parent: automation
permalink: /:collection/:path
weight: 3
lang: de_DE
---


### Aufruf via Webservice
Sie können eine Extraktion via Webservice-Aufruf direkt ausführen. 
Der Aufruf erfolgt in der Regel aus einem Skript, Scheduler oder BI-Tool. Zu Testzwecken kann der Aufruf auch aus einem Webbrowser erfolgen, wie der XU-Designer dies standardmäßig aufruft. Der Aufruf erfolgt über eine URL mit folgendem Fomat:

```
<Protokoll>://<HOST oder IP-Adresse>:<Port>/?name=<Name der Extraktion>{&<parameter_i>=<wert_i>}
```

- HTTP oder HTTPS
HTTPS wird als Protokoll für die Transportsicherheit ebenfalls unterstützt, siehe Konfiguration dazu. 
- Host oder IP des XU-Servers
Der Name oder die IP des Rechners, auf dem der Xtract Universal Server läuft. Der Standardwert ist localhost. <br> Den aktuellen Wert finden Sie im Dialog "Run" des Xtract Universal Designers. 
- Port des XU-Servers
Der Port, unter dem der XU-Server läuft. Der Standardwert ist 8065. Den aktuellen Wert finden Sie im Dialog *Run* des Xtract Universal Designers.
- Name der Extraktion
- Optionale Parameter
Parameter, deren Werte beim Ausführen der Extraktion gesetzt werden sollen. Das Format ist &<parameter>=<wert>. Es können mehrere Parameter verwendet werden: 
```
&<parameter1>=<wert1>&<parameter2>=<wert2>  
```

Eine URL zum Aufruf eine Extraktion sieht beispielsweise folgendermaßen aus:

```
http://localhost:8065/?name=Plants
```

### Aufruf via Webservice mit Parameter

Vordefinierte bzw. Benutzerdefinierte Parameter finden Sie im "Run Extraction"-Dialog. Diese Werte dieser Parameter können Sie beim Aufruf mitgeben.
```
http://localhost:8065/?name=Plants&rows=100
http://localhost:8065/?name=Plants&rows=100&lang=EN
```

### HTTP Status Code & Header der Antwort
Die Antwort eines Webservice-Aufrufs enthält die folgenden Informationen:
- einen HTTP-Status Code 
- Angaben im HTTP-Header und 
- Rückgabe im HTTP-Body. 


#### HTTP-Statuscode der Websevice-Antwort
Ein HTTP Status Code 200 zeigt einen fehlerfreien Aufruf der Extraktion an, sagt jedoch nicht über den Status der Ausführung der Extraktion. 
Ein HTTP Status Code 200 besagt, dass die Extraktion erfolgreich angestartet wurde. Der Code besagt nicht, dass die Extraktion erfolgreich ausgeführt und beendet wurde.
Das Status der Extraktion bzw. das Log kann über den entsprechenden Webservice aufgerufen werden, siehe unten. <br>

Ein HTTP Status Code 404 bedeutet, dass die aufgerufene Extraktion nicht existiert. Detaillierte Infos können über den Log-Webservice aufgerufen werden.<br>
Der Xtract Universal Webserver liefert die Beschreibung des HTTP Status Code in Schwäbisch-Deutsch (z.B. Machamer für OK).

#### HTTP-Header der Websevice-Antwort
Man erhält den Timestamp des Extraktionslaufs über folgenden HTTP Header:
```
X-XU-Timestamp: 2020-05-28_09:58:47.312
```

### Rückgabe eines Webservice-Aufrufs
Die Rückgabe im HTTP-Body ist abhängig vom Destinationstyp der Extraktion. 

#### Rückgabe bei pull destinations
Bei einem erfolgreichen Aufruf (1) kommt der HTTP-Statuscode 200 (2).
Bei Pull Destinations (HTTP-CSV oder HTTP-JSON) werden die extrahierten Daten im entsprechenden Format der Destination (3) (CSV, JSON) zurückgegeben. Siehe unten das Screenshot eines konkreten Beispiels.

![Webservice Call pull](/img/content/xu/automation/webservice/xu_call_webservice_csv.png){:class="img-responsive"}

#### Rückgabe bei push destinations
Bei Push Destinations wird standardmäßig das Log der Extraktion im CSV-Format zurückgegeben. 

![Webservice Call push](/img/content/xu/automation/webservice/xu_call_webservice_push_sql.png){:class="img-responsive"}

### Weitere Optionen zum Aufruf einer Extraktion
#### Log-Ausgabe einer Extraktion unterdrücken 
Mit dem Parameter `&quiet-push=true statt -o quiet-push=true` kann man die Log-Ausgabe unterdrücken, wenn die Extraktion synchron aufgerufen wird und mit einer Push-Destination verbunden ist. 
Default Wert ist `false` und somit wird standardmäßig das Log der Extraktion bei einer Push-Destination zurückgegeben. Sowohl bei einer Pull-Destination als auch bei einem asynchronem Aufruf hat dieser Parameter keine Wirkung.

#### Asynchroner Aufruf
Standardmäßig wird eine Extraktion synchron aufgerufen. Mit dem Parameter `&wait=false` kann der Aufruf asynchron erfolgen.
![Webservice Call async](/img/content/xu/automation/webservice/xu_call_webservice_push_asynch.png){:class="img-responsive"}

In diesem Fall wird der Zeitstempel der Ausführung im HTTP-Body zurückgegeben:
`2020-05-28_09:58:47.312`

### Weitere Webservices 

#### Status der Extraktion prüfen
Mit dem Zeitstempel und dem Namen der Extraktion kann der Status über den folgenden Webservice aufgerufen werden: <br>
`http://localhost:8065/status/?name=sapcustomers2&timestamp=2020-04-06_16:13:19.926`

#### Log der Extraktion abfragen 

Mit dem Zeitstempel kann dann auf das ausführliche Log über den folgenden Webservice zugegriffen werden: <br>
`http://localhost:8065/log/?req_type=extraction&name=sapcustomers2&timestamp=2020-04-06_16:13:19.926`

#### Medataten der Extraktion abfragen 

Mit dem Namen der Extraktion kann auf die entsprechenden Metadaten über den folgenden Webservice zugegriffen werden: <br>
`http://localhost:8065/metadata/?name=sapcustomers2 `

Weiterführende Links
- [Metadaten-Aufruf via Webservice](../fortgeschrittene-techniken/metadaten-zugriff-ueber-http)
- [Log-Aufruf via Webservice](../logging/log-zugriff-ueber-http)
