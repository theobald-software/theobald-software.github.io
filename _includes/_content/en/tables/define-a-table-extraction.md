

### Look up a Table
1. Within the main window "Extract Single and Joint SAP Tables or Views" click **[Add]** to add a table. 
![Add-New-Table](/img/content/table/table_main-window_add.png){:class="img-responsive"} <br/>
The window "Table Lookup" opens. <br/>
![Look-Up-Table](/img/content/table/table_look-up.png){:class="img-responsive"} <br/>
2. In the field **Table name** (1) enter the name of the table to extract. <br>
3. Click **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon) (2).
Search results appear in the preview window.
4. Select the desired table (3) and click **[OK]** (4). <br>

{: .box-tip }
**Tip:** Wildcard such as * are supported. Make sure to place them after the name of the searched item.

The application now returns to the main window "Extract Single and Joint SAP Tables or Views". <br>

All relevant metadata information of the table retrieved from SAP are displayed in the subsection **Fields**.  
![Table-Form](/img/content/table/table_fields_filter.png){:class="img-responsive"}

| Number | Element / Description | 
|:------------|:----- |
| 1 | Field selection, filtering   |  
| 2  |   Filter fields  |  
| 3  |  Conversion Routine - Conversion routines stored in the Data Dictionary for the respective fields of the table. |   
| 4 | Preview window, result of the conversion    |




### Filtering table fields

You can select either all or only individual columns for extraction. All columns are automatically selected for table extraction. Deselect the ones you don't wish to extract.

Click the header fields to sort the columns by name or description. To search for a certain column name or description, start typing the word in the filter boxes.<br>

![Table-Main](/img/content/table/fields_filter-search.png){:class="img-responsive"}


### Using live preview

1. Click **[Load live preview]** to load 100 records for preview.
2. Click **[OK]** to confirm and save the extraction in the repository, i.e. on the server.

