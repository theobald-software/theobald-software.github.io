---
ref: bc-advanced-techniques-10
layout: page
title: Scripted Expressions
description: Scripted Expressions
product: board-connector
parent: advanced-techniques
permalink: /:collection/:path
weight: 10
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=scripted-expressions
---	

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Board Connector.<br>
Make sure to use the documentation within the new [Board Connector HelpCenter](https://helpcenter.theobald-software.com/board-connector/documentation/introduction/).

### About Script Expressions

Script expressions offer a way of adding dynamic parameters to Xtract Universal. 
Script expressions are resolved at extraction runtime.
The output of a script expression is a string. 
This string can be used as input for further .NET string operations.

Script expressions can be used as Selection Parameters for [Table](../table/where-clause#script-expressions) or [DeltaQ](../datasource-deltaq/datasource-parameters#script-expressions) extractions.

{% include _content/en/xu-specific/advanced-techniques/script-expressions.md %}