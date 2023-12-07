---
ref: xu-table-03
layout: page
title: WHERE Clause
description: WHERE Clause
product: xtract-universal
parent: table
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=where-clause
---
A WHERE clause can be used to filter table records, see [SAP ABAP Documentation: SELECT-WHERE](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abapwhere.htm).

<!---When defining a WHERE clause, you may want to adjust the settings. 

An extraction has two types of settings: 
- [*Extraction Settings*](../table/extraction-settings) include settings that affect only the respective extraction type
- [*General Settings*](../table/general-settings) are the same for all extraction types.

 Additionally, you can adjust [*Runtime parameters*](#runtime-parameters-in-the-where-clause-editor) in the WHERE Clause editor.

![Extraction-Settings](/img/content/xu/Table-Extraction-Where-Clause.png){:class="img-responsive"} --->

{% include _content/en/tables/where-clause.md %}
{% include _content/en/tables/where-clause-syntax.md%}
{% include _content/en/tables/where-clause-editor.md%}

### Runtime Parameters in the WHERE Clause Editor
You can create and assign [runtime parameters](../table/runtime-parameters), when using WHERE Clause.


**** 
#### Related Links
- [Knowledge Base Article: Delta Table Extraction](https://kb.theobald-software.com/tables/delta-table-extraction)
- [Knowledge Base Article: Change Data Capture with CDHDR](https://kb.theobald-software.com/tables/change-data-capture-with-cdhdr)
- [Knowledge Base Article: Working with Lists in the WHERE-Clause Editor](https://kb.theobald-software.com/tables/where-clause-editor-lists)
- [Knowledge Base Article: LIKE Operand in WHERE Clauses](https://kb.theobald-software.com/tables/working-with-like-operand-where-clause)