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

1. In the main window of the component click **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon). The window “Table Lookup” opens.
2. Enter the name of aan SAP table or view in the field **Table Name** (1). Use wildcards (*) if needed.<br>
![Look-Up-Report](/img/content/table/table_look-up.png){:class="img-responsive"}
3. Click **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon) (2) and select the table of your choice from the displayed list (3).
4. Click **[OK]** (4) to confirm.

All relevant metadata information of the table are displayed in the subsection Fields.

Bild

### 

1. Select the columns you want to extract.
2. Optional: If you want to extract the whole table when first running the extraction, activate **[Extract table on first run**.
**Tipp:** To extract the original table, you can also use the [Table component](../table).
3. Click **[Load Preview]** to load 100 records for the preview.<br>
The column IUUC_OPERAT_FLAG indicates if a row was inserted (I), updated (U) or deleted (D).
4. Optional: 
5. Click **[OK]** to confirm your settings.

{: .box-note }
**Note:** Before deleting an extraction, click **[Delete CDC resources]** to delete the log table and all associated triggers from your SAP system.

### Testrun the Extraction

1. In the main window of the Designer, click **[Run]**. The window "Run Extraction" opens.
2. In the runtime parameters section, select the destination where you want to write data to.
3. Click **[Run]**.
4. If the extraction was successfull, the status in the *General Info* section of the window changes to "finished successfully".<br>
If an error occured, you can find the source of the error in the *Log* section of the window.

{: .box-tip }
**Tip:** If you set the extraction to extract the whole table on your first run, follow steps 1 to 4, then change data in SAP and repeat the steps to check the delta extraction.

{: .box-note }
**Note:** The Table CDC component adds the column IUUC_OPERAT_FLAG to the extracted table or view. IUUC_OPERAT_FLAG indicates if a row was inserted (I), updated (U) or deleted (D).

