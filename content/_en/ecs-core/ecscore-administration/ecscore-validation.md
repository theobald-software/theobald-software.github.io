---
ref: ecs-core-administration-07
layout: page
title: Validierung
description: Validierung
product: ecs-core
parent: ecscore-administration
permalink: /:collection/:path
weight: 7
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=ecscore-validation
---

Um sicherzustellen, dass alles korrekt konfiguriert ist und die Verbindungseinstellungen wie gewünscht funktionieren, können Sie die [tecs-Bibliothek](http://static.theobald-software.com/theobald.ecs.micro/) nutzen (empfohlen: Abschnitt *Live Test of your ECSCore*), sowie reines Javascript oder REST-Clients wie [POSTMAN](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop) (Chrome) oder [RESTClient](https://addons.mozilla.org/de/firefox/addon/restclient/) (Firefox) verwenden, die als Browsererweiterungen frei verfügbar sind. <br>

Wichtig: Der Test bezieht sich rein auf die hinterlegten SAP Verbindungen der Management Site ('Management Endpoint'). Für das Konsumieren von Services muss die *Services Site* ('Consumer Endpoint') verwendet werden. Näheres dazu finden Sie im Abschnitt *Webservice Authentifizierung*.  

Mit tEcs:
```
tEcs.testSapConnection({
    connection: {
        ecs: {
            core: true,
            coreApiKey: "978854CD75AF44EE9ABF0D9CCEC9A3F9", 
            instance: "ec4",
            url: "http://ecscore.cloudapp.net:8085/ecsm" (Management Endpoint immer mit /ecsm)
        }
    }
});
```

In einem REST-Client müssen Sie den Authorization-Header manuell setzen (Authorisierungsmethode: 'No Auth'):

z.B. <br>
Authorization = "Apikey 978854CD75AF44EE9ABF0D9CCEC9A3F9" <br>
Accept = application/json <br>
Content-Type = application/json <br>

![ecscore-restclienttest](/img/content/ecscore_restclienttest.png){:class="img-responsive"}

Beispiele für REST-Anfragen finden Sie in unserer Online-Hilfe unter *[ERPConnect Services Runtime> Webservices>REST ohne tEcs](../../ecs-de/ecs-runtime/ecs-webservices/rest-ohne-tecs)* (z.B. Anfrage auf eine Tabelle oder einen Funktionsbaustein).

