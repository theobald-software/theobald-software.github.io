---
ref: xtract-for-alteryx-09
layout: page
title: Table
description: Table
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: table
permalink: /:collection/:path
weight: 9
lang: en_GB
progressstate: 5
---

### About the Table Component
The Table component can be used to extract content from SAP tables and views and process it in Alteryx.
The Table component is also used to join several tables on the SAP side, see [Table Joins](./table/table-joins).<br> 

Table component supports the following table types:
- Transparent tables
- Pool tables
- Cluster tables

For an introduction to the component and its basic functions, see [Getting Started with Xtract for Alteryx](./getting-started).

{: .box-note }
**Note:** when extracting tables from SAP you may encounter several **restrictions** when using the SAP standard function module (RFC_READ_TABLE).<br>
To avoid possible restrictions, you can use the Theobald Software custom function module *Z_THEO_READ_TABLE* on your SAP system. 

See further information on possible restrictions and on installing the [custom function module](./sap-customizing#rfc_read_table-restrictions).

{: .box-note }
**Note:** The Table component is generally used for full load. For incremental data extraction from tables and views, you can define a WHERE-clause on specific fields e.g., time stamp. 

{: .box-tip }
**Tip:** ODP component is a more convenient option for incremental extraction e.g., using [extractors](./odp/odp-extractors).

### To Use Table Component

1. Drag & drop "Xtract Table" to your Alteryx workflow.
2. Select an SAP connection, navigate to **Selected Extraction** and click **[Edit]**. The main window of the Table component opens.

The majority of the functions of the component can be accessed using the main window.

### Table Main Window - Functions Overview
The following sections give an overview over the functions that can be accessed over the main component window.
![Table Extractor](/img/content/xfa/xfa-table-extractor.png){:class="img-responsive"}

The following sections contain details on the component:
{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}