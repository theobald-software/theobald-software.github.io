---
ref: xu-destinations-14
layout: page
title: Flat File - CSV
description: Flat File - CSV
product: xtract-universal
parent: xu-destinationen
childidentifier: csv-flat-file
permalink: /:collection/:path
weight: 14
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=zielumgebungen
---

Die Destination *Flat File* erzeugt eine generische CSV-Datei. 

### Flat File - CSV Destination hinzufügen
1. Navigieren Sie im Hauptfenster des Designers zu **[Server] > [Manage Destinations]**. Das Fenster "Manage Destinations" wird geöffnet.
2. Klicken Sie auf **[Add]**, um eine neue Destination hinzuzufügen. Das Fenster "Destination Details" wird geöffnet.
3. Wähen Sie die Destination *Flat File - CSV* aus der Drop-Down-Liste aus.
4. Klicken Sie auf **[OK]** zum Bestätigen. 

### Destination Details - Destinationsdetails
Das Fenster "Destination Details" besteht aus vier Unterabschnitten:
- Name (Dateiname)
- Type (Typ der Destination)
- File (s. u.)
- CSV Settings (s. u.)
- Convert / Encoding (s. u.)

![CSV-Flat-Destination-Details](/img/content/CSV-Flat-Destination-Details.png){:class="img-responsive"}

### File

**Directory**<br>
Angabe eines vorhandenen Verzeichnises, in das die Zieldateien abgelegt werden.

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

**Text Encoding**<br>
Definiert die Zeichenketten-Kodierung.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}