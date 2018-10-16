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
- [Power BI (Cloud) / Power BI Desktop](./xu-destinations/powerbi-cloud) 
- [Power Pivot using OData, see Power BI (Desktop)](./xu-destinations/powerbi-desktop) 
- [Tableau](./xu-destinations/tableau) 
- [Qlik (QlikSense and QlikView)](./xu-destinations/qliksense-qlikview) 
- [Good Data](./xu-destinations/gooddata) 

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

The destinations are divided into two categories, depending on where the extraction process is started.  

**Pull Destinations**

Pull destinations provide the data on request. The extraction process is started by the destination product environment.
These include the following destinations: 

- CSV (via HTTP)
- OData 
- Qlik
- Alteryx

If the destination supports the gzip http data compression, Xtract Universal will send the data to the destination client in a gzip compressed format.
           

**Push Destinations**<br>
All remaining Destinations are Push Destinations, that provide the data to the destination environment proactively. The extraction process is started in Xtract Universal, e.g. from a scheduled extraction.  

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
