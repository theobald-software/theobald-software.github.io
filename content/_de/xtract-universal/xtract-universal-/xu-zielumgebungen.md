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
- [Azure DWH](azure_dwh) 
- [SAP HANA](hana) 
- [IBM DB2](ibm-db2) 
- [EXASolution](exasol) 
- [HP Vertica](vertica) 
- [MySQL](mysql) 
- [Oracle](oracle) 
- [Amazon Redshift](redshift) 
- [SQL Server](microsoft-sql-server) 
- [Teradata](teradata) 

Business Intelligence / Analytics Tools:
- [Power BI](powerbi_cloud) 
- [Power Pivot](odata-atom) 
- [Tableau](tableau) 
- [QlikSense and QlikView](qlik)  
- [GoodData](gooddata) 

Cloud Speicher:
- [Amazon AWS S3](amazon_aws_s3)

Analytics & ETL Tools:
- [Alteryx](alteryx-de) 

Xtract Universal kann über das mitgelieferte Kommando-Tool von fast jedem ELT-Programm bzw. Scheduler aufgerufen werden. 

Business Systeme:
- [Salesforce](salesforce) 
- [Sharepoint](sharepoint) 

Generische Destinations: 
- [CSV (via HTTP)](csv-via-http) 
- [OData](odata-atom)  Atom (z.B. für PowerPivot, Datazen, Tableau und andere)    
- [Flat File - CSV](zielumgebungen) (Comma-seperated values)
            
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