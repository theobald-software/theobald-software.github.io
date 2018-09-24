---
layout: page
title: Desktop-Anwendungen
description: Desktop-Anwendungen
product: erpconnect-services
parent: ecs-anwendungsentwicklung
childidentifier: ecs-desktop-anwendungen
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-desktop-anwendungen
---

Für die Entwicklung von Desktop-Anwendungen nutzen Sie die Bibliothek **ERPConnectServices.Client.dll**. 

Die Klasse ERPConnectServiceClient bietet die folgenden öffentlichen Methoden. 

<details>
<summary>[C#]</summary>
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

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
