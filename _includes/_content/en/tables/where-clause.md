
### Using a WHERE Clause 

{% if page.product == "xtract-universal" or page.product == "board-connector" %}1. Open a Table (CDC) extraction. {% else %}1. Open an Xtract Table component.{% endif %}
2. Navigate to the tab *WHERE Clause*.
{% if page.parent == "table-cdc" %}3. Enter a WHERE clause using the [WHERE Clause Editor](#where-clause-editor). {% else %}3. Enter a WHERE clause [manually](#where-clause-syntax) or use the [WHERE Clause Editor](#where-clause-editor).{% endif %}
4. To display the results in the **Preview** section, click **[Load live preview]**.

{% if page.parent != "table-cdc" %}

{: .box-note }
**Note:** When fields with the same name exist in different tables, the field names must be formatted as [table name]~[field name], e.g., MARC~MATNR. This can be the case when extracting multiple tables.
{% endif %}

{% if page.product == "xtract-for-alteryx" %}
![Extraction-Settings-01](/img/content/xfa/Table-Extraction-Where-Clause.png){:class="img-responsive"}
{% elsif page.product == "xtract-is" and page.parent == "table" %}
![Extraction-Settings-01](/img/content/xis/Table-Extraction-Where-Clause.png){:class="img-responsive"}
{% elsif page.product == "xtract-is" and page.parent == "table-cdc" %}
![Extraction-Settings-01](/img/content/tablecdc/xis-Table-Extraction-Where-Clause.png){:class="img-responsive"}
{% else %}
{% if page.parent == "table-cdc" %}
![Extraction-Settings-01](/img/content/tablecdc/Table-Extraction-Where-Clause.png){:class="img-responsive"}
{% else %}
![Extraction-Settings-01](/img/content/xu/Table-Extraction-Where-Clause.png){:class="img-responsive"}
{% endif %} {% endif %}

{% if page.parent != "table-cdc" %}
**[Text mode]** <br>
Allows entering a WHERE clause directly into the text field. *Text mode* is the default method for defining a WHERE clause.

**[Editor mode]** <br>
Opens the WHERE clause editor. The WHERE clause editor offers a toolkit for those who are not familiar with the syntax of the WHERE clause, see [WHERE Clause Editor](#where-clause-editor).
{% endif %}

{% if page.product == "xtract-for-alteryx" %}
**[Extraction Settings]** <br>
Opens the extraction settings menu, see [Extraction Settings](./extraction-settings).

**[Edit Parameters]** <br>
Opens the runtime parameter menu, see [Using Runtime Parameters in the WHERE Clause Editor](./edit-runtime-parameters#runtime-parameters-in-the-where-clause-editor).
{% endif %}

**[Load live preview]** <br>
Allows a real-time preview of the extraction data without executing the extraction. <br>
You can also preview the data with aggregation functions. 

{% if page.parent != "table-cdc" %}
**[Count rows]** <br>
Returns the number of rows/data records of an extraction, considering the WHERE and HAVING clauses stored. 
{% endif %}

{% if page.product != "xtract-for-alteryx" %}
**[Refresh metadata]** <br>
A new lookup is performed on the selected table(s). Existing mappings and field selections are retained, which is not the case when the table is added again. <br>
It may be necessary to renew the metadata, for example, if a table has been adjusted on the SAP side, another source system has been connected, or the source system has been updated. 
In such cases, data inconsistencies can occur that are resolved by this function.   
{% endif %}

<!--- Open TableCDC condition-->
{% if page.parent != "table-cdc" %}
### WHERE Clause Restrictions

{: .box-note }
**Note:** 
When using table joins, restricting the right table of a LEFT OUTER JOIN is only possible starting from SAP Release 7.40, SP05. <br>

If your SAP System is older than Release 7.40, SP05, the following error appears:
*RFC_ERROR_SYSTEM_FAILURE - Illegal access to the right table of a LEFT OUTER JOIN.

<!--- Close TableCDC condition-->
{% endif %}
