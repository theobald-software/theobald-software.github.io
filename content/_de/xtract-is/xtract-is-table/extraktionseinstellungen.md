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

### Extraction Settings Öffnen
Innerhalb des Fensters "Define data source for SAP Tables" klicken Sie auf **Settings**. Das Fenster "Table Settings" wird geöffnet. 
{% include _content/de/table/extraktionseinstellungen.md  %}

### Benutzerdefinierte Eigenschaften
![Table-XIS-Properties](/img/content/Table-XIS-Properties.png){:class="img-responsive"}

**ConvertsDates**<br>
Auf *true* setzen, um ein SAP-Datum (YYYYMMDD) in einen SQL-Datumstyp zu konvertieren. Außerdem gelten die folgenden Datumskonvertierungen bei ungültigen Daten in SAP-Datumsfeldern. <br>

**InvalidDateReplacement** <br>
Wenn ein SAP-Datum nicht in ein gültiges SQL-Datum umgewandelt werden kann, muss ein Standarddatumswert in das Textfeld eingegeben werden. Jeder ungültige Wert (z.B. 20190500') wird dann in das eingegebene Datum umgewandelt,
'NULL' wird als Wert unterstützt. 

**MaxDateReplacement** <br> <br>
Ersetzt SAP-Datumsangaben durch einen gültigen maximalen Jahreswert, wie z.B.'9999mmdd', durch das eingegebene Datum oder durch 'NULL'.

**MinDateReplacement** <br>
Ersetzt SAP-Datumsangaben durch einen ungültigen Min.-Jahreswert, z.B.'0000mmdd' durch das eingegebene Datum oder durch 'NULL'.

**UseLegacyDateConversion**<br>
Diese Eigenschaft ist für die Migration von Tabellenextraktionen aus Xtract IS-Versionen < 5.0.0 gedacht. Der Standardwert dieser Eigenschaft ist *False*. Als Voraussetzung für die Verwendung dieser Eigenschaft muss die Eigenschaft *ConvertsDates* auf *True* gesetzt werden. Das Setzen der Eigenschaft *UseLegacyDateConversion* auf *True* bewirkt Folgendes:
* Ungültige SAP-Datumswerte werden durch den in der Eigenschaft *InvalidDateReplacement* eingegebenen Wert ersetzt.
* Es gibt keinen Ersatz für SAP-Datumswerte, die das Jahr '9999' enthalten.  Der in der Eigenschaft *MaxDateReplacement* eingegebene Wert wird *nicht* berücksichtigt. 
* SAP-Datumsangaben, die das Jahr '0000' enthalten, werden durch NULL ersetzt.  Der in der Eigenschaft MinDateReplacement eingegebene Wert wird *nicht* berücksichtigt. 

**UseFieldsExits**<br>>
Legt fest, ob die im ABAP Data Dictionary abgelegten Konvertierungsroutinen für die jeweiligen Felder verwendet werden. Typische Beispiele sind der Sprachschlüssel (z.B. D in der Datenbank, aber DE nach der Konvertierung) oder die Projektnummer (z.B. T000012738GT in der Datenbank, T/12738/GT nach der Konvertierung). Nach der Konvertierung wird der Wert immer so angezeigt, wie er in einer Transaktion im SAP GUI erscheinen würde. <br>






