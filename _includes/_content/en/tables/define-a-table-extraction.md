
### Look up a Table
1. In the main window of the component click **[Add]** to add a table. The window "Table Lookup" opens.<br>
![table_main-window_add](/img/content/table/table_main-window_add.png){:class="img-responsive"}
2. In the window "Table Lookup" enter the name of the table to extract (1). Use wildcards (*) if needed.<br>
![Look-Up-Table](/img/content/table/table_look-up.png){:class="img-responsive"}
3. Click ![magnifying-glass](/img/content/icons/magnifying-glass.png) (2). Search results are displayed.
4. Select a table (3) and click **[OK]** (4). <br>

All relevant metadata information of the table is retrieved from SAP.
The application now returns to the main window of the component.

{% if page.parent == "getting-started" or page.childidentifier == "getting-started" %}

### Set Up a Table Extraction

Set up the Table component to extract SAP tables:

1. Select the columns you want to extract. By default all columns are selected. Deselect the columns you do not want to extract.<br>
![Table-Form](/img/content/table/table_fields_filter2.png){:class="img-responsive"}
2. Optional: Define a WHERE clause or a HAVING clause to filter table records. By default all data is extracted.
3. Click **[Load live preview]** to display a live preview of the first 100 records. 
<!--- {% if page.product == "xtract-universal" or page.product == "board-connector" %}5. Check the [General Settings](./general-settings). The *General Settings* include keywords, definition of primary keys, column level encryption and access restrictions.{% endif %}-->
4. Click **[OK]** to save the extraction.

You can now run the extraction.
{% else %}

### Set Up a Table Extraction

Set up the Table component to extract SAP tables:

1. Optional: Join multiple SAP tables, see [Table Joins](./table-joins).
2. Select the columns you want to extract. By default all columns are selected. Deselect the columns you do not want to extract.<br>
![Table-Form](/img/content/table/table_fields_filter2.png){:class="img-responsive"}
3. Define a [WHERE clause](./where-clause) or a [HAVING clause](./having-clause) to filter table records. By default all data is extracted.
4. Click **[Load live preview]** to display a live preview of the first 100 records. 
<!--- {% if page.product == "xtract-universal" or page.product == "board-connector" %}5. Check the [General Settings](./general-settings). The *General Settings* include keywords, definition of primary keys, column level encryption and access restrictions.{% endif %}-->
5. Check the {% if page.product == "xtract-is" %}[Settings](./extraction-settings) {% elsif page.product == "xtract-for-alteryx" %} the [[Extraction Settings]](./extraction-settings) {% else %} [General Settings](./general-settings) and the [Extraction Settings](./extraction-settings) {% endif %} before running the extraction.
6. Click **[OK]** to save the extraction.

{% if page.product == "xtract-universal" %}The extraction can be run, see [Execute and Automate Extractions](../execute-and-automate-extractions).{% endif %}


