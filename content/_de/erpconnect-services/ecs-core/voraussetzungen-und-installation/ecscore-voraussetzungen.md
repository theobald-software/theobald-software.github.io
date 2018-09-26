---
layout: page
title: Voraussetzungen
description: Voraussetzungen
product: erpconnect-services
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecscore-voraussetzungen
---

**Windows-Betriebssystem** 

- Windows 8 oder höher
- Windows Server 2012 R2oder höher
- IIS-Webserver Version 8.5 oder höher
- .Net Framework 4.5 oder höher

**Benutzerrechte auf SharePoint** 

- Die Rechte eines Administrators sind nötig, um die Anwendung zu installieren.

**Microsoft SharePoint Online**

**Microsoft Azure Service Bus**

Falls Sie die Relay-Funktionalität von Microsoft Azure Service Bus nutzen möchten, brauchen Sie die Standard-Tier.

**SAP System(e)**

- SAP ERP: R/3 4.0B oder höher oder jede Version von SAP ECC
- SAP BW: 3.0 oder höher

**SAP Benutzer**

- Nötig ist ein SAP System- oder Dialog-Benutzer mit den entsprechenden [Berechtigungsobjekten]().

**Netzwerkeinstellungen**

- Port 33nn muss offen sein, wobei nn = der System Nummer des SAP Systems ist.

Es ist empfohlen, die Installation von ECS Core auf einem Rechner ohne andere ECS-Komponenten durchzuführen. 
ECS Core und andere ECS-Komponenten auf derselben Maschine zu installieren ist möglich, erschwert aber die Fehlerbehebung.