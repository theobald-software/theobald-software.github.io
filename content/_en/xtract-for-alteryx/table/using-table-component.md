---
ref: xfa-table-01
layout: page
title: Using Table component
description: Using Table component
product: xtract-for-alteryx
parent: table
permalink: /:collection/:path
weight: 1
lang: en_GB
---

The Table component is used to extract data directly from tables and views. <br>
When extracting from a single data source, you could also extract data from cluster and pool tables. <br>
Click New Extraction. Then click Add. <br>.
In the Table search field, enter the name of a table or a view. 
Alternatively, you can search in the Description search field in the descriptions of the tables and views.<br> 
Now select the desired object and confirm with OK.<br>. 


### Selecting Fields 
In the main dialog you can see the name of the selected object on the left side.<br>
If you click on it, you will see all available fields in the main dialog on the right side. <br> 
With the button Select All / Deselect All you can select or deselect all fields. <br>
To select individual fields, click the corresponding checkbox. <br>
Via the search field you can search for the name or description of a field.<br>


### Joins
To join several tables, please check the table join section. <br> 

### Where Clause
In this tab you can define the Where-condition.<br> 
Note that fields must be defined in the following notation [TableName]~[FieldName], e.g. KNA1~LAND1 = 'US'.


### Preview 
On the lower side you see the output table. Clicking Load Preview Data fills the output table with data from the SAP System.
