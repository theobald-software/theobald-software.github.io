---
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

1. *Authentifzierung zwischen dem WebService Designer und ECS Core*: Dies bezieht sich auf das Deployment eines Webservice auf den ECS Core Server. 
 
2. *Authentifizierung zwischen einem Webservice Konsumenten und ECS Core*: Dies bezieht sich auf einen Webservice Aufruf von einer Konsumentenanwendung (z.B. Cloud App, Workflow etc.)

Die folgenden Authentifizierungsmethoden werden unterstützt: 

- *Authentifzierung mit API Key (empfohlen mit HTTPS)*: Ein dedizierter API Key erstellt auf der ECS Core Management Site wird für die Authentifizierung verwendet. 

- *Basic Authentifizierung (empfohlen mit HTTPS)*: Windows Basic Authentication wird zur Authentifizierung verwendet.

- *Windows Authentifizierung (NTLM)*: Wird für das Webservice Deployment unterstützt. Dabei wird der lokale Windows Benutzer und Kennwort zur Authentifizierung verwendet. Das ermöglicht, dass sich der Webservice-Ersteller von jeder Maschine im AD verbinden kann, vorausgesetzt der Account wird auf dem ECS Core Server erkannt. <br>
Zum Konsumieren eines Webservice kann diese Methode nur verwendet werden, wenn dies die Client-Anwendung unterstützt.
  
- *Authentifizierung mit Azure Service Bus (standardmäßig mit HTTPS)*: Die Authentifzierung über einen Azure Service Bus wird separat hier beschrieben.
 
**Authentifizierung zwischen dem WebService Designer und ECS Core** 

Wenn Sie einen REST Service verwenden möchten, den Sie mit dem WebService Designer erstellt haben, müssen Sie den zunächst nach ECS Core deployen. Die Verbindungseinstellungen und Authentifzierung für das Deployment müssen im Connection Dialog eingerichtet werden (*Edit Connection*). 


**Verbindungseinstellungen mit API Key**:

**Base URL:** 	http://[ECS Core Server]:[ECS Core Services Site port (Standard 8080)] <br>
**API Key:**   	ECSCore API key (BASE64 verschlüsselt oder nicht)  

Beispiel:

![ecscore-webservices23](/img/content/ecscore-webservices23.png){:class="img-responsive"}

**Verbindungseinstellungen mit Basic Authentication:**

**Base URL:** 	http://[ECS Core Server]:[ECS Core Services Site port (8080 by default)] <br>
**Username:** 	Windows Benutzername<br>
**Password:** 	Windows Passwort

Beispiel: 

![ecscore-webservices21](/img/content/ecscore-webservices21.png){:class="img-responsive"}

**Verbindungseinstellungen mit Windows Authentifizierung:**

**Base URL:** 	http://[ECS Core Server oder localhost (wenn auf derselben Maschine wie ECS Core)]:[ECS Core Services Site port (Standard 8080)] <br>
**Username:** 	Kann freigelassen werden (lokaler Windows Benutzer wird verwendet)<br>
**Password:** 	Kann freigelassen werden (Passwort für lokalen Windows Benutzer wird verwendet) 

![ecscore-webservices29](/img/content/ecscore-webservices29.png){:class="img-responsive"}

Mit Test können Sie die Verbindungseinstellungen testen. 

**Authentifizierung zwischen einem Webservice Konsumenten und ECS Core**
   
Zwischen dem Webservice Konsumenten und ECS Core sind dieselben Authentifizierungsmethoden unterstützt. Der Webservice Konsument kann beispielsweise ein REST Client, ein Workflow, eine JavaScript App, etc. sein.   

Die Verbindungseinstellungen für einen Webservice Aufruf einzurichten wird hier anhand des *Postman* REST Clients erläutert. Diese Einstellungen können zum Beispiel übertragen werden für REST Service Aufrufe in einer Workflowanwendung (z.B. Flow, Nintex). Falls Sie nur schnell die Funktionalität eines neu erstellten Webservices testen möchten, verwenden Sie bitte den Testdialog im WebService Designer. 

**Allgemeine Einstellungen für REST Webservice Aufrufe in einem REST Client**

**Webservice Methode:** 	POST<br>
**Webservice URL:** 		http(s)://[ECS Core Server]:[ECS Core Services Site port (Standard 8080)]/wsd/[Webservice Name]/[Name der                                                           Webservice Operation]<br>
**Params:** 				Skalare Eingabeparameter (werden automatisch zur URL hinzugefügt)

**Verbindungseinstellungen mit API Key**

*Authorization*
                
**Type:** 			No Auth

*Headers*

**Authorization:**      	APIKEY [BASE64 verschlüsster ECSCore API key]<br>
**Accept:**                	application/json (XMLnicht unterstützt)<br>
**Content-Type:**      	application/json (XML nicht unterstützt) 

![ecscore-webservices26](/img/content/ecscore-webservices26.png){:class="img-responsive"}

**Verbindungseinstellungen mit Basic Authentifizierung**

*Authorization*		   

**Type:** 				   Basic Auth<br>
**Username:**			   Windows Benutzername (unterstützt mit Domäne)<br>
**Password:**			   Windows Passwort

*Headers*

**Authorization:**      		Basic Schlüssel (Automatisch generiert)<br>
**Accept:**                		application/json (XML nicht unterstützt)<br>
**Content-Type:**      		application/json (XML nicht unterstützt) 

![ecscore-webservices24](/img/content/ecscore-webservices24.png){:class="img-responsive"}

![ecscore-webservices25](/img/content/ecscore-webservices25.png){:class="img-responsive"}

**Verbindungseinstellungen mit Windows Authentifizierung**  

*Authorization*	   

**Type:** 				   NTLM Authentication<br>
**Username:**			   Windows Benutzername<br>
**Password:**			   Windows Passwort<br>
**Domain (Optional):**	   Domänen-Name	
 
*Headers*

**Authorization:**      		NTLM Schlüssel (Automatisch generiert)<br>
**Accept:**                		application/json (XML nicht unterstützt)<br>
**Content-Type:**      		application/json (XML nicht unterstützt) 

![ecscore-webservices30](/img/content/ecscore-webservices30.png){:class="img-responsive"}

![ecscore-webservices31](/img/content/ecscore-webservices31.png){:class="img-responsive"}