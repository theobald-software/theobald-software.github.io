---
layout: page
title: Log access via HTTP
description: Log access via HTTP
product: xtract-universal
parent: logging
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=logging-access-via-http
---

The server offers access to the server log information via HTTP. In the following samples we use the URL [http://localhost:8085/log/?]() for the server log.

**Serverlog**

The server creates a separate log for each day with the corresponding timestamp. You can access the list of the server logs with the following parameter **req_type=server**:<br>

<center>http://localhost:8085/log/?req_type=server</center>

**Server log of a specified timestamp**

You can access the server log of a specified timestamp (e.g. 2010-04-28_00:00:00.000) with the following parameters **req_type=server &
timestamp=2010-04-28_00:00:00.000** :

```
http://localhost:8085/log/?req_type=server&timestamp=2010-04-28_00:00:00.000
```

You can use the shortdate format instead of the timestamp format:

```
http://localhost:8085/log/?req_type=server&timestamp=2010-04-28
```

**Log of a specified extraction**

You can access the log of a specified extraction (e.g. vardemo)  with the following  parameters: **req_type=extraction&name=vardemo** 

<center>http://localhost:8085/log/?req_type=extraction&name=vardemo</center>

**Log of a specified extraction at a specified timespamp**

You can access the server log of a specified timestamp (e.g. 2010-04-28_00:00:00.000) with the following parameters **req_type=extraction&name=vardemo & 
timestamp=2010-04-27_10:24:47.674 :**

```
http://localhost:8085/log/?req_type=extraction&name=vardemo&timestamp=2010-04-27_10:24:47.674
```

**All logs**

You can access the list of all logs with the following parameter **req_type=all**:

<center>http://localhost:8085/log/?req_type=all</center> 


**All logs since n days**

You can access all logs since n days with the following parameters **req_type=all&past_days=n**:

<center>http://localhost:8085/log/?req_type=all&past_days=1</center>


**All logs since a specified timestamp**

You can access all logs since a specified timestamp with the following parameters **req_type=all&min=2010-04-28_09:49:17.831:**

<center>http://localhost:8085/log/?req_type=all&min=2010-04-28_09:49:17.831</center> 

You can use a short date instead of a min timestamp.


**All logs until a specified timestamp**

You can access all logs until a specified timestamp with the following parameters  **req_type=all&min=2010-04-28_09:49:17.831**:

<center>http://localhost:8085/log/?req_type=all&max=2010-04-28_09:49:17.831</center>

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




