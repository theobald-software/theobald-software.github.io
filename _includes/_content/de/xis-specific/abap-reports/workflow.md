
### Allgemeiner Workflow für eine Report Extraktion

Die folgenden Schritte beschreiben den einfachsten Workflow, um eine Report Extraktion zu erstellen.
Weitere Optimierungen können notwendig sein.

Wenn Sie eine neue Report-Extraktion anlegen, führen Sie den Report zunächst in SAP aus.
Kennen Sie die Selektionen und Varianten, wenn Sie den Report ausführen.
Formatieren Sie das Layout oder die Ausgabe des Reports so, dass der Report eine tabellenartige Struktur zurückgibt.

1. Suchen Sie in der Report Komponente den ABAP Report oder die Transaktion, die Sie extrahieren möchten, siehe [Einen Report oder eine Transaktion finden](#einen-report-oder-eine-transaktion-finden).
2. Wählen Sie eine Variante aus oder geben Sie manuell Selektionen ein, siehe [Varianten und Selektionen](./report-variants-and-selections).
3. Ermitteln Sie die Spalten des Reports automatisch. Spaltenname, Spaltenbreite und Offset von detektierten Spalten werden in dem Abschnitt *columns* aufgelistet, siehe [Spalten automatisch definieren](./report-columns-define#spalten-automatisch-definieren).
4. Falls Schritt 3 ein einzelnes Feld zurückgibt, können die Spalten des Reports nicht automatisch ermittelt werden. Definieren Sie die Spalten manuell, siehe [Spalten manuell definieren](./report-columns-define#spalten-manuell-definieren).
