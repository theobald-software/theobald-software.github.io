The following section shows how to use the Table CDC component.

{: .box-note }
**Note:** The Table CDC component is still in **Preview** mode.

### Look Up a Table

Look up the SAP table you want to track.

1. In the main window of the component click **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon). The window “Table Lookup” opens.<br>
![Table-CDC](/img/content/tablecdc/table-cdc.png){:class="img-responsive"}
2. In the field **Table Name** (1) enter the name of the SAP table you want to track. Use wildcards (*) if needed.<br>
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
3. Optional: Activate the option **Limit log table size** to set a maximum number of rows that can be tracked. 
If the row limit is reached, the extraction fails with an exception.
Note that once a log table is initialized, you cannot change the size limit anymore.
4. Click **[Load Preview]** to load 1000 records for the preview.<br>
The column IUUC_OPERAT_FLAG indicates if a row was inserted (I), updated (U) or deleted (D).
5. Click **[OK]** to confirm your settings.
6. Run the extraction to create a log table in SAP that records any changes made to a selected table, see [Run the Extraction for the First Time](#run-the-extraction-for-the-first-time). <br>

{: .box-note }
**Note:** Before deleting an extraction, click **[Delete CDC resources]** in the Table CDC component to delete the log table and all associated triggers from your SAP system.

<!---

#### Append Data to an Existing File
To append the extracted data to an existing file...
Only destinations with the "Existing File" subsection???

Note that data that was deleted is not removed from the existing table. 

-->

