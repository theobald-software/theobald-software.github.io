Die Xtract IS Report Kompomente ist eine SSIS-Datenquelle, mit deren Hilfe Sie bestehende ABAP-Reports ausführen und die Ausgabe innerhalb der SSIS weiter verarbeiten können.

Die Report Komponente ermöglicht Datenextraktionen der meisten Standard und benutzerdefineirten ABAP Reports und SAP Transaktionen. 
Prinzipiell ist eine Report Extraktion möglich wenn der Report in SAP eine tabellenartige Struktur zurückgibt. 
Das ist der Fall für viele klassische Reports und ALV Reports wie RLT10010 (Auswertung der Bewegungen pro Lagertyp) oder RKEB0601 (Einzelposten anzeigen).

{: .box-note }
**Hinweis:** Die Report Komponente setzt die Installation des benutzerdefinierten Funktionsbausteins `Z_XTRACT_IS_REMOTE_REPORT` in Ihrem SAP-System voraus. Nähere Informationen finden Sie unter [Report Funktionsbaustein installieren](./sap-customizing/report-funktionsbaustein-installieren).

![Report](/img/content/Report.png){:class="img-responsive"}


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}