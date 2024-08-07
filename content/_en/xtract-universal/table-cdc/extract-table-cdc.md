---
ref: xu-tablecdc-01
layout: page
title: Defining a Table CDC Extraction
description: Extract Table Data
product: xtract-universal
parent: table-cdc
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=define-a-table-extraction
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract Universal.<br>
Make sure to use the documentation within the new [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

{% include _content/en/tablecdc/extract-table-cdc.md%}


### Run the Extraction for the First Time

Run the extraction for the first time to create a log table in SAP that records any changes made to a selected table or view.

1. In the main window of the Designer select the extraction. 
2. Optional: click **[Destination]** to assign the destination where you want to write data to (1).<br> 
![Table-CDC-Extraction](/img/content/tablecdc/table-cdc-extraction.png){:class="img-responsive"}
3. Click **[Run]** (2). The window "Run Extraction" opens.
4. Click **[Run]** (3) to run the extraction.<br>
![Table-CDC-Run](/img/content/tablecdc/table-cdc-run.png){:class="img-responsive"}
5. If the extraction is successful, the status in the *General Info* section of the window changes to "finished successfully".<br>
If an error occurred, you can find information on the error in the *Log* section of the window.

The log table in SAP is now available for the Table CDC component.
The extracted SAP table is now available in your destination.
<!---
Depending on whether the option **[Extract table on first run]** in the Table CDC component was activated or not, the table contains either the original SAP table or is empty.
-->

{: .box-note }
**Note:** When running the extraction regularly the content of the log table in SAP is extracted and written to the destination.
The content of the log table in SAP is cleared after every successful run of the extraction. Data that was not extracted is not cleared.

{% include _content/en/tablecdc/delete-table-cdc.md%}
