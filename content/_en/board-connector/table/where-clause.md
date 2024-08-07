---
ref: bc-table-04
layout: page
title: WHERE Clause
description: WHERE Clause
product: board-connector
parent: table
permalink: /:collection/:path
weight: 4
lang: en_GB
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Board Connector.<br>
Make sure to use the documentation within the new [Board Connector HelpCenter](https://helpcenter.theobald-software.com/board-connector/documentation/introduction/).

A WHERE clause can be used to filter table records, see [SAP ABAP Documentation: SELECT-WHERE](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abapwhere.htm).

<!--When defining a WHERE clause, you may want to adjust the settings. 
An extraction has two types of settings: the [*Extraction Settings*](../extraction-settings) include settings that affect only the respective extraction type, while [*General Settings*](../getting-started/general-settings) are the same for all extraction types. Additionally, you can adjust [*Runtime parameters*](#runtime-parameters-in-the-where-clause-editor).

![Extraction-Settings](/img/content/xu/Table-Extraction-Where-Clause.png){:class="img-responsive"} -->

{% include _content/en/tables/where-clause.md %}
{% include _content/en/tables/where-clause-syntax.md%}
{% include _content/en/tables/where-clause-editor.md%}

### Runtime Parameters
You can create and assign [runtime parameters](./edit-runtime-parameters), when using WHERE Clause.

**** 
#### Related Links
- [Knowledge Base Article: Delta Table Extraction](https://kb.theobald-software.com/tables/delta-table-extraction)
- [Knowledge Base Article: Change Data Capture with CDHDR](https://kb.theobald-software.com/tables/change-data-capture-with-cdhdr)
- [Knowledge Base Article: Working with Lists in the WHERE-Clause Editor](https://kb.theobald-software.com/tables/where-clause-editor-lists)
- [Knowledge Base Article: LIKE Operand in WHERE Clauses](https://kb.theobald-software.com/tables/working-with-like-operand-where-clause)