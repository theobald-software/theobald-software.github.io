---
ref: xtract-for-alteryx-09
layout: page
title: Xtract Table
description: Table
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: table
permalink: /:collection/:path
weight: 9
lang: en_GB
progressstate: 5
---

The following section describes the functions of the Table component of Xtract for Alteryx.<br>
The Table component can be used to extract content from SAP tables and views and process it in Alteryx.
The Table component is also used to join several tables on the SAP side, see [Table Joins](./table/table-joins).<br> 

Table component supports the following table types:
- Transparent tables
- Pool tables
- Cluster tables

{: .box-warning}
**Warning!** **Missing Authorization**
To use the Table component, access to the designated authority objects (RFC) in SAP must be available.
For more information, see the knowledge base article on [SAP User Rights: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).


{: .box-note }
**Note:** when extracting tables from SAP you may encounter several **restrictions** when using the SAP standard function module (RFC_READ_TABLE).
To avoid possible restrictions, you can use the Theobald Software custom function module *Z_THEO_READ_TABLE* on your SAP system. 
For further information on possible restrictions and on installing the custom function module, see [Custom function module for Table](./sap-customizing#rfc_read_table-restrictions).

{: .box-tip }
**Tip:** The Table component is generally used for full load. 
For incremental data extraction from tables and views, you can define a WHERE-clause on specific fields e.g., timestamp.
The ODP component is a more convenient option for incremental extraction e.g., using [extractors](./odp/odp-extractors).

### How to use the Xtract Table component

1. Drag & drop the "Xtract Table" component to your Alteryx workflow.
2. Select an SAP connection, navigate to **Selected Extraction** and click **[Edit]**. The main window of the component opens.

The majority of the functions of the component can be accessed using the main window.

{: .box-tip }
**Tip:** To get information on the basics of Xtract for Alteryx, refer to [Getting Started with Xtract for Alteryx](./getting-started).


### Functions overview
The following sections give an overview over the functions that can be accessed over the main component window.
![Table Extractor](/img/content/xfa/xfa-table-extractor.png){:class="img-responsive"}

More information on working with the Xtract Table component is provided in the following sections.

---

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}