---
ref: xu-advanced-techniques-10
layout: page
title: Script Expressions
description: Script Expressions
product: xtract-universal
parent: advanced-techniques
permalink: /:collection/:path
weight: 10
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=script-expressions
progressstate: 5
---

### About Script Expressions

Script expressions offer a way of adding dynamic parameters to Xtract Universal. 
Script expressions are resolved at extraction runtime.
The output of a script expression is a string. 
This string can be used as input for further .NET string operations.

Script expressions can be used in the following scenarios:
- as Selection Parameters for [Table](../table/where-clause#script-expressions) or [DeltaQ](../datasource-deltaq/datasource-parameters#script-expressions) extractions.
- as Dynamic Folder Paths in the [Amazon AWS S3](../destinations/amazon-aws-s3#folder), [Azure Storage](../destinations/azure-storage#folder) and [Hadoop](../destinations/hadoop#hadoop-remote-folder) destinations.
- as Custom SQL Commands in [Database Destinations](../destinations#databases--data-warehouses).

{% include _content/en/xu-specific/advanced-techniques/script-expressions.md %}