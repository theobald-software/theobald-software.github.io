### Extraction Settings - Extraktionseinstellungen

Klicken Sie im Hauptfenster der Komponente auf **Extraction Settings**. <br>
Das Fenster "Cube Settings" öffnet sich.

![XU_BWCube_Settings](/img/content/XU_BWCube_Settings.png){:class="img-responsive"}

#### Extraction Settings
- **Package Size:**<br> 
Definiert wie viele Datensätze in einem Datenpaket von SAP geholt werden.
Werte zwischen 10.000 und 100.000 sind bei großen Datenmengen sinnvoll.
Wenn der Wert auf 0 gesetzt wird, wird die gesamte Ergebnismenge auf einmal abgerufen.
Diese Option wird im BICS Modus nicht unterstützt. 
- **Row Limit:** <br>
Definiert die maximale Anzahl von Zeilen in der Ergebnismenge.
Wenn der Wert auf 0 gesetzt wird, wird die komplette Ergebnismenge abgerufen.
Diese Option wird im BICS Modus nicht unterstützt.<br>
**Row Limit** kann verwendet werden, um einen Test mit einer kleinen Datenmenge durchzuführen, indem Sie z.B. 1000 (nicht 0) als Zeilenlimit eintragen.
- **Formatted Values**<br>
Wenn diese Option aktiv ist, werden die Werte der Kennzahlen so ausgegeben, wie im Query-Designer definiert (z.B. Skalierungsfaktor und Dezimalstellen).
- **Only Structure** <br>
Aktivieren Sie **Only Structure**, wenn Ihre BW Cube Extraktion in einer veralteten Version der BW Cube Komponente erstellt wurde.
Der Metadatenabruf hat sich geändert. 
Das betrifft insbesondere BEx Queries, die zwei Strukturen enthalten (Merkmals- und Kennzahlenstruktur).<br>
Diese Option kann nur in dem [Look Up](./eine-bw-cube-quelle-definieren#einen-bw-cube-oder-ein-query-suchen) Fenster der Komponente aktiviert und deaktiviert werden.

{: .box-tip }
**Empfehlung**: Definieren Sie immer eine Paketgröße.

#### Automatic Slicing Dimension

- **Automatic Slicing Dimension:** <br>
Diese Option legt eine Dimension für ein automatisches Slicing fest. 
Unter Slicing versteht man das Auswählen einer Teilmenge eines Cubes durch Auswahl eines einzelnen Wertes für eine seiner Dimensionen. 
Automatisches Slicing bedeutet, dass für jeden Einzelwert der gewählten Slicing-Dimension (Merkmal) eine Schleife ausgeführt wird, um das Ergebnis aus dem BW zu extrahieren. <br>
**Automatic Slicing Dimension** ermöglicht die Extraktion einer großen Datenmenge (Millionen von Sätzen) aus dem BW.

#### Experimental

Die folgenden Einstellungen sind nur für BICS Extraktionen verfügbar.
Sie werden angezeigt, nachdem die Metadaten einer BICS Extraktion abgerufen wurden.


- **Use BICS Fast Mode:**<br>
Wenn diese Checkbox aktiv ist, wird das interne Verhalten der BICS-Komponente gewechselt.
Anstatt RFC-Funktionsdefinitionen bei jedem Aufruf aus SAP zu laden, verwendet der BICS Fast Mode lokal abgelegte BAPI Definitionen.
Dieses Verhalten kann die Performance der BICS-Komponente erhöhen.
- **Create BICS Compatibility Report:**<br>
Weil sich der BICS Modus noch in der Beta-Phase befindet, sind Fehler beim Ausführen des BICS Modus nicht ausgeschlossen.
Klicken Sie auf **[Create BICS Compatibility Report]**, um eine Testreihe auszuführen, die uns hilft die Ursache des Fehlers zu finden und den Fehler zu beheben.<br>
Die Ergebnisse der Testreihe werden in einer .zip-Datei zusammengefasst.
Wenn Sie mehrere SAP-Systeme verwenden, führen Sie diese Testreihe auf jeder Ihrer SAP-Quellen aus.
Senden Sie die resultierende .zip-Dateien an den [Theobald Support](https://support.theobald-software.com).

![XU_BWCube_Settings](/img/content/bwcube-bics-fast-mode.png){:class="img-responsive"}