---
ref: erpconnect-04
layout: page
title: SAP Queries
description: SAP Queries
product: erpconnect
parent: erpconnect
childidentifier: sap-queries
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=sap-queries
---

With ERPConnect, all sorts of SAP queries can be controlled and their data can be extracted. The necessary classes for doing this are located in the namespace ERPConnect.Queries.

The following object hierarchy shows the classes or objects correlation. The queries input image will be filled by the SelectParameters collection. Every input parameter can contain an arbitrary number of values. The values are represented by so-called ranges. In addition, a query object contains a Fields collection that in turn contains the output fields.


![SAP Query Object Model](/img/content/SAP-Query-Object-Model.png){:class="img-responsive"}


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}