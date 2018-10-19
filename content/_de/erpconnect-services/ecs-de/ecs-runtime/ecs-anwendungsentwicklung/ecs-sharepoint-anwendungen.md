---
ref: ecs-runtime-application-development-01
layout: page
title: SharePoint-Anwendungen
description: SharePoint-Anwendungen
product: erpconnect-services
parent: ecs-anwendungsentwicklung
childidentifier: ecs-sharepoint-anwendungen
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-sharepoint-anwendungen
---

Für die Entwicklung von SharePoint Anwendungen nutzen Sie die Bibliotheke **ERPConnectServices.Server.Common.dll**.<br>
Die Klasse *ERPConnectServiceClient*  bietet die folgenden öffentlichen Methoden.


<details>
<summary>[C#]</summary>
{% highlight csharp %}
#region ERPConnectServiceClient
///
/// Initializes a new instance of the ERPConnectServiceClient class.
///
public ERPConnectServiceClient()
  
///
/// Initializes a new instance of the ERPConnectServiceClient class with a given proxy instance.
///
/// The proxy instance.
public ERPConnectServiceClient(ERPConnectServiceApplicationProxy proxy)
  
///
/// Initializes a new instance of the ERPConnectServiceClient class with a given service context instance
/// and a SAP Logon Ticket (SSO ticket).
///
/// The service context.
public ERPConnectServiceClient(string applicationName, string ssoTicket)
  
///
/// Initializes a new instance of the ERPConnectServiceClient class with a given service context instance.
///
/// The service context.
public ERPConnectServiceClient(SPServiceContext serviceContext)
  
///
/// Initializes a new instance of the ERPConnectServiceClient class with a given service context instance and application name.
///
/// The service context.
/// The application name.
public ERPConnectServiceClient(SPServiceContext serviceContext, string applicationName)
#endregion
  
#region Connection Scope Operations
public void BeginConnectionScope()
public void EndConnectionScope()
#endregion
  
#region Function Module Operations
public ERPFunction CreateFunction(string name)
#endregion
  
#region Table Operations
public DataTable ExecuteTableQuery(string tableName)
public DataTable ExecuteTableQuery(string tableName, ExecuteTableQuerySettings settings)
#endregion
  
#region XQL Operations
public ERPDataTable ExecuteXQL(string query)
public ERPDataTable ExecuteXQL(string query, ERPXtractQLParameterCollection parameters)
public DataTable ExecuteXQLAndReturnDataTable(string query)
public DataTable ExecuteXQLAndReturnDataTable(string query, ERPXtractQLParameterCollection parameters)
#endregion
{% endhighlight %}
</details>

Die Klasse ExecuteTableQuerySettings bietet die folgenden öffentlichen Eigenschaften.

<details>
<summary>[class ExecuteTableQuerySettings in C#]</summary>
{% highlight csharp %}
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
