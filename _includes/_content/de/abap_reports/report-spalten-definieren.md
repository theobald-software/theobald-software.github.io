Die Spalten eines Reports werden definiert durch ihre Namen, ihre Breite und ihren Offset. 
Standardmäßig haben alle Spalten den Datentyp *string*.
Um die Spalten eines Reports zu ermitteln, muss der Report ausgeführt werden. Die Spalten werden auf Basis der Ausgabe eingeteilt.

    
{: .box-tip }
**Tipp:** Wir empfehlen für die Spalteneinteilung eine Selektion oder Variante zu verwenden, die nur wenige Daten zurückgibt. 

- Einige klassische ABAP-Reports werden so erstellt, dass die Spalten durch das Trennzeichen '\|' separiert sind.
In diesem Fall kann die Report-Komponente die Spalten automatisch ermitteln.
Die automatische Spalteneinteilung funktioniert auch für die meisten ALV-Reports.<br>
Beispiel:<br>
![Report-delimiters](/img/content/Report_new_delimiters.png){:class="img-responsive"}
- Bei Reports, die das Trennzeichen '\|' nicht verwenden, muss eine manuelle Spalteneinteilung durchgeführt werden.<br>
Beispiel:<br>
![Report-no-delimiters](/img/content/Report_new_no_delimiters.png){:class="img-responsive"}


### Spalten automatisch definieren
**Automatically detect columns** <br>
Indem Sie auf **[Automatically detect columns]** klicken, wird der Report basierend auf der ausgewählten Variante oder Selektion ausgeführt.
Wenn die Spalten automatisch detektiert werden können, werden Spaltenname, Spaltenbreite und Offset im Abschnitt *Columns* angezeigt.

![Report-automatic-columns](/img/content/Report_new_automatic_columns.png){:class="img-responsive"}

**Dynamic column width and offset**<br>
Wenn diese Option aktiv ist, werden die Spaltenbreite und der Offset der Spalten zur Laufzeit dynamisch angepasst.
Das kann notwendig sein, wenn ein Report dynamische Spaltenbreiten hat.


### Spalten manuell definieren
Wenn eine automatische Spalteneinteilung nicht möglich ist, müssen Spaltenname, Spaltenbreite und Offset manuell definiert werden.

Man definiert die Spalten eines Reports wie folgt:

1. Stellen Sie sicher, dass noch keine Spalten definiert sind. Gehen Sie in den Abschnitt *Columns* und löschen Sie alle Spalten, indem Sie auf das ![trashbin](/img/content/icons/trashbin.png) Symbol klicken.
![Report-delete-columns](/img/content/Report_new_delete_column.png){:class="img-responsive"}
2. Klicken Sie auf **[Load Preview]**. Der Report wird basierend auf der ausgewählten Variante oder Selektion ausgeführt. Die Ausgabe des Reports wird im Abschnitt *Load Preview* angezeigt.
3. Drücken Sie zu Beginn der Spalte im *Load Preview* Abschnitt die linke Maustaste und lassen Sie die Taste gedrückt.  
4. Bewegen Sie den Mauszeiger mit noch immer gedrückten linken Maustaste nach rechts, um die Breite der Spalte zu bestimmen.
5. Lassen Sie die Maustaste am Ende der Spalte gehen. Die Spalte ist durch einen grünen Hintergrund markiert. Im Abschnitt *Columns* wird ein neuer Eintrag hinzugefügt.  <br>
![Report-Columns](/img/content/report-column.gif){:class="img-responsive" style="border:1px solid black;"}
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
