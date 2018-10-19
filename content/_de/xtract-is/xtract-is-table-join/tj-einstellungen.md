---
ref: xi-join-table-07
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-is
parent: xtract-is-table-join
permalink: /:collection/:path
weight: 7
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=tj-einstellungen
---

Klicken Sie auf den Settings-Link im Editor. Das folgende Fenster öffnet sich:

![tj-xis-settings](/img/content/tj-xis-settings.jpg){:class="img-responsive"}


**Max Rows** <br>
Gibt die maximale Anzahl der extrahierten Datensätze an. 0 steht für unlimitiert.

**Package Size** <br>
Gibt die Anzahl der Datensätze an, die pro Paket geschickt werden werden. Welche Werte in Ihrem Fall optimal sind, hängt von Ihrer Infrastruktur ab. Erfahrungsgemäß ist bei sehr großen Datenmengen eine Package Size zwischen 15000 und 50000 sinnvoll. 0 bedeutet, es findet keine Paketierung statt. Dies kann bei großen Datenextrakten zu einem RFC-Timeout führen.

**Custom Function** <br>
Der Name des Z-Funktionsbausteins. 

**Automatic String Conversion** <br>
bedeutet, dass die Datenquelle alle Strings nach NVarChar konvertiert, wenn SAP ein Unicode-System ist, und nach VarChar, wenn SAP kein Unicode-System ist.

**Convert Strings to VarChar** <br>
bedeutet, dass die Datenquelle alle Strings nach VarChar konvertiert.

**Convert Strings to NVarChar** <br>
bedeutet, dass die Datenquelle alle Strings nach NVarChar konvertiert.

**Automatic Date conversion** <br>
Konvertiert ein SAP-Datum (YYYYMMDD) in ein SQL-Datum. Für den Fall, dass ein SAP-Datum nicht in ein gültiges SQL-Datum konvertiert werden kann, muss ein Standard-Datumswert in die Textbox eingetragen werden. Jeder ungültige Wert wird dann in das eingegebene Datum konvertiert. NULL wird als Wert unterstützt.

**Use Field Exits** <br> 
definiert, ob die im Data Dictionary hinterlegte Konvertierungsroutinen für die jeweiligen Felder angewendet werden. Typische Beispiele dafür sind der Sprachenschlüssel (z.B. D auf der Datenbank, aber DE nach der Konvertierung) oder die Projektnummer (z.B. T000012738GT auf der Datenbank, T/12738/GT nach der Konvertierung). Nach der Konvertierung wird immer der Wert angezeigt, so wie er auch in einer Transaktion im SAP GUI erscheinen würde. <br>
Diese Option wird nur im Zusammenhang mit der Option "Data Compression" unterstützt.