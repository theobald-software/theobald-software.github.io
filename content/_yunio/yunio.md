---
layout: page
title: Yunio
description: Yunio main page
slug: landing
collection: yunio
weight: 1
---

## Landing page for YunIO
Why do developers writing C# code always walk into walls?
Because they don't C Sharp.
```csharp
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
  
```