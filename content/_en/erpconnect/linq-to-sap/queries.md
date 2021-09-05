---
ref: ec-linq-to-sap-05
layout: page
title: SAP Query
description: Queries
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=linq-to-sap-queries
---


The following section shows how to use the SAP Query component of the *LINQ to ERP* toolbox.

{: .box-note }
**Note:** The SAP Query component does not support BW queries.

#### About this Example Query
The following example demonstrates how a demo query called *ZVV01* is addressed in the *ZTHEO* user group. <br>
The screenshots below show the query's selection screen, as well as the list output in SAP. <br>
![LINQToERP-Queries_001](/img/content/LINQToERP-Queries_001.png){:class="img-responsive" width="600px"}
![LINQToERP-Queries_002](/img/content/LINQToERP-Queries_002.png){:class="img-responsive" width="800px"}
The output contains sales data (join between VBAK and VBAP).


### Look Up a Query
1. Drag&Drop the SAP Query component into the *LINQ to ERP* DataContext. A search window opens. 
2. Enter the name of the SAP Query to be extracted in the field **Query Name** or enter the name of a User Group in the fiels **User Group**. Use wildcards (*) if needed. <br>
![LINQToERP-Queries_003](/img/content/LINQToERP-Queries_003.png){:class="img-responsive" width="400px"}
3. Click **[Search]** (binoculars icon). Search results appear in the preview window.
4. Select an SAP Query and click **[OK]**.


### Process a Query

1. Optional: Search a variant to apply or edit. 
2. Specify which values need to be accessible in the code by checking *Pass*.
3. Define variable names for the accessible values. The default names are supplied by SAP. 
4. You can rename the DataContext method in the field **Method** in the upper right-hand area.<br>
You can also rename the class that represents a single row in the field **Object** and the class that represents the entire query output in the field **Collection**. <br>
![LINQToERP-Queries_004](/img/content/LINQToERP-Queries_004.png){:class="img-responsive" width="600px"}
5. Navigate to the tab *Fields* and uncheck unneeded fields and/or rename fields. <br>
![LINQToERP-Queries_005](/img/content/LINQToERP-Queries_005.png){:class="img-responsive" width="600px"}
6. The DataContext class now offers a function to execute the query. 
The parameters of the function in IntelliSense represent the selected options from step 2. Example:<br>
![LINQToERP-Queries_006](/img/content/LINQToERP-Queries_006.png){:class="img-responsive"}
Both parameter values correspond to range objects introduced in the section [Example for calling a query](../sap-queries/example-for-calling-a-query). 

Example code:

```csharp
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
```

In this example text boxes serve as variables, see screenshot below.

![LINQToERP-Queries_007](/img/content/LINQToERP-Queries_007.png){:class="img-responsive" width="800px"}
