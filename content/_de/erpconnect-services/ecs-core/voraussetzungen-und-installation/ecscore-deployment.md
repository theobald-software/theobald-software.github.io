---
ref: ecs-core-prerequisites-and-installation-03
layout: page
title: Deployment
description: Deployment
product: erpconnect-services
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=deployment
---

Der Deployment Manager installiert die Administration-Oberfläche für die Verwaltung (z.B. SAP-Verbindung, Azure Service Bus, SSO ) von ECS Core. 
Darunter versteht man die Einrichtung der IIS-Webseiten und der verbundenen Ressourcen wie Datenbank für die konfigurierbaren ECS Core Einstellung wie Zugriffs- und Verbindungs-Einstellungen.

**Voraussetzungen**

Folgende IIS-Komponenten werden zwingend zur Ausführung benötigt:

*Common HTTP-Features*
- HTTP Redirection

*Security*
- Basic Authentication
- Windows Authentication

*Application Development*
- ASP.NET 4.5
- ISAPI Extension
- ISAPI Filters

*Management Tools*
- IIS Management Tools and Scripts


Installieren Sie sie die fehlenden Komponenten manuell über Windows-Features bzw. Server Management.

**Deployment**

Nach der Installation von ECSCore starten Sie den ECS Core Deployment Manager **ERPConnectServices.DeploymentManager.exe** 
aus dem ECS Core-Installationsordner (Standardmäßig unter C:\Program Files\ERPConnect Services Core\). Damit wird die Installation des Deployment Managers gestartet. Auch nach einer erneuten Installation (Repair) oder der Installation einer neuen Version muss der Deployment Manager ausgeführt werden. In diesem Fall wird lediglich ein Update durchgeführt, die im folgenden Abschnitt beschriebenen Schritte müssen nicht erneut durchgeführt werden.


Der Assistent überprüft dann die Voraussetzungen (alle erforderlichen IIS 8.5 Komponenten).


Falls einige Komponenten noch nicht vorhanden sind, wird dies im Installationsfenster angezeigt. Wenn alle Installationsvoraussetzungen erfüllt sind, wird folgender Bildschirm angezeigt:


Als nächstes müssen Sie die Feineinstellungen der Konfiguration vornehmen. Eine Änderung der Standardwerte empfehlen wir nur erfahrenen Usern.

**Installation Directory**

Standardverzeichnis für die Einrichtung der Komponenten: C:\ECSCore

**Services Site**

*Services Site* bezeichnet die Webseite mit den Tools zu unterschiedlichen Status-Abfragen von ECSCores wie die SAP-Verbindung oder Windows Azure-Konfiguration.<br>
Der Deployment Manager legt die Seite in den IIS an. Sie können diese direkt von dort oder unter Angabe des eingetragenen Ports (8080) direkt im Browser aufrufen (http://localhost:8080).


**Management Site**

Auf der *Management Site* wird die Konfiguration für ECSCore vorgenommen. Mit dem Deployment Manager wird die Managment Site in den IIS angelegt und kann von dort oder unter Angabe des eingetragenen Ports (8085) direkt im Browser aufgerufen werden (http://localhost:8085).



**Database**

Hier ist die mitinstallierte Datenbank *Microsoft SQL Server Compact* aufgeführt, auf welcher die Einstellungen von ECSCore gespeichert werden.


**Master Key**

Der *Master Key* wird benötigt, wenn man die Datenbank manuell nach den unbekannten Fehlern wiederherstellen muss.<br>
Wichtig: Verwahren Sie das Verschlüsselungskennwort an einem sicheren Platz.

Klicken Sie auf *Finish*, um die Konfiguration abzuschließen.

![2014-12-15-11_32_00-Deployment-Manager](/img/content/2014-12-15-11_32_00-Deployment-Manager.jpg){:class="img-responsive"}

Die Einrichtung der Verwaltungs- bzw. Status-Webseiten ist damit abgeschlossen. Diese sind anschließend im IIS Manager aufgeführt.
Erfahren Sie mehr unter Management Site und Services Site. 