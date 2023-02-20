---
ref: xu-logging-03
layout: page
title: Log Access via Web Service
description: Log access via HTTP / HTTPS
product: xtract-universal
parent: logging
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=logging-access-via-http
progressstate: 3
---

The Xtract Universal server allows accessing meta data and logging information through web calls. 

### About

The basic URL for web calls uses the following format: `[protocol]://[host or IP address]:[port]/`.<br>
Make sure to use the correct protocol:

| Protocol | Syntax       | Example                                                                  |
|-------|------------------|--------------------------------------------------------------------|
| HTTP   | `http://[host].[domain]:[port]`         | `http://todd.theobald.local:8065`  |
| HTTP | `http://[host]:[port]` | `http://localhost:8065` |
| HTTPS  | `https://[host].[domain]:[port]` | `https://todd.theobald.local:8165`<br> Requires a dedicated host name and X.509 certificate, see [web server settings](../server/server-settings#web-server). |

The following web calls are available for log scenarios:

| URL       | Description  | 
|-----------|--------------|
| ```[protocol]://[host]:[port]```  |   Returns a list of all defined extractions, see [Query all Defined Extractions](#query-all-defined-extractions).|
| ```[protocol]://[host]:[port]/config/extractions/```  |   Returns a list of all defined extractions in JSON format, see [Query all Defined Extractions](#query-all-defined-extractions). |
| ```[protocol]://[host]:[port]/destinations```  |   Returns a list of all defined destinations, see [Query all Defined Destinations](#query-all-defined-destinations). |
| ```[protocol]://[host]:[port]/log/?req_type=all```  |   Returns a list of all logs, see [Query all Server & Extraction Logs](#query-all-server--extraction-logs). |
| ```[protocol]://[host]:[port]/log/?req_type=server```  |   Returns a list of timestamps that correspond to server logs, see [Query all Server & Extraction Logs](#query-all-server--extraction-logs). |
| ```[protocol]://[host]:[port]/log/?req_type=server&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the server logs of the specified timestamp. |
| ```[protocol]://[host]:[port]/log/?req_type=all&past_days=[number_of_days]```  |   Returns all logs since n days. |
| ```[protocol]://[host]:[port]/log/?req_type=all&min=[yyyy-MM-dd]```  |   Returns all logs since the specified date. |
| ```[protocol]://[host]:[port]/log/?req_type=all&min=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns all logs since the specified timestamp. |
| ```[protocol]://[host]:[port]/log/?req_type=all&max=[yyyy-MM-dd]```  |   Returns all logs until the specified date. |
| ```[protocol]://[host]:[port]/log/?req_type=all&max=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns all logs until the specified timestamp. |
| ```[protocol]://[host]:[port]/log/?req_type=all&min=[yyyy-MM-dd]&max=[yyyy-MM-dd]```  |   Returns a list of all logs between two timestamps. |
| ```[protocol]://[host]:[port]/log/?req_type=extraction&name=[extraction_name]```  |   Returns the logs of the specified extraction. |
| ```[protocol]://[host]:[port]/log/?req_type=extraction&name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the logs of the specified extraction at the specified timestamp. |
| ```[protocol]://[host]:[port]/ResultName?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]``` | Returns the name of the result file for a specific timestamp. |
| ```[protocol]://[host]:[port]/status/?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]``` | Returns the status of the specified extraction at the specified timestamp. |

For more web calls, see [Execute and Automate - Call via Webservice](../execute-and-automate-extractions/call-via-webservice).

{: .box-note }
**Note:** Server logs files are deleted after a defined period of days, see [Server Setting - Web Server](../server/server-settings#web-server).

### Query all Defined Extractions
- `https://todd.theobald.local:8165/`
- `https://todd.theobald.local:8165/extractions`
- `https://todd.theobald.local:8165/config/extractions`

![XU Server connection](/img/content/xu/http_log_definierter_extraktionen.png){:class="img-responsive"}

The log contains the following columns:<br>
- **Name**: contains the name of the extraction.
- **Type**: contains the extraction type.
- **Source**: contains the name of the source connection.
- **Destination**: contains the name of the destination.
- **LastRun**: contains the timestamp of the last execution. 
- **RowCount**: contains the number of last extracted data records. 
- **LastChange**: contains the timestamp of the last change. 
- **Created**: contains the timestamp of the creation.


### Query all Defined Destinations
- `https://todd.theobald.local:8165/destinations`
![XU Server connection](/img/content/xu/http_log_destinations.png){:class="img-responsive"}

The log contains the following columns:
- **Name**: contains the name of the destination.
- **Type**: contains the connection type.
- **Host**: contains the host name, if applicable.
- **Port**: contains the port name, if applicable.
- **Database**: contains the database name, if applicable. 
- **User**: contains the user name in the connection, if applicable.
- **Schema**: contains the schema name, if applicable.
- **Directory**: contains the directory name, if applicable.

### Query all Server & Extraction Logs
- `https://todd.theobald.local:8165/log/?req_type=all`
![XU Server connection](/img/content/xu/http_log_all_logs.png){:class="img-responsive"}

The log contains the following columns:

- **LineCount**: contains the row number.
- **Name**:  contains the name of the extraction or the [server] name in case of a server log. .
- **Timestamp**: contains the timestamp.
- **State** (see below): contains a number between 2 and 4 for a server extraction or the number 5 for a server log.
- **StateDescr** (see below): contains the state description.
- **LogLevel**: returns the value of the type "Error", "Info" "Warning" or "Debug" and describes the kind of the log line.
- **Source** contains the technical name of the component that generates the log info. 
- **Message**: contains the log content.

| State | StateDescr       | Meaning                                                                    |
|-------|------------------|------------------------------------------------------------------------------|
| 2     | Running          | The extraction is running.                                                 |
| 3     | FinishedNoErrors | Extraction succeeded without errors.                                     |
| 4     | FinishedErrors   | Extraction is finished with at least one error. |
| 5     | NotAvailable     | The status for a server log.                                              |


### Query all Server Logs
- `https://todd.theobald.local:8165/log/?req_type=server`
![XU Server connection](/img/content/xu/http_log__req_type=server.png){:class="img-responsive"}

### Query a Specific Extraction
- `https://todd.theobald.local:8165/log/?req_type=extraction&name=cskt`
![XU Server connection](/img/content/xu/http_log_extraction_name.png){:class="img-responsive"}

### Query a Specific Extraction at a Specific Timestamp
- `https://todd.theobald.local:8165/log/?req_type=extraction&name=cskt&timestamp=2020-06-10_14:42:32.136`
![XU Server connection](/img/content/xu/http_log_extraction_name_timestamp.png){:class="img-responsive"}

### Query a Server Log at a Specific Timestamp
- `https://todd.theobald.local:8165/log/?req_type=server&timestamp=2020-06-05_07:49:24.150`
![XU Server connection](/img/content/xu/http_log_bestimmter_timestamp.png){:class="img-responsive"}

### Query all Logs between two Timestamps
- `https://todd.theobald.local:8165/log/?req_type=all&min=2020-06-05_13:36:12.219&max=2020-06-10_14:42:32.136`
![XU Server connection](/img/content/xu/http_log_min_max_timestamp.png){:class="img-responsive"}

### Query the Extraction Status
An extraction can be triggered through the extraction's URL. For example, the following URL triggers an extraction named *Plants*:
```
http://localhost:8065/?name=Plants
```
An asynchronous call immediately returns an http-response, while the extraction is still running. 


1. Use the parameter `&wait=false` to run your extraction in asynchronous mode:<br>
`[protocol]://[host]:[port]/?name=[extraction_name]&wait=false`<br>
2. Copy the timestamp of the extraction that is returned in the HTTP-response header and body. Example: *X-XU-Timestamp: 2023-01-28_09:58:47.312*.
3. Use the extraction name and the timestamp to query the status:<br>
`[protocol]://[host]:[port]/status/?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]`<br>
One of the following statuses is returned in the HTTP body: ```Running```, ```FinishedNoErrors``` or ```FinishedErrors```.
4. The status of an extraction changes in time. Loop...
By regularly polling the status, follow-up actions can be taken once the extraction is finished.

{: .box-note }
**Note:** Triggering an extraction in asynchronous mode and polling the extraction status is only used with push-destinations (e.g. database or file destinations). 

*****
#### Related Links
- [Web Server Settings](../server/server-settings#web-server)




