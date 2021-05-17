---
ref: xu-abap-reports-02
layout: page
title: Eine Report-Extraktion definieren
description: Eine Report-Extraktion definieren
product: xtract-for-alteryx
parent: reports
permalink: /:collection/:path
weight: 2
lang: de_DE
---

Der folgende Abschnitt beschreibt die Anwendung der Report Komponente in Xtract for Alteryx 

### Allgemeiner Workflow für eine Report Extraktion

Die folgenden Schritte beschreiben den einfachsten Workflow, um eine Report Extraktion zu erstellen.
Weitere Optimierungen können notwendig sein.

Wenn Sie eine neue Report Extraktion anlegen, führen Sie den Report zunächst in SAP aus.
Kennen Sie die Selektionen und Varianten wenn Sie den Report ausführen.
Formatieren Sie das Layout oder die Ausgabe des Reports so, dass der Report eine tabellenartige Struktur zurückgibt.

1. Suchen Sie in der Report Komponente den ABAP Report oder die Transaktion, die Sie extrahieren möchten, siehe [Einen Report oder eine Transaktion finden](#einen-report-oder-eine-transaktion-finden).
2. Wählen Sie eine Variante aus oder geben Sie manuell Selektionen ein, siehe [Varianten und Selektionen](#varianten-und-selektionen).
3. Finden Sie automatisch die Spalten des Reports. Spaltenname, Spaltenbreite und Offset von detektierten Spalten werden in dem Abschnitt *columns* aufgelistet, siehe [Spalten automatisch definieren](#spalten-automatisch-definieren).
4. Falls Schritt 3 ein einzelnes Feld zurückgibt, können die Spalten des Reports nicht automatisch ermittelt werden. Definieren Sie die Spalten manuell, siehe [Spalten manuell definieren](#spalten-manuell-definieren).


### Einen Report oder eine Transaktion finden
1. Clicken Sie auf den **[Suchen]** Button (Vergrößerungsglas) im Hauptfenster der Report Komponente. Das Fenster “Report Lookup” öffnet sich.
2. Geben Sie im Feld **Report Name** (1) den Namen des Reports ein, den Sie suchen. Die Verwendung von Wildcards (*) wird unterstützt. 
Alternativ können Sie nach SAP Transaktion Codes suchen, indem Sie die Checkbox TCODE aktivieren.
![Look-Up-Report](/img/content/Look-Up-Report.png){:class="img-responsive"}
3. Klicken Sie auf **[Suchen]** (2) und wählen Sie den Report Ihrer Wahl aus der angezeigten Liste aus (3).
4. Klicken Sie auf **[OK]** (4), um die Auswahl zu Bestätigen.


### Varianten und Selektionen

Die meisten Reports erlauben die Eingabe von Selektionen vor Ausführung der Reports.
Selektionen limitieren die Ausgabe des Reports so, dass nur Daten die der Selektion entsprechen extrahiert werden.

Eine Variante mit Selektionen kann in SAP im Eingabebildschirm eines ABAP Reports erstellt werden.
Der Zweck einer Variante ist es, Selektionen in Ihrem Eingabebildschirm zu speichern.
Das minimiert die Eingabe von Selektionen, wenn Sie Reports ausführen.

{: .box-note }
**Hinweis:** Manuelle Selektionen und Varianten können kombiniert werden. Manuelle Selektionen überschreiben Selektionen in Varianten.

![Report-Variants-Section](/img/content/Report-Variants-Selection.png){:class="img-responsive"}
#### Eine Variante wählen
Wählen Sie eine Variante aus der Dropdown-Liste *Variant* (1).
Wenn Sie eine neue Variante in SAP erstellen nachdem die Report Extraktion in XU erstellt wurde, klicken Sie auf den **[Refresh]** Button neben der Dropdown-Liste, um die neue Variante abzurufen.

{: .box-note }
**Hinweis:** Die Selektionen der Variante werden **nicht** im Abschnitt *Selection Screen* angezeigt. 
Um die Definition einer Variante einzusehen, öffnen Sie die Variante in SAP.

#### Selektionen bearbeiten

Dieser Abschnitt bezieht sich auf den Eingabebildschirm von Reports in SAP.
Einige Selektionsfelder haben nur technische Bezeichnungen und keine Beschreibungen.
Um zu verstehen, welche Felder welchen Feldern in SAP entsprechen, prüfen Sie den Eingabebildschirm in SAP.
Klicken Sie auf ein Selektionsfeld und drücken Sie die F1-Taste. Dadurch wird die technische Bezeichnung des Selektionsfelds angezeigt.

1. Klicken Sie neben den Selektionen, die Sie bearbeiten möchten auf **[Edit]**. Das Fenster "Edit Selection" öffnet sich.
![Report-Edit-Selections](/img/content/Report-Edit-Selections.png){:class="img-responsive"}
2. Wählen Sie, ob die Selektion in der Extraktion inkludiert oder exkludiert werden soll (3).
3. Wählen Sie einen Operator (*Equal*, *GreaterThan*, etc.) von der Dropdown-Liste *Option* (4). 
4. Geben Sie die Selektion in dem *Low* und *High* Feldern ein. Das *High* Feld ist für eine Eingabe aktiv, wenn *between* oder *not between* als Operator ausgewählt wurde.
5. Optional: Klicken Sie auf **[Add Selection]** (5), um weitere Bedingungen hinzuzufügen.
6. Klicken Sie auf **[OK]** (6), um die Selektion zu bestätigen.

{: .box-note }
**Hinweis:** Verwenden Sie das Format der SAP Datenbank wenn Sie Selektionen eingeben. Geben Sie führende Nullen für Dokumentnummern ein und geben Sie Daten im Format yyyymmdd an.
	
{: .box-tip }
**Tipp:** Wenn Sie mehrere Selektionsparameter verwenden, erstellen Sie eine Variante in SAP, um die Parameter nicht mehrmals manuell eingeben zu müssen. 


### Spalten definieren
Die Spalten eines Reports werden definiert durch ihre Namen, ihren Offset und ihrer Länge. 
Standardmäßig haben alle Spalten den Datentyp *string*.
Um die Spalten eines Reports zu ermitteln, muss der Report ausgeführt werden. Die Spalten werden der Ausgabe entsprechend eingeteilt.

    
{: .box-tip }
**Tipp:** Wir empfehlen für die Spalteneinteilung eine Selektion oder Variante zu verwenden, die nur wenige Daten zurückgeben. 

Einige klassische ABAP Reports werden so erstellt, dass die Spalten durch das Trennzeichen '\|' separiert sind.
In diesem Fall kann die Report Komponente die Spalten automatisch definieren.
Die automatische Spalteneinteilung funktioniert auch für die meisten ALV Reports.<br>
Beispiel:
![Report-delimiters](/img/content/Report_new_delimiters.png){:class="img-responsive"}

Bei Reports, die das Trennzeichen '\|' nicht verwenden, muss eine manuelle Spalteneinteilung durchgeführt werden.<br>
Beispiel:
![Report-no-delimiters](/img/content/Report_new_no_delimiters.png){:class="img-responsive"}


### Spalten automatisch definieren
**Automatically detect columns** <br>
Indem Sie auf **[Automatically detect columns]** klicken, wird der Report basierend auf der ausgewählten Variante oder Selektion ausgeführt.
Wenn die Spalten automatisch detektiert werden können, werden Spaltenname, Spaltenbreite und Offset im Abschnitt *Columns* angezeigt.

![Report-automatic-columns](/img/content/Report_new_automatic_columns.png){:class="img-responsive"}


**Dynamic column width and offset**<br>
Sie können diese Einstellung verwenden, wenn die Spalteneinteilung automatisch durchgeführt wird, siehe *Automatically Detect Columns*.
Wenn *Dynamic column width and offset* aktiv ist, können die Spaltenbreite und der Offset der Spalten zur Laufzeit dynamisch angepasst werden.

### Spalten manuell definieren
Wenn eine automatische SPalteneinteilung nicht möglich ist, müssen Spaltenname, Spaltenbreite und Offset manuell defineirt werden.

Man definiert die Spalten eines Reports wie folgt:

1. Stellen Sie sicher, dass noch keine Spalten definiert sind. Gehen Sie in den Abschnitt *Columns* und löschen Sie alle Spalten, indem Sie auf das Papierkorb-Symbol klicken.
![Report-delete-columns](/img/content/Report_new_delete_column.png){:class="img-responsive"}
2. Klicken Sie auf **[Load Preview]**. Der Report wird basierend auf der ausgewählten Variante oder Selektion ausgeführt. Die Ausgabe des Reports wird im Abschnitt *Load Preview* angezeigt.
3. Drücken Sie am Beginn der Spalte im *Load Preview* Abschnitt die linke Maustaste und lassen Sie die Taste gedrückt.  
4. Bewegen Sie den Mauszeiger mit der linken Maustaste nachwievor gedrückt nach rechts, um die Breite der Spalte auszuwählen.
5. Lassen Sie die Maustaste gehen. Die Spalte ist mit einem grünen Hintergrund markiert. Im Abschnitt *Columns* wird ein neuer Eintrag hinzugefügt. 
6. Um Spaltenname, Spaltenbreite und Offset zu bearbeiten, klicken Sie auf die jeweiligen Felder im Abschnitt *Columns* und geben Sie dort neue Werte ein.
7. Wiederholen Sie die Schritte 3 bis 6, bis alle Spalten definiert sind.


{: .box-note }
**Hinweis:** Sobald eine Spalte definiert und grün hinterlegt wurde, können Spaltenbreite und Offset nicht über den Graphikeditor geändert werden. Bearbeiten Sie die Spalten im Abschnitt *Columns*.

Beispiel:
![Report-manual-columns](/img/content/Report_new_manual.png){:class="img-responsive"}


#### Einstellungen für Zeilen
**Skip rows from top**<br>
Geben Sie die Anzahl der Zeilen ein, die Sie zu Beginn des Reports überspringen möchten. 
Einige Reports zeigen im 
Enter the number of rows you want to skip at the beginning of the report.
Some reports display meta information in the header section of the report, before the actual report body. 
This setting allows skipping the meta information. 

**Skip rows from bottom**<br>
Similar to *skip rows from top*. Enter the number of rows you want to skip in the footer section of the report.


**Report rows per data row**<br>
Use this setting for ABAP reports, that return two or more "physical" rows to display a single "semantic" data row. This concatenates the physical rows into a single data row. <br>
Example: Report RIEQUI20 

![Report_new_rows_per_data_row](/img/content/Report_new_rows_per_data_row.png){:class="img-responsive"}

**Report width**<br>
Use this setting in combination with **Report rows per data row**. Defines the length of each physical row.


#### Weiterführende Links
- [Types of ABAP Reports](https://wiki.scn.sap.com/wiki/display/ABAP/Types+of+Reports)


<!---
### Further reading..

Most reports can be extracted in dialog mode. Some reports have to be extracted in background mode.
Reports that may cause issues:
- Reports w/o column separator '|', such as RM07MBST
- Reports with a '|' in the actual data.
- Reports, that split a line over multiple lines
- Interactive Reports that are meant for reporting purposes and offer navigational features.
- Reports created via report painter

{: .box-tip }
**Tip:** Instead of hard coding manual selections or variants, use parameters. This allows setting selections and variants at runtime.

--->