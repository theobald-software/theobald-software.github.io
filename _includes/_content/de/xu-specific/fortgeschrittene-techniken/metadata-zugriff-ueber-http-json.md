### Über diese Seite
Xtract Universal bietet die Möglichkeit, verschiedene Metadaten-Informationen über eine Web-API abzurufen.
Der folgende Abschnitt beinhaltet Informationen über die verfügbaren Metadaten und die dazugehörigen URLs.

{: .box-note }
**Hinweis:** Die Metadaten-API gibt Daten im http-json Format aus. Die API ist ab [Version 4.27.1](https://kb.theobald-software.com/version-history/xtract-universal-version-history) verfügbar.

### Ergebnisspalten einer Extraktion

Das URL Pattern zum Abruf von Ergebnisspalten einer Extraktion lautet: <br> 
``` http://[host]:[port]/config/extractions/[extraction_name]/result-columns ```

Die Ergebnisspalte wird über folgende Felder definiert:

| Spalte       | Typ    | Beschreibung                         |
|--------------|---------|-------------------------------------|
| name         | String  | Name der Spalte                        |
| description  | String  | Beschreibung der Spalte                  |
| type         | String  | Datentyp der Spalte                     |
| length       | Integer | Länge der Spalte                       |
| isPrimaryKey | boolean | Spalte ist Primärschlüssel der Extraktion |
| isEncrypted  | boolean | Verschlüsselung für Spalte ist aktiv     |
| decimalsCount  | Integer | Anzahl der Dezimalstellen |
| [referenceField](https://help.sap.com/viewer/6f3c662f6c4b1014b3c1f279a90f707f/7.01.18/de-DE/cf21ea5d446011d189700000e8322d00.html) | String  | Referenzfeld für Währung/Quantität|
| [referenceTable](https://help.sap.com/viewer/6f3c662f6c4b1014b3c1f279a90f707f/7.01.18/de-DE/cf21ea5d446011d189700000e8322d00.html) | String  | Referenztabelle für Währung/Quantität|

Mögliche Werte für *type* sind: <br>
*Byte, Short, Int, Long, Double, Decimal, NumericString, StringLengthMax, StringLengthUnknown, ByteArrayLengthExact, ByteArrayLengthMax, ByteArrayLengthUnknown, Date, ConvertedDate, Time*

Beispiel: <br>
```http://localhost:8065/config/extractions/BSEG/result-columns``` ruft die Metadaten der Extraktion *BSEG* auf:

<details>
<summary>Klicken Sie hier, um das Beispiel anzuzeigen</summary>
{% highlight json %}
{
    "columns": 
    [
        {
            "name": "BELNR",
            "description": "Accounting Document Number",
            "type": "StringLengthMax",
            "length": 10,
            "isPrimaryKey": true,
            "isEncrypted": false
        },
        {
            "name": "GJAHR",
            "description": "Fiscal Year",
            "type": "NumericString",
            "length": 4,
            "isPrimaryKey": true,
            "isEncrypted": false
        },
        {
            "name": "AUGDT",
            "description": "Clearing Date",
            "type": "ConvertedDate",
            "isPrimaryKey": false,
            "isEncrypted": false
        },
        {
            "name": "DMBTR",
            "description": "Amount in Local Currency",
            "type": "Decimal",
            "length": 13,
            "decimalsCount": 2,
            "isPrimaryKey": false,
            "isEncrypted": false,
            "referenceField": "WAERS",
            "referenceTable": "T001"
        }
    ]
}
{% endhighlight %}
</details>

{: .box-note }
**Hinweis:** Falls *Date Conversion* in den *Destination Settings* aktiv ist, haben Datenfelder die ein Datum enthalten den Typ *ConvertedDate*. Falls Date Conversion inaktiv ist, wird der Datentyp zu *StringLengthMax*.

### Parameter
Jede Extraktion hat ein Set an *Extraction*, *Source* und *Custom* [Laufzeit Parametern](../extraktionen-ausfuehren-und-einplanen/extraktionsparameter).
Diese Parameter befinden sich im "Run Extraction" Fenster des Designers. 

Das URL-Pattern zum Abruf der Parameter lautet: <br> 
```http://[host]:[port]/config/extractions/[extraction_name]/parameters```

Beispiel: <br>
```http://localhost:8065/config/extractions/plants/parameters/``` ruft die Metadaten der Extraktion *plants* auf:

<details>
<summary>Klicken Sie hier, um das Beispiel anzuzeigen</summary>
{% highlight json %}
{
    "extraction": 
    [
        {
            "name": "clearBuffer",
            "description": "Clear/keep the result buffer",
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
            "default": "erp"
        },
        {
            "name": "destination",
            "description": "Sets the name of the destination",
            "type": "Text",
            "default": "http-csv"
        },
        {
            "name": "rows",
            "description": "Maximum number of rows",
            "type": "Number",
            "default": "0"
        },
        {
            "name": "where",
            "description": "Where Clause",
            "type": "Text",
            "default": "WERKS= @v_werks"
        },
        {
            "name": "packageSize",
            "description": "Package Size",
            "type": "Number",
            "default": "50000"
        }
    ],
    "custom": 
    [
        {
            "name": "v_werks",
            "description": "",
            "type": "Text",
            "default": ""
        }
    ],
    "source": 
    [
        {
            "name": "lang",
            "description": "Logon Language",
            "type": "Text",
            "default": "EN"
        },
        {
            "name": "logonTicket",
            "description": "SAP Logon Ticket",
            "type": "Text",
            "default": ""
        }
    ]
}
{% endhighlight %}
</details>

### Liste aller Extraktionen

Eine Liste aller in Xtract Universal definierten Extraktionen kann über folgendes URL-Pattern abgerufen werden:<br>
```http://[host]:[port]/config/extractions/```

Beispiel: <br>
```http://localhost:8065/config/extractions/``` ruft eine Liste aller Extraktions auf localhost:8065 auf.

<details>
<summary>Klicken Sie hier, um das Beispiel anzuzeigen</summary>
{% highlight json %}
{
    "extractions": 
    [
        {
            "name": "0COSTCENTER_0101_HIER",
            "type": "DeltaQ",
            "source": "ec5",
            "destination": "parquet",
            "latestRun": {
                "started": "20210219T132323.542Z",
                "duration": "PT00H00M07.101S",
                "rowsCount": 0,
                "state": "FinishedErrors"
            },
            "lastChange": {
                "machine": "[::ffff:169.254.223.102%10]:58691",
                "user": "THEOBALD\\white",
                "timestamp": "20210219T132508.602Z"
            },
            "created": {
                "machine": "[::ffff:127.0.0.1]:53835",
                "user": "THEOBALD\\walter",
                "timestamp": "20210212T105033.605Z"
            }
        },
        {
            "name": "0FI_GL_4_ODP",
            "type": "ODP",
            "source": "ec5",
            "destination": "sqlserver",
            "latestRun": {
                "started": "20210311T095741.184Z",
                "duration": "PT00H07M03.024S",
                "rowsCount": 1309110,
                "state": "FinishedNoErrors"
            },
            "lastChange": {
                "machine": "[::ffff:169.254.223.102%10]:50070",
                "user": "THEOBALD\\mario",
                "timestamp": "20210311T095739.174Z"
            },
            "created": {
                "machine": "[::ffff:169.254.223.102%10]:50070",
                "user": "THEOBALD\\brothers",
                "timestamp": "20210311T093800.095Z"
            }
        },
               {
            "name": "0MATERIAL_ATTR",
            "type": "DeltaQ",
            "source": "ec5",
            "destination": "http-csv",
            "latestRun": {
                "started": "20210219T145568.237Z",
                "duration": "PT00H00M24.433S",
                "rowsCount": 18011,
                "state": "FinishedNoErrors"
            },
            "lastChange": {
                "machine": "[::ffff:169.254.223.102%10]:58691",
                "user": "THEOBALD\\giana",
                "timestamp": "20210219T145555.517Z"
            },
            "created": {
                "machine": "[::ffff:169.254.223.102%9]:60483",
				"user": "THEOBALD\\sisters",
                "timestamp": "20200708T091200.544Z"
            }
        }
    ]
}
{% endhighlight %}
</details>


### Liste von Extraktionen mit einer bestimmen Destination

Eine Liste aller Extraktionen, die Daten in eine bestimmte Destination schreiben, kann über folgendes URL-Pattern abgerufen werden:<br>
```http://[host]:[port]/config/extractions/?destinationType=[typename]```

Mögliche Einträge für [typename] sind:<br>
*Unknown, Alteryx, AlteryxConnect, AzureDWH, AzureBlob, CSV, DB2, EXASOL, FileCSV, FileJSON, GoodData, GoogleCloudStorage, HANA, HTTPJSON, MicroStrategy, MySQL, ODataAtom,Oracle, Parquet, PostgreSQL, PowerBI, PowerBIConnector, Qlik, Redshift, S3Destination, Salesforce, SharePoint, Snowflake, SQLServer, SqlServerReportingServices, Tableau, Teradata, Vertica*

Beispiel: <br>
```http://localhost:8065/config/extractions/?destinationType=FileCSV``` ruft eine Liste aller Extraktionen auf, die Daten in eine csv-Datei schreiben.

<details>
<summary>Klicken Sie hier, um das Beispiel anzuzeigen</summary>
{% highlight json %}
{
    "extractions": 
    [
        {
            "name": "2LIS_02_ITM",
            "type": "ODP",
            "source": "MySAPerp",
            "destination": "flatfile",
            "latestRun": {
                "duration": "PT00H00M27.085S",
                "rowsCount": 109589,
                "state": "FinishedNoErrors"
            },
            "lastChange": {
                "machine": "[::ffff:169.254.223.102%10]:50070",
                "user": "THEOBALD\\walter",
                "timestamp": "20210311T095624.786Z"
            },
            "created": {
                "machine": "[::ffff:127.0.0.1]:57734",
                "timestamp": "20210202T151301.038Z"
            }
        },
        {
            "name": "DEMO_Table",
            "type": "Table",
            "source": "MySAPBW",
            "destination": "flatfile",
            "latestRun": {
                "started": "20210317T10552.653Z",
                "duration": "PT00H00M01.049S",
                "rowsCount": 1000,
                "state": "FinishedNoErrors"
            },
            "lastChange": {
                "machine": "[::ffff:127.0.0.1]:57862",
                "timestamp": "20210317T105222.993Z"
            },
            "created": {
                "machine": "[::ffff:127.0.0.1]:57862",
                "timestamp": "20210317T105032.768Z"
            }
        }
    ]
}
{% endhighlight %}
</details>