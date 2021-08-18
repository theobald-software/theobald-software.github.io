---
ref: ec-linq-to-sap-05
layout: page
title: Queries
description: Queries
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=linq-to-sap-queries
---


{: .box-warning }
**Warning! Deprecated component** 
As of Visual Studio Version 2019 and .Net4.5 the *LINQ to SAP* add-on is not supported anymore.


**You can find the code for this example in the ERPConnect installation directory in the LINQQuery directory.**

Apart from the table integration described in the previous two sections, LINQ to SAP also supports SAP queries as LINQ-capable data sources (important: do not mix these up with BW queries!). The following example demonstrates how a demo query called ZVV01 is addressed in the ZTHEO user group. The screenshot below shows the query's selection screen, as well as the list output. The contents output here by the query (join between VBAK and VBAP) are sales data.


![LINQToERP-Queries_001](/img/content/LINQToERP-Queries_001.png){:class="img-responsive" width="600px"}

![LINQToERP-Queries_002](/img/content/LINQToERP-Queries_002.png){:class="img-responsive" width="800px"}

To activate a query on the .NET end, drag the query symbol from the toolbox to the data context. You have access to a search mask after logging on.

![LINQToERP-Queries_003](/img/content/LINQToERP-Queries_003.png){:class="img-responsive" width="400px"}

In the dialog you can specify whether the values for each select option should be accessible in the code or not (*Pass* is checked off here) and, if so, what the variable name should be (the default name given by SAP might be rather cryptic). An additional variant can also be applied here. In the upper right-hand area, the name of the later DataContext method is defined (*Method*), as well as what the class that represents a single row should be called (*Object*) and what the class should be called which represents the entire query output (*Collection*). 

![LINQToERP-Queries_004](/img/content/LINQToERP-Queries_004.png){:class="img-responsive" width="600px"}

In the fields tab, unneeded fields can be unchecked or renamed.


![LINQToERP-Queries_005](/img/content/LINQToERP-Queries_005.png){:class="img-responsive" width="600px"}

As the following code snippet shows, the DataContext class now offers a function to execute the query. As a parameter value you'll be able to recognize both of the select options in IntelliSense.

![LINQToERP-Queries_006](/img/content/LINQToERP-Queries_006.png){:class="img-responsive" width="800px"}

Both parameter values correspond with the range objects introduced in section [Example for calling a query](../sap-queries/example-for-calling-a-query). Here is the code now for the query. Text boxes serve as variables here (see screenshot below).

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
private void btnGo_Click(object sender, EventArgs e) 
{ 
   SAPContext sc = new SAPContext("TestUser", "SECRET01"); 
  
   QuerySelectionParameter SoldTo = new QuerySelectionParameter(); 
   SoldTo.AddRange(Sign.Include,RangeOption.Between, 
      txtCustomerLow.Text,txtCustomerHigh.Text); 
  
   QuerySelectionParameter MatNr = new QuerySelectionParameter(); 
   MatNr.AddRange(txtMatnr.Text); 
  
   var MyQueryResult = from res in sc.ZVV01(SoldTo, MatNr) select res; 
   this.dataGridView1.DataSource = MyQueryResult.ToList(); 
}
{% endhighlight %}
</details>

![LINQToERP-Queries_007](/img/content/LINQToERP-Queries_007.png){:class="img-responsive" width="800px"}
