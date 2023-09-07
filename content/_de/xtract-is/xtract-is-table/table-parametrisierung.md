---
ref: xi-table-08
layout: page
title: Parametrisierung
description: Parametrisierung
product: xtract-is
parent: xtract-is-table
permalink: /:collection/:path
weight: 8
lang: de_DE

---
### Custom Properties
Die Eigenschaften der Komponente werden in den *Custom Properties* der Komponente definiert.
Bei der Parametrisierung der Komponente durch SSIS Variablen werden diese Eigenschaften überschrieben.

Eine Liste der *Custom Properties* der Table-Komponente finden Sie unter [Benutzerdefinierte Eigenschaften](./eigenschaften-properties).

{% include _content/de/xis-specific/parametrisierung/parametrisierung-properties.md  %}

#### Verfügbare Data Flow Properties
Liste der *Data Flow Properties*, die parametrisiert werden können:

|Property|Beschreibung|
|:----|:----|
| *[Xtract Table].[WhereClause]*| Entspricht dem Tab *WHERE clause* in der Table Komponente. Erlaubt die PArametrisierung der kompletten WHERE-Bedingung, siehe [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/tables/xtract-is-Dynamization-of-WHERE-conditions-of-the-XIS-table-components).|
| *[Xtract Table].[ConvertsDates]*|Aktiviert oder deaktiviert die Umwandlung von SAP Daten, siehe [Benutzerdefinierte Eigenschaften](./eigenschaften-properties). |
| *[Xtract Table].[CustomFunctionName]*| Entspricht dem Drop-down-Menü *Function Module* in den [Settings](./extraktionseinstellungen) der Table Komponente.|
| *[Xtract Table].[MaxRows]*| Entspricht dem Feld *Row Limit* in den [Settings](./extraktionseinstellungen) der Table Komponente.|
| *[Xtract Table].[MinDateReplacement]*|Verwendet den eingegebenen Wert anstelle des SAP Datums 00000000, siehe [Benutzerdefinierte Eigenschaften](./eigenschaften-properties).|
| *[Xtract Table].[MaxDateReplacement]*|Verwendet den eingegebenen Wert anstelle des SAP Datums 9999XXXX, siehe [Benutzerdefinierte Eigenschaften](./eigenschaften-properties).|
| *[Xtract Table].[InvalidDateReplacement]*|Im Fall unzulässiger Werte für Daten, geben Sie hier einen Standardwert ein. Jedes ungültige Datum bekommt diesen Wert zugewiesen, siehe [Benutzerdefinierte Eigenschaften](./eigenschaften-properties).|
| *[Xtract Table].[PackageSize]*| Entspricht dem Feld *Package Size* in den [Settings](./extraktionseinstellungen) der Table Komponente.|

### Parametrierung mit SSIS Variablen

Liste der Eingabefelder / *Custom Properties*, die die Verwendung von SSIS-Variablen erlauben:

|Feldname|Beschreibung|
|:----|:----|
| *WHERE clause* tab| Erlaubt die Parametrisierung der kompletten WHERE-Bedingung oder Teile der WHERE-Bedingung. Für mehr Informationen, siehe [SSIS-Variablen im WHERE Clause Editor](where-bedingung#ssis-variablen-im-where-clause-editor).|

****
#### Weiterführende Links
- [Extractionseinstellungen](./extraktionseinstellungen) <br>
- [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/tables/xtract-is-Dynamization-of-WHERE-conditions-of-the-XIS-table-components)