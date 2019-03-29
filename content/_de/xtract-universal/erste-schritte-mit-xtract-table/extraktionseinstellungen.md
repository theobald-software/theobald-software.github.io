---
ref: xu-getting-started-table-06
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

Grundsätzlich hat jede Extraktion zwei Möglichkeiten, erweiterte Einstellungen vorzunehmen. Die *Extraction Settings* beinhalten Einstellungen, die nur den jeweiligen Extraktionstyp betreffen, während die *General Settings* bei allen Extraktionstypen gleich sind. Sie finden Informationen zu den *General Settings* im Abschnitt [Allgemeine Einstellungen](../fortgeschrittene-techniken/allgemeine-einstellungen). 

![Extraction-Settings-01](/img/content/Extraction-Settings-01.png){:class="img-responsive"}

Im folgenden sind *Extraction Settings* erklärt.

![Table-Extraction-Settings](/img/content/Table-Extraction-Settings.jpg){:class="img-responsive"}

**Row limit**<br>
Gibt die maximale Anzahl der extrahierten Datensätze an. *0* extrahiert die komplette Tabelle.

**Rows per package** <br>
Gibt die Anzahl der Datensätze an, die pro Datenpaket geholt werden. Welche Werte in Ihrem Fall optimal sind, muss ausprobiert werden. <br>
Erfahrungsgemäß ist bei sehr großen Datenmengen eine Package Size zwischen 15000 und 50000 sinnvoll. <br>
0 bedeutet, es findet keine Paketierung statt. Dies kann bei großen Datenextrakten zu einem RFC-Timeout führen.

**Use conversion routines**<br>
Definiert, ob die im Data Dictionary hinterlegte Konvertierungsroutinen für die jeweiligen Felder angewendet werden. <br>
Typische Beispiele dafür sind der Sprachenschlüssel (z.B. D auf der Datenbank, aber DE nach der Konvertierung) oder die Projektnummer (z.B. T000012738GT auf der Datenbank, T/12738/GT nach der Konvertierung). <br>
Nach der Konvertierung wird immer der Wert angezeigt, so wie er auch in einer Transaktion im SAP GUI erscheinen würde. <br>
Diese Option wird nur im Zusammenhang mit den Funktionsbausteinen Z_THEO_READ_TABLE und Z_XTRACT_IS_TABLE_COMPRESSION unterstützt.

**Function module** <br>
Bezeichnet den Namen des verwendeten Funktionsbausteins für die Datenextraktion. Das Feld wird automatisch befüllt in Abhängigkeit davon, welche Funktionsbausteine auf Ihrem SAP System verhonden sind.
Wir empfehlen, unseren Baustein Z_THEO_READ_TABLE zu verwenden. Siehe auch [SAP Customizing](../sap-customizing/funktionsbaustein-fuer-table-extraktion). 

