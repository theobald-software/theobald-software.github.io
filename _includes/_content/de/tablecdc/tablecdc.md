Mit der Komponente lassen sich Delta-Inhalte aus SAP Tabellen und Views abziehen. 
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


{: .box-note }
**Hinweis:** Ansichten, Cluster- und Pool-Tabellen werden von der Table CDC Komponente nicht unterstützt.

### Voraussetzungen

- SAP Version 7.40 SP05 oder höher.
- Benötigte Funktionsbausteine und ihre Pakethierarchie:

	| Funktionsbaustein | Pakethierarchie |
	|-----------------|----------|
	| DMC_DDIF_TABL_GET_WRAPPER |ECC: *CNVM &rarr; DMIS_BASIS_MWB &rarr; DMIS_BASIS &rarr; DMIS* <br> S4: *CNV_DMC_REMOTE &rarr; DMIS_BASIS_MWB &rarr; DMIS_BASIS &rarr; DMIS*|
	| IUUC_CREATE_TABLE | *CNV_INC_PROCESSING_REMOTE &rarr; DMIS_BASIS_INC_FW &rarr; DMIS_BASIS &rarr; DMIS* |
	| IUUC_DD_TABL_DEL_WRAPPER | - |
	| IUUC_COUNT_ENTRIES_LOGGING_TBL | *CNV_INC_PROCESSING_REMOTE &rarr; DMIS_BASIS_INC_FW &rarr; DMIS_BASIS &rarr; DMIS* |
	| IUUC_CRE_ACT_ADBC_TRIGGER | - |
	| IUUC_DELETE_ADBC_TRIGGER | *CNV_IUUC_REMOTE &rarr; DMIS_BASIS_INC_FW &rarr; DMIS_BASIS &rarr; DMIS* |
- Installation der Funktionbausteine Z_THEO_DELETE_LOG_ENTRIES und Z_THEO_READ_TABLE Version 2.10 oder höher. Die SAP Transportaufträge für beide Funktionbausteine befinden sich im Installationsverzeichnis
`C:\ProgramFiles\[XtractProduct]\ABAP\`, siehe [Funktionsbaustein für TableCDC](./sap-customizing/funktionsbaustein-fuer-tablecdc).


<!---

- Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP muss gewährleistet sein, siehe [SAP Zugriffsrechte: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).
- Der Benutzer, mit dem die SAp-Verbindung aufgebaut wird, muss SAP Tabellen erstellen dürfen, siehe [SAP Verbindung - Authentication](./erste-schritte/sap-verbindungen-anlegen#authentication).
-->

