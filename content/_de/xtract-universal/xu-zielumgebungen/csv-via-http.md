---
ref: xu-destinations-02
layout: page
title: CSV (via HTTP)
description: CSV (via HTTP)
product: xtract-universal
parent: xu-zielumgebungen
permalink: /:collection/:path
weight: 02
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=csv-via-http
---

Das Ziel *HTTP - CSV*  liefert die extrahierten Daten im generischen CSV-Format über einen HTTP-Stream bzw. Webservice. 

CSV (via HTTP) wird von mehreren Produkten unterstützt. Folgende Produkte wurden u.a. getestet: Layer2 und INFONEA. 

Folgende Einstellungen können für das Ziel HTTP - CSV definiert werden.

![CSV-Destination-Details](/img/content/CSV-Destination-Details.jpg){:class="img-responsive"}

**CSV Settings**

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

**Convert / Encoding**

**Decimal separator**<br>
Definiert den Dezimaltrenner für die Dezimalzahlen. Punkt (.) ist der Standard-Wert.             
             
**Date format**<br>
Definiert ein benutzerdefiniertes Datumsformat (z.B. YYYY-MM-DD oder MM/DD/YYYY), um gültige SAP-Datumswerte (YYYYMMDD) zu formatieren. Default ist YYYY-MM-DD.  

**Time format**<br>
Definiert ein benutzerdefiniertes Zeitformat (z.B. HH:MM:SS oder HH-MM-SS), um gültige SAP-Zeitwerte (HHMMSS) zu formatieren. Default ist HH:MM:SS.

**Text Encoding** <br>
Definiert die Zeichenketten-Kodierung.  