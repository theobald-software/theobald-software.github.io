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

The server Logs (Web Worker) can be displayed in the Designer via the main menu **[Server]>[Logs (Web Worker)]**.

![View-Server-Log](/img/content/View-Server-Log.png){:class="img-responsive"}
 
The logs are created per TCP connection. To switch between the logs, you can use the list on the left. 

### Extraction Logs

The extraction logs can be displayed in the Designer by clicking the **[Log]** button. Select an extraction to display the corresponding logs. 

![View-Extraction-Log](/img/content/View-Extraction-Log.png){:class="img-responsive"} 
Select the check boxes in the upper left corner to decide which log levels to display.
The timestamp for each extraction process is displayed in the left part of the "View Extraction Log" dialog.


### Copying Logs
Click **[Copy To Clipboard]**, to copy the current log to the clipboard. The copied log can be inserted to any application (e.g., into an e-mail).

Both the server and extraction logs are automatically deleted after a defined period of time. The period can be set in the server settings.


****
#### Related Links
- [Logged Server Processes](../server)
