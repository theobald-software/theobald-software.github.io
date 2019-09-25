Über den *Extraction Settings*-Link im Editor öffnet sich das Einstellungsfenster.

![XU_BWCube_Settings](/img/content/XU_BWCube_Settings.jpg){:class="img-responsive"}

**Do not treat 'Axis has no rows' as Error**<br>
Definiert, ob ein leeres Ergebnis (keine Daten selektiert) einen Fehler auslöst oder nicht.

**Use Description for Column (obsolete)**<br>
Definiert, dass der Name der Pipeline-Elemente aus der Beschreibung ergibt und nicht aus deren technischen Namen.<br>
Diese Eigenschaft ist obsolete. Nutzen Sie dazu die Eigenschaft Column Name Style in den Destination Settings.

**Use Formatted Values**<br>
Definiert, dass die Werte der Kennzahlen so ausgegeben werden, wie im Query-Designer definiert (z.B. Skalierungsfaktor und Dezimalstellen).

**Use Real Data for Preview**<br>
Definiert, dass reelle Extraktionsdaten für die Vorschau genutzt werden.

**Measure Unit in Result set**<br>
zeigt die Einheiten der Kennzahlen an.

**Package Size**<br> 
Kann auf Werte größer 0 gesetzt werden, um das Query-Ergebnis nicht auf einmal, sondern in Paketen mit dieser Größe zu holen. Bei Queries mit mehr als 50.000 Zellen (Anzahl der Zeilen multipliziert mit der Anzahl der Spalten) macht es Sinn, diese Einstellung auf größer 0 zu setzen, und so die Parkettierung einzuschalten.

**Automatic Slicing Dimension**<br>
Ermöglicht die Auswahl einer Dimension für ein automatisches Slicing. <br>
Slicing steht für das Ausschneiden von Scheiben aus dem Datenwürfel durch die Selektion eines einzelnen Wertes einer Dimension. <br>
Beim automatischen Slicing wird über jeden einzelnen Wert (Ausprägung) der gewählten Slicing-Dimension (Merkmal) iteriert und für jeden dieser Werte das Abfrageergebnis aus BW extrahiert. <br>
Diese Option ermöglicht die Extraktion größerer Datenmengen (mehrere Millionen Datensätze) aus BW, welche bisher aufgrund von BW-seitigen Fehlern (wie Speicherüberlauf und Timeout) nicht möglich war.<br>
Wählen Sie eine geeignete Dimension fürs Slicing, bei größeren Datenmengen selektieren Sie eine Dimension mit einer granularen Ausprägung (z.B. Periode oder Woche). 

**Legacy metadata retrieval**<br>
Betrifft BW Cube Extraktionen, die mit Xtract Kernel Versionen 1.8.49 oder früher erstellt wurden. Sollten Sie die Metadaten der Extraktion aktualisieren, sollten Sie vorher dieses Feld anhaken. Das betrifft insbesondere BEx Queries, die zwei Strukturen enthalten (Merkmals- und Kennzahlenstruktur), da sich der Metadatenabruf seit oben genannter Version geändert hat.

**Use BEX Extraction**<br>
Nutzen Sie diese Option für BEx Queries, wenn die Query nicht oder eingeschränkt (z.B. mit einer Struktur in den Zeilen) über die MDX-Schnittstellen extrahiert werden kann.
Dabei wird die BEx-Query mit demselben Output (Struktur und Daten) wie z.B. im BEx Analyzer geliefert.<br>
Es besteht nicht die Möglichkeit, die Selektion der Dimensionen und Kennzahlen zu ändern.

- **Fill Emply Cells**
    Füllt die leeren Felder der Dimensionen.

- **Eliminate Result Lines**
    Eliminiert die Ergebniszeilen (z.B. die Summe).

**Use MDX Extraction**<br>
Die option erlaubt die direkte Eingabe eines MDX-Ausdrucks. <br>
Danach klicken Sie auf Execute MDX and refresh statement, um die Metadaten aus dem BW-System zu lesen.<br>
Variablen können sowohl für den ganzen MDX-Befehl als auch innerhalb des MDX-Befehls verwendet werden.


**Use new OLAP BAPIs:**<br>
Sofern die neuen OLAP BAPIs auf dem BW-System vorhanden sind, werden sie verwendet.

