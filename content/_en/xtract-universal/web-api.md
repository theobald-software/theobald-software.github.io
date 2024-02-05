---
ref: xtract-universal-100
layout: page
title: Web-API
description: Web-API
product: xtract-universal
parent: xtract-universal
permalink: /:collection/:path
weight: 100
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=SAPCustomizing-EN:sap-customizing-en
---

Xtract Universal offers a web API that allows running extractions and querying meta information and extraction logs from Xtract Universal through web calls.
The web API returns the result as an http-json stream.

The following section contains information about available metadata and URLs.

### Base URL Format

The basic URL for web calls uses the following format: `[protocol]://[host or IP address]:[port]/`.

#### Examples

| Protocol	  | Syntax	      | Example       |
|:----------- | :------------ | :------------ | 
| HTTP	| `http://[host].[domain]:[port]` | `http://sherri.theobald.local:8065` | 
| HTTP	| `http://[host]:[port]` | 	`http://localhost:8065` | 
| HTTPS | `https://[host].[domain]:[port]` | `https://sherri.theobald.local:8165` <br>Requires a dedicated host name and X.509 certificate, see [web server settings](./server/server-settings#web-server). | 

{: .box-note } 
**Note:** Make sure to use the correct ports, see [Server Ports](./server/ports).

### Get Version

```
[protocol]://[host]:[port]/CurrentVersion
``` 

Returns the software version of Xtract Universal. \* This endpoint is marked as deprecated. \*

<!---
/version
Returns the current version of the server installation as JSON.

Response:

{ "version": "String" }


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

### Get Destinations

```
[protocol]://[host]:[port]/config/destinations
```  

Returns a list of all defined destinations. 
\* This endpoint is marked as deprecated. \* <br>
For a list of extractions with a specific destination, see [Get Extraction Details](#get-extraction-details).

#### Example 

`http://sherri.theobald.local:8065/config/destinations`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "destinations": 
    [
        {
            "name": "csv",
            "type": "FileCSV",
            "directory": "C:\\Users\\alice\\Documents\\csv\\"
        },
        {
            "name": "http-csv",
            "type": "CSV"
        },
        {
            "name": "http-json",
            "type": "HTTPJSON"
        },
        {
            "name": "json",
            "type": "FileJSON",
            "directory": "C:\\Users\\alice\\Documents\\json"
        },
        {
            "name": "sql-server",
            "type": "SQLServer",
            "host": "dbtest-ws2019.theobald.local",
            "port": 1433,
            "database": "alice",
            "user": "THEOBALD\\alice"
        },
        {
            "name": "tableau",
            "type": "Tableau",
            "directory": "C:\\Users\\alice\\Documents\\tableau"
        }
    ]
}
{% endhighlight %}
</details>

### Get Extraction Details

```
[protocol]://[host]:[port]/config/extractions/
```  

Returns a list of all defined extractions in JSON format. The result contains the following elements:

|  Item   | Description    |
|--------------|---------|
| name  | name of the extraction |
| type  |extraction type |
| technical name|  name of the extracted SAP object |
| source|  name of the source connection |
| destination| name of the target connection |
| latestRun| contains rowCount, duration, state and startedAt |
| row count| number of the last extracted data records |
| duration | duration of the last execution |
| state| status of the extraction (*Running*, *FinishedNoErrors*, *FinishedErrors*) |
| startedAt| timestamp of the last execution |
| created| contains machine, timestamp and user |
| machine| machine on which the extraction was created |
| timestamp| timestamp of the creation |
| user| user that created the extraction |
| lastChange| contains machine, timestamp and user |
| machine| machine on which the extraction was last changed|
| timestamp| timestamp of the last change |
| user| user that last changed the extraction |

#### Parameters

| Parameter    | Description  | 
|-----------|--------------|
| ```?destinationType=[destination]```  |   Returns a list of extractions that write into a specific destination. |
| ```[extraction_name]/parameters```  |   Returns a list of runtime parameters used in the specified extraction. Every extraction has a set of *Extraction*, *Source* and *Custom* [runtime parameters](../execute-and-automate-extractions/extraction-parameters). The parameters are available in the Xtract Universal Designer's "Run Extraction" window.<br>. |
| ```[extraction_name]/result-columns```  |   Returns the result columns of an extraction. |


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

```
http://sherri.theobald.local:8065/config/extractions/
```

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
                "duration": "00:00:13.383",
                "state": "FinishedNoErrors",
                "startedAt": "2023-08-17_11:24:07.770"
            },
            "created": {
                "machine": "TODD",
                "timestamp": "2022-10-05_08:06:18.544",
                "user": "THEOBALD\\steffan"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "2024-01-29_13:15:30.701",
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
                "duration": "00:00:00.114",
                "state": "FinishedNoErrors",
                "startedAt": "2023-08-17_11:31:44.029"
            },
            "created": {
                "machine": "SHERRI",
                "timestamp": "2023-08-15_11:46:51.045",
                "user": "THEOBALD\\alice"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "2023-08-17_11:33:28.786",
                "user": "THEOBALD\\alice"
            }
        }
		{% endhighlight %}
