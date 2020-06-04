---
ref: xi-q-delta-10
layout: page
title: Verschiedenes
description: Verschiedenes
product: xtract-is
parent: xtract-is-deltaq
permalink: /:collection/:path
weight: 11
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=verschiedenes
---

### HILFREICHE TRANSAKTIONEN IM SAP-SYSTEM BEI DER ARBEIT MIT DATASOURCES

### Initiales Setup
- SBIW - SAP DataSources Startseite
- RSA3 - Extraktor Checker 
- RSA5 - DataSources und Hierarchien aus dem Business Content installieren
- RSA6 - DataSources und Hierarchien nachbearbeiten
- SM59 - Konfiguration der RFC-Verbindungen

### Fehleranalyse
- SMQS - qRFC Monitor (QOUT Scheduler)
- SM37 - Hintergundjobs
- SM50 - Prozessübersicht
- SM58 - Transaktionaler RFC
- SMGW - Gateway Monitor

### Sonstige
- SMQ1 - qRFC Monitor (Ausgangsqueue)
- RSA7 - Pflege Delta Queue
- WE02 - IDoc-Liste
- WE20 - Partnervereinbarungen

### Hilfreiche (englischsprachige) Links zum Thema Extraktoren (DataSources)

* [DeltaQ Troubleshooting Guide (KB)](https://kb.theobald-software.com/troubleshooting/deltaq-troubleshooting-guide)
* [How to activate DataSources in the SAP OLTP System (Blog)](http://theobald-software.com/blog/2013/04/15/activating-datasources-in-the-oltp-system/)
* [How to activate activate the BI Content DataSource (SAP Help)](http://help.sap.com/saphelp_nw70ehp2/helpdata/en/d8/8f5738f988d439e10000009b38f842/content.htm)
* [How to extract data from SAP BW/BI via Export DataSources (Blog)](http://theobald-software.com/blog/2010/06/17/extracting-data-from-sap-bwbi-via-export-datasources-with-xtract-is/)
* [How to create Generic DataSource using Function Module and Timestamps (Blog)](http://theobald-software.com/blog/2011/02/16/create-generic-datasource-using-function-module-and-timestamps/)
* [How to Create Generic DataSources which use the Delta Queue (SAP Community Network)](https://www.sdn.sap.com/irj/sdn/go/portal/prtroot/docs/library/uuid/d3219af2-0c01-0010-71ac-dbb4356cf4bf)
* [How to create a generic extractor for BW (SAP Community Network)](http://www.sdn.sap.com/irj/scn/go/portal/prtroot/docs/library/uuid/a0f46157-e1c4-2910-27aa-e3f4a9c8df33?QuickLink=index&overridelayout=true)

### SONSTIGE 
### DeltaQ parallel ausführen
Sie können mehrere Datasources mit derselben RFC Destination parallel ausführen. Es wird jedoch empfohlen für jede parallel laufende DeltaQ-Extraktion eine eigene RFC-Destination zu verwenden, also z.B. XTRACT01, XTRACT02, etc.
