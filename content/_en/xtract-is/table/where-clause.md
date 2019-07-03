---
ref: xi-table-03
layout: page
title: WHERE Clause
description: WHERE Clause
product: xtract-is
parent: table
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=where-clause
---


If you wish to extract only certain table data you can use a where condition. Click on the tab *WHERE clause*.

### Where clause

In this example, the following was selected:<br>
*(LIKP\~VKORG = '1000' OR LIKP\~VKORG = '2000') AND LIKP\~ERDAT > '20010101'*

**Attention:** It is mandatory to refer to a table field using the following syntax: [table]\~[field]

![Table-Where](/img/content/Table-Where.png){:class="img-responsive"}

### OpenSQL syntax

The entered expression must correspond to the SAP OpenSQL syntax. 


- The expression may require a space before and after the operator,  e.g YEAR = '1999'. The following syntax might lead to an error: YEAR= '1999 ', YEAR ='1999' or YEAR='1999'.
- Floating point numbers must always be set in single quotation mark, e.g. KMENG > '10.3'. For KMENG > 10.3 you get the error message *'The WHERE clause has an unexpected format'*.
- The Where clause must not contain any line break (return key).


You will find more information about the OpenSQL syntax on the [SAP help site](https://help.sap.com/doc/saphelp_nw70ehp3/7.03.19/en-US/fc/eb3969358411d1829f0000e829fbfe/frameset.htm)

Values must have the internal SAP representation:

- The date 01.01.1999 has the the internal representation 19990101 (YYYYMMDD),
- The year period 001.1999 has the internal representation 1999001 (YYYYPPP),
- Numbers must have the leading zeros, e.g. customer number 1000 has the internal representation 0000001000.



### SSIS Variables

It is also possible to use SSIS variables in the Where string. 
For example, define an SSIS variable @vkorg and formulate your where statement as follows: LIKP\~VKORG = @vkorg. 
Xtract IS recognizes the @-symbol and replaces the placeholder with the corresponding value of the SSIS variable.




