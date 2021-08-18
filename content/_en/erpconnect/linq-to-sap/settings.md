---
ref: ec-linq-to-sap-07
layout: page
title: Settings
description: Settings
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 7
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=linq-to-sap-settings
---


{: .box-warning }
**Warning! Deprecated component** 
As of Visual Studio Version 2019 an .Net4.5 the *LINQ to SAP* add-on is not supported anymore.


![LINQToERP-Settings](/img/content/LINQToERP-Settings.png){:class="img-responsive"}

**Reuse Classes**

allows the use of the same class (of an RFC-Table or RFC-Structure) in various SAP function modules. 
If two different function modules have e.g. an RFC-table of the same type, 
then both RFC-tables can have the same data type (e.g. RequestTable) and it is not necessary to define two different data types (such as RequestTable and RequestTable1).

**Create Objects Outside Of Context Class**

Classes (such as structures and tables) of an SAP function module can be defined outside the context-class and thus could be used independently of the context class.