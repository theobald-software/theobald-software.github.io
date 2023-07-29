Die Extraktion von Reports setzt die Installation eines Z-Funktionsbausteins auf Ihrem SAP-System voraus.<br>
Falls es Ihnen nicht möglich ist, den Z-Funktionsbaustein selbst zu installieren, wenden Sie sich an Ihre SAP-Basis-Abteilung. 

{: .box-note}
**Hinweis:** Ab Version 1.2 des benutzerdefinierten Funktionsbausteins `Z_XTRACT_IS_REMOTE_REPORT` muss der Zugriff auf Reports explizit erteilt werden, siehe [Berechtigungsobjekte für Z_XTRACT_IS_REMOTE_REPORT](#berechtigungsobjekte-für-z_xtract_is_remote_report).


### Installation von Z_XTRACT_IS_REMOTE_REPORT
Installieren Sie den Funktionsbaustein über den mitgelieferten Transportauftrag *Z_XTRACT_IS_REMOTE_REPORT-transport.zip*. <br> 
Der Transportauftrag befindet sich in folgendem Installationsverzeichnis: `C:\Program Files\[XtractProduct]\ABAP\Report\Z_XTRACT_IS_REMOTE_REPORT-transport.zip`.

### Berechtigungsobjekte für Z_XTRACT_IS_REMOTE_REPORT

Ab Z_XTRACT_IS_REMOTE_REPORT Version 1.2 muss der Zugriff auf Reports explizit erteilt werden<br>
Es gibt 2 Möglichkeiten, um zu verifizieren, ob ein SAP Benutzer einen Report extrahieren darf:
- Verwenden Sie Berechtigungsgruppen, siehe [Authorizing Access to Reports via Authorization Groups](https://kb.theobald-software.com/sap/authorizing-access-to-specific-reports){:target="_blank"}.
- Verwenden Sie das benutzerdefinierte Berechtigungsobjekt Z_TS_PROG. 

***********
#### Weiterführende Links
- [How to import an SAP Transport Request with the Transport Management System STMS](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)
- [Authorizing Access to Specific Reports](https://kb.theobald-software.com/sap/authorizing-access-to-specific-reports)
- [Create Function Group](https://help.sap.com/saphelp_ewm94/helpdata/de/d1/801ef5454211d189710000e8322d00/content.htm?no_cache=true)
