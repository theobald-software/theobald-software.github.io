---
ref: xi-bapi-02
layout: page
title: Parameterization
description: Parameters
product: xtract-is
parent: bapi
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=scalar-parameters
---

Each Import, Export, Changings and Tables parameter can have one of the following representations:

- A scalar field (e.g., characters, date, time, number, amount etc.).
- A structure consisting of several components.
- A table (tabular array of data) consisting of columns (data values of the same type) and rows (data records).


### Import Parameters
Import parameters represent the input values sent from the client to SAP. <br>
In the tab **Imports** you can define import parameters that can be presented as scalar values (1) or structures (2). 

![BAPI import parameters](/img/content/XU-BAPI-Parameters.png){:class="img-responsive"}

To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>

#### Add Scalar Parameters (1)

Use one of the following options to set scalar parameters:
- A static constant value ( ![static-value](/img/content/icons/runtime-parameters-static.png) icon or no icon).
- An SSIS variable / parameter ( ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) icon). This option is only available if the project contains SSIS variables.

Click the icon next to the input field to switch between static input values and SSIS variables / parameters.
When using variables, make sure the input matches the data type. Example:

![Assigning-SSIS-Variables](/img/content/xis/ssis-variables.gif){:class="img-responsive" style="border:1px solid black;"}

{: .box-note }
**Note:** Parameters that are predefined by SAP are displayed in a light grey font. <br>
To disable these parameters, activate the checkbox next to the parameter and leave the field empty. <br>

#### Add Structures as Parameters (2)

When using a structure, a value for each scalar field can be set similarly to a scalar field. 
Setting a single value or a parameter for the whole structure is not possible.

When a structure is available, you can assign structure elements (i.e. fields).<br>
1. Click ![pen](/img/content/icons/pen.png). The window "Edit Structures" opens.
2. Enter constant values ( ![static-value](/img/content/icons/runtime-parameters-static.png) icon or no icon) or assign SSIS variables / parameters ( ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) icon).
![BAPI import parameters](/img/content/BAPI-Edit-Structure.png){:class="img-responsive"}

### Export Parameters
Export parameters represent the output values sent from SAP back to the client after execution of a function module. <br>
In the tab **Exports** you can add scalar values, structures or tables to the output. 

#### Add Items to Output
Mark the checkbox in the output column to add an item to the output.<br>

![BAPI export parameters](/img/content/xis/XtractBAPI_ExportParams.png){:class="img-responsive"}

To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>

### Changing Parameters

Changing parameters represent parameters that can be used for input and output. <br>
In the tab **Changings** you can define changing parameters that can be presented as scalar values, structures or tables.

### Table Parameters

Tables parameters are parameters presented in a table structure consisting of multiple rows. Tables can be used for input and output.<br>
In the tab **Tables** you can define table parameters for importing and exporting into and from an SAP BAPI. 

To use the filtering function, enter text in the headers of the columns **Name** and **Description**.

{: .box-note }
**Note:** Only **5** tables are available for parallel exporting.

- Click ![glasses](/img/content/icons/glasses.png) to check the names and data types of the table fields.
- Activate the checkbox next to the items to add items to the output (2).
- Click ![pen](/img/content/icons/pen.png) to edit tables (3).

![BAPI table](/img/content/xis/XtractBAPI_TableParams.png){:class="img-responsive"}

### Access Metadata of Tables (1)
Click the ![glasses](/img/content/icons/glasses.png) icon to display the metadata of the selected table including the name and the data type of all fields. <br> 
If the function module was edited in SAP, you can refresh the data by clicking **Refresh metadata**<br>
![BAPI table metadata](/img/content/BAPI-Table-Metadata.png){:class="img-responsive"}

### Add Tables to Output (2)

Mark the checkbox in the output column to add a table to the output.<br> 
![BAPI table output](/img/content/BAPI-Table-Output.png){:class="img-responsive"}

### Edit Tables (3)

When using a structure, a value for each scalar field can be set similarly to a scalar field. 
Setting a single value or a parameter for the whole structure is not possible.

When a structure is available, you can assign structure elements (i.e. fields).<br>

 1. Click the ![pen](/img/content/icons/pen.png) icon to edit the table. The window "Edit Table Contents" opens.
 2. Click **[Add]** to add new set of parameters.<br>
 3. Enter values or parameters.<br>
When using variables, make sure the input matches the data type.
![BAPI edit table](/img/content/BAPI-Edit-Table-Contents.png){:class="img-responsive"}
4. Click **[Remove]** to delete a row.

### Mapping Input Tables

When connecting tables to the Xtract BAPI component, a data mapping is executed automatically. 

![BAPI table mapping](/img/content/ssis-write-xtractis-fuba-02.png){:class="img-responsive"}

To correctly map the data, the following requirements must be met:

- The column names of the input table must be the same as in the Xtract BAPI component.
- The data types in the input table must be the same as in the Xtract BAPI component.

Click on the ![glasses-icon](/img/content/icons/glasses.png) icon next to a table to look up column names and data types in the Xtract BAPI component.

{: .box-tip }
**Tip:** If the column names and / or datatypes of the input table and the Xtract BAPI table do not match, add a *Derived Column* component to convert the input data.

*****
#### Related Links
- [How to Post Data in SAP with Xtract BAPI](https://kb.theobald-software.com/xtract-is/how-to-post-data-in-sap)
- [Uploading CATS data by using Xtract IS BAPI](https://kb.theobald-software.com/xtract-is/uploading-cats-data-by-using-xtract-is-bapi)