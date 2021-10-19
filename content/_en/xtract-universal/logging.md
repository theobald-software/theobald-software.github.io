---
ref: xtract-universal-08
layout: page
title: Logging
description: Logging
product: xtract-universal
parent: xtract-universal
childidentifier: logging
permalink: /:collection/:path
weight: 35
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=logging
progressstate: 5
---
Xtract Universal logs all steps performed on a system in log files. 
The log files are stored in the product directory <br>
e.g.,: `C:\Program Files\XtractUniversal\logs`

Different types of log files are created.


|Type | Name | Description | Location path |
|:------ | :------ |:--- | :--- |
|Server| ServiceLog.txt | Contains the activities of XtractService.exe.| `C:ProgramFiles\XtractUniversal\logs` |
|Server| ConfigServer-Log: yyyyMMddTHHmmss.fffZ.log, e.g., 20201013T055455.465Z.log | The name contains the timestamp in UTC. A new file is created when the server is started, additionally a new log file is created every 24 hours. XtractConfigServer.exe is the corresponding process.| `C:ProgramFiles\XtractUniversal\logs\server\config` |
|Server| WebServer-Log: yyyyMMddTHHmmss.fffZ.log, e.g., 20201013T055455.465Z.log  | The name contains the timestamp in UTC. A new file is created when the server is started, additionally a new log file is created every 24 hours. Theobald.Xu.Web.Listener.exe is the corresponding process.| `C:ProgramFiles\XtractUniversal\logs\server\web` |
|Server| Run-Logs: yyyyMMddTHHmmss.fffZ.log, e.g., 20201013T055455.465Z.log  | The name contains the timestamp in UTC. A new file is created when a TCP connection is accepted.Theobald.Xu.Web.Worker.exe is the corresponding process.| `C:ProgramFiles\XtractUniversal\logs\server\run` |  
|Extraction| Extraction logs: yyyyMMddTHHmmss.fffZ.log, e.g., 20201013T055455.465Z.log | The name contains the timestamp in UTC. A new file is created to start an extraction. Theobald.Xu.Web.Worker.exe is the corresponding process.| `C:\Program Files\XtractUniversal\logs\extractions\[Name_der_Extaktion]`|

### Log Levels
Each log entry is assigned to a so-called log level. There are the following log levels:

- **Errors** are error messages issued during the extraction process.
- **Information** - Status messages, about processes that do not lead to an error.
- **Warnings** - Information about problems that do not lead to an extraction error. For example authentication errors.
- **Debug Details** - detailed information that helps to find the reason for errors.

### Reading Logs - Extraction Log

![View-Extraction-Log](/img/content/View-Extraction-Log.png){:class="img-responsive"} 
Select the check boxes in the upper left corner to decide which log levels to display.

To better understand the procedures of Xtract Universal, you can read the logs written in understandable language. The following example of an extraction log explains the processes in detail.
1. General technical information is displayed.
 ![XU_logging_1](/img/content/xu/logging-extract-detail-01.png){:class="img-responsive"}
2. The [SQL destination]() is prepared for receiving data.
3. The license check is performed including entity and other relevant information.
4. Connection to SAP is being established.
5. [Run parameters](./getting-started/run-an-extraction#to-set-the-extraction-parameters) are logged.
6. Data from SAP is requested.
 ![XU_logging_2](/img/content/xu/logging-extract-detail-02.png){:class="img-responsive"}
7. Package no. 1 is received from SAP.
8. Package no. 1 is written to the SQL server.
9. Package no. 2 is received from SAP.
10. Package no. 2 is written to the SQL server
11. Package no. 3 is received from SAP.
 ![XU_logging_3](/img/content/xu/logging-extract-detail-03.png){:class="img-responsive"}
12. Package no. 3 is written to the SQL server.
13. Extraction is completed.


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
