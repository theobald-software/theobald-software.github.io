---
layout: page
title: Yunio
description: Yunio main page
parent: home
permalink: /:collection/:path
weight: 1
---

GERMAN VERSION
## Landing page for YunIO

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

<details>
<summary>Show the same C# code, but in this collapsible! Click me!</summary>
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