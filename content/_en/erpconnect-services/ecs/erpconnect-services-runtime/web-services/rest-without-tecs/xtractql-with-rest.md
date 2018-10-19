---
ref: ecs-runtime-rest-without-tecs-03
layout: page
title: XtractQL with REST
description: XtractQL with REST
product: erpconnect-services
parent: rest-without-tecs
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-xtractql-with-rest
---

The following code example from a SharePoint application page shows how the first ten records of SAP table *MAKT* are read, using an XtractQL query within JavaScript with AJAX:

<details>
<summary>Javascript.</summary>
{% highlight javascript %}
$(document).ready(function () {
var q = 'SELECT TOP 10 * FROM MAKT';
$.getJSON('/_vti_bin/ERPConnectServiceRest.svc/ExecuteXQL?q=' + q,
function (data) {
// TODO: Handle JSON response!
});
{% endhighlight %}
</details>

The *ExecuteXQL* operation of the *ERPConnectServiceRest.svc* Web service returns a JSON object. AJAX is enabled through the *$.getJSON*-method of jQuery (see [www.jquery.com](http://www.jquery.com)). 

*JSON* is an acronym for *JavaScript Object Notation* and is a lightweight data exchange format. For the development with jQuery and the use of AJAX, the web debugger tool *Fiddler2* ([www.fiddler2.com](http://www.fiddler2.com)) can be very useful: 


![ECS-JSON-Fiddler](/img/content/ECS-JSON-Fiddler.png){:class="img-responsive" }

**Result as XML**

In addition to returning data JSON format, you can request the data to be returned as XML:

<details>
<summary>Javascript</summary>
{% highlight javascript %}
$.ajax({ 
type: 'POST', 
url: '/_vti_bin/ERPConnectServiceRest.svc/ExecuteXQLAsXml', 
data: '"http://www.theobald-software.com/ERPConnectServices\">
' + q + '', 
processData: false, 
dataType: "xml", 
contentType: 'text/xml; charset=utf-8', 
success: function (xml) { 
alert($(xml).text()); 
} 
});
{% endhighlight %}
</details>

**Use of a specific ECS Application**

If the program should access a specific ERPConnect Services Application, please use the parameter applicationName.

<details>
<summary>Javascript</summary>
{% highlight javascript %}
$(document).ready(function () {
var q = 'SELECT TOP 10 * FROM MAKT';
$.getJSON('/_vti_bin/ERPConnectServiceRest.svc/ExecuteXQL?applicationName=ECC&q=' + q,
function (data) {
// TODO: Handle JSON response!
});
{% endhighlight %}
</details>

**Return Value**

Using the REST interface each XQL statement must return a table as a result. More than one return parameters are not supported.
For the execute statement a @RETVAL parameter must be defined. 


**Example with RESTClient**

[RESTClient](http://restclient.net/) is an add-on for many browsers that enables you to call REST Services. The following screenshot shows how to execute an XtractQL statement using the ECS REST services. 

![ECS-RESTClient-XQL](/img/content/ECS-RESTClient-XQL.png){:class="img-responsive" }
