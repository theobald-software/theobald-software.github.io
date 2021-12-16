
### Unterstützte SAP-Systeme und Releases
Die gesamte Kommunikation mit SAP erfolgt über das RFC-Protokoll. 
Es werden alle SAP ABAP basierten Systeme unterstützt, die RFC-Konnektivität bereitstellen.
Die Integration erfolgt auf der Ebene des SAP-Anwendungsservers. 
Daher ist die vom SAP-System verwendete Datenbank irrelevant. SAP-ABAP-Systeme auf beliebigen Datenbanken (einschließlich HANA) werden unterstützt. 
Das bedeutet auch, dass das Betriebssystem des SAP-Systems irrelevant ist - alle Betriebssysteme werden unterstützt.
SAP-Systeme, die auf Big Endian- und Little Endian-Hardware laufen, werden unterstützt.

SAP Release 4.6C und neuer werden unterstützt. Dazu gehören:<br/> 
* mySAP	
* SAP Application Server ABAP, Message Server, Router, Standalone Gateway
* SAP Business Suite 7 (CRM, SRM, SCM etc.)
* SAP Business All in One, CAR, APO, PI, IS-U etc.
* SAP BW 3.1 and later
* SAP BW/BI 7.x
* SAP BW/4HANA
* SAP ERP / ECC 5.0 / ECC 6.0 (including all EhPs)
* SAP R/3 Version 4.6C and later
* SAP S/4HANA Cloud Private Edition
* SAP S/4HANA Private Cloud Managed by SAP (HEC)
* SAP HEC Customer Edition
* SAP S/4HANA AnyPremise

Die folgenden SAP Releases werden nur eingeschränkt unterstützt:
- SAP S/4HANA Cloud Extended Edition (EX)

Die Installation von Z-Funktionsbausteinen auf der SAP S/4HANA Cloud Extended Edition wird noch nicht unterstützt.
Daher ist die Funktionalität bei der Extraktion von [Tabellen](../sap-customizing/funktionsbaustein-fuer-table-extraktion#einschränkungen-von-rfc_read_table) und [Reports](../sap-customizing/report-funktionsbaustein-installieren) für SAP S/4HANA Cloud Extended Edition eingeschränkt.

### Nicht unterstützte SAP-Systeme
Nicht unterstützt werden die SAP-Systeme, die nicht auf ABAP-Systemen laufen oder keine RFC-Konnektivität bieten. 
Die folgenden Systeme werden beispielsweise nicht unterstützt:
- SAP S/4HANA Cloud Essentials Edition (ES)
- Business By Design 
- Business One
- Business Objects
- Sybase
- Ariba
- Success Factors
- Concur

### HANA Datenbank
Mit Operational Data Provisioning (ODP) können Sie die SAP HANA-Datenbank eines SAP ABAP Quellsystems verbinden. 
Die Kommunikation erfolgt über RFC. 
Mit dem ODP-Kontext für SAP HANA (HANA) stehen folgende HANA-View-Typen zur Verfügung:
- Analysesichten
- Kalkulationsansichten und
- Zugehörige Attributansichten

Der direkte Zugriff auf eine HANA-Datenbank ohne ein SAP-ABAP-Quellsystem wird nicht unterstützt.

