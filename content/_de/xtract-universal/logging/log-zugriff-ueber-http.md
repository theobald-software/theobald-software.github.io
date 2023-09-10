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
progressstate: 3
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
- [Alle Server-Logs abrufen](#alle-server-logs-abrufen)
- [Server-Logs zu einem bestimmten Zeitstempel abrufen](#server-logs-zu-einem-bestimmten-zeitstempel-abrufen)
- [Eine Liste aller definierten Extraktionen abrufen](#eine-liste-aller-definierten-extraktionen-abrufen)
- [Eine bestimmte Extraktion zu einem bestimmten Zeitstempel abrufen](#eine-bestimmte-extraktion-zu-einem-bestimmten-zeitstempel-abrufen)
- [Den Status einer Extraktion abrufen](#den-status-einer-extraktion-abrufen)
- Metadaten von Extraktionen abrufen, siehe [Metadaten-Zugriff über HTTP-JSON](../fortgeschrittene-techniken/metadata-zugriff-ueber-http-json)
- Extraktionen ausführen, siehe [Extraktionen Ausführen und Einplanen - Aufruf via Webservice](../extraktionen-ausfuehren-und-einplanen/call-via-webservice)



### Alle Server-Logs Abrufen

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
2023-02-20_09:49:10.055
2023-02-15_13:49:38.401
</pre></div></td></tr>
</table>

### Server-Logs zu einem bestimmten Zeitstempel abrufen

| URL       | Beschreibung  | 
|-----------|--------------|
| `http(s)://[host]:[port]/log/?req_type=server&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]` | Gibt die Server-Logs von einem definierten Zeitstempel zurück. |

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
1,[server],2023-02-20_09:49:10.258,5,NotAvailable,Info,AsyncTcpServer,Trying to listen on [::]:8065... 
2,[server],2023-02-20_09:49:10.258,5,NotAvailable,Info,AsyncTcpServer,Listening on [::]:8065 
3,[server],2023-02-20_09:49:23.353,5,NotAvailable,Info,AsyncTcpServer,Client [::1]:51531 connected 
4,[server],2023-02-20_09:49:23.372,5,NotAvailable,Debug,ProcessAsync,Theobald.Xu.Web.Worker.exe (16240) started 
5,[server],2023-02-20_09:49:24.802,5,NotAvailable,Debug,ProcessAsync,Theobald.Xu.Web.Worker.exe (16240) exited with 0x0 - The operation completed successfully 
6,[server],2023-02-20_09:49:36.257,5,NotAvailable,Info,AsyncTcpServer,Client [::1]:51533 connected 
7,[server],2023-02-20_09:49:36.262,5,NotAvailable,Debug,ProcessAsync,Theobald.Xu.Web.Worker.exe (16368) started
</pre></div></td></tr></tbody>
</table>

### Eine Liste aller definierten Extraktionen abrufen

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
<tr><td><code>https://todd.theobald.local:8165/extractions</code></td>
<td><div style="width:600px;overflow:auto"><pre>
Name,Type,Source,Destination,LastRun,RowCount,LastChange,Created
MAKT,Table,ec5,csv,2022-12-15_13:30:08.921,177318,2023-02-15_13:49:38.401,2022-12-12_08:39:27.407
2LIS,ODP,ec5,AzureStorageAD,2022-08-18_10:55:00.189,59058,2023-01-20_11:26:05.641,2022-08-18_10:46:50.721
COUNTRY,Hierarchy,bw2,http-csv,2022-12-01_12:53:57.098,8,2022-12-01_12:53:53.599,2022-10-05_10:41:43.848
RLT10010,Report,ec5,csv,2023-01-12_11:11:48.975,21,2022-12-13_11:07:36.437,2022-06-30_08:24:47.755
</pre></div></td></tr>
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


### Eine bestimmte Extraktion zu einem bestimmten Zeitstempel abrufen

| URL       | Beschreibung  | 
|-----------|--------------|
| `http(s)://[host]:[port]/log?req_type=extraction&name=[extractionname]&timestamp=[extractionTimestamp]`  |   Gibt detailierte Logs der definierten Extraktion an dem definierten Zeitstempel zurück. |

{: .box-tip }
**Tipp:** Rufen Sie den Zeitstempel ab, an dem die Extraktion das letzte Mal ausgeführt wurde, siehe  [Eine Liste aller definierten Extraktionen abrufen](#eine-liste-aller-definierten-extraktionen-abrufen) oder rufen Sie Zeitstempel ab über [Alle Logs abrufen](#alle-logs-abrufen).<br>


#### Antwort

Der Web-Aufruf gibt folgende Informationen zurück:

- **LineCount**: Zeilennummer des Log-Eintrags.
- **Name**:  Name der Extraction.
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

### Den Status einer Extraktion abrufen

| URL       | Beschreibung  | 
|-----------|--------------|
| ```http(s)://[host]:[port]/status/?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]``` | Gibt den Status einer definierten Extraktion an einem definierten Zeitstempel zurück. |

Führen Sie die folgenden Schritte aus, um eine Routine für einen Status-Check zu erstellen:

1. Führen Sie Ihre Extraktion im asynchronen modus aus, indem Sie folgendes URl-Schema verwenden:<br>
`http(s)://[host]:[port]/?name=[extraction_name]&wait=false`<br>
Der asynchrone Aufruf erzeugt sofort eine HTTP-Antwort, noch während die Extraktion ausgeführt wird.
Für mehr Informationen zum Ausführen von Extraktionen, siehe [Extraktionen Ausführen und Einplanen - Aufruf via Webservice](../extraktionen-ausfuehren-und-einplanen/call-via-webservice).
2. Kopieren Sie den Zeitstempel, der in der HTTP-Antwort des asynchronen Extraktionsaufrufs zurpckgegeben wird.<br>
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
<tbody><tr><td><code>https://todd.theobald.local:8165/status/?name=KNA1&timestamp=2023-09-08_10:43:13.234</code></td>
<td><div style="width:600px;overflow:auto"><pre>
{
    "duration": "PT00H00M01.177S",
    "rowsCount": 9895,
    "state": "FinishedNoErrors",
    "webLogTimestamp": "2023-09-08_10:43:02.361"
}
</pre></div></td></tr></tbody>
</table>

*****
#### Weiterführende Links
- [Web-Server-Einstellungen](../server/server_einstellungen#web-server)
- [Extraktionen Ausführen und Einplanen - Aufruf via Webservice](../extraktionen-ausfuehren-und-einplanen/call-via-webservice)

