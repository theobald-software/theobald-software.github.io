### Helpful Transactions in the SAP System for Working with DataSources

#### Initial Setup
* SBIW - SAP DataSources start page
* RSA3 - Extractor Checker 
* RSA5 - Installing DataSources and Hierarchies from Business Content  
* RSA6 - Postprocess DataSources and Hierarchies 
* SM59 - Configuration of RFC Connections 


#### Error Analysis
* SMQS - qRFC Monitor (QOUT Scheduler): Number of *Max.Conn.* should be at least 10
* SM37 - Background jobs
* SM58 - Transactional RFC
* SM50 - Process overview
* SMGW - Gateway Monitor


#### Other Transaction
* RSA7 - Delta Queue Maintenance
* SMQ1 - qRFC Monitor (outbound queue)
* WE02 - IDoc list
* WE20 - Partner profiles

### Execute DeltaQ in Parallel

{: .box-tip }
**Recommendation:** Parallel execution of several DataSources with the identical RFC destination is possible. <br> However, the recommendation for parallel DeltaQ extractions is to use a separate RFC destination, e.g. XTRACT01, XTRACT02, etc. 

*****
#### Helpful Links about Extractors (DataSources)
- [How to activate DataSources in the SAP OLTP System](https://kb.theobald-software.com/sap/activating-datasource-in-the-SAP-OLTP-System)
- [How to activate activate the BI Content DataSource (SAP Help)](https://help.sap.com/saphelp_scm70/helpdata/ru/d8/8f5738f988d439e10000009b38f842/content.htm?no_cache=true)
- [How to extract data from SAP BW/BI via Export DataSources](https://kb.theobald-software.com/xtract-is/extracting-data-from-sap-bw-bi-via-export-data-sources-with-xtract-is)
- [How to create Generic DataSource using Function Module and Timestamps](https://kb.theobald-software.com/sap/create-generic-datasource-using-function-module-and-timestamps)
- [How to Create Generic DataSources which use the Delta Queue (SAP Community Network)](https://www.sdn.sap.com/irj/sdn/go/portal/prtroot/docs/library/uuid/d3219af2-0c01-0010-71ac-dbb4356cf4bf)
- [How to create a generic extractor for BW (SAP Community Network)](http://www.sdn.sap.com/irj/scn/go/portal/prtroot/docs/library/uuid/a0f46157-e1c4-2910-27aa-e3f4a9c8df33?QuickLink=index&overridelayout=true)

#### Releated Links
- [DeltaQ Troubleshooting Guide](https://kb.theobald-software.com/troubleshooting/deltaq-troubleshooting-guide)
