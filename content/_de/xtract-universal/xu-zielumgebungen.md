---
ref: xtract-universal-05
layout: page
title: Zielumgebungen
description: Zielumgebungen
product: xtract-universal
parent: xtract-universal
childidentifier: xu-zielumgebungen
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=xu-zielumgebungen
---

**Achtung**: Für die Nutzung einiger Zielumgebungen (wie z.B. Oracle, DB2, Teradata, Exasol usw.) ist die Installation des entsprechenden Treibers bzw. Bibliothek notwendig. 
              
Xtract Universal bietet die Möglichkeit, die aus SAP extrahierten Daten in verschiedene Zielumgebungen, sogenannte Destinations zu schreiben. Folgende Datenziele werden u.a. unterstützt:

**Database / Datawarehouse:**          
- [Azure DWH](./xu-zielumgebungen/azure_dwh) 
- [SAP HANA](./xu-zielumgebungen/hana) 
- [IBM DB2](./xu-zielumgebungen/ibm-db2) 
- [EXASolution](./xu-zielumgebungen/exasol) 
- [HP Vertica](./xu-zielumgebungen/vertica) 
- [MySQL](./xu-zielumgebungen/mysql) 
- [Oracle](./xu-zielumgebungen/oracle) 
- [Amazon Redshift](./xu-zielumgebungen/redshift) 
- [SQL Server](./xu-zielumgebungen/microsoft-sql-server) 
- [Teradata](./xu-zielumgebungen/teradata) 

**Business Intelligence / Analytics Tools:**
- [Microstrategy](./xu-zielumgebungen/microstrategy)
- [Power BI connector (Cloud/Desktop)](./xu-zielumgebungen/Power-BI-Connector-(beta)) 
- [Power BI (Cloud)](./xu-zielumgebungen/powerbi_cloud) 
- [Power BI Desktop using OData, Power Pivot & Excel](./xu-zielumgebungen/power_bi_desktop) 
- [Tableau](./xu-zielumgebungen/tableau) 
- [QlikSense and QlikView](./xu-zielumgebungen/qlik)  

**Cloud Speicher:**
- [Amazon AWS S3](./xu-zielumgebungen/amazon_aws_s3)

**Analytics & ETL Tools:**
- [Alteryx](./xu-zielumgebungen/alteryx-de) 

Xtract Universal kann über das mitgelieferte Kommando-Tool von fast jedem ETL-Programm bzw. Scheduler aufgerufen werden. 

**Business Systeme:**
- [Salesforce](./xu-zielumgebungen/salesforce) 
- [Sharepoint](./xu-zielumgebungen/sharepoint) 

**Generische Destinations:**
- [CSV (via HTTP)](./xu-zielumgebungen/csv-via-http) 
- [OData](./xu-zielumgebungen/odata-atom)  Atom (z.B. für PowerPivot, Datazen, Tableau und andere)    
- [Flat File - CSV](./xu-zielumgebungen/zielumgebungen) (Comma-seperated values)
            
**Pull- und Push-Destinationen**
Zwei Typen von Datenzielen werden angeboten, je nachdem wo der Extraktionsprozess gestartet wird. 

**Pull-Destinationen**
Extraktionen mit Pull-Destinationen liefern die Datenextraktion auf Anforderung. Hier wird der Extraktionsprozess von der Zielumgebung gestartet. <br>
Eine Extraktion mit  Pull-Destination unterstützt das Durchreichen (pass-through) der SAP-Daten. Wenn ein Konsument (z.N. ein  Self Service BI Tool) die Daten anfordert, 
Xtract Universal übersetzt die Anforderung in eine Query für das SAP-Quellsystem, extrahiert die Daten direkt aus dem SAP-Quellsystem und liefert sie an den Konsumenten.

Dazu zählen folgende Zielumgebungen: 
- CSV (via HTTP)
- OData Atom  
- Alteryx
- Qlik

Sofern die Zielumgebung http-Datenkomprimierung via gzip unterstützt, sendet Xtract Universal die Daten als gzip komprimierten http stream.

**Push-Destinationen**

Extraktionen mit Push-Destinationen liefern die Daten proaktiv in die Zielumgebung. Hier wird der Extraktionsprozess in Xtract Universal gestartet, z.B. durch einen Scheduler.<br>
Eine Extraktion mit Push-Destinationen extrahiert die Daten aus dem SAP-Quellsystem und lädt die Daten in ein Datenziel, welche dann weiter verarbeitet werden können. Beispielsweise können die Daten dann transformiert und ggf. in einer für Analytische Queries optimierten Form abgelegt werden.


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
