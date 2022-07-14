---
ref: bc-logging-03
layout: page
title: Log Access via Designer
description: Log Access via Designer
product: board-connector
parent: logging
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Board-Connector-EN/default.aspx?pageid=extraction-logging
---

### Logs in Designer
Server (run) and extraction logs can be displayed in Designer.

Both the server and extraction logs are automatically deleted after a defined period of time. The period can be defined in the [server settings](../server/server-settings).

### Server Logs (Run)

The server logs (run) can be displayed in the Designer via the main menu **[Server]>[Logs (Run)]**.

![View-Server-Log](/img/content/View-Server-Log.png){:class="img-responsive"}
 
The logs are created per TCP connection. To switch between the logs, you can use the list on the left. 

### Extraction Logs

The extraction logs can be displayed in the Designer by clicking the **[Log]** button. 
Select an extraction to display the corresponding logs. 

1. The timestamp for each extraction process is displayed in the left part of the "View Extraction Log" window.
To filter the execution date of the logs, enter a time period in (1).
2. Mark the checkboxes underneath the log display to filter log levels.
3. Click the **[Copy To Clipboard]** icon (3) to copy the current log to the clipboard. 

![View-Extraction-Log](/img/content/View-Extraction-Log.png){:class="img-responsive"} 

Both the server and extraction logs are automatically deleted after a defined period of time. 
That time period is set in the [server settings](../server/server-settings).

### Copying Logs
Click**[Copy To Clipboard]**, to copy the current log to the clipboard. The copied log can be inserted to any application (e.g., into an e-mail).

Both the server and extraction logs are automatically deleted after a defined period of time. The period can be set in the server settings.




