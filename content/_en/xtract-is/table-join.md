---
ref: xtract-is-06
layout: page
title: Xtract IS Table Join
description: Xtract IS Table Join
product: xtract-is
parent: xtract-is
childidentifier: join-table
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=tablejoin
---

{: .box-note }
**Note:** As of Xtract IS Version 5.0, the Table Join component is obsolete. Use the table join functionality of the new [table component](./xtract-is-table).

The Table Join component allows to join several tables (and views) on the SAP side and to extract the result.  

Possible scenarions are joining data from header and position tables or from attribute and text tables. 
 
The correspondent SQL statement will be generated and executed on the SAP server.  

The componente provides additional features as the definition of aggregate functions, where and having conditions. 

It is required to install a [custom function module](https://kb.theobald-software.com/sap/installation-of-the-function-module-z_xtract_is_table_join) on the SAP server to be able to use this component.  

<div class="alert alert-info">
  <i class="fas fa-info-circle"></i>
  <strong>Note:</strong> Cluster and pool tables are not supported by the Table Join component, but they can be extracted using the table component. 
</div>

### SSIS Version

The component Table Join requires the SQL Server 2012 Integration Services (SSIS) version or higher. Older versions are not supported.


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
