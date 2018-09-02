---
layout: page
title: Auxiliary functions
description: Auxiliary functions
product: erpconnect
parent: sap-queries
permalink: /:collection/:path
weight: 2
lang: en_GB
---

The ERPConnect.Queries.QueryHelper class offers various auxiliary functions surrounding SAP queries such as the ability to search for queries in general or ascertain the related variant (incl. text). The following example shows a simple search function. All auxiliary functions always output a list in table form. These tables are classes that are in the same namespace and inherited from the System.Data.DataTable class. They can therefore be very easily further processed or linked to a control element. Following the example program, you will find a list of all auxiliary classes and their functions.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using ERPConnect;  
using ERPConnect.Queries;  
using ERPConnect.Queries.QueryHelper;  
    
using(R3Connection con = new R3Connection("host", 11, "RFCTestUser", "pass01", "EN", "800"))  
{
    con.Open();  
        
    QueryHelper qh = new QueryHelper(con);  
    SearchResultQueryDataTable ret =  
    qh.SearchForQueries(WorkSpace.GlobalArea,"","*MB*","");  
        
    FormQueryHelper f1 = new FormQueryHelper();  
    f1.dataGrid1.DataSource = ret;  
    f1.ShowDialog(); 
}
{% endhighlight %}
</details>

![AuxiliaryFunctions01](/img/content/AuxiliaryFunctions01.png){:class="img-responsive" width="600px"}

**SearchForQueries**

Based on specified work space, user group search pattern, query name search pattern and function area name search pattern, this reads out all executable queries in the system and returns the query output.

**SearchForUserGroups**

Based on specified work space and user group search pattern, this reads out all suitable user groups.

**SearchForVariants**

Based on specified work area, user group name and query name, this reads out all available variants for the query (incl. descriptive text). These variants can then be transferred to e.g. the Variant attribute of the query object. 