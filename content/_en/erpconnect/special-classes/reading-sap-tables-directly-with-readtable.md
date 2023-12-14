---
ref: ec-special-classes-01
layout: page
title: Read Table Class
description: Reading SAP Tables Directly with ReadTable
product: erpconnect
parent: special-classes
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=reading-sap-tables-directly-with-readtable
---

This section shows how to use the *ReadTable* class.<br>
A recurrent task when working with SAP and .NET applications is to read directly from tables of the SAP system. 
The *ReadTable* class enables access to that data.

{: .box-note }
**Note:** The *RFC_READ_TABLE* function module for table extractions is not suitable for mass data extraction, see [Table Restrictions](#table-restrictions).

### Reading Data From Tables

The following sample shows how to use the *ReadTable* class to select data from the SAP table *MAKT* and how to process the ADO.NET result table object. 

The SAP table MAKT contains material descriptions.
- This sample reads the material description texts of *MAKT*. 
For this the columns *MATNR* (material number) and *MAKTX* (material text) are needed.
- Add a corresponding WHERE statement `SPRAS='EN'` to make sure only the English language texts are read (SPRAS is the column that contains the language keys).


``` csharp
using System;
using System.Data;
using ERPConnect;
using ERPConnect.Utils;

// Set your ERPConnect license
LIC.SetLic("xxxx");

// Open the connection to SAP
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

var table = new ReadTable(connection)
{
    WhereClause = "SPRAS = 'EN'",
    TableName = "MAKT",
    RowCount = 10
};

// Select columns to read
table.AddField("MATNR");
table.AddField("MAKTX");

table.Run();

DataTable result = table.Result;
for (int i = 0; i < result.Rows.Count; i++)
{
    Console.WriteLine($"{result.Rows[i]["MATNR"]} {result.Rows[i]["MAKTX"]}");
}

Console.ReadLine();
```

Output:
```
000000000000000023 Pawan Kalyan_08
000000000000000038 Test US colleagues upd4
000000000000000043 English Check 25_01
000000000000000058 Ventilation, complete build
000000000000000059 Filter Ereteam
000000000000000068 a portable 1 ton crane
000000000000000078 Component Full Repair Service ...
000000000000000088 AS-100 T-shirt XL
000000000000000089 AS-100 T-shirt
000000000000000098 PCB Subassembly
```

![ReadTable-Console](/img/content/ReadTable-Console.png){:class="img-responsive" }

### Table Restrictions
When extracting tables from older SAP releases you may encounter several restrictions when using the SAP standard function module (RFC_READ_TABLE):
- The overall length of all columns to be extracted must not exceed 512 bytes.
- It is not possible to extract data from tables that contain one or more columns of the data type f (FLTP, floating point), DEC (decimal, e.g. for percentage) or x (RAW, LRAW).
- Poor extraction performance with larger tables.

{: .box-warning }
**Warning! Error while converting value '\*.0' of row 1530, column 3** <br>
The SAP standard module *RFC_READ_TABLE* for table extraction can only extract the ABAP data type DEC to a limited extent. This leads to the mentioned example error during extraction.<br>

****
#### Related Links
- [Transferring data packets with ReadTable class](https://kb.theobald-software.com/erpconnect-samples/transferring-data-packets-with-readtable-class)
- [Get meta data of a table](https://kb.theobald-software.com/erpconnect-samples/get-meta-data-of-a-table)
- [Get CostCenter hierarchies](https://kb.theobald-software.com/erpconnect-samples/get-costcenter-hierarchies)
