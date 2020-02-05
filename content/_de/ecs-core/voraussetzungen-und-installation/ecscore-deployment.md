---
ref: ecs-core-prerequisites-and-installation-03
layout: page
title: Deployment
description: Deployment
product: ecs-core
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=deployment
---

Der Deployment Manager installiert die Administration-Oberfläche für die Verwaltung (z.B. SAP-Verbindung, Azure Relay, Web Services) von ECS Core. 
Darunter versteht man die Einrichtung der IIS-Webseiten und der verbundenen Ressourcen wie Datenbank für die konfigurierbaren ECS Core Einstellung wie Zugriffs- und Verbindungs-Einstellungen.

**Voraussetzungen**

Folgende IIS-Komponenten werden zwingend zur Ausführung benötigt:

*Common HTTP-Features*
- HTTP Redirection

*Security*
- Basic Authentication
- Windows Authentication

*Application Development*
- ASP.NET 4.7
- ISAPI Extension
- ISAPI Filters

*Management Tools*
- IIS Management Tools and Scripts


Fehlende IIS-Komponenten können automatisch beim Start des Deploymentmanagers nachinstalliert werden. Alternativ können diese vorab manuell über das Windows Server Management (*Add Roles and Features*) hinzugefügt werden.

**Deployment**

![ecscore-deploymentmanager-1.png](/img/content/ecscore-deploymentmanager-1.png){:class="img-responsive"}

Wählen Sie *Express Install* zur Installation mit den Standardeinstellungen und -Ports. Zur Anpassung der Standardwerte klicken Sie auf *Next*. Damit wird der Expertenmodus durchlaufen, den wir nur erfahrenen Anwendern empfehlen.  

Im Expertenmodus können Sie folgende Feineinstellungen vornehmen:

**Installation Directory**

Standardverzeichnis für die Einrichtung der Komponenten: C:\ECSCore

**Services Site**

*Services Site* bezeichnet im technischen Sinne die Webseite, die den Konsumenten-Endpoint für deployte Webservices sowie die Client-Library für den Aufruf von SAP-Funktionalitäten in der Cloudumgebung bereitstellt.<br>
Der Deployment Manager legt die Seite in den IIS an. Sie können diese direkt von dort oder unter Angabe des eingetragenen Ports (8080) direkt im Browser aufrufen (http://localhost:8080).


![ecscore-deploymentmanager-2.png](/img/content/ecscore-deploymentmanager-2.png){:class="img-responsive"}

**Management Site**

Auf der *Management Site* wird die Konfiguration für ECSCore vorgenommen. Sie dient außerdem für das Deployment und die Verwaltung erstellter Webservices. Mit dem Deployment Manager wird die Managment Site in den IIS angelegt und kann von dort oder unter Angabe des eingetragenen Ports (8085) direkt im Browser aufgerufen werden (http://localhost:8085).


![ecscore-deploymentmanager-3.png](/img/content/ecscore-deploymentmanager-3.png){:class="img-responsive"}

**Database**

Diese Einstellung wird nicht mehr unterstützt, ein *Microsoft SQL Server Compact* wird in der aktuellen Version nicht mehr benötigt und mitinstalliert. 

**Master Key**

Mit dem *Master Key* können sensible Informationen wie Anmeldedaten für das Management Dashboard oder die SAP Verbindungen wiederhergestellt werden.<br>
Wichtig: Verwahren Sie das Kennwort an einem sicheren Platz.

![ecscore-deploymentmanager-4.png](/img/content/ecscore-deploymentmanager-4.png){:class="img-responsive"}

Klicken Sie auf *Finish*, um die Konfiguration abzuschließen.

Die Einrichtung der Management Site und der Services Site ist damit abgeschlossen. Die Seiten sind anschließend im IIS-Manager aufgeführt.
Erfahren Sie mehr unter Management Site und Services Site. 