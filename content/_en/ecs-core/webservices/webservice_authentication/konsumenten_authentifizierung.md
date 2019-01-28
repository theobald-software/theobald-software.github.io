---
ref: ecs-core-webservice-designer-02
layout: page
title: Konsumenten Authentifizierung
description: Konsumenten Authentifizierung
product: ecs-core
parent: webservice_authentifizierung
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=konsumenten_authentifizierung
---

Die folgenden Authentifizierungsmethoden werden für das Konsumieren von Webservices unterstützt: 

- **Authentifzierung mit API Key** (nur unterstützt in Kombination mit Azure Relay): Ein dedizierter API Key erstellt auf der ECS Core Management Site wird für die Authentifizierung verwendet. Der API Key muss für das Konsumieren auf einen Windows Benutzer oder Windows-Benutzergruppe erstellt worden sein.  

- **Basic Authentifizierung** (empfohlen mit HTTPS): Windows Basic Authentication wird zur Authentifizierung verwendet.

- **Windows Authentifizierung (NTLM)**: Der lokale Windows Benutzer mit seinen Credentials wird zur Authentifizierung verwendet. Das ermöglicht, dass sich der Webservice-Ersteller von jeder Maschine im Active Directory verbinden kann, vorausgesetzt der Account wird auf dem ECS Core Server erkannt. <br>
NTLM kann nur verwendet werden zur Authentifizierung, wenn dies die Client-Anwendung unterstützt.


Die Verbindungseinstellungen für einen Webservice Aufruf werden hier beispielhaft anhand des *Postman* REST Clients erläutert. Diese Einstellungen können zum Beispiel übertragen werden für REST Service Aufrufe in einer Workflowanwendung (z.B. Flow, Nintex). 

**Verbindungseinstellungen mit API Key** (nur unterstützt mit Azure Relay)

*Webservice Methode:* 	POST<br>

*Webservice URL:*  https://[Service Bus Name].servicebus.windows.net/ecs/ws/custom/[Webservice Name]/[Name der Webservice Operation]<br>

Beispiel: https://theobald-proxyservices.servicebus.windows.net/ecs/ws/custom/SAPCustomerWebservice/CustomerGet                  

*Authorization*
                
*Type:* 			No Auth

*Headers*

*Authorization:*      	APIKEY [In ECS Core erstellter API Key]<br>
*Accept:*                	application/json (XML nicht unterstützt)<br>
*Content-Type:*      	application/json (XML nicht unterstützt) 

*Params:*				Skalare Eingabeparameter (nur erforderlich, wenn der Webservice solche Parameter enthält; werden automatisch zur URL hinzugefügt)

*Body:*					Listenartige Eingabeparameter oder Eingabestrukturen (nur erforderlich, wenn der Webservice solche Parameter enthält) 

![ecscore-webservicetest_4](/img/content/ecscore-webservicetest_4.png){:class="img-responsive"}

**Verbindungseinstellungen mit Basic Authentifizierung**

*Webservice Methode:* 	POST<br>

*Webservice URL:* 		http(s)://[ECS Core Server]:[ECS Core Services Site port (Standard 8080)]/wsd/[Webservice Name]/[Name der Webservice Operation]<br>

Beispiel: http://52.88.254.77:8080/wsd/SAPCustomerWebservice/CustomerGet 

*Authorization*	   

*Type:* 				   Basic Auth<br>
*Username:*			   Windows Benutzername (unterstützt mit Domäne)<br>
*Password:*			   Windows Passwort

*Headers*

*Authorization:*      		Basic Schlüssel (Automatisch generiert)<br>
*Accept:*                		application/json (XML nicht unterstützt)<br>
*Content-Type:*      		application/json (XML nicht unterstützt) 

*Params:*				Skalare Eingabeparameter (nur erforderlich, wenn der Webservice solche Parameter enthält; werden automatisch zur URL hinzugefügt)

*Body:*					Listenartige Eingabeparameter oder Eingabestrukturen (nur erforderlich, wenn der Webservice solche Parameter enthält) 

![ecscore-webservicetest_5](/img/content/ecscore-webservicetest_5.png){:class="img-responsive"}

![ecscore-webservicetest_6](/img/content/ecscore-webservicetest_6.png){:class="img-responsive"}

**Verbindungseinstellungen mit Windows Authentifizierung (NTLM)**  

*Webservice Methode:* 	POST<br>

*Webservice URL:* 		http(s)://[lokaler ECS Core Server]:[ECS Core Services Site port (Standard 8080)]/wsd/[Webservice Name]/[Name der Webservice Operation]<br>

Beispiel: http://localhost:8080/wsd/SAPCustomerWebservice/CustomerGet

*Authorization* 

*Type:* 				   NTLM Authentication<br>
*Username:*			   Windows Benutzername<br>
*Password:*			   Windows Passwort<br>
*Domain (Optional):*	   Domänen-Name	
 
*Headers*

*Authorization:*      		NTLM Schlüssel (Automatisch generiert)<br>
*Accept:*                		application/json (XML nicht unterstützt)<br>
*Content-Type:*      		application/json (XML nicht unterstützt) 

*Params:*				Skalare Eingabeparameter (nur erforderlich, wenn der Webservice solche Parameter enthält; werden automatisch zur URL hinzugefügt)

*Body:*					Listenartige Eingabeparameter oder Eingabestrukturen (nur erforderlich, wenn der Webservice solche Parameter enthält) 

![ecscore-webservicetest_7](/img/content/ecscore-webservicetest_7.jpg){:class="img-responsive"}

![ecscore-webservicetest_8](/img/content/ecscore-webservicetest_8.jpg){:class="img-responsive"}