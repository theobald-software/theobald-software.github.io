
{% include _content/de/xis-specific/parametrisierung/parametrization-about.md  %}

### Custom Properties

Die Eigenschaften der Xtract OHS Komponente wird in den *Custom Properties* der Komponente definiert. <br>
Bei der Parametrisierung der Komponente durch SSIS Variablen oder Data Flow Properties werden diese Eigenschaften überschrieben.

Liste der relevanten *Custom Properties* der OHS Komponente:

|Property|Beschreibung|
|:----|:----|
| *ConvertsDates* | Wenn diese Eigenschaft auf *True* (Standard) gesetzt wird, nehmen SAP-Datumsfelder (YYYYMMDD) den SSIS-Pipeline-Typ DT_DBDATE an (anstelle von DT_WSTR). Die folgenden Datumskonvertierungen werden bei ungültigen Datumsformaten in SAP-Datumsfeldern angewendet:<br>**InvalidDateReplacement**, **MaxDateReplacement**, **MinDateReplacement**. |
| *ConvertsTimes* | Aktiviert oder deaktiviert die Umwandlung von SAP Zeiten.|
| *InvalidDateReplacement* | Ermöglicht die Ersetzung eines ungültigen Datumsformats. Der Standardwert für diese Eigenschaft ist 1970-01-02. <br> Um die Eigenschaft zu verwenden, geben Sie im Format yyyyy-mm-dd einen Ersatzwert für ungültige SAP-Datumswerte ein, z.B. ‘20190132’ (32. Januar 2019).|
| *MaxDateReplacement* | Ermöglicht das Ersetzen der SAP-Datumswerte mit dem Jahr 9999. Der Standardwert für diese Eigenschaft ist 2099-12-31. <br> Um die Eigenschaft zu verwenden, geben Sie im Format yyyyy-mm-dd einen Ersatzwert für SAP-Datumswerte ein, die das Jahr ‘9999’ enthalten. Beispiel: ‘99990101’ (1. Januar 9999).|
| *MinDateReplacement* | Ermöglicht das Ersetzen der SAP-Datumswerte mit dem Jahr 0000. Der Standardwert für diese Eigenschaft ist 1970-01-01. <br> Um die Eigenschaft zu verwenden, geben Sie im Format yyyyy-mm-dd einen Ersatzwert für SAP-Datumswerte ein, die das Jahr ‘0000’ enthalten. Beispiel: ‘0000000000’.|


### Parameterisierung mit Data Flow Properties
Die folgenden *Custom Properties* können parametrisiert werden:

|Property|Beschreibung|
|:----|:----|
| *[Xtract OHS].[ConvertsDates]*| Aktiviert oder deaktiviert die Umwandlung von SAP Daten, siehe [Custom Properties](#custom-properties). |
| *[Xtract OHS].[ConvertsTimes]*| Aktiviert oder deaktiviert die Umwandlung von SAP Zeiten. |
| *[Xtract OHS].[InvalidDateReplacement]*| Im Fall unzulässiger Werte für Daten, geben Sie hier einen Standardwert ein. Jedes ungültige Datum bekommt diesen Wert zugewiesen, siehe [Custom Properties](#custom-properties).|
| *[Xtract OHS].[MaxDateReplacement]*| Verwendet den eingegebenen Wert anstelle des SAP Datums 9999XXXX, siehe [Custom Properties](#custom-properties). |
| *[Xtract OHS].[MinDateReplacement]*| Verwendet den eingegebenen Wert anstelle des SAP Datums 00000000, siehe [Custom Properties](#custom-properties).|

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
