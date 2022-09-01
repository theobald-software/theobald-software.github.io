---
ref: xu-datasource-deltaq-04
layout: page
title: Datasource parameters
description: Datasource parameters
product: xtract-universal
parent: datasource-deltaq
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=datasource-parameters
---
{% include _content/en/datasource-deltaq/datasource-parameters.md %}


### Variables
Variables are supported. <br>
Add an *@* symbol right before the value to mark it as a variable.

### Script Expressions

Script expressions can be used as selection parameters. 
They are usually used to determine a dynamic date based on the current date. 

**Examples:**

|   Input                         | Output                                                                         | Description              |
|:--------------------------------------|:------------------------------------------------------------------------------|:--------------------|
|```#{ DateTime.Now.ToString("yyyyMMdd") }#```                                       | yyyyMMdd | Current date in SAP format          |
|```#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#```                     | yyyy0101 | Current year concatenated with "0101"           |
|```#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#```                    | yyyy0101 | Current year concatenated with "0101"            |
|```#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#``` | yyyy0101 | Current year concatenated with "0101"           |

For more information on script expression, see [Script Expressions](../advanced-techniques/script-expressions).
