---
ref: xtract-universal-06
layout: page
title: Destinations
description: Destinations
product: xtract-universal
parent: xtract-universal
childidentifier: xu-destinations
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=destinations
---

{: .box-note }
**Note**: For some destinations (e.g., Oracle, DB2 etc.) the appropriate driver must be installed. 

For more information on drivers, refer to [Requirements](../introduction/requirements).

{: .box-note }
**Note**: The [configuration files](../advanced-techniques/backup-and-migration#configuration-files) of destinations are stored in `config\destinations`.

Xtract Universal allows to extract data from SAP (e.g., ERP, S/4 HANA, BW and BW/4 HANA) systems and to load them to different destination environments, including:  

### Databases / Data Warehouses

- [Amazon Redshift](./amazon-redshift) 
- [Azure Synapse Analytics ](./azure-dwh) (former Azure DWH)
- [Azure SQL Database](./microsoft-sql-server) 
- [EXASolution](./exasol) 
- [IBM DB2](./ibm-db2) 
- [MySQL](./mysql) 
- [Oracle](./oracle) 
- [PostgreSQL](./postgreSQL)
- [SAP HANA](./sap-hana) 
- [SQL Server](./microsoft-sql-server) 


### Business Intelligence / Analytics / ETL

- [Alteryx](./alteryx) 
- [Microstrategy](./microstrategy)
- [Power BI connector (Cloud/Desktop)](./Power-BI-Connector) 
- [Tableau](./tableau) 
- [Qlik (QlikSense and QlikView)](./qliksense-qlikview) 

### Business Systems

- [Salesforce](./salesforce) 
- [SharePoint](./sharepoint) 

### Cloud Storage

- [Amazon AWS S3](./amazon-aws-s3)
- [Azure Storage](./azure-storage) 

### Generic Destinations

- [CSV web service](./csv-via-http) (via HTTP)
- [JSON web service](./json-via-http)
- [OData web service](./odata)  (e.g. for PowerPivot, PowerQuery, Datazen and Tableau)      
- [Flat File - CSV](./csv-flat-file)  (comma-seperated values)
- [Flat File - JSON](./json-flat-file)
- [Parquet](./parquet)
            
            
### Pull and Push Destinations

Two types of destinations is supported, depending on where the extraction process is started.  

#### Pull Destinations

Extractions with pull destinations provide the data on request. The extraction process is started by the destination product environment. <br>
An extraction with  pull Destination supports the pass-through of data. When a consumer (e.g. a Self Service BI Tool) requests the data, 
Xtract Universal translates the request into a query for the underlying SAP system, retrieves the data directly from the source system and delivers that to the consumer.

These include the following destinations: 
- Alteryx
- CSV web service
- Qlik
- Power BI connector
- OData web service

If the destination supports the gzip http data compression, Xtract Universal will send the data to the destination client in a gzip compressed format.
           

#### Push Destinations

Extractions with push destinations provide the data to the destination environment proactively. The extraction process is started in Xtract Universal, e.g. from a scheduled extraction. <br>
An extraction with push destinations involves the extracting of data from the SAP source systems and once loaded into the destination, data can be processed further. E.g. it can be transformed to an optimized form ready for analytic query workloads.


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}

