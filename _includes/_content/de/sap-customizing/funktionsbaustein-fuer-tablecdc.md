
Die Report Komponente benötigt die Installation der Z-Funktionsbausteine Z_THEO_DELETE_LOG_ENTRIES und Z_THEO_READ_TABLE auf Ihrem SAP-System.<br>
Falls es Ihnen nicht möglich ist, den Z-Funktionsbaustein selbst zu installieren, wenden Sie sich an Ihre SAP-Basis-Abteilung.

### Installation von Z_THEO_DELETE_LOG_ENTRIES

Installieren Sie den Funktionsbaustein Z_THEO_DELETE_LOG_ENTRIES über den mitgelieferten Transportauftrag Z_THEO_DELETE_LOG_ENTRIES-transport.zip.<br>
Der Transportauftrag befindet sich in folgendem Installationsverzeichnis: `C:\Program Files\[XtractProduct]\ABAP\TableCDC\Z_THEO_DELETE_LOG_ENTRIES-transport.zip`.

{: .box-note}
**Hinweis:** Lesen Sie die README.pdf, die sich im Installationsordner (z.B.`C:\Program Files\XtractProduct\ABAP\README.pdf`) befindet, bevor Sie den Z-Funktionsbaustein installieren.

### Installation von Z_THEO_READ_TABLE

Installieren Sie den Funktionsbaustein Z_THEO_READ_TABLE Version 2.10 oder höher, siehe [Funktionsbaustein für Table](./funktionsbaustein-fuer-table-extraktion).

{: .box-note}
**Hinweis:** Lesen Sie die README.pdf, die sich im Installationsordner (z.B.`C:\Program Files\XtractProduct\ABAP\README.pdf`) befindet, bevor Sie den Z-Funktionsbaustein installieren.

#### Weiterführende Links
- [Knowledge Base: How to import an SAP Transport Request](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)
- [Table CDC - Voraussetzungen](../table-cdc#voraussetzungen)
