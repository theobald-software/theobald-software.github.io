---
ref: ecs-erpconnect-services-runtime-03
layout: page
title: Web Services
description: Web Services
product: erpconnect-services
parent: erpconnect-services-runtime
childidentifier: web-services
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-web-services
---

ERPConnect Services provides two Web services in the SharePoint folder *_vti_bin:*

- *ERPConnectService.svc* (SOAP Web services)
- *ERPConnectServiceRest.svc* (REST Web services)

You can access the Web services using *JavaScript* or *jQuery* within a SharePoint application or an application page.

**REST**<br>
For the development and use of ERPConnect Services with JavaScript or jQuery, the REST based Web service *ERPConnectServiceRest.svc* is being offered. Using the JavaScript library jQuery, you can create AJAX queries with little effort.
The REST service provides access to the objects *Function Module, Table* and *XtractQL*. The operations will return *JSON* or *XML* formatted data. 

*IMPORTANT*: For desktop applications you should always use the client assemblies that are delivered with ERPConnect Services. Only the client libraries will ensure the complete functionality and correct usage of ERPConnect Services.

**HTTP POST**<br>
The REST operations are supported with the HTTP method *POST*. 

**REST operations**<br>
The following list shows the REST operations that are provided with ERPConnect Services:
- BeginConnectionScope
- EndConnectionScope
- ExecuteXQL
- CreateFunction
- ExecuteFunction
- ExecuteTableQuery

The REST API is defined as following and gives an overview about the functions:



<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
[ServiceContract(Namespace = ERPConnectServiceNamespaces.Contract)]
public interface IERPConnectServiceWSRest
{
  #region Connection Scope Operations
 
  // NOTE: WebMessageBodyStyle.WrappedRequest is not supported for single parameters (see JsonOperationFormatterBehavior)
  [OperationContract]
  [WebInvoke(RequestFormat = WebMessageFormat.Json)]
  ERPExecutionInfo BeginConnectionScope(string applicationName);
 
  [OperationContract]
  [WebInvoke(BodyStyle = WebMessageBodyStyle.WrappedRequest, RequestFormat = WebMessageFormat.Json)]
  ERPExecutionInfo EndConnectionScope(string applicationName, ERPConnectionScope connectionScope);
 
  #endregion
 
  #region XQL Operations
 
  [OperationContract]
  [WebInvoke(BodyStyle = WebMessageBodyStyle.WrappedRequest, RequestFormat = WebMessageFormat.Json)]
  ERPExecutionInfo ExecuteXQL(string applicationName, ERPConnectionScope connectionScope, string query);
 
  #endregion
 
  #region Function Module Operations
 
  [OperationContract]
  [WebInvoke(BodyStyle = WebMessageBodyStyle.WrappedRequest, RequestFormat = WebMessageFormat.Json)]
  ERPExecutionInfo CreateFunction(string applicationName, ERPConnectionScope connectionScope, string name);
 
  [OperationContract]
  [WebInvoke(BodyStyle = WebMessageBodyStyle.WrappedRequest, RequestFormat = WebMessageFormat.Json)]
  ERPExecutionInfo ExecuteFunction(string applicationName, ERPConnectionScope connectionScope, ERPFunction function);
 
  #endregion
 
  #region Table Operations
 
  [OperationContract]
  [WebInvoke(BodyStyle = WebMessageBodyStyle.WrappedRequest, RequestFormat = WebMessageFormat.Json)]
  ERPExecutionInfo ExecuteTableQuery(string applicationName, ERPConnectionScope connectionScope, string tableName, ExecuteTableQuerySettings settings);
 
  #endregion
}
{% endhighlight %}
</details>

The ExecuteTableQuerySettings class has the following properties:



<details>
<summary>class Execute TableQuerySettings in C#.</summary>
{% highlight csharp %}
region class ExecuteTableQuerySettings
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


**JavaScript library JSON2.js**<br>
The JavaScript library JSON2.js is useful to convert JavaScript objects to JSON strings. The library is available for download at [www.json.org](http://www.json.org). The code examples in this chapter make use of the function *JSON.stringify* which is provided by the library.

*JSON* is an acronym for *JavaScript Object Notation* and is a lightweight data exchange format. For the development with jQuery and the use of AJAX, the web debugger tool [Fiddler2](http://www.fiddler2.com) can be very useful.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}