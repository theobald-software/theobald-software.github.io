---
ref: board-connector-08
layout: page
title: Table Join
description: Table Join
product: board-connector
parent: board-connector
childidentifier: table-join
permalink: /:collection/:path
weight: 8
lang: en_GB
---


The Table Join component allows to join many tables (and views) on the SAP side and to extract the result.  
Possible scenarions are joining data from header and position tables or from attribute and text tables.  
The correspondent SQL statement is generated and executed on the SAP server.  
The componente provides additional features as the definition of aggregate functions, WHERE and HAVING clause. 

It is required to install a [custom function module](./sap-customizing/custom-function-module-for-table-extraction) on the SAP server to be able to use this component.  

{: .box-note }
**Note:** Cluster and pool tables are not supported by the Table Join component, but they can be extracted using the table component. 


The following section describes the functions of the Table Join Component of older BOARD Connector versions. <br>
Basic BOARD Connector the knowledge is required to understand the following sections. <br>

{: .box-tip }
**Tip:** To get information on the basics of BOARD Connector, refer to [Getting started with table](./getting-started-table). <br>

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
