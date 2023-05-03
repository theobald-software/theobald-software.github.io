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

### Reading Data From Tables

The following sample shows how to use the *ReadTable* class to select data from the SAP table *MAKT* and how to process the ADO.NET result table object. 

- This sample reads the material description texts of the table *MAKT*. 
For this the columns *MATNR* (material number) and *MAKTX* (material text) are needed.
- To make sure only the English language texts are read, add a corresponding WHERE statement `SPRAS='EN'`(SPRAS is the column that contains the language keys).

```csharp
static void Main(string[] args) 
{ 
    using (ParseConnectionString con = new ParseConnectionString("SAPServer", 00, "SAPUser", "Password", "EN", "800"))
            {
                ERPConnect.LIC.SetLic("LicenseNumber");
                con.Open(false);
				
                ReadTable table = new ReadTable(con);
                table.AddField("MATNR");
                table.AddField("MAKTX");
                table.WhereClause = "SPRAS = 'EN' AND MATNR LIKE '%23'";
                table.TableName = "MAKT";
                table.RowCount = 10;
				
                table.Run();
				
                DataTable resulttable = table.Result;
                for (int i = 0; i < resulttable.Rows.Count; i++)
                {
                    Console.WriteLine(
                     resulttable.Rows[i]["MATNR"].ToString() + " " +
                     resulttable.Rows[i]["MAKTX"].ToString());
                }
                Console.ReadLine();
            }
}

```
<!---
<details>
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
Module Module1 
     
   Sub Main() 
     
      Using con As New ParseConnectionString 
          con.Host = "Hamlet"
          con.SystemNumber = 00 
          con.UserName = "SAPUser"
          con.Password = "SAPPassword"
          con.Client = "800"
          con.Language = "DE"
         
          con.Open(False) 
         
          Dim table As New ReadTable(con) 
         
          table.AddField("MATNR") 
          table.AddField("MAKTX") 
          table.AddCriteria("SPRAS = 'EN'")
          table.AddCriteria("AND MATNR LIKE '%23'")
                  
          table.TableName = "MAKT"
         
          table.RowCount = 10 
         
           table.Run() 
         
           Dim resulttable As DataTable resulttable = table.Result 
         
           Dim i As Integer
           For i = 0 To resulttable.Rows.Count - 1 
              Console.WriteLine( _ CStr(resulttable.Rows(i)(0)) + " " + _ 
                 CStr(resulttable.Rows(i)(1))) 
           Next
         
           Console.ReadLine() 
        End Using
   End Sub
End Module
{% endhighlight %}
</details>
-->
The screenshot below shows the output of the sample program. 

![ReadTable-Console](/img/content/ReadTable-Console.png){:class="img-responsive" }

### Table Restrictions
When extracting tables from older SAP releases you may encounter several restrictions when using the SAP standard function module (RFC_READ_TABLE):
- The overall length of all columns to be extracted must not exceed 512 bytes.
- It is not possible to extract data from tables that contain one or more columns of the data type f (FLTP, floating point), DEC (decimal, e.g. for percentage) or x (RAW, LRAW).
- Poor extraction performance with larger tables.

{: .box-warning }
**Warning! Error while converting value '\*.0' of row 1530, column 3** <br>
The SAP standard module *RFC_READ_TABLE* for table extraction  can only extract the ABAP data type DEC to a limited extent. This leads to the mentioned example error during extraction.<br>

****
#### Related Links
- [Transferring data packets with ReadTable class](https://kb.theobald-software.com/erpconnect-samples/transferring-data-packets-with-readtable-class)
- [Get meta data of a table](https://kb.theobald-software.com/erpconnect-samples/get-meta-data-of-a-table)
- [Get CostCenter hierarchies](https://kb.theobald-software.com/erpconnect-samples/get-costcenter-hierarchies)
