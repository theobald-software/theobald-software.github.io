---
layout: page
title: LINQ to SAP
description: LINQ to SAP
product: erpconnect
parent: erpconnect
childidentifier: linq-to-sap
permalink: /:collection/:path
weight: 9
lang: en_GB
---

Before we delve deeper into LINQ to SAP in this chapter, let's first have a look at some answers to a few important questions that some readers might be dying to ask:

- LINQ to SAP is always called LINQ to ERP in the source code. This is due to trademark issues. For the same reason, ERPConnect is called ERPConnect instead of SAPConnect, which would actually make more sense. 
- LINQ to SAP is an exclusive add-on for ERPConnect. It builds internally on ERPConnect and will never exist as a stand-alone tool. This also means that any existing ERPConnect code will always be compatible to LINQ to SAP. It therefore makes no sense to go to the trouble to migrate existing code to LINQ to SAP. 
- LINQ to SAP only works in .NET 3.5 (or higher). Previous .NET versions do not support LINQ.
- The LINQ to SAP Designer works in Visual Studio from version 2008 on (excluding Express).
- To distribute the finished application to customers, all you have to give them is the ERPConnect35.dll or a higher version. No other dlls are needed.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}