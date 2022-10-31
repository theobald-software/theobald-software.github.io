---
ref: yunio-table-01
layout: page
title: SAP Tables and Views
description: Defining a Table/View Extraction
product: yunio
parent: yunio
childidentifier: table-and-views
permalink: /:collection/:path
weight: 15
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=where-clause
progressstate: 5
---

This section shows how to use the integration type *SAP Table or View*.

{: .box-warning}
**Warning!** **Missing Authorization**
To use the Table component, access to the designated authority objects (RFC) in SAP must be available.
For more information, see the knowledge base article on [SAP User Rights: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).


### Look Up an SAP Table or View

1. Create a new *Service* of type *SAP Table or View*. 
2. Click **[Save and edit]**. The *Search SAP Table or View* menu opens.
3. Enter the name of the Table or View to be extracted in the field **Search by name** (1) or search for a Table description. Use wildcards ( * ) if needed.
![SAP-Table-or-Views](/img/content/yunio/Search-table-view.png){:class="img-responsive" width="750px"}
4. Click **[Search]** (2) to display the search results.
5. Select a source file from the list of available search results (3). 
The extraction settings of *SAP Table and Views* open automatically.<br>

### Settings
The *SAP Table or View* settings consist of the following subsections:

![yunIO-table](/img/content/yunio/table-settings.png){:class="img-responsive"}

