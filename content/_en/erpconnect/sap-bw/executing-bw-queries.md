---
ref: ec-sap-bw-01
layout: page
title: Executing BW queries
description: Executing BW queries
product: erpconnect
parent: sap-bw
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=executing-bw-queries
---

**The sample code is located in the ERPConnect installation directory in the BWQuery directory** 

The following example shows a query being executed in .NET.

First a BWCube object is built with the help of the CreateCube function. Its name is made up of the cube name and query name.

The cube object offers a collection for all of contained dimensions (Dimensions) and key figures (Measures). The attribute SelectForFlatMDX defines whether or not each component should be contained in the query output. It is set to true in our example. Please note that the denomination of the key figures via the query generation in the designer does not follow from the original technical name, so the key figures in our example here are addressed by the ordinal number, not the name.

To fill the variables with values, they are addressed through the variables collection. There are always range tables behind each variable, as previously discussed in the SAP query chapter.

The BW query can be executed via Execute() and outputs a table of the DataTable type. The screenshot of our example shows the query output in the grid.


<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
private void Go_Click(object sender, System.EventArgs e)
       {
           using (R3Connection con = new R3Connection())
           {
               con.UserName = "erpconnect";
               con.Password = "pass";
               con.Language = "DE";
               con.Client = "800";
               con.Host = "sapserver";
               con.SystemNumber = 11;
 
               con.Open(false);
 
               BWCube query = con.CreateBWCube("0D_DECU/ZSIMPLEQUERY");
               query.Dimensions["0D_MATERIAL"].SelectForFlatMDX = true;
               query.Dimensions["0D_SOLD_TO"].SelectForFlatMDX = true;
               query.Measures[0].SelectForFlatMDX = true;
               query.Measures[1].SelectForFlatMDX = true;
 
               query.Variables["MAT01"].SingleRange.LowValue = this.txtMatNr.Text;
 
               this.dataGrid1.DataSource = query.Execute();
           }
       }
{% endhighlight %}
</details>

<details>
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
Private Sub Go_Click(ByVal sender As Object, ByVal e As System.EventArgs)
 
    Using con As R3Connection = New R3Connection
 
 
        con.UserName = "erpconnect"
        con.Password = "pass"
        con.Language = "DE"
        con.Client = "800"
        con.Host = "sapserver"
        con.SystemNumber = 11
 
        con.Open(False)
 
        Dim query As BWCube = _
           con.CreateBWCube("0D_DECU/ZSIMPLEQUERY")
 
        query.Dimensions("0D_MATERIAL").SelectForFlatMDX = True
        query.Dimensions("0D_SOLD_TO").SelectForFlatMDX = True
        query.Measures(0).SelectForFlatMDX = True
        query.Measures(1).SelectForFlatMDX = True
        query.Variables("MAT01").SingleRange.LowValue = _ Me.txtMatNr.Text
        Me.dataGrid1.DataSource = query.Execute
    End Using
 
End Sub
{% endhighlight %}
</details>

![BW-002](/img/content/BW-002.png){:class="img-responsive" width="600px" }

****
#### Related Links
- [Executing BW Queries](https://kb.theobald-software.com/erpconnect-samples/executing-bw-queries)
- [Transferring data packets with BWQuery class](https://kb.theobald-software.com/erpconnect-samples/transferring-data-packets-with-bwquery-class)