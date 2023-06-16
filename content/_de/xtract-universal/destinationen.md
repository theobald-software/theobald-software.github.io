---
ref: xtract-universal-06
layout: page
title: Destinationen 
description: Destinationen
product: xtract-universal
parent: xtract-universal
childidentifier: destinationen
permalink: /:collection/:path
weight: 25
lang: de_DE
progressstate: 5
old_url: /Xtract-Universal-DE/default.aspx?pageid=xu-zielumgebungen
---

Xtract Universal bietet die Möglichkeit, Daten aus verschiedenen SAP-Systemen zu extrahierten und in Zielumgebungen zu schreiben. 
Die folgenden Zielumgebungen sind verfügbar:

### Datenbanken / Data Warehouses

- [Amazon Redshift](./destinationen/redshift) 
- [Azure Synapse Analytics (SQl pool)](./destinationen/azure-synapse-analytics) 
- [Azure SQL Database](./destinationen/microsoft-sql-server) 
- [EXASolution](./destinationen/exasol) 
- [IBM DB2](./destinationen/ibm-db2) 
- [MySQL](./destinationen/mysql) 
- [Oracle](./destinationen/oracle) 
- [PostgreSQL](./destinationen/postgreSQL)
- [SAP HANA](./destinationen/hana) 
- [Snowflake](./destinationen/snowflake)
- [SQL Server](./destinationen/microsoft-sql-server) 

{: .box-note }
**Hinweis:** Für die Nutzung einiger Destinationen, z.B. Oracle und DB2 muss ein entsprechender Treiber bzw. eine entsprechende Bibliothek installiert sein.
Weitere Informationen bzgl. der Treiber erhalten Sie im Kapitel *Voraussetzungen* der jeweiligen Destination.

### Business Intelligence / Analytics / ETL

- [Alteryx](./destinationen/alteryx-de) 
- [Power BI connector (Cloud/Desktop)](./destinationen/Power-BI-Connector) 
- [Tableau](./destinationen/tableau) 
- [QlikSense and QlikView](./destinationen/qlik)  
- [KNIME](./destinationen/knime)

### Cloud Speicher

- [Amazon S3](./destinationen/amazon_aws_s3)
- [Azure Storage](./destinationen/azure-storage) 
- [Google Cloud Storage](./destinationen/google-cloud-storage)
- [Hadoop](./destinationen/hadoop)
- [Huawei Cloud OBS](./destinationen/huawei)

### Business Systeme

- [Salesforce](./destinationen/salesforce) 
- [Sharepoint](./destinationen/sharepoint) 

### Generische Destinationen

- [CSV Webservice](./destinationen/csv-via-http) 
- [JSON Webservice](./destinationen/json-via-http)  
- [Flat File - CSV](./destinationen/csv-flat-file) (Comma-seperated values)
- [Flat File - JSON](./destinationen/json-flat-file)
- [Flat File - Parquet](./destinationen/parquet)


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
- CSV web service
- JSON web service
- Qlik
- Power BI connector
- SSRS
- KNIME

#### Push-Destinationen

Extraktionen mit Push-Destinationen liefern Daten proaktiv in die Zielumgebung.
Der Extraktionsprozess wird in Xtract Universal gestartet, z.B. durch einen [Scheduler](./extraktionen-ausfuehren-und-einplanen/call-via-scheduler).<br>

Eine Extraktion mit Push-Destinationen extrahiert die Daten aus dem SAP-Quellsystem und lädt die in eine Zielumgebung, wo sie weiter verarbeitet werden können. 
Beispielsweise können die Daten dann transformiert und ggf. in einer für Analytische Queries optimierten Form abgelegt werden.

******
#### Weiterführende Links
- [Destinationen verwalten](./destinationen/ziele-verwalten)
