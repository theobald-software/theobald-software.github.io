---
layout: page
title: XtractQL mit REST
description: XtractQL mit REST
product: erpconnect-services
parent: rest-ohne-tecs
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-xtractql-mit-rest
---

Das folgende Programmbeispiel aus einer SharePoint Application Page zeigt wie die ersten zehn Datensätze der SAP-Tabelle MAKT mit Hilfe einer XtractQL-Abfrage innerhalb von JavaScript mit AJAX abgerufen werden:


<details>
<summary>[Javascript]</summary>
{% highlight javascript %}
$(document).ready(function () {
var q = 'SELECT TOP 10 * FROM MAKT';
$.getJSON('/_vti_bin/ERPConnectServiceRest.svc/ExecuteXQL?q=' + q,
function (data) {
// TODO: Handle JSON response!
});
{% endhighlight %}
</details>

Die *ExecuteXQL-Operation* des *ERPConnectServiceRest.svc*-Webdienstes liefert ein JSON-Objekt als Rückgabe. Der AJAX-Abruf erfolgt über die *$.getJSON*-Methode von jQuery (siehe [www.jquery.com]()). 

JSON steht für JavaScript Object Notation und ist ein schlankes Datenaustauschformat. Für die Entwicklung mit jQuery und dem Einsatz von AJAX ist das Datentransfertool Fiddler2 ([www.fiddler2.com]()) sehr geeignet: 


![ECS-JSON-Fiddler](/img/content/ECS-JSON-Fiddler.png){:class="img-responsive"}

**XML-Rückgage**

Neben einer JSON-Rückgabe besteht die Möglichkeit Daten als XML anzufordern:

<details>
<summary>[Javascript]</summary>
{% highlight javascript %}
$.ajax({
type: 'POST',
url: '/_vti_bin/ERPConnectServiceRest.svc/ExecuteXQLAsXml',
data: '"http://www.theobald-software.com/ERPConnectServices\">
' + q + '
',
processData: false,
dataType: "xml",
contentType: 'text/xml; charset=utf-8',
success: function (xml) {
alert($(xml).text());
}
});
{% endhighlight %}
</details>

**Aufruf einer spezifischen ECS Application**

Sollte Ihr Programm auf eine spezifische ERPConnect Services Application zugreifen, dann nutzen Sie die Eigeschaft applicationName.

<details>
<summary>[Javascript]</summary>
{% highlight javascript %}
$(document).ready(function () {
var q = 'SELECT TOP 10 * FROM MAKT';
$.getJSON('/_vti_bin/ERPConnectServiceRest.svc/ExecuteXQL?applicationName=ECC&q=' + q,
function (data) {
// TODO: Handle JSON response!
});
{% endhighlight %}
</details>

**Rückgabe**

Bei der Verwendung über die REST-Schnittstelle muss jedes XQL-Statement eine Tabelle zurückgeben.<br>
Für das EXECUTE-Statement muss ein @RETVAL definiert werden. Es können nicht mehrere Parameter zurückgegeben werden.

**Beispiel mit RESTClient**

[RESTClient](http://restclient.net/) ist ein Add-on für verschieden Browser und ermöglicht das Testen von REST Services. Das folgende Screenshot zeigt, wie Sie Daten aus einer SAP-Tabelle mit Hilfe der ECS REST services abrufen können. 

![ECS-RESTClient-Table](/img/content/ECS-RESTClient-Table.png){:class="img-responsive"}