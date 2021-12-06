---
ref: yunio-bapis-function-01
layout: page
title: Define a BAPI Extraction
description: Define a BAPI Extraction
product: yunio
parent: bapis-and-function-modules
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=define-a-bapi-extraction
---

The following section shows how to use the Function Module component.

### Look up a BAPI

1. When adding a new *Service*, select *Function module* as the **Extraction Type** and click **[Save and edit]** to open the *Search Function Module* menu.
2. Enter the name of a BAPI or function module in the **Function Name** field(1) or search for function groups. You can use wildcards (*) if needed.<br>
![Look-Up-Function-Module](/img/content/yunio/search-bapi.png){:class="img-responsive"}
3. Click **[Search]** (2) to display the search results.
4. Select a source file from the list of available search results (3). The settings of the Function Module/BAPI open automatically.<br>

The settings for *Function Module* consist of the following subsections:

![yunIO-table](/img/content/yunio/bapi-settings.png){:class="img-responsive"}

- [Function Module](#function-module) (4) displays the name and description of the selected Function Module/BAPI.
- [Advanced Settings](#advanced-settings) (5) define how data is comitted to and from SAP.
- [Function Module Interface Parameters](#function-module-interface-parameters) (6) define what data is comitted to and from SAP.

### Function Module

The name and description of the selected Function Module/BAPI is displayed in the **Function Module** section.<br>
To select a different source file, click **Select** in the upper right corner of the section.

### Advances Settings

#### Commits Transactions
If this option is active, a funtion module for transaction commit is called after processing the selected Function Module/BAPI e.g., *BAPI BAPI_TRANSACTION_COMMIT*. 
Some SAP function modules require this commit function to successfully update data in the database.

### Function Module Interface Parameters

In the *Function Module Interface Parameters* section all parameters of the selected Function Module/BAPI are displayed.
Function Modules/BAPIs can have up to four parameter types: [Import](#import-parameters), [Export](#export-parameters), [Changing](#changing-parameters) and [Table](#table-parameters).

### Import Parameters
Import parameters represent the input values sent from the client to SAP. In the tab **Imports** you can define import parameters.
 
Select input parameters in the column **Input Mode**:
- Items set to *Parameterized* become available as parameters in the request body of the service and can be filled at runtime.
- Items that are left on *Default* use the default values from SAP.

{: .box-note }
**Note:** When parameterzing the import parameters of the service, make sure the input matches the data type of the parameters.<br>

### Export Parameters
Export parameters represent the output values sent from SAP back to the client after the execution of a function module.
In the tab **Exports** you can select the items you want to add to the output of the Function Module/BAPI: 
- To add an item to the output of the Function Module/BAPI, mark the checkbox in the **Output** column.<br>
![BAPI export parameters](/img/content/Bapi-Exports-Edit.png){:class="img-responsive"}

### Changing Parameters

Changing parameters represent parameters that can be used for input and output. In the tab **Changing** you can define changing parameters.

### Table Parameters

Tables parameters are parameters presented in a table structure consisting of multiple rows. Tables can be used for input and output.
In the tab **Tables** you can define table parameters for importing and exporting into and from an SAP BAPI.

**Tables as input parameters:**<br>
- Set the **Input Mode** of the items you want to parameterize to *Parameterized*. 
The items become available in the request body of the service and can be filled at runtime.
- Items that are left on *Default* use the default values from SAP.

**Tables as output parameters**<br>
- To add an item to the output of the Function Module/BAPI, mark the checkbox in the **Output** column.<br>

![BAPI table](/img/content/Bapi-Table-Type.png){:class="img-responsive"}
