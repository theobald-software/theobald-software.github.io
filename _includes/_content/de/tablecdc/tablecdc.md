Mit der Komponente lassen sich Delta-Inhalte aus SAP Tabellen abziehen. 
Dafür wird in SAP eine Log-Tabelle erstellt, die alle Änderungen (Einfügen, Ändern, Löschen) einer ausgewählten Tabelle aufzeichnet.


{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um die Table CDC Komponente zu verwenden, muss der Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP verfügbar sein. 
Weitere Informationen finden Sie im Knowledge-Base-Artikel [SAP Zugriffsrechte: Table CDC](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table-cdc).


{: .box-tip }
**Tipp:** Grundlagen zum Produkt sind im Abschnitt [Erste Schritte](./erste-schritte) beschrieben.

### Über Table CDC

Change Data Capture (CDC) ist eine Methode, um Datenänderungen nachzuverfolgen, z.B. einfügen, aktualisieren und löschen in SAP Tabellen.
Die Table CDC component ertsellt in SAP eine Log-Tabelle, die alle Änderungen in einer ausgewählten SAP Tabelle erfasst. 
Der Inhalt der Log-Tabelle wird nach jeder erfolgreichen Extraktion gelöscht. Daten, die nicht extrahiert wurden, werden nicht aus der Log-Tabelle gelöscht.

Eine detailierte Übersicht dieses Prozesses finden Sie in dem Knowledge Base Artikel [Delta Mechanism of TableCDC](https://kb.theobald-software.com/tables/table-cdc-mechanism).

{: .box-note }
**Hinweis:** Views, Cluster- und Pool-Tabellen werden von der Table CDC Komponente nicht unterstützt.

### Voraussetzungen

- Kompatibel mit SAP ECC 5.0 und höher
- Unterstützte Datenbanken:
	- HANA
	- SQL Server
	- Oracle
	- IBM Db2
	- IBM for i (Db4)
	- IBM for z/os (Db6)
	- MaxDB
- Benutzerdefinierter Funktionsbaustein [/THEO/CDC_ECC oder /THEO/CDC_S4](./sap-customizing/funktionsbaustein-fuer-tablecdc)
- Benutzerdefinierter Funktionsbaustein [/THEO/READ_TABLE oder Z_THEO_READ_TABLE](./sap-customizing/funktionsbaustein-fuer-table-extraktion) Version 2.10 oder höher

Die SAP-Transportaufträge für die Funktionsbausteine werden im Installationsverzeichnis bereitgestellt: `C:\ProgramFiles\[XtractProduct]\ABAP\`, siehe [Custom function module for TableCDC](./sap-customizing/funktionsbaustein-fuer-tablecdc).


<!---

- Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP muss gewährleistet sein, siehe [SAP Zugriffsrechte: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).
- Der Benutzer, mit dem die SAp-Verbindung aufgebaut wird, muss SAP Tabellen erstellen dürfen, siehe [SAP Verbindung - Authentication](./erste-schritte/sap-verbindungen-anlegen#authentication).
-->

