
{% include _content/de/xis-specific/parametrisierung/parametrization-about.md  %}

### Custom Properties

Die Eigenschaften der Xtract Table Komponente wird in den *Custom Properties* der Komponente definiert. <br>
Bei der Parametrisierung der Komponente durch SSIS Variablen oder Data Flow Properties werden diese Eigenschaften überschrieben.

Liste der relevanten *Custom Properties* der Table-Komponente:

|Property|Beschreibung|
|:----|:----|
| *ColumnNameStyle* | Definiert den Spaltennamen. Erlaubte Werte sind: Code, PrefixedCode, CodeAndText und TextAndCode, wobei "Code" für den technischen Spaltennamen aus SAP und "Text" für die Beschreibung der Spalte aus SAP steht.|
| *ConvertsDates* | Aktiviert oder deaktiviert die Umwandlung von SAP Daten. |
| *CustomFunctionName* | Entspricht dem Drop-down-Menü *Function Module* in den [Settings](./extraktionseinstellungen) der Table Komponente.|
| *InvalidDateReplacement* | Im Fall unzulässiger Werte für Daten, geben Sie hier einen Standardwert ein. Jedes ungültige Datum bekommt diesen Wert zugewiesen.|
| *MaxDateReplacement* | Verwendet den eingegebenen Wert anstelle des SAP Datums 9999XXXX.|
| *MaxRows* | Entspricht dem Feld *Row Limit* in den [Settings](./extraktionseinstellungen) der Table Komponente.|
| *MinDateReplacement* | Verwendet den eingegebenen Wert anstelle des SAP Datums 00000000.|
| *OrderBy* | Definiert, welches Tabellenfeld als Kriterium für die Sortierung des Ergebnisses verwendet wird.|
| *PackageSize*| Entspricht dem Feld *Package Size* in den [Settings](./extraktionseinstellungen) der Table Komponente.|
| *UseWideStrings* | Definiert, ob DT_WSTR / DT_NTEXT (true) oder DT_STR / DT_TEXT (false) als Datentyp für String-Spalten verwendet wird.|
| *WhereClause* | Entspricht dem Tab *WHERE clause* in der Table Komponente. Erlaubt die PArametrisierung der kompletten WHERE-Bedingung, siehe [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).|

### Parameterisierung mit Data Flow Properties
Die folgenden *Custom Properties* können parametrisiert werden:

|Property|Beschreibung|
|:----|:----|
| *[Xtract Table].[WhereClause]*| Entspricht dem Tab *WHERE clause* in der Table Komponente. Erlaubt die PArametrisierung der kompletten WHERE-Bedingung, siehe [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).|
| *[Xtract Table].[ConvertsDates]*|Aktiviert oder deaktiviert die Umwandlung von SAP Daten. |
| *[Xtract Table].[CustomFunctionName]*| Entspricht dem Drop-down-Menü *Function Module* in den [Settings](./extraktionseinstellungen) der Table Komponente.|
| *[Xtract Table].[MaxRows]*| Entspricht dem Feld *Row Limit* in den [Settings](./extraktionseinstellungen) der Table Komponente.|
| *[Xtract Table].[MinDateReplacement]*|Verwendet den eingegebenen Wert anstelle des SAP Datums 00000000.|
| *[Xtract Table].[MaxDateReplacement]*|Verwendet den eingegebenen Wert anstelle des SAP Datums 9999XXXX.|
| *[Xtract Table].[InvalidDateReplacement]*|Im Fall unzulässiger Werte für Daten, geben Sie hier einen Standardwert ein. Jedes ungültige Datum bekommt diesen Wert zugewiesen.|
| *[Xtract Table].[PackageSize]*| Entspricht dem Feld *Package Size* in den [Settings](./extraktionseinstellungen) der Table Komponente.|

### Parametrierung mit SSIS Variablen
Die folgenden Felder und/oder *Custom Properties* der Komponente erlauben die Verwendung von SSIS-Variablen:

|Feldname|Beschreibung|
|:----|:----|
| *WHERE clause* tab| Erlaubt die Parametrisierung der kompletten WHERE-BEdingung oder Teile der WHERE-Bedingung. Beispiel: AEDAT > @v_aedat|

****
#### Weiterführende Links
- [Extractionseinstellungen](./extraktionseinstellungen) <br>
- [Parametrisierung](../parametrisierung) <br>
- [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)