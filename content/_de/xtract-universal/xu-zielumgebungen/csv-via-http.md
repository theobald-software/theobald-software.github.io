---
ref: xu-destinations-11
layout: page
title: Webservice - CSV
description: CSV (via HTTP)
product: xtract-universal
parent: xu-zielumgebungen
permalink: /:collection/:path
weight: 11
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=csv-via-http
---

Die Destination *HTTP - CSV*  liefert die extrahierten Daten im generischen CSV-Format über einen HTTP-Stream bzw. Webservice. 

CSV (via HTTP) wird von mehreren Produkten unterstützt. Folgende Produkte wurden u.a. getestet: Layer2 und INFONEA. 

### HTTP - CSV Destination hinzufügen
1. Navigieren Sie im Hauptfenster des Designers zu **[Server] > [Manage Destinations]**. Das Fenster "Manage Destinations" wird geöffnet.
2. Klicken Sie auf **[Add]**, um eine neue Destination hinzuzufügen. Das Fenster "Destination Details" wird geöffnet.
3. Wähen Sie die Destination *HTTP - CSV* aus der Drop-Down-Liste aus.
4. Klicken Sie auf **[OK]** zum Bestätigen. 

### Destination Details - Destinationsdetails
Das Fenster "Destination Details" besteht aus vier Unterabschnitten:
- Name (Dateiname)
- Type (Typ der Destination)
- CSV Settings (s. u.)
- Convert / Encoding (s. u.)
![CSV-Destination-Details](/img/content/CSV-Destination-Details.png){:class="img-responsive"}

### CSV Settings

**Column seperator**<br>
Definiert, wie bei CSV zwei Spalten getrennt werden sollen.

**Row separator**<br>
Definiert, wie bei CSV zwei Zeilen getrennt werden sollen.

**Quote symbol**<br>
Definiert, in welches Zeichen der Wert einer Tabellenzeile eingeschachtelt werden soll, falls der Wert den Column Seperator enthält. 

**Column names in first row**<br>
Definiert, ob die erste Zeile die Spaltennamen enthält. Die Option ist standardmäßig gesetzt.

**Row separator after last row**<br>
Definiert, ob die letzte Zeile einen Zeilenseparator enthält. Die Option ist standardmäßig gesetzt.


### Convert / Encoding
**Decimal separator**<br>
Definiert den Dezimaltrenner für die Dezimalzahlen. Punkt (.) ist der Standard-Wert.             
             
**Date format**<br>
Definiert ein benutzerdefiniertes Datumsformat (z.B. YYYY-MM-DD oder MM/DD/YYYY), um gültige SAP-Datumswerte (YYYYMMDD) zu formatieren. Default ist YYYY-MM-DD.  

**Time format**<br>
Definiert ein benutzerdefiniertes Zeitformat (z.B. HH:MM:SS oder HH-MM-SS), um gültige SAP-Zeitwerte (HHMMSS) zu formatieren. Default ist HH:MM:SS.

**Text Encoding** <br>
Definiert die Zeichenketten-Kodierung.  