### Einschränkungen von RFC_READ_TABLE 
Insbesondere bei älteren SAP Releases bestehen einige Einschränkungen bei der Extraktion von Tabellen wenn der SAP Standardfunktionsbaustein (RFC_READ_TABLE) verwendet wird:

- Die Gesamtbreite der zu extrahierenden Spalten darf 512 Bytes nicht überschreiten.
- Andere Einschränkungen existieren abhängig von der SAP-Version. 
  Fehler können auftreten bei der Extraktion von Tabellen, die eine oder mehrere Spalten vom Typ f (FLTP, floating point), DEC (Decimal und Prozentzahl z.B.) oder x (RAW, LRAW) haben.
- Schlechte Extraktionsperformance bei Extraktion großer Tabellen.

Um die o.g. Einschränkungen zu umgehen, installieren Sie den Z-Funktionsbaustein */THEO/READ_TABLE* von Theobald Software auf Ihrem SAP-System.

{: .box-warning }
**Warnung! Error while converting value '\*.0' of row 1530, column 3** <br>
Der SAP-Standardbaustein *RFC_READ_TABLE* zur Tabellenextraktion kann den ABAP-Datentyp DEC nur bedingt extrahieren. Dies führt zu dem genannten Beispielfehler bei der Extraktion.
Verwenden Sie den Funktionsbaustein von Theobald Software */THEO/READ_TABLE*. 

### Installation von /THEO/READ_TABLE

Ein SAP-Transportauftrag für die Installation des Funktionsbausteins wird im Installationsverzeichnis der Software mitgeliefert: 
{% if page.product == "yunio" %}`C:\Program Files\Theobald Software\yunIO\ABAP\`.{% else %}`C:\Program Files\[XtractProduct]\ABAP\`.{% endif %}<br>
Der Transportauftrag muss von Ihrem SAP-Basis-Team in SAP importiert werden.

Es gibt zwei Funktionsbausteine für Tabellen-Extraktionen:
- /THEO/READ_TABLE
- Z_THEO_READ_TABLE

Wir empfehlen die Installation des aktuellen Funktionsbausteins THEO/READ_TABLE:
- `THEO_READ_TABLE_740SP05.zip` - kompatibel mit ABAP Version 7.40 SP05 und höher
- `THEO_READ_TABLE_710.zip` - kompatibel mit ABAP Version 7.10 und höher
- `THEO_READ_TABLE_640.zip` - kompatibel mit ABAP Versionen von 6.40 bis 7.03
- `THEO_READ_TABLE_46C.zip` - kompatibel mit ABAP Versionen von 4.6C bis 6.40

{: .box-note}
**Hinweis:** Lesen Sie die README.pdf, die sich im Installationsordner (z.B.`C:\Program Files\XtractProduct\ABAP\README.pdf`) befindet, bevor Sie den Z-Funktionsbaustein installieren.

Beim Einspielen der Z_THEO_READ_TABLE-transport-before-740SP05 auf älteren SAP-Releases kann ein Syntaxfehler auftreten. Wenden Sie sich an den [Theobald Support](https://support.theobald-software.com) und senden Sie die dedizierte Fehlermeldung.

#### Testen des Bausteins in SAP

{: .box-warning }
**Warnung! Erzeugung von Short Dumps** <br>
Die Funktionsbausteine /THEO/READ_TABLE und Z_THEO_READ_TABLE können wegen ihrer Callback-Funktionalität nur von Theobald-Produkten gestartet werden. Das Testen der Bausteine in einem SAP-System ist daher nicht möglich.
