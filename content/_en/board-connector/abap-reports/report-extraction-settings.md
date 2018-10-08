---
layout: page
title: Extraction Settings
description: Extraction Settings
product: board-connector
parent: abap-reports
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=abap-settings
---

Click the *Extraction Settings* link to open the Extraction Settings dialog.

![Report-Extraction-Settings](/img/content/Report-Extraction-Settings.jpg){:class="img-responsive"}


**Use Batch**<br>
The report is executed in batch mode (choose this option for reports that have ALV output).

**Batch Timeout**<br>
Defines the time period (in seconds) how long the report may run in the background until the task aborts.

**Batch Job Name**<br>
Defines the name of the background job in the SAP system.

**Spool Destination**<br>
Defines the name of the spool destination (printer).

**Custom Function**<br>
Defines the name of the function module, if it does not have the default name (Z_XTRACT_IS_REMOTE_REPORT).

**Automatic Column Detection**<br>
Activates the automatic mechanism. In this case, the component tries to detect the columns of the report automatically. The manual setting of the columns is not necessary.

**Pattern for header detection**<br>
Defines a search pattern (e.g. *header*) to detect the table header. If automatic column detection is enabled.

**Pattern for skipping rows**<br>
Defines a regular expression as a search pattern to skip rows from the result.  <br>
This setting allows e.g. skipping header rows that will be repeated in some reports. <br>
To skip rows that contains the term DESCTEXT or LONGTEXT, set the value DESCTEXT | LONGTEXT. <br>
For further information about regular expressions please refer to the [Microsoft Online Help](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference).