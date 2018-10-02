---
layout: page
title: Webservices deployen und konsumieren
description: Webservices deployen und konsumieren
product: erpconnect-services
parent: zugriff_ueber_azure_service_bus
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=webservices_deployen_und_konsumieren
---

Der Zugriff über einen Azure Service Bus kann für das Deployment und das Konsumieren von Webservices verwendet werden, die mit dem WebService Designer erstellt wurden. 
Wie Sie REST Webservices für ECS Core erstellen wird [hier]() erklärt.    <br>
Grundlegende Informationen zum Thema Webservice Authentifizierung finden sie in [folgendem]() Kapitel. 


**Authentifizierung zwischen dem WebService Designer und ECS Core** 

Für das Webservice Deployment nach ECS Core müssen Sie die Verbindungseinstellungen im Connection Dialog definieren.

*Verbindungseinstellungen mit Azure Service Bus und API Key:*


**Base URL:** 	https://[Service Bus Name].servicebus.windows.net  

**API Key:** 	ECS Core API Key (BASE64 verschüsselt oder nicht)  

![ecscore-webservices27](/img/content/ecscore-webservices27.png){:class="img-responsive"}

**Authentifizierung zwischen einem Webservice Konsumenten und ECS Core**
              
Um einen Webservice zum Beispiel in einem REST Client zu konsumieren müssen Sie die folgenden Informationen für den Webservice Aufruf bereitstellen (Beispiel mit dem REST Client Postman). 

**Allgemeine Einstellungen für REST Webservice Aufrufe in einem REST Client**

**Webservice Methode:** 	POST

**Webservice URL:** 		https://[Azure Service Bus Name].servicebus.windows.net/ecs/ws/custom/[Webservice Name]/[Name der Webservice Operation]

**Params:** 				Skalare Eingabeparameter (werden automatisch zur URL hinzugefügt)

Authorization: 		   

**Type:** 				   No Auth

Headers:

**Authorization:**      		APIKEY [BASE64 verschlüsselter ECS Core API Key]

**Accept:**                		application/json (XML nicht unterstützt)

**Content-Type:**      		application/json  (XML nicht unterstützt)

![ecscore-webservices28](/img/content/ecscore-webservices28.png){:class="img-responsive"}