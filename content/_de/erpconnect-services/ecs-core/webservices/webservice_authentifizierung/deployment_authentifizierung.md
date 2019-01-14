---
ref: ecs-core-webservice-designer-02
layout: page
title: Deployment Authentifizierung
description: Deployment Authentifizierung
product: erpconnect-services
parent: webservice_authentifizierung
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=webservice_authentifizierung
---

**Authentifizierung zwischen dem WebService Designer und ECS Core** (Deployment)

Die Verbindungseinstellungen und Authentifzierung für das Deployment müssen im *Server Connection Dialog* hinterlegt werden (im WebService Designer Menü unter *Connections*). 

Verbindungseinstellungen mit API Key:

*Management Endpoint URL*: 	http://[ECS Core Server]:[ECS Core Management Site port (Standard 8085)] <br>
*API Key:*   	ECS Core API key  

Beispiel:

![ecscore-webservicetest_1](/img/content/ecscore-webservicetest_1.jpg){:class="img-responsive"}

Verbindungseinstellungen mit Basic Authentication:

*Management Endpoint URL:* 	http://[ECS Core Server]:[ECS Core Management Site port (Standard 8085)] <br>
*Username:* 	Benutzername eines Dashboard-Users der ECS Core Management Site<br>
*Password:* 	Für den Dashboard-User auf der Management Site definiertes Passwort 

Beispiel: 

![ecscore-webservicetest_1](/img/content/ecscore-webservicetest_2.jpg){:class="img-responsive"}

Mit *Test* können Sie die Verbindungseinstellungen testen. 