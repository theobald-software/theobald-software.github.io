---
ref: ecs-core-webservice-designer-02
layout: page
title: Deployment Authentifizierung
description: Deployment Authentifizierung
product: ecs-core
parent: webservice_authentifizierung
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=deployment_authentifizierung
---

Die folgenden Authentifizierungsmethoden werden für das Deployment von Webservices mit dem WebService Designer unterstützt: 

- **Deployment mit API Key**: Ein dedizierter API Key erstellt auf der ECS Core Management Site wird für die Authentifizierung verwendet. Der API Key muss für das Deployment auf einen Benutzer der ECS Core Management Site erstellt worden sein (anlegbar unter *Administrators*).

- **Deployment mit Basic Credentials**: Hier wird zur Authentifizierung ein Benutzer verwendet, der auf der ECS Core Management Site unter *Administrators* angelegt wurde. Windows Credentials werden für das Deployment nicht untertstützt!    


Die Verbindungseinstellungen und Authentifzierung für das Deployment müssen im *Server Connection Dialog* hinterlegt werden (im WebService Designer Menü unter *Connections*). 

**Verbindungseinstellungen mit API Key**

*Management Endpoint URL*: 	http://[ECS Core Server]:[ECS Core Management Site port (Standard 8085)] <br>
*API Key:*   	ECS Core API key  

Beispiel:

![ecscore-webservicetest_1](/img/content/ecscore-webservicetest_1.jpg){:class="img-responsive"}

**Verbindungseinstellungen mit Basic Authentifizierung**

*Management Endpoint URL:* 	http://[ECS Core Server]:[ECS Core Management Site port (Standard 8085)] <br>
*Username:* 	Benutzername eines Dashboard-Users der ECS Core Management Site<br>
*Password:* 	Für den Dashboard-User auf der Management Site definiertes Passwort 

Beispiel: 

![ecscore-webservicetest_1](/img/content/ecscore-webservicetest_2.jpg){:class="img-responsive"}

Mit *Test* können Sie die Verbindungseinstellungen testen. 