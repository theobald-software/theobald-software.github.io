---
ref: xfa-tablecdc-01
layout: page
title: Defining a Table CDC Extraction
description: Extract Table Data
product: xtract-for-alteryx
parent: table-cdc
permalink: /:collection/:path
weight: 2
lang: en_GB
---

{% include _content/en/tablecdc/extract-table-cdc.md%}


### Run the Extraction for the First Time

Run the extraction for the first time to create a log table in SAP that records any changes made to a selected table or view.

1. Optional: Add a tool to the workflow that processes or writes the table to...
2. Run the workflow.<br>
If the extraction is successful, ...
If an error occurred, you can find information on the error in the *Log* section of the window.

The log table in SAP is now available for the Table CDC component.


{: .box-note }
**Note:** When running the extraction regularly the content of the log table in SAP is extracted and written to the destination.
The content of the log table in SAP is cleared after every successful run of the extraction. Data that was not extracted is not cleared.

