
### Get Version

```
[protocol]://[host]:[port]/version
``` 

Returns the software version of the {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} server installation in JSON format. 

#### Example 

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

### Get Destination Details

```
[protocol]://[host]:[port]/destinations
```  

Returns a list of all defined destinations. 
The result contains the following elements:

|  Item   | Description    |
|--------------|---------|
| name | name of the target connection |
| type | connection type |
| host | host name, if applicable |
| port | port name, if applicable |
| database | database name, if applicable | 
| user | user name in the connection, if applicable |  
| schema | schema name, if applicable |
| directory | directory name, if applicable |


{: .box-tip } 
**Tip:**  For a list of extractions with a specific destination, see [Get Extraction Details](#get-extraction-details).

#### Example 

`http://sherri.theobald.local:8065/destinations`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
Name,Type,Host,Port,Database,User,Schema,Directory
csv,FileCSV,,,,,,"C:\Users\alice\Documents\csv\"
http-csv,CSV,,,,,,
http-json,HTTPJSON,,,,,,
json,FileJSON,,,,,,"C:\Users\alice\Documents\json"
sql-server,SQLServer,dbtest-ws2019.theobald.local,1433,alice,THEOBALD\alice,,
tableau2022,Tableau,,,,,,"C:\Users\alice\Documents\csv"
{% endhighlight %}
</details>

### Get Extraction Details

```
[protocol]://[host]:[port]/config/extractions
```  

Returns a list of all defined extractions in JSON format. The result contains the following elements:

|  Item   | Description    |
|--------------|---------|
| name  | name of the extraction |
| type  |extraction type |
| sapObject|  name of the extracted SAP object |
| source|  name of the source connection |
| destination| name of the target connection |
| latestRun| contains *rowCount*, *duration*, *state* and *startedAt* of the latest extraction run |
| rowCount| number of the last extracted data records |
| duration | duration of the last execution |
| state| status of the extraction (*Running*, *FinishedNoErrors*, *FinishedErrors*) |
| startedAt| timestamp of the last execution |
| created| contains *machine*, *timestamp* and *user* of when the extraction was created|
| machine| machine on which the extraction was created |
| timestamp| timestamp of the creation |
| user| user that created the extraction |
| lastChange| contains *machine*, *timestamp* and *user* of when the extraction was last changed|
| machine| machine on which the extraction was last changed|
| timestamp| timestamp of the last change |
| user| user that last changed the extraction |


#### Parameters & Options

| Parameter    | Description  | 
|-----------|--------------|
| ```?destinationType=[destination]```  |   Returns a list of extractions that write into a specific destination. |
| ```/[extraction_name]/parameters```  |   Returns a list of runtime parameters used in the specified extraction. Every extraction has a set of *Extraction*, *Source* and *Custom* {% if page.product == "xtract-universal" %}[extraction parameters](./execute-and-automate-extractions/extraction-parameters).{% else %}[extraction parameters](./getting-started/run-an-extraction).{% endif %} The parameters are available in the "Run Extraction" window.<br>. |
| ```/[extraction_name]/result-columns```  |   Returns the result columns of an extraction. |


The result of `[protocol]://[host]:[port]/config/extractions/[extraction_name]/result-columns` contains the following elements:

| Item         | Type    | Description                         |
|--------------|---------|-------------------------------------|
| name         | String  | column name                         |
| description  | String  | column description                  |
| type         | String  | column datatype                     |
| length       | Integer | column length                       |
| isPrimaryKey | boolean | column is primary key of extraction |
| isEncrypted  | boolean | encryption for column is active     |
| decimalsCount| Integer | number of decimal places |
| [referenceField](https://help.sap.com/viewer/6f3c662f6c4b1014b3c1f279a90f707f/7.01.18/en-US/cf21ea5d446011d189700000e8322d00.html) | String  | reference field for currency/quantity |
| [referenceTable](https://help.sap.com/viewer/6f3c662f6c4b1014b3c1f279a90f707f/7.01.18/en-US/cf21ea5d446011d189700000e8322d00.html) | String  | reference table for currency/quantity |

{: .box-note }
**Note:** Data fields that contain dates have the data type *ConvertedDate* if the option *Date Conversion* in the *Destination Settings* is active. 
If inactive, the data type is *StringLengthMax* with a length of 8 (*Date*).

#### Examples

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


### Run Extractions

```
[protocol]://[host]:[port]/?name=[extraction_name]
```

Runs the specified extraction.
\* This endpoint is marked as deprecated and will be replaced by `/run/[extraction_name]` in the future. \*

The response of a web service call contains the following information:

|     | Response | Description | 
|-----|-----------|--------------|
| (1) | HTTP status code | The HTTP status code *200* indicates a successful extraction call. It does not indicate a successful execution of the extraction. <br> The HTTP status code *404* indicates that the called extraction does not exist. Detailed information can be found in the log of the web service. | 
| (2) | HTTP header | Shows the timestamp of the extraction in the HTTP header e.g., X-XU-Timestamp: *2021-04-09_19:03:09.971* | 
| (3) | HTTP response body | The Response in the HTTP body depends on the destination type of the extraction. Depending on the destination type, the extracted data is returned in either CSV or JSON format. | 

![Webservice Call pull](/img/content/xu/automation/webservice/xu_call_webservice_csv.png){:class="img-responsive"}

#### Parameters

| Parameter    | Description  | 
|-----------|--------------|
| ```&[parameter1_name]=[value]```  |   Runs the specified extraction and passes values to the specified {% if page.product == "xtract-universal" %}[extraction parameters](./execute-and-automate-extractions/extraction-parameters).{% else %}[extraction parameters](./getting-started/run-an-extraction).{% endif %} |
| ```&quiet-push=true```  |   Runs the specified extraction and suppresses the output of extraction logs for push destinations. This parameter has no effect on pull destinations and asynchronous extractions.|
| ```&wait=false``` |   Runs the specified extraction asynchronously and returns the timestamp in the HTTP body. Default (true) waits for the extraction to finish. \* This endpoint is marked as deprecated and will be replaced by `/start/[extraction_name]` in the future. \*|

{: .box-tip }
**Tip:** You can use the UI in the "Run Extraction" menu to generate a URL for extraction runs, see {% if page.parent == "xtract-universal" %}[Run Extraction](./getting-started/run-an-extraction#run-extraction).{% else %}[Run Extraction](./getting-started/run-an-extraction).{% endif %}


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


### Abort Extraction

```
[protocol]://[host]:[port]/abort?name=[extraction_name]
```  

Aborts the specified extraction.
If the abortion is successful, a confirmation message is returned in the HTTP body. 

\* This endpoint is marked as deprecated and will be replaced by `/stop/[extraction_name]` in the future. \*

#### Example

`http://sherri.theobald.local:8065//abort?name=KNA1`

<details>
<summary>Click here to show the response body</summary>
{% highlight csv %}
All runs of extraction 'KNA1' aborted.
{% endhighlight %}
</details>

### Get Status of an Extraction

```
[protocol]://[host]:[port]/status/?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]
``` 

Returns the status of a (running) extraction at the specified timestamp. 
The timestamp corresponds to the *startedAt* element returned by [`[protocol]://[host]:[port]/config/extractions/`](#get-extraction-details) or [`[protocol]://[host]:[port]/logs/extractions/[extraction-name]`](#get-extraction-logs).

| State            | Description                                                  |
|------------------|--------------------------------------------------------------|
| Running          | The extraction is running.                                   |
| FinishedNoErrors | The extraction is finished without errors.             |
| FinishedErrors   | The extraction is finished, but with minimum one error. |

#### Example

`http://sherri.theobald.local:8065/status/?name=KNA1&timestamp=2024-02-05_10:23:08.025`

<details>
<summary>Click here to show the response body</summary>
{% highlight csv %}
FinishedNoErrors
{% endhighlight %}
</details>

### Get Extraction Logs

```
[protocol]://[host]:[port]/logs/extractions
``` 

Returns a list of extraction runs. The result contains the following elements:

|  Item   | Description    |
|--------------|---------|
| extractionName  | name of the extraction |
| runs  | contains *rowCount*, *duration*, *state*, *webServerLog* and *startedAt* of extraction runs |
| row count| number of extracted data records |
| duration | duration of the execution |
| state| status of the extraction (*Running*, *FinishedNoErrors*, *FinishedErrors*) |
| webServerLog| timestamp of the corresponding [server log](#get-server-logs) |
| startedAt| timestamp of the execution |


#### Parameters & Options

| Parameter    | Description  | 
|-----------|--------------|
| ```?min=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the extraction runs after the specified date and time. |
| ```?max=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the extraction runs before the specified date and time. |
| ```/[extraction-name]```  |   Returns all extraction runs of the specified extraction. |
| ```/[extraction-name]/[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the extraction run of the specified extraction with the specified timestamp. |
| ```/[extraction-name]/[yyyy-MM-dd_HH:mm:ss.SSS]/log```  |   Returns the extraction log of the specified extraction with the specified timestamp. |


#### Example

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

`http://sherri.theobald.local:8065/logs/extractions/KNA1/2024-02-20_07:12:54.774/log`

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
**Note:** For information on how to interpret logs, see [Logging](./logging).

### Get Server Logs

```
[protocol]://[host]:[port]/logs/web
```  

Returns a list of timestamps that correspond to server logs.

#### Parameters & Options

| Parameter    | Description  | 
|-----------|--------------|
| ```?min=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the timestamps of server logs after the specified date and time. |
| ```?max=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the timestamps of server logs before the specified date and time. |
| ```/[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the server log entries with the specified timestamp. |

#### Example

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
**Note:** For information on how to interpret logs, see [Logging](./logging).

