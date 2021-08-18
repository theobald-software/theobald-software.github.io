---
ref: ec-sap-queries-01
layout: page
title: Calling a query
description: Example for calling a query
product: erpconnect
parent: sap-queries
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=example-for-calling-a-query
---

The following section shows how to call an SAP query.

### Fetching Data
The following example shows how to extract data from a materials management query, see screenshot below. 

![SAP-Query-Execution](/img/content/SAP-Query-Execution.png){:class="img-responsive" }

{: .box-note }
**Note**: If you don't know the technical name of a Parameter, you can look it up in your SAP-System.
Use the transaction **SQ01** or **SQ02** to search your Query. Open the description of the Query and scroll to the section *Selections*.
All parameter properties including the name are listed in a table.

1. Open a client connection to the R/3 system using the R3Connection class.
2. Use the *CreateQuery* method to create a query object. 
Each SAP query is defined by three descriptors: 
- the user workspace (whether local or global)
- the user group (in this example */SAPQUERY/MB*)
- the name of the query itself (in this example *MEBESTWERTAN*)
3. Define the parameters of the query. Every parameter has a distinctly technical name. 
You can access the parameter's range collection via the indexer.
Use 'Add' to add a new range to "SP$00017" (material number) and "S_WAERS" (currency). <br>
An individual range is defined by three descriptors:
- a sign (include or exclude)
- an operator (e.g. *equals* for parity) 
- a low or high value (LowValue and HighValue or only LowValue when using parity).  
3. When all of selections are defined, execute the query with the *Execute* method. <br>
The query output is an ADO.NET DataTable. It can be accessed using the Result attribute of the query object.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
private void btnFetchQueryData_Click(object sender, System.EventArgs e)
    {
      R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");
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
{% endhighlight %}
</details>
<!---
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
-->
