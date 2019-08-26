---
ref: xu-table-05
layout: page
title: Extraktionseinstellungen
description: Extraktionseinstellungen
product: xtract-universal
parent: table
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=extraktionseinstellungen
---

Grundsätzlich hat jede Extraktion zwei Möglichkeiten, erweiterte Einstellungen vorzunehmen. Die *Extraction Settings* beinhalten Einstellungen, die nur den jeweiligen Extraktionstyp betreffen, während die *General Settings* bei allen Extraktionstypen gleich sind. Sie finden Informationen zu den *General Settings* im Abschnitt [Allgemeine Einstellungen](../fortgeschrittene-techniken/allgemeine-einstellungen). 

![Extraction-Settings-01](/img/content/xu/Table-Extraction-Settings.png){:class="img-responsive"}

Im folgenden sind *Extraction Settings* erklärt.

**Package Size** <br>
Gibt die Anzahl der Datensätze an, die pro Datenpaket geholt werden. Welche Werte in Ihrem Fall optimal sind, muss ausprobiert werden. 
Erfahrungsgemäß ist bei großen Datenmengen eine Package Size zwischen 15000 und 50000 sinnvoll. Der Default-wert liegt bei 50000 Zeilen. 
0 bedeutet, es findet keine Paketierung statt. Dies kann bei großen Datenextrakten zu einem RFC-Timeout führen.
Insbesondere bei der Ausführung einer Tabellenextraktion als Hintergrund-Job (siehe *Extract data in background job*) spielt die Paketgröße eine wichtige Rolle und sollte sinnvoll in Bezug auf die Gesamtdatenmenge gewählt werden. 

**Row limit**<br>
Gibt die maximale Anzahl der extrahierten Datensätze an. *0* extrahiert die komplette Tabelle.

**Function module** <br>
Bezeichnet den Namen des verwendeten Funktionsbausteins für die Datenextraktion. Das Feld wird automatisch befüllt in Abhängigkeit davon, welche Funktionsbausteine auf Ihrem SAP System verhonden sind.
Wir empfehlen, unseren Baustein Z_THEO_READ_TABLE zu verwenden. Siehe auch [SAP Customizing](../sap-customizing/funktionsbaustein-fuer-table-extraktion). 

**Extract data in background job** <br>
Durch Anhaken dieser Checkbox wird die Tabellenextraktion als Hintergrund-Job in SAP ausgeführt. Diese Einstellung ist optional und wird in Kombination mit dem Baustein Z_THEO_READ_TABLE ab Version 2.0 unterstützt.
Empfohlen wird die Aktivierung für langlaufende Extraktionen mit sehr großen Datenmengen, die mit der Standard-Methode in einen Timeout-Fehler laufen ("Time limit exceeded"). <br>
Die Extraktionsjobs finden sich im SAP JobLog (SM37) unter dem JobName *Xtract*.  