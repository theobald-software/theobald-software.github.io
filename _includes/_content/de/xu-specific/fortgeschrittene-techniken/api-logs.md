

### Status einer Extraktion abrufen

```
[protocol]://[host]:[port]/status/?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]
``` 

Gibt den Status einer (laufenden) Extraktion zum angegebenen Zeitstempel zurück. 
Der Zeitstempel entspricht dem von zurückgegebenen *startedAt*-Element [`[protocol]://[host]:[port]/config/extractions/`](#get-extraction-details) oder [`[protocol]://[host]:[port]/logs/extractions/[extraction-name]`](#get-extraction-logs).

| Status            | Beschreibung                                                  |
|------------------|--------------------------------------------------------------|
| Running          | Die Extraktion läuft.                                   |
| FinishedNoErrors | Die Extraktion wurde ohne Fehler abgeschlossen.             |
| FinishedErrors   | Die Extraktion wurde abgeschlossen, weist jedoch mindestens einen Fehler auf. |


#### Beispiel

`http://sherri.theobald.local:8065/status/?name=KNA1&timestamp=2024-02-05_10:23:08.025`

<details>
<summary>Click here to show the response body</summary>
{% highlight csv %}
FinishedNoErrors
{% endhighlight %}
</details>

### Extraktionslogs abrufen

```
[protocol]://[host]:[port]/logs/extractions
``` 

Gibt eine Liste von Extraktionsläufen zurück. Das Ergebnis enthält die folgenden Elemente:

|  Element   | Beschreibung   |
|--------------|---------|
| extractionName  | Name der Extraktion |
| runs  | enthält *rowCount*, *duration*, *state*, *webServerLog* und *startedAt* der Extraktionsläufe |
| row count| Anzahl der extrahierten Datensätze |
| duration | Dauer der Ausführung |
| state| Status der Extraktion (*Running*, *FinishedNoErrors*, *FinishedErrors*) |
| webServerLog| Zeitstempel des entsprechenden [Serverlogs](#serverlogs-abrufen) |
| startedAt| Zeitstempel der Ausführung |


#### Parameter & Optionen

`[protocol]://[host]:[port]/logs/extractions`

| Parameter    | Beschreibung  | 
|-----------|--------------|
| ```?min=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Gibt die Extraktionsläufe nach dem angegebenen Datum und der angegebenen Uhrzeit zurück. |
| ```?max=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Gibt die Extraktionsläufe vor dem angegebenen Datum und der angegebenen Uhrzeit zurück. |
| ```/[extraction-name]```  |   Gibt alle Extraktionsläufe der angegebenen Extraktion zurück. |
| ```/[extraction-name]/[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Gibt den Extraktionslauf der angegebenen Extraktion mit dem angegebenen Zeitstempel zurück. |
| ```/[extraction-name]/[yyyy-MM-dd_HH:mm:ss.SSS]/log```  |   Gibt das Extraktionslog der angegebenen Extraktion mit dem angegebenen Zeitstempel zurück. |


#### Beispiel

`http://sherri.theobald.local:8065/logs/extractions?min=2023-08-17_11:20:44.029`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "extractions": 
    [
        {
            "extractionName": [
                "0MATERIAL"
            ],
            "runs": [
                {
                    "rowCount": 200,
                    "duration": "PT00H00M00.2651",
                    "state": "FinishedNoErrors",
                    "startedAt": "2023-08-17_11:31:44.029"
                }
            ]
        }
        {
            "extractionName": [
                "KNA1"
            ],
            "runs": [
                {
                    "rowCount": 0,
                    "duration": "PT00H00M01.3741",
                    "state": "FinishedErrors",
                    "webServerLog": "2024-02-05_08:13:48.132",
                    "startedAt": "2024-02-05_08:14:13.771"
                },
                {
                    "rowCount": 9995,
                    "duration": "PT00H00M00.477S",
                    "state": "FinishedNoErrors",
                    "webServerLog": "2024-02-05_10:20:51.851",
                    "startedAt": "2024-02-05_10:20:52.344"
                }
            ]
        }
    ]
}
{% endhighlight %}
</details>

`http://sherri.theobald.local:8065/logs/extractions/KNA1`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "runs": [
        {
            "rowCount": 0,
            "duration": "PT00H00M01.3741",
            "state": "FinishedErrors",
            "webServerLog": "2024-02-05_08:13:48.132",
            "startedAt": "2024-02-05_08:14:13.771"
        },
        {
            "rowCount": 9995,
            "duration": "PT00H00M00.477S",
            "state": "FinishedNoErrors",
            "webServerLog": "2024-02-05_10:20:51.851",
            "startedAt": "2024-02-05_10:20:52.344"
        }
    ]
}
{% endhighlight %}
</details>

