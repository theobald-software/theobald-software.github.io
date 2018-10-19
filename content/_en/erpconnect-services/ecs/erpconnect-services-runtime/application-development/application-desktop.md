---
ref: ecs-runtime-application-development-02
layout: page
title: Desktop Applications
description: Desktop Applications
product: erpconnect-services
parent: application-development
childidentifier: application-desktop
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-desktop-applications
---

For developing Desktop applications use the ERPConnectServices.Client.dll. 
The *ERPConnectServiceClient* class offers the following public methods. 

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
public ERPConnectServiceClient(string siteUrl)
public ERPConnectServiceClient(string siteUrl, string applicationName)
public ERPConnectServiceClient(string siteUrl, string applicationName, string ssoTicket)
public ERPConnectServiceClient(string siteUrl, string applicationName, IAuthenticationProvider authenticationProvider)
  
public IDisposable BeginConnectionScope()
public void EndConnectionScope()
  
public DataTable ExecuteTableQuery(string tableName)
public DataTable ExecuteTableQuery(string tableName, ExecuteTableQuerySettings settings)
  
  
public ERPFunction CreateFunction(string name)
  
public DataTable ExecuteXQL(string query)
public DataTable ExecuteXQL(string query, ERPXtractQLParameterCollection parameters)
 
#region class ExecuteTableQuerySettings
public class ExecuteTableQuerySettings
    {
        public int RowSkip { get; set; }
        public int RowCount { get; set; }
        public string WhereClause { get; set; }
        public string OrderClause { get; set; }
        public string CustomFunction { get; set; }
        public bool UseMultibyteExtraction { get; set; }
        public ERPCollection Fields { get; set; }       
    }
#endregion
{% endhighlight %}
</details>


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}