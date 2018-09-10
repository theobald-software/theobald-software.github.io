---
layout: page
title: Table with REST
description: Table with REST
product: erpconnect-services
parent: rest-without-tecs
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=rest-without-tecs
---


The following example illustrates how the REST operation ExecuteTableQuery can be used to read data from an SAP table. Initially, a JSON string with the query parameters is created using the JavaScript function *JSON.stringify*. The JS object defines the SAP table (*T001*) as well as additional query parameters, such as *RowCount* for the number of records returned.



<details>
<summary>Javascript.</summary>
{% highlight javascript %}
var json = JSON.stringify({ tableName: 'T001', settings: { RowCount: 10 } }); 
$.ajax({ 
 url: '/_vti_bin/ERPConnectServiceRest.svc/ExecuteTableQuery', 
 type: 'POST', 
 data: json, 
 dataType: "json", 
 contentType: 'application/json; charset=utf-8', 
 success: function (data) {  
  if(!data.error){
   alert(data.result.rows.length);  
  }
  else{
   alert(data.error.message);
  }
 } 
});
{% endhighlight %}
</details>

The JSON return data looks as shown below:

![ECS-JSON-Output](/img/content/ECS-JSON-Output.png){:class="img-responsive" }

**Using of ECS Application and Tabe Settings**

To access a specific ERPConnect Services (ECS) Application, use the property applicationName.
The following sample shows how to use table settings like rowCount, orderClause, customFunction and fields.

<details>
<summary>Javascript.</summary>
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
                       alert("An error occured: " + data.error.type + ' ' + data.error.message
                                                                + ' ' + data.error.strackTrace);
                   }
               },
               error: function(data){
                   alert("An error occured: " + data.status + ' ' + data.statusText + ' ' + data.responseText);               
               }
           });
});
{% endhighlight %}
</details>


**Example with RESTClient**

[RESTClient]() is an add-on for many browsers that enables you to call REST Services. The following screenshot shows how to extract data from an SAP Table using the ECS REST services. 

![ECS-RESTClient-Table](/img/content/ECS-RESTClient-Table.png){:class="img-responsive" }