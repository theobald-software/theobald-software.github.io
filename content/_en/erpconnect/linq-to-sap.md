---
ref: erpconnect-09
layout: page
title: LINQ to SAP
description: LINQ to SAP
product: erpconnect
parent: erpconnect
childidentifier: linq-to-sap
permalink: /:collection/:path
weight: 9
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=linq-to-sap
---

*LINQ to SAP* is an exclusive add-on for ERPConnect that integrates Microsoft’s [Language Integrated Query (LINQ)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/) to provide native data querying capabilities. <br>
The add-on comes with a Designer for more user-friendliness.

{: .box-note }
**Note:** Due to trademark regulations *LINQ to SAP* is called *LINQ to ERP* in the source code. 

LINQ to SAP is an exclusive add-on for ERPConnect. It builds internally on ERPConnect and does not exist as a stand-alone tool. 
Thus any existing ERPConnect code is always compatible with *LINQ to SAP*. 

To distribute a finished application to customers, give them is the ERPConnect35.dll (or higher). 
No other .dlls are needed.

### Technical Prerequisites

- Microsoft.NET 3.5 (or higher). Previous .NET versions do not support LINQ.
- Visual Studio 2008 or higher (excluding Express).

****
{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}