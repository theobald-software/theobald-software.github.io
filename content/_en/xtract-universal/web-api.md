---
ref: xtract-universal-100
layout: page
title: Web-API
description: Web-API
product: xtract-universal
parent: xtract-universal
childidentifier: sap-customizing
permalink: /:collection/:path
weight: 100
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=SAPCustomizing-EN:sap-customizing-en
---

Xtract Universal offers a Web API that allows running extractions and querying meta information and extraction logs from Xtract Universal through web calls.
The following section contains information about the available web calls.

### Overview


#### Metadata:

| URL       | Description  | 
|-----------|--------------|
| ```http://[host]:[port]```  |   Returns a list of all extractions [Name,Type,Source,Destination,Connection,LastRun,RowCount,LastChange,Created], see |
| ```http://[host]:[port]/config/extractions/```  |   Returns a list of all defined extractions in JSON format, see [List of Extractions](#list-of-extractions). |
| ```http://[host]:[port]/destinations```  |   Returns a list of all defined destinations, see [List of extractions with a specific destination](#list-of-extractions-with-a-specific-destination-type). |
| ```http://[host]:[port]/config/extractions/?destinationType=[destination]```  |   Returns a list of extractions that write into a specific destination, see [List of extractions with a specific destination](#list-of-extractions-with-a-specific-destination-type). |
| ```http://[host]:[port]/config/extractions/[extraction_name]/parameters```  |   Returns a list of runtime parameters, see [Parameters](#parameters). |
| ```http://[host]:[port]/config/extractions/[extraction_name]/result-columns```  |   Returns the result columns of an extraction, see [Result columns of an extraction](#result-columns-of-an-extraction). |
| ```http://[host]:[port]/ResultName?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]``` | Returns the name of the result table/file for a specific timestamp. |
| ```http://[host]:[port]/status/?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]``` | Returns the status of the specified extraction at the specified timestamp. |

#### Run extractions:

| URL       | Description  | 
|-----------|--------------|
| ```http://[host]:[port]/?name=[extraction_name]```  |   Runs the specified extraction. |
| ```http://[host]:[port]/?name=[extraction_name]&[parameter1_name]=[value]&[parameter2_name]=[value]```  |   Runs the specified extraction and passes values to the specified runtime parameters. |
| ```http://[host]:[port]/?name=[extraction_name]&quiet-push=true```  |   Runs the specified extraction and suppresses the output of extraction logs for push destinations. |
| ```http://[host]:[port]/?name=[extraction_name]&wait=false```  |   Runs the specified extraction asynchronously. |
| ```http://[host]:[port]/abort?name=[extraction_name]```  |   Aborts the specified extraction. |


#### Logs:

| URL       | Description  | 
|-----------|--------------|
| ```http://[host]:[port]/log/?req_type=server```  |   Returns a list of timestamps that have server logs. |
| ```http://[host]:[port]/log/?req_type=server&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the server logs of the specified timestamp. |
| ```http://[host]:[port]/log/?req_type=all```  |   Returns a list of all logs. |
| ```http://[host]:[port]/log/?req_type=all&past_days=[number_of_days]```  |   Returns all logs since n days. |
| ```http://[host]:[port]/log/?req_type=all&min=[yyyy-MM-dd]```  |   Returns all logs since the specified date. |
| ```http://[host]:[port]/log/?req_type=all&min=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns all logs since the specified timestamp. |
| ```http://[host]:[port]/log/?req_type=all&max=[yyyy-MM-dd]```  |   Returns all logs until the specified date. |
| ```http://[host]:[port]/log/?req_type=all&max=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns all logs until the specified timestamp. |
| ```http://[host]:[port]/log/?req_type=extraction&name=[extraction_name]```  |   Returns the logs of the specified extraction. |
| ```http://[host]:[port]/log/?req_type=extraction&name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the logs of the specified extraction at the specified timestamp. |
| ```http://[host]:[port]/ResultName?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]``` | Returns the name of the result file for a specific timestamp. |
| ```http://[host]:[port]/status/?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]``` | Returns the status of the specified extraction at the specified timestamp. |




### Query Metadata



### Result columns of an extraction

The result column has the following schema:

| Column       | Type    | Description                         |
|--------------|---------|-------------------------------------|
| name         | String  | column name                         |
| description  | String  | column description                  |
| type         | String  | column datatype                     |
| length       | Integer | column length                       |
| isPrimaryKey | boolean | column is primary key of extraction |
| isEncrypted  | boolean | encryption for column is active     |
| decimalsCount  | Integer | number of decimal places |
| [referenceField](https://help.sap.com/viewer/6f3c662f6c4b1014b3c1f279a90f707f/7.01.18/en-US/cf21ea5d446011d189700000e8322d00.html) | String  | reference field for currency/quantity |
| [referenceTable](https://help.sap.com/viewer/6f3c662f6c4b1014b3c1f279a90f707f/7.01.18/en-US/cf21ea5d446011d189700000e8322d00.html) | String  | reference table for currency/quantity |

Example: <br>
```http://example.local:8065/config/extractions/BSEG/result-columns``` <br>

<details>
<summary>Click here to show the response body</summary>
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
**Note:** Data fields that contain dates have the data type *ConvertedDate* if the option *Date Conversion* in the *Destination Settings* is active. 
If inactive, the data type is *StringLengthMax* with a length of 8 (*Date*).


### Parameters
Every extraction has a set of *Extraction*, *Source* and *Custom* [runtime parameters](../execute-and-automate-extractions/extraction-parameters). These parameters are shown in the Xtract Universal Designer's "Run Extraction" window.<br>

The URL pattern is: 
```http://[host]:[port]/config/extractions/[extraction_name]/parameters```
This delivers a list of runtime parameters. <br>

Example: <br>
Calling the metadata of extraction *plants* using this URL: ```http://localhost:8065/config/extractions/plants/parameters/``` returns the following result:<br>

<details>
<summary>Click here to show the example</summary>
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

### List of extractions
A list of all extractions defined in Xtract Universal can be retrieved by the following URL pattern:<br>
```http://[host]:[port]/config/extractions/```

Example: <br>
Calling ```http://localhost:8065/config/extractions/``` returns a list of all extractions defined on the Xtract Universal server running on localhost:8065.

<details>
<summary>Click here to show the example</summary>
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


### List of extractions with a specific destination

A list of extractions writing data to a specific type of destination can be retrieved by the following URL pattern:

```http://[host]:[port]/config/extractions/?destinationType=[destination]```

Possible entries for [destination] are:

*Unknown, Alteryx, AlteryxConnect, AzureDWH, AzureBlob, CSV, DB2, EXASOL, FileCSV, FileJSON, GoodData, GoogleCloudStorage, HANA, HTTPJSON, MicroStrategy, MySQL, ODataAtom,Oracle, Parquet, PostgreSQL, PowerBI, PowerBIConnector, Qlik, Redshift, S3Destination, Salesforce, SharePoint, Snowflake, SQLServer, SqlServerReportingServices, Tableau, Teradata, Vertica*

Example: <br>
Calling ```http://localhost:8065/config/extractions/?destinationType=FileCSV``` returns a list of all extractions that write data to a csv flatfile destination. 

<details>
<summary>Click here to show the example</summary>
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




## Run Extractions

For testing purposes extractions can be called via web service.
Calling extractions is usually done via script, scheduler or BI-tool. 

### URL Format
To call an extraction via web services, use the following URL-format: `<Protocol>://<HOST or IP address>:<Port>/?name=<Name of the Extraction>{&<parameter_i>=<value_i>}`.

 Format | Description
:----------- | :------------
`<Protocol>` | HTTP or HTTPS - Activates a safe data transfer.
`<HOST or IP address>` | Host name or IP address of the XU server.
`<Port>` | The port on which the Xtract Universal service runs. The default is 8065. You can find the current value in the "Run" window of the [Designer](../getting-started/run-an-extraction#run-extraction).
`<Name of the Extraction>` | Name of the extraction.
`{&<parameter_i>=<value_i>}` | Optional parameter to be set when running the extraction. Multiple parameters can be set.

#### Examples
These are examples of URLs that call extractions:
```
http://localhost:8065/?name=Plants
http://localhost:8065/?name=Plants&rows=100
http://localhost:8065/?name=Plants&rows=100&lang=EN
```

### HTTP Status Code & Header
The response of a web service call contains the following information:
- HTTP status code (1)
- Information in the HTTP header (2)
- Response in the HTTP body (3)

![Webservice Call pull](/img/content/xu/automation/webservice/xu_call_webservice_csv.png){:class="img-responsive"}

Response | Description
:----------:| :------------
 (1) | The HTTP status code *200* indicates a successful extraction call. It does not indicate a successful execution of the extraction. <br> The HTTP status code *404* indicates that the called extraction does not exist. Detailed information can be found in the log of the web service.
 (2) | Shows the timestamp of the extraction in the following HTTP header e.g., X-XU-Timestamp: *2021-04-09_19:03:09.971*
 (3) | The Response in the HTTP body depends on the destination type of the extraction. 

#### Response in the HTTP Body (3)

Status code | Destination type | Description
:----------: | :-----------: | :-----
*200* | Pull | Depending on the destination type, the extracted data is returned in either CSV or JSON format (3).
*200* | Push | The extraction log is returned in CSV format.

### Options for Calling Extractions

Multiple options are available to use with the URL-format <br>
`<Protocol>://<HOST or IP address>:<Port>/?name=<Name of the Extraction>{&<parameter_i>=<value_i>}`.

#### Suppress Output of Extraction Logs
The log output of a synchronous called extraction with a push destination can be suppressed using the parameter `&quiet-push=true`.<br>
Example: `http://todd.theobald.local:8065/?name=Plants&quiet-push=true`

That parameters is set to `false` by default, meaning the extraction log of a push destination is added to the output by default. 

{: .box-note }
**Note:** That parameter has no effect on pull destinations and asynchronous extractions.

#### Asynchronous Call
Extraktions are called synchronous by default. The parameter `&wait=false` calls an asynchronous extraction.<br> 
Example: `http://todd.theobald.local:8065/?name=Plants&wait=false`

In this case the timestamp (4) of the extraction is returned in the HTTP body.
![Webservice Call async](/img/content/xu/automation/webservice/xu_call_webservice_push_asynch.png){:class="img-responsive"}

#### Abort Extraction
A running extraction can be aborted using the `abort` command before entering the extraction name.<br>
Example: `http://todd.theobald.local:8065/abort?name=Plants`

If the abortion is successfull, a confirmation message (5) is returned in the HTTP body.
![Webservice Call abort](/img/content/xu/automation/webservice/xu_call_webservice_abort.png){:class="img-responsive"}

-------------------------------------------

## Query Extraction Logs


The server provides access to various metadata and logging information via HTTP. <br>
The following examples use the following URL *http://localhost:8065/*.

**Listing of all defined extractions**

The following URL 

```
http://localhost:8065/
```
lists the defined extraction. 

Name,Type,Source,Destination,Connection,LastRun,RowCount,LastChange,Created<br>
Bilanz_GuV_Report,Report,erp,sqlserver,,,2016-07-25_03:05:55.250,2016-07-25_03:05:55.250<br>
BKPF,Table,erp,tableau,,,2016-07-26_06:04:38.239,2016-07-26_06:03:06.171<br>
BSEG,Table,erp,alteryx,2016-08-01_11:20:40.521,0,2016-07-21_04:22:12.681,2016-06-13_11:28:23.180<br>
demobexquery,BWCube,bw,powerbi,2016-07-29_09:43:13.675,210,2016-07-29_09:40:18.505,2016-05-23_02:25:31.273

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
```
http://localhost:8065/destinations
```
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
```
http://localhost:8065/ResultName?name=kna1&timestamp=2016-08-04_15:17:02.025
```
there is the name of the result table/file for a specific timestamp (this only works if the destination/extraction-specific settings have not been changed since the run) 

**Serverlog**

The server creates a separate log for each day with the corresponding timestamp. You can access the list of the server logs with the following parameter **req_type=server**:<br>

```
http://localhost:8065/log/?req_type=server&timestamp
```


**Server log of a specified timestamp**

You can access the server log of a specified timestamp (e.g. 2010-04-28_00:00:00.000) with the following parameters **req_type=server &
timestamp=2010-04-28_00:00:00.000** :

```
http://localhost:8065/log/?req_type=server&timestamp=2010-04-28_00:00:00.000
```

You can use the shortdate format instead of the timestamp format:

```
http://localhost:8065/log/?req_type=server&timestamp=2010-04-28
```

**Log of a specified extraction**

You can access the log of a specified extraction (e.g. vardemo)  with the following  parameters: **req_type=extraction&name=vardemo** 

```
http://localhost:8065/log/?req_type=extraction&name=vardemo
```

**Log of a specified extraction at a specified timespamp**

You can access the server log of a specified timestamp (e.g. 2010-04-28_00:00:00.000) with the following parameters **req_type=extraction&name=vardemo & 
timestamp=2010-04-27_10:24:47.674 :**

```
http://localhost:8065/log/?req_type=extraction&name=vardemo&timestamp=2010-04-27_10:24:47.674
```

**All logs**

You can access the list of all logs with the following parameter **req_type=all**:

```
http://localhost:8065/log/?req_type=all
```

**All logs since n days**

You can access all logs since n days with the following parameters **req_type=all&past_days=n**:

```
http://localhost:8065/log/?req_type=all&past_days=1
```

**All logs since a specified timestamp**

You can access all logs since a specified timestamp with the following parameters **req_type=all&min=2010-04-28_09:49:17.831:**

```
http://localhost:8065/log/?req_type=all&min=2010-04-28_09:49:17.831
```

You can use a short date instead of a min timestamp.


**All logs until a specified timestamp**

You can access all logs until a specified timestamp with the following parameters  **req_type=all&min=2010-04-28_09:49:17.831**:

```
http://localhost:8065/log/?req_type=all&max=2010-04-28_09:49:17.831
```

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






