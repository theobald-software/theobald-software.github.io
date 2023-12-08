---
ref: xfa-table-04
layout: page
title: WHERE Clause
description: WHERE Clause
product: xtract-for-alteryx
parent: table
permalink: /:collection/:path
weight: 4
lang: en_GB
---

A WHERE clause can be used to filter table records, see [SAP ABAP Documentation: SELECT-WHERE](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abapwhere.htm).

<!--- When defining a WHERE clause, you may want to adjust the following:
- [*Extraction Settings*](./extraction-settings). 
- [*Runtime parameters*](#runtime-parameters-in-the-where-clause-editor).--->

{% include _content/en/tables/where-clause.md %}
{% include _content/en/tables/where-clause-syntax.md%}
{% include _content/en/tables/where-clause-editor.md%}

### Runtime Parameters in the WHERE Clause Editor
You can create and assign [runtime parameters](../table/edit-runtime-parameters), when using WHERE Clause.

### Values at Runtime
Values can be passed during [runtime](./edit-runtime-parameters#how-to-pass-values-at-runtime).

**** 
#### Related Links
- [Delta Table Extraction](https://kb.theobald-software.com/tables/delta-table-extraction)
- [Change Data Capture with CDHDR](https://kb.theobald-software.com/tables/change-data-capture-with-cdhdr)
- [Working with Lists in the WHERE-Clause Editor](https://kb.theobald-software.com/tables/where-clause-editor-lists)
- [LIKE Operand in WHERE Clauses](https://kb.theobald-software.com/tables/working-with-like-operand-where-clause)