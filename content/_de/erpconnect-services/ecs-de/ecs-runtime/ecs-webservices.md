---
ref: ecs-erpconnect-services-runtime-03
layout: page
title: Webservices
description: Webservices
product: erpconnect-services
parent: ecs-runtime
childidentifier: ecs-webservices
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-webservices
---

ERPConnect Services bietet im SharePoint-Verzeichnis *_vti_bin* zwei öffentliche Webdienste (Webservices) an:

- ERPConnectService.svc und (SOAP Webservice)
- ERPConnectServiceRest.svc (REST Webservice)
auf die innerhalb von SharePoint-Anwendungen wie Application Pages zugegriffen werden kann.

**REST**<br>
Für die Entwicklung und Nutzung der ERPConnect Services unter *JavaScript bzw. jQuery* wird der REST-basierte Webdienst ERPConnectServiceRest.svc bereitgestellt. Mit Hilfe der JavaScript-Bibliothek jQuery lassen sich sehr einfach AJAX-Anfragen erstellen.<br>
Der REST-Service bietet Zugriff auf die Objekte *Function Module, Table* und *XtractQL*. Die jeweiligen Operationen können JSON oder XML zurückliefern. Bei komplexen Übergabe-parametern werden POST-Abfragen eingesetzt.

*WICHTIG*: Für Desktop-Anwendungen sollten immer nur die von ERPConnect Services ausgelieferten Client-Assemblies verwendet werden. Nur diese Bibliotheken gewähren den vollständigen und korrekten Einsatz der ERPConnect Services Funktionalität.

**HTTP POST**<br>
Die unterschiedlichen REST-Operationen lassen sich mit dem HTTP-Verb POST abfragen. Die Übergabeparameter für POST-Abfragen werden entweder im Format JSON oder XML im HTTP-Body übergeben. 


**REST-Operationen**<br>
Die folgende Liste zeigt die von ERPConnect Services angebotenen REST-Operationen:
- BeginConnectionScope
- EndConnectionScope
- ExecuteXQL
- CreateFunction
- ExecuteFunction
- ExecuteTableQuery

Die REST-API ist wie folgt definiert und gibt einen Einblick über die Funktionen:

<details>
<summary>[C#]</summary>
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


**JavaScript-Bibliothek JSON2.js**<br>
Die JavaScript-Bibliothek JSON2.js ist beim Umwandeln von JavaScript-Objekten in eine JSON-Zeichenkette sehr hilfreich. Die Datei kann auf der Internetseite [www.json.org](http://www.json.org) kostenlos heruntergeladen werden. In den hier gezeigten Programmbeispielen kommt die Funktion JSON.stringify zum Einsatz.    

JSON steht für JavaScript Object Notation und ist ein schlankes Datenaustauschformat. Für die Entwicklung mit jQuery und dem Einsatz von AJAX ist das Datentransfertool Fiddler2 ([www.fiddler2.com](http://www.fiddler2.com)) sehr geeignet:  

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}     