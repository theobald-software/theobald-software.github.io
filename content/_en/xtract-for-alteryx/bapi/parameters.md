---
ref: xfa-bapi-param
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
**Note:** See section [Setting Input and Output Values](./input-output-values) for more details.

#### Structures

A structure is a component of data objects of any data type with a set of keys. Each key has a single associated value.

Structures are named as follows, depending on the data object type:
- Flat structures contain components with elementary data types (e.g., char, integer, float) and assume scalar values.
- Nested structures contain at least one substructure. All components and sub-components are flat.
- Deep structures contain at least one deep component, such as table, at any nesting level.

![Bapi-Structures](/img/content/xfa/BAPI-structure.png){:class="img-responsive"}


### Imports
**Imports** represent the input values sent from the client to SAP. Within the tab **Imports** you can define import parameters that can be presented as scalar values or structures. 
![BAPI import parameters](/img/content/xfa/bapi_import1.png){:class="img-responsive"}
To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>


### Exports
**Exports** represent the output values sent from SAP back to the client after execution of a function module.
Within the tab **Exports** you can define export parameters that can be presented as scalar values or structures. You can select an **Export** for an output by marking the checkbox in the output column. 
![BAPI export parameters](/img/content/xfa/bapi_export.png){:class="img-responsive"}
To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>

 
### Changings
**Changings** represents parameters that can be used for input and output. 
Within the tab **Changing** you can define import and export parameters. Changing combines importing and exporting functions.


### Tables

**Tables** contain parameters in a table structure consisting of multiple rows. Tables can be used for input and output.

Within the tab **Tables** you can define table parameters for importing and exporting into and from an SAP BAPI. Tables, in this case, represent a structure of multiple rows of the same data type.
![BAPI table](/img/content/xfa/bapi_table.png){:class="img-responsive"}
To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>

#### Navigating in the Tables tab

{: .box-note }
**Note:** Only **five** tables are available for parallel exporting.

1. Mark the checkbox in the output column (1) to determine the table used for output.<br> 
2. Drop-down lists (2) in the column value show the defined tables in your Alteryx workflow that can be used as an input table (see [Setting an input value](./input-output-values)). <br>
3. Click **[X]** (3) to clear the values. <br> 
4. Click **Search** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon) (4) to display the metadata of the selected table including the name and the data type of all fields.
![BAPI meta-data](/img/content/xfa/bapi_table_sap_fields.png){:class="img-responsive"}
