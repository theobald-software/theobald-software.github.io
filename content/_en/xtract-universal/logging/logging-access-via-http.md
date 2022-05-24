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

### Using the Correct URL
The XU Server allows accessing the different meta data and logging information through web service (HTTP / HTTPS). Make sure to use the correct URL. 
The correct URL can be found in your Xtract Universal [web server settings](../server/server-settings#web-server).

{: .box-note }
**Note:** Make sure to select the correct standard ports of the different components [(configuration server, web server)](../server/ports). 


The basic URL syntax consists of the following parts: `http://[XU server name].[domain]:[port]`

| Type | Syntax       | Example                                                                  |
|-------|------------------|--------------------------------------------------------------------|
| HTTP   | `http://[host].[domain]:[port]`         | `http://todd.theobald.local:8065`  |
| HTTP | `http://[host]:[port]` | `http://localhost:8065` |
| HTTPS  | `https://[host].[domain]:[port]` | `https://todd.theobald.local:8165`<br> functions only with a dedicated host name and X.509 certificate |


In the succeeding examples the following URL `https://todd.theobald.local:8165/` is used.

### HTTP Log Parameter

|Parameter | Description | Example |
|------------ | -------------|-----|
 | Destinations | List of all Defined Destinations | `http://todd.theobald.local:8065/destinations` |
 | Extractions | List of all Defined Extractions | `https://todd.theobald.local:8165/extractions` |
 | config/extractions | List of all Defined Extractions with more details | `https://todd.theobald.local:8165/config/extractions` |
 | req_type=server | List of all server logs according to [web server settings > Misc.](../server/server-settings#web-server) | `https://todd.theobald.local:8165/log/?req_type=server` |
 | req_type=server&timestamp=[Timestamp] | Server Log at a Specific Timestamp | `https://todd.theobald.local:8165/log/?req_type=server&timestamp=2020-06-05_07:49:24.150` |
 | req_type=all| List of all server & extraction logs | `https://todd.theobald.local:8165/log/?req_type=all` 
 | req_type=extraction&name=[Extraction Name] | List of all logs of a specific extraction | `https://todd.theobald.local:8165/log/?req_type=extraction&name=cskt` |
 | req_type=extraction&name=[Extraction Name]&timestamp=[Timestamp] | Log of a specific extraction with a specific timestamp | `https://todd.theobald.local:8165/log/?req_type=extraction&name=cskt&timestamp=2020-06-10_14:42:32.136` |
 | req_type=all&min=[timestamp] | List of all logs starting from a specific timestamp | `https://todd.theobald.local:8165/log/?req_type=all&min=2020-06-05_13:36:12.219` |
 | req_type=all&min=[timestamp]&max=[timestamp] | List of all logs between two timestamps. | `https://todd.theobald.local:8165/log/?req_type=all&min=2020-06-05_13:36:12.219&max=2020-06-10_14:42:32.136` |

### Examples of the HTTP Requests

#### Web Service request of all defined extractions
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


#### Web Service request of all defined destinations
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

#### Web Service Request of all Server & Extraction Logs
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


#### Web Service Request of all Server Logs
- `https://todd.theobald.local:8165/log/?req_type=server`
![XU Server connection](/img/content/xu/http_log__req_type=server.png){:class="img-responsive"}

#### Web Service Request of a Specific Extraction
- `https://todd.theobald.local:8165/log/?req_type=extraction&name=cskt`
![XU Server connection](/img/content/xu/http_log_extraction_name.png){:class="img-responsive"}

#### Web Service Request of a Specific Extraction at a Specific Timestamp
- `https://todd.theobald.local:8165/log/?req_type=extraction&name=cskt&timestamp=2020-06-10_14:42:32.136`
![XU Server connection](/img/content/xu/http_log_extraction_name_timestamp.png){:class="img-responsive"}

#### Web Service Request of a Server Log at a Specific Timestamp
- `https://todd.theobald.local:8165/log/?req_type=server&timestamp=2020-06-05_07:49:24.150`
![XU Server connection](/img/content/xu/http_log_bestimmter_timestamp.png){:class="img-responsive"}

#### Web Service Request of all Logs between two Timestamps
- `https://todd.theobald.local:8165/log/?req_type=all&min=2020-06-05_13:36:12.219&max=2020-06-10_14:42:32.136`
![XU Server connection](/img/content/xu/http_log_min_max_timestamp.png){:class="img-responsive"}

### Querying the extraction status
An extraction can be triggered through the extraction's URL. For example, the following URL triggers an extraction named *Plants*:
```
http://localhost:8065/?name=Plants
```
When adding the URL parameter ```&wait=false``` to the URL, the extraction is called in asynchronous mode. For example:
```
http://localhost:8065/?name=Plants&wait=false
```
 An asynchronous call immediately returns an http-response, while the extraction is still running. As part of the http-response header and body, the timestamp of the extraction is returned. For example:
 ```
 X-XU-Timestamp: 2020-05-28_09:58:47.312
 ```

The status of the extraction can be queried using the extraction's name and the returned timestamp. For example:

```
http://localhost:8065/status/?name=Plants&timestamp=2020-05-28_09:58:47.312
```

This call returns one of the following statuses in the http body: ```Running```, ```FinishedNoErrors``` or ```FinishedErrors```.
The status of an extraction changes in time. By regularly polling the status, follow-up actions can be taken once the extraction is finished.

{: .box-note }
**Note:** Triggering an extraction in asynchronous mode and polling the extraction status is only used with push-destinations (e.g. database or file destinations). 

*****
#### Related Links
- [Web Server Settings](../server/server-settings#web-server)




