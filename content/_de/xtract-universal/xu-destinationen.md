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
progressstate: 5
old_url: /Xtract-Universal-DE/default.aspx?pageid=xu-zielumgebungen
---
              
Xtract Universal bietet die Möglichkeit, Daten aus verschiedenen SAP-Systemen zu extrahierten und in Zielumgebungen zu schreiben. 
Die folgenden Zielumgebungen sind verfügbar:

### Datenbanken / Data Warehouses

- [Amazon Redshift](./xu-destinationen/redshift) 
- [Azure Synapse Analytics (SQl pool)](./xu-destinationen/azure-synapse-analytics) 
- [Azure SQL Database](./xu-destinationen/microsoft-sql-server) 
- [EXASolution](./xu-destinationen/exasol) 
- [IBM DB2](./xu-destinationen/ibm-db2) 
- [MySQL](./xu-destinationen/mysql) 
- [Oracle](./xu-destinationen/oracle) 
- [PostgreSQL](./xu-destinationen/postgreSQL)
- [SAP HANA](./xu-destinationen/hana) 
- [SQL Server](./xu-destinationen//microsoft-sql-server) 
- [Snowflake](./xu-destinationen/snowflake)

{: .box-note }
**Hinweis:** Für die Nutzung einiger Destinationen, z.B. Oracle und DB2 muss ein entsprechender Treiber bzw. eine entsprechende Bibliothek installiert sein.
Weitere Informationen bzgl. der Treiber erhalten Sie im Kapitel *Voraussetzungen* der jeweiligen Destination.

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


{: .box-note }
**Hinweis**: Die [Konfigurationsdateien](./fortgeschrittene-techniken/backup-und-migration#konfigurationsdateien) einer Destination werden unter `C:\Program Files\XtractUniversal\config\destinations` abgelegt.

### Pull- und Push-Destinationen

Es gibt zwei Typen von Zielumgebungen, die sich darin unterscheiden von wo aus der Extraktionsprozess gestartet wird. 

#### Pull-Destinationen
Extraktionen mit Pull-Destinationen liefern die Datenextraktion auf Anforderung. Der Extraktionsprozess wird von der Zielumgebung gestartet.
Eine Extraktion mit Pull-Destination unterstützt das Durchreichen (pass-through) der SAP-Daten.
Das bedeutet, wenn ein Konsument (z.B. ein Self Service BI Tool) Daten anfordert, übersetzt Xtract Universal die Anforderung in eine Query für das SAP-Quellsystem, extrahiert die Daten und liefert sie an den Konsumenten.

Folgende Destinationen sind Pull-Destinationen: 
- Alteryx
- CSV Webservice 
- Qlik
- Power BI connector
- OData Webservice 

Sofern die Zielumgebung http-Datenkomprimierung via gzip unterstützt, sendet Xtract Universal die Daten als gzip komprimierten http stream.

#### Push-Destinationen

Extraktionen mit Push-Destinationen liefern Daten proaktiv in die Zielumgebung. Der Extraktionsprozess wird in Xtract Universal gestartet, z.B. durch einen [Scheduler](./fortgeschrittene-techniken/extraktion_einplanen).<br>
Eine Extraktion mit Push-Destinationen extrahiert die Daten aus dem SAP-Quellsystem und lädt die in eine Zielumgebung, wo sie weiter verarbeitet werden können. 
Beispielsweise können die Daten dann transformiert und ggf. in einer für Analytische Queries optimierten Form abgelegt werden.

******
#### Weiterführende Links
- [Destinationen verwalten](./xu-destinationen/ziele-verwalten)
