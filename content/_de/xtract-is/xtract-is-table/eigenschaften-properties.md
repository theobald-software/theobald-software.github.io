---
ref: xi-table-07
layout: page
title: Benutzerdefinierte Eigenschaften
description: Custom Properties - Benutzerdefinierte Eigenschaften
product: xtract-is
parent: xtract-is-table
permalink: /:collection/:path
weight: 7
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=erweiterte-table-eigenschaften
progressstate: 5
---


Die Benutzerdefinierte Eigenschaften (Custom Properties) der Xtract Table Komponente repräsentieren die Eigenschaften der Komponente und werden im “Properties” Fenster der Komponente angezeigt.

### Liste der Eigenschaften

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


**CustomFunctionName**<br>
Entspricht dem Drop-down-Menü *Function Module* in den [Settings](./extraktionseinstellungen) der Table Komponente.

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

**MaxRows**<br>
Gibt die maximale Anzahl der extrahierten Datensätze an. *0* extrahiert die komplette Tabelle.
Diese Eigenschaft entspricht dem Feld *Row Limit* in den [Settings](./extraktionseinstellungen) der Table Komponente.

**OrderBy**<br>
Definiert, welches Tabellenfeld als Kriterium für die Sortierung des Ergebnisses verwendet wird.

**PackageSize**<br> 
Gibt die Anzahl der Datensätze an, die pro Datenpaket extrahiert werden.
- Der Standardwert ist 20000 Zeilen. 
- 0 bedeutet, es findet keine Parkettierung statt. Keine Parkettierung kann bei Extraktionen großer Datenmengen zu einem RFC-Timeout führen.
- Die Paketgröße (Package Size) zwischen 15000 und 50000 ist sinnvoll für große Datenmengen.

Diese Eigenschaft entspricht dem Feld *Package Size* in den [Settings](./extraktionseinstellungen) der Table Komponente.

{: .box-tip }
**Empfehlung:** Insbesondere bei der Ausführung einer Tabellenextraktion als Hintergrund-Job spielt die Paketgröße eine wichtige Rolle und sollte sinnvoll in Bezug auf die Gesamtdatenmenge gewählt werden. 


**UseWideStrings**<br> 
Definiert, ob DT_WSTR / DT_NTEXT (true) oder DT_STR / DT_TEXT (false) als Datentyp für String-Spalten verwendet wird.

**UseLegacyDateConversion**<br>
Die Eigenschaft **UseLegacyDateConversion** wird für die Migration von Tabellenextraktionen aus Xtract IS Versionen < 5.0.0 verwendet. Der Standardwert dieser Eigenschaft ist *False*. Als Voraussetzung für die Verwendung der Eigenschaft **UseLegacyDateConversion** muss die Eigenschaft **ConvertsDates** auf *True* gesetzt werden. Das Setzen der Eigenschaft **UseLegacyDateConversion** auf *True* bewirkt Folgendes:
* Ungültige SAP-Datumswerte werden durch den in der Eigenschaft **InvalidDateReplacement** eingegebenen Wert ersetzt.
* Es gibt keinen Ersatz für SAP-Datumswerte, die das Jahr '9999' enthalten.  Der in der Eigenschaft **MaxDateReplacement** eingegebene Wert wird *nicht* berücksichtigt. 
* SAP-Datumswerte, die das Jahr '0000' enthalten, werden durch *NULL* ersetzt.  Der in der Eigenschaft **MinDateReplacement** eingegebene Wert wird *nicht* berücksichtigt. 

**WhereClause**<br>
Entspricht dem Tab *WHERE clause* in der Table Komponente. Erlaubt die PArametrisierung der kompletten WHERE-Bedingung, siehe [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).

****
#### Weiterführende Links
- [Parametrisierung](./table-parametrisierung) 
