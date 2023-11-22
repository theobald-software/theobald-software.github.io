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

The following sample shows how to fetch data from a BW Query using ERPConnect.

### About the Sample Query
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
2. Use the *CreateCube* function to create a BWCube object. 
Its name is made up of the cube name and query name.
3. The cube object offers a collection for all contained dimensions (Dimensions) and key figures (Measures). 
If the attribute *SelectForFlatMDX* is set to true, the component is added to the query output. <br>
Add the dimensions *Material* and *Sold-to party* and the key figures *Billed Quantity* and *Costs* to the query output.
4. To fill the variables with values, address them via the variables collection. 
There are range tables behind each variable.
5. Execute the BW query with *Execute*. The output is a table of the *DataTable* type. 

{: .box-note }
**Note**: The denomination of the key figures via the query generation in the designer does not conform to the original 
technical name. That means key figures are addressed by the ordinal number, not the name.

### Sample Code

```csharp
private void Go_Click(object sender, System.EventArgs e)
       {
       using (R3Connection con = new R3Connection("SAPServer", 00, "SAPUser", "Password", "EN", "800"))
             { 
 
                 BWCube query = con.CreateBWCube("0D_DECU/ZSIMPLEQUERY");
                 query.Dimensions["0D_MATERIAL"].SelectForFlatMDX = true;
                 query.Dimensions["0D_SOLD_TO"].SelectForFlatMDX = true;
                 query.Measures[0].SelectForFlatMDX = true;
                 query.Measures[1].SelectForFlatMDX = true;
 
                 query.Variables["MAT01"].SingleRange.LowValue = this.txtMatNr.Text;
			 
                 this.dataGrid1.DataSource = query.Execute();
             }
       }
```
<!---
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
-->


****
#### Related Links
- [Executing BW Queries](https://kb.theobald-software.com/erpconnect-samples/executing-bw-queries)
