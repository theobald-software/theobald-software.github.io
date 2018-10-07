---
layout: page
title: SAP Table
description: SAP Table
product: erpconnect-services
parent: application-development
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-table-restrictions
---

In order for ERPConnect Services to utilize a custom function module (e.g. *Z_XTRACT_IS_TABLE*) instead of the standard SAP function module to avoid restrictions by reading SAP tables, you will use the CustomFunction property of the *ExecuteTableQuerySettings* class.



<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
ERPConnectServiceClient client = new ERPConnectServiceClient();
DataTable dt = client.ExecuteTableQuery("VBAK",
new ExecuteTableQuerySettings {
CustomFunction = "Z_XTRACT_IS_TABLE"
RowCount = 10
});
{% endhighlight %}
</details>

**Table Restrictions** 

In the section [Table restrictions](../appendix/table-restrictions) you can find more information about the restrictions and how to install the custom function module 
Z_XTRACT_IS_TABLE to avoid them. 