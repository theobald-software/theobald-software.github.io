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
- [SAP Documentation: Set Up and Activate DataSources](https://help.sap.com/docs/SLH_advanced_compliance_reporting_service/7a60944343e543a1ab99e9b2904dab09/e5d447257a95416190d29638a64a5dfa.html)
- [How to activate activate the BI Content DataSource (SAP Help)](https://help.sap.com/saphelp_scm70/helpdata/ru/d8/8f5738f988d439e10000009b38f842/content.htm?no_cache=true)
- [How to create Generic DataSource using Function Module and Timestamps](https://kb.theobald-software.com/sap/create-generic-datasource-using-function-module-and-timestamps)
- [DeltaQ Troubleshooting Guide](https://support.theobald-software.com/helpdesk/KB/View/14424-deltaq-troubleshooting-guide) (in Englisch)

