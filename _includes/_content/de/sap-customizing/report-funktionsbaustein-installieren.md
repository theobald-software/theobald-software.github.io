Die Report Komponente benötigt die Installation eines Z-Funktionsbausteins auf Ihrem SAP-System.<br>
Falls es Ihnen nicht möglich ist, den Z-Funktionsbaustein selbst zu installieren, wenden Sie sich an Ihre SAP-Basis-Abteilung. 

### Installation
Installieren Sie den Funktionsbaustein über den mitgelieferten Transportauftrag *Z_XTRACT_IS_REMOTE_REPORT-transport.zip*. <br> 
Der Transportauftrag befindet sich in folgendem Installationsverzeichnis: `C:\Program Files\[XtractProduct]\ABAP\Report\Z_XTRACT_IS_REMOTE_REPORT-transport.zip`.

### SAP Standard Datentyp TAB512

Anstatt den SAP Standard Datentyp *TAB512* für den LIST_OUTPUT Tabellen-Parameter zu verwenden, können Sie einen eigenen Z-Datentyp erstellen. <br> 
Das ist notwendig, sofern die Ausgabelänge einer Report-Zeile mehr als 512 Zeichen beträgt. Die maximal mögliche Länge beträgt 1023 Zeichen.
![SAPCust-Report-ListOutput](/img/content/report_list_output_ztag1024png.png){:class="img-responsive"}

{: .box-note}
**Hinweis:** Die Ausnahme `LIST_FROM_MEMORY_NOT_FOUND` wird geworfen, wenn der Report kein Ergebnis liefert.

***********
#### Weiterführende Links
- [How to import an SAP Transport Request with the Transport Management System STMS](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)
- [Create Function Group](https://help.sap.com/saphelp_ewm94/helpdata/de/d1/801ef5454211d189710000e8322d00/content.htm?no_cache=true)
