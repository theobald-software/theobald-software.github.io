---
ref: xi-table-02
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-is
parent: xtract-is-table
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=erweiterte-table-eigenschaften
---

Es können noch weitere Parameter in dem Tabellenextrakt definiert werden. Klicken Sie dazu auf den Settings-Link im Editor. Das folgende Fenster öffnet sich:

![XIS_Table_Settings](/img/content/XIS_Table_Settings.jpg){:class="img-responsive"}

**Max Rows**<br>
Gibt die maximale Anzahl der extrahierten Datensätze an. 0 steht für unlimitiert.

**Package Size**<br>
Gibt die Anzahl der Datensätze an, die pro Paket geschickt werden werden. Welche Werte in Ihrem Fall optimal sind, hängt von Ihrer Infrastruktur ab. Erfahrungsgemäß ist bei sehr großen Datenmengen eine Package Size zwischen 15000 und 50000 sinnvoll. 0 bedeutet, es findet keine Paketierung statt. Dies kann bei großen Datenextrakten zu einem RFC-Timeout führen.

**Custom Function**<br>
Der Name der kundeneigenen Funktion (siehe [Einschränkungen](./einschraenkungen)). <br>
Es wird empfohlen, den Funktionsbaustein Z_XTRACT_IS_TABLE_COMPRESSION zu nutzen, siehe die Option **Data Compression**. <br>
Optional steht noch der alte Funktionsbaustein Z_XTRACT_IS_TABLE zur Verfügung. 

**Data Compression**<br>
Nutzt die Komprimierungstechnik des neuen Z-Funktionsbausteins Z_XTRACT_IS_TABLE_COMPRESSION für die Extraktion der SAP-Daten. Dazu tragen Sie den Namen des Z-Funktionsbausteins <br>
Z_XTRACT_IS_TABLE_COMPRESSION ins Feld Custom Function. 

**Use Field Exits**<br>
definiert, ob die im Data Dictionary hinterlegte Konvertierungsroutinen für die jeweiligen Felder angewendet werden. Typische Beispiele dafür sind der Sprachenschlüssel (z.B. D auf der Datenbank, aber DE nach der Konvertierung) oder die Projektnummer (z.B. T000012738GT auf der Datenbank, T/12738/GT nach der Konvertierung). Nach der Konvertierung wird immer der Wert angezeigt, so wie er auch in einer Transaktion im SAP GUI erscheinen würde. <br>
Diese Option wird nur im Zusammenhang mit der Option "Data Compression" unterstützt.

**Automatic Date conversion**<br>
Konvertiert ein SAP-Datum (YYYYMMDD) in ein SQL-Datum. Für den Fall, dass ein SAP-Datum nicht in ein gültiges SQL-Datum konvertiert werden kann, muss ein Standard-Datumswert in die Textbox eingetragen werden. Jeder ungültige Wert wird dann in das eingegebene Datum konvertiert. NULL wird als Wert unterstützt. Das SAP-Datum '00000000' wird abweichend von dem eingegebenen Datum immer nach NULL konvertiert.

**Automatic String Conversion**<br>
bedeutet, dass die Datenquelle alle Strings nach NVarChar konvertiert, wenn SAP ein Unicode-System ist, und nach VarChar, wenn SAP kein Unicode-System ist.

**Convert Strings to VarChar**<br>
bedeutet, dass die Datenquelle alle Strings nach VarChar konvertiert.

**Convert Strings to NVarChar**<br>
bedeutet, dass die Datenquelle alle Strings nach NVarChar konvertiert.

**Activate Extraction for non-Unicode / Multibyte Extraction**<br>
Aktiviert für die Extraktion die non-Unicode und Multibyte Unterstützung. Ist nur bei speziellen "Nicht-Unicode" SAP Systemen mit komplexen Code Pages (z.B. traditionelles Chinesisch) notwendig.

**Use Primary Keys for Packaging (veraltet)**<br>
Diese Funktion kann aktiviert werden, wenn sich die Ergebnismenge während der Extraktion ändern wird. Bei der Aktivierung erfolgt die Paketierung mit dem Primärschlüssel der Daten statt mit Ordinalzahlen. Dadurch wird verhindert, dass Zeilen zweimal in verschiedenen Paketen extrahiert werden, falls bei der Extraktion zusätzliche Daten zur Tabellen hinzugefügt werden. <br>
Diese Funktion war nötig nur für den Funktionsbaustein Z_XTRACT_IS_TABLE, ist aber mit dem neuen Funktionsbaustein Z_XTRACT_IS_TABLE_COMPRESSION überflüssig geworden. 

**Activate OHS Extension (veraltet)**<br>
Aktiviert einen Modus für die optimale Extraktion einer Open Hub Services-Tabelle (SAP BW/BI).

**OHS Request ID (veraltet)**<br>
enthält den Name der Variable, die im Falle einer OHS-Extraktion die RequestID enthält.

**Activate Background Extraction (veraltet)**<br>
Aktiviert die Extraktion als Hintergrundjob