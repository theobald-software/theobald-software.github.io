
{% include _content/de/xis-specific/parametrisierung/parametrization-about.md  %}

### Custom Properties

Die Eigenschaften der Xtract Table Komponente wird in den *Custom Properties* der Komponente definiert. <br>
Bei der Parametrisierung der Komponente durch SSIS Variablen oder Data Flow Properties werden diese Eigenschaften überschrieben.

Eine Liste der *Custom Properties* der Table-Komponente finden Sie unter [Benutzerdefinierte Eigenschaften](./eigenschaften-properties).

### Parameterisierung mit Data Flow Properties
Die folgenden *Custom Properties* können parametrisiert werden:

|Property|Beschreibung|
|:----|:----|
| *[Xtract Table].[WhereClause]*| Entspricht dem Tab *WHERE clause* in der Table Komponente. Erlaubt die PArametrisierung der kompletten WHERE-Bedingung, siehe [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).|
| *[Xtract Table].[ConvertsDates]*|Aktiviert oder deaktiviert die Umwandlung von SAP Daten, siehe [Benutzerdefinierte Eigenschaften](./eigenschaften-properties). |
| *[Xtract Table].[CustomFunctionName]*| Entspricht dem Drop-down-Menü *Function Module* in den [Settings](./extraktionseinstellungen) der Table Komponente.|
| *[Xtract Table].[MaxRows]*| Entspricht dem Feld *Row Limit* in den [Settings](./extraktionseinstellungen) der Table Komponente.|
| *[Xtract Table].[MinDateReplacement]*|Verwendet den eingegebenen Wert anstelle des SAP Datums 00000000, siehe [Benutzerdefinierte Eigenschaften](./eigenschaften-properties).|
| *[Xtract Table].[MaxDateReplacement]*|Verwendet den eingegebenen Wert anstelle des SAP Datums 9999XXXX, siehe [Benutzerdefinierte Eigenschaften](./eigenschaften-properties).|
| *[Xtract Table].[InvalidDateReplacement]*|Im Fall unzulässiger Werte für Daten, geben Sie hier einen Standardwert ein. Jedes ungültige Datum bekommt diesen Wert zugewiesen, siehe [Benutzerdefinierte Eigenschaften](./eigenschaften-properties).|
| *[Xtract Table].[PackageSize]*| Entspricht dem Feld *Package Size* in den [Settings](./extraktionseinstellungen) der Table Komponente.|

### Parametrierung mit SSIS Variablen
Die folgenden Felder und/oder *Custom Properties* der Komponente erlauben die Verwendung von SSIS-Variablen:

|Feldname|Beschreibung|
|:----|:----|
| *WHERE clause* tab| Erlaubt die Parametrisierung der kompletten WHERE-BEdingung oder Teile der WHERE-Bedingung. Für mehr Informationen, siehe [SSIS-Variablen im WHERE Clause Editor](where-bedingung#ssis-variablen-im-where-clause-editor).|

****
#### Weiterführende Links
- [Extractionseinstellungen](./extraktionseinstellungen) <br>
- [Parametrisierung](../parametrisierung) <br>
- [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)