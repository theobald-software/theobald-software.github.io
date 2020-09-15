---
ref: xtract-for-alteryx-03
layout: page
title: Table
description: Table
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: table
permalink: /:collection/:path
weight: 3
lang: en_GB
---

The Xtract for Alteryx Table data source is used to extract data from SAP tables and views and process it in Alteryx in the usual way. <br> 

The table component is also used to join several tables (and views) on the SAP side.<br> 
Possible scenarios would be to join tables with header and item data (for example, a purchase order or invoice) or tables with master data and texts (for example, a material). <br> 
The corresponding SQL command is generated dynamically and executed on the SAP server. <br> 

The component can use standard SAP function modules to extract data from a single table and view. <br> 
However, we offer our own function module, which extracts the data more efficiently and solves many problems of the SAP standard function modules. <br>
Joining tables is only possible with our own function module. <br> 

So if you'd like 
- want to have better performance when extracting the data, or 
- Extract large tables and views, which is impossible with the standard function module, or 
- have further restrictions with the SAP standard function module (data type, table type, and so on) or 
- Want to join several tables
then you have to install the function module supplied by us in the SAP system and use it. 

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}