---
ref: ecs-configuration-01
layout: page
title: Service Applications
description: Service Applications
product: erpconnect-services
parent: ecs-konfiguration
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-service-applications
---

Alle für einen SharePoint-Server installierten Services werden in der Zentraladministration von SharePoint angezeigt. Klicken Sie hierzu in der *Zentraladministration* von SharePoint auf den Hauptmenüpunkt *Application Management*. Im Abschnitt *Service Applications* finden Sie die zur Verfügung stehenden Funktionen:

![ECS-SP-Service-Applications-Overview](/img/content/ECS-SP-Service-Applications-Overview.jpg){:class="img-responsive"}

**Manage Services Applications**

Klicken Sie hierzu im Abschnitt Service Applications auf Manage service applications. Die folgende Verwaltungsseite wird geöffnet:

![ECS-SP-Service-Applications-Manage](/img/content/ECS-SP-Service-Applications-Manage.jpg){:class="img-responsive"}

Die ERPConnect Services können auf mehreren Servern innerhalb einer Farm installiert werden und stehen als gesamte, verteilte (load-balanced) Einheit den Entwicklern für den SAP-Zugriff zur Verfügung.

Der programmtechnische Zugriff auf das von ERPConnect Services angebotene Objektmodell erfolgt über die Programmklasse ERPConnectServiceClient. Diese Klasse steht in allen Entwicklungsumgebungen (durch die Bereitstellung von Assemblies) zur Verfügung.<br> 
Zu diesen Umgebungen zählen SharePoint-Applikationen bzw. Komponenten wie Web Parts oder Application Pages, aber auch Desktop-Anwendungen. 

**Configure service application Associations**

Für jede Webapplikation können in der Application Proxy-Gruppe default so genannte Standard Service Applikationen bzw. der Proxy-Objekte definiert werden. Diese werden standardmäßig verwendet, falls keine spezifische Service Applikation beim Aufruf angegeben wurde. 

Um die default-Gruppe zu verwalten, klicken Sie auf den Hauptmenüpunkt *Application Management* und dann im Abschnitt Service *Applications* auf *Configure* service application associations. Die folgende Verwaltungsseite wird angezeigt:


![ECS-SP-Service-Applications-Assocication-01](/img/content/ECS-SP-Service-Applications-Assocication-01.jpg){:class="img-responsive"}

Bei Klick auf den Link default wird ein Dialogfenster mit allen zur Verfügung stehenden Application Proxy-Objekten im Browser angezeigt. Sollten Sie mehrere ERPConnect Service Applications angelegt haben, zum Beispiel bei der Verwendung von unterschiedlichen SAP-Instanzen, dann können Sie an dieser Stelle die jeweilige Standard Service Application auswählen.

![ECS-SP-Service-Applications-Assocication-02](/img/content/ECS-SP-Service-Applications-Assocication-02.jpg){:class="img-responsive"}

**Wichtig:**<br>
Es sollte jeweils nur eine ERPConnect Service Application als Standard Service Applikation selektiert sein. Es wird vom SharePoint immer nur die erste Service Applikation verwendet, falls mehrere Applications vom gleichen Typ in der "default"-Gruppe definiert sind.

**Manage services on server**

Klicken Sie hierzu im Abschnitt Service Applications auf Manage services on server. Die folgende Verwaltungsseite wird angezeigt:

![ECS-SP-Manage-Services-On-Server](/img/content/ECS-SP-Manage-Services-On-Server.jpg){:class="img-responsive"}

Über diese Seite können einzelne Services auf dem lokalen oder einem entfernten (remote) Server gestartet oder gestoppt werden.