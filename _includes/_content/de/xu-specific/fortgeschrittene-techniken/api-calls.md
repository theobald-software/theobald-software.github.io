

### Version abrufen

```
[protocol]://[host]:[port]/version
``` 

Gibt die Softwareversion der {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %}-Serverinstallation im JSON-Format zurück. 

#### Beispiel 

`http://sherri.theobald.local:8065/version`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "version": "6.2.13.4"
}
{% endhighlight %}
</details>

<!---
/version-history
Returns the version history entries as JSON.

Response:

{
   "versions":
   [
      {
        "version": "1.2.3.4",
        "releaseDate": "",
        "priority": "L",
        "subcomponent": "General",
        "description": "Fixed X which caused Y.",
      }
   ]
}
-->

### Destinationsdetails abrufen

```
[protocol]://[host]:[port]/destinations
```  

Gibt eine Liste aller definierten Definitionen zurück.
Das Ergebnis enthält die folgenden Elemente:

|  Element   | Beschreibung    |
|--------------|---------|
| name | Name der Zielverbindung |
| type | Verbindungstyp |
| host | Hostname, wenn vorhanden |
| port | Portname, wenn vorhanden |
| database | Datenbankname, wenn vorhanden | 
| user | Nutzername in der Verbindung, wenn vorhanden |  
| schema | Schemaname, wenn vorhanden |
| directory | Verzeichnisname, wenn vorhanden |


