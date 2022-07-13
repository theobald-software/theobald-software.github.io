---
ref: xu-extraction-via-webservice-01
layout: page
title: Aufruf via Webservice
description: Extraktion via Webservice z.B. im Browser aufrufen
product: xtract-universal
parent: extraktionen-ausfuehren-und-einplanen
permalink: /:collection/:path
weight: 4
lang: de_DE
---
Sie können eine Extraktion via Webservice-Aufruf ausführen. 
Der Aufruf einer Extraktion erfolgt in der Regel über ein Skript, Scheduler oder BI-Tool. 
Zu Testzwecken kann der Aufruf wie beim XU-Designer auch aus einem Webbrowser erfolgen.

### URL-Format
Der Aufruf erfolgt über eine URL in folgendem Fomat: `<Protokoll>://<HOST oder IP-Adresse>:<Port>/?name=<Name der Extraktion>{&<parameter_i>=<wert_i>}`

 Format | Beschreibung
:----------- | :------------
`<Protokoll>` | HTTP oder HTTPS - Aktiviert den sicheren Datentransfer.
`<HOST oder IP-Adresse>` | Host Name oder IP-Adresse des XU-Servers.
`<Port>` | Der Port, unter dem der XU-Server läuft. Der Standardwert ist *8065*. Den aktuellen Wert finden Sie im [Run Fenster](../erste-schritte/eine-extraktion-ausfuehren#extraktion-ausführen) des Xtract Universal Designers.
`<Name der Extraktion>` | Name der Extraktion.
`{&<parameter_i>=<wert_i>}` | Optionale Parameter, deren Werte beim Ausführen der Extraktion gesetzt werden sollen. Es können mehrere Parameter verwendet werden.

#### Beispiele  
Eine URL zum Aufruf einer Extraktion sieht wie folgt aus:

```
http://localhost:8065/?name=Plants
http://localhost:8065/?name=Plants&rows=100
http://localhost:8065/?name=Plants&rows=100&lang=EN
```

### HTTP Status Code & Header der Antwort
Die Antwort eines Webservice-Aufrufs enthält folgende Informationen:
- HTTP-Status Code (1)
- Angaben im HTTP-Header (2)
- Rückgabe im HTTP-Body (3)

![Webservice Call pull](/img/content/xu/automation/webservice/xu_call_webservice_csv.png){:class="img-responsive"}

Antwort | Beschreibung
:----------:| :------------
 (1) | Der HTTP Status Code *200* zeigt einen fehlerfreien Aufruf der Extraktion an, gibt jedoch nicht den Status der Ausführung der Extraktion zurück. Der Code besagt nicht, dass die Extraktion erfolgreich ausgeführt und beendet wurde. <br>Der HTTP Status Code *404* bedeutet, dass die aufgerufene Extraktion nicht existiert. Detaillierte Infos können über den Log-Webservice aufgerufen werden.
 (2) | Gibt den Timestamp des Extraktionslaufs über den nachfolgenden HTTP Header zurück, z.B. X-XU-Timestamp: *2021-04-09_19:03:09.971*
 (3) | Die Rückgabe im HTTP-Body ist abhängig vom Destinationstyp der Extraktion. 

#### Rückgabe im HTTP-Body (3)

Status-Code | Destinationstyp | Beschreibung
:----------: | :-----------: | :-----
*200* | Pull | Bei HTTP-CSV oder HTTP-JSON Destinationen werden die extrahierten Daten im entsprechenden Format (3) (CSV, JSON) zurückgegeben.
*200* | Push | Rückgabe des Extraktionslogs im CSV-Format.

### Weitere Optionen zum Aufruf einer Extraktion

#### Log-Ausgabe einer Extraktion unterdrücken 
Mit dem Parameter `&quiet-push=true` kann man die Log-Ausgabe unterdrücken, wenn die Extraktion synchron aufgerufen wird und mit einer Push-Destination verbunden ist. <br>
Beispiel: `http://todd.theobald.local:8065/?name=Plants&quiet-push=true`

Default Wert des Parameters ist `false`, wodurch standardmäßig das Log der Extraktion bei einer Push-Destination zurückgegeben wird. 

{: .box-note }
**Hinweis:** Sowohl bei einer Pull-Destination als auch bei einem asynchronem Aufruf hat dieser Parameter keine Wirkung.

#### Asynchroner Aufruf
Standardmäßig wird eine Extraktion synchron aufgerufen. Mit dem Parameter `&wait=false` kann der Aufruf asynchron erfolgen.<br> 
Beispiel: `http://todd.theobald.local:8065/?name=Plants&wait=false`

In diesem Fall wird der Zeitstempel (4) der Ausführung im HTTP-Body zurückgegeben.
![Webservice Call async](/img/content/xu/automation/webservice/xu_call_webservice_push_asynch.png){:class="img-responsive"}

#### Extraktionen Abbrechen
Eine laufende Extraktion kann über den Befehl `abort` abgebrochen werden. Der Befehl wird vor dem Extraktionsnamen aufgerufen. <br>
Beispiel: `http://todd.theobald.local:8065/abort?name=Plants`

Wenn der Abbruch erfolgreich ist, wird eine entsprechende Meldung (5) im HTTP-Body zurückgegeben.<br>
![Webservice Call abort](/img/content/xu/automation/webservice/xu_call_webservice_abort.png){:class="img-responsive"}

****
#### Weiterführende Links
- [Metadaten-Zugriff über HTTP-JSON](../fortgeschrittene-techniken/metadata-zugriff-ueber-http-json)
- [Log-Zugriff über Web-Service](../logging/log-zugriff-ueber-http)
