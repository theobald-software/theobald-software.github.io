Die Report Komponente benötigt die Installation eines Z-Funktionsbausteins auf Ihrem SAP-System.<br>
Falls es Ihnen nicht möglich ist, den Z-Funktionsbaustein selbst zu installieren, wenden Sie sich an Ihre SAP-Basis-Abteilung. 

{: .box-note}
**Hinweis:** Ab Version 1.2 des benutzerdefinierten Funktionsbausteins `Z_XTRACT_IS_REMOTE_REPORT` muss der Zugriff auf Reports explizit erteilt werden, siehe [Berechtigungsobjekte für Z_XTRACT_IS_REMOTE_REPORT](#berechtigungsobjekte-für-z_xtract_is_remote_report).


### Installation
Installieren Sie den Funktionsbaustein über den mitgelieferten Transportauftrag *Z_XTRACT_IS_REMOTE_REPORT-transport.zip*. <br> 
Der Transportauftrag befindet sich in folgendem Installationsverzeichnis: `C:\Program Files\[XtractProduct]\ABAP\Report\Z_XTRACT_IS_REMOTE_REPORT-transport.zip`.

### Berechtigungsobjekte für Z_XTRACT_IS_REMOTE_REPORT

Ab Z_XTRACT_IS_REMOTE_REPORT Version 1.2 muss der Zugriff auf Reports explizit erteilt werden, siehe [Authorizing Access to Reports via Authorization Groups](https://kb.theobald-software.com/sap/authorizing-access-to-specific-reports){:target="_blank"}.


### SAP Standard Datentyp TAB512

Anstatt den SAP Standard Datentyp *TAB512* für den LIST_OUTPUT Tabellen-Parameter zu verwenden, können Sie einen eigenen Z-Datentyp erstellen. <br> 
Das ist notwendig, sofern die Ausgabelänge einer Report-Zeile mehr als 512 Zeichen beträgt. Die maximal mögliche Länge beträgt 1023 Zeichen.
![SAPCust-Report-ListOutput](/img/content/report_list_output_ztag1024png.png){:class="img-responsive"}

{: .box-note}
**Hinweis:** Die Ausnahme `LIST_FROM_MEMORY_NOT_FOUND` wird geworfen, wenn der Report kein Ergebnis liefert.

***********
#### Weiterführende Links
- [How to import an SAP Transport Request with the Transport Management System STMS](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)
- [Authorizing Access to Specific Reports](https://kb.theobald-software.com/sap/authorizing-access-to-specific-reports)
- [Create Function Group](https://help.sap.com/saphelp_ewm94/helpdata/de/d1/801ef5454211d189710000e8322d00/content.htm?no_cache=true)
