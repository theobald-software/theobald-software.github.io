{% if page.product != "yunio" %}
### WHERE Clause Syntax 

{: .box-warning }
**Warning! Extraction fails due to incorrect syntax!** <br>
The extractions fail, if incorrect syntax is used in the WHERE clause. Make sure to use correct SAP OpenSQL syntax. Several important syntax rules are listed in this help section.

{: .box-tip}
**Tip:** To check the syntax of the WHERE clause, click **[Load live preview]**. This way there is no need to run an extraction to see, if the syntax is correct.

{: .box-tip}
**Tip:** To increase extracting performance, make sure to place the indexed fields as the first selection filter operation in the WHERE clause.
{% endif %}

#### Syntax Rules
{% if page.parent != "table-cdc" %}
- Enter a space before and after the equal sign:<br>
 **Correct:** *YEAR = '1999'* <br>
 **Wrong:** *YEAR= '1999 '*, *YEAR ='1999'* or *YEAR='1999'*

- Set floating point numbers in single quotation mark: <br>
**Correct:** *KMENG > '10.3'* <br>
**Wrong:** *KMENG > 10.3*

{: .box-note }
**Note:** The WHERE clause doesn't need any line break (return key).
{% endif %}

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
| (NOT) IN | True if the content of operand1 is (not) part of the content of operand2. Operand2 must be of type LIST or SQL.|

<!--- | (NOT) BETWEEN | True if the content of the operand1 lies (not) between the values of the operands operand2 and operand3. |-->

Get more details on the OpenSQL syntax on the [SAP help site - Select WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm?file=abapwhere.htm) 

{% if page.parent != "table-cdc" %}
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

{% if page.product != "yunio" %}
### Using Subqueries

{: .box-note }
**Note:** The usage of subqueries is only possible as of SAP Release 7.40, SP05.


A subquery is an SQL query nested inside a larger query. 
Subqueries are nested queries that provide data to the enclosing query. Subqueries need be enclosed with parenthesis and can return individual values or a list of records.
Get more details about subqueries on the [SAP help site - Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_in_subquery.htm).

In the following example a subquery is used with the *IN* operator. 
The following statement returns all the *active* customers (rows in the table KNA1) that have i.e. a sales document in the table VBAK for sales document header data.

![WHERE Clause Subquery](/img/content/table/table_where_sub-select.png){:class="img-responsive"}
{% endif %}
{% endif %} 