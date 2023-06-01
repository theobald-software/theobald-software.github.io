
### Unterstützte SAP-Systeme und Releases

Die folgenden SAP-Systeme werden unterstützt:
- alle SAP ABAP basierten Systeme, die RFC-Konnektivität bereitstellen.
Die Kommunikation mit SAP erfolgt über das RFC-Protokoll. 
- SAP-ABAP-Systeme auf beliebigen Datenbanken (einschließlich HANA).
Die vom SAP-System verwendete Datenbank irrelevant, weil die Integration auf der Ebene des SAP-Anwendungsservers erfolgt.
- SAP-Systeme, die auf Big Endian- und Little Endian-Hardware laufen.
- SAP Industry Solutions wie IS-U, IS-R, etc. werden unterstützt.
- SAP Release 4.6C und neuer.
- alle Betriebssysteme werden unterstützt.

Beispiele:
[SAP S/4HANA](https://kb.theobald-software.com/sap/supported-sap-and-hana-versions-by-theobald-software-products), mySAP, SAP Application Server ABAP, Message Server, Router, Standalone Gateway, SAP Business Suite 7 (CRM, SRM, SCM etc.), SAP Business All in One, CAR, APO, PI, etc., SAP BW 3.1 and later, SAP BW/BI 7.x, SAP ERP / ECC 5.0 / ECC 6.0 (including all EhPs), SAP R/3 Version 4.6C and later, SAP BW/4HANA und mehr.
 
{: .box-warning}
**Disclaimer:** SAP-Versionen, die vom Hersteller nicht mehr unterstützt werden, funktionieren i.d.R. noch mit Theobald Produkten, sind aber von den Theobald Software Support-Leistungen ausgeschlossen.

### Nicht unterstützte SAP-Systeme
Die folgenden SAP Systeme werden nicht unterstützt:
- SAP-Systeme, die nicht auf ABAP-Systemen laufen 
- SAP-Systeme, die keine RFC-Konnektivität bieten.
 
Beispiele:
SAP S/4HANA Cloud Public Edition, Business By Design, Business One, Business Objects, Sybase, Ariba, Success Factors, Concur.

### HANA Datenbank
Mit Operational Data Provisioning (ODP) können Sie die SAP HANA-Datenbank eines SAP ABAP Quellsystems verbinden. 
Die Kommunikation erfolgt über RFC. 
Mit dem ODP-Kontext für SAP HANA (HANA) stehen folgende HANA-View-Typen zur Verfügung:
- Analysesichten
- Kalkulationsansichten und
- Zugehörige Attributansichten

Der direkte Zugriff auf eine HANA-Datenbank ohne ein SAP-ABAP-Quellsystem wird nicht unterstützt.

