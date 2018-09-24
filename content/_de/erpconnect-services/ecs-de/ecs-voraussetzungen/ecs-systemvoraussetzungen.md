---
layout: page
title: Systemvoraussetzungen
description: Systemvoraussetzungen
product: erpconnect-services
parent: ecs-voraussetzungen
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-systemvoraussetzungen
---

**SharePoint Server System** 

- Microsoft SharePoint Server, Foundation, Standard oder Enterprise Edition. Version 2010 oder 2013. 
- In einer SharePoint-Farm muss ERPConnect Services auf dem Server mit der **Zenraladministration**-Webseite installiert wird.
- Der **SharePoint Administration** Service muss gestartet sein, um die ERPConnect Services installieren zu können.
- Der **SharePoint Timer** Service muss gestartet sein, um die ERPConnect Services installieren zu können.
- Der Benutzer, welche die Installation ausführt, muss Mitglied der Gruppe **SharePoint Farm Administratoren** sein. 
- Auf einem SP-Server muss der **Microsoft SharePoint Foundation Web Application Service** gestartet sein, um den ERPConnect Service starten und nutzen zu können.
- .NET-Framework 4.5.2

**Benutzerrechte auf SharePoint** 

- Die Rechte eines Farmadministrators sind nötig, um die Anwendung auf einem SharePoint Server System zu installieren.

**Entwicklungssystem**

Das Entwicklungssystem bietet dem Entwickler alle Werkzeuge, um Lösungen mit den ERPConnect Services zu entwickeln und zu pflegen. Das Entwicklungssystem kann zusammen mit dem SharePoint Server auf einem System installiert werden.

- 32-bit oder 64-bit Windows Client- oder Server-Betriebssystem
- Visual Studio, Version 2010, 2012, 2013 oder 2015
- .NET-Framework 4.5.2
- Librfc32.dll oder SAPGUI Client 

**SAP System(e)**

- SAP ERP: R/3 4.0B oder höher oder jede Version von SAP ECC
- SAP BW: 3.0 oder höher

**SAP Benutzer**

- Nötig ist ein SAP System- oder Dialog-Benutzer mit den entsprechenden [Berechtigungsobjekten]().

**SAP RFC Bibliotheken**

Auf allen SharePoint Servern, auf denen der ECS Service installiert ist und genutzt wird, müssen die für Ihr SAP System passenden RFC Bibliotheken vorhanden sein: 

- librfc32.dll 64-bit oder 32-bit version ODER 
NetWeaver RFC libraries 64-bit oder 32-bit version. 

Legen Sie die Dateien im Verzeichnis \System32 ab. Sie können diese über den Download-Bereich des SAP Service Marketplace beziehen.

**Netzwerkeinstellungen**

- Port 33nn muss offen sein, wobei nn = der System Nummer des SAP Systems ist.