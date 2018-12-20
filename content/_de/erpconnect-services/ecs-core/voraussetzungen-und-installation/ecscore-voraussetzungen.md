---
ref: ecs-core-prerequisites-and-installation-01
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

- Windows 10
- Windows Server 2012 R2 oder höher
- IIS-Webserver Version 10 oder höher
- .Net Framework 4.6.1 oder höher

**Benutzerrechte auf Windows** 

- Die Rechte eines Administrators sind nötig, um die Anwendungen zu installieren.

**Microsoft Azure Service Bus**

Falls Sie die Relay-Funktionalität von Microsoft Azure Service Bus nutzen möchten, brauchen Sie die Standard-Tier.

**SAP System(e)**

- SAP ERP: R/3 4.0B oder höher oder jede Version von SAP ECC
- SAP BW: 3.0 oder höher

**SAP Benutzer**

- Nötig ist ein SAP System- oder Dialog-Benutzer mit den entsprechenden [Berechtigungsobjekten](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/7/67/authority-objects).

**Netzwerkeinstellungen**

- Port 33nn muss offen sein, wobei nn = der System Nummer des SAP Systems ist.

Es ist empfohlen, die Installation von ECS Core auf einem Rechner ohne andere Theobald Software Komponenten durchzuführen. 
Die ist zwar möglich, erschwert aber die Fehleranalyse und -behebung.