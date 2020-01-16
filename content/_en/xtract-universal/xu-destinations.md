---
ref: xtract-universal-05
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

<div class="alert alert-info">
  <i class="fas fa-info-circle"></i> <strong>Note:</strong> For some destinations (e.g., Oracle, DB2, Teradata etc.) the appropriate driver must be installed. 
</div>
For more information on drivers, refer to [Requirements](./introduction/requirements).

Xtract Universal allows to extract data from SAP (e.g. ERP, S/4 HANA, BW and BW/4 HANA) systems and to load them to different [destination]() environments, including:  

### Databases / Datawarehouses

- [Amazon Redshift](./xu-destinations/amzon-redshift) 
- [Azure DWH](./xu-destinations/azure-dwh) 
- [Azure SQL Database](./xu-destinations/microsoft-sql-server) 
- [EXASolution](./xu-destinations/exasol) 
- [IBM DB2](./xu-destinations/ibm-db2) 
- [MySQL](./xu-destinations/mysql) 
- [Oracle](./xu-destinations/oracle) 
- [PostgreSQL](./xu-destinations/postgreSQL)
- [SAP HANA](./xu-destinations/sap-hana) 
- [SQL Server](./xu-destinations/microsoft-sql-server) 
- [Teradata](./xu-destinations/teradata) 

### Business Intelligence / Analytics / ETL

- [Alteryx](./xu-destinations/alteryx) 
- [Alteryx Connect](./xu-destinations/alteryx-connect) 
- [Microstrategy](./xu-destinations/microstrategy)
- [Power BI connector (Cloud/Desktop)](./xu-destinations/Power-BI-Connector) 
- [Tableau](./xu-destinations/tableau) 
- [Qlik (QlikSense and QlikView)](./xu-destinations/qliksense-qlikview) 

### Business Systems

- [Salesforce](./xu-destinations/salesforce) 
- [SharePoint](./xu-destinations/sharepoint) 

### Cloud Storage

- [Amazon AWS S3](./xu-destinations/amazon-aws-s3)
- [Azure Blob Storage](./xu-destinations/azure-blob-storage) 

### Generic Destinations

- [CSV web service](./xu-destinations/csv-via-http) (via HTTP)
- [OData web service](./xu-destinations/odata)  (e.g. for PowerPivot, PowerQuery, Datazen and Tableau)      
- [Flat File - CSV](./xu-destinations/csv-flat-file)  (comma-seperated values)
            
            
### Pull and Push Destinations

Two types of destinations is supported, depending on where the extraction process is started.  

### Pull Destinations

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
           

### Push Destinations

Extractions with push destinations provide the data to the destination environment proactively. The extraction process is started in Xtract Universal, e.g. from a scheduled extraction. <br>
An extraction with push destinations involves the extracting of data from the SAP source systems and once loaded into the destination, data can be processed further. E.g. it can be transformed to an optimized form ready for analytic query workloads.


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0MTc2MzUwMDFdfQ==
-->
