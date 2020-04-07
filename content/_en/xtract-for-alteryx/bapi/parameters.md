---
ref: xfa-bapi-scalar
layout: page
title: BAPI Parameters
description: BAPI Parameters
product: xtract-for-alteryx
parent: bapi
permalink: /:collection/:path
weight: 2
lang: en_GB
---
### Parameter Types
There are four parameter types of BAPIs: 
- Imports
- Exports
- Changings
- Tables

![BAPI-Parameters](/img/content/xfa/BAPI-Parameters.png){:class="img-responsive"}

All value fields marked with * are required fields and must be filled.

Each Import, Export and Changings parameter can have one of the following representations:
- a scalar field (e.g., characters, date, time, number, amount etc.)
- a structure consisting of several components
- a table - an array of structures of the same type

{: .box-note }
**Note:** setting input values differs for scalar fields, structures and tables. See ....#####

#### Structures

A structure is a component of data objects of any data type with a set of keys. Each key has a single associated value.

Structures are named as follows, depending on the data object type:
- Flat structures contain components with elementary data types (e.g., char, integer, float) and assume scalar values.
- Nested structures contain at least one substructure. All components and sub-components are flat.
- Deep structures contain at least one deep component, such as table, at any nesting level.
![Bapi-Structures](/img/content/xfa/BAPI-Structures.png){:class="img-responsive"}
<!--neues Bild mit Metadaten von Structure-->

### Imports
**Imports** represent the input values sent from the client to SAP. Within the tab **Imports** you can define import parameters that can be presented as scalar values or structures.<br>
![BAPI import parameters](/img/content/xfa/bapi_import1.png){:class="img-responsive"}<br>
To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>


### Exports
**Exports** represent the output values sent from SAP back to the client after execution of a function module.
Within the tab **Exports** you can define export parameters that can be presented as scalar values or structures. You can select an **Export** for an output by marking the checkbox in the output column.<br>
![BAPI export parameters](/img/content/xfa/bapi_export.png){:class="img-responsive"}<br>
To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>

 
### Changings
**Changings** represents parameters that can be used for input and output. 
Within the tab **Changing** you can define import and export parameters. Changing combines importing and exporting functions.



### Tables

**Tables** contain parameters in a table structure consisting of multiple rows. Tables can be used for input and output.

Within the tab **Tables** you can define table parameters for importing and exporting into and from an SAP BAPI. Tables, in this case, represent a structure of multiple rows of the same data type.
![BAPI table](/img/content/xfa/bapi_table.png){:class="img-responsive"}<br>
To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>

Marking the checkbox in the output column (1) determines the table used for output.<br> 

{: .box-note }
**Note:** Only **five** tables are available for parallel exporting.


Drop-down lists (2) in the column value show the defined tables in your Alteryx workflow that can be used as an input table (see [Setting an input value]()).

To clear the values, click **[X]**. 
Click **Search** (glasses symbol) (3) to display the metadata of the selected table including the name and the data type of all fields.



### Setting an input value

#### Scalar field
Scalar fields for inputs are usually set using the following two options:
- a static constant value (e.g., 0987654321) <!--bild einfügen-->
- a dynamic value set at run-time using a parameter (see [Edit Parameters](./parameters#edit-parameters)).

#### Structure 
When using a structure, a value for each scalar field can be set similarly to scalar field. Setting a value or a parameter for the whole structure is not possible.

When a structure is available, click **[Edit Structures]** to assign structure elements (i.e. fields).
![BAPI table fields](/img/content/xfa/bapi_table_sap_fields.png){:class="img-responsive"}<br>

#### Table
Only a table can be used as input for a table parameter. Fields in the input table are mapped to fields in the SAP table with the same name. 
Values in the fields are expected to have a compatible data type. Fields with names that cannot be mapped, are ignored.
Drop-down lists (2) in the column value show the defined tables in your Alteryx workflow that can be used as an input table.

{: .box-warning }
**Warning!** If the data types of the input table values are not compatible with the SAP tables and the value cannot be converted, an error occurs. 


### Edit Parameters
The function **Edit Parameters** allows setting a dynamic value for an added parameter at run-time.
Use the function **Edit Parameters** to define parameters that can be used as placeholders for data selections. These placeholders need to be populated with actual values at run-time.

1. To display editing function for the parameters, click **Edit Parameters**. The window "Edit Runtime Parameters" opens.<br> 
![BAPI add parameters](/img/content/xfa/bapi-add-parameter.png){:class="img-responsive"}<br> 
2. Click **[Add]** to create a new parameter. <br>
**Tip:** Parameter0..-n is the default naming for the added parameters. You can enter a name of your choice.
3. Click on the drop-down menu and assign one of the following data types to a parameter. 
- String: This data type can be used for any type of SAP selection field.
- Integer: This data type can be used for numeric SAP selection fields.
- Flag: This data type can only be used for SAP selection fields, which require an 'X'&nbsp;(true) or a blank ''&nbsp;(false) as input value. <br> The data types of the parameters must correspond with or be convertible to SAP data types. 
4. Click **[OK]** to confirm.
5. If there are defined parameters, input field icon switches to the parameter icon. <br>
Clicking the icons switches the option between entering static input values and using defined dynamic parameters.<br>
![BAPI select parameters](/img/content/xfa/bapi-select-parameters.png){:class="img-responsive"}<br> 
