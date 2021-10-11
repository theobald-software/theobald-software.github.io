### Hilfreiche Transaktionen im SAP-System bei der Arbeit mit DataSources


#### Initiales Setup
* SBIW - SAP DataSources Startseite
* RSA3 - Extraktor Checker 
* RSA5 - DataSources und Hierarchien aus dem Business Content installieren  
* RSA6 - DataSources und Hierarchien nachbearbeiten 
* SM59 - Konfiguration der RFC-Verbindungen 


#### Fehleranalyse
* SMQS - qRFC Monitor (QOUT Scheduler)
* SM37 - Hintergundjobs
* SM58 - Transaktionaler RFC
* SM50 - Prozessübersicht
* SMGW - Gateway Monitor


#### Andere Transaktionen
* RSA7 - Pflege Delta Queue
* SMQ1 - qRFC Monitor (Ausgangsqueue)
* WE02 - IDoc List
* WE20 - Partnerprofile

### DeltaQ parallel ausführen

{: .box-tip }
**Empfehlung:** Die parallele Ausführung mehrerer DataSources mit der identischen RFC-Destination ist möglich. <br> Die Empfehlung für parallele DeltaQ-Extraktionen ist jedoch eine separate RFC-Destination, z.B. XTRACT01, XTRACT02, usw. zu verwenden. 

****
### Weiterführende Links
- [How to activate DataSources in the SAP OLTP System](https://kb.theobald-software.com/sap/activating-datasource-in-the-SAP-OLTP-System)
- [How to activate activate the BI Content DataSource (SAP Help)](https://help.sap.com/saphelp_scm70/helpdata/ru/d8/8f5738f988d439e10000009b38f842/content.htm?no_cache=true)
- [How to create Generic DataSource using Function Module and Timestamps](https://kb.theobald-software.com/sap/create-generic-datasource-using-function-module-and-timestamps)
- [How to Create Generic DataSources which use the Delta Queue (SAP Community Network)](https://www.sdn.sap.com/irj/sdn/go/portal/prtroot/docs/library/uuid/d3219af2-0c01-0010-71ac-dbb4356cf4bf)
- [How to create a generic extractor for BW (SAP Community Network)](http://www.sdn.sap.com/irj/scn/go/portal/prtroot/docs/library/uuid/a0f46157-e1c4-2910-27aa-e3f4a9c8df33?QuickLink=index&overridelayout=true)
- [DeltaQ Troubleshooting Guide](https://kb.theobald-software.com/troubleshooting/deltaq-troubleshooting-guide) (in Englisch)

