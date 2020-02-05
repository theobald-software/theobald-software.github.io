---
ref: ecs-runtime-web-services-01
layout: page
title: SOAP Webservice
description: SOAP Webservice
product: erpconnect-services
parent: ecs-webservices
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-soap-webservice
---

Der SOAP-Webdienst ERPConnectService.svc bietet sämtliche Funktionen bzw. Operationen an, die in den Client-Assemblies Verwendung finden. Die direkte Ansteuerung von SOAP-Diensten mit JavaScript ist tendenziell aufwendiger, als der Einsatz von REST-basierten Webdiensten. 

Die SOAP-Webservice-Metadaten sind unter folgender URL aufrufbar <br>
http://SharePointWebAppURL/*_vti_bin*/ERPConnectService.svc/mex 

Der Webdienst bietet folgende Oprationen an: 

- GetServiceApplicationInfoList 
- BeginConnectionScope
- EndConnectionScope
- ExecuteXQL
- ExecuteXQLAndReturnDataTable
- CreateFunction
- ExecuteFunction
- ExecuteTableQuery
- ExecuteTableQueryAndReturnDataTable

![ECS-SOAP-WS](/img/content/ECS-SOAP-WS.png){:class="img-responsive"}