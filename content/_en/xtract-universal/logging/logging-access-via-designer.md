---
ref: xu-logging-02
layout: page
title: Log Access via Designer
description: Log Access via Designer
product: xtract-universal
parent: logging
permalink: /:collection/:path
weight: 2
lang: en_GB
progressstate: 5
---


### Logs in Designer
Server and extraction logs can be displayed in Designer.

Both the server and extraction logs are automatically deleted after a defined period of time. The period can be defined in the [server settings](../server/server-settings).

### Server Logs (Web Worker)

The server Logs (Web Worker) can be displayed in the Designer via the main menu **[Server]>[Log (Web Worker)]**.

![View-Server-Log](/img/content/View-Server-Log.png){:class="img-responsive"}
 
The logs are created per TCP connection. To switch between logs, use the list on the left. 

### Extraction Logs

The extraction logs can be displayed in the Designer by clicking the **[Log]** button. 
Select an extraction to display the corresponding logs. 

1. The timestamp for each extraction process is displayed in the left part of the "View Extraction Log" window.
To filter the execution date of the logs, enter a time period in (1).
2. Select the checkboxes underneath the log display to display only certain log levels.
3. Click the **[Copy To Clipboard]** icon (3) to copy the current log to the clipboard. 

![View-Extraction-Log](/img/content/View-Extraction-Log.png){:class="img-responsive"} 

Both the server and extraction logs are automatically deleted after a defined period of time. 
That time period is set in the [server settings](../server/server-settings).

### Copying Logs
Click the **[Copy To Clipboard]** icon (3) to copy the current log to the clipboard. 
You can insert the copied log into a support requests.


****
#### Related Links
- [Logged Server Processes](../server)
