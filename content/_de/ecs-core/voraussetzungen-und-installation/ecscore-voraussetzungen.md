---
ref: ecs-core-prerequisites-and-installation-01
layout: page
title: Voraussetzungen
description: Voraussetzungen
product: ecs-core
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=ecscore-voraussetzungen
---

### Windows-Betriebssystem 

- Windows 10
- Windows Server 2012 R2 oder höher
- IIS-Webserver Version 10 oder höher
- `.NET Framework 4.7.2` oder höher

### Benutzerrechte auf Windows 

- Die Rechte eines Administrators sind nötig, um die Anwendungen zu installieren.

### Microsoft Azure Service Bus

Falls Sie die Relay-Funktionalität von Microsoft Azure Service Bus nutzen möchten, brauchen Sie die Standard-Tier.

### SAP System(e)

- SAP R/3 Version 4.0B oder höher oder SAP ECC
- SAP S/4 HANA
- SAP BW Version 3.1 oder höher
- SAP BW/4 HANA

### SAP Benutzer

- Nötig ist ein SAP System- oder Dialog-Benutzer mit den entsprechenden [Berechtigungsobjekten](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).

### Netzwerkeinstellungen

Folgende Ports müssen abhängig vom SAP-System offen sein, wobei nn die Instanznummer des SAP Systems ist (z.B. 00 oder 99).

- SAP Application Server: Port 33nn
- SAP Message Server (Load Balancing): Port 36nn
- Secure Network Communications (SNC): Port 48nn
- SAP Router: Port 3399

Es ist empfohlen, die Installation von ECS Core auf einem Rechner ohne andere Theobald Software Komponenten durchzuführen. 
Die ist zwar möglich, erschwert aber die Fehleranalyse und -behebung.
