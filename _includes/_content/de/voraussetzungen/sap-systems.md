
### Unterstützte SAP Systeme und Releases
Die gesamte Kommunikation mit SAP wird über das RFC-Protokoll abgewickelt. Es werden alle SAP-ABAP-basierten Systeme unterstützt, die eine RFC-Konnektivität bieten.
Die Integration erfolgt auf der Ebene des SAP-Applikationsservers. Daher ist es unerheblich, welche Datenbank das SAP-System verwendet.
Es werden SAP-ABAP-Systeme auf jeder beliebigen Datenbank (einschließlich HANA) unterstützt.
Das bedeutet, dass das Betriebssystem des SAP-Systems irrelevant ist - alle Betriebssysteme werden unterstützt.
SAP-Systeme, die auf Big Endian- und Little Endian-Hardware laufen, werden unterstützt.

SAP Releases 4.6C und höher werden unterstützt. Dazu gehören:
<br/> 	
* SAP R/3 Version 4.6C und höher
* mySAP
* SAP ERP / ECC 5.0 / ECC 6.0 (inkl. alle EhPs)
* SAP Business Suite 7 (CRM, SRM, SCM etc.)
* SAP Business All in One, CAR, APO, PI, IS-U etc.
* SAP S/4HANA
* SAP BW 3.1 und höher
* SAP BW/BI 7.x
* SAP BW/4HANA
* SAP Application Server ABAP, Message Server, Router, Standalone Gateway


### HANA Datenbank
Mit Operational Data Provisioning (ODP) können Sie die SAP-HANA-Datenbank eines SAP-ABAP-Quellsystems anschließen.
Die Kommunikation erfolgt über RFC. 
Mit ODP für SAP HANA (HANA) können die folgenden HANA-View-Typen extrahiert werden:
- Analyse-Views (Analysis Views)
- Berechnungs-Views (Calculation Views)
- Ansichten für verknüpfte Attribute (Associated Attribute Views)

Der direkte Zugriff auf eine HANA-Datenbank ohne ein SAP-ABAP-Quellsystem, das auf der entsprechenden HANA-Datenbank läuft, wird nicht unterstützt.


### Nicht unterstützte SAP Systeme
Nicht unterstützt werden die SAP-Systeme, die nicht auf ABAP-Systemen laufen oder keine RFC-Konnektivität bieten. Die folgenden Systeme werden nicht unterstützt:
- Business By Design 
- Business One
- Business Objects
- Sybase
- Ariba
- Success Factors
- Concur
