---
ref: bc-table-join-02
layout: page
title: Define Relations
description: Define Relations
product: board-connector
parent: table-join
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=define-relations
---

The field MATNR (material number) is a key field in both tables. Therefore a join relation has been automatically generated based on the SAP metadata.<br>
When the mouse cursor is over the join rectangle, a tooltip will show the field relations.

![tj-2-tables-where](/img/content/tj-2-tables-where.jpg){:class="img-responsive"}

Double-click the join rectangle to open the Table Join Dialog. <br>
In this case the field MATNR of MARA is linked with the field MATNR in MAKT.

![tj-relation](/img/content/tj-relation.jpg){:class="img-responsive"}

To add further relation click Add and select the correspondent fields ob both tables. 

**Join Type**

*INNER JOIN*<br>
is the default join type.
When the join-predicate is satisfied, column values for each matched pair of rows of both tables combined into a result row.

In our example all rows from MARA and MAKT will be combined, if the have the same value in the field MATNR. <br> 
But material attributes without descriptions or material descriptions without attributes will not exist in the result. 

*(Left) Outer JOIN*<br>
The result of a (Left) Outer Join contains all records of the left table, even if the join-condition does not find any matching record in the right table.<br>
A (Left) Outer Join returns all the values from an inner join plus all values in the left table that do not match to the right table, including rows with NULL (empty) values in the link field.

In our example all material attribute rows from left table MARA will be in the result, even when they have net been assigned to a description in the table MAKT,
contrary to the inner-join example above, where unassigned material attributes were excluded from the result
 

SAP Help: [Inner Join und Outer Join](http://help.sap.com/saphelp_erp60_sp/helpdata/en/cf/21ec77446011d189700000e8322d00/content.htm)

