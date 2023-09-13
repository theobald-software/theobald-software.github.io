### SAP Transaktionen für der Arbeit mit DataSources

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

Für parallele DeltaQ-Extraktionen wird empfohlen, separate RFC-Destinationen zu verwenden, z.B. XTRACT01, XTRACT02, usw.<br>
Die parallele Ausführung mehrerer DataSources mit einer identischen RFC-Destination ist möglich, aber nicht empfohlen.
