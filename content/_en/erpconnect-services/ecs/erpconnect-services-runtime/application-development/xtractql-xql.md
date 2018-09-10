---
layout: page
title: XtractQL (XQL)
description: XtractQL (XQL)
product: erpconnect-services
parent: application-development
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-development-xtractql
---

ERPConnect Services provides the option of using the *XtractQL (XQL)* query language within your code to read data or execute comprehensive functions in an SAP system. 

The XtractQL syntax combines elements from the SQL and ABAP languages and can be used on

- SAP tables/objects and their metadata
- Funktion modules
- BW cubes,
- SAP queries
- MDX statements

The following example illustrates the execution of an XQL query:



<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using ERPConnectServices;
// ....
ERPConnectServiceClient client = new ERPConnectServiceClient();
DataTable dt = client.ExecuteXQL("SELECT TOP 50 * FROM MAKT");
{% endhighlight %}
</details>

XQL queries return a table as result set. For SAP function modules, you have to specify explicitly which item in the parameter list (imports / tables) will be used as the return structure (see previous query example "INTO @RETVAL").

XtractQL can be very useful for dynamic queries which are constructed at runtime. 


Please refer to the section [XtractQL]() to find more samples and a complete syntax reference. 