{: .box-tip } 
**Tipp:**  Für eine Liste von Extraktionen mit einer bestimmten Destination, siehe [Extraktionsdetails abrufen](#extraktionsdetails-abrufen).

#### Beispiel 

`http://sherri.theobald.local:8065/destinations`

<details>
<summary>Click here to show the response body</summary>
{% highlight csv %}
Name,Type,Host,Port,Database,User,Schema,Directory
csv,FileCSV,,,,,,"C:\Users\alice\Documents\csv\"
http-csv,CSV,,,,,,
http-json,HTTPJSON,,,,,,
json,FileJSON,,,,,,"C:\Users\alice\Documents\json"
sql-server,SQLServer,dbtest-ws2019.theobald.local,1433,alice,THEOBALD\alice,,
tableau2022,Tableau,,,,,,"C:\Users\alice\Documents\csv"
{% endhighlight %}
</details>

### Extraktionsdetails abrufen

```
[protocol]://[host]:[port]/config/extractions
```  

Gibt eine Liste aller definierten Extraktionen im JSON-Format zurück. Das Ergebnis enthält die folgenden Elemente:

|  Element   | Beschreibung    |
|--------------|---------|
| name  | Name der Extraktion |
| type  |Extraktionstyp |
| sapObject|  Name des extrahierten SAP-Objekts |
| source|  Name der Quellverbindung |
| destination| Name der Zielverbindung|
| latestRun| Enthält *rowCount*, *duration*, *state* und *startedAt* des letzten Extraktionslaufs |
| rowCount| Anzahl der zuletzt extrahierten Datensätze |
| duration | Dauer der letzten Ausführung |
| state| Status der Extraktion (*Running*, *FinishedNoErrors*, *FinishedErrors*) |
| startedAt| Zeitstempel der letzten Ausführung |
| created| Enthält Angaben zur *Maschine*, zum *Zeitstempel* und zum *Benutzer* zum Zeitpunkt der Extraktionserstellung|
| machine| Maschine, auf der die Extraktion erstellt wurde |
| timestamp| timestamp of the creation |
| user| Benutzer, der die Extraktion erstellt hat |
| lastChange| Enthält Angaben zur *Maschine*, zum *Zeitstempel* und zum *Benutzer* zum Zeitpunkt der letzten Änderung  der Extraktion|
| machine| Maschine, auf der die Extraktion zuletzt geändert wurde|
| timestamp| Zeitstempel der letzten Änderung |
| user| Benutzer, der die Extraktion zuletzt geändert hat |

#### Parameter und Optionen

`[protocol]://[host]:[port]/config/extractions`

| Parameter    | Beschreibung  | 
|-----------|--------------|
| ```?destinationType=[destination]```  |   Gibt eine Liste von Extraktionen zurück, die in eine bestimmte Destination schreiben. |
| ```/[extraction_name]/parameters```  |   Gibt eine Liste der Laufzeitparameter zurück, die in der angegebenen Extraktion verwendet werden. Jede Extraktion verfügt über eine Reihe von Laufzeitparametern *Extraction*, *Source* und *Custom* {% if page.product == "xtract-universal" %}[Extraktionsparameter](./extraktionen-ausfuehren-und-einplanen/extraktionsparameter).{% else %}[Extraktionsparameter](./erste-schritte/eine-extraktion-ausfuehren#definieren-der-extraktionseigenschaften).{% endif %} Die Parameter stehen im Fenster „Run Extraction“ des Xtract Universal Designers zur Verfügung.  |
| ```/[extraction_name]/result-columns```  |   Returns the result columns of an extraction. |


Das Ergebnis von `[protocol]://[host]:[port]/config/extractions/[extraction_name]/result-columns` enthält die folgenden Elemente:

| Element         | Typ    | Beschreibung                         |
|--------------|---------|-------------------------------------|
| name         | String  | Spalte name                         |
| description  | String  | Spalte description                  |
| type         | String  | Spalte datatype                     |
| length       | Integer | Spalte length                       |
| isPrimaryKey | boolean | Spalte ist der Primärschlüssel der Extraktion |
| isEncrypted  | boolean | Verschlüsselung für Spalte ist aktiv  |
| decimalsCount| Integer | Anzahl der Dezimalstellen |
| [referenceField](https://help.sap.com/viewer/6f3c662f6c4b1014b3c1f279a90f707f/7.01.18/en-US/cf21ea5d446011d189700000e8322d00.html) | String  | Referenzfeld für Währung/Menge |
| [referenceTable](https://help.sap.com/viewer/6f3c662f6c4b1014b3c1f279a90f707f/7.01.18/en-US/cf21ea5d446011d189700000e8322d00.html) | String  | Referenztabelle für Währung/Menge |

{: .box-note }
**Hinweis:** Datenfelder, die Datumsangaben enthalten, haben den Datentyp *ConvertedDate*, wenn die Option *Date Conversion (Datumsumrechnung)* in den *Destination Settings (Destinationseinstellungen)* aktiv ist.
Wenn inaktiv, ist der Datentyp *StringLengthMax* mit einer Länge von 8 (*Datum*).


#### Beispiele

`http://sherri.theobald.local:8065/config/extractions/`


<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "extractions": 
    [
        {
            "name": [
                "0MAT"
            ],
            "type": "DeltaQ",
            "technicalName": "0MATERIAL_ATTR",
            "source": "saperp",
            "destination": "GoogleCloudStorage",
            "latestRun": {
                "rowCount": 20275,
                "duration": "PT00H00M13.383S",
                "state": "FinishedNoErrors",
                "startedAt": "2023-08-17_11:24:07.770"
            },
            "created": {
                "machine": "TODD",
                "timestamp": "20221005T080618.544Z",
                "user": "THEOBALD\\steffan"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "20240129T131530.701Z",
                "user": "THEOBALD\\alice"
            }
        },
        {
            "name": [
                "0MATERIAL"
            ],
            "type": "DeltaQ",
            "technicalName": "0COSTCENTER_0101_HIER",
            "source": "saperp",
            "destination": "csv",
            "latestRun": {
                "rowCount": 200,
                "duration": "PT00H00M00.114S",
                "state": "FinishedNoErrors",
                "startedAt": "2023-08-17_11:31:44.029"
            },
            "created": {
                "machine": "SHERRI",
                "timestamp": "20230815T114651.045Z",
                "user": "THEOBALD\\alice"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "20230817T113328.786Z",
                "user": "THEOBALD\\alice"
            }
        }
		{% endhighlight %}
</details>

`http://sherri.theobald.local:8065/config/extractions/?destinationType=sqlserver`


<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "extractions": 
    [
        {
            "name": [
                "bw2--UCONRFC_ATTR_F"
            ],
            "type": "ODP",
            "technicalName": "UCONRFC_ATTR$F",
            "source": "bw2",
            "destination": "sql-server",
            "created": {
                "machine": "SHERRI",
                "timestamp": "20230622T062454.495Z",
                "user": "alice"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "20230703T070609.890Z",
                "user": "THEOBALD\\alice"
            }
        },
        {
            "name": [
                "ec5--KNA1_DELTA"
            ],
            "type": "TableCDC",
            "technicalName": "KNA1_DELTA",
            "source": "ec5",
            "destination": "sql-server",
            "created": {
                "machine": "SHERRI",
                "timestamp": "20230622T051526.003Z",
                "user": "alice"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "20230703T070609.955Z",
                "user": "THEOBALD\\alice"
            }
        },
        {
            "name": [
                "HIERARCHY"
            ],
            "type": "Hierarchy",
            "technicalName": "TEST_DEP_01",
            "source": "bw2",
            "destination": "sql-server",
            "latestRun": {
                "rowCount": 13,
                "duration": "PT00H00M02.710S",
                "state": "FinishedNoErrors",
                "startedAt": "2023-07-19_06:04:04.139"
            },
            "created": {
                "machine": "SHERRI",
                "timestamp": "20230719T051513.542Z",
                "user": "THEOBALD\\alice"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "20230815T074627.575Z",
                "user": "THEOBALD\\alice"
            }
        }
    ]
}
{% endhighlight %}
</details>


`http://sherri.theobald.local:8065/config/extractions/KNA1/parameters`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "extraction": 
    [
        {
            "name": "ignoreCache",
            "description": "Ignore the result cache",
            "type": "Flag",
            "default": "False"
        },
        {
            "name": "preview",
            "description": "Enable/disable preview mode",
            "type": "Flag",
            "default": "False"
        },
        {
            "name": "source",
            "description": "Sets the name of the source",
            "type": "Text",
            "default": "ec5"
        },
        {
            "name": "destination",
            "description": "Sets the name of the destination",
            "type": "Text",
            "default": "csv"
        },
        {
            "name": "rows",
            "description": "Maximum number of rows",
            "type": "Number",
            "default": "0"
        },
        {
            "name": "whereClause",
            "description": "Where Clause",
            "type": "Text",
            "default": null
        },
        {
            "name": "packageSize",
            "description": "Package Size",
            "type": "Number",
            "default": "50000"
        }
    ],
    "source": 
    [
        {
            "name": "lang",
            "description": "Logon Language",
            "type": "Text",
            "default": "EN"
        }
    ]
}
{% endhighlight %}
</details>

`http://sherri.theobald.local:8065/config/extractions/KNA1/result-columns`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "columns": 
    [
        {
            "name": "KUNNR",
            "description": "Customer Number",
            "type": "StringLengthMax",
            "length": 10,
            "isPrimaryKey": true,
            "isEncrypted": false,
            "referenceField": "",
            "referenceTable": ""
        },
        {
            "name": "LAND1",
            "description": "Country Key",
            "type": "StringLengthMax",
            "length": 3,
            "isPrimaryKey": false,
            "isEncrypted": false,
            "referenceField": "",
            "referenceTable": ""
        },
        {
            "name": "NAME1",
            "description": "Name 1",
            "type": "StringLengthMax",
            "length": 35,
            "isPrimaryKey": false,
            "isEncrypted": false,
            "referenceField": "",
            "referenceTable": ""
        },
        {
            "name": "ORT01",
            "description": "City",
            "type": "StringLengthMax",
            "length": 35,
            "isPrimaryKey": false,
            "isEncrypted": false,
            "referenceField": "",
            "referenceTable": ""
        },
        {
            "name": "Mean_UMSAT",
            "description": "Annual sales",
            "type": "Double",
            "isPrimaryKey": false,
            "isEncrypted": false,
            "referenceField": "UWAER",
            "referenceTable": "KNA1"
        }
    ]
}
{% endhighlight %}
</details>

### Extraktionen ausführen

```
[protocol]://[host]:[port]/?name=[extraction_name]
```

Führt die angegebene Extraktion aus.
\* Dieser Endpunkt ist als veraltet markiert und wird in Zukunft durch `/run/[extraction_name]` ersetzt. \*

Die Antwort eines Webservice-Aufrufs enthält die folgenden Informationen:

|     | Antwort | Beschreibung | 
|-----|-----------|--------------|
| (1) | HTTP Statuscode | Der HTTP-Statuscode *200* zeigt einen erfolgreichen Extraktionsaufruf an. Dies weist nicht auf eine erfolgreiche Ausführung der Extraktion hin. <br> Der HTTP-Statuscode *404* zeigt an, dass die aufgerufene Extraktion nicht existiert. Detaillierte Informationen finden Sie im Protokoll des Webservices. | 
| (2) |HTTP-Header | Zeigt den Zeitstempel der Extraktion im HTTP-Header an, z. B., X-XU-Timestamp: *2021-04-09_19:03:09.971* | 
| (3) | HTTP Response-Body | Die Antwort im HTTP-Body hängt vom Typ der Destination der Extraktion ab. | 

![Webservice Call pull](/img/content/xu/automation/webservice/xu_call_webservice_csv.png){:class="img-responsive"}

#### Parameter

`[protocol]://[host]:[port]/?name=[extraction_name]`

| Parameter    | Beschreibung  | 
|-----------|--------------|
| ```&[parameter1_name]=[value]```  |   Führt die angegebene Extraktion aus und übergibt Werte an die angegebenen {% if page.product == "xtract-universal" %}[Extraktionsparameter](./extraktionen-ausfuehren-und-einplanen/extraktionsparameter).{% else %}[Extraktionsparameter](./erste-schritte/eine-extraktion-ausfuehren#definieren-der-extraktionseigenschaften).{% endif %} |
| ```&quiet-push=true```  |   Führt die angegebene Extraktion aus und unterdrückt die Ausgabe von Extraktionsprotokollen für Push-Destinationen. Dieser Parameter hat keine Auswirkung auf Pull-Destinationen und asynchrone Extraktionen.|
| ```&wait=false``` |   Führt die angegebene Extraktion asynchron aus und gibt den Zeitstempel im HTTP-Body zurück. Standardmäßig (true) wartet, bis die Extraktion abgeschlossen ist. \* Dieser Endpunkt ist als veraltet markiert und wird durch `/start/[extraction_name]` ersetzt. \*|

{: .box-tip }
**Tipp:** Sie können die Benutzeroberfläche im Menu "Run Extraction" verwenden, um eine URL für Extraktionsläufe zu generieren, siehe [Extraktion ausführen](./erste-schritte/eine-extraktion-ausfuehren).


#### Example 

`http://sherri.theobald.local:8065/?name=KNA1&wait=false&city=Stuttgart&name1=Theobald%20Software`

<details>
<summary>Click here to show the response body</summary>
{% highlight csv %}
KUNNR,LAND1,NAME1,ORT01,Mean_UMSAT
0000000779,DE,Theobald Software,Stuttgart,"0,00000000000000000E+000"
{% endhighlight %}
</details>

<!---
/run/$name
POST starts the extraction with name $name and waits for it to finish. The response is either the extractions content in case it is an HTTP destination or the log output. (Synchronous execution)

/start/$name
POST starts the extraction with name $name and returns the run status immediately. (Asynchronous execution)

/stop
Stops extractions. If no parameter is supplied all running extractions are cancelled. A parameter may be given in the path in for form of /stop/yyyy-MM-dd_hh:mm:ss.fff to identify a single extraction run or /stop/$name to stop all running instances of a single extraction definition.
-->


### Extraktion abbrechen

```
[protocol]://[host]:[port]/abort?name=[extraction_name]
```  

Bricht die angegebene Extraktion ab.
Bei erfolgreichem Abbruch wird im HTTP-Body eine Bestätigungsmeldung zurückgegeben.

\* Dieser Endpunkt ist als veraltet markiert und wird durch `/stop/[extraction_name]` ersetzt. \*

#### Beispiel

`http://sherri.theobald.local:8065//abort?name=KNA1`

<details>
<summary>Click here to show the response body</summary>
{% highlight csv %}
All runs of extraction 'KNA1' aborted.
{% endhighlight %}
</details>

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

