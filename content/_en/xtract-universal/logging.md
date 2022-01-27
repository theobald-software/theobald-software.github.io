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
The log files are stored in the installation directory `C:\Program Files\XtractUniversal\logs`.

The following log files are created:

|Type | Name | Description | Location path |
|:------ | :------ |:--- | :--- |
|Server| ServiceLog.txt | Contains the activities of XtractService.exe.| `C:ProgramFiles\XtractUniversal\logs` |
|Server| WebServer-Log: yyyyMMddTHHmmss.fffZ.log, e.g., 20201013T055455.465Z.log  | The name contains the timestamp in UTC. A new file is created when the server is started, additionally a new log file is created every 24 hours. Theobald.Xu.Web.Listener.exe is the corresponding process.| `C:ProgramFiles\XtractUniversal\logs\servers\web\listener` |
|Server| WebWorker-Logs: yyyyMMddTHHmmss.fffZ.log, e.g., 20201013T055455.465Z.log  | The name contains the timestamp in UTC. A new file is created when a TCP connection is accepted.Theobald.Xu.Web.Worker.exe is the corresponding process.| `C:ProgramFiles\XtractUniversal\logs\servers\web\worker` |  
|Extraction| Extraction logs: yyyyMMddTHHmmss.fffZ.log, e.g., 20201013T055455.465Z.log | The name contains the timestamp in UTC. A new file is created to start an extraction. Theobald.Xu.Web.Worker.exe is the corresponding process.| `C:\Program Files\XtractUniversal\logs\extractions\[Name_der_Extaktion]`|

For more information on the server processes, see [Server](./server).

### Log Levels
Each log entry is assigned to one of the following log levels:

- **Errors** - error messages issued during the extraction process.
- **Information** - Status messages, about processes that do not lead to an error.
- **Warnings** - Information about problems that do not lead to an extraction error. For example authentication errors.
- **Debug Details** - detailed information that help find the reason for errors.

### Reading Logs - Extraction Log

![View-Extraction-Log](/img/content/View-Extraction-Log.png){:class="img-responsive"} 
Select the checkboxes to display only certain log levels.

Read the logs written in understandable language to better understand the procedures of Xtract Universal. 
Ihe following example log belongs to an extraction that writes data into an sql destination:

 ![XU_logging_1](/img/content/xu/logging-extract-detail-01.png){:class="img-responsive"}

1. General technical information is displayed.
2. The [SQL destination](./destinations/microsoft-sql-server) is prepared for receiving data.
3. The license check is performed including entity check and other relevant information.
4. Connection to SAP is established.
5. [Runtime parameters](./getting-started/run-an-extraction#to-set-the-extraction-parameters) are logged.
6. Data from SAP is requested.
7. Package no. 1 is received from SAP.
8. Package no. 1 is written to the SQL server.
9. Package no. 2 is received from SAP.
10. Package no. 2 is written to the SQL server.
11. Package no. 3 is received from SAP.
12. Package no. 3 is written to the SQL server.
13. Extraction is completed.


*****
The following sections contain more information about Xtract Universal logs:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
