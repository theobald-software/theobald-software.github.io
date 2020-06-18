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

### Benutzerdefinierte Eigenschaften - Custom Properties

![Table-XIS-Properties](/img/content/Table-XIS-Properties.png){:class="img-responsive"}

**ColumnNameStyle**<br>
- *Code*: technischer Spaltenname aus SAP wird als Spaltenname verwendet, z.B. MAKTX
- *PrefixedCode*: technischer Name der Tabelle wird mit dem Tilde-Zeichen und dem entsprechenden Spaltennamen verbunden, z. B. MAKT~MAKTX
- *CodeAndText*: technischer Name und die Beschreibung der Spalte aus SAP mit einem Unterstrich verbunden werden als Spaltennamen verwendet, z.B. MAKTX_Material Description (Short Text)
- *TextAndCode*: die Beschreibung und der technische Name der Spalte SAP mit einem Unterstrich verbunden werden als Spaltennamen verwendet, z.B. Material Description (Short Text)_MAKTX

**ConvertsDates**<br>
Ermöglicht die Konvertierung der SAP-Datumsformate. Der Standardwert der Eigenschaft **ConvertsDates** ist *True*. Das Setzen dieser Eigenschaft auf *True* bewirkt Folgendes:
* SAP-Datumsfelder (YYYYMMDD) werden auf den SSIS-Pipeline-Typ DT_DBDATE (anstelle von DT_WSTR) typisiert.
* Die folgenden Datumskonvertierungen werden bei ungültigen Datumsformaten in SAP-Datumsfeldern angewendet:
	- InvalidDateReplacement
	- MaxDateReplacement
	- MinDateReplacement

{: .box-note }	
**Hinweis:** um die Datumskonvertierung anwenden zu können, setzen Sie die Eigenschaft **UseLegacyDateConversion** auf *False*.

**InvalidDateReplacement** <br>
Ermöglicht die Ersetzung eines ungültigen Datumsformats. Der Standardwert für die Eigenschaft **InvalidDateReplacement** ist *1970-01-02*.  So verwenden Sie die Eigenschaft:
* Geben Sie einen Ersatzwert für ungültige SAP-Datumswerte ein, z.B. '20190132' (32. Januar 2019).
* Geben Sie den Ersatzwert in folgendem Format ein: yyyyy-mm-dd

{: .box-note }	
**Note:** *NULL* wird als Wert unterstützt.


**MaxDateReplacement** <br>
Ermöglicht das Ersetzen der SAP-Datumswerte mit dem Jahr *9999*. Der Standardwert der Eigenschaft **MaxDateReplacement** ist 2099-12-31. So verwenden Sie die Eigenschaft:
* Geben Sie einen Ersatzwert für SAP-Datumswerte ein, die das Jahr '9999' enthalten. Beispiel: '99990101' (1. Januar 9999)
* Geben Sie den Ersatzwert in folgendem Format ein: yyyyy-mm-dd

{: .box-note }	
**Note:** *NULL* wird als Wert unterstützt.


**MinDateReplacement** <br>
Ermöglicht das Ersetzen der SAP-Datumswerte mit dem Jahr *0000*. Der Standardwert der Eigenschaft **MinDateReplacement** ist 1970-01-01. So verwenden Sie die Eigenschaft:
* Geben Sie einen Ersatzwert für SAP-Datumswerte ein, die das Jahr '0000' enthalten. Beispiel: '0000000000'. 
* Geben Sie den Ersatzwert in folgendem Format ein: yyyyy-mm-dd

{: .box-note }	
**Note:***NULL* wird als Wert unterstützt.


**UseLegacyDateConversion**<br>
Die Eigenschaft **UseLegacyDateConversion** wird für die Migration von Tabellenextraktionen aus Xtract IS Versionen < 5.0.0 verwendet. Der Standardwert dieser Eigenschaft ist *False*. Als Voraussetzung für die Verwendung der Eigenschaft **UseLegacyDateConversion** muss die Eigenschaft **ConvertsDates** auf *True* gesetzt werden. Das Setzen der Eigenschaft **UseLegacyDateConversion** auf *True* bewirkt Folgendes:
* Ungültige SAP-Datumswerte werden durch den in der Eigenschaft **InvalidDateReplacement** eingegebenen Wert ersetzt.
* Es gibt keinen Ersatz für SAP-Datumswerte, die das Jahr '9999' enthalten.  Der in der Eigenschaft **MaxDateReplacement** eingegebene Wert wird *nicht* berücksichtigt. 
* SAP-Datumswerte, die das Jahr '0000' enthalten, werden durch *NULL* ersetzt.  Der in der Eigenschaft **MinDateReplacement** eingegebene Wert wird *nicht* berücksichtigt. 

**UseFieldsExits**<br>>
Legt fest, ob die im ABAP Data Dictionary abgelegten Konvertierungsroutinen für die jeweiligen Felder verwendet werden.
 Typische Beispiele sind der Sprachschlüssel (z.B. D in der Datenbank, aber DE nach der Konvertierung) oder die Projektnummer (z.B. T000012738GT in der Datenbank, T/12738/GT nach der Konvertierung). Nach der Konvertierung wird der Wert immer so angezeigt, wie er in einer Transaktion im SAP GUI erscheinen würde. <br>






