### Using WHERE clause 
1. Select and double-click an extraction of type "table" in the main window of the Designer.
The window "Define data source for SAP Table " opens.
2. Navigate to tab **WHERE clause**.
3. Enter the table name (e.g., MAKT~MATNR).
4. To display the results in the **Preview** section, click **[Load live preview]**.

{: .box-note }
**Note:** If the field name is not unique, the table name must be listed in the WHERE condition. This can be the case, for example, with [table joins](./table-joins).

![Extraction Settings-01](/img/content/Table-Extraction-Where-Clause.png){:class="img-responsive"}

### WHERE clause syntax 

{: .box-warning }
**Warning! Extraction fails due to incorrect syntax!** <br>
The extractions fail, if incorrect syntax is used in the WHERE clause. Make sure to use correct SAP OpenSQL syntax. Several important rules are listed in this help section.

#### Syntax rules
- Enter a space before and after the equal sign:<br>
 **Correct:** *YEAR = '1999 '* <br>
 **Incorrect:** *YEAR= '1999 '*, *YEAR ='1999'* or *YEAR='1999'*

- Set floating point numbers in single quotation mark: <br>
**Correct:** *KMENG > '10.3'* <br>
**Incorrect:** *KMENG > 10.3*

The WHERE clause doesn't need any line break (return key).

Get more information about the OpenSQL syntax on the [SAP help site - Select WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm?file=abapwhere.htm)

- Values must have the internal SAP representation:<br>
  - The date 01.01.1999 has the internal representation 19990101 (YYYYMMDD) 
  - The year period 001.1999 has the internal representation 1999001 (YYYYPPP)
  - Numbers must contain the leading zeros, e.g., customer number 1000 has the internal representation 0000001000.

### WHERE clause restrictions

{: .box-note }
**Note:** 
When using table joins, an access to the right table of a LEFT OUTER JOIN is only possible starting from SAP Release 7.40, SP05. <br>

If your SAP System is older than Release 7.40, SP05, the following error appears:
*RFC_ERROR_SYSTEM_FAILURE - Illegal access to the right table of a LEFT OUTER JOIN.

Get more information about the Changes in Release 7.40, SP05 on the [SAP help site](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-US/index.htm).









