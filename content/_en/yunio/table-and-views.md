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

This section shows how to use the *SAP Table and Views* component.

### Look Up an SAP Table or View

1. When adding a new *Service*, select *SAP Table and Views* as the **Extraction Type**. 
2. Click **[Save and edit]**. The *Search SAP Table or View* menu opens.
3. Enter the name of the Table or View to be extracted in the field **Search by name** (1) or search for description of a Table. Use wildcards ( * ) if needed.
![SAP-Table-or-Views](/img/content/yunio/Search-table-view.png){:class="img-responsive" width="750px"}
4. Click **[Search]** (2) to display the search results.
5. Select a source file from the list of available search results (3). 
The extraction settings of *SAP Table and Views* open automatically.<br>

The *SAP Table and Views* settings consist of the following subsections:

![yunIO-table](/img/content/yunio/table-settings.png){:class="img-responsive" width="750px"}

- [Table or View](#table-or-view) (4) displays the name and description of the selected SAP Table or View.
- [Advanced Settings](#advanced-settings) (5) define how data is extract from SAP.
- [Output Columns](#output-columns) (6) define which columns are extracted.
- [WHERE-Clause](#where-clause) (7) offers an optional data filter.

### Table or View

The name and description of the selected Table or View is displayed in the **Table or View** section.<br>
To select a different source file, click **Select** in the upper right corner of the section.

### Advanced Settings

#### Function Name
Specifies the name of the function module used for data extraction. This field is filled automatically depending on what function modules are installed on your SAP system.
Customer-specific function modules are supported.

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
Use the function module [Z_THEO_READ_TABLE](./table/custom-function-module-for-table-extraction) from Theobald Software to ensure smooth extractions.

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

### WHERE-Clause
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


*****
#### Related Links
- [SAP Customizing for Tables](./table/custom-function-module-for-table-extraction)
- [KB: Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector)
- [KB: Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman)