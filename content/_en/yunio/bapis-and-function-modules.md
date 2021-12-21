---
ref: yunio-bapis-function-01
layout: page
title: Function Module / BAPI
description: Define a BAPI Extraction
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 18
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=define-a-bapi-extraction
---

The following section shows how to use the Function Module / BAPI component.

### Look up a Function Module / BAPI

1. When adding a new *Service*, select *Function Module / BAPI* as the **Extraction Type**.
2. Click **[Save and edit]**. The *Search Function Module* menu opens.
3. Enter the name of a Function Module or BAPI in the fields **Search by name** (1) or search for function groups. You can use wildcards (*) if needed.<br>
![Look-Up-Function-Module](/img/content/yunio/search-bapi.png){:class="img-responsive"}
4. Click **[Search]** (2) to display the search results.
5. Select a source file from the list of available search results (3). The settings of *Function Module / BAPI* open automatically.<br>

The settings for *Function Module* consist of the following subsections:

![yunIO-function-module](/img/content/yunio/bapi-settings.png){:class="img-responsive"}

- [Function Module](#function-module) (4) displays the name and description of the selected Function Module / BAPI.
- [Advanced Settings](#advanced-settings) (5) define how data is comitted to and from SAP.
- [Function Module Interface Parameters](#function-module-interface-parameters) (6) define what data is comitted to and from SAP.

### Function Module

The name and description of the selected Function Module or BAPI is displayed in the **Function Module** section.<br>
To select a different source file, click **Select** in the upper right corner of the section.

### Advanced Settings

#### Commits Transaction

If this option is active, the funtion module "BAPI_TRANSACTION_COMMIT" is called after processing the selected Function Module / BAPI. 
Some SAP Function Modules (e.g., BAPI_PO_CREATE) require this commit function to successfully update data in the database.

### Function Module Interface Parameters

In the *Function Module Interface Parameters* section all parameters of the selected Function Module / BAPI are displayed.
Function Modules / BAPIs can have up to four parameter types: [Import](#import-parameters), [Export](#export-parameters), [Changing](#changing-parameters) and [Table](#table-parameters).

### Import Parameters
Import parameters represent the input values sent from the client to SAP. In the tab **Import** you can define import parameters.
 
Select input parameters in the column **Input Mode**:
- Items set to *Supplied by Caller* become available as parameters in the request body of the service and can be filled at runtime.
- Items that are left on *Default (defined in SAP)* use the default values from SAP.

![BAPI export parameters](/img/content/yunio/BAPI-input.png){:class="img-responsive"}

{: .box-note }
**Note:** When parameterzing the import parameters of the service, make sure the input matches the data type of the parameters.<br>

### Export Parameters
Export parameters represent the output values sent from SAP back to the client after the execution of a Function Module.
In the tab **Export** you can select the items you want to add to the output of the Function Module / BAPI: 
- To add an item to the output of the Function Module / BAPI, mark the checkbox on the right.<br>
![BAPI export parameters](/img/content/yunio/BAPI-output.png){:class="img-responsive"}

### Changing Parameters

Changing parameters represent parameters that can be used for input and output. In the tab **Changing** you can define the changing parameters.

### Table Parameters

Table parameters are parameters presented in a table structure consisting of multiple rows. Tables can be used for input and output.
In the tab **Tables** you can define table parameters for importing and exporting data into and from an SAP Function Module or BAPI.

**Tables as input parameters:**<br>
- Items set to *Supplied by Caller* become available as parameters in the request body of the service and can be filled at runtime.
- Items that are left on *Default (defined in SAP)* use the default values from SAP.

**Tables as output parameters**<br>
- To add an item to the output of the Function Module / BAPI, mark the checkbox on the right.<br>
![BAPI table](/img/content/yunio/BAPI-table.png){:class="img-responsive"}

*****
#### Related Links
- [KB: Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector)
- [KB: Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman)