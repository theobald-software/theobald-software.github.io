---
ref: xu-logging-03
layout: page
title: Log-Zugriff über Web-Service
description: Log-Zugriff über HTTP / HTTPS
product: xtract-universal
parent: logging
permalink: /:collection/:path
weight: 3
lang: de_DE
progressstate: 5
---

Der Xtract Universal Server bietet Zugriff auf verschiedene Metadaten- und Logging-Informationen via Web-Aufrufe. 


### Basis-URL

Die Basis-URL für Web-Aufrufe verwendet folgendes Format:
`[protocol]://[host or IP address]:[port]/`.<br>
Achten Sie darauf, das korrekte Protokoll zu verwenden:. 


| Protokoll | Syntax       | Beispiel                                                                  |
|-------|------------------|--------------------------------------------------------------------|
| HTTP   | `http://[host].[domain]:[Port]`         | `http://todd.theobald.local:8065`  |
| HTTP | `http://[host]:[Port]` | `http://localhost:8065` |
| HTTPS  | `https://[host]:[Port]` | `https://todd.theobald.local:8165`<br> funktioniert ausschließlich mit dedizierten Rechnernamen und X.509 Zertifikat. |

{: .box-note }
**Hinweis:** Achten Sie auf die korrekten Standardports, siehe [Server Ports](../server/ports). 

Folgende Aktionen können über Web-Aufrufe ausgeführt werden:
- [Abfrage aller Server-Logs](#abfrage-aller-server-logs)
- [Abfrage der Server-Logs zu einem bestimmten Zeitstempel](#abfrage-der- server-logs-zu-einem-bestimmten-zeitstempel)
- [Abfrage einer Liste aller definierten Extraktionen](#abfrage-einer-liste-aller-definierten-extraktionen)
- [Abfrage der Extraktionsläufe einer bestimmten Extraktion](#abfrage-der-extraktionsläufe-einer-bestimmten-extraktion)
- [Abfrage einer bestimmten Extraktion zu einem bestimmten Zeitstempel](#abfrage-einer-bestimmten-extraktion-zu-einem-bestimmten-zeitstempel)
- [Abfrage des Extraktionsstatus](#abfrage-des-extraktionsstatus)
- Metadaten von Extraktionen abrufen, siehe [Metadaten-Zugriff über HTTP-JSON](../fortgeschrittene-techniken/metadata-zugriff-ueber-http-json)
- Extraktionen ausführen, siehe [Extraktionen Ausführen und Einplanen - Aufruf via Webservice](../extraktionen-ausfuehren-und-einplanen/call-via-webservice)


### Abfrage aller Server-Logs

| URL       | Beschreibung  | 
|-----------|--------------|
| `http(s)://[host]:[port]/log/?req_type=server` | Gibt eine Liste von Zeitstempeln zurück, die zu Server-Logs gehören. |

#### Antwort

Der Web-Aufruf gibt Zeitstemepl im Format `[yyyy-MM-dd_HH:mm:ss.SSS]` zurück.<br>
Verwenden Sie die Zeitstempel, um den Inhalt von Logs abzurufen, siehe [Server-Logs zu einem bestimmten Zeitstempel abrufen](#server-logs-zu-einem-bestimmten-zeitstempel-abrufen).

{: .box-note }
**Hinweis:** Server-Logs werden nach einer definierten Anzahl von Tagen gelöscht, siehe [Server Einstellungen - Web Server](../server/server_einstellungen#web-server).

#### Beispiel

<table>
<thead><tr><th>Beispiel-URL</th><th>Beispiel-Antwort</th></tr></thead>
<tr><td><code>https://todd.theobald.local:8165/log/?req_type=server</code></td>
<td><div style="width:600px;overflow:auto"><pre>
Timestamp
2023-09-08_09:49:10.055
2023-09-08_13:49:38.401
</pre></div></td></tr>
</table>

### Abfrage der Server-Logs zu einem bestimmten Zeitstempel 

| URL       | Beschreibung  | 
|-----------|--------------|
| `http(s)://[host]:[port]/log?req_type=server&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]` | Gibt die Server-Logs von einem definierten Zeitstempel zurück. |

{: .box-tip }
**Tipp:** Rufen Sie zurvor die Zeitstempel ab, die zu Server-Logs gehören, siehe [Alle Server-Logs abrufen](#alle-server-logs-abrufen).<br>
Um Server-Logs abzurufen, die vor, nach oder zwischen Zeitstempeln liegen, siehe [Logs zu einem bestimmten Zeitstempel abrufen](#query-logs-between-timestamps).

{: .box-note }
**Hinweis:** Server-Logs werden nach einer definierten Anzahl von Tagen gelöscht, siehe [Server Einstellungen - Web Server](../server/server_einstellungen#web-server).

#### Antwort

Der Web-Aufruf gibt folgende Informationen zurück:

- **LineCount**: Zeilennummer des Log-Eintrags.
- **Name**:  Name der Extraction / Name des Servers.
- **Timestamp**: Zeitstempel des Server-Logs.
- **State**: Gibt die Zahl 5 für einen Server-Log zurück.
- **StateDescr**: Beschreibung des Status'.
- **LogLevel**: Art des Logs ("Error", "Info" "Warning" oder "Debug").
- **Source** technischer Name der Komponente, die die Informationen des Logs generiert. 
- **Message**: Inhalt des Logs.

#### Beispiel

<table>
<thead><tr><th>Beispiel-URL</th><th>Beispiel-Antwort</th></tr></thead>
<tbody><tr><td><code>https://todd.theobald.local:8165/?req_type=server&timestamp=2023-02-20_09:49:10.228</code></td>
<td><div style="width:600px;overflow:auto"><pre>
LineCount,Name,Timestamp,State,StateDescr,LogLevel,Source,Message
1,[server],2023-09-06_08:38:12.519,5,NotAvailable,Info,XtractWebServer,Client [fe80::d3ac:77ba:ce0f:83b1%8]:54421
2,[server],2023-09-06_08:38:12.823,5,NotAvailable,Info,XtractWebServer,Request URI: http://sherri.theobald.local:8065/?name=MARA&quiet-push=true
3,[server],2023-09-06_08:38:17.458,5,NotAvailable,Info,RunParameter,Parameter 'quiet-push' overriden (new value: 'true')
4,[server],2023-09-06_08:38:17.553,5,NotAvailable,Info,XtractWebServer,Running Table extraction 'MARA'...
</pre></div></td></tr></tbody>
</table>

### Abfrage einer Liste aller definierten Extraktionen

| URL       | Beschreibung  | 
|-----------|--------------|
| `http(s)://[host]:[port]/config/extractions/` | Gibt eine Liste aller definierten Extraktionen im JSON-Format zurück. |

#### Antwort

Der Web-Aufruf gibt folgende Informationen zurück:

- **Name**: Name der Extraktion.
- **Type**: Extraktionstyp, z.B. Table, Report, ODP, etc.
- **Source**: Name der SAP-Verbindung.
- **Destination**: Name der Destination.
- **LastRun**: Zeitstempel der letzten Ausführung. 
- **RowCount**: Anzahl der zuletzt extrahierten Datensätze. 
- **LastChange**: Zeitstempel der letzten Änderung. 
- **Created**: Zeitstempel der Erstellung. 

#### Beispiel

<table width="900px">
<tr><th>Beispiel-URL</th><th>Beispiel-Antwort</th></tr>
<tr><td><code>https://todd.theobald.local:8165/config/extractions/</code></td>
<td><div style="width:600px;overflow:auto"><pre>
{
    "extractions": 
    [
        {
            "name": "MAKT",
            "type": "Table",
            "source": "ec5",
            "destination": "csv",
            "latestRun": {
                "started": "20221215T133008.921Z",
                "duration": "PT00H00M02.850S",
                "rowsCount": 177318,
                "state": "FinishedNoErrors"
            },
            "lastChange": {
                "machine": "SHERRI",
                "user": "alice",
                "timestamp": "20230215T134938.401Z"
            },
            "created": {
                "machine": "SHERRI",
                "user": "alice",
                "timestamp": "20221212T083927.407Z"
            }
        }
    ]
}			
</pre></div></td></tr>
</table>

### Abfrage der Extraktionsläufe einer bestimmten Extraktion

| URL       | Beschreibung  | 
|-----------|--------------|
| `http(s)://[host]:[port]/log?req_type=extraction&name=[extractionname]` | Gibt Informationen und Zeitstempel der Extraktionsläufe der angegebenen Extraktion zurück.|

#### Antwort

Der Webaufruf gibt Zeitstempel im Format `[yyyy-MM-dd_HH:mm:ss.SSS]` zurück.<br>
Verwenden Sie die Zeitstempel, um den Inhalt der Extraktionslogs abzufragen, siehe [Abfrage einer bestimmten Extraktion zu einem bestimmten Zeitstempel](#abfrage-einer-bestimmten-extraktion-zu-einem-bestimmten-zeitstempel).

Der Webaufruf gibt die folgenden Informationen zurück:

- **Timestamp**: Zeitstempel der Extraktion.
- **State**: gibt eine Zahl zwischen 2 und 4 für eine Serverextraktion oder die Zahl 5 für ein Serverprotokoll zurück, siehe Tabelle unten.
- **StateDescr**: Beschreibung des Zustands, siehe Tabelle unten.
- **RequestID**: ID, spezifisch für ODP-Extraktionen.
- **RowCount** Anzahl der zuletzt extrahierten Datensätze. 
- **WebLog**: Zeitstempel des entsprechenden Serverprotokolls.

#### Beispiel

<table>
<thead><tr><th>Beispiel URL</th><th>Beispiel Antwort</th></tr></thead>
<tbody><tr><td><code>https://todd.theobald.local:8165/log?req_type=extraction&name=KNA1</code></td>
<td><div style="width:600px;overflow:auto"><pre>
Timestamp,State,StateDescr,RequestID,RowCount,WebLog
2023-09-08_10:43:38.288,3,FinishedNoErrors,,9895,2023-09-08_10:43:37.832
2023-09-08_10:53:27.074,3,FinishedNoErrors,,9895,2023-09-08_10:53:26.616
</pre></div></td></tr></tbody>
</table>

### Abfrage einer bestimmten Extraktion zu einem bestimmten Zeitstempel

| URL       | Beschreibung  | 
|-----------|--------------|
| `http(s)://[host]:[port]/log?req_type=extraction&name=[extractionname]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]`  |   Gibt detailierte Logs der definierten Extraktion an dem definierten Zeitstempel zurück. |

{: .box-tip }
**Tipp:** Rufen Sie alle Zeitstempel einer bestimmten Extraktion ab, siehe [Abfrage der Extraktionsläufe einer bestimmten Extraktion](#abfrage-der-extraktionsläufe-einer-bestimmten-extraktion).<br>
Rufen Sie den Zeitstempel ab, an dem die Extraktion das letzte Mal ausgeführt wurde, siehe [Eine Liste aller definierten Extraktionen abrufen](#eine-liste-aller-definierten-extraktionen-abrufen). 

#### Antwort

Der Web-Aufruf gibt folgende Informationen zurück:

- **LineCount**: Zeilennummer des Log-Eintrags.
- **Name**:  Name der Extraktion.
- **Timestamp**: Zeitstempel der Extraktion.
- **State**: Gibt eine Zahl zwischen 2 und 4 für eine Extraktion zurück.
- **StateDescr**: Beschreibung des Status', siehe untenstehende Tabelle.
- **LogLevel**: Art des Logs ("Error", "Info" "Warning" oder "Debug").
- **Source** technischer Name der Komponente, die die Informationen des Logs generiert. 
- **Message**: Inhalt des Logs.

| State | StateDescr       | Beschreibung                                                                    |
|-------|------------------|------------------------------------------------------------------------------|
| 2     | Running          | Die Extraktion läuft gerade.                                                 |
| 3     | FinishedNoErrors | Die Extraktion ist erfolgreich gelaufen.                                     |
| 4     | FinishedErrors   | Die Extraktion ist abgeschlossen, aber mindestens ein Fehler ist aufgetreten. |

Für Informationen, wie man Extraction-Logs interpretiert, siehe [Extraktions-Logs Lesen](../logging#logs-lesen---extraktions-log).

#### Beispiel

<table>
<tr><th>Example URL</th><th>Example Response</th></tr>
<tr><td><code>https://todd.theobald.local:8165/log?req_type=extraction&name=KNA1&timestamp=2023-09-08_10:43:13.234</code></td>
<td><div style="width:600px;overflow:auto"><pre>
LineCount,Name,Timestamp,State,StateDescr,LogLevel,Source,Message
1,KNA1,2023-09-08_10:43:13.241,3,FinishedNoErrors,Debug,Table,Attempting to load Theobald.Extractors.Table.TableExtractionDefinition information for extraction KNA1
2,KNA1,2023-09-08_10:43:13.465,3,FinishedNoErrors,Info,Table,Starting extraction without cache.
3,KNA1,2023-09-08_10:43:13.465,3,FinishedNoErrors,Info,TheoReadTableExtractor,Starting extraction - using function module Z_THEO_READ_TABLE
4,KNA1,2023-09-08_10:43:13.465,3,FinishedNoErrors,Info,TheoReadTableExtractor,Extracting table KNA1
...
</pre></div></td></tr>
</table>

### Abfrage des Extraktionsstatus

| URL       | Beschreibung  | 
|-----------|--------------|
| ```http(s)://[host]:[port]/status/?name=[extractionname]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]``` | Gibt den Status einer definierten Extraktion an einem definierten Zeitstempel zurück. |

Führen Sie die folgenden Schritte aus, um eine Routine für einen Status-Check zu erstellen:

1. Führen Sie Ihre Extraktion im asynchronen modus aus, indem Sie folgendes URl-Schema verwenden:<br>
`http(s)://[host]:[port]/?name=[extraction_name]&wait=false`<br>
Der asynchrone Aufruf erzeugt sofort eine HTTP-Antwort, noch während die Extraktion ausgeführt wird.
Für mehr Informationen zum Ausführen von Extraktionen, siehe [Extraktionen Ausführen und Einplanen - Aufruf via Webservice](../extraktionen-ausfuehren-und-einplanen/call-via-webservice).
2. Kopieren Sie den Zeitstempel, der im HTTP-Response Header des asynchronen Extraktionsaufrufs zurückgegeben wird.<br>
Beispiel: *X-XU-Timestamp: 2023-01-28_09:58:47.312*.
3. Verwenden Sie den Extraktionsnamen und den Zeitstempel, um den Status der Extraktion mit folgendem URL-Schema abzurufen:<br>
`http(s)://[host]:[port]/status/?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]`<br>
4. Der Status einer Extraktion ändert sich mit der Zeit.
Fragen Sie den Status der Extraktion in einer Schleife ab, um Folgemaßnahmen zu ergreifen, sobald die Extraktion beendet ist.

{: .box-note }
**Hinweis:** Eine Extraktion im asynchronen Modus auszuführen und den Extraktionsstatus abzurufen, wird nur bei Push-Destinationen unterstützt, z.B. Datenbanken. 

#### Antwort

Der Web-Aufruf gibt folgende Informationen zurück:

- **Duration**: Dauer der Extraktion.
- **rowCount**:  Anzahl der extrahierten Zeilen.
- **State**: Status der Extraktion.
- **WebLog Timestamp**: Zeitstempel des Server-Logs.

| Status       | Beschreibung                                                                    |
|------------------|------------------------------------------------------------------------------|
| Running          | Die Extraktion läuft gerade.                                                 |
| FinishedNoErrors | Die Extraktion ist erfolgreich gelaufen.                                     |
| FinishedErrors   | Die Extraktion ist abgeschlossen, aber mindestens ein Fehler ist aufgetreten.   |

#### Beispiel

<table>
<tr><th>Beispiel-URL</th><th>Beispiel-Antwort</th></tr>
<tbody><tr><td><code>https://todd.theobald.local:8165/status/?name=KNA1&timestamp=2023-11-22_10:15:32.390</code></td>
<td><div style="width:600px;overflow:auto"><pre>
FinishedNoErrors
</pre></div></td></tr></tbody>
</table>

*****
#### Weiterführende Links
- [Web-Server-Einstellungen](../server/server_einstellungen#web-server)
- [Extraktionen Ausführen und Einplanen - Aufruf via Webservice](../extraktionen-ausfuehren-und-einplanen/call-via-webservice)

