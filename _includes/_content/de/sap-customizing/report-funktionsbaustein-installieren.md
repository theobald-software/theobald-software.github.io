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


### Zugriffsbeschränkung auf Einzelne Reports

Standardmäßg gibt es keine Zugriffsbeschränkung für Reports. 
Um den Zugriff auf bestimmte Reports einzuschränken, muss dem Report eine Berechtigungsgruppe zugewiesen werden.
Der Zugriff auf Reports kann dann über das Berechtigungsobjekt S_PROGRAM gewährt werden, siehe [SAP Note 338177](https://launchpad.support.sap.com/#/notes/338177).

{: .box-tip }
**Tipp:** Verwenden Sie den Transaktions Code SM30, um in der Tabelle TPGP oder V_TPGP eine neue Berechtigungsgruppe anzulegen.

#### Zugriff auf Reports beschränken

1. Loggen Sie sich in SAP ein und öffnen Sie über die Transaktion SE38 den ABAP Editor.
2. Geben Sie den Namen des Reports ein, dessen Zugriff beschränkt werden soll und wählen Sie **Attributes** als *Subobjects* aus.
3. Klicken Sie auf **[Change]**. Ein Fenster mit den Programm-Attributen öffnet sich.
4. Weisen Sie unter **Authorization group** eine Berechtigungsgruppe zu.<br>
![report-authorization](/img/content/report-authorization.png){:class="img-responsive"}

Nach Zuweisung einer Berechtigungsgruppe, ist ein Report nicht mehr über Funktionsmodule wie Z_XTRACT_IS_REMOTE_REPORT via **SUBMIT** oder durch den entsprechenden TCODE verfügbar.

#### Zugriff auf Reports gewähren


1. Erstellen Sie eine Benutzerrolle, die Zugriff auf den Report haben soll.
2. Weisen Sie der Benutzerrolle das Berechtigungsobjekt S_PROGRAM zu.
3. Weisen Sie der Benutzerrolle über *P_GROUP* dieselbe Berechtigungsgruppe zu, die auch dem Report zugewiesen ist.
4. Wählen Sie *SUBMIT* als Aktion für *P_ACTION* aus. 
5. Speichern Sie die Benutzerrolle.
6. Weisen Sie die Benutzerrolle Benutzern zu.

{: .box-note}
**Hinweis:** Reports ohne zugewiesen Berechtigungsgruppe sind frei zugänglich.


***********
#### Weiterführende Links
- [How to import an SAP Transport Request with the Transport Management System STMS](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)
- [Create Function Group](https://help.sap.com/saphelp_ewm94/helpdata/de/d1/801ef5454211d189710000e8322d00/content.htm?no_cache=true)
