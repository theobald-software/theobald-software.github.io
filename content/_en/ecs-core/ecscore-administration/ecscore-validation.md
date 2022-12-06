---
ref: ecs-core-administration-07
layout: page
title: Validation
description: Validation
product: ecs-core
parent: ecscore-administration
permalink: /:collection/:path
weight: 7
lang: en_GB
---

To ensure that everything is configured correctly and the connection settings work as wanted, you can use the [tecs library](https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html) (recommended: section *Live Test of your ECSCore*), as well as pure Javascript or REST clients such as [POSTMAN](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop) (Chrome) or [RESTClient](https://addons.mozilla.org/de/firefox/addon/restclient/) (Firefox), which are freely available as browser extensions. <br>

Important: The test refers purely to the stored SAP connections of the *Management Site* ('management endpoint'). To consume services, the *Services Site* ('Consumer Endpoint') must be used. For more information, see *Webservice Authentication*.  

Mit tEcs:
```
tEcs.testSapConnection({
    connection: {
        ecs: {
            core: true,
            coreApiKey: "978854CD75AF44EE9ABF0D9CCEC9A3F9", 
            instance: "ec4",
            url: "http://ecscore.cloudapp.net:8085/ecsm" (Management Endpoint always followd by /ecsm)
        }
    }
});
```

In a REST client, you must set the Authorization header manually (authorization method: 'No Auth'):

e.g. <br>
Authorization = "Apikey 978854CD75AF44EE9ABF0D9CCEC9A3F9" <br>
Accept = application/json <br>
Content-Type = application/json <br>

![ecscore-restclienttest](/img/content/ecscore_restclienttest.png){:class="img-responsive"}

Examples for REST requests can be found in our online help under *[ERPConnect Services Runtime> Webservices>REST without tEcs](../../erpconnect-services/ecs/erpconnect-services-runtime/web-services/rest-without-tecs)* (e.g. request for a table or a function block).
