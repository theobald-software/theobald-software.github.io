---
ref: xtract-universal-05
layout: page
title: Zielumgebungen
description: Zielumgebungen
product: xtract-universal
parent: xtract-universal
childidentifier: xu-zielumgebungen
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=xu-zielumgebungen
---
{: .box-note }
**Hinweis:** Für die Nutzung einiger Zielumgebungen (wie z.B. Oracle, DB2 usw.) ist die Installation des entsprechenden Treibers bzw. Bibliothek notwendig.
              
Xtract Universal bietet die Möglichkeit, Daten aus verschiedenen SAP-Systemen (z.B. ERP, S/4 HANA, BW and BW/4 HANA) zu extrahierten und in verschiedene Zielumgebungen, sogenannte Destinations zu schreiben. Folgende Datenziele werden u.a. unterstützt:

### Datenbanken / Data Warehouses

- [Amazon Redshift](./redshift) 
- [Azure DWH](./azure_dwh) 
- [Azure SQL Database](./microsoft-sql-server) 
- [EXASolution](./exasol) 
- [IBM DB2](./ibm-db2) 
- [MySQL](./mysql) 
- [Oracle](./oracle) 
- [PostgreSQL](./postgreSQL)
- [SAP HANA](./hana) 
- [SQL Server](.//microsoft-sql-server) 
- [Snowflake](./snowflake)


### Business Intelligence / Analytics / ETL

- [Alteryx](./alteryx-de) 
- [Alteryx Connect](./alteryx_connect) 
- [Microstrategy](./microstrategy)
- [Power BI connector (Cloud/Desktop)](./Power-BI-Connector) 
- [Tableau](./tableau) 
- [QlikSense and QlikView](./qlik)  

### Cloud Speicher

- [Amazon AWS S3](./amazon_aws_s3)
- [Azure Storage](./azure-storage) 

Xtract Universal kann über das mitgelieferte Kommando-Tool von fast jedem ETL-Programm bzw. Scheduler aufgerufen werden. 

### Business Systeme

- [Salesforce](./salesforce) 
- [Sharepoint](./sharepoint) 

### Generische Destinationen

- [CSV Webservice](./csv-via-http) 
- [JSON Webservice](./json-via-http)
- [OData Webservice](./odata-atom)  Atom (z.B. für PowerPivot, Datazen, Tableau und andere)    
- [Flat File - CSV](./csv-flat-file) (Comma-seperated values)
- [Flat File - JSON](./json-flat-file)
- [Parquet](./parquet)
            
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
