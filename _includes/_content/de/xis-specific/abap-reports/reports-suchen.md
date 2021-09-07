
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

Der folgende Abschnitt beschreibt die Anwendung der Report Komponente.


### Einen Report oder eine Transaktion finden
1. Klicken Sie auf den **[Suchen]** Button (Vergrößerungsglas) im Hauptfenster der Report-Komponente. Das Fenster “Report Lookup” öffnet sich.
2. Geben Sie im Feld **Report Name** (1) den Namen des Reports ein, den Sie suchen. Die Verwendung von Wildcards (*) wird unterstützt. 
Alternativ können Sie nach SAP Transaktion Codes suchen, indem Sie die Checkbox TCODE aktivieren.
![Look-Up-Report](/img/content/Look-Up-Report.png){:class="img-responsive"}
3. Klicken Sie auf **[Suchen]** (2) und wählen Sie den Report Ihrer Wahl aus der angezeigten Liste aus (3).
4. Bestätigen Sie die Auswahl mit **[OK]** (4).

### Varianten und Selektionen

1. Wählen Sie eine Variante aus der Dropdown-Liste *Variant* (1).
![Report-Variants-Section](/img/content/Report-Variants-Selection.png){:class="img-responsive"}
2. Wählen Sie aus der Liste unter *Selection Screen* (2) ein Selektionskriterium aus, das Sie anpassen oder dynamisieren möchten.
3. Klicken Sie neben den Selektionen, die Sie bearbeiten möchten auf **[Edit]**. Das Fenster "Edit Selections" öffnet sich.
![Report-Edit-Selections](/img/content/Report-Edit-Selections.png){:class="img-responsive"}
4. Wählen Sie, ob die Selektion in der Extraktion inkludiert oder exkludiert werden soll (3).
5. Wählen Sie einen Operator (*Equal*, *GreaterThan*, etc.) von der Dropdown-Liste *Option* (4). 
6. Geben Sie die Selektion in den *Low* und *High* Feldern ein. Das *High* Feld ist nur aktiv, wenn *between* oder *not between* als Operator ausgewählt wurde.
7. Optional: Klicken Sie auf **[Add Selection]** (5), um weitere Bedingungen hinzuzufügen.
8. Klicken Sie auf **[OK]** (6), um die Selektion zu bestätigen.

{: .box-note }
**Hinweis:** Für detaillierte Informationen zu Varianten und Selektionen, siehe [Varianten und Selektionen](./report-variants-and-selections).

### Spalten definieren

1. Klicken Sie auf **[Automatically detect columns]** um den Report basierend auf der ausgewählten Variante oder Selektion auszuführen und automatisch Spalten zu detektieren.
![Report-automatic-columns](/img/content/Report_new_automatic_columns.png){:class="img-responsive"}
2. Klicken Sie auf **[Load Preview]**, um die Spalten im Vorschaubildschirm anzuzeigen.
3. Prüfen Sie, ob die Spalteneinteilung korrekt ist. Wenn eine automatische Spalteneinteilung nicht möglich ist, müssen Spaltenname, Spaltenbreite und Offset manuell definiert werden, siehe [Spalten manuell definieren](./report-columns-define#spalten-manuell-definieren).

{: .box-note }
**Hinweis:** Für detaillierte Informationen zur automatischen und manuellen Definition von Spalten, siehe [Spalten Definieren](./report-columns-define).

****
#### Weiterführende Links
- [Types of ABAP Reports](https://wiki.scn.sap.com/wiki/display/ABAP/Types+of+Reports)
