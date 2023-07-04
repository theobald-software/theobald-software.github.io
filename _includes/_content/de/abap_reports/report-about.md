
Die Report Komponente ermöglicht Datenextraktionen der meisten Standard und benutzerdefinierten ABAP Reports und SAP Transaktionen.<br>
Prinzipiell ist eine Report Extraktion möglich wenn der Report in SAP eine tabellenartige Struktur zurückgibt.

{: .box-note }
**Hinweis:** Die Report Komponente setzt die Installation des benutzerdefinierten Funktionsbausteins `Z_XTRACT_IS_REMOTE_REPORT` in Ihrem SAP-System voraus. Ab `Z_XTRACT_IS_REMOTE_REPORT` Version 1.2 muss der Zugriff auf Reports explizit erteilt werden. Nähere Informationen finden Sie unter [Report Funktionsbaustein installieren](./sap-customizing/report-funktionsbaustein-installieren).

{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um die Report Komponente zu verwenden, muss der Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP verfügbar sein. 
Weitere Informationen finden Sie im Knowledge-Base-Artikel [SAP Zugriffsrechte: Report](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#report).

