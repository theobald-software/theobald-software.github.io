
Die Report Komponente benötigt die Installation der Z-Funktionsbausteine /THEO/CDC und THEO/READ_TABLE auf Ihrem SAP-System.<br>
Falls es Ihnen nicht möglich ist, den Z-Funktionsbaustein selbst zu installieren, wenden Sie sich an Ihre SAP-Basis-Abteilung.

### Installation von THEO_CDC_ECC oder THEO_CDC_S4 #

- Installieren Sie die Funktionsgruppe THEO_CDC_ECC, wenn Sie ein SAP ECC-System verwenden.
Der Transportauftrag für die Installation befindet sich im folgenden Installationsverzeichnis: `C:\Programme\[XtractProduct]\ABAP\TableCDC\THEO_CDC_ECC.zip`.

- Installieren Sie die Funktionsgruppe THEO_CDC_S4, wenn Sie ein SAP S/4-System < Version 7.55 verwenden.
Der Transportauftrag für die Installation befindet sich im folgenden Installationsverzeichnis: `C:\Programme\[XtractProduct]\ABAP\TableCDC\THEO_CDC_S4.zip`.

- Installieren Sie die Funktionsgruppe THEO_CDC_S4_755, wenn Sie ein SAP S/4-System Version 7.55 oder höher verwenden.
Der Transportauftrag für die Installation befindet sich im folgenden Installationsverzeichnis: `C:\Programme\[XtractProduct]\ABAP\TableCDC\THEO_CDC_S4_755.zip`.


Der Transportauftrag muss von Ihrem SAP-Basis-Team in SAP importiert werden.
Die Funktionsgruppen /THEO/CDC_ECC and /THEO/CDC_S4 enthalten jeweils folgende Funktionsbausteine:

| Funktionsbaustein | Beschreibung |
| :------ |:--- |
| /THEO/CLEAR_LOGTAB | Löscht Einträge in der Log-Tabelle bis zu einer gegebenen Sequenznummer | 
| /THEO/COUNT_LOGTAB_ENTRIES | Zählt die Einträge in der Log-Tabelle |
| /THEO/CREATE_LOG_TABLE | Funktionsbaustein zum Erstellen der Log-Tabellen |
| /THEO/CREATE_TRIGGERS | Funktionsbaustein zum Erstellen der DB Trigger für CDC |
| /THEO/DELETE_LOG_TABLE | Funktionsbaustein zum Löschen der Log-Tabellen |
| /THEO/DELETE_TRIGGERS | Funktionsbaustein zum Löschen der DB Trigger für CDC |
| /THEO/GET_DB | Liest die System-ID der Datenbank |


{: .box-note}
**Hinweis:** Lesen Sie die README.pdf, die sich im Installationsordner (z.B.`C:\Program Files\XtractProduct\ABAP\README.pdf`) befindet, bevor Sie den Z-Funktionsbaustein installieren.

### Installation von /THEO/READ_TABLE

Installieren Sie den Funktionsbaustein /THEO/READ_TABLE oder Z_THEO_READ_TABLE Version >= 2.10, siehe [Funktionsbaustein für Table](./funktionsbaustein-fuer-table-extraktion).

{: .box-note}
**Hinweis:** Lesen Sie die README.pdf, die sich im Installationsordner (z.B.`C:\Program Files\XtractProduct\ABAP\README.pdf`) befindet, bevor Sie den Z-Funktionsbaustein installieren.

****
#### Weiterführende Links
- [Knowledge Base: How to import an SAP Transport Request](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)
- [Knowledge Base: Delta Mechanism of TableCDC](https://kb.theobald-software.com/tables/table-cdc-mechanism)
- [Table CDC - Voraussetzungen](../table-cdc#voraussetzungen)