</details>

`http://sherri.theobald.local:8065/config/extractions/`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "extractions": 
    [
        {
            "name": [
                "ACDOCA"
            ],
            "type": "Table",
            "technicalName": "ACDOCA",
            "source": "s4h",
            "destination": "http-csv",
            "created": {
                "machine": "SHERRI",
                "timestamp": "2023-10-04_05:50:56.893",
                "user": "THEOBALD\\alice"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "2023-10-05_11:40:13.166",
                "user": "THEOBALD\\alice"
            }
        },
        {
            "name": [
                "bw2--0ADDR_SHORT_T"
            ],
            "type": "ODP",
            "technicalName": "0ADDR_SHORT$T",
            "source": "ec5",
            "destination": "csv",
            "latestRun": {
                "rowCount": 0,
                "duration": "00:00:01.498",
                "state": "FinishedErrors",
                "webServerLog": "2023-10-30_07:25:57.435",
                "startedAt": "2023-10-30_07:25:58.417"
            },
            "created": {
                "machine": "SHERRI",
                "timestamp": "2023-06-22_06:39:10.994",
                "user": "alice"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "2023-10-30_07:25:33.707",
                "user": "THEOBALD\\alice"
            }
        }
	]
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
                "timestamp": "2023-06-22_06:24:54.495",
                "user": "alice"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "2023-07-03_07:06:09.890",
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
                "timestamp": "2023-06-22_05:15:26.003",
                "user": "alice"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "2023-07-03_07:06:09.955",
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
                "duration": "00:00:02.710",
                "state": "FinishedNoErrors",
                "startedAt": "2023-07-19_06:04:04.139"
            },
            "created": {
                "machine": "SHERRI",
                "timestamp": "2023-07-19_05:15:13.542",
                "user": "THEOBALD\\alice"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "2023-08-15_07:46:27.575",
                "user": "THEOBALD\\alice"
            }
        },
        {
            "name": [
                "MAKT"
            ],
            "type": "Table",
            "technicalName": "MAKT",
            "source": "ec5",
            "destination": "sql-server",
            "latestRun": {
                "rowCount": 0,
                "duration": "00:00:02.133",
                "state": "FinishedErrors",
                "startedAt": "2023-08-04_06:43:17.233"
            },
            "created": {
                "machine": "SHERRI",
                "timestamp": "2023-06-13_16:50:52.580",
                "user": "THEOBALD\\alice"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "2023-08-04_06:43:11.830",
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
\* This endpoint is marked as deprecated. \*<br>
The response of a web service call contains the following information:

|     | Response | Description | 
|-----|-----------|--------------|
| (1) | HTTP status code | The HTTP status code *200* indicates a successful extraction call. It does not indicate a successful execution of the extraction. <br> The HTTP status code *404* indicates that the called extraction does not exist. Detailed information can be found in the log of the web service. | 
| (2) | HTTP header | Shows the timestamp of the extraction in the HTTP header e.g., X-XU-Timestamp: *2021-04-09_19:03:09.971* | 
| (3) | HTTP response body | The Response in the HTTP body depends on the destination type of the extraction. Depending on the destination type, the extracted data is returned in either CSV or JSON format | 

![Webservice Call pull](/img/content/xu/automation/webservice/xu_call_webservice_csv.png){:class="img-responsive"}

#### Parameters

| Parameter    | Description  | 
|-----------|--------------|
| ```&[parameter1_name]=[value]```  |   Runs the specified extraction and passes values to the specified runtime parameters. |
| ```&quiet-push=true```  |   Runs the specified extraction and suppresses the output of extraction logs for push destinations. This parameter has no effect on pull destinations and asynchronous extractions.|
| ```&wait=false``` |   Runs the specified extraction asynchronously and returns the timestamp in the HTTP body. Default (true) waits for the extraction to finish. |

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

### Get Status of an Extraction

```
[protocol]://[host]:[port]/status/?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]
``` 

Returns the status of a (running) extraction at the specified timestamp: 

| State            | Explanation                                                  |
|------------------|--------------------------------------------------------------|
| Running          | The extraction is running.                                   |
| FinishedNoErrors | The extraction has been finished without errors.             |
| FinishedErrors   | The extraction has been finished but with minimum one error. |

The timestamp corresponds to the *startedAt* property returned by `[protocol]://[host]:[port]/config/extractions/`.

#### Example

`http://sherri.theobald.local:8065/status/?name=KNA1&timestamp=2024-02-05_10:23:08.025`

<details>
<summary>Click here to show the response body</summary>
{% highlight csv %}
FinishedNoErrors
{% endhighlight %}
</details>

### Abort Extraction

```
[protocol]://[host]:[port]/abort?name=[extraction_name]
```  

Aborts the specified extraction.
If the abortion is successful, a confirmation message is returned in the HTTP body.

#### Example

`http://sherri.theobald.local:8065//abort?name=KNA1`

<details>
<summary>Click here to show the response body</summary>
{% highlight csv %}
All runs of extraction 'KNA1' aborted.
{% endhighlight %}
</details>

### Get Logs

```
[protocol]://[host]:[port]/log/?req_type=all
```    

Returns a list of all logs. 

#### Parameters

| Parameter    | Description  | 
|-----------|--------------|
| ```&past_days=[number_of_days]```  |   Returns all logs since n days. |
| ```&min=[yyyy-MM-dd]```  |   Returns all logs since the specified date. |
| ```&min=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns all logs since the specified timestamp. |
| ```&max=[yyyy-MM-dd]```  |   Returns all logs until the specified date. |
| ```&max=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns all logs until the specified timestamp. |

#### Server Logs

```
[protocol]://[host]:[port]/log/?req_type=server
```   

Returns a list of timestamps that have server logs.

| Parameter    | Description  | 
|-----------|--------------|
| ```&name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the logs of the specified extraction at the specified timestamp. |

#### Extraction Logs

```
[protocol]://[host]:[port]/log/?req_type=extraction
```

| Parameter    | Description  | 
|-----------|--------------|
| ```&name=[extraction_name]```  |   Returns the logs of the specified extraction. |


### ???

| ```[protocol]://[host]:[port]/ResultName?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]``` | Returns the name of the result file for a specific timestamp. |





## Query Extraction Logs


The server provides access to various metadata and logging information via HTTP. <br>

**Listing of all defined extractions**


The log contains the following columns:<br>
- **Name**: contains the name of the extraction.
- **Type**: contains the extraction type.
- **Source**: contains the name of the source connection.
- **Destination**: contains the name of the target connection.
- **LastRun**: contains the timestamp of the last execution. 
- **RowCount**: contains the number of last extracted data records. 
- **LastChange**: contains the timestamp of the last change. 
- **Created**: contains the timestamp of the creation. 

**List of all defined target connections**

The following URL
`
http://localhost:8065/destinations
`
lists the defined target connections. 

Name,Type,Host,Port,Database,User,Schema,Directory<br>
alteryx,Alteryx,,,,,,<br>
http-csv,CSV,,,,,,<br>
http-odata-atom,ODataAtom,,,,,<br>
sqlserver,SQLServer,localhost,1433,SAPDemos,test,,

The log contains the following columns:
- **Name**: contains the name of the target connection.
- **Type**: contains the connection type.
- **Host**: contains the host name, if applicable.
- **Port**: contains the port name, if applicable.
- **Database**: contains the database name, if applicable. 
- **User**: contains the user name in the connection, if applicable.  
- **Schema**: contains the schema name, if applicable.  
- **Directory**: contains the directory name, if applicable.

**Name of the result table/file for a specific timestamp**

Under
`
http://localhost:8065/ResultName?name=kna1&timestamp=2016-08-04_15:17:02.025
`
there is the name of the result table/file for a specific timestamp (this only works if the destination/extraction-specific settings have not been changed since the run) 

**Serverlog**

The server creates a separate log for each day with the corresponding timestamp. You can access the list of the server logs with the following parameter **req_type=server**:<br>

`
http://localhost:8065/log/?req_type=server&timestamp
`


**Server log of a specified timestamp**

You can access the server log of a specified timestamp (e.g. 2010-04-28_00:00:00.000) with the following parameters **req_type=server &
timestamp=2010-04-28_00:00:00.000** :

`
http://localhost:8065/log/?req_type=server&timestamp=2010-04-28_00:00:00.000
`

You can use the shortdate format instead of the timestamp format:

`
http://localhost:8065/log/?req_type=server&timestamp=2010-04-28
`

**Log of a specified extraction**

You can access the log of a specified extraction (e.g. vardemo)  with the following  parameters: **req_type=extraction&name=vardemo** 

`
http://localhost:8065/log/?req_type=extraction&name=vardemo
`

**Log of a specified extraction at a specified timespamp**

You can access the server log of a specified timestamp (e.g. 2010-04-28_00:00:00.000) with the following parameters **req_type=extraction&name=vardemo & 
timestamp=2010-04-27_10:24:47.674 :**

`
http://localhost:8065/log/?req_type=extraction&name=vardemo&timestamp=2010-04-27_10:24:47.674
`

**All logs**

You can access the list of all logs with the following parameter **req_type=all**:

`
http://localhost:8065/log/?req_type=all
`

**All logs since n days**

You can access all logs since n days with the following parameters **req_type=all&past_days=n**:

`
http://localhost:8065/log/?req_type=all&past_days=1
`

**All logs since a specified timestamp**

You can access all logs since a specified timestamp with the following parameters **req_type=all&min=2010-04-28_09:49:17.831:**

`
http://localhost:8065/log/?req_type=all&min=2010-04-28_09:49:17.831
`

You can use a short date instead of a min timestamp.


**All logs until a specified timestamp**

You can access all logs until a specified timestamp with the following parameters  **req_type=all&min=2010-04-28_09:49:17.831**:

`
http://localhost:8065/log/?req_type=all&max=2010-04-28_09:49:17.831
`

You can use a short date instead of a min timestamp.
All logs between two specified timestamps

Use both parameters min and max to access all logs between two specified timestamps.

**Log content**

The log output contains the following columns:

**LineCount**: contains the row number.<br>
**Name**: contains the name of the extraction or the server name in case of a server log.<br>
**Timestamp**: contains the timestamp. <br>
**State**: contains a number between 2 and 4 for a server extraction or the number 5 for a server log.<br>
**StateDescr**: contains the state description.

| State | StateDescr       | Explanation                                                  |
|-------|------------------|--------------------------------------------------------------|
| 2     | Running          | The extraction is running.                                   |
| 3     | FinishedNoErrors | The extraction has been finished without errors.             |
| 4     | FinishedErrors   | The extraction has been finished but with minimum one error. |
| 5     | NotAvailable     | The status for a server log.                                 |

- **LogLevel**: has one of the following values **Error**, **Info** or **Debug** and describes the log type.
- **Source**: is the technical name of the component that generates the log info.
- **Mode**: has the value console or service.
- **Message**: is the log content. 






