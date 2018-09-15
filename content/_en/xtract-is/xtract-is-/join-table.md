---
layout: page
title: Xtract IS Table Join
description: Xtract IS Table Join
product: xtract-is
parent: xtract-is-
childidentifier: join-table
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=tablejoin
---

The Table Join component allows to join many tables (and views) on the SAP side and to extract the result.  
Possible scenarions are joining data from header and position tables or from attribute and text tables.  
The correspondent SQL statement will be generated and executed on the SAP server.  
The componente provides additional features as the definition of aggregate functions, where and having conditions. 

It is required to install a custom funktion module on the SAP server to be able to use this component.  

*Note*: Cluster and pool tables are not supported by the Table Join component, but they can be extracted using the table component. 
 

**SSIS Version**

The component Table Join requires the SQL Server 2012 Integration Services (SSIS) version or higher. Older versions are not supported.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}