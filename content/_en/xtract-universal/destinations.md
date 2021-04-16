---
ref: xtract-universal-06
layout: page
title: Destinations
description: Destinations
product: xtract-universal
parent: xtract-universal
childidentifier: xu-destinations
permalink: /:collection/:path
weight: 25
lang: en_GB
progressstate: 5
old_url: /Xtract-Universal-EN/default.aspx?pageid=destinations
---


Xtract Universal allows you to extract data from SAP systems and load them to different destination environments.
The following destinations are available:  

### Databases / Data Warehouses

- [Amazon Redshift](./xu-destinations/amazon-redshift) 
- [Azure Synapse Analytics (SQl pool)](./xu-destinations/azure-synapse-analytics)
- [Azure SQL Database](./xu-destinations/microsoft-sql-server) 
- [EXASolution](./xu-destinations/exasol) 
- [IBM DB2](./xu-destinations/ibm-db2) 
- [MySQL](./xu-destinations/mysql) 
- [Oracle](./xu-destinations/oracle) 
- [PostgreSQL](./xu-destinations/postgreSQL)
- [SAP HANA](./xu-destinations/sap-hana) 
- [SQL Server](./xu-destinations/microsoft-sql-server) 

{: .box-note }
**Note**: For some destinations e.g., Oracle and DB2 the appropriate drivers need to be installed.
More information can be found under the *Requirements* section of each destination.

### Business Intelligence / Analytics / ETL

- [Alteryx](./xu-destinations/alteryx) 
- [Microstrategy](./xu-destinations/microstrategy)
- [Power BI connector (Cloud/Desktop)](./xu-destinations/Power-BI-Connector) 
- [Tableau](./xu-destinations/tableau) 
- [Qlik (QlikSense and QlikView)](./xu-destinations/qliksense-qlikview) 
- [KNIME Integration via SAP Reader (Theobald Software)](https://kb.theobald-software.com/xtract-universal/knime-integration-via-sap-reader)

### Business Systems

- [Salesforce](./xu-destinations/salesforce) 
- [SharePoint](./xu-destinations/sharepoint) 

### Cloud Storage

- [Amazon AWS S3](./xu-destinations/amazon-aws-s3)
- [Azure Storage](./xu-destinations/azure-storage) 
- [Google Cloud Storage](./xu-destinations/google-cloud-storage)

### Generic Destinations

- [CSV web service](./xu-destinations/csv-via-http) (via HTTP)
- [JSON web service](./xu-destinations/json-via-http)
- [OData web service](./xu-destinations/odata)  (e.g. for PowerPivot, PowerQuery, Datazen and Tableau)      
- [Flat File - CSV](./xu-destinations/csv-flat-file)  (comma-seperated values)
- [Flat File - JSON](./xu-destinations/json-flat-file)
- [Parquet](./xu-destinations/parquet)
 
{: .box-note }
**Note**: The [configuration files](./advanced-techniques/backup-and-migration#configuration-files) of destinations are stored in `C:\Program Files\XtractUniversal\config\destinations`.
 
### Pull and Push Destinations

There are two types of destinations, depending on where the extraction process is started.  

#### Pull Destinations

Extractions with pull destinations provide data on request. The extraction process is started by the destination product environment. <br>
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

Extractions with push destinations provide the data to the destination environment proactively. The extraction process is started in Xtract Universal, e.g. via a [scheduled extraction](./advanced-techniques/scheduling_extraction). <br>
An extraction with push destinations extracts data from the SAP source systems and loads them into the destination, where the data can be processed further. They can be transformed and optimized for analytic query workloads.

*****
#### Related Links
- [Manage Destinations](./xu-destinations/managing-destinations)
