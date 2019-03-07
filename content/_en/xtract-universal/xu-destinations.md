---
ref: xtract-universal-05
layout: page
title: Destinations
description: Destinations
product: xtract-universal
parent: xtract-universal
childidentifier: xu-destinations
permalink: /:collection/:path
weight: 45
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=destinations
---

**Caution**: For some destinations (e.g. Oracle, DB2, Teradata, Exasol etc.) the appropriate driver must be installed. Refer to [Requirements](./introduction/requirements). 

Xtract Universal allows to extract data from SAP ERP and BW systems and to load them to different [destination]() environments, including:  

**Database / Datawarehouse:**<br>
- [Azure DWH](./xu-destinations/azure-dwh) 
- [HANA](./xu-destinations/sap-hana) 
- [IBM DB2](./xu-destinations/ibm-db2) 
- [EXASolution](./xu-destinations/exasol) 
- [HP Vertica](./xu-destinations/hp-vertica) 
- [MySQL](./xu-destinations/mysql) 
- [Oracle](./xu-destinations/oracle) 
- [Amazon Redshift](./xu-destinations/amzon-redshift) 
- [SQL Server](./xu-destinations/microsoft-sql-server) 
- [Teradata](./xu-destinations/teradata) 

**Business Intelligence / Analytics Tools:**<br>
- [Microstrategy](./xu-destinations/microstrategy)
- [Power BI (Cloud)](./xu-destinations/powerbi-cloud) 
- [Power BI Desktop using OData, Power Pivot & Excel](./xu-destinations/powerbi-desktop) 
- [Tableau](./xu-destinations/tableau) 
- [Qlik (QlikSense and QlikView)](./xu-destinations/qliksense-qlikview) 

**Analytics & ETL Tools:**
- [Alteryx](./xu-destinations/alteryx) 
- [Alteryx Connect](./xu-destinations/alteryx-connect) 

**Business Systems:** 
- [Salesforce](./xu-destinations/salesforce) 
- [Sharepoint](./xu-destinations/sharepoint) 

**Cloud Storage:**
- [AWS S3](./xu-destinations/amazon-aws-s3)
- [Azure Blob Storage](./xu-destinations/azure-blob-storage) 

**Generic Destinations:** 
- [CSV](./xu-destinations/csv-via-http) (via HTTP)
- [OData](./xu-destinations/odata)  (e.g. for PowerPivot, PowerQuery, Datazen and Tableau)      
- [Flat File - CSV](./xu-destinations/csv-flat-file)  (comma-seperated values)
            
            
**Pull and Push Destinations**

Two types of destinations is supported, depending on where the extraction process is started.  

**Pull Destinations**

Extractions with pull destinations provide the data on request. The extraction process is started by the destination product environment. <br>
An extraction with  pull Destination supports the pass-through of data. When a consumer (e.g. a Self Service BI Tool) requests the data, 
Xtract Universal translates the request into a query for the underlying SAP system, retrieves the data directly from the source system and delivers that to the consumer.

These include the following destinations: 

- CSV (via HTTP)
- OData 
- Qlik
- Alteryx

If the destination supports the gzip http data compression, Xtract Universal will send the data to the destination client in a gzip compressed format.
           

**Push Destinations**<br>
Extractions with push destinations provide the data to the destination environment proactively. The extraction process is started in Xtract Universal, e.g. from a scheduled extraction. <br>
An extraction with push destinations involves the extracting of data from the SAP source systems and once loaded into the destination, data can be processed further. E.g. it can be transformed to an optimized form ready for analytic query workloads.


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0MTc2MzUwMDFdfQ==
-->