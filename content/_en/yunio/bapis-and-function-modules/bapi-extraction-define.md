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
![Look-Up-Function-Module](/img/content/Look-Up-Function-Module.png){:class="img-responsive"}
3. Click **[Search]** (2) to display the search results.
4. Select a source file from the list of available search results (3). The extraction settings of the Function Module/BAPI open automatically.<br>

### Settings

The *Function Module* menu consists of the following subsections:

![yunIO-table](/img/content/yunio/table-settings.png){:class="img-responsive" width="750px"}

- [Function Module](#function-module) (4) displays the name and description of the selected Function Module/BAPI.
- [Advanced Settings](#advanced-settings) (5) define how data is comitted to and from SAP.
- [Function Module Interface Parameters](#function-module-interface-parameters) (6) define what data is comitted to and from SAP.

### Function Module (1)

The name and description of the selected Function Module/BAPI is displayed in the **Function Module** section.<br>
To select a different source file, click **Select** in the upper right corner of the section.

### Advances Settings (2)

#### Commits Transactions
If this option is active, a funtion module for transaction commit is called after processing the selected Function Module/BAPI e.g., *BAPI BAPI_TRANSACTION_COMMIT*. 
Some SAP function modules require this commit function to successfully update data in the database.

### Function Module Interface Parameters (3)

In the *Function Module Interface Parameters* section all parameters of the selected Function Module/BAPI are displayed.
Function Modules/BAPIs can have up to four parameter types: Imports, Exports, Changings and Tables.

#### Defining Import, Export, Changings and Tables

{: .box-note }
**Note:** Nested parameters are supported, e.g., tables in tables, structures in tables and structures in structures.<br>

1. Add input parameters to send to SAP in **Imports**, see [Import Parameters](./parameters#import-parameters). <br>
You can enter scalar values (1) or structures (2). You can also use dynamic runtime parameters, see [Runtime Parameters](./edit-runtime-parameters).<br>
Parameters defined as mandatory in SAP (transaction SE37) are marked with a red *. <br>
![Define-Bapi-Data-Source](/img/content/XU-BAPI-Parameters.png){:class="img-responsive"}
2. Define the output to receive from SAP in **Exports**, see [Export Parameters](./parameters#export-parameters). <br>
Select output by activating the checkbox next to the items.<br>
![BAPI export parameters](/img/content/Bapi-Exports-Edit.png){:class="img-responsive"}
3. Optional: If available you can define input and output parameters in **Changings**, see [Changings Parameters](./parameters#changings-parameters).
4. Add tables to the output or add table parameters as input in **Tables**, see [Table Parameters](./parameters#table-parameters). <br>
Check the names and data types of the table's fields by clicking the **[glasses symbol]** under **Type** (1).
Select output data by activating the checkbox next to the items (2).
Edit tables via the **[pen icon]** under **Values** (3).
![BAPI table](/img/content/Bapi-Table-Type.png){:class="img-responsive"}
5. Click **[OK]** to confirm.

