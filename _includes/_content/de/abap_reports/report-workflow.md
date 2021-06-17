### Über die Report Komponente

Die Report Komponente ermöglicht Datenextraktionen der meisten Standard und benutzerdefineirten ABAP Reports und SAP Transaktionen.
Prinzipiell ist eine Report Extraktion möglich wenn der Report in SAP eine tabellenartige Struktur zurückgibt.
Das ist der Fall für viele klassische Reports und ALV Reports wie RLT10010 (Auswertung der Bewegungen pro Lagertyp) oder RKEB0601 (Einzelposten anzeigen).


{: .box-note }
**Hinweis:** Die Report Komponente setzt die Installation des benutzerdefinierten Funktionsbausteins `Z_XTRACT_IS_REMOTE_REPORT` in Ihrem SAP-System voraus. Nähere Informationen finden Sie unter [Report Funktionsbaustein installieren](./sap-customizing/report-funktionsbaustein-installieren).


### Allgemeiner Workflow für eine Report Extraktion

Die folgenden Schritte beschreiben den einfachsten Workflow, um eine Report Extraktion zu erstellen.
Weitere Optimierungen können notwendig sein.

Wenn Sie eine neue Report-Extraktion anlegen, führen Sie den Report zunächst in SAP aus.
Kennen Sie die Selektionen und Varianten, wenn Sie den Report ausführen.
Formatieren Sie das Layout oder die Ausgabe des Reports so, dass der Report eine tabellenartige Struktur zurückgibt.

1. Suchen Sie in der Report Komponente den ABAP Report oder die Transaktion, die Sie extrahieren möchten, siehe [Einen Report oder eine Transaktion finden](./abap-reports/report-extraction-define#einen-report-oder-eine-transaktion-finden).
2. Wählen Sie eine Variante aus oder geben Sie manuell Selektionen ein, siehe [Varianten und Selektionen](./abap-reports/report-extraction-define#varianten-und-selektionen).
3. Ermitteln Sie die Spalten des Reports automatisch. Spaltenname, Spaltenbreite und Offset von detektierten Spalten werden in dem Abschnitt *columns* aufgelistet, siehe [Spalten automatisch definieren](./abap-reports/report-extraction-define#spalten-automatisch-definieren).
4. Falls Schritt 3 ein einzelnes Feld zurückgibt, können die Spalten des Reports nicht automatisch ermittelt werden. Definieren Sie die Spalten manuell, siehe [Spalten manuell definieren](./abap-reports/report-extraction-define#spalten-manuell-definieren).
