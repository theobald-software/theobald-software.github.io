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

{% include _content/en/selections.md %}


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

