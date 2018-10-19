---
ref: bc-logging-02
layout: page
title: Server Logging
description: Server Logging
product: board-connector
parent: logging
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=server-logging
---

BOARD logs all steps performed on a system to log files. This happens on two levels: The server log contains logs that affect the server, such as starting and stopping the server and the execution of a single extraction. In addition, there are extraction logs, which contain detailed information on each extraction process.

To view the server log, please click in the main menu on *Server -> Log*. As the screenshot shows a log will be generated per day. To switch between protocols you can use the list on the left. 

![Connection-Manager-Logging-02](/img/content/Connection-Manager-Logging-02.png){:class="img-responsive"}

Each log entry is assigned a log level. The following log levels exist:

**Errors –** are errors.

**Information –** about activities, that have not resulted in an error.

**Debug Details –** are detail information that are not usually needed.

You can select the checkboxes on the top left to decide, which log levels should be showed. Using the *Copy To Clipboard* button, the current log output is copied to the clipboard and can be pasted when needed in an email.