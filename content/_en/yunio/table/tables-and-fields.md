---
ref: yunio-table-01
layout: page
title: Defining a Table Extraction
description: Tables and Fields
product: yunio
parent: table
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=where-clause
progressstate: 5
---

This section shows how to use the *SAP Table and Views* component.

### Look Up an SAP Table or View

1. When adding a new *Service*, select *SAP Table and Views* as the Extraction Type and click **[Next]** to open the *Search SAP Table or View* menu.
2. Enter the name of the Table or View to be extracted in the field **Search by name** (1) or search for description of a Table. Use wildcards ( * ) if needed.
![SAP-Table-or-Views](/img/content/yunio/Search-table-view.png){:class="img-responsive" width="750px"}
3. Click **[Search]** (2) to display the search results.
4. Select a source file (3). The main menu of the *SAP Table and Views* opens automatically.<br>
![SAP-Table-or-Views](/img/content/yunio/table-settings.png){:class="img-responsive" width="750px" }

The *SAP Table and Views* menu consists of the following sections:
- [Table or View](#table-or-view) (4)
- [Advanced Settings](#advanced-settings) (5)
- [Output Columns](#output-columns) (6)
- [WHERE-Clause](#where-clause) (7)

### Table or View

The name and description of the selected Table or View is displayed in the **Table or View** section.<br>
To select a different source file, click **Select** (4) in the upper right corner of the section.

### Advanced Settings

#### Function Name
Specifies the name of the function module used for data extraction. This field is filled automatically depending on what function modules are installed on your SAP system.
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
Use the function module from Theobald Software Z_THEO_READ_TABLE to ensure smooth extractions.

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
Extract data in background job setting is optional and is supported in combination with function module Z_THEO_READ_TABLE as of version 2.0. 
Activate the setting **Run in background** for long-running extractions with a very large amounts of data that may run into a timeout error (“Time limit exceeded”), when using the foreground mode.

{: .box-tip }
**Tip:** The extraction jobs can be found in the SAP JobLog (SM37) under the JobName *theo_read_table*.

### Output Columns

You can select either all or only individual columns for extraction. 
All columns are automatically selected for table extraction. Deselect the ones you don’t want to extract.

### WHERE-Clause
coming soon...