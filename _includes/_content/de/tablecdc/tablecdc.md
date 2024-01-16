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


{: .box-note }
**Hinweis:** Views, Cluster- und Pool-Tabellen werden von der Table CDC Komponente nicht unterstützt.

### Voraussetzungen

Table CDC ist mit SAP Versionen < 7.40 kompatibel.

Erforderliche Funktionsbausteine:

| Funktionsgruppe | Funktionsbausteine |
| :------ |:--- |
| /THEO/CDC_ECC oder /THEO/CDC_S4 | /THEO/CLEAR_LOGTAB<br> /THEO/COUNT_LOGTAB_ENTRIES<br> /THEO/CREATE_LOG_TABLE<br> /THEO/CREATE_TRIGGERS<br> /THEO/DELETE_LOG_TABLE<br>/THEO/DELETE_TRIGGERS<br>/THEO/GET_DB| 
| /THEO/READ_TABLE oder Z_THEO_READ_TABLE | /THEO/READ_TABLE oder Z_THEO_READ_TABLE Version 2.10 oder höher |

Die SAP-Transportaufträge für die Funktionsmodule werden im Installationsverzeichnis bereitgestellt: `C:\ProgramFiles\[XtractProduct]\ABAP\`, siehe [Custom function module for TableCDC](./sap-customizing/funktionsbaustein-fuer-tablecdc).


<!---

- Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP muss gewährleistet sein, siehe [SAP Zugriffsrechte: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).
- Der Benutzer, mit dem die SAp-Verbindung aufgebaut wird, muss SAP Tabellen erstellen dürfen, siehe [SAP Verbindung - Authentication](./erste-schritte/sap-verbindungen-anlegen#authentication).
-->

