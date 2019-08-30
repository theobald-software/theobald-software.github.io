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

A WHERE condition can be stored in the *WHERE Clause* tab and the result displayed with *Load live preview*. Note that if the field name is not unique, the table name must be listed in the WHERE condition (for example, MAKT~MATNR). This can be the case, for example, with table joins.     

![Extraction Settings-01](/img/content/xu/Table-Extraction-Where-Clause.png){:class="img-responsive"}

The WHERE clause must comply with the SAP OpenSQL syntax.

- Before and after the equal sign, you must enter a space, eg YEAR = '1999 '. For YEAR= '1999 ', YEAR ='1999' or YEAR='1999' you will get the error message '*A dynamically specified column name is unknown*'.
- Floating point numbers must always be set in single quotation mark, e.g. KMENG > '10.3'. For KMENG > 10.3 you get the error message '*The WHERE clause has an unexpected format*'.
- The Where clause must not contain any line break (return key).

You will find more information about the OpenSQL syntax on the SAP help site: [https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm?file=abapwhere.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm?file=abapwhere.htm)

Values must have the internal SAP representation:

- The date 01.01.1999 has the the internal representation 19990101 (YYYYMMDD),
- The year period 001.1999 has the internal representation 1999001 (YYYYPPP),
- Numbers must have the leading zeros, e.g. customer number 1000 has the internal representation 0000001000.

**Script Expressions**

Beginning with version 2.13.5 scripted expressions are supported within the where clause. 

![Table-Extraction-Where-Clause-Scripted-Expression](/img/content/Table-Extraction-Where-Clause-Scripted-Expression.jpg){:class="img-responsive"}

For more information please refer to [Script Expressions](../advanced-techniques/script-expressions). 