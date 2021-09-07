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

### About the Sample Query
This example uses the training Query *D3* which contains flight information of airplanes. 
Data that matches certain selection criteria (e.g. airline and date of flight) is fetched and drawn into a *DataGrid*, see screenshot below. 

![SAP-Query-Execution](/img/content/SAP-Query-Execution.png){:class="img-responsive" }

### Look Up a Query
1. Drag&Drop the SAP Query component into the *LINQ to ERP* DataContext. A search window opens. 
2. Enter the name of the SAP Query to be extracted in the field **Query Name** or enter the name of a User Group in the fields **User Group** (1). Use wildcards (*) if needed. <br>
![LINQToERP-Queries_003](/img/content/LINQToERP-Queries_003.png){:class="img-responsive"}
3. Click **[Search]** (binoculars icon) (2). Search results appear in the preview window.
4. Select an SAP Query (3) and click **[OK]** (4) to proceed.


### Process a Query

1. Optional: Search a variant to apply or edit. 
2. Specify which values need to be accessible in the code by checking *Pass* (5).
3. Define variable names for the accessible values. The default names are supplied by SAP. 
4. You can rename the DataContext method in the field **Method** (6).<br>
You can also rename the class that represents a single row in the field **Object** and the class that represents the entire query output in the field **Collection**. <br>
![LINQToERP-Queries_004](/img/content/LINQToERP-Queries_004.png){:class="img-responsive" width="600px"}
5. Navigate to the tab *Fields* and uncheck unneeded fields and/or rename fields. 
6. The DataContext class now offers a function to execute the query. 
The parameter values correspond to range objects introduced in the section [Calling SAP Queries](../sap-queries/example-for-calling-a-query). 

### How to Use the Class in your Code

Save the .erp file that contains the extraction component to trigger the proxy classes code generation in the background.<br>
The following code shows how to use the generated classes in the context of this example:

```csharp
private void btnGo_Click(object sender, EventArgs e) 
{ 
            SAPContext sc = new SAPContext("SAPUser", "Password");
            
            // Create Query object Query q; 
            try
            {
                QuerySelectionParameter airline = new QuerySelectionParameter();
                airline.AddRange(inputAirline.Text);
				
				QuerySelectionParameter date = new QuerySelectionParameter();
                date.AddRange(Sign.Include, RangeOption.Between, inputStartDate.Text, inputEndDate.Text);

                var MyQueryResult = from res in sc.D3(airline, date) select res;
                this.dataGridView1.DataSource = MyQueryResult.ToList();
            }
            catch (Exception e1)
            {
                MessageBox.Show(e1.Message);
                return;
            }
}
```
