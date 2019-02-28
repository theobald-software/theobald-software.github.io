---
ref: xi-q-delta-10
layout: page
title: Miscellaneous
description: Miscellaneous
product: xtract-is
parent: deltaq
permalink: /:collection/:path
weight: 10
lang: en_GB
---

## Helpful Transactions in the SAP System for Working with DataSources

### Initial setup
* SBIW - SAP DataSources start page
* RSA3 - Extractor Checker 
* RSA5 - Installing DataSources and Hierarchies from Business Content  
* RSA6 - Postprocess DataSources and Hierarchies 
* SM59 - Configuration of RFC Connections 

### Error analysis
* SMQS - qRFC Monitor (QOUT Scheduler): Number of *Max.Conn.* should be at least 10
* SM37 - Background jobs
* SM58 - Transactional RFC
* SM50 - Process overview
* SMGW - Gateway Monitor

### Other
* RSA7 - Delta Queue Maintenance
* SMQ1 - qRFC Monitor (outbound queue)
* WE02 - IDoc list
* WE20 - Partner profiles


## Helpful links about extractors (DataSources)

* [DeltaQ Troubleshooting Guide (KB)](https://kb.theobald-software.com/xtract-is/deltaq-troubleshooting-guide)
* [How to activate DataSources in the SAP OLTP System (Blog)](http://theobald-software.com/blog/2013/04/15/activating-datasources-in-the-oltp-system/)
* [How to activate activate the BI Content DataSource (SAP Help)](http://help.sap.com/saphelp_nw70ehp2/helpdata/en/d8/8f5738f988d439e10000009b38f842/content.htm)
* [How to extract data from SAP BW/BI via Export DataSources (Blog)](http://theobald-software.com/blog/2010/06/17/extracting-data-from-sap-bwbi-via-export-datasources-with-xtract-is/)
* [How to create Generic DataSource using Function Module and Timestamps (Blog)](http://theobald-software.com/blog/2011/02/16/create-generic-datasource-using-function-module-and-timestamps/)
* [How to Create Generic DataSources which use the Delta Queue (SAP Community Network)](https://www.sdn.sap.com/irj/sdn/go/portal/prtroot/docs/library/uuid/d3219af2-0c01-0010-71ac-dbb4356cf4bf)
* [How to create a generic extractor for BW (SAP Community Network)](http://www.sdn.sap.com/irj/scn/go/portal/prtroot/docs/library/uuid/a0f46157-e1c4-2910-27aa-e3f4a9c8df33?QuickLink=index&overridelayout=true)

## Other
### Execute DeltaQ in parallel
You can execute multiple DataSource with the same RFC destination in parallel.
However, it is recommended to use a separate RFC destination for each parallel DeltaQ extraction, for example XTRACT01, XTRACT02, and so on.
