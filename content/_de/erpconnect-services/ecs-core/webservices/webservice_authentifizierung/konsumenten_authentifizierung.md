---
ref: ecs-core-webservice-designer-02
layout: page
title: Konsumenten Authentifizierung
description: Konsumenten Authentifizierung
product: erpconnect-services
parent: webservice_authentifizierung
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=konsumenten_authentifizierung
---

**Authentifizierung zwischen einem Webservice Konsumenten und ECS Core**
   
Zwischen dem Webservice Konsumenten und ECS Core werden die unter [Webservice Authentifizierung](./webservice_authentication) aufgeführten Authentifizierungsmethoden unterstützt. Der Webservice Konsument kann beispielsweise ein REST Client, ein Workflow, eine JavaScript App, etc. sein.   

Die Verbindungseinstellungen für einen Webservice Aufruf werden hier beispielhaft anhand des *Postman* REST Clients erläutert. Diese Einstellungen können zum Beispiel übertragen werden für REST Service Aufrufe in einer Workflowanwendung (z.B. Flow, Nintex). 

Allgemeine Einstellungen für REST Webservice Aufrufe in einem REST Client:

*Webservice Methode:* 	POST<br>
*Webservice URL (ohne Azure Relay):* 		http(s)://[ECS Core Server]:[ECS Core Services Site port (Standard 8080)]/wsd/[Webservice Name]/[Name der Webservice Operation]<br>
*Webservice URL (mit Azure Relay):*		https://[Service Bus Name].servicebus.windows.net/ecs/ws/custom/[Webservice Name]/[Name der Webservice Operation]<br>	 
*Params:*				Skalare Eingabeparameter (nur erforderlich, wenn der Webservice solche Parameter enthält; werden automatisch zur URL hinzugefügt)

Verbindungseinstellungen mit API Key (nur unterstützt mit Azure Relay):

*Authorization*
                
*Type:* 			No Auth

*Headers*

*Authorization:*      	APIKEY [In ECS Core erstellter API Key]<br>
*Accept:*                	application/json (XMLnicht unterstützt)<br>
*Content-Type:*      	application/json (XML nicht unterstützt) 

![ecscore-webservicetest_4](/img/content/ecscore-webservicetest_4.jpg){:class="img-responsive"}

Verbindungseinstellungen mit Basic Authentifizierung:

*Authorization*	   

*Type:* 				   Basic Auth<br>
*Username:*			   Windows Benutzername (unterstützt mit Domäne)<br>
*Password:*			   Windows Passwort

*Headers*

*Authorization:*      		Basic Schlüssel (Automatisch generiert)<br>
*Accept:*                		application/json (XML nicht unterstützt)<br>
*Content-Type:*      		application/json (XML nicht unterstützt) 

![ecscore-webservicetest_5](/img/content/ecscore-webservicetest_5.jpg){:class="img-responsive"}

![ecscore-webservicetest_6](/img/content/ecscore-webservicetest_6.jpg){:class="img-responsive"}

Verbindungseinstellungen mit Windows Authentifizierung:  

*Authorization* 

*Type:* 				   NTLM Authentication<br>
*Username:*			   Windows Benutzername<br>
*Password:*			   Windows Passwort<br>
*Domain (Optional):*	   Domänen-Name	
 
*Headers*

*Authorization:*      		NTLM Schlüssel (Automatisch generiert)<br>
*Accept:*                		application/json (XML nicht unterstützt)<br>
*Content-Type:*      		application/json (XML nicht unterstützt) 

![ecscore-webservicetest_7](/img/content/ecscore-webservicetest_7.jpg){:class="img-responsive"}

![ecscore-webservicetest_8](/img/content/ecscore-webservicetest_8.jpg){:class="img-responsive"}