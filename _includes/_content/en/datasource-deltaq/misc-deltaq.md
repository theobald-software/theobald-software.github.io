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
### Releated Links
- [SAP Documentation: Set Up and Activate DataSources](https://help.sap.com/docs/SLH_advanced_compliance_reporting_service/7a60944343e543a1ab99e9b2904dab09/e5d447257a95416190d29638a64a5dfa.html)
- [How to activate activate the BI Content DataSource (SAP Help)](https://help.sap.com/saphelp_scm70/helpdata/ru/d8/8f5738f988d439e10000009b38f842/content.htm?no_cache=true)
- [How to create Generic DataSource using Function Module and Timestamps](https://kb.theobald-software.com/sap/create-generic-datasource-using-function-module-and-timestamps)
- [DeltaQ Troubleshooting Guide](https://support.theobald-software.com/helpdesk/KB/View/14424-deltaq-troubleshooting-guide)
