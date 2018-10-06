---
layout: page
title: Reading SAP Tables Directly with ReadTable
description: Reading SAP Tables Directly with ReadTable
product: erpconnect
parent: special-classes
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=reading-sap-tables-directly-with-readtable
---

A recurrent task in daily work with SAP and .Net applications is to read directly from tables of the SAP system. You can use the ReadTable class to manage this demand.

The sample below shows how to select data from the table. The result is passed back via an easy-to-use ADO.NET table object.

In this sample we want to read material description texts, which are located in the table MAKT. So we need the two columns MATNR (material number) and MAKTX (material description).

Furthermore we want only the English texts so we have to add the WHERE statement SPRAS='EN'. SPRAS is the column which contains the language keys.

The method Run executes the query and passes back the ADO.NET table.


<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using System; 
using ERPConnect; 
using ERPConnect.Utils; 
using System.Data; 
     
class Class1
{ 
   static void Main(string[] args) 
   { 
        using(R3Connection con = new R3Connection("hamlet",11,"theobald","pw","DE","800"))
        {
            con.Open(false);
            ReadTable table = new ReadTable(con); 
            table.TableName = "MAKT"; 
            table.AddField("MATNR"); 
            table.AddField("MAKTX"); 
            table.WhereClause("SPRAS = 'EN' AND MATNR LIKE '%23'");
            table.RowCount = 10;  // For testing purposes we limit the Row Count to 10, for real run, please remove this line
         
            table.Run();   // This runs the table extraction
         
            DataTable resulttable = table.Result; 
         
            for(int i=0; i < resulttable.Rows.Count;i++) 
            { 
                Console.WriteLine( 
                 resulttable.Rows[i]["MATNR"].ToString() + " " + 
                 resulttable.Rows[i]["MAKTX"].ToString()); 
            }
          
            Console.ReadLine(); 
        }
    }
}
{% endhighlight %}
</details>

<details>
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
Module Module1 
     
   Sub Main() 
     
      Using con As New R3Connection 
          con.Host = "Hamlet"
          con.SystemNumber = 11 
          con.UserName = "Theobald"
          con.Password = "pw"
          con.Client = "800"
          con.Language = "DE"
         
          con.Open(False) 
         
          Dim table As New ReadTable(con) 
         
          table.TableName = "MAKT"
          table.AddField("MATNR") 
          table.AddField("MAKTX") 
          table.WhereClause("SPRAS = 'EN' AND MATNR LIKE '%23'")
         
          table.RowCount = 10 // For testing purposes we limit the Row Count to 10, for real run, please remove this line
         
           table.Run() // This runs the table extraction
         
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

The screenshot shows the output of the sample program. 

![ReadTable-Console](/img/content/ReadTable-Console.png){:class="img-responsive" width="800px" }

**Table Access Restrictions**

Unfortunately following restrictions apply if you read tables with the ReadTable class:
- Tables that should be read from may not have any floating point number (FLTP) type of column (as in the case of e.g. the VBAK table). 
- The overall width of the columns to be extracted may not exceed 512 bytes. 
- Some special tables like TCURR return false values.

If anyone of these cases occur, the table call will throw an exception. To deal with this problem, it is possible to install a Z-module in the SAP system, please see chapter  [Installing the Z-function module](https://help.theobald-software.com/SAPCustomizing-EN/default.aspx?pageid=table-restrictions).

To enable an installed Z-module, e.g. Z_XTRACT_IS_TABLE, when using the ReadTable class, use the method

ReadTable.SetCustomFunctionName("Z_XTRACT_IS_TABLE"). 

Before you open the connection with con.Open(false);


links

Online Help: [Installing the custom function module](https://help.theobald-software.com/SAPCustomizing-EN/default.aspx?pageid=table-restrictions)

KnowledgeBase: [Transferring data packets with ReadTable class](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/29/28/transferring-data-packets-with-readtable-class)

KnowledgeBase: [Get meta data of a table](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/45/28/get-meta-data-of-a-table)

 
