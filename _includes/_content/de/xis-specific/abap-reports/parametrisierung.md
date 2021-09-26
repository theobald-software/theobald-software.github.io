
{% include _content/de/xis-specific/parametrisierung/parametrization-about.md  %}

### Custom Properties

Die Eigenschaften der Xtract Report Komponente wird in den *Custom Properties* der Komponente definiert. <br>
Bei der Parametrisierung der Komponente durch SSIS Variablen werden diese Eigenschaften überschrieben.

Liste der relevanten *Custom Properties* der Report-Komponente:

|Property|Beschreibung|
|:----|:----|
| *BatchJobDestination* | Entspricht dem Feld *Spool Destination* in der Report Komponente, siehe [Settings - Spool Destination / BatchJobDestination](./report-settings). |
| *BatchJobName* | Entspricht dem Feld *Batch Job Name* in der Report Komponente, siehe [Settings - BatchJobName](./report-settings). |
| *BatchJobTimeout* | Entspricht dem Feld *Batch Timeout* in der Report Komponente, siehe [Settings - BatchJobTimeout](./report-settings).|
| *ReportName* | Name des zu extrahierenden Reports.|
| *ReportRowsPerDataRow* | Entspricht dem Feld *Report Rows Per Data Row* in der Report Komponente, siehe [Report-Spalten definieren](./report-columns-define). |
| *ReportWidth* | Entspricht dem Feld *Report Width* in der Report Komponente, siehe [Report-Spalten definieren](./report-columns-define). |
| *SkipBottomRows* | Entspricht dem Feld *Skip Rows Bottom* in der Report Komponente, siehe [Report-Spalten definieren](./report-columns-define). |
| *SkipTopRows* | Entspricht dem Feld *Skip Rows Top* in der Report Komponente, siehe [Report-Spalten definieren](./report-columns-define). |
| *StringConversion* | Siehe [Settings - String Conversion](.//report-settings#string-conversion). |
| *UseBatch* | Entspricht dem Feld *Use Batch* in der Report Komponente, siehe [Settings - Use Batch](./report-settings). |
| *Variant* | Siehe [Varianten und Selektionen](./report-variants-and-selections). |

### Parametrierung mit SSIS Variablen
Die folgenden Felder und/oder *Custom Properties* der Komponente erlauben die Verwendung von SSIS-Variablen:

|Feldname|Beschreibung|
|:----|:----|
| *Variant*| Siehe [Varianten und Selektionen](./report-variants-and-selections).|
| *Edit*| Geben Sie eine SSIS-Variable als Auswahlkriterium ein, siehe [Varianten und Selektionen](./report-variants-and-selections).|
| *Spool Destination / BatchJobDestination* | Entspricht dem Feld *Spool Destination* in der Report Komponente, siehe [Settings - Spool Destination / BatchJobDestination](./report-settings).|
| *BatchJobName*        |Entspricht dem Feld *Batch Job Name* in der Report Komponente, siehe [Settings - BatchJobName](./report-settings).|
| *BatchJobTimeout*     |Entspricht dem Feld *Batch Timeout* in der Report Komponente, siehe [Settings - BatchJobTimeout](./report-settings).|
| *ReportName*        |  *ReportName* sollte nicht als Struktur für Ergebnisse verwendet werden, da der Wert je nach Report stark variiert. |


****
#### Weiterführende Links
- [SSIS Variablen mit Xtract Komponenten verwenden](../parametrisierung/parametrisierung-variablen) 
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)