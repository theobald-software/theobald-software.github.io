---
ref: ecs-runtime-application-desktop-01
layout: page
title: Table
description: Table
product: erpconnect-services
parent: application-desktop
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-desktop-table
---

The previous example showed how the *ExecuteTableQuery* method of class *ERPConnectServiceClient* can be used to query a table in the SAP. Depending on the type of application, the *ExecuteTableQuery* method returns the result set as data structure DataTable or as a similar data structure *ERPDataTable*. For SharePoint and desktop applications you can use the ExecuteTableQuery in the following ways:

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
public DataTable ExecuteTableQuery(string tableName)
public DataTable ExecuteTableQuery(string tableName, ExecuteTableQuerySettings settings)
{% endhighlight %}
</details>

The following example illustrates how material descriptions that are stored in SAP table *MAKT* can be read. First, you create an instance of *ERPConnectServiceClient* by specifying the public URL for the SharePoint server.
To read material descriptions in English language only, we add the criteria *SPRAS = 'EN'*  to the WhereClause. The value SPRAS represents the column which stores the language key in table *MAKT*. Only the first ten records will be returned (RowCount = 10).

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using ERPConnectServices;
// ... 
ERPConnectServiceClient client = new ERPConnectServiceClient("http://SERVERNAME"); 
DataTable dt = client.ExecuteTableQuery("MAKT", 
new ExecuteTableQuerySettings { 
RowCount = 10, 
WhereClause = "SPRAS = 'EN'" 
});
{% endhighlight %}
</details>

If you only want to return certain columns of the table, you can use the *Fields* property of the class *ExecuteTableQuerySettings:*

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
Fields.Add("ColumnName");
{% endhighlight %}
</details>

The picture below shows the data returned by the query example.

![ECS-VS-Table-Preview](/img/content/ECS-VS-Table-Preview.png){:class="img-responsive" }