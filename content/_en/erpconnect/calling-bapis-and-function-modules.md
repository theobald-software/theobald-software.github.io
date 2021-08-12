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

Function modules are single functions that are managed by the SAP Function Builder (transaction SE37) and developed in SAP's own programming language, ABAP.

The function module should have the attribute Remote Enabled to be called from outside the SAP system via the RFC protocol. It's very easy to call these functions with the help of ERPConnect.

Every function module provides import and export parameters. These parameters are either given to or from the function module. Besides these scalar parameters, there can be also an exchange of tables. The figure below shows the principle of the object hierarchy 
that is provided by ERPConnect to manage the exchange of imports, exports and table parameters.

The following examples show how to log on to an SAP system, and how to use these objects to call function modules within the SAP system.

![clientarchitecture](/img/content/erpconnect-client-architecture.png){:class="img-responsive" height="500px" width="375px"}  

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
