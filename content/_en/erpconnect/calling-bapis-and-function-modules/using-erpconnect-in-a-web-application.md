---
ref: ec-calling-bapis-and-function-modules-04
layout: page
title: Web Applications
description: Web Application Usage
product: erpconnect
parent: calling-bapis-and-function-modules
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=using-erpconnect-in-a-web-application
---

The following section shows the development process for an ASP.NET/ERPConnect project.

### Prerequisites

- Add the ERPConnect.dll class library as a reference to the project (the .dll is copied to the bin directory when compiling the project). 
- Add the librfc32.dll to your bin directory, see [Requirements - 32/64-Bit Environment](../prerequisites-and-installation/requirements#3264-bit-environment). 

{: .box-warning }
**Warning!** The standard demo license does not support working in web environments. 
To test ERPConnect with your ASP.NET project, apply for a test license number at [sales@theobald-software.com](mailto:sales@theobald-software.com).    

### ASP.NET

The following sample shows how to create a purchase order using the *BAPI_PO_CREATE*.
The sample uses an ASP page to enter data for a purchase order, see screenshot below. <br>
![purchase-order1](/img/content/Create-Purchase-Order-IE.png){:class="img-responsive"}  

Input:
```
Vendor: 0000001070
Material: B-7000
Plant: 1000
Quantity: 10
```

#### How to Create a Purchase Order 

To create a purchase order using the *BAPI_PO_CREATE* BAPI, follow the steps below:
1. Establish a connection to the SAP system 
2. Create an RFC-Function object for the BAPI *BAPI_PO_CREATE*.
3. Fill the structure *PO_HEADER* with the following values: 
- DOC_TYPE -> Order type (NB normal order)
- PURCH_ORG -> Purchasing organization
- PUR_GROUP -> Purchasing group
- DOC_DATE -> Date 
- VENDOR -> Vendor number
4. Define the items *PLANT* and *PUR_MAT* (material number) in the table *PO_ITEMS*. <br>
5. The values for the quantity (*QUANTITY*) and the delivery date (*DELIV_DATE*) must be placed in the table *PO_ITEM_SHEDULES*.
6. Execute the BAPI and process the return messages.

```csharp
using System;
using ERPConnect;

Console.Write("Vendor: ");
string vendor = Console.ReadLine();

Console.Write("Material: ");
string material = Console.ReadLine();

Console.Write("Plant: ");
string plant = Console.ReadLine();

Console.Write("Quantity: ");
decimal quantity = decimal.Parse(Console.ReadLine() ?? string.Empty);

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

// Create an RFC-Function object
RFCFunction func = connection.CreateFunction("BAPI_PO_CREATE");

// Fill header structure
RFCStructure header = func.Exports["PO_HEADER"].ToStructure();
header["DOC_TYPE"] = "NB";
header["PURCH_ORG"] = "1000";
header["PUR_GROUP"] = "010";
header["DOC_DATE"] = DateTime.Now.ToString("yyyyMMdd");
header["VENDOR"] = vendor;

// Create an Item
RFCTable items = func.Tables["PO_ITEMS"];
RFCStructure item = items.AddRow();
item["PO_ITEM"] = "1";
item["PUR_MAT"] = material;
item["PLANT"] = plant;

// Create and fill schedules
RFCTable schedules = func.Tables["PO_ITEM_SCHEDULES"];
RFCStructure schedule = schedules.AddRow();
schedule["PO_ITEM"] = "1";
schedule["DELIV_DATE"] = DateTime.Now.ToString("yyyyMMdd");
schedule["QUANTITY"] = quantity;

// Execute Bapi and process return messages
func.Execute();

var returnMessage = func.Tables["RETURN"].Rows[0, "MESSAGE"].ToString();

Console.WriteLine($"Message: {returnMessage}");
```

Output:

```
Message: Standard PO created under the number 4500018292
```

![purchase-order2](/img/content/create-purchase-order-ie_02.png){:class="img-responsive"}  
  
****
#### Related Links
- [How to implement a connection pool](https://kb.theobald-software.com/erpconnect-samples/how-to-implement-a-connection-pool)