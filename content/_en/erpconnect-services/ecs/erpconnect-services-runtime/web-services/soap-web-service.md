---
ref: ecs-runtime-web-services-01
layout: page
title: SOAP Web Service
description: SOAP Web Services
product: erpconnect-services
parent: web-services
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-soap-web-service
---

The SOAP Web service *ERPConnectService.svc* offers the same functionality and operations that you will find in the client assemblies. Calling a SOAP Web service using JavaScript tends to be more involved than using a REST based Web service. 

The SOAP Web service metadata can be found under the path *http://SharePointWebAppURL/_vti_bin/ERPConnectService.svc/mex*

The Service provide the following operations:

- GetServiceApplicationInfoList 
- BeginConnectionScope
- EndConnectionScope
- ExecuteXQL
- ExecuteXQLAndReturnDataTable
- CreateFunction
- ExecuteFunction
- ExecuteTableQuery
- ExecuteTableQueryAndReturnDataTable

![ECS-SOAP-WS](/img/content/ECS-SOAP-WS.png){:class="img-responsive" }