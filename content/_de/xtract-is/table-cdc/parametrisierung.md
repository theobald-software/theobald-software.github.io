---
ref: xi-table-09
layout: page
title: Parametrisierung
description: Parametrisierung
product: xtract-is
parent: table-cdc
permalink: /:collection/:path
weight: 8
lang: de_DE

---
### Custom Properties
Die Eigenschaften der Komponente werden in den *Custom Properties* der Komponente definiert.
Bei der Parametrisierung der Komponente durch SSIS Variablen werden diese Eigenschaften überschrieben.

Eine Liste der relevanten *Custom Properties*:

|Property|Beschreibung|
|:----|:----|
| *ColumnNameStyle* | *Code*: technischer Spaltenname aus SAP wird als Spaltenname verwendet, z.B. MAKTX. <br>*PrefixedCode*: technischer Name der Tabelle wird mit dem Tilde-Zeichen und dem entsprechenden Spaltennamen verbunden, z.B. MAKT~MAKTX. <br>*CodeAndText*: technischer Name und die Beschreibung der Spalte aus SAP mit einem Unterstrich verbunden werden als Spaltennamen verwendet, z.B. MAKTX_Material Description (Short Text). <br>*TextAndCode*: die Beschreibung und der technische Name der Spalte SAP mit einem Unterstrich verbunden werden als Spaltennamen verwendet, z.B. Material Description (Short Text)_MAKTX. |
| *ConvertsDates* | Wenn diese Eigenschaft auf *True* (Standard) gesetzt wird, nehmen SAP-Datumsfelder (YYYYMMDD) den SSIS-Pipeline-Typ DT_DBDATE an (anstelle von DT_WSTR). Die folgenden Datumskonvertierungen werden bei ungültigen Datumsformaten in SAP-Datumsfeldern angewendet:<br>*InvalidDateReplacement*, *MaxDateReplacement*, *MinDateReplacement*. |
| *InvalidDateReplacement* | Erlaubt das Ersetzen eines ungültigen Datumsformats. Der Standard-Wert ist *1970-01-02*. <br>Um diese Eigenschaft zu verwenden, geben Sie einen Ersatzwert für das ungültige Datum ein, z.B. '20190132' (32. Januar  2019) im Format yyyy-mm-dd. Der Wert NULL wird unterstützt.|
| *MaxDateReplacement* | Erlaubt das Ersetzen eines ungültigen SAP-Datums mit dem Jahr 9999. Der Standard-Wert ist *2099-12-31*. <br>Um diese Eigenschaft zu verwenden, geben Sie einen Ersatzwert mit dem Jahr ‘9999’ im Format yyyy-mm-dd ein. Beispiel: ‘99990101’ (1. Januar 9999). Der Wert NULL wird unterstützt.|
| *MinDateReplacement* | Erlaubt das Ersetzen eines ungültigen SAP-Datums mit dem Jahr *0000*. Der Standard-Wert ist *1970-01-01*. <br>Um diese Eigenschaft zu verwenden, geben Sie einen Ersatzwert mit dem Jahr ‘0000’ im Format yyyy-mm-dd ein. Beispiel: '00000000'. Der Wert NULL wird unterstützt.|



{% include _content/de/xis-specific/parametrisierung/parametrisierung-properties.md  %}

#### Verfügbare Data Flow Properties
Liste der *Data Flow Properties*, die parametrisiert werden können:

|Property|Beschreibung|
|:----|:----|
| *[Xtract Table CDC].[ConvertsDates]*|Aktiviert oder deaktiviert die Umwandlung von SAP Daten, siehe [Benutzerdefinierte Eigenschaften](#custom-properties). |
| *[Xtract Table CDC].[MinDateReplacement]*|Verwendet den eingegebenen Wert anstelle des SAP Datums 00000000, siehe [Benutzerdefinierte Eigenschaften](#custom-properties).|
| *[Xtract Table CDC].[MaxDateReplacement]*|Verwendet den eingegebenen Wert anstelle des SAP Datums 9999XXXX, siehe [Benutzerdefinierte Eigenschaften](#custom-properties).|
| *[Xtract Table CDC].[InvalidDateReplacement]*|Im Fall unzulässiger Werte für Daten, geben Sie hier einen Standardwert ein. Jedes ungültige Datum bekommt diesen Wert zugewiesen, siehe [Benutzerdefinierte Eigenschaften](#custom-properties).|

### Parametrierung mit SSIS Variablen

Liste der Eingabefelder / *Custom Properties*, die die Verwendung von SSIS-Variablen erlauben:

|Feldname|Beschreibung|
|:----|:----|
| *WHERE clause* tab| Erlaubt die Parametrisierung der kompletten WHERE-Bedingung oder Teile der WHERE-Bedingung. Für mehr Informationen, siehe [SSIS-Variablen im WHERE Clause Editor](where-clause#ssis-variablen-im-where-clause-editor).|

****
#### Weiterführende Links
- [Extraktionseinstellungen](./extraction-settings) <br>
- [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)
