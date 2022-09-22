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

### Properties of LINQ to SAP

The properties of *LINQ to SAP* are displayed in the **Properties** window of the .erp file.<br>
The most important properties are *Create Objects Outside Of Context Class* and *Reuse Classes*.

![LINQToERP-Settings](/img/content/LINQToERP-Settings.png){:class="img-responsive"}

#### Create Objects Outside Of Context Class
Classes such as structures and tables of an SAP function module can be defined outside the context-class and thus can be used independently from the context class.

#### Reuse Classes
Allows the use of the same class of an RFC-Table or RFC-Structure in various SAP function modules.  

Example: if two different function modules have an RFC-table of the same type, both RFC-tables can have the same data type (e.g., *RequestTable*).
It is not necessary to define two different data types such as *RequestTable* and *RequestTable1*.
