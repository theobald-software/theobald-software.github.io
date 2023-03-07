Mit der Komponente lassen sich Delta-Inhalte aus SAP Tabellen und Views abziehen. 
Dafür wird in SAP eine Log-Tabelle erstellt, die alle Änderungen (Einfügen, Ändern, Löschen) einer ausgewählten Tabelle aufzeichnet.

<!---
{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um die Table Komponente zu verwenden, muss der Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP verfügbar sein. 
Weitere Informationen finden Sie im Knowledge-Base-Artikel [SAP Zugriffsrechte: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).
-->

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
- Installation des Funktionsbausteins IUUC_CREATE_TABLE <br>
Dieder Funktionsbaustein ist Teil der SAP Superpackages CNV_INC_PROCESSING_REMOTE, DMIS_BASIS_INC_FW, DMIS_BASIS und DMIS
- Installation der Funktionbausteine Z_THEO_DELETE_LOG_ENTRIES und Z_THEO_READ_TABLE Version 2.10 oder höher. Die SAP Transportaufträge für beide Funktionbausteine befinden sich im Installationsverzeichnis
`C:\ProgramFiles\[XtractProduct]\ABAP\`, siehe [Funktionsbaustein für TableCDC](./sap-customizing/funktionsbaustein-fuer-tablecdc).


<!---

- Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP muss gewährleistet sein, siehe [SAP Zugriffsrechte: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).
- Der Benutzer, mit dem die SAp-Verbindung aufgebaut wird, muss SAP Tabellen erstellen dürfen, siehe [SAP Verbindung - Authentication](./erste-schritte/sap-verbindungen-anlegen#authentication).
-->

