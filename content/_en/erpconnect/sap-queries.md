---
ref: erpconnect-04
layout: page
title: SAP Query
description: SAP Queries
product: erpconnect
parent: erpconnect
childidentifier: sap-queries
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=sap-queries
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for ERPConnect.<br>
Make sure to use the documentation within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

The following section describes how to control and extract SAP Queries with ERPConnect.

{: .box-note }
**Note**: SAP Queries refer to queries that can be created by the SAP transactions **SQ02** and **SQ01**.
If you want to use a BW Query as a data source, see [SAP BW](./sap-bw).

### About SAP Queries
SAP Queries are used to access data sets, see [SAP Help - Working with Queries](https://help.sap.com/viewer/b1c834a22d05483b8a75710743b5ff26/7.51.6/en-US/0e05493bbccf41a79caed7099c82bd48.html) for more information.

The input image of a Query is filled using the *SelectParameters* collection. 
Every input parameter can contain an arbitrary number of values. 
The values are represented by ranges.
In addition, a query object contains a *Fields* collection that in turn contains the output fields.

The figure below shows the object hierarchy that is provided by the Queries classes in ERPConnect.<br>
![SAP Query Object Model](/img/content/SAP-Query-Object-Model.png){:class="img-responsive" width="500"}

****
More information on working with the ERPConnect Queries classes is provided in the following sections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
