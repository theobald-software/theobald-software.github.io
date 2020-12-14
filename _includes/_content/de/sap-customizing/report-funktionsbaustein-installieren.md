Die Report Komponente benötigt die Installation eines Z-Funktionsbausteins auf Ihrem SAP-System.<br>

Falls Sie den Z-Funktionsbaustein nicht selbst installieren können, bitten Sie einen Kollegen aus Ihrer SAP-Basis-Abteilung, Ihnen zu helfen. 

### Installation mit Hilfe SAP-Transport
Installation des Funktionsbaustein mit Hilfe des mitgelieferten Transportauftrags *thtrans.zip*. <br> Der Transportauftrag befindet sich im folgendem Installationsverzeichnis `C:\Program Files\[XtractProduct]\ABAP\thtrans.zip`.
Bitte den Transportauftrag an das SAP-Basis-Team weiterleiten.

### Manuelle Installation

1. Auruf der Transaktion *SE80 - Object Navigator* zur Erstellung einer neuen Funktionsgruppe, z.B. ZXTRACT
![Create_new_function_group](/img/content/create_function_group.png){:class="img-responsive"}
2. Aufruf der Transaktion *SE37* zur Anlage eines neuen Funktionsbausteins. Der Name sollte *Z_XTRACT_IS_REMOTE_REPORT* lauten, kann aber bei Bedarf auch geändert werden. 
3. Den Processing Type des Bausteins auf *remote enabled* (remotefähig) setzen. 
![Report_function_attributes](/img/content/report_function_attributes.png){:class="img-responsive"}
4. Anlage der Bausteinsignatur gemäß nachfolgenden Screenshots.
![Report_function_import](/img/content/report_function_import.png){:class="img-responsive"}
![Report_function_export](/img/content/report_function_export.png){:class="img-responsive"}
![Report_function_tables](/img/content/report_function_tables.png){:class="img-responsive"}
![Report_function_exceptions](/img/content/report_function_exceptions.png){:class="img-responsive"}
5. Kopieren Sie den Quellcode per **[Ctrl+C]** und **[Ctrl+V]** aus der Datei `C:\Program Files\[Xtract Product]\ABAP\Z_XTRACT_IS_REMOTE_REPORT.txt` in den Code-Editor - Tab *Source Code*.
![Report_function_source](/img/content/report_function_source.png){:class="img-responsive"}
6. Sicherung sowie Aktivierung des Bausteins.

{: .box-tipp }
**Tipp:** Die Funktionsweise des Baustein Z_XTRACT_IS_REMOTE_REPORT kann im Quellcode nachvollzogen werden. Sämtliche Schritte für die Ausführung, Job-Überwachung und den Spool-Abruf sind im Quellcode kommentiert.

![Report-Custom-Function-Source-Code](/img/content/Report-Custom-Function-Source-Code.png){:class="img-responsive"}


### SAP Standard Datentyp TAB512

Anstatt den SAP Standard Datentyp TAB512 für den LIST_OUTPUT Tabellen Parameter zu verwenden, können Sie einen eigenen Z-Datentyp erstellen. <br> Das ist notwendig sofern die Output Länge einer Report-Zeile mehr als 512 Zeichen beträgt. Die maximal mögliche Länge beträgt 1023 Zeichen.
![SAPCust-Report-ListOutput](/img/content/report_list_output_ztag1024png.png){:class="img-responsive"}

{: .box-note }
**Note:** Die Exception LIST_FROM_MEMORY_NOT_FOUND wird geworfen, wenn der Report kein Ergebnis liefert.

***********
#### Weiterführende Links
- [How to import an SAP Transport Request with the Transport Management System STMS](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)
- [Create Function Group](https://help.sap.com/saphelp_ewm94/helpdata/en/d1/801ef5454211d189710000e8322d00/content.htm?no_cache=true)



