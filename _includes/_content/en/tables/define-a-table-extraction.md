

### Look up a Table
1. In the main window of the component click **[Add]** to add a table. The window "Table Lookup" opens.<br>
![table_main-window_add](/img/content/table/table_main-window_add.png){:class="img-responsive"}
2. In the window "Table Lookup" enter the name of the table to extract (1). Use wildcards (*) if needed.<br>
![Look-Up-Table](/img/content/table/table_look-up.png){:class="img-responsive"}
3. Click **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon) (2).
Search results appear in the preview window.
4. Select a table (3) and click **[OK]** (4). <br>

The application now returns to the main window "Extract Single and Joint SAP Tables or Views". <br>
All relevant metadata information of the table are retrieved from SAP and are displayed in the subsection **Fields**.  

![Table-Form](/img/content/table/table_fields_filter2.png){:class="img-responsive"}

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

### Filtering Tables

There are multiple ways to filter tables:
- Filter table columns: Select either all or only individual columns for extraction. By default all columns are selected. Deselect the columns you do not want to extract.
- Filter table rows: Use a [WHERE clause](./where-clause) or a [HAVING clause](./having-clause) to filter table records.

Click **[Load live preview]** to display a live preview of the first 100 records.

### Processing Table Data

The Table component offers the following processing options:
- Join multiple tables, see [Table Joins](./table-joins).

Other table data processing include the use of conversion routines and aggregate functions, see [Functions Overview - Fields](./tables-and-fields#fields).


Click **[Load live preview]** to display a live preview of the first 100 records.

### Settings

Extraction Settings
General Settings
Avoid Restrictions