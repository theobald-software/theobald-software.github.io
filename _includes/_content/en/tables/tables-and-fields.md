The following section gives an overview over the settings that can be changed withing the window "Define data source for SAP Tables", tab "Tables and Fields".
The tab "Tables and Fields" contains of three main subsections:
- Tables
- Fields
- Preview

### Tables
One or more SAP tables or views can be selected under the tab *Tables And Fields*. <br>
 To add a new table or remove an existing table, click **[Add]** or **[Remove]**.
 
 ![Add_table](/img/content/table/table_main-window_add.png){:class="img-responsive"}

### Fields
The following options are available on the right under *Fields* for the column selection: <br>
![Fields](/img/content/table/table_fields_filter.png){:class="img-responsive"}

**Filter** <br>
The column name and the column description can be filtered.

**Aggregate Function** <br>
The following aggregation functions are available for column contents:
- None: No aggregation 
- AVG: Average
- COUNT: Number  
- MAX: Maximum
- MIN: Minimum 
- SUM: Total

**Conv. - Use Conversion Routine** <br>
Activating the checkboxes defines whether the conversion routines stored in the Data Dictionary are used for the respective fields. 
Typical examples are the language key (for example, D in the database, but DE after conversion) or the project number (for example, T000012738GT in the database, T/12738/GT after conversion). 
After the conversion, the value is always displayed as it would appear in a transaction in the SAP GUI. 

{: .box-note}
**Note:** The option "Use Conversion Routine" is only supported with function module Z_XTRACT_IS_TABLE_COMPRESSION. 	

### Preview
The subsection *Preview* displays a real-time preview of the selected fields, when the button **"[Load live preview]** is clicked.

### Buttons
**[Load live preview]** <br>
The *Load live preview* button allows a real-time preview of the extraction data without executing the extraction. <br>
You can also preview the data with aggregation functions. 
 
**[Count rows]** <br>
Returns the number of rows/data records of an extraction, taking into account the WHERE and HAVING Clauses stored. 

**[Refresh metadata]** <br>
A new lookup is performed on the selected table(s). Existing mappings and field selections are retained, which is not the case when the table is added again. <br>
It may be necessary to renew the metadata, for example, if a table has been adjusted on the SAP side, another source system has been connected, or the source system has been updated. 
In such cases, data inconsistencies can occur that are resolved by this function.   

