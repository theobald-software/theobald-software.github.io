---
ref: ecs-core-webservice-designer-02
layout: page
title: Webservice Authentifizierung
description: Webservice Authentifizierung
product: ecs-core
parent: webservices
childidentifier: webservice_authentifizierung
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=webservice_authentifizierung
---

Webservice Authentifizierung in ECS Core betrifft zwei Bereiche:

1. **Authentifzierung zwischen dem WebService Designer und ECS Core**: Dies bezieht sich auf das Deployment eines Webservice auf den ECS Core Server. Deployed wird zur Management Site mit Standard-Port 8085 ("Management Endpoint").
 
2. **Authentifizierung zwischen einem Webservice Konsumenten und ECS Core**: Dies bezieht sich auf einen Webservice-Aufruf von einer Konsumentenanwendung. Die Konsumentenanwendung kann beispielsweise ein REST Client, ein Workflow, eine JavaScript App, etc. sein. Konsumiert wird ein Webservice von der *Services Site* mit Standard-Port 8080 ("Consumer Endpoint").