`http://sherri.theobald.local:8065/logs/extractions/KNA1/2024-02-05_10:20:52.344`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "rowCount": 9995,
    "duration": "PT00H00M00.477S",
    "state": "FinishedNoErrors",
    "webServerLog": "2024-02-05_10:20:51.851",
    "startedAt": "2024-02-05_10:20:52.344"
}
{% endhighlight %}
</details>

`http://sherri.theobald.local:8065/logs/extractions/KNA1/2024-02-05_10:20:52.344/log`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "rowCount": 9995,
    "duration": "PT00H00M00.477S",
    "state": "FinishedNoErrors",
    "webServerLog": "2024-02-05_10:20:51.851",
    "startedAt": "2024-02-05_10:20:52.344",
    "logEntries": [
        {
            "timestamp": "2024-02-05_10:20:52.377",
            "logLevel": "Info",
            "source": "Table",
            "message": "server version: 999.999.999.691"
        },
        {
            "timestamp": "2024-02-05_10:20:52.470",
            "logLevel": "Debug",
            "source": "Table",
            "message": "Attempting to load Theobald.Extractors.Table.TableExtractionDefinition information for extraction KNA1"
        },
		
		...
		
        {
            "timestamp": "2024-02-05_10:20:53.774",
            "logLevel": "Info",
            "source": "Table",
            "message": "Extraction finished with status FinishedNoErrors."
        },
        {
            "timestamp": "2024-02-05_10:20:53.774",
            "logLevel": "Debug",
            "source": "Table",
            "message": "Writing run information."
        },
        {
            "timestamp": "2024-02-05_10:20:53.779",
            "logLevel": "Info",
            "source": "Table",
            "message": "Extraction run information was updated."
        }
    ]
}
{% endhighlight %}
</details>

{: .box-note } 
**Hinweis:** Informationen zur Interpretation von Protokollen, siehe [Logging](./logging).

### Serverlogs abrufen

```
[protocol]://[host]:[port]/logs/web
```  

Gibt eine Liste von Zeitstempeln zurück, die den Serverlogs entsprechen.

#### Parameter & Optionen

`[protocol]://[host]:[port]/logs/web`

| Parameter    | Beschreibung  | 
|-----------|--------------|
| ```?min=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Gibt die Zeitstempel der Serverlogs nach dem angegebenen Datum und der angegebenen Uhrzeit zurück. |
| ```?max=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Gibt die Zeitstempel der Serverlogs vor dem angegebenen Datum und der angegebenen Uhrzeit zurück. |
| ```/[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Gibt die Serverlogeinträge mit dem angegebenen Zeitstempel zurück. |

#### Beispiel

`http://sherri.theobald.local:8065/logs/web?min=2024-02-05_12:39:29.022`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "logs": 
    [
        "2024-02-05_12:44:44.741",
        "2024-02-05_13:09:11.899",
        "2024-02-07_08:52:17.487",
        "2024-02-07_08:58:14.920",
        "2024-02-07_10:44:21.652",
        "2024-02-07_10:50:58.202",
        "2024-02-07_10:54:25.552"
    ]
}
{% endhighlight %}
</details>

`http://sherri.theobald.local:8065/logs/web/2024-02-05_12:44:44.741`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "logEntries": 
    [
        {
            "timestamp": "2024-02-05_12:44:44.815",
            "logLevel": "Info",
            "source": "WebServerHandler",
            "message": "Client [fe80::d3ac:77ba:ce0f:83b1%8]:55904"
        },
        {
            "timestamp": "2024-02-05_12:44:45.012",
            "logLevel": "Debug",
            "source": "HttpServer",
            "message": "Reading..."
        },
        {
            "timestamp": "2024-02-05_12:44:45.060",
            "logLevel": "Info",
            "source": "HttpServer",
            "message": "Processing /."
        },
        {
            "timestamp": "2024-02-05_12:44:45.251",
            "logLevel": "Info",
            "source": "WebServer",
            "message": "Attempting to load server permissions."
        },
		
		...
        
        {
            "timestamp": "2024-02-05_12:44:45.808",
            "logLevel": "Debug",
            "source": "HttpServer",
            "message": "Reading..."
        }
    ]
}
{% endhighlight %}
</details>

{: .box-note } 
**Hinweis:** Informationen zur Interpretation von Logs, siehe [Logging](./logging).

