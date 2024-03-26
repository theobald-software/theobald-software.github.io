One or more SAP tables or views can be selected under the tab *Tables And Fields*.
The tab *Tables and Fields* consists of three main subsections:
- Tables
- Fields
- Preview


### Tables

To add a new table or remove an existing table, click **[Add]** or **[Remove]**.
 
![Add_table](/img/content/table/table_main-window_add.png){:class="img-responsive"}


### Fields


The following options are available on the right under *Fields* for the column selection: <br>


{% if page.product == "xtract-for-alteryx" %}
![Fields](/img/content/table/table_fields_filter_xis.png){:class="img-responsive"}
{% else %}
![Fields](/img/content/table/table_fields_filter.png){:class="img-responsive"}
{% endif %}


The Table component imports and highlights the dedicated indices, such as primary key and/or sorting options, from SAP. 

{: .box-note}
**Note:** using the indicated fields for filtering increases performance when applying WHERE-clause.

**Filter (1)** <br>
The column name and the column description can be filtered.

**Aggregate Function (2)** <br>
The following aggregation functions are available for column contents:
- None: No aggregation 
- MEAN: Average
- COUNT: Number  
- MAX: Maximum
- MIN: Minimum 
- SUM: Total

{: .box-tip }
**Tipp:** The aggregate function is only available by numeric field data types (e.g., INT, FLOAT, DECIMAL).

**Conv. - Use Conversion Routine (3)** <br>
Activating the tri-state checkbox defines whether the conversion routines stored in the Data Dictionary are used for the respective fields. 

{: .box-note}
**Note:** activating the conversion routines in SAP leads to significant performance decrease. The extraction duration increases. <br>

![tri-state box](/img/content/table/tri-state_checkbox.png){:class="img-responsive"}

|Checkbox State | Description | Comment |
|:-----:|-----|
|(1) | no conversion routines selected | | 
|(2)| conversion routines enabled;<br> only available with function module Z_XTRACT_IS_TABLE_COMPRESSION | no data type safety |
|(3)  | conversion routines enabled;<br> only available with function module /THEO/READ_TABLE or Z_THEO_READ_TABLE | assured data type safety |


Typical examples for conversion routines are the language keys (for example, D in the database, DE after conversion) or the project number (for example, T000012738GT in the database, T/12738/GT after conversion). 
After the conversion, the value is always displayed as it appears in the transaction *SE16N* in the SAP GUI. 

### Preview

The subsection *Preview* displays a real-time preview of the selected fields, when the button **"[Load live preview]** is clicked.

{: .box-note }
**Note:** Using non-indexed fields in the WHERE-clause can lead to timeouts during the preview of large tables.


### Buttons

{% if page.product == "xtract-for-alteryx" %}
**[Extraction Settings]** <br>
Opens the extraction settings menu, see [Extraction Settings](./extraction-settings). 
 
**[Edit parameters]** <br>
Open the runtime parameter menu, see [Runtime Parameters](./edit-runtime-parameters). 

{% endif %}

**[Load live preview]** <br>
Allows a real-time preview of the extraction data without executing the extraction. <br>
You can also preview the data with aggregation functions. 
 
**[Count rows]** <br>
Returns the number of rows/data records of an extraction, considering the WHERE and HAVING clauses stored. 

**[Refresh metadata]** <br>
A new lookup is performed on the selected table(s). Existing mappings and field selections are retained, which is not the case when the table is added again. <br>
It may be necessary to renew the metadata, for example, if a table has been adjusted on the SAP side, another source system has been connected, or the source system has been updated. 
In such cases, data inconsistencies can occur that are resolved by this function.   

