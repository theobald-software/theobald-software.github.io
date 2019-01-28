---
ref: ecs-core-webservice-designer-02
layout: page
title: Web service authentication
description: Web service authentication
product: ecs-core
parent: webservices
childidentifier: webservice_authentication
permalink: /:collection/:path
weight: 2
lang: en_GB
---

Webservice Authentication in ECS Core concerns two areas:

1. **Authentication between WebService Designer and ECS Core**: This refers to the deployment of a Web service on the ECS Core Server. Deployed becomes a management site with default port 8085 ("Management Endpoint").
 
2. **Authentication between a web service consumer app and ECS Core**: This refers to a web service call from a consumer application. The consumer application could be a REST client, workflow, JavaScript app, etc. A web service is consumed by the *Services Site* with default port 8080 ("Consumer Endpoint").