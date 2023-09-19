### SAP Transactions for Working with DataSources

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

### Executing DeltaQ in Parallel

When extracting multiple DataSources in parallel it is recommended to use separate RFC destinations, e.g., XTRACT01, XTRACT02, etc.<br>
Parallel execution of DataSources with an identical RFC destination is possible, but not recommended.

