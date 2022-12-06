---
ref: ecs-runtime-web-services-02
layout: page
title: JavaScript Library
description: JavaScript Library
product: erpconnect-services
parent: web-services
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=javascript-library-for-rest
---

For programming with ECS REST Services and JavaScript we recommend to use our Client Library [theobald.ecs.micro for ERPConnectServices/Core](https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html) (tEcs), which goal is to make client side programming with JavaScript and ERPConnect Services easier by encapsulating raw methods of ECS. It is standalone, so you don't need include any other scripts to use ECS.

Basic APIs are listed below:
```
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
```


To call a SOAP Service use this example:

```
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
```

**theobald.ecs:**<br>
[theobald.ecs](https://cdn-files.theobald-software.com/static/theobald.ecs/5.1.0/index.html) is an extension of **theobald.ecs.micro** and requires Query. 
If you would like to work with SharePoint and Persistence APIs e.g. save connection parameters in SharePoint (APIKey, ServiceApplication, Url) or set configuration parameters on the client use [theobald.ecs](https://cdn-files.theobald-software.com/static/theobald.ecs/5.1.0/index.html). 