---
ref: erpconnect-08
layout: page
title: SAP BW
description: SAP BW
product: erpconnect
parent: erpconnect
childidentifier: sap-bw
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=sap-bw
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for ERPConnect.<br>
Make sure to use the documentation within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

The following section contains information on how to extract BW data. 

The *BW* class was developed to extract data from SAP BW InfoCubes and QueryCubes (also known as BEx Queries).
A common approach for using the *BW* class is to build and extract a BEx query that meets your business requirements.

{: .box-note }
**Note**: This section refers to BW Queries, for information on queries created by the SAP transactions **SQ02** and **SQ01**, see [SAP Query](./sap-queries).

### About BEx Queries and InfoCubes
 
BEx queries filter data to create reporting objects or views called InfoProviders for analyzing purposes. 
One type of InfoProviders are InfoCubes.

InfoCubes are multidimensional datasets that are used to store data e.g., characteristics (dimensions), key figures (measures or facts), units, time characteristics, 
or technical characteristics.<br>
You can add data from one or more InfoSource or InfoProviders to an InfoCube. 


*****
More information on working with SAP BW is provided in the following section:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
