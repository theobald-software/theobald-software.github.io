
A WHERE clause can be used to filter table records, see [SAP ABAP Documentation: SELECT-WHERE](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abapwhere.htm).

### Using a WHERE Clause 

{% if page.product == "xtract-universal" or page.product == "board-connector" %}1. Open a table extraktion. {% else %}1. Open an Xtract Table component.{% endif %}
2. Navigate to the tab *WHERE Clause*.
3. Enter a WHERE clause [manually](#where-clause-syntax) or use the [WHERE Clause Editor](#where-clause-editor).
4. To display the results in the **Preview** section, click **[Load live preview]**.

{: .box-note }
**Note:** When fields with the same name exist in different tables, the field names must be formatted as [table name]~[field name], e.g., MARC~MATNR. This can be the case when extracting multiple tables.

{% if page.product == "xtract-for-alteryx" %}
![Extraction-Settings-01](/img/content/xfa/Table-Extraction-Where-Clause.png){:class="img-responsive"}
{% elsif page.product == "xtract-is" %}
![Extraction-Settings-01](/img/content/xis/Table-Extraction-Where-Clause.png){:class="img-responsive"}
{% else %}
![Extraction-Settings-01](/img/content/xu/Table-Extraction-Where-Clause.png){:class="img-responsive"}
{% endif %}


**[Text mode]** <br>
Allows entering a WHERE clause directly into the text field. *Text mode* is the default method for defining a WHERE clause.

**[Editor mode]** <br>
Opens the WHERE clause editor. The WHERE clause editor offers a toolkit for those who are not familiar with the syntax of the WHERE clause, see [WHERE Clause Editor](#where-clause-editor).

{% if page.product == "xtract-for-alteryx" %}
**[Extraction Settings]** <br>
Opens the extraction settings menu, see [Extraction Settings](./extraction-settings).

**[Edit Parameters]** <br>
Opens the runtime parameter menu, see [Using Runtime Parameters in the WHERE Clause Editor](#using-runtime-parameters-in-the-where-clause-editor).
{% endif %}

**[Load live preview]** <br>
Allows a real-time preview of the extraction data without executing the extraction. <br>
You can also preview the data with aggregation functions. 
 
**[Count rows]** <br>
Returns the number of rows/data records of an extraction, considering the WHERE and HAVING clauses stored. 

{% if page.product != "xtract-for-alteryx" %}
**[Refresh metadata]** <br>
A new lookup is performed on the selected table(s). Existing mappings and field selections are retained, which is not the case when the table is added again. <br>
It may be necessary to renew the metadata, for example, if a table has been adjusted on the SAP side, another source system has been connected, or the source system has been updated. 
In such cases, data inconsistencies can occur that are resolved by this function.   
{% endif %}

### WHERE Clause Restrictions

{: .box-note }
**Note:** 
When using table joins, restricting the right table of a LEFT OUTER JOIN is only possible starting from SAP Release 7.40, SP05. <br>

If your SAP System is older than Release 7.40, SP05, the following error appears:
*RFC_ERROR_SYSTEM_FAILURE - Illegal access to the right table of a LEFT OUTER JOIN.


### WHERE Clause Syntax 

{: .box-warning }
**Warning! Extraction fails due to incorrect syntax!** <br>
The extractions fail, if incorrect syntax is used in the WHERE clause. Make sure to use correct SAP OpenSQL syntax. Several important syntax rules are listed in this help section.

{: .box-tip}
**Tip:** To check the syntax of the WHERE clause, click **[Load live preview]**. This way there is no need to run an extraction to see, if the syntax is correct.

{: .box-tip}
**Tip:** To increase extracting performance, make sure to place the indexed fields as the first selection filter operation in the WHERE clause.


#### Syntax Rules
- Enter a space before and after the equal sign:<br>
 **Correct:** *YEAR = '1999'* <br>
 **Wrong:** *YEAR= '1999 '*, *YEAR ='1999'* or *YEAR='1999'*

- Set floating point numbers in single quotation mark: <br>
**Correct:** *KMENG > '10.3'* <br>
**Wrong:** *KMENG > 10.3*

{: .box-note }
**Note:** The WHERE clause doesn't need any line break (return key).

- Values must have the internal SAP representation:<br>
  - The date 01.01.1999 has the internal representation 19990101 (YYYYMMDD) 
  - The year period 001.1999 has the internal representation 1999001 (YYYYPPP)
  - Numbers must contain the leading zeros, e.g., customer number 1000 has the internal representation 0000001000.
  
| Operator   |      Meaning      |  
|:---------|:------------- |
|=, EQ |  True if the content of operand1 is equal to the content of operand2.|
|<>, NE | True if the content of operand1 is not equal to the content of operand2.|
| <, LT | True if the content of operand1 is less than the content of operand2.|
|>, GT |  True if the content of operand1 is greater than the content of operand2.|
|<=, LE | True if the content of operand1 is less than or equal to the content of operand2.|
|>=, GE |  True if the content of operand1 is greater than or equal to the content of operand2.|
| (NOT) LIKE | True if the value of the operand operand1 matches (does not match) the pattern in the operand operand2.|
| (NOT) BETWEEN | True if the content of the operand1 lies (not) between the values of the operands operand2 and operand3. |
| (NOT) IN | True if the content of operand1 is (not) part of the content of operand2. Operand2 must be of type LIST or SQL.|

Get more details on the OpenSQL syntax on the [SAP help site - Select WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm?file=abapwhere.htm) 

{% if page.product == "xtract-universal" or page.product == "board-connector" %}
<!--- Script Expressions are not supported by Xtract IS and Xtract for Alteryx-->

### Script Expressions

The **[Text Mode]** of the WHERE clause supports script expressions.
They are usually used to determine a dynamic date based on the current date. <br>
When using script expressions in a WHERE Clause, the value must be entered in single quotation marks.

For more information on script expression, see [Script Expressions](../advanced-techniques/script-expressions).

**Syntax:**<br>
```[Field_name][Space][Operator][Space]'#[Script-Expression]#'```<br>
```BUDAT >= '#{DateTime.Now.AddYears(-5).ToString("yyyyMMdd")}#'```

**Examples:**

|   Input                         | Output                                                                         | Description              |
|:--------------------------------------|:------------------------------------------------------------------------------|:--------------------|
|```#{ DateTime.Now.ToString("yyyyMMdd") }#```                                       | yyyyMMdd | Current date in SAP format          |
|```#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#```                     | yyyy0101 | Current year concatenated with "0101"           |
|```#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#```                    | yyyy0101 | Current year concatenated with "0101"            |
|```#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#``` | yyyy0101 | Current year concatenated with "0101"           |

<!--- Script Expressions are not supported by Xtract IS and Xtract for Alteryx-->
{% endif %}

### Using Subqueries

{: .box-note }
**Note:** The usage of subqueries is only possible as of SAP Release 7.40, SP05.


A subquery is an SQL query nested inside a larger query. 
Subqueries are nested queries that provide data to the enclosing query. Subqueries need be enclosed with parenthesis and can return individual values or a list of records.
Get more details about subqueries on the [SAP help site - Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_in_subquery.htm).

In the following example a subquery is used with the *IN* operator. 
The following statement returns all the *active* customers (rows in the table KNA1) that have i.e. a sales document in the table VBAK for sales document header data.

![WHERE Clause Subquery](/img/content/table/table_where_sub-select.png){:class="img-responsive"}


### WHERE Clause Editor

The WHERE clause editor offers a toolkit for those who are not familiar with the syntax of the WHERE clause.<br>
Click **[Editor mode]** to open the editor. 

![WHERE-Clause-Builder-01](/img/content/where-clause-builder.png){:class="img-responsive"}

There are 2 options for adding criteria to the WHERE clause:
- **[Add Criteria]** adds single criteria. <br>
	- The default structure for a single criteria with static values is `[Column][Operator][Value]` e.g., *MARC~WERKS = 1000*.
	- The default structure for a single criteria with parameters is `[Column][Operator][Parameter]` e.g., *MARC~WERKS = [p_WERKS]*.
- **[Add Criteria Group]** adds a group of criteria.
	- The default structure for a criteria group is `([Column1][Operator1][Value1][Boolean][Column2][Operator2][Value2])` e.g., *(MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')*.

{: .box-tip }
**Tip:** Combine multiple criteria and criteria groups to create complex filters e.g., 
*MARC~WERKS = 1000 AND (MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')* extracts only data where the column WERKS equals 1000 and the column PSTAT equals either 'L' or 'LB'.

#### Components of the WHERE Clause Editor

![WHERE-Clause-Builder-Example](/img/content/where-clause-builder-2.png){:class="img-responsive"}

The following components are available in the editor:

| Icon  | Component   | Function    | 
| ------|-------------|-------------| 
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-delete.png) | Delete row | deletes a criteria.|
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-up.png) | Move row up | changes the sequence of the criteria. The selected criteria moves up. <br>The sequence of criteria can also be changed with drag&drop. |
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-down.png) | Move row down | changes the sequence of the criteria. The selected criteria moves down. <br>The sequence of criteria can also be changed with drag&drop.| 
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-column.png) | Column    | adds a column. Click on the component to select a column from the available tables. | 
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-sql.png)| SQL       |  adds an Open SQL statement, see [SAP Documentation: Open SQL](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abenopensql.htm).      |  
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-operator.png)| Operator  | adds an operator e.g., =, <, >, etc. |  
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add-literal.png) | Value | adds a static value of type *String*, *Number*, *Flag* or *List*. *List* offers a separate editor to create lists of type *String*, *Number* or *Select*. *Select* enables usage of SELECT statements. For more information, refer to the knowledge base article [Working with Lists in the WHERE-Clause Editor](https://kb.theobald-software.com/xtract-universal/where-clause-editor-lists). |
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add-param.png) | Parameter | adds a previously defined runtime parameter, see [Using Runtime Parameters in the WHERE Clause Editor](#using-runtime-parameters-in-the-where-clause-editor).|
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add.png) | Criteria | adds a new criteria after the selected criteria. |
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add-group.png) | Group | adds a new group of criteria the selected criteria. | 

{: .box-note }
**Note**: When adding or editing a criteria only the relevant components are displayed e.g., **Add Operator** is only available if there is a column or SQL statement to use an operator on.

#### Editing and Deleting Components
- Click on a component to edit it. All areas that are marked green can be edited.<br>
- To delete a component, click the (x) icon above the component.<br>
