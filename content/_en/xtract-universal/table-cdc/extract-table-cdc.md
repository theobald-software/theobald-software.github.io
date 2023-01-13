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
The following section shows how to use the Table CDC component.

### Look Up a Table

Look up the SAP table or view you want to track.

1. In the main window of the component click **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon). The window “Table Lookup” opens.<br>
![Table-CDC](/img/content/tablecdc/table-cdc.png){:class="img-responsive"}
2. In the field **Table Name** (1) enter the name of the SAP table or view you want to track. Use wildcards (*) if needed.<br>
![Look-Up-Report](/img/content/table/table_look-up.png){:class="img-responsive"}
3. Click **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon) (2).
4. Select the desired table (3) and click **[OK]** (4).

All relevant metadata information of the table is retrieved from SAP.
The application returns to the main window of the component.

### Set Up a Table CDC Extraction

Set up the Table CDC component to extract data.

1. Select the columns you want to extract.<br> 
![Table-CDC-Setup](/img/content/tablecdc/table-cdc-kna1.png){:class="img-responsive"}
2. Optional: If you don't want to extract the whole table when first running the extraction, deactivate **[Extract table on first run]**.
3. Click **[Load Preview]** to load 1000 records for the preview.<br>
The column IUUC_OPERAT_FLAG indicates if a row was inserted (I), updated (U) or deleted (D).
4. Click **[OK]** to confirm your settings.
5. Run the extraction to create a log table in SAP that records any changes made to a selected table or view, see [Run the Extraction for the First Time](#run-the-extraction-for-the-first-time). <br>

{: .box-note }
**Note:** Before deleting an extraction, click **[Delete CDC resources]** in the Table CDC component to delete the log table and all associated triggers from your SAP system.

<!---

#### Append Data to an Existing File
To append the extracted data to an existing file...
Only destinations with the "Existing File" subsection???

Note that data that was deleted is not removed from the existing table. 

-->

### Run the Extraction for the First Time

Run the extraction for the first time to create a log table in SAP that records any changes made to a selected table or view.

1. In the main window of the Designer select the extraction. 
2. Optional: click **[Destination]** to assign the destination where you want to write data to (1).<br> 
![Table-CDC-Extraction](/img/content/tablecdc/table-cdc-extraction.png){:class="img-responsive"}
3. Click **[Run]** (2). The window "Run Extraction" opens.
4. Click **[Run]** (3) to run the extraction.<br>
![Table-CDC-Run](/img/content/tablecdc/table-cdc-run.png){:class="img-responsive"}
5. If the extraction is successfull, the status in the *General Info* section of the window changes to "finished successfully".<br>
If an error occured, you can find information on the error in the *Log* section of the window.

The log table in SAP is now available for the Table CDC component.
The extracted SAP table is now available in your destination.
<!---
Depending on whether the option **[Extract table on first run]** in the Table CDC component was activate or not, the table contains either the original SAP table or is empty.
-->

{: .box-note }
**Note:** When running the extraction regularly the content of the log table in SAP is extracted and written to the destination.
The content of the log table in SAP is cleared after every successful run of the extraction. Data that was not extracted is not cleared.



<!---
{: .box-tip }
**Tip:** If you set the extraction to extract the whole table on your first run, follow steps 1 to 4, then change data in SAP and repeat the steps to check the delta extraction. 
-->

