---
ref: xu-tablecdc-01
layout: page
title: Eine Table CDC Extraktion definieren
description: Tabellen extrahieren
product: xtract-universal
parent: table-cdc
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=eine-table-extraktion-definieren
---
Der folgende Abschnitt beschreibt die Anwendung der Table Komponente. 

### Eine Tabelle Finden

Look up the SAP table or view you want to track.

1. Innerhalb des Hauptfensters der Komponente, klicken Sie auf  **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon). Das Fenster “Table Lookup” öffnet sich.
2. Geben Sie in das Feld **Table name** (1) den Namen der zu extrahierenden SAP Tabelle oder Ansicht ein. Verwenden Sie Wildcards (*), falls nötig.<br>
![Look-Up-Report](/img/content/table/table_look-up.png){:class="img-responsive"}
3. Klicken Sie auf **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon) (2). Die Suchergebnisse werden im Vorschaufenster angezeigt.
4. Wählen Sie die gewünschte Tabelle (3) aus und klicken Sie auf **[OK]** (4).


### CDC Einrichten

1. Select the columns you want to extract.<br> Bild
2. Optional: If you want to extract the whole table when first running the extraction, activate **[Extract table on first run]**. <br>
**Tipp:** You can also use the [Table component](../table) to extract the original table.
3. Click **[Load Preview]** to load 100 records for the preview.<br>
The column IUUC_OPERAT_FLAG indicates if a row was inserted (I), updated (U) or deleted (D).
4. Click **[OK]** to confirm your settings.

{: .box-note }
**Note:** Before deleting an extraction, click **[Delete CDC resources]** to delete the log table and all associated triggers from your SAP system.

#### Append Data to an Existing File
To append the extracted data to an existing file...
Only destinations with the "Existing File" subsection???

What happens if an extraction failed? Is the delta information lost?

### Testrun the Extraction

1. In the main window of the Designer, click **[Run]**. The window "Run Extraction" opens.<br> Bild
2. In the runtime parameters section, select the destination where you want to write data to.
3. Click **[Run]**.
4. If the extraction was successfull, the status in the *General Info* section of the window changes to "finished successfully".<br>
If an error occured, you can find information on the error in the *Log* section of the window.

{: .box-tip }
**Tip:** If you set the extraction to extract the whole table on your first run, follow steps 1 to 4, then change data in SAP and repeat the steps to check the delta extraction.

