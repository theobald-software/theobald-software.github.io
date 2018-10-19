---
ref: ecs-bcs-connector-04
layout: page
title: Fehlerbehebung
description: Fehlerbehebung
product: erpconnect-services
parent: bcs-connector
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=fehlerbehebung
---

**Fehlermeldungen beim Aufbau der SharePoint-Verbindung**

Fehlermeldungen beim Aufbau der Sharepoint-Verbindung hängen oftmals mit Zugriffsberechtigungen zusammen. Überprüfen Sie im Falle einer Fehlermeldung beim Herstellen der SharePoint-Verbindung zunächst, ob der ausführende User die erforderlichen Berechtigungen zum Aufruf der SharePoint Zentraladministration und Zugriffsrechte auf die Business Connectivity Services hat. Eine ausführliche Beschreibung zum Thema BCS Berechtigungen finden Sie hier. 

Weitere mögliche Ursachen:

- Zugriffsversuch per HTTPS: HTTPS-Zugriff wird nicht unterstützt von SharePoint BCS und schlägt daher fehl.
- Verbindung mit einer anderen Seite als der SharePoint Zentraladministration: Wir empfehlen, die SharePoint-Verbindung immer zur Zentraladministrationsseite herzustellen, da dorthin auch die Übertragung der externen Inhaltstypen stattfindet. Das Herstellen der Verbindung mit einer anderen SharePoint-Seite ist zwar grundsätzlich möglich, kann aber aufgrund differenzierter Berechtigungen zu Fehlern führen.   

**Fehlermeldungen bei Preview und Deployment eines Modells**

Bei der Datenvorschau und dem Speichern und Übertragen eines BCS Modells nach SharePoint kann es zu Fehlermeldungen kommen, die auf Einschränkungen der Business Connectivity Services beruhen.  

- SharePoint BCS schränken die Anzeige von Spalten auf maximal 300 ein. Werden für eine Entität (egal ob eine Tabellen- oder Funktionsentität) mehr als 300 Spalten selektiert, dann wird eine Fehlermeldung ausgegeben. Reduzieren Sie in diesem Fall die Anzahl der selektieren Spalten/Felder. 
- In den SharePoint BCS ist die Definition von Filtern (Filter Decriptors) auf maximal 20 pro Entität begrenzt, ansonsten wird eine Fehlermeldung ausgegeben. Reduzieren Sie in diesem Fall die Anzahl der definierten Filter.

![BCS_ErrorMessage2](/img/content/BCS_ErrorMessage2.png){:class="img-responsive"}

![BCS_ErrorMessage](/img/content/BCS_ErrorMessage.png){:class="img-responsive"}

