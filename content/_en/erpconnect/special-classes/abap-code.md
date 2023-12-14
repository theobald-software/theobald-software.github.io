---
ref: ec-special-classes-02
layout: page
title: ABAP Code Class
description: ABAP Code
product: erpconnect
parent: special-classes
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=abap-code
---

The class ABAPCode offers nearly unlimited possibilities. 
You can execute ABAP code on the fly and retrieve the result in a string array.<br>
The following sample shows how to create a simple ABAP interpreter that executes a dynamic SQL statement.<br>

### Create an ABAP Interpreter

Follow the steps below to crate an ABAP interpreter:

1. Connect to the SAP system using `R3Connection`.
2. Add a new line of code to the dynamic report using `AddCodeLine`.
3. Execute the report using `Execute`.
4. Read the result set (regarding the ABAP list) using `GetResultLine`.

```csharp
using System;
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

const string code =
    """
    REPORT ztestreport NO STANDARD PAGE HEADING.

    TABLES kna1.

    DATA c TYPE i.

    SELECT COUNT(*) INTO c FROM kna1.

    WRITE: /'System time ', sy-timlo.
    WRITE: /'Number of rows in KNA1: ', c.
    """;

var abapCode = new ABAPCode
{
    Connection = connection
};

string[] lines = code.Split('\n');
foreach (string s in lines)
{
    abapCode.AddCodeLine(s.Trim());
}

if (abapCode.Execute())
{
    for (int i = 0; i < abapCode.ResultLineCount; i++)
    {
        Console.WriteLine(abapCode.GetResultLine(i));
    }
}
else
{
    Console.WriteLine($"ABAP Error: {abapCode.LastABAPSyntaxError}");
}
```

![AbapPad](/img/content/AbapPad.png){:class="img-responsive"  }

<!---
Output:
```
System time  11:17:46
Number of rows in KNA1:       7.705
```
-->