

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
