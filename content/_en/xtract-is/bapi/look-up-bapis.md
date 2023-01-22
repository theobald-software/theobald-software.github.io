---
ref: xi-bapi-01
layout: page
title: Defining a BAPI Extraction
description: Look Up BAPIs
product: xtract-is
parent: bapi
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=look-up-bapis
---
The following section shows how to use the BAPI Component.

### Look up a BAPI

1. Click **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon) in the main window of the component.
![BAPI-Editor](/img/content/BAPI-Editor.png){:class="img-responsive"}
 The dialog “Function Module Lookup” opens.
2. Enter the name of a BAPI or function module in the **Function Name** field(1). You can use wildcards (*) if needed.<br>
Alternatively you can search for function groups.
![Look-Up-Function-Module](/img/content/Look-Up-Function-Module.png){:class="img-responsive"}
3. Click the **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon)(2) and select an item from the displayed list (3).
4. Click **[OK]** (4) to confirm.


### Define Import, Export, Changings and Tables

In the main BAPI Component window all parameters of the selected BAPI are displayed.
BAPIs can have up to four parameter types: Imports, Exports, Changings and Tables.

{: .box-note }
**Note:** You can use of nested parameters, e.g., tables in tables, structures in tables and structures in structures.<br>

1. Add input parameters to send to SAP in **Imports**, see [Import Parameters](./parameters#import-parameters). <br>
You can enter scalar values (1) or structures (2). You can also select SSIS variables.<br>
![BAPI import parameters](/img/content/xis/XtractBAPI_ImportParams.png){:class="img-responsive"}
2. Define the output to receive from SAP in **Eports**, see [Export Parameters](./parameters#export-parameters). <br>
Select output by activating the checkbox next to the items.<br>
![BAPI export parameters](/img/content/xis/XtractBAPI_ExportParams.png){:class="img-responsive"}
3. Optional: If available you can define input and output parameters in **Changings**, see [Changings Parameters](./parameters#changings-parameters).
4. Add tables to the output or add table parameters as input in **Tables**, see [Table Parameters](./parameters#table-parameters). <br>
Click the ![glasses](/img/content/icons/glasses.png) icon to check the names and data types of the table fields (1).<br>
Activate the checkbox next to the items to add items to the output (2).<br>
Click the ![pen](/img/content/icons/pen.png) icon to edit tables (3).<br>
![BAPI table](/img/content/xis/XtractBAPI_TableParams.png){:class="img-responsive"}
5. Click **[OK]** to confirm.

****
#### Related Links
- [How to Post Data in SAP with Xtract BAPI](https://kb.theobald-software.com/xtract-is/how-to-post-data-in-sap)
- [Uploading CATS data by using Xtract IS BAPI](https://kb.theobald-software.com/xtract-is/uploading-cats-data-by-using-xtract-is-bapi)