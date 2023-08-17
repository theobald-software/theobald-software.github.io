---
ref: xu-datasource-deltaq-04
layout: page
title: Selections
description: Datasource parameters
product: xtract-universal
parent: datasource-deltaq
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=datasource-parameters
---
{% include _content/en/datasource-deltaq/datasource-parameters.md %}

### Runtime Parameters
Runtime parameters are supported. 
Add an *@* symbol right before the value to mark it as a runtime parameter, e.g., enter `@myParameter` instead of a value.

The marked value can be overwritten at runtime, see [Extraction Parameters - Custom](../execute-and-automate-extractions/extraction-parameters#custom)

### Script Expressions
Script expressions are supported. <br>
Script expressions are usually used to determine a dynamic date based on the current date. 

**Examples:**

|   Input                         | Output                                                                         | Description              |
|:--------------------------------------|:------------------------------------------------------------------------------|:--------------------|
|```#{ DateTime.Now.ToString("yyyyMMdd") }#```                                       | yyyyMMdd | Current date in SAP format          |
|```#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#```                     | yyyy0101 | Current year concatenated with "0101"           |
|```#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#```                    | yyyy0101 | Current year concatenated with "0101"            |
|```#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#``` | yyyy0101 | Current year concatenated with "0101"           |

