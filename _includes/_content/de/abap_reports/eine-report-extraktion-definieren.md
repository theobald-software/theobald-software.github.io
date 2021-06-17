Der folgende Abschnitt beschreibt die Anwendung der Report Komponente.


### Einen Report oder eine Transaktion finden
1. Klicken Sie auf den **[Suchen]** Button (Vergrößerungsglas) im Hauptfenster der Report-Komponente. Das Fenster “Report Lookup” öffnet sich.
2. Geben Sie im Feld **Report Name** (1) den Namen des Reports ein, den Sie suchen. Die Verwendung von Wildcards (*) wird unterstützt. 
Alternativ können Sie nach SAP Transaktion Codes suchen, indem Sie die Checkbox TCODE aktivieren.
![Look-Up-Report](/img/content/Look-Up-Report.png){:class="img-responsive"}
3. Klicken Sie auf **[Suchen]** (2) und wählen Sie den Report Ihrer Wahl aus der angezeigten Liste aus (3).
4. Bestätigen Sie die Auswahl mit **[OK]** (4).


### Varianten und Selektionen

Die meisten Reports erlauben die Eingabe von Selektionen vor Ausführung der Reports.
Selektionen limitieren die Ausgabe des Reports, sodass nur Daten die der Selektion entsprechen ausgegeben werden.

Eine Variante mit Selektionen kann in SAP im Eingabebildschirm eines ABAP-Reports erstellt werden.
Der Zweck einer Variante ist es, Selektionen in Ihrem Eingabebildschirm zu speichern.
Das minimiert die Eingabe von Selektionen, wenn Sie Reports ausführen.

{: .box-note }
**Hinweis:** Manuelle Selektionen und Varianten können kombiniert werden. Manuelle Selektionen überschreiben Selektionen in Varianten.

![Report-Variants-Section](/img/content/Report-Variants-Selection.png){:class="img-responsive"}
#### Eine Variante wählen
Wählen Sie eine Variante aus der Dropdown-Liste *Variant* (1).
Wenn Sie eine neue Variante in SAP erstellen, nachdem die Report Extraktion in XU erstellt wurde, klicken Sie auf den **[Refresh]** Button neben der Dropdown-Liste, um die neue Variante abzurufen.

{: .box-note }
**Hinweis:** Die Selektionen der Variante werden **nicht** im Abschnitt *Selection Screen* angezeigt. 
Um die Definition der Variante einzusehen, öffnen Sie die Variante in SAP.

#### Selektionen bearbeiten

Dieser Abschnitt bezieht sich auf den Eingabebildschirm von Reports in SAP.
Einige Selektionsfelder haben nur technische Bezeichnungen und keine Beschreibungen.
Um zu verstehen, welche Felder welchen Feldern in SAP entsprechen, prüfen Sie den Eingabebildschirm in SAP. <br>
Klicken Sie auf ein Selektionsfeld und drücken Sie die F1-Taste. Dadurch wird die technische Bezeichnung des Selektionsfelds angezeigt.

{% include _content/de/sap-data-format.md  %}

1. Klicken Sie neben den Selektionen, die Sie bearbeiten möchten auf **[Edit]**. Das Fenster "Edit Selections" öffnet sich.
![Report-Edit-Selections](/img/content/Report-Edit-Selections.png){:class="img-responsive"}
2. Wählen Sie, ob die Selektion in der Extraktion inkludiert oder exkludiert werden soll (3).
3. Wählen Sie einen Operator (*Equal*, *GreaterThan*, etc.) von der Dropdown-Liste *Option* (4). 
4. Geben Sie die Selektion in den *Low* und *High* Feldern ein. Das *High* Feld ist nur aktiv, wenn *between* oder *not between* als Operator ausgewählt wurde.
5. Optional: Klicken Sie auf **[Add Selection]** (5), um weitere Bedingungen hinzuzufügen.
6. Klicken Sie auf **[OK]** (6), um die Selektion zu bestätigen.

{: .box-note }
**Hinweis:** Verwenden Sie das Format der SAP Datenbank wenn Sie Selektionen eingeben. Geben Sie führende Nullen für Dokumentnummern ein und geben Sie Daten im Format yyyymmdd an.
	