- [Table or View](#table-or-view) (4) displays the name and description of the selected SAP Table or View.
- [Advanced Settings](#advanced-settings) (5) define how data is extract from SAP.
- [Output Columns](#output-columns) (6) define which columns are extracted.
- [WHERE Clause](#where-clause) (7) offers an optional data filter.
- [WHERE Clause Editor](#where-clause-editor) (8) offers a toolkit for creating WHERE clauses.


### Table or View

The name and description of the selected Table or View is displayed in the **Table or View** section.<br>
To select a different source file, click **Select** in the upper right corner of the section.

### Advanced Settings

#### Function Name
Specifies the name of the function module used for data extraction. This field is filled automatically depending on what function modules are installed on your SAP system.
Custom function modules are supported.

The following function modules can be used to extract tables:

- RFC_READ_TABLE (TAB512)
- /BODS/RFC_READ_TABLE (TAB2048)
- /SAPDS/RFC_READ_TABLE (TAB2048)
- /BODS/RFC_READ_TABLE2
- /SAPDS/RFC_READ_TABLE2
- Z_THEO_READ_TABLE

{: .box-warning }
**Warning! Duplicates in the target environment!**<br>
The SAP standard modules for table extraction do not have pointers for table fields. 
In larger tables this may cause low performance and duplicates in the target environment. 
Use the function module [Z_THEO_READ_TABLE](#installation-of-z_theo_read_table) from Theobald Software to ensure smooth extractions.

Note the necessary [authorization for SAP tables](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table):
```
S_TABU_NAM ACTVT=03; TABLE=ENLFDIR
```

#### Row Limit
Specifies the maximum number of extracted records. 0 extracts the entire table.

#### Rows per Package
The extracted data will be split into packages of the defined size. The default value is 50000 lines.<br>
A package size between 20000 and 50000 is advisable for large amounts of data. 0 means no packaging. 
Not using packaging can lead to an RFC timeout for large data extracts.

{: .box-warning }
**Warning! RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table:**<br>
To avoid a memory overflow on the SAP source system and to avoid huge overheads, choose a package size that suits your memory capacity.

#### Run in background
If this checkbox is checked, the table extraction is executed as a background job in SAP. 
This setting is optional and is supported in combination with function module Z_THEO_READ_TABLE as of version 2.0. 
Activate the setting **Run in background** for long-running extractions with a large amounts of data that may run into a timeout error (“Time limit exceeded”), when using the foreground mode.

{: .box-tip }
**Tip:** The extraction jobs can be found in the SAP JobLog (**SM37**) under the JobName *theo_read_table*.

### Output Columns

You can select either all or only individual columns for extraction. <br>
Per default all columns are selected to be extracted. 
Deselect the ones you don’t want to extract.

### WHERE Clause
Use a WHERE clause to filter your data.

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
|=, EQ |  True if the content of operand1 is equal to the content of operand2|
|<>, NE | True if the content of operand1 is not equal to the content of operand2|
| <, LT | True if the content of operand1 is less than the content of operand2|
|>, GT |  True if the content of operand1 is greater than the content of operand2|
|<=, LE | True if the content of operand1 is less than or equal to the content of operand2.|
|>=, GE |  True if the content of operand1 is greater than or equal to the content of operand2|
| (NOT) LIKE | True if the value of the operand operand1 matches (does not match) the pattern in the operand operand2.|
| (NOT) BETWEEN | True if the content of the operand operand (not) lies between the values of the operands operand1 and operand2. |

For more information on the OpenSQL syntax see [SAP help site - Select WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm?file=abapwhere.htm). 

### WHERE Clause Editor

The WHERE clause editor offers a toolkit for those who are not familiar with the syntax of the WHERE clause.<br>
There are 2 options for adding criteria to the WHERE clause:
- **[Add Criteria]** adds single criteria. <br>
The default structure for a single criteria with static values is `[Column][Operator][Value]` e.g., *MARC~WERKS = 1000*.
- **[Add Criteria Group]** adds a group of criteria.<br>
The default structure for a criteria group is `([Column1][Operator1][Value1][Boolean][Column2][Operator2][Value2])` e.g., *(MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')*.

{: .box-tip }
**Tip:** Combine multiple criteria and criteria groups to create complex filters e.g., 
*MARC~WERKS = 1000 AND (MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')* extracts only data where the column WERKS equals 1000 and the column PSTAT equals either 'L' or 'LB'.


#### Components of the WHERE Clause Editor

![WHERE-Clause-Builder-Example](/img/content/yunio/where-clause-editor.png){:class="img-responsive"}

The following components are available in the editor:

| Icon  | Component   | Function    | 
| ------|-------------|-------------| 
| ![WHERE-Clause-Builder-Example](/img/content/icons/delete.png) | Delete row | deletes a criteria.|
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-up.png) | Move row up | changes the sequence of the criteria. The selected criteria moves up. <br>The sequence of criteria can also be changed with drag&drop. |
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-down.png) | Move row down | changes the sequence of the criteria. The selected criteria moves down. <br>The sequence of criteria can also be changed with drag&drop.| 
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-column.png) | Column    | adds a column. Click on the component to select a column from the available tables. | 
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-sql.png)| SQL       |  adds an SQL statement.      |  
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-operator.png)| Operator  | adds an operator e.g., =, <, >, etc. |  
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add-literal.png) | Value | adds a static value of type *String*, *Number*, *Flag* or *List*. *List* offers a separate editor to create lists of type *String*, *Number* or *Select*. *Select* enables usage of SELECT statements. |
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add.png) | Criteria | adds a new criteria after the selected criteria. |
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add-group.png) | Group | adds a new group of criteria the selected criteria. | 

When adding or editing a criteria only the relevant components are displayed e.g., **Add Operator** is only available if there is a column or SQL statement to use an operator on.

#### Editing and Deleting Components

- Click on a component to edit it. All areas that are marked green can be edited.<br>
- To delete a component, click the ![WHERE-Clause-Builder-Example](/img/content/icons/delete.png) icon that appears when hovering over the component.<br>

{: .box-note }
**Note:** The WHERE clause is overridden when a WHERE clause is entered in the designated text field or if a WHERE clause is entered in the body of the service definition when running a service.

{% include _content/en/sap-customizing/custom-function-module-for-table-extraction.md  %}


*****
#### Related Links
- [Knowledge Base Article: Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector)
- [Knowledge Base Article: Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman)