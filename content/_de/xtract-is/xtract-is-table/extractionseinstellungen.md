---
ref: xi-table-06
layout: page
title: Extraktionseinstellungen
description: Extraktionseinstellungen
product: xtract-is
parent: xtract-is-table
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=erweiterte-table-eigenschaften
---
{% include _content/de/table/extraktionseinstellungen.md  %}

### Benutzerdefinierte Eigenschaften

**Konvertiert Daten**<br>
Auf *true* setzen, um ein SAP-Datum (YYYYMMDD) in einen SQL-Datumstyp zu konvertieren. Außerdem gelten die folgenden Datumskonvertierungen bei ungültigen Daten in SAP-Datumsfeldern. <br>

**UngültigesDatumErsatz** <br>
Wenn ein SAP-Datum nicht in ein gültiges SQL-Datum umgewandelt werden kann, muss ein Standarddatumswert in das Textfeld eingegeben werden. Jeder ungültige Wert (z.B. 20190500') wird dann in das eingegebene Datum umgewandelt,
'NULL' wird als Wert unterstützt. 

**MaxDateReplacement** <br> <br>
Ersetzt SAP-Datumsangaben durch einen ungültigen maximalen Jahreswert, wie z.B.'9999mmdd', durch das eingegebene Datum oder durch 'NULL'.

**MinDateReplacement** <br>
Ersetzt SAP-Datumsangaben durch einen ungültigen Min.-Jahreswert, z.B.'0000mmdd' durch das eingegebene Datum oder durch 'NULL'.

**Feldausgänge verwenden**<br>>
Legt fest, ob die im ABAP Data Dictionary abgelegten Konvertierungsroutinen für die jeweiligen Felder verwendet werden. Typische Beispiele sind der Sprachschlüssel (z.B. D in der Datenbank, aber DE nach der Konvertierung) oder die Projektnummer (z.B. T000012738GT in der Datenbank, T/12738/GT nach der Konvertierung). Nach der Konvertierung wird der Wert immer so angezeigt, wie er in einer Transaktion im SAP GUI erscheinen würde. <br>






