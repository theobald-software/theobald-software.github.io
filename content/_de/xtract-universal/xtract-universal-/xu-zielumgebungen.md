---
layout: page
title: Zielumgebungen
description: Zielumgebungen
product: xtract-universal
parent: xtract-universal-
childidentifier: xu-zielumgebungen
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=xu-zielumgebungen
---

**Achtung**: Für die Nutzung einiger Zielumgebungen (wie z.B. Oracle, DB2, Teradata, Exasol usw.) ist die Installation des entsprechenden Treibers bzw. Bibliothek notwendig. 
              
Xtract Universal bietet die Möglichkeit, die aus SAP extrahierten Daten in verschiedene Zielumgebungen, sogenannte Destinations zu schreiben. Folgende Datenziele werden momentan unterstützt:

**Database / Datawarehouse:**          
- [Azure DWH]() 
- [SAP HANA]() 
- [IBM DB2]() 
- [EXASolution]() 
- [HP Vertica]() 
- [MySQL]() 
- [Oracle]() 
- [Amazon Redshift]() 
- [SQL Server]() 
- [Teradata]() 

Business Intelligence / Analytics Tools:
- [Power BI]() 
- [Power Pivot]() 
- [Tableau]() 
- [QlikSense and QlikView]()  
- [GoodData]() 

Cloud Speicher:
- Amazon AWS S3]()

Analytics & ETL Tools:
- [Alteryx]() 

Xtract Universal kann über das mitgelieferte Kommando-Tool von fast jedem ELT-Programm bzw. Scheduler aufgerufen werden. 

Business Systeme:
- [Salesforce]() 
- [Sharepoint]() 

Generische Destinations: 
- [CSV (via HTTP)]() 
- [OData]()  Atom (z.B. für PowerPivot, Datazen, Tableau und andere)    
- [Flat File - CSV]() (Comma-seperated values)
            
Pull- und Push-Ziele
Bei den Zielumgebungen werden zwei Kategorien unterschieden, je nachdem wo der Extraktionsprozess gestartet wird. 

Pull-Ziele 
Pull-Ziele liefern die Daten auf Anforderung. Hier wird der Extraktionsprozess von der Zielumgebung gestartet.
Dazu zählen folgende Zielumgebungen: 

- CSV (via HTTP)
- OData Atom  
- Alteryx
- Qlik

Sofern die Zielumgebung http-Datenkomprimierung via gzip unterstützt, sendet Xtract Universal die Daten als gzip komprimierten http stream.

**Push-Ziele**

Alle restlichen Ziele sind Push-Ziele, welche die Daten proaktiv in die Zielumgebung liefern. Hier wird der Extraktionsprozess in Xtract Universal gestartet, z.B. durch eine eingeplante Extraktion.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}