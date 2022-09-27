---
ref: xtract-universal-06
layout: page
title: Destinations
description: Destinations
product: xtract-universal
parent: xtract-universal
childidentifier: destinations
permalink: /:collection/:path
weight: 25
lang: en_GB
progressstate: 5
old_url: /Xtract-Universal-EN/default.aspx?pageid=destinations
---


Xtract Universal allows you to extract data from SAP systems and load them to different destination environments.
The following destinations are available:  

### Databases / Data Warehouses

- [Amazon Redshift](./destinations/amazon-redshift) 
- [Azure Synapse Analytics (SQl pool)](./destinations/azure-synapse-analytics)
- [Azure SQL Database](./destinations/microsoft-sql-server) 
- [EXASolution](./destinations/exasol) 
- [IBM DB2](./destinations/ibm-db2) 
- [MySQL](./destinations/mysql) 
- [Oracle](./destinations/oracle) 
- [PostgreSQL](./destinations/postgreSQL)
- [SAP HANA](./destinations/sap-hana) 
- [Snowflake](./destinations/snowflake) 
- [SQL Server](./destinations/microsoft-sql-server) 

{: .box-note }
**Note**: For some destinations e.g., Oracle and DB2 the appropriate drivers need to be installed.
More information can be found under the *Requirements* section of each destination.

### Business Intelligence / Analytics / ETL

- [Alteryx](./destinations/alteryx) 
- [Power BI connector (Cloud/Desktop)](./destinations/Power-BI-Connector) 
- [Tableau](./destinations/tableau) 
- [Qlik (QlikSense and QlikView)](./destinations/qliksense-qlikview) 
- [KNIME](./destinations/knime)

### Business Systems

- [Salesforce](./destinations/salesforce) 
- [SharePoint](./destinations/sharepoint) 

### Cloud Storage

- [Amazon AWS S3](./destinations/amazon-aws-s3)
- [Azure Storage](./destinations/azure-storage) 
- [Google Cloud Storage](./destinations/google-cloud-storage)
- [Hadoop](./destinations/hadoop)

### Generic Destinations

- [CSV web service](./destinations/csv-via-http) (via HTTP)
- [JSON web service](./destinations/json-via-http)   
- [Flat File - CSV](./destinations/csv-flat-file)  (comma-seperated values)
- [Flat File - JSON](./destinations/json-flat-file)
- [Parquet](./destinations/parquet)
 
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


#### Push Destinations

Extractions with push destinations provide the data to the destination environment proactively. The extraction process is started in Xtract Universal, e.g. via a [scheduled extraction](./execute-and-automate-extractions/call-via-scheduler). <br>
An extraction with push destinations extracts data from the SAP source systems and loads them into the destination, where the data can be processed further. They can be transformed and optimized for analytic query workloads.

*****
#### Related Links
- [Manage Destinations](./destinations/managing-destinations)
