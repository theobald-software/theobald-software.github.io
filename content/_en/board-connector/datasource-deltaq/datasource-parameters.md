---
ref: bc-datasource-deltaq-06
layout: page
title: Selections
description: Datasource parameters
product: board-connector
parent: datasource-deltaq
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=datasource_parameters
---

{% include _content/en/datasource-deltaq/datasource-parameters.md %}

### Runtime Parameters
Runtime parameters are supported. 
Add an *@* symbol before the value to mark it as a runtime parameter, e.g., enter `@myParameter` instead of a value.

The marked value can be overwritten at runtime, see [Extraction Parameters - Custom](../advanced-techniques/extraction-parameters#custom)

### Script Expressions
Script expressions are supported.
Script expressions are usually used to determine a dynamic date based on the current date. 

**Examples:**

|   Input                         | Output                                                                         | Description              |
|:--------------------------------------|:------------------------------------------------------------------------------|:--------------------|
|```#{ DateTime.Now.ToString("yyyyMMdd") }#```                                       | yyyyMMdd | Current date in SAP format          |
|```#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#```                     | yyyy0101 | Current year concatenated with "0101"           |
|```#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#```                    | yyyy0101 | Current year concatenated with "0101"            |
|```#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#``` | yyyy0101 | Current year concatenated with "0101"           |

