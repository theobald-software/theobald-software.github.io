Klicken Sie im Hauptfenster der Komponente auf **Extraction Settings**. <br>
Das Fenster "Cube Settings" öffnet sich.

![XU_BWCube_Settings](/img/content/XU_BWCube_Settings.png){:class="img-responsive"}

### Extraction Settings

**Package Size**<br> 
Definiert wie viele Datensätze in einem Datenpaket von SAP geholt werden.
Werte zwischen 10.000 und 100.000 sind bei großen Datenmengen sinnvoll.
Wenn der Wert auf 0 gesetzt wird, wird die gesamte Ergebnismenge auf einmal abgerufen.
Diese Option wird im BICS Modus nicht unterstützt. 

{: .box-tip }
**Empfehlung**: Definieren Sie immer eine Paketgröße.

**Row Limit** <br>
Definiert die maximale Anzahl von Zeilen in der Ergebnismenge.
Wenn der Wert auf 0 gesetzt wird, wird die komplette Ergebnismenge abgerufen.
Diese Option wird im BICS Modus nicht unterstützt.<br>
**Row Limit** kann verwendet werden, um einen Test mit einer kleinen Datenmenge durchzuführen, indem Sie z.B. 1000 (nicht 0) als Zeilenlimit eintragen.

**Formatted Values**<br>
Wenn diese Option aktiv ist, werden die Werte der Kennzahlen so ausgegeben, wie im Query-Designer definiert (z.B. Skalierungsfaktor und Dezimalstellen).

**Only Structure** <br>
Aktivieren Sie **Only Structure**, wenn Ihre BW Cube Extraktion in einer veralteten Version der BW Cube Komponente erstellt wurde.
Der Metadatenabruf hat sich geändert. 
Das betrifft insbesondere BEx Queries, die zwei Strukturen enthalten (Merkmals- und Kennzahlenstruktur).<br>
Diese Option kann nur in dem [Look Up](./eine-bw-cube-quelle-definieren#einen-bw-cube-oder-ein-query-suchen) Fenster der Komponente aktiviert und deaktiviert werden.

### Automatic Slicing Dimension

Diese Option legt eine Dimension für ein automatisches Slicing fest. 
Unter Slicing versteht man das Auswählen einer Teilmenge eines Cubes durch Auswahl eines einzelnen Wertes für eine seiner Dimensionen. 
Automatisches Slicing bedeutet, dass für jeden Einzelwert der gewählten Slicing-Dimension (Merkmal) eine Schleife ausgeführt wird, um das Ergebnis aus dem BW zu extrahieren. 

**Automatic Slicing Dimension** ermöglicht die Extraktion einer großen Datenmenge (Millionen von Sätzen) aus dem BW.

### Dimension on Columns

Die folgende Extraktionseinstellung ist nur für MDX Extraktionen verfügbar.
Sie wird angezeigt, nachdem die Metadaten einer MDX Extraktion abgerufen wurde.<br>
**Dimension on Columns** erlaubt es, eine andere Dimension/Struktur als die Messwerte (Key Figures) für Spalten auszuwählen.
Dadurch werden die Messwerte mit der ausgewählten Dimension vertauscht: die Messwerte werden auf die Zeilen und die ausgewählte Dimension auf die Spalten verteilt.

Berücksichtigen Sie Folgendes:
- Ihre BEx Query muss Dimensionen beinhalten.
- Dimensionsfilter auf Spalten werden nicht unterstützt.
- Die Auswahl von Eigenschaften für die gewählte Dimension wird nicht unterstützt.
- Einheiten als Spalten werden nur unterstützt, wenn *key figures* für die Spalten ausgewählt ist.
- Bis zu 1000 Elemente werden geladen, sobald Sie die Änderungen mit **[OK]** bestätigen. Diese Elemente werden zu Spaltennamen.

{: .box-tip }
**Empfehlung**: Wir empfehlen nur Strukturen auf Spalten anzuwenden.

Beispiel:
- Ausgabe für **Dimension on Columns** = *Key Figures*<br>
![BWCube-dimension-keyfigures](/img/content/Cube-keyfigures.png){:class="img-responsive"}
- Ausgabe für **Dimension on Columns** = *Cal. Year/Quarter [0CALQUARTER]*<br>
![BWCube-dimension-calquarter](/img/content/Cube-calyear.png){:class="img-responsive"}


### Experimental

Die folgenden Einstellungen sind nur für BICS Extraktionen verfügbar.
Sie werden angezeigt, nachdem die Metadaten einer BICS Extraktion abgerufen wurden.

![XU_BWCube_Settings](/img/content/bwcube-bics-fast-mode.png){:class="img-responsive"}

**BICS Fast Mode**<br>
Wenn diese Checkbox aktiv ist, wird das interne Verhalten der BICS-Komponente gewechselt.
Anstatt RFC-Funktionsdefinitionen bei jedem Aufruf aus SAP zu laden, verwendet der BICS Fast Mode lokal abgelegte BAPI Definitionen.
Dieses Verhalten kann die Performance der BICS-Komponente erhöhen.

**Create BICS Compatibility Report**<br>
Weil sich der BICS Modus noch in der Beta-Phase befindet, sind Fehler beim Ausführen des BICS Modus nicht ausgeschlossen.
Klicken Sie auf **[Create BICS Compatibility Report]**, um eine Testreihe auszuführen, die uns hilft die Ursache des Fehlers zu finden und den Fehler zu beheben.<br>
Die Ergebnisse der Testreihe werden in einer .zip-Datei zusammengefasst.
Wenn Sie mehrere SAP-Systeme verwenden, führen Sie diese Testreihe auf jeder Ihrer SAP-Quellen aus. <br>
Senden Sie die resultierende .zip-Dateien an den [Theobald Support](https://support.theobald-software.com).