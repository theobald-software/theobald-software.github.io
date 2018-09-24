---
layout: page
title: Tabelle mit REST
description: Tabelle mit REST
product: erpconnect-services
parent: rest-ohne-tecs
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-tabelle-mit-rest
---

Das nächste Beispiel zeigt die Verwendung der REST-Operation ExecuteTableQuery, die eine SAP-Tabelle ausliest. Zunächst wird eine JSON-Zeichenkette mit den Parameter erstellt. Hierzu wird die JavaScript-Funktion JSON.stringify verwendet. Das JS-Objekt definiert die SAP-Tabelle (T001) und zusätzliche Abfrageoptionen, wie RowCount, also die Anzahl der zurückzulieferenden Datensätze:

<details>
<summary>[Javascript]</summary>
{% highlight javascript %}
var json = JSON.stringify({ tableName: 'T001', settings: { RowCount: 10 } }); 
$.ajax({ 
url: '/_vti_bin/ERPConnectServiceRest.svc/ExecuteTableQuery', 
type: 'POST', 
data: json, 
dataType: "json", 
contentType: 'application/json; charset=utf-8', 
success: function (data) { 
alert(data.ExecuteTableQueryResult.Rows.Items.length); 
} 
});
{% endhighlight %}
</details>

Die JSON-Rückgabe sieht wie folgt aus:

![ECS-JSON-Output](/img/content/ECS-JSON-Output.png){:class="img-responsive"}

**Aufruf einer spezifischen ECS Application und Table Settings**

Um auf eine spezifische ERPConnect Services (ECS) Application zugreifen, nutzen Sie die Eigeschaft **applicationName**.<br>
Das folgende Beispiel zeigt, wie Sie **settings** verwenden, um Eigenschaften wie rowCount, orderClause, customFunction und fields zu verwenden.


<details>
<summary>[Javascript]</summary>
{% highlight javascript %}
$(document).ready(function () {
           var json = JSON.stringify({
               applicationName: 'ECC',
               tableName: 'KNA1',
               settings: {
                   rowSkip:0,
                   rowCount: 100,
                   whereClause: "LAND1 = 'US'",
                   orderClause:'LAND1 DESC',
                   customfunction: 'Z_XTRACT_IS_TABLE',
                   useMultibyteExtraction: false,
                   fields: { items: ["KUNNR", "NAME1", "LAND1"] }
               }               
           });
 
           $.ajax({
               url: '/_vti_bin/ERPConnectServiceRest.svc/ExecuteTableQuery',
               type: 'POST',
               data: json,
               dataType: 'json',
               contentType: 'application/json; charset=utf-8',
               success: function (data) {
                   if (!data.error) {
                       alert('Rows No :' + data.result.rows.length);
                       //Sys.Debug.traceDump(data, 'data');
                   }
                   else {
                       alert("An error occured: " + data.error.type + ' ' + data.error.message + ' ' + data.error.strackTrace);
                   }
               },
               error: function(data){
                   alert("An error occured: " + data.status + ' ' + data.statusText + ' ' + data.responseText);               
               }
           });
{% endhighlight %}
</details>

**Beispiel mit RESTClient**

RESTClient ist ein Add-on für verschieden Browser und ermöglicht das Testen von REST Services. Das folgende Screenshot zeigt, wie Sie einen XtractQL-Befehl mit Hilfe der ECS REST services ausführen können. 

![ECS-RESTClient-XQL](/img/content/ECS-RESTClient-XQL.png){:class="img-responsive"}