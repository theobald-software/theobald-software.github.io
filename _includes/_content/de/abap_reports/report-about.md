
Die Report Komponente ermöglicht Datenextraktionen der meisten Standard und benutzerdefineirten ABAP Reports und SAP Transaktionen.<br>
Prinzipiell ist eine Report Extraktion möglich wenn der Report in SAP eine tabellenartige Struktur zurückgibt.

{: .box-note }
**Hinweis:** Die Report Komponente setzt die Installation des benutzerdefinierten Funktionsbausteins `Z_XTRACT_IS_REMOTE_REPORT` in Ihrem SAP-System voraus. Nähere Informationen finden Sie unter [Report Funktionsbaustein installieren](./sap-customizing/report-funktionsbaustein-installieren).

{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um die Report Komponente zu verwenden, muss der Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP verfügbar sein. 
Weitere Informationen finden Sie im Knowledge-Base-Artikel [SAP Zugriffsrechte: Report](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#report).

{: .box-note}
**Hinweis:** Ab Version 1.2 des benutzerdefinierten Funktionsbausteins `Z_XTRACT_IS_REMOTE_REPORT` muss der Zugriff auf Reports explizit erteilt werden, siehe [Berechtigungsobjekte für Z_XTRACT_IS_REMOTE_REPORT](./sap-customizing/report-funktionsbaustein-installieren#berechtigungsobjekte-für-z_xtract_is_remote_report).
