---
layout: page
title: Destinations
description: Destinations
product: xtract-universal
parent: xtract-universal-
childidentifier: xu-destinations
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=destinations
---

**Caution**: For some destinations (e.g. Oracle, DB2, Teradata, Exasol etc.) the appropriate driver must be installed. Refer to [Requirements](). 

Xtract Universal allows to extract data from SAP ERP and BW systems and to load them to different [destination]() environments, including:  

**Database / Datawarehouse:**<br>
- [Azure DWH]() 
- [HANA]() 
- [IBM DB2]() 
- [EXASolution]() 
- [HP Vertica]() 
- [MySQL]() 
- [Oracle]() 
- [Amazon Redshift]() 
- [SQL Server]() 
- [Teradata]() 

**Business Intelligence / Analytics Tools:**<br>
- [Microstrategy]()
- [Power BI (Cloud) / Power BI Desktop]() 
- [Power Pivot using OData, see Power BI (Desktop)]() 
- [Tableau]() 
- [Qlik (QlikSense and QlikView)]() 
- [Good Data]() 

**Analytics & ETL Tools:**
- [Alteryx]() 
- [Alteryx Connect]() 

**Business Systems:** 
- [Salesforce]() 
- [Sharepoint]() 

**Cloud Storage:**
- [AWS S3]()
- [Azure Blob Storage]() 

**Generic Destinations:** 
- [CSV]() (via HTTP)
- [OData]()  (e.g. for PowerPivot, PowerQuery, Datazen and Tableau)      
- [Flat File - CSV]()  (comma-seperated values)
            
            
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
