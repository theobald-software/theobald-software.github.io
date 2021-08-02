---
ref: home-01
layout: page
title: ERPConnect
description: ERPConnect main page
product: erpconnect
parent: home
childidentifier: erpconnect
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/
---

Welcome to the Online Help for ERPConnect.<br>
ERPConncect is a .NET library for developing SAP interfaces in all .NET-capable environments.
The design and implementation of the interfaces is very comfortable, because there is a separate API available for each type of SAP object. 

![ERP-Connect](/img/content/erpconnect/architecture_erpconnect.png){:class="img-responsive" }

### Extraction Types

ERPConnect offers multiple extraction types to cover a wide range of demands of SAP data extraction.

- [**BAPIs and Function Modules**](./bapis-and-function-modules) accesses BAPIs and RFC function modules.
- [**BWCube**](./bw-infocubes-and-bex-queries) extracts data from SAP BW InfoCubes and BEx Queries.
- [**IDocs**](./receiving-and-sending-idocs) accesses SAP IDocs.
- [**Query**](./sap-queries) extracts SAP queries. **Note: not the BEx queries supplied by BW Cube**.
- [**Table**](./special-classes/reading-sap-tables-directly-with-readtable) extracts data from SAP Tables and Views.

### Add-Ons and Tools

*LINQ to SAP* is an exclusive add-on for ERPConnect that integrates Microsoft's [Language Integrated Query (LINQ)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/) to provide native data querying capabilities. 
For more information on *LINQ to SAP*, see [LINQ to SAP](./linq-to-sap).

The installation package of ERPConnect also includes the following tools:
- [TransactionRecorder](./tools/transaction-recorder)
- [IDoc-Schema-Generator](./tools/idoc-schema-generator)

More information on the functions of ERPConnect is provided in the following sections:

*****
{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}