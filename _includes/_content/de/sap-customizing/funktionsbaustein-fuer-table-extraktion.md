### Einschränkungen von RFC_READ_TABLE 
Insbesondere bei älteren SAP Releases bestehen einige Einschränkungen bei der Extraktion von Tabellen wenn der SAP Standardfunktionsbaustein (RFC_READ_TABLE) verwendet wird:

- Die Gesamtbreite der zu extrahierenden Spalten darf 512 Bytes nicht überschreiten
- Andere Einschränkungen existieren abhängig von der SAP-Version. 
  Fehler können auftreten bei der Extraktion von Tabellen, die eine oder mehrere Spalten vom Typ f (FLTP, floating point), DEC (Decimal und Prozentzahl z.B.) oder x (RAW, LRAW) haben.
- Schlechte Extraktionsperformance bei Extraktion großer Tabellen.

Um die o.g. Einschränkungen zu umgehen, installieren Sie den Z-Funktionsbaustein *Z_THEO_READ_TABLE* von Theobald Software auf Ihrem SAP-System.

{: .box-warning }
**Warnung! Error while converting value '\*.0' of row 1530, column 3** <br>
Der SAP-Standardbaustein *RFC_READ_TABLE* zur Tabellenextraktion kann den ABAP-Datentyp DEC nur bedingt extrahieren. Dies führt zu dem genannten Beispielfehler bei der Extraktion.
Verwenden Sie den Funktionsbaustein von Theobald Software *Z_THEO_READ_TABLE*. 

### Installation von Z_THEO_READ_TABLE

Ein SAP-Transportauftrag für die Installation des Funktionsbausteins wird im Installationsverzeichnis der Software mitgeliefert: `C:\ProgramFiles\[XtractProduct]\ABAP\`.<br>
Es gibt zwei Transportaufträge, einen für SAP-Systeme ab Version 7.40 SP05 (* Z_THEO_READ_TABLE-transport.zip*), und einen für Systeme mit einer niedrigeren Version (* Z_THEO_READ_TABLE-transport-before-740SP05.zip*).<br>

- Z_THEO_READ_TABLE-transport.zip enthält die Version 2.x von Z_THEO_READ_TABLE - den benutzerdefinierten Funktionsbaustein, eine Reihe von ABAP-Klassen und andere DDIC-Objekte.  
- Z_THEO_READ_TABLE-transport-before-740SP05.zip enthält die Version 1.x (bis 1.11) von Z_THEO_READ_TABLE - den benutzerdefinierten Funktionsbaustein.
![Z_THEO_READ_TABLE_SE80](/img/content/Z_THEO_READ_TABLE_SE80.png){:class="img-responsive" }

{: .box-note}
**Hinweis:** Lesen Sie die README.pdf, die sich im Installationsornder (z.B.`C:\Program Files\XtractProduct\ABAP\README.pdf`) befindet, bevor Sie den Z-Funktionsbaustein installieren.

Beim Einspielen der Z_THEO_READ_TABLE-transport-before-740SP05 auf älteren SAP-Releases kann ein Syntaxfehler auftreten. Wenden Sie sich an den [Theobald Support](https://support.theobald-software.com) und senden Sie die dedizierte Fehlermeldung.

#### Testen des Bausteins in SAP

{: .box-warning }
**Warnung! Erzeugung von Short Dumps** <br>
Der Funktionsbaustein Z_THEO_READ_TABLE kann aufgrund seiner Callback-Funktionalität nur von Theobald-Produkten gestartet werden. Das Testen des Bausteins in einem SAP-System ist daher nicht möglich.
