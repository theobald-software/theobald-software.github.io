---
ref: ecs-runtime-web-services-02
layout: page
title: JavaScript-Bibliothek
description: JavaScript-Bibliothek
product: erpconnect-services
parent: ecs-webservices
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=javascript-bibliothek-fuer-rest
---

Für die Entwicklung mit ECS REST Services und JavaScript empfehlen wir den Einsatz unserer [JavaScript-Bibliothek Client Library tEcs (theobald.ecs.micro) for ERPConnect Services/Core](https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html), welche die clientseitige Programmierung mit JavaScript durch die Kapselung der Basisfunktionen von ECS vereinfacht.

{% highlight javascript %}
theobald.ready(function() {
    tEcs.executeXql({
        serviceApplication: "ec2",
        query: 'SELECT TOP 10 * FROM MAKT'
    }).always(function(result) {
        console.log(result)
    });
   
    tEcs.executeFunction({
        name: 'Z_ECS_GET_STOCKS',
        data: {
            exports: {
                MATNR: '100-100'
            }
        },
        done: function(data) {
            alert('Everything as planned!');
        },
        fail: function(data) {
            alert('Something broke :(');
        }
    });
});
{% endhighlight %}

Für einen SOAP-Service:

{% highlight javascript %}
tEcs.callSoapService({
    //
    // REQUIRED: Name of deployed service
    serviceName: 'SAPCustomerWebService',
    //
    // OPTIONAL: can be put explicitly. If not, then '/_vti_bin/' + serviceName is used
    url: '/_vti_bin/SAPCustomerWebService.svc',
    //
    // Name of action. If not specified, tests the service connection
    actionName: 'GetCustomersByName',
    //
    // JSON of input paramters, OPTIONAL (if no input)
    data: { name: '%' },
    //
    // OPTIONAL: success handler
    done: function(data, status, xhr){ alert('COMPLETED!'); },
    //
    // OPTIONAL: error handler
    fail: function(xhr, status, thrownError){ alert('ERROR!'); },
    // OPTIONAL: will be always executed (on success AND error)
    always: function (data, statusText, errorThrown) { console.log('%o', data); },
    // OPTIONAL: direct overrides of jquery ajax
    ajax: { url: 'http://someserver.com/service.svc', contentType: 'text' //... }
});
{% endhighlight %}


**theobald.ecs:** 

[theobald.ecs](https://static.theobald-software.com/theobald.ecs/5.0.0/) ist eine Erweiterung von **theobald.ecs.micro** und erfordert jQuery. <br>
Sie ermöglicht weitere Features wie Persistierung der Einstellungen und Logging.<br>
Wenn Sie SharePoint- und Persistierung-APIs nutzen möchten, um APIKey, ServiceApplication, Url in SharePoint oder Client-seitige Konfiguration im Browser zu speichern, dann nutzen Sie **theobald.ecs**. 
