---
ref: xu-tablecdc-07
layout: page
title: Active CDC Watches
description: Active CDC Watches
product: xtract-universal
parent: table-cdc
permalink: /:collection/:path
weight: 8
lang: en_GB
---

This page shows how to keep track of Table CDC log tables and triggers in your SAP system.<br>
The "Active CDC Watches" menu lists all active log tables and their DB triggers in the SAP source system.

### Open the Active CDC Watches

1. In the main window of the Designer, double-click an extraction.<br>
The main window of the component opens.<br>
![Extraction-Settings](/img/content/tablecdc/Active-CDC-Watches_designer.png){:class="img-responsive"}
2. Click **[Show Active CDC Watches]**.
The window "Active CDC Watches" opens.<br>
![Extraction-Settings](/img/content/tablecdc/Active-CDC-Watches_designer.png){:class="img-responsive"}

### 

**Source Table**
Name of the source table.

**Log Table**
Name of the log table.

**Created on**
Timestamp when the log table was created.

**Created by**
SAP username that was used to create the initial log table.

**Rows**<br>
Number of rows in the log table. <!--- After successfully running an extraction, the associated log table is cleared and the number of rows should be 0. -->

**Show Details**<br>
Click ![info](/img/content/icons/designer/info.png){:class="img-responsive" style="display:inline"} to display more information about the log table and its associated triggers in the "CDC watch details" window.

**Delete CDC resources**<br>
Click ![dustbin](/img/content/icons/trashbin.png){:class="img-responsive" style="display:inline"} to delete the log table and all associated triggers from your SAP system.
It is not possible to delete the log table and the triggers of the current extraction, see [Defining a Table CDC Extraction: Delete Log Table and DB Triggers](./extract-table-cdc#delete-log-table-and-db-triggers).