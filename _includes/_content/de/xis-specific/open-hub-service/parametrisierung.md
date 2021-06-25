
{% include _content/de/parametrization/parametrization-about.md  %}

### Parameterisierung mit Properties
Die folgenden *Custom Properties* können parametrisiert werden:

|Property|Beschreibung|
|:----|:----|
| *[Xtract OHS].[ConvertsDates]*| Aktiviert oder deaktiviert die Umwandlung von SAP Daten. |
| *[Xtract OHS].[ConvertsTimes]*| Aktiviert oder deaktiviert die Umwandlung von SAP Zeiten. |
| *[Xtract OHS].[InvalidDateReplacement]*| Im Fall unzulässiger Werte für Daten, geben Sie hier einen Standardwert ein. Jedes ungültige Datum bekommt diesen Wert zugewiesen.|
| *[Xtract OHS].[MaxDateReplacement]*| Verwendet den eingegebenen Wert anstelle des SAP Datums 9999XXXX. |
| *[Xtract OHS].[MinDateReplacement]*| Verwendet den eingegebenen Wert anstelle des SAP Datums 00000000.|

### Parametrierung mit SSIS Variablen
Die folgenden Felder und/oder *Custom Properties* der Komponente erlauben die Verwendung von SSIS-Variablen:

|Feldname|Beschreibung|
|:----|:----|
| *Package Size* | Entspricht dem Feld *Package Size* in der OHS Komponente, siehe [Extraktionseinstellungen](./settings#extraction-settings).|
| *Row Limit* | Entspricht dem Feld *Row limit* in der OHS Komponente, siehe [Extraktionseinstellungen](./settings#extraction-settings).|
| *Gateway host* | Entspricht dem Feld *Gateway host* in der OHS Komponente, siehe [Third party tool Settings](./settings#third-party-tool-settings). |
| *Gateway service* | Entspricht dem Feld *Gateway service* in der OHS Komponente, siehe [Third party tool Settings](./settings#third-party-tool-settings).|
| *Program ID* | Entspricht dem Feld *Program ID* in der OHS Komponente, siehe [Third party tool Settings](./settings#third-party-tool-settings).|

****
#### Related Links
- [Ausdrücke für Properties verwenden](../parametrisierung/parametrisierung-properties#ausdrücke-für-properties-verwenden) 
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)
- [How to use SSIS Variables with Xtract Components](../parametrisierung/parametrisierung-variablen) 
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)
