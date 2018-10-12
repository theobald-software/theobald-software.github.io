**Achtung**: Dieser Funktionsbaustein ist obsolet. Bitte nutzen Sie stattdessen den Funktionsbaustein *Z_XTRACT_IS_TABLE_COMPRESSION*.

Standardmäßig wird die Extraktion der Tabellendaten im Dialog durchgeführt, also pro Datenpaket wird ein Select auf die Originaltabelle durchgeführt und das entsprechende Datenpaket herausgeschnitten und gesendet.

Mit Hilfe der *Background Extraction* gibt es die Möglichkeit, die Selektion im Hintergrund durchzuführen und in eine Puffertabelle zwischenzuparken. Dieses Vorgehen ist ungünstig bei kleineren SAP-Tabellen und daher nur zu empfehlen bei größeren Tabellen.

In bestimmten Konstallationen kann dies eine deutliche Verbesserung der Performance bedeuten. Der Ablauf der Hintergrundverarbeitung funktioniert wie folgt: 

- Das Hintergrundprogramm wird anhand der vorgegebenen Selektion angestoßen. In der SM37 (Jobverwaltung) können Sie den Hintergrundjob während des Extraktionslaufes prüfen.
- Das Hintergrundprogramm schreibt in die Tabelle ZXTRACTBUFFER für temporäre Daten
- Die Daten werden aus der Tabelle ZXTRACTBUFFER heruntergeladen
- Die temporären Daten werden wieder aus der Tabelle ZXTRACTBUFFER gelöscht.

Um die Erweiterung benutzen zu können, sind die Tabelle ZXTRACTBUFFER und der zusätzlicher Funktionsbaustein Z_XTRACT_IS_TABLE_EX im SAP zu installieren. 

**Schritt 1 – Tabelle anlegen**

Die Tabelle ZXTRACTBUFFER wird im Data Dictionary Transaktion SE11 angelegt. In welches Paket oder welche Entwicklungsklasse die Tabelle gelegt wird, bleibt Ihnen überlassen. Die Auslieferungsklasse sollte A sein und die Datenklasse APPL0 mit der Größenklasse 6 (Das sind alles Pflichtfelder bei der Tabellenanlage).

Die Tabellenspalten entnehmen Sie folgendem Screenshot. Bitte beachten Sie, dass keine Datenelemente, sondern eingebaute Datentypen genommen werden:

![Background-Processing-01](/img/content/Background-Processing-01.png){:class="img-responsive"}


Für Release 4.7 oder kleiner.<br>
Die Puffer-Spalten gehen bis 8. 

![Background-Processing-02](/img/content/Background-Processing-02.png){:class="img-responsive"}

Für Release größer als 4.7 <br>
Die Puffer-Spalten gehen bis 10.

![Background-Processing-03](/img/content/Background-Processing-03.png){:class="img-responsive"}

Bitte speichern und aktivieren Sie die Tabelle. 

**Schritt 2 - Baustein anlegen**

Legen Sie den Baustein an, wie bereits im letzten Kapitel beschrieben. Bitte beachten Sie die leicht abweichenden Import / Export und Tabellen-Parameter wie in den folgenden Screenshots gezeigt.

Den ABAP-Code finden Sie in den folgenden Dateien im Installationsordner:

Z_XTRACT_IS_TABLE_EX_rel_4.7.txt für Release 4.7 oder älter

Z_XTRACT_IS_TABLE_EX_greater_than_4.7.txt für Releases älter 4.7 (z.B. ECC 6.0)

![Background-Processing-04](/img/content/Background-Processing-04.png){:class="img-responsive"}

![Background-Processing-05](/img/content/Background-Processing-05.png){:class="img-responsive"}

![Background-Processing-06](/img/content/Background-Processing-06.png){:class="img-responsive"}

![Background-Processing-07](/img/content/Background-Processing-07.png){:class="img-responsive"}

**Schritt 3 – Einstellungen**

Um die Hintergrundverarbeitung zu aktiveren, gehen Sie bitte in den Settings-Dialog und nehme Sie die folgenden Einstellungen vor. Stellen Sie sicher, dass der Name des Bausteins korrekt eingetragen ist, und dass die Paketierung aktiviert sind.

Setzen Sie einen Wert ins Feld *PackageSize*, z.B. 50000.<br>
Setzen Sie Z_XTRACT_IS_TABLE_EX ins Feld *Custom Function*.<br>
Selektieren Sie *Use Custom function*.<br>
Selektieren Sie *Activate Background Extraction*. <br>

![Table-Extraction-Preferences](/img/content/Table-Extraction-Preferences.png){:class="img-responsive"}