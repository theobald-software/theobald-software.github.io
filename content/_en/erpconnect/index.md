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

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for ERPConnect.<br>
Make sure to use the documentation within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

Welcome to the Online Help for ERPConnect.

ERPConncect is a .NET library for developing SAP interfaces in all .NET-capable environments.
The design and implementation of the interfaces is very comfortable, because there is a separate API available for each type of SAP object. 

![ERP-Connect](/img/content/erpconnect/architecture_erpconnect.png){:class="img-responsive" width="800px" }

### Features

ERPConnect offers multiple extraction types to cover a wide range of demands of SAP data extraction.

- [**BAPIs and Function Modules**](./calling-bapis-and-function-modules) accesses BAPIs and RFC function modules.
- [**BWCube and BEx Queries**](./sap-bw) extracts data from SAP BW InfoCubes and BEx Queries.
- [**IDocs**](./receiving-and-sending-idocs) sends and receives SAP IDocs.
- [**Query**](./sap-queries) extracts SAP queries. **Note: not the BEx queries supplied by BW Cube**.
- [**Tables via RFC**](./special-classes/reading-sap-tables-directly-with-readtable) reads SAP Tables directly via RFC.

Furthermore ERPConnect can generate and execute ABAP code on-the-fly and control transactions via batch input.

### Add-Ons and Tools

*LINQ to SAP* is an exclusive add-on for ERPConnect that integrates Microsoft's [Language Integrated Query (LINQ)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/) to provide native data querying capabilities. 
For more information on *LINQ to SAP*, see [LINQ to SAP](./linq-to-sap).

The installation package of ERPConnect also includes the following tools:
- [Transaction-Recorder](./tools/transaction-recorder)
- [IDoc-Schema-Generator](./tools/idoc-schema-generator)
- [*Function-Template-Generator*](./tools/function-template-generator) 


*****
More information on the functions of ERPConnect is provided in the following sections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}