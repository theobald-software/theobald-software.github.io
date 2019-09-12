---
ref: xi-table-04
layout: page
title: WHERE Clause
description: WHERE Clause
product: xtract-is
parent: table
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=where-clause
---
{% include _content/en/tables/where-clause.md  %}

### SSIS Variables

It is also possible to use SSIS variables in the Where string. 
For example, define an SSIS variable @vkorg and formulate your where statement as follows: LIKP~VKORG = @vkorg.<br>
Xtract IS recognizes the @-symbol and replaces the placeholder with the corresponding value of the SSIS variable.




