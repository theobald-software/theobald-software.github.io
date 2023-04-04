

### Look up a Table
1. In the main window of the component click **[Add]** to add a table. The window "Table Lookup" opens.<br>
![table_main-window_add](/img/content/table/table_main-window_add.png){:class="img-responsive"}
2. In the window "Table Lookup" enter the name of the table to extract (1). Use wildcards (*) if needed.<br>
![Look-Up-Table](/img/content/table/table_look-up.png){:class="img-responsive"}
3. Click **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon) (2).
Search results appear in the preview window.
4. Select a table (3) and click **[OK]** (4). <br>

All relevant metadata information of the table is retrieved from SAP.
The application now returns to the main window of the component.

<!---
All relevant metadata information of the table retrieved from SAP are displayed in the subsection **Fields**.  
![Table-Form](/img/content/table/table_fields_filter.png){:class="img-responsive"}

| Number | Element / Description | 
|:------------|:----- |
| 1 | Field selection, filtering   |  
| 2  |   Filter fields  |  
| 3  |  Conversion Routine - Conversion routines stored in the Data Dictionary for the respective fields of the table. |   
| 4 | Preview window, result of the conversion    |
-->

### Set Up a Table Extraction

Set up the Table component to extract SAP tables:

1. Optional: Join multiple SAP tables, see [Table Joins](./table-joins).
2. Select the columns you want to extract. By default all columns are selected. Deselect the columns you do not want to extract.<br>
![Table-Form](/img/content/table/table_fields_filter2.png){:class="img-responsive"}
3. Define a [WHERE clause](./where-clause) or a [HAVING clause](./having-clause) to filter table records. By default all data is extracted.
4. Click **[Load live preview]** to display a live preview of the first 100 records. 
<!--- {% if page.product == "xtract-universal" or page.product == "board-connector" %}5. Check the [General Settings](./general-settings). The *General Settings* include keywords, definition of primary keys, column level encryption and access restrictions.{% endif %}-->
5. Check the {% if page.product == "xtract-is" %}[Settings](./extraction-settings){% else%}[Extraction Settings](./extraction-settings){% endif %} before running the extraction.
6. Click **[OK]** to save the extraction.

{% if page.product == "xtract-universal" %}The extraction can be run, see [Execute and Automate Extractions](../execute-and-automate-extractions).{% endif %}