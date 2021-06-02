
{% include _content/de/parametrization/parametrization-about.md  %}

### Parameterisierung mit Properties
Die folgenden *Custom Properties* können parametrisiert werden:

|Property|Beschreibung|
|:----|:----|
| *[Xtract Table].[WhereClause]*| Entspricht dem Tab *WHERE clause* in der Table Komponente. Erlaubt die PArametrisierung der kompletten WHERE-Bedingung, siehe [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).|
| *[Xtract Table].[ConvertsDates]*|Siehe [Benutzerdefinierte Eigenschaften - ConvertsDates](./extraktionseinstellungen#benutzerdefinierte-eigenschaften---custom-properties). Erlaubte Werte sind *True* und *False*. |
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