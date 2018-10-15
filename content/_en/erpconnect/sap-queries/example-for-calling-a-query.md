---
layout: page
title: Example for calling a query
description: Example for calling a query
product: erpconnect
parent: sap-queries
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=example-for-calling-a-query
---

In the following example, the data from an exemplary query from the area of materials management are extracted. First, with the help of the CreateQuery method from the R3Connection object, the query object is built. Each SAP query is clearly determined by three descriptors: the user area (whether local or global), the user group (in our example /SAPQUERY/MB) and the name of the query itself (MEBESTWERTAN in our case).

Then the ranges are filled. Every parameter has a distinctly technical name. Via the indexer, you can access the parameter's range collection under the name (e.g. SP$00017) and add a new range with Add. An individual range is determined by a sign (include or exclude), an operator (e.g. equals for parity) and a low or high value (LowValue and HighValue). Because we only use parity in our example, the high value is irrelevant here. Both values are required for special operators (e.g. Between). If you don't know the technical name of a SelectionParameter, you can directly invoke the selection image in the SAP GUI, place your cursor in the field, press F1 and then press the "technical info" button. The name will be stated at the very bottom, next to the term "Dynprofield".

When all of the selections have been filled in, the query can be executed with the help of the Execute method. The query output will then be in an ADO.NET DataTable. It can be accessed via the Result attribute of the query object.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
private void btnFetchQueryData_Click(object sender, System.EventArgs e)
       {
          using (R3Connection con = new R3Connection("sapappserver", 00, "sapuser", "password", "EN", "800"))
           {
          
               con.Open(false);
 
               // Create Query object Query q; 
               try
               {
                   q = con.CreateQuery(WorkSpace.GlobalArea,
                      "/SAPQUERY/MB", "MEBESTWERTAN");
 
               // Add a criteria (in this case the material number) 
               q.SelectionParameters["SP$00017"].Ranges.Add(
                  Sign.Include, RangeOption.Equals, "100-100");
 
               // Add a second criteria (in this case the currency) 
               q.SelectionParameters["S_WAERS"].Ranges.Add(
                  Sign.Include, RangeOption.Equals, "USD");
 
               // Run the Query 
               q.Execute();
 
               // Bind result to datagrid 
               this.dgvQuery.DataSource = q.Result;
               }
               catch (Exception e1)
               {
                   MessageBox.Show(e1.Message);
                   return;
               }

           }
       }
{% endhighlight %}
</details>

<br>
<details>
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
Using con As New R3Connection
            con.UserName = "erpconnect"
            con.Password = "pass"
            con.Language = "DE"
            con.Client = "800"
            con.Host = "sapserver"
            con.SystemNumber = 11
 
            con.Open(False)
 
            ' Create Query object 
            Dim q As Query
            Try
                q = con.CreateQuery(WorkSpace.GlobalArea, _
                   "/SAPQUERY/MB", "MEBESTWERTAN")
            Catch e1 As Exception
                MessageBox.Show(e1.Message)
                Exit Sub
            End Try
 
            ' Add a criteria (in this case the material number) 
            q.SelectionParameters("SP$00017").Ranges.Add( _
               Sign.Include, RangeOption.Equals, "100-100")
 
            ' Add a second criteria (in this case the currency) 
            q.SelectionParameters("S_WAERS").Ranges.Add( _
               Sign.Include, RangeOption.Equals, "EUR")
 
            ' Run the Query 
            q.Execute()
 
            ' Bind result to datagrid 
            dataGrid1.DataSource = q.Result
        End Using
{% endhighlight %}
</details>
<br>

![SAP-Query-Execution](/img/content/SAP-Query-Execution.png){:class="img-responsive" }
