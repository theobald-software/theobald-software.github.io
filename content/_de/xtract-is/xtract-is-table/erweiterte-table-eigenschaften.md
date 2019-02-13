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

![XIS_Table_Settings](/img/content/settings_xtractis_table.png){:class="img-responsive"}

**Max Rows**<br>
Gibt die maximale Anzahl der extrahierten Datensätze an. Der Wert 0 steht für unlimitiert.

**Package Size**<br>
Gibt die Anzahl der Datensätze an, die pro Paket geschickt werden werden. Welche Werte in Ihrem Fall optimal sind, hängt von Ihrer Infrastruktur ab. Erfahrungsgemäß ist bei sehr großen Datenmengen eine Package Size zwischen 15000 und 50000 sinnvoll. Der Wert 0 bedeutet, es findet keine Paketierung statt. Dies kann bei großen Datenextrakten zu einem RFC-Timeout führen.

**Custom Function**<br>
Der Name der kundeneigenen Funktion - *customs function*. <br>
Es wird standardmäßig der Funktionsbaustein Z_THEO_READ_TABLE verwendet. <br>
Da es, abhänhig von den Releases von SAP, zu Veränderungen oder Erweiterungen der zugrunde liegende Syntax kommt, ist stets darauf zu achten die aktuellte Version dieses Bausteins zu verwenden.
Die aktuellen Versionen von Xtract IS und unserer kundeneigenen Funktion sind [hier](https://kb.theobald-software.com/version-history/xtract-is-version-history) einzusehen.<br>
 
**Automatic String Conversion**<br>
bedeutet, dass die Datenquelle alle Strings nach NVarChar konvertiert, wenn SAP ein Unicode-System ist, und nach VarChar, wenn SAP kein Unicode-System ist.

**Convert Strings to VarChar**<br>
bedeutet, dass die Datenquelle alle Strings nach VarChar konvertiert.

**Convert Strings to NVarChar**<br>
bedeutet, dass die Datenquelle alle Strings nach NVarChar konvertiert.
 
**Automatic Date conversion**<br>
Konvertiert ein SAP-Datum (YYYYMMDD) in ein SQL-Datum. Für den Fall, dass ein SAP-Datum nicht in ein gültiges SQL-Datum konvertiert werden kann, muss ein Standard-Datumswert in die Textbox eingetragen werden. Jeder ungültige Wert wird dann in das eingegebene Datum konvertiert. NULL wird als Wert unterstützt. Das SAP-Datum '00000000' wird abweichend von dem eingegebenen Datum immer nach NULL konvertiert.

**Use Field Exits**<br>
Definiert, ob die im Data Dictionary hinterlegte Konvertierungsroutinen für die jeweiligen Felder angewendet werden. Typische Beispiele dafür sind der Sprachenschlüssel (z.B. D auf der Datenbank, aber DE nach der Konvertierung) oder die Projektnummer (z.B. T000012738GT auf der Datenbank, T/12738/GT nach der Konvertierung). Nach der Konvertierung wird immer der Wert angezeigt, so wie er auch in einer Transaktion im SAP GUI erscheinen würde. <br>
Diese Option wird nur im Zusammenhang mit der Option "Data Compression" unterstützt.



