---
ref: ec-sap-bw-01
layout: page
title: Calling BW Queries
description: Calling BW Queries
product: erpconnect
parent: sap-bw
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=executing-bw-queries
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for ERPConnect.<br>
Make sure to use the documentation within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

The following sample shows how to fetch data from a BW Query using ERPConnect.

### About
This example uses the BW query *ZSIMPLEQUERY* which is based on the cube *0D_DECU*. <br>
The following screenshot shows the query in the designer. <br>
![BW-001](/img/content/BW-001.png){:class="img-responsive" }

{: .box-note }
**Note**: To allow external access to a BW Query the checkbox **Allow external access** has to be set to active in the preferences for the query.

The dimensions *Material* and *Sold-to party* as well as the key figures *Billed Quantity* and *Costs* are drawn into a *DataGrid*, see screenshot below. <br>
The dimension has a variable called *MAT01* that allows a limitation to the material number.

![BW-002](/img/content/BW-002.png){:class="img-responsive" width="600px" }

### Executing Queries
1. Open a client connection to the R/3 system using the *R3Connection* class.
2. Create a BWCube object using `CreateCube`. Its name is made up of the cube name and query name.
3. The cube object offers a collection for all contained dimensions (Dimensions) and key figures (Measures). 
If the attribute *SelectForFlatMDX* is set to *true*, the component is added to the query output. <br>
Add the dimensions *Material* and *Sold-to party* and the key figures *Billed Quantity* and *Costs* to the query output.
4. To fill the variables with values, address them via the variables collection. There are range tables behind each variable.
5. Execute the BW query using `Execute`. The output is a table of the *DataTable* type. 

{: .box-note }
**Note**: The denomination of the key figures via the query generation in the designer does not conform to the original 
technical name. That means key figures are addressed by the ordinal number, not the name.

### Sample Code


```csharp
using System;
using System.Data;
using ERPConnect;
using ERPConnect.BW;

// Set your ERPConnect license
LIC.SetLic("xxxx");

using var connection = new R3Connection(
    host: "server.acme.org",
    systemNumber: 00,
    userName: "user",
    password: "passwd",
    language: "EN",
    client: "001")
{
    Protocol = ClientProtocol.NWRFC,
};

connection.Open();

BWCube cube = connection.CreateBWCube("0D_DECU/DECUQUERY1");

cube.Dimensions["0D_MATERIAL"].SelectForFlatMDX = true;
cube.Dimensions["0D_SOLD_TO"].SelectForFlatMDX = true;

cube.Measures[0].SelectForFlatMDX = true;
cube.Measures[1].SelectForFlatMDX = true;

DataTable result = cube.Execute();
foreach (DataRow row in result.Rows)
{
    foreach (DataColumn column in result.Columns)
    {
        Console.WriteLine($"{column.Caption}: {row[column]}");
    }

    Console.WriteLine();
}
```

Output:

```
Material (SAP Demo): M18
Sold-to-Party (SAP Demo): Thomas Bush Inc.
Net&value of the invoice item in the docCurrency (SAP Demo): 398403,00
Clearing value in document currency (SAP Demo): 328206,00

Material (SAP Demo): M18
Sold-to-Party (SAP Demo): Toro Motor Company
Net&value of the invoice item in the docCurrency (SAP Demo): 234234,00
Clearing value in document currency (SAP Demo): 196959,00

Material (SAP Demo): M18
Sold-to-Party (SAP Demo): Calorad Inc.
Net&value of the invoice item in the docCurrency (SAP Demo): 111921,00
Clearing value in document currency (SAP Demo): 96837,00

Material (SAP Demo): PCSERVICEA
Sold-to-Party (SAP Demo): Infix Co.
Net&value of the invoice item in the docCurrency (SAP Demo): 84564,00
Clearing value in document currency (SAP Demo): 0,00

Material (SAP Demo): PCSERVICEA
Sold-to-Party (SAP Demo): Lampen-Markt GmbH
Net&value of the invoice item in the docCurrency (SAP Demo): 2826,00
Clearing value in document currency (SAP Demo): 0,00

Material (SAP Demo): PCSERVICEA
Sold-to-Party (SAP Demo): Minerva Industries
Net&value of the invoice item in the docCurrency (SAP Demo): 27759,00
Clearing value in document currency (SAP Demo): 0,00

Material (SAP Demo): PCSERVICEA
Sold-to-Party (SAP Demo): Nobil North Sea Limi
Net&value of the invoice item in the docCurrency (SAP Demo): 11118,00
Clearing value in document currency (SAP Demo): 0,00
```

****
#### Related Links
- [Execute BW Queries](https://kb.theobald-software.com/erpconnect-samples/execute-bw-queries)
