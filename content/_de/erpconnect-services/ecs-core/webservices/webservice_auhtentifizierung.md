---
ref: ecs-core-webservice-designer-02
layout: page
title: Webservice Authentifizierung
description: Webservice Authentifizierung
product: erpconnect-services
parent: webservices
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=webservice_auhtentifizierung_
---

Webservice Authentifizierung in ECS Core betrifft zwei Bereiche:

1. *Authentifzierung zwischen dem WebService Designer und ECS Core*: Dies bezieht sich auf das Deployment eines Webservice auf den ECS Core Server. Deployed wird zur Management Site mit Standard-Port 8085 ("Management Endpoint").
 
2. *Authentifizierung zwischen einem Webservice Konsumenten und ECS Core*: Dies bezieht sich auf einen Webservice Aufruf von einer Konsumentenanwendung (z.B. Cloud App, Workflow etc.). Konsumiert wird von der Services Site mit Standard-Port 8080 ("Consumer Endpoint").


Die folgenden Authentifizierungsmethoden werden für das Deployment von Webservices mit dem WebService Designer unterstützt: 

- *Deployment mit API Key*: Ein dedizierter API Key erstellt auf der ECS Core Management Site wird für die Authentifizierung verwendet. Der API Key muss für das Deployment auf einen Benutzer der ECS Core Management Site erstellt worden sein (anlegbar unter *Administrators*).

- *Deployment mit Basic Credentials*: Hier wird zur Authentifizierung ein Benutzer verwendet, der auf der ECS Core Management Site unter *Administrators* angelegt wurde. Windows Credentials werden für das Deployment nicht untertstützt!    


Die folgenden Authentifizierungsmethoden werden für das Konsumieren von Webservices unterstützt: 

- *Authentifzierung mit API Key (nur unterstützt in Kombination mit Azure Relay)*: Ein dedizierter API Key erstellt auf der ECS Core Management Site wird für die Authentifizierung verwendet. Der API Key muss für das Konsumieren auf einen Windows Benutzer oder Windows-Benutzergruppe erstellt worden sein.  

- *Basic Authentifizierung (empfohlen mit HTTPS)*: Windows Basic Authentication wird zur Authentifizierung verwendet.

- *Windows Authentifizierung (NTLM)*: Der lokale Windows Benutzer mit seinen Credentials wird zur Authentifizierung verwendet. Das ermöglicht, dass sich der Webservice-Ersteller von jeder Maschine im Active Directory verbinden kann, vorausgesetzt der Account wird auf dem ECS Core Server erkannt. <br>
Zum Konsumieren eines Webservice kann diese Methode nur verwendet werden, wenn dies die Client-Anwendung unterstützt.
  
 
**Authentifizierung zwischen dem WebService Designer und ECS Core** 

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

**Authentifizierung zwischen einem Webservice Konsumenten und ECS Core**
   
Zwischen dem Webservice Konsumenten und ECS Core werden die oben aufgeführten Authentifizierungsmethoden unterstützt. Der Webservice Konsument kann beispielsweise ein REST Client, ein Workflow, eine JavaScript App, etc. sein.   

Die Verbindungseinstellungen für einen Webservice Aufruf werden hier beispielhaft anhand des *Postman* REST Clients erläutert. Diese Einstellungen können zum Beispiel übertragen werden für REST Service Aufrufe in einer Workflowanwendung (z.B. Flow, Nintex). 

Allgemeine Einstellungen für REST Webservice Aufrufe in einem REST Client:

*Webservice Methode:* 	POST<br>
*Webservice URL (ohne Azure Relay):* 		http(s)://[ECS Core Server]:[ECS Core Services Site port (Standard 8080)]/wsd/[Webservice Name]/[Name der Webservice Operation]<br>
*Webservice URL (mit Azure Relay):*		https://[Service Bus Name].servicebus.windows.net/ecs/ws/custom/[Webservice Name]/[Name der Webservice Operation]<br>	 
*Params:*				Skalare Eingabeparameter (nur erforderlich, wenn der Webservice solche Parameter enthält; werden automatisch zur URL hinzugefügt)

Verbindungseinstellungen mit API Key (nur unterstützt mit Azure Relay):

__Authorization__
                
*Type:* 			No Auth

__Headers__

*Authorization:*      	APIKEY [In ECS Core erstellter API Key]<br>
*Accept:*                	application/json (XMLnicht unterstützt)<br>
*Content-Type:*      	application/json (XML nicht unterstützt) 

![ecscore-webservicetest_4](/img/content/ecscore-webservicetest_4.jpg){:class="img-responsive"}

Verbindungseinstellungen mit Basic Authentifizierung:

__Authorization__		   

*Type:* 				   Basic Auth<br>
*Username:*			   Windows Benutzername (unterstützt mit Domäne)<br>
*Password:*			   Windows Passwort

__Headers__

*Authorization:*      		Basic Schlüssel (Automatisch generiert)<br>
*Accept:*                		application/json (XML nicht unterstützt)<br>
*Content-Type:*      		application/json (XML nicht unterstützt) 

![ecscore-webservicetest_5](/img/content/ecscore-webservicetest_5.jpg){:class="img-responsive"}

![ecscore-webservicetest_6](/img/content/ecscore-webservicetest_6.jpg){:class="img-responsive"}

Verbindungseinstellungen mit Windows Authentifizierung:  

__Authorization__ 

*Type:* 				   NTLM Authentication<br>
*Username:*			   Windows Benutzername<br>
*Password:*			   Windows Passwort<br>
*Domain (Optional):*	   Domänen-Name	
 
__Headers__

*Authorization:*      		NTLM Schlüssel (Automatisch generiert)<br>
*Accept:*                		application/json (XML nicht unterstützt)<br>
*Content-Type:*      		application/json (XML nicht unterstützt) 

![ecscore-webservicetest_7](/img/content/ecscore-webservicetest_7.jpg){:class="img-responsive"}

![ecscore-webservicetest_8](/img/content/ecscore-webservicetest_8.jpg){:class="img-responsive"}