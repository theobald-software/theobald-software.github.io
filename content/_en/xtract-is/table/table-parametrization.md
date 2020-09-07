---
ref: xi-table-07
layout: page
title: Table Parametrization 
description: Table Parametrization 
product: xtract-is
parent: table
permalink: /:collection/:path
weight: 7
lang: en_GB

---

|Property Name|Description|
|:----|:----|
| `[Xtract Table].[WhereClause]`| Restricts the number of rows included in the results set by the statement SELECT of a query, by using a logical expression.|
| `[Xtract Table].[ConvertsDates]`|Converts the character-type SAP date to a special date format.|
| `[Xtract Table].[CustomFunctionName]`| Specifies the name of the function module used for data extraction.|
| `[Xtract Table].[MaxRows]`|Specifies the maximum number of extracted records.|
| `[Xtract Table].[MinDateReplacement]`|Date conversions are applied in case of invalid data in SAP date fields.|
| `[Xtract Table].[MaxDateReplacement]`|Date conversions are applied in case of invalid data in SAP date fields.|
| `[Xtract Table].[PackageSize]`| Specifies the number of records retrieved per data package.|

Weitere Informationen zur Parametrisierung finden Sie im Knowledge-Base-Artikel ["Dynamization of WHERE conditions of the XIS table components"](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)