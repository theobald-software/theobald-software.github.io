---
ref: xtract-universal-06
layout: page
title: Zielumgebungen
description: Zielumgebungen
product: xtract-universal
parent: xtract-universal
childidentifier: xu-zielumgebungen
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=xu-zielumgebungen
---
{: .box-note }
**Hinweis:** Für die Nutzung einiger Zielumgebungen (wie z.B. Oracle, DB2 usw.) ist die Installation des entsprechenden Treibers bzw. Bibliothek notwendig.
              
Xtract Universal bietet die Möglichkeit, Daten aus verschiedenen SAP-Systemen (z.B. ERP, S/4 HANA, BW and BW/4 HANA) zu extrahierten und in verschiedene Zielumgebungen, sogenannte Destinations zu schreiben. Folgende Datenziele werden u.a. unterstützt:

### Datenbanken / Data Warehouses

- [Amazon Redshift](./xu-zielumgebungen/redshift) 
- [Azure DWH](./xu-zielumgebungen/azure_dwh) 
- [Azure SQL Database](./xu-zielumgebungen/microsoft-sql-server) 
- [EXASolution](./xu-zielumgebungen/exasol) 
- [IBM DB2](./xu-zielumgebungen/ibm-db2) 
- [MySQL](./xu-zielumgebungen/mysql) 
- [Oracle](./xu-zielumgebungen/oracle) 
- [PostgreSQL](./xu-zielumgebungen/postgreSQL)
- [SAP HANA](./xu-zielumgebungen/hana) 
- [SQL Server](./xu-zielumgebungen/microsoft-sql-server) 
- [Snowflake](./xu-zielumgebungen/snowflake)


### Business Intelligence / Analytics / ETL

- [Alteryx](./xu-zielumgebungen/alteryx-de) 
- [Alteryx Connect](./xu-zielumgebungen/alteryx_connect) 
- [Microstrategy](./xu-zielumgebungen/microstrategy)
- [Power BI connector (Cloud/Desktop)](./xu-zielumgebungen/Power-BI-Connector) 
- [Tableau](./xu-zielumgebungen/tableau) 
- [QlikSense and QlikView](./xu-zielumgebungen/qlik)  

### Cloud Speicher

- [Amazon AWS S3](./xu-zielumgebungen/amazon_aws_s3)
- [Azure Storage](./xu-zielumgebungen/azure-storage) 

Xtract Universal kann über das mitgelieferte Kommando-Tool von fast jedem ETL-Programm bzw. Scheduler aufgerufen werden. 

### Business Systeme

- [Salesforce](./xu-zielumgebungen/salesforce) 
- [Sharepoint](./xu-zielumgebungen/sharepoint) 

### Generische Destinationen

- [CSV Webservice](./xu-zielumgebungen/csv-via-http) 
- [JSON Webservice](./xu-zielumgebungen/json-via-http)
- [OData Webservice](./xu-zielumgebungen/odata-atom)  Atom (z.B. für PowerPivot, Datazen, Tableau und andere)    
- [Flat File - CSV](./xu-zielumgebungen/csv-flat-file) (Comma-seperated values)
- [Flat File - JSON](./xu-zielumgebungen/json-flat-file)
            
### Pull- und Push-Destinationen

Zwei Typen von Datenzielen werden angeboten, je nachdem wo der Extraktionsprozess gestartet wird. 

#### Pull-Destinationen
Extraktionen mit Pull-Destinationen liefern die Datenextraktion auf Anforderung. Hier wird der Extraktionsprozess von der Zielumgebung gestartet. <br>
Eine Extraktion mit  Pull-Destination unterstützt das Durchreichen (pass-through) der SAP-Daten. Wenn ein Konsument (z.N. ein  Self Service BI Tool) die Daten anfordert, 
Xtract Universal übersetzt die Anforderung in eine Query für das SAP-Quellsystem, extrahiert die Daten direkt aus dem SAP-Quellsystem und liefert sie an den Konsumenten.

Dazu zählen folgende Zielumgebungen: 
- Alteryx
- CSV Webservice 
- Qlik
- Power BI connector
- OData Webservice 

Sofern die Zielumgebung http-Datenkomprimierung via gzip unterstützt, sendet Xtract Universal die Daten als gzip komprimierten http stream.

#### Push-Destinationen

Extraktionen mit Push-Destinationen liefern die Daten proaktiv in die Zielumgebung. Hier wird der Extraktionsprozess in Xtract Universal gestartet, z.B. durch einen Scheduler.<br>
Eine Extraktion mit Push-Destinationen extrahiert die Daten aus dem SAP-Quellsystem und lädt die Daten in ein Datenziel, welche dann weiter verarbeitet werden können. Beispielsweise können die Daten dann transformiert und ggf. in einer für Analytische Queries optimierten Form abgelegt werden.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
