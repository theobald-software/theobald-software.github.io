---
ref: xfa-bapi-input-output
layout: page
title: Input and Output Values
description: Input and output values
product: xtract-for-alteryx
parent: bapi
permalink: /:collection/:path
weight: 3
lang: en_GB
---

Each Import, Export and Changings parameter can have one of the following representations:
- a scalar field (e.g., characters, date, time, number, amount etc.)
- a structure consisting of several components
- a table - an array of structures of the same type

### Setting an input value

#### Scalar field
Scalar fields for inputs are usually set using the following two options:
- a static constant value (e.g., 1141) 
- a dynamic value set at run-time using a parameter (see [Edit Parameters](./parameters#edit-parameters)).
![BAPI static constant value](/img/content/xfa/BAPI-scalar.png){:class="img-responsive"}


#### Structure 
When using a structure, a value for each scalar field can be set similarly to scalar field. Setting a value or a parameter for the whole structure is not possible.

When a structure is available, click **[Edit Structures]** to assign structure elements (i.e. fields).
![BAPI table fields](/img/content/xfa/BAPI-Structures.png){:class="img-responsive"}

#### Table
Only a table can be used as input for a table parameter. In the tab *Tables* the available input tables are listed (2) in the column **Value**.
![BAPI table](/img/content/xfa/bapi_table.png){:class="img-responsive"}

{: .box-warning }
**Warning!** If the data types of the input table values are not compatible with the SAP tables and the value cannot be converted, an error occurs. 

Fields in the input table are mapped to fields in the SAP table with the identical name. 
Values in the table fields must be of a compatible data type. Fields with names that cannot be mapped, are ignored.

### Edit Parameters
The function **[Edit Parameters]** allows setting a dynamic value for an added parameter at run-time.
Use the function **[Edit Parameters]** to define parameters that can be used as placeholders for data selections. These placeholders need to be populated with actual values at run-time.

1. To display editing function for the parameters, click **[Edit Parameters]**. The window "Edit Runtime Parameters" opens. 
![BAPI add parameters](/img/content/xfa/bapi-add-parameter.png){:class="img-responsive"} 
2. Click **[Add]** to create a new parameter. <br>
**Tip:** Parameter0..-n is the default naming for the added parameters. You can enter a name of your choice.
3. Click on the drop-down menu and assign one of the following data types to a parameter. 
- *String* - This data type can be used for any type of SAP selection field.
- *Integer* - This data type can be used for numeric SAP selection fields.
- *Flag* - This data type can only be used for SAP selection fields, which require an 'X'&nbsp;(true) or a blank ''&nbsp;(false) as input value. <br> The data types of the parameters must correspond with or be convertible to SAP data types. 
4. Click **[OK]** to confirm.
5. If there are defined parameters, input field icon switches to the parameter icon. <br>
Clicking the icons switches the option between entering static input values and using defined dynamic parameters. 
![BAPI select parameters](/img/content/xfa/bapi-select-parameters.png){:class="img-responsive"} 

