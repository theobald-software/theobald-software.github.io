---
ref: xtract-universal-10
layout: page
title: Table Join
description: Table Join
product: xtract-universal
parent: xtract-universal
childidentifier: table-join
permalink: /:collection/:path
weight: 10
lang: en_GB
---

{: .box-warning }
**Warning! Obsolete component** 
As of [Xtract Universal Version 4.0](https://kb.theobald-software.com/release-notes/XtractUniversal-4.0.0.html), the Table Join component is obsolete.<br>
Use the table join functionality of the newer [Table Component](./table/table-join).

The Table Join component allows to join many tables (and views) on the SAP side and to extract the result.  
Possible scenarions are joining data from header and position tables or from attribute and text tables.  
The correspondent SQL statement is generated and executed on the SAP server.  
The componente provides additional features as the definition of aggregate functions, WHERE and HAVING clause. 

It is required to install a [custom function module](./sap-customizing/custom-function-module-for-table-extraction) on the SAP server to be able to use this component.  

{: .box-note }
**Note:** Cluster and pool tables are not supported by the Table Join component, but they can be extracted using the table component. 


The following section describes the functions of the Table Join Component of older Xtract Universal versions. <br>
Basic Xtract Universal the knowledge is required to understand the following sections. <br>
To get information on the basics of Xtract Universal, refer to [Getting started with table](./getting-started-table/). <br>


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}