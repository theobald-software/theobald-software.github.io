

### Custom Properties

Die Eigenschaften der Komponente werden in den *Custom Properties* der Komponente definiert.
Bei der Parametrisierung der Komponente durch SSIS Variablen oder *Expression Properties* werden diese Eigenschaften überschrieben.

Liste der relevanten *Custom Properties*:

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
| *StringConversion* | Siehe [Settings - String Conversion](./report-settings#string-conversion). |
| *UseBatch* | Entspricht dem Feld *Use Batch* in der Report Komponente, siehe [Settings - Use Batch](./report-settings). |
| *Variant* | Siehe [Varianten und Selektionen](./report-variants-and-selections). |

### Parametrierung mit SSIS Variablen

Es gibt 2 Möglichkeiten, SSIS Variablen zu verwenden:
- SSIS Variablen können verwendet werden, um Selektionen zu dynamisieren.<br>
Verfügbare SSIS Variablen werden direkt in den Einstellungen für Selektionen angezeigt, wenn die Parametereingabe aktiv ist (1), siehe [Selektionen bearbeiten](./report-variants-and-selections#selektionen-bearbeiten).<br>
![Selection-via-Variables](/img/content/xis/report_selection_via_variables.png){:class="img-responsive"}
- Um SSIS-Variablen für die Parametrisierung von *Custom Properties* verwenden zu können, fügen Sie in den *Custom Properties* ein @-Symbol vor dem Namen der Variable hinzu.
Beispiel: die Variable *vDate* wird in den *Custom Properties* als *@vDate* hinterlegt.

{: .box-note }
**Hinweis**: Die Xtract Report Komponente unterstützt bei der Parametrisierung durch Variablen alle Datentypen, bis auf *DateTime* und *DBNull*.
Für mehr Informationen über Datentypen von Systemvariablen, siehe [Microsoft-Hilfe: Systemvariablen](https://docs.microsoft.com/de-de/sql/integration-services/system-variables?view=sql-server-ver15).

#### Verfügbare Parameter für SSIS Variablen

Liste der *Custom Properties*, die die Verwendung von SSIS-Variablen erlauben:

|Feldname|Beschreibung|
|:----|:----|
| *Variant*| Siehe [Varianten und Selektionen](./report-variants-and-selections).|
| *Spool Destination / BatchJobDestination* | Entspricht dem Feld *Spool Destination* in der Report Komponente, siehe [Settings - Spool Destination / BatchJobDestination](./report-settings).|
| *BatchJobName*        |Entspricht dem Feld *Batch Job Name* in der Report Komponente, siehe [Settings - BatchJobName](./report-settings).|
| *BatchJobTimeout*     |Entspricht dem Feld *Batch Timeout* in der Report Komponente, siehe [Settings - BatchJobTimeout](./report-settings).|
| *ReportName*        |  *ReportName* sollte nicht als Struktur für Ergebnisse verwendet werden, da der Wert je nach Report stark variiert. |


****
#### Weiterführende Links
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)