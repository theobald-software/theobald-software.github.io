---
ref: xtract-universal-06
layout: page
title: Destinationen 
description: Destinationen
product: xtract-universal
parent: xtract-universal
childidentifier: xu-destinationen
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=xu-zielumgebungen
---
{: .box-note }
**Hinweis:** Für die Nutzung einiger Destinationen (wie z.B. Oracle, DB2 usw.) ist die Installation des entsprechenden Treibers bzw. Bibliothek notwendig.
              
Xtract Universal bietet die Möglichkeit, Daten aus verschiedenen SAP-Systemen (z.B. ERP, S/4 HANA, BW and BW/4 HANA) mittels zahlreicher Destinationen zu extrahierten und in verschiedene Zielumgebungen zu schreiben. Die folgenden Zielumgebungen sind verfügbar:

### Datenbanken / Data Warehouses

- [Amazon Redshift](./xu-destinationen/redshift) 
- [Azure DWH](./xu-destinationen/azure_dwh) 
- [Azure SQL Database](./xu-destinationen/microsoft-sql-server) 
- [EXASolution](./xu-destinationen/exasol) 
- [IBM DB2](./xu-destinationen/ibm-db2) 
- [MySQL](./xu-destinationen/mysql) 
- [Oracle](./xu-destinationen/oracle) 
- [PostgreSQL](./xu-destinationen/postgreSQL)
- [SAP HANA](./xu-destinationen/hana) 
- [SQL Server](./xu-destinationen//microsoft-sql-server) 
- [Snowflake](./xu-destinationen/snowflake)


### Business Intelligence / Analytics / ETL

- [Alteryx](./xu-destinationen/alteryx-de) 
- [Microstrategy](./xu-destinationen/microstrategy)
- [Power BI connector (Cloud/Desktop)](./xu-destinationen/Power-BI-Connector) 
- [Tableau](./xu-destinationen/tableau) 
- [QlikSense and QlikView](./xu-destinationen/qlik)  

### Cloud Speicher

- [Amazon AWS S3](./xu-destinationen/amazon_aws_s3)
- [Azure Storage](./xu-destinationen/azure-storage) 
- [Google Cloud Storage](./xu-destinationen/google-cloud-storage)

Xtract Universal kann über das mitgelieferte Kommando-Tool von fast jedem ETL-Programm bzw. Scheduler aufgerufen werden. 

### Business Systeme

- [Salesforce](./xu-destinationen/salesforce) 
- [Sharepoint](./xu-destinationen/sharepoint) 

### Generische Destinationen

- [CSV Webservice](./xu-destinationen/csv-via-http) 
- [JSON Webservice](./xu-destinationen/json-via-http)
- [OData Webservice](./xu-destinationen/odata-atom)  Atom (z.B. für PowerPivot, Datazen, Tableau und andere)    
- [Flat File - CSV](./xu-destinationen/csv-flat-file) (Comma-seperated values)
- [Flat File - JSON](./xu-destinationen/json-flat-file)
- [Parquet](./xu-destinationen/parquet)
            
### Pull- und Push-Destinationen

Zwei Typen von Datenzielen werden angeboten, je nachdem wo der Extraktionsprozess gestartet wird. 

#### Pull-Destinationen
Extraktionen mit Pull-Destinationen liefern die Datenextraktion auf Anforderung. Hier wird der Extraktionsprozess von der Zielumgebung gestartet. <br>
Eine Extraktion mit  Pull-Destination unterstützt das Durchreichen (pass-through) der SAP-Daten. Wenn ein Konsument (z.N. ein  Self Service BI Tool) die Daten anfordert, 
Xtract Universal übersetzt die Anforderung in eine Query für das SAP-Quellsystem, extrahiert die Daten direkt aus dem SAP-Quellsystem und liefert sie an den Konsumenten.

Dazu zählen folgende destinationen: 
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
