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
For more information, refer to the knowledge base article [SAP User Rights: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).


## Look Up an SAP Table or View

1. Create a new *Service* of type *SAP Table or View*. 
2. Click **[Save and edit]**. The *Search SAP Table or View* menu opens.
3. Enter the name of the Table or View to be extracted in the field **Search by name** (1) or search for a Table description. Use wildcards ( * ) if needed.
![SAP-Table-or-Views](/img/content/yunio/Search-table-view.png){:class="img-responsive" width="750px"}
4. Click **[Search]** (2) to display the search results.
5. Select a source file from the list of available search results (3). 
The extraction settings of *SAP Table and Views* open automatically.<br>

## Settings
The *SAP Table or View* settings consist of the following subsections:
- [Table or View](#table-or-view) (4) displays the name and description of the selected SAP Table or View.
- [Advanced Settings](#advanced-settings) (5) define how the data is extract from SAP.
- [Output Columns](#output-columns) (6) define what columns to extract.
- [WHERE Clause](#where-clause) and [WHERE Clause Editor](#where-clause-editor) (7) define what rows to extract.

![yunIO-table](/img/content/yunio/table-settings.png){:class="img-responsive"}

### Table or View

The **Table or View** section displays the name and description of the selected table or view.<br>
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
Deselect the columns you don’t want to extract.

### WHERE Clause
A WHERE clause can be used to filter table records, see [SAP ABAP Documentation: SELECT-WHERE](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abapwhere.htm).
Enter WHERE clauses manually in *Text mode* or use the [WHERE Clause Editor](#where-clause-editor) in *Editor Mode*.<br>

{% include _content/en/tables/where-clause-syntax.md%}

#### How to use the WHERE Clause in SwaggerHub

The WHERE-Clause can be parameterized in the request body of the service. Example:<br>
![WHERE-Clause in SwaggerHub](/img/content/yunio/swagger-inspector.png){:class="img-responsive"}

For more information on parameterizing services, refer to the following knowledge base articles: 
- [Running a yunIO Service in SwaggerHub](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-hub) 
- [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman).

{% include _content/en/tables/where-clause-editor.md%}

{: .box-note }
**Note:** The WHERE clause is overridden when a WHERE clause is entered in the designated text field or if a WHERE clause is entered in the body of the service definition when running a service.

## SAP Customizing

{: .box-note }
**Note:** SAP customizing is optional. The installation of the custom function module `Z_THEO_READ_TABLE` is recommended.

{% include _content/en/sap-customizing/custom-function-module-for-table-extraction.md  %}


*****
#### Related Links
- [Integration Scenarios](./integration)
- [Knowledge Base Article: Integrating a yunIO Service with Power Automate](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate)