---
ref: ec-linq-to-sap-01
layout: page
title: Installation und erste Schritte 
description: Installation und erste Schritte 
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=linq-to-sap-installation-und-erste-schritte
---

{: .box-warning }
**Warnung! Veraltete Komponente** 
Das Add-On *LINQ to SAP* wird ab Visual Studio Version 2019 und .NET4.5 nicht mehr unterstützt.

**Achtung: Visual Studio Express-Versionen unterstützen den LINQ to SAP Designer nicht.**

Die Installation des *LINQ to SAP*-Designers erfolgt nicht automatisch mit der Installation von ERPConnect. Sie muss separat angestoßen werden. Starten Sie dazu die Anwendung **LINQtoERPSetupVSJJJJ.exe** im ERPConnect-Verzeichnis oder über das Programmmenü, wobei JJJJ der Version Ihres Visual Studios entspricht: 

![LINQToERP-First-Steps-001](/img/content/LINQToERP-First-Steps-001.png){:class="img-responsive"}

Ein Klick auf den *Install*-Button führt alle nötigen Schritte durch, um den Designer zu installieren:

![LINQToERP-First-Steps-002](/img/content/LINQToERP-First-Steps-002.png){:class="img-responsive"}

Beim nächsten Start des Visual Studios steht ein neues Item zum Einfügen zur Verfügung, um einen LINQ to ERP DataContext dem aktuellen Projekt hinzufügen.

![LINQToERP-First-Steps-003](/img/content/LINQToERP-First-Steps-003.png){:class="img-responsive"}

![LINQToERP-First-Steps-004](/img/content/LINQToERP-First-Steps-004.png){:class="img-responsive"}

Öffnen Sie den DataContext nach der Anlage mit einem Doppelklick. In der Toolbox finden Sie nun unterschiedliche Komponenten, die dem Context hinzugefügt werden können: Tabellen, normale Queries, Funktionsbausteine, IDocs und BW-Queries. In dem Moment, in dem Sie das erste Element per Drag & Drop auf den Context legen, fordert Sie der Designer auf, zunächst die Verbindungsdaten zum SAP anzugeben. Neben den Account-Details (*Mandant, User-Name, Passwort* und *Sprache*) sind das der *Hostname* und die *Systemnummer* oder der *Message-Server*, die *Logon-Gruppe* und die *SID*. Je nach dem, ob die Verbindung mit einem einzelnen Applikationsserver oder per Load Balancing hergestellt werden soll. 

![LINQToERP-First-Steps-005](/img/content/LINQToERP-First-Steps-005.png){:class="img-responsive"}

