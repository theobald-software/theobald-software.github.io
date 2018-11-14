---
layout: page
title: Table Join
description: Table Join
product: board-connector
parent: board-connector
childidentifier: table-join
permalink: /:collection/:path
weight: 8
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=tablejoin
---

The Table Join component allows to join many tables (and views) on the SAP side and to extract the result.<br>  
Possible scenarions are joining data from header and position tables or from attribute and text tables. <br> 
The correspondent SQL statement will be generated and executed on the SAP server.  <br>
The componente provides additional features as the definition of aggregate functions, where and having conditions. 

It is required to install a custom funktion module on the SAP server to be able to use this component.  

*Note*: Cluster and pool tables are not supported by the Table Join component, but they can be extracted using the table component. 

**Caution!** Please note that this chapter only describes the use of the Table Join Component. For all other basics please refer to [Step I: Define a Table Extraction](./getting-started-table/step1-define-table-extraction) . For this chapter the knowledge about the basic usage of the BOARD Connector is assumed!

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
