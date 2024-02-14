---
ref: xu-logging-02
layout: page
title: Access Logs
description: Log Access
product: xtract-universal
parent: logging
permalink: /:collection/:path
weight: 2
lang: en_GB
progressstate: 5
---


Server and extraction logs can be accessed in the Designer and via [web API](../web-api).<br>
Both the server and extraction logs are automatically deleted after a defined period of time. 
The period can be defined in the [server settings](../server/server-settings).

### Server Logs (Web Worker)

The server Logs (Web Worker) can be displayed in the Designer via the main menu **[Server]>[Log (Web Worker)]**.

![View-Server-Log](/img/content/View-Server-Log.png){:class="img-responsive"}

The logs are created per TCP connection. 
To switch between logs, use the list of timestamps on the left:
 
Server logs are automatically deleted after a defined period of time, see [server settings](../server/server-settings).<br>
For information on how to query server logs using the web API, see [Web API - Get Server Logs](../web-api#get-server-logs).

### Extraction Logs

The extraction logs can be displayed in the Designer by clicking the **[Log]** button. 
Select an extraction to display the corresponding logs. 

1. The timestamp for each extraction process is displayed in the left part of the "View Extraction Log" window.
To filter the execution date of the logs, enter a time period in (1).
2. Mark the checkboxes underneath the log display to filter log levels.
3. Click the **[Copy To Clipboard]** icon (3) to copy the current log to the clipboard. <bR>
![View-Extraction-Log](/img/content/View-Extraction-Log.png){:class="img-responsive"} 

Extraction logs are automatically deleted after a defined period of time, see [server settings](../server/server-settings).<br>
For information on how to query server logs using the web API, see [Web API - Get Extraction Logs](../web-api#get-extraction-logs).


****
#### Related Links
- [Logged Server Processes](../server)
- [Web API - Get Server Logs](../web-api#get-server-logs)
- [Web API - Get Extraction Logs](../web-api#get-extraction-logs)