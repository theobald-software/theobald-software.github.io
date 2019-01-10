---
ref: xfa-table-02
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-for-alteryx
parent: table
permalink: /:collection/:path
weight: 2
lang: de_DE
---

Über den Button „Extraction Settings“ können noch Einstellungen zum Verhalten vorgenommen werden:

**Package Size**<br>
definiert, wieviele Datensätze in einem RFC-Call vom SAP geholt werden sollen. <br>
Werte zwischen 10.000 und 100.000 sind sinnvoll, aber nur wenn die Datenmenge entsprechend groß ist. <br>
Wenn der Wert 0 ist, dann wird die komplette Ergebnismenge in einem Rutsch geholt.

**Max Rows**<br>
definiert die maximale Anzahl von Zeilen in der Egebnismenge. <br>
Wenn der Wert 0 ist, dann wird die komplette Ergebnismenge geholt.<br>
Es kann z.B. beim Testen sinnvoll sein, hier etwas anderes als 0 (z.B. 1000) anzugeben, um erstmal mit wenig Daten zu testen.<br>
Wenn Sie den Wert ändern, denken Sie dran ihn wieder auf 0 zu setzen.<br>

**Column Name Style**<br>
definiert die Logik für die Benneung der Spalten: 
- Code bennent die Spalten mit dem technischen Namen des Originalelements 
- CodeAndText mit dem technischen Namen und der Klarschrift 
- TextAndCode mit Larschrift und dann dem technischen Namen


![Designer](/img/content/xfa/bwcube04.png){:class="img-responsive"}


