---
ref: erpconnect-03
layout: page
title: BAPIs/Function Modules
description: Calling BAPIs and Function Modules
product: erpconnect
parent: erpconnect
childidentifier: calling-bapis-and-function-modules
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=calling-bapis-and-function-modules
---

Function modules are single functions managed by the SAP Function Builder (transaction **SE37**) and developed in SAP's programming language ABAP.

{: .box-note }
**Note**: A function module must have the attribute **Remote Enabled** to be called from outside the SAP system via the RFC protocol. 

### About BAPIs/Function Modules
Every BAPI/Function Module provides import and export parameters. 
These parameters are used to pass or get scalar values.
An exchange of tables is also possible. 

The figure below shows the principle of the object hierarchy that is provided by ERPConnect to manage the exchange of imports, exports and table parameters.

![clientarchitecture](/img/content/erpconnect-client-architecture.png){:class="img-responsive"  width="500"}  

****
More information on working with the ERPConnect Function classes is provided in the following sections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
