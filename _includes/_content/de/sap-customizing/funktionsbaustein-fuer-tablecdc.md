
Die Report Komponente benötigt die Installation der Z-Funktionsbausteine Z_THEO_DELETE_LOG_ENTRIES und THEO/READ_TABLE auf Ihrem SAP-System.<br>
Falls es Ihnen nicht möglich ist, den Z-Funktionsbaustein selbst zu installieren, wenden Sie sich an Ihre SAP-Basis-Abteilung.

### Installation von Z_THEO_DELETE_LOG_ENTRIES

- Installieren Sie die Funktionsgruppe THEO_CDC_ECC, wenn Sie ein SAP ECC-System verwenden.
Der Transportauftrag für die Installation befindet sich im folgenden Installationsverzeichnis: `C:\Programme\[XtractProduct]\ABAP\TableCDC\THEO_CDC_ECC.zip`.

- Installieren Sie die Funktionsgruppe THEO_CDC_S4, wenn Sie ein SAP S/4-System verwenden.
Der Transportauftrag für die Installation befindet sich im folgenden Installationsverzeichnis: `C:\Programme\[XtractProduct]\ABAP\TableCDC\THEO_CDC_S4.zip`.

Der Transportauftrag muss von Ihrem SAP-Basis-Team in SAP importiert werden.
Die Funktionsgruppen enthalten jeweils folgende Funktionsbausteine:

- /THEO/CLEAR_LOGTAB
- /THEO/COUNT_LOGTAB_ENTRIES
- /THEO/CREATE_LOG_TABLE
- /THEO/CREATE_TRIGGERS
- /THEO/DELETE_LOG_TABLE
- /THEO/DELETE_TRIGGERS

{: .box-note}
**Hinweis:** Lesen Sie die README.pdf, die sich im Installationsordner (z.B.`C:\Program Files\XtractProduct\ABAP\README.pdf`) befindet, bevor Sie den Z-Funktionsbaustein installieren.

### Installation von /THEO/READ_TABLE

Installieren Sie den Funktionsbaustein /THEO/READ_TABLE oder Z_THEO_READ_TABLE Version >= 2.10, siehe [Funktionsbaustein für Table](./funktionsbaustein-fuer-table-extraktion).

{: .box-note}
**Hinweis:** Lesen Sie die README.pdf, die sich im Installationsordner (z.B.`C:\Program Files\XtractProduct\ABAP\README.pdf`) befindet, bevor Sie den Z-Funktionsbaustein installieren.

****
#### Weiterführende Links
- [Knowledge Base: How to import an SAP Transport Request](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)
- [Table CDC - Voraussetzungen](../table-cdc#voraussetzungen)
