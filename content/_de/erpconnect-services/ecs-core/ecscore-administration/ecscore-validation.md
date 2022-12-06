---
ref: ecs-core-administration-05
layout: page
title: Validierung
description: Validierung
product: erpconnect-services
parent: ecscore-administration
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecscore-validation
---

Um sicherzustellen, dass alles korrekt konfiguriert ist und die Verbindungseinstellungen wie gewünscht funktionieren, können Sie die [tecs-Bibliothek](https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html) nutzen (empfohlen: Abschnitt *Live Test of your ECSCore*), sowie reines Javascript oder REST-Clients wie [POSTMAN](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop) (Chrome) oder [RESTClient](https://addons.mozilla.org/de/firefox/addon/restclient/) (Firefox) verwenden, die als Browsererweiterungen frei verfügbar sind.

Mit tEcs:
```
tEcs.testSapConnection({
    connection: {
        ecs: {
            core: true,
            coreApiKey: "E370FB721AFA4EB2A86CC624E4B6890C",
            instance: "ec4",
            url: "https://ecscore.mydomain.com"
        }
    }
});
```

In einem REST-Client müssen Sie den Authorization-Header manuell setzen (falls die Anfrage über Azure Service Bus gesendet wird):

APIKEY  =  BASE64 kodierter ECSCore API-Schlüssel

z. B. *Authorization*: "APIKEY E370FB721AFA4EB2A86CC624Eg4B6890C==="

Beispiele für REST-Anfragen finden Sie in unserer Online-Hilfe unter *[ERPConnect Services Runtime> Webservices>REST ohne tEcs](../../ecs-de/ecs-runtime/ecs-webservices/rest-ohne-tecs)* (z.B. Anfrage auf eine Tabelle oder einen Funktionsbaustein).

