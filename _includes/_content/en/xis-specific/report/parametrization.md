### Custom Properties

Die Eigenschaften der Komponente werden in den *Custom Properties* der Komponente definiert.
Bei der Parametrisierung der Komponente durch SSIS Variablen werden diese Eigenschaften überschrieben.

Liste der relevanten *Custom Properties*:


|Property|Comment|
|:----|:----|
| *BatchJobDestination* | Corresponds to the field *Spool Destination* in the Report component, see [Settings - Spool Destination / BatchJobDestination](./settings). |
| *BatchJobName* | Corresponds to the field *Batch Job Name* in the Report component, see [Settings -BatchJobName](./settings). |
| *BatchJobTimeout* | Corresponds to the field *Batch Timeout* in the Report component, see [Settings - BatchJobTimeout](./settings).|
| *DynamicColumnWidthsAndOffsets* | Corresponds to the field *Dynamic Column Widths and Offsets* in the Report component. If your report has varying column widths, set *Dynamic column widths and offsets* to true. The column widths and offsets are then adjusted dynamically at report runtime.|
| *ReportRowsPerDataRow* | Corresponds to the field *Report Rows Per Data Row* in the Report component, see [Defining Report Columns](./report-columns-define). |
| *ReportWidth* | Corresponds to the field *Report Width* in the Report component, see [Defining Report Columns](./report-columns-define). |
| *SkipBottomRows* | Corresponds to the field *Skip Rows Bottom* in the Report component, see [Defining Report Columns](./report-columns-define). |
| *SkipTopRows* | Corresponds to the field *Skip Rows Top* in the Report component, see [Defining Report Columns](./report-columns-define). |
| *UseBatch* | Corresponds to the field *Use Batch* in the Report component, see [Settings - Use Batch](./settings). |
| *Variant* | See [Variants and Selections](./variants-and-selections).|

{% include _content/en/xis-specific/parameterization/parameterization-prop.md  %}

#### Available Data Flow Properties
List of *Data Flow Properties* that can be parameterized:

|Property|Comment|
|:----|:----|
| *[Xtract Report].[Variant]*|See [Variants and Selections](./variants-and-selections).|
| *[Xtract Report].[BatchJobDestination]* | Corresponds to the field *Spool Destination* in the Report component, see [Settings - Spool Destination / BatchJobDestination](./settings).|
| *[Xtract Report].[BatchJobName]*        |Corresponds to the field *Batch Job Name* in the Report component, see [Settings -BatchJobName](./settings).|
| *[Xtract Report].[BatchJobTimeout]*     |Corresponds to the field *Batch Timeout* in the Report component, see [Settings - BatchJobTimeout](./settings).|


### Parameterization using SSIS Variables

You can use SSIS variables for selections.<br>
Available SSIS variables are listed in the selection settings when parameter input is active (1), see [Edit Selections](./variants-and-selections#edit-selections).<br> 
![Selection-via-Variables](/img/content/xis/report_selection_via_variables.png){:class="img-responsive"}

{: .box-note }
**Note**: The Xtract Report component does not support variables of the data types *DateTime* and *DBNull*. 
For more information on the data types of system variables, see [Microsoft Help: System Variables](https://docs.microsoft.com/en-us/sql/integration-services/system-variables?view=sql-server-ver15).



****
#### Related Links
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)