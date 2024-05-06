---
ref: bc-tablecdc-01
layout: page
title: Defining a Table CDC Extraction
description: Extract Table Data
product: board-connector
parent: table-cdc
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=define-a-table-extraction
---

{% include _content/en/tablecdc/extract-table-cdc.md%}

### Run the Extraction for the First Time

Run the extraction for the first time to create a log table in SAP that records any changes made to a selected table or view.

1. In the main window of the Designer select the extraction. 
2. Click **[Run]**. The window "Run Extraction" opens.
4. Click **[Run in Browser]** to run the extraction.<br>

The log table in SAP is now available for the Table CDC component.
The extracted SAP table is now available in your destination.
<!---
Depending on whether the option **[Extract table on first run]** in the Table CDC component was activate or not, the table contains either the original SAP table or is empty.
-->

{: .box-note }
**Note:** When running the extraction regularly the content of the log table in SAP is extracted and written to the destination.
The content of the log table in SAP is cleared after every successful run of the extraction. Data that was not extracted is not cleared.

{% include _content/en/tablecdc/delete-table-cdc.md%}
