---
ref: ec-linq-to-sap-03
layout: page
title: Table Access Restrictions
description: Table Access Restrictions
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=linq-to-sap-table-access-restrictions
---
When extracting tables from older SAP releases you may encounter several restrictions when using the SAP standard function module (RFC_READ_TABLE).

### RFC_READ_TABLE Restrictions
Especially with older SAP releases you may encounter the following restrictions when using the function module RFC_READ_TABLE for table extraction:

- The overall length of all columns to be extracted must not exceed 512 bytes.
- Depending on the SAP version there may be other restrictions. It is not possible to extract data from tables that contain one or more columns of the data type f (FLTP, floating point), DEC (decimal, e.g. for percentage) or x (RAW, LRAW).
- Poor extraction performance with larger tables.

If the above-mentioned restrictions hinder your work, install the Theobald Software custom function module *Z_THEO_READ_TABLE* on your SAP system.

{: .box-warning }
**Warning! Error while converting value '\*.0' of row 1530, column 3** <br>
The SAP standard module *RFC_READ_TABLE* for table extraction  can only extract the ABAP data type DEC to a limited extent. This leads to the mentioned example error during extraction.<br>
Use the function module from Theobald Software *Z_THEO_READ_TABLE*.

#### Installing Z_THEO_READ_TABLE

Contact [Theobald Support](mailto:support@theobald-software.com) to receive the *Z_THEO_READ_TABLE* transport for your for SAP system.<br>
Once *Z_THEO_READ_TABLE* is installed, you can activate the module by entering its name in the LINQ Table window.<br>
![LINQToERP-Tables-004](/img/content/LINQToERP-Tables-004.png){:class="img-responsive" width="800px" }

### Restriction on LINQ Expressions
Not all LINQ expressions are technically feasible or make sense in *LINQ to SAP*. <br>
Apart from classical expressions like the operators <, > and =, *LINQ to SAP* offers all character-like functions: 
- *Equals* (=)
- *Contains* (LIKE "%..%")
- *StartsWith* (LIKE "%...") 
- *EndsWith* (LIKE "…%")
- *InList*

*InList* is only active when *ERPConnect.Linq* has been specified in a using statement (or in the imports in VB).

```csharp
using ERPConnect.Linq; 
  
[…] 
  
var MyTexts = from t in sc.MAKTList 
         where t.MATNR.StartsWith("100") 
         && t.SPRAS.InList("D","E") 
         select t;
```
