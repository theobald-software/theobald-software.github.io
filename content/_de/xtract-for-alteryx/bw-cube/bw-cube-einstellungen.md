---
ref: xfa-bw-cube-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 3
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


**Automatic Slicing Dimension**<br/>
Ermöglicht die Auswahl einer Dimension für ein automatisches Slicing.
Slicing steht für das Ausschneiden von Scheiben aus dem Datenwürfel durch die Selektion eines einzelnen Wertes einer Dimension.
Beim automatischen Slicing wird über jeden einzelnen Wert (Ausprägung) der gewählten Slicing-Dimension (Merkmal) iteriert und für jeden dieser Werte das Abfrageergebnis aus BW extrahiert.
Diese Option ermöglicht die Extraktion größerer Datenmengen (mehrere Millionen Datensätze) aus BW, welche bisher aufgrund von BW-seitigen Fehlern (wie Speicherüberlauf und Timeout) nicht möglich war.
Wählen Sie eine geeignete Dimension fürs Slicing, bei größeren Datenmengen selektieren Sie eine Dimension mit einer granularen Ausprägung (z.B. Periode oder Woche).

**Column Name Style**<br>
definiert die Logik für die Benneung der Spalten: 
- Code bennent die Spalten mit dem technischen Namen des Originalelements 
- CodeAndText mit dem technischen Namen und der Klarschrift 
- TextAndCode mit Larschrift und dann dem technischen Namen


![Designer](/img/content/xfa/bwcube04.png){:class="img-responsive"}