{: .box-tip }
**Tipp:** Wenn Sie mehrere Selektionsparameter verwenden, erstellen Sie dafür eine Variante in SAP. Mit der Variante müssen Sie die Parameter nicht mehrmals manuell eingeben. 


### Spalten definieren
Die Spalten eines Reports werden definiert durch ihre Namen, ihre Breite und ihren Offset. 
Standardmäßig haben alle Spalten den Datentyp *string*.
Um die Spalten eines Reports zu ermitteln, muss der Report ausgeführt werden. Die Spalten werden auf Basis der Ausgabe eingeteilt.

    
{: .box-tip }
**Tipp:** Wir empfehlen für die Spalteneinteilung eine Selektion oder Variante zu verwenden, die nur wenige Daten zurückgibt. 

Einige klassische ABAP-Reports werden so erstellt, dass die Spalten durch das Trennzeichen '\|' separiert sind.
In diesem Fall kann die Report-Komponente die Spalten automatisch ermitteln.
Die automatische Spalteneinteilung funktioniert auch für die meisten ALV-Reports.<br>
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
Wenn eine automatische Spalteneinteilung nicht möglich ist, müssen Spaltenname, Spaltenbreite und Offset manuell definiert werden.

Man definiert die Spalten eines Reports wie folgt:

1. Stellen Sie sicher, dass noch keine Spalten definiert sind. Gehen Sie in den Abschnitt *Columns* und löschen Sie alle Spalten, indem Sie auf das Papierkorb-Symbol klicken.
![Report-delete-columns](/img/content/Report_new_delete_column.png){:class="img-responsive"}
2. Klicken Sie auf **[Load Preview]**. Der Report wird basierend auf der ausgewählten Variante oder Selektion ausgeführt. Die Ausgabe des Reports wird im Abschnitt *Load Preview* angezeigt.
3. Drücken Sie zu Beginn der Spalte im *Load Preview* Abschnitt die linke Maustaste und lassen Sie die Taste gedrückt.  
4. Bewegen Sie den Mauszeiger mit noch immer gedrückten linken Maustaste nach rechts, um die Breite der Spalte zu bestimmen.
5. Lassen Sie die Maustaste am Ende der Spalte gehen. Die Spalte ist durch einen grünen Hintergrund markiert. Im Abschnitt *Columns* wird ein neuer Eintrag hinzugefügt. 
6. Um Spaltenname, Spaltenbreite und Offset zu bearbeiten, klicken Sie auf die jeweiligen Felder im Abschnitt *Columns* und geben Sie dort neue Werte ein.
7. Wiederholen Sie die Schritte 3 bis 6, bis alle Spalten definiert sind.


{: .box-note }
**Hinweis:** Sobald eine Spalte definiert ist und grün hinterlegt wurde, können Spaltenbreite und Offset nicht über den Graphik Editor geändert werden. Bearbeiten Sie die Spalten im Abschnitt *Columns*.

Beispiel:
![Report-manual-columns](/img/content/Report_new_manual.png){:class="img-responsive"}

#### Einstellungen für Zeilen
**Skip rows from top**<br>
Geben Sie die Anzahl der Zeilen ein, die Sie zu Beginn des Reports überspringen möchten. 
Einige Reports zeigen im Dateikopf Metainformationen an. Hiermit können Sie die Metainformationen überspringen.

**Skip rows from bottom**<br>
Ähnlich wie *skip rows from top*. 
Geben Sie die Anzahl der Zeilen an, die Sie zum Ende des Reports überspringen möchten.


**Report rows per data row**<br>
Verwenden Sie diese Einstellung für ABAP-Reports, die zwei oder mehr "physische" Zeilen als einzelne "semantische" Datenzeile zurückgeben.
Hiermit werden aus physischen Zeilen einzelne Datenzeilen. <br>
Beispiel: Report RIEQUI20 

![Report_new_rows_per_data_row](/img/content/Report_new_rows_per_data_row.png){:class="img-responsive"}

**Report width**<br>
Verwenden Sie diese Einstellung in Kombination mit **Report rows per data row**. 
Hier definieren Sie die Länge jeder physischen Zeile.

#### Weiterführende Links
- [Types of ABAP Reports](https://wiki.scn.sap.com/wiki/display/ABAP/Types+of+Reports)
