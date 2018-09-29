---
layout: page
title: Extraktionseinstellungen
description: Extraktionseinstellungen
product: xtract-universal
parent: erste-schritte-mit-xtract-table
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=extraktionseinstellungen
---

Grundsätzlich hat jede Extraktion zwei Möglichkeiten, erweiterte Einstellungen vorzunehmen. Die *Extraction Settings* beinhalten Einstellungen, die nur den jeweiligen Extraktionstyp betreffen, während die *General Settings* bei allen Extraktionstypen gleich sind. Sie finden Informationen zu den General Settings im Abschnitt Allgemeine Einstellungen.

![Table-Form-Extraction-Settings-Button-Location](/img/content/Table-Form-Extraction-Settings-Button-Location.jpg){:class="img-responsive"}

Im folgenden sind *Extraction Settings* erklärt.

![Table-Extraction-Settings](/img/content/Table-Extraction-Settings.jpg){:class="img-responsive"}

**Row limit**

Gibt die maximale Anzahl der extrahierten Datensätze an. 0 steht für unlimitiert.

**Rows per package** 

Gibt die Anzahl der Datensätze an, die pro SAP-Call geholt werden. Welche Werte in Ihrem Fall optimal sind, muss ausprobiert werden. <br>
Erfahrungsgemäß ist bei sehr großen Datenmengen eine Package Size zwischen 15000 und 50000 sinnvoll. <br>
0 bedeutet, es findet keine Paketierung statt; dies kann bei großen Datenextrakten zu einem RFC-Timeout führen.

**None** 

Der vorgegebene Funktionsbaustein RFC_READ_TABLE wird für die Extraktion der Tabellendaten verwendet. 

**Compression** 

Der Compression-Funktionsbaustein Z_XTRACT_IS_TABLE_COMPRESSION wird für die Extraktion der Tabellendaten verwendet. 

**Use conversion routines**

Definiert, ob die im Data Dictionary hinterlegte Konvertierungsroutinen für die jeweiligen Felder angewendet werden. <br>
Typische Beispiele dafür sind der Sprachenschlüssel (z.B. D auf der Datenbank, aber DE nach der Konvertierung) oder die Projektnummer (z.B. T000012738GT auf der Datenbank, T/12738/GT nach der Konvertierung). <br>
Nach der Konvertierung wird immer der Wert angezeigt, so wie er auch in einer Transaktion im SAP GUI erscheinen würde. 
Diese Option wird nur im Zusammenhang mit Compression unterstützt.

**Background extraction (obsolete)** 

Benutzen Sie nicht diese Option, sie ist veraltet. Als Alternative nutzen Sie Compression. <br>
Diese Option aktiviert die Extraktion als Hintergrundjob im SAP-System. 

**Function module** 

Bezeichnet den Namen des verwendeten Funktionsbausteins für die Datenextraktion. 

