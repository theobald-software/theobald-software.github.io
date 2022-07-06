### Custom Properties

Die Eigenschaften der Komponente werden in den *Custom Properties* der Komponente definiert.
Bei der Parametrisierung der Komponente durch SSIS Variablen werden diese Eigenschaften überschrieben.

Liste der relevanten *Custom Properties*:


|Property|Comment|
|:----|:----|
| *BatchJobDestination* | Corresponds to the field *Spool Destination* in the Report component, see [Settings - Spool Destination / BatchJobDestination](./settings). |
| *BatchJobName* | Corresponds to the field *Batch Job Name* in the Report component, see [Settings -BatchJobName](./settings). |
| *BatchJobTimeout* | Corresponds to the field *Batch Timeout* in the Report component, see [Settings - BatchJobTimeout](./settings).|
| *ReportName* | Name of the report that is to be extracted.|
| *ReportRowsPerDataRow* | Corresponds to the field *Report Rows Per Data Row* in the Report component, see [Defining Report Columns](./report-columns-define). |
| *ReportWidth* | Corresponds to the field *Report Width* in the Report component, see [Defining Report Columns](./report-columns-define). |
| *SkipBottomRows* | Corresponds to the field *Skip Rows Bottom* in the Report component, see [Defining Report Columns](./report-columns-define). |
| *SkipTopRows* | Corresponds to the field *Skip Rows Top* in the Report component, see [Defining Report Columns](./report-columns-define). |
| *StringConversion* | See [Settings - String Conversion](./settings). |
| *UseBatch* | Corresponds to the field *Use Batch* in the Report component, see [Settings - Use Batch](./settings). |
| *Variant* | See [Variants and Selections](./variants-and-selections).|


### Parameterization using SSIS Variables

You can use SSIS variables for selections.<br>
Available SSIS variables are listed in the selection settings when parameter input is active (1), see [Edit Selections](./variants-and-selections#edit-selections).<br> 
![Selection-via-Variables](/img/content/xis/report_selection_via_variables.png){:class="img-responsive"}

To use SSIS variables for parameterizing *Custom Properties*, place an @-symbol before the variable name.
Example: the variable *vDate* is assignes to a *Custom Property* as *@vDate*.

{: .box-note }
**Note**: The Xtract Report component does not support variables of the data types *DateTime* and *DBNull*. 
For more information on the data types of system variables, see [Microsoft Help: System Variables](https://docs.microsoft.com/en-us/sql/integration-services/system-variables?view=sql-server-ver15).

#### Available Parameters for SSIS Variables
List of input fields / *Custom Properties* that allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *Variant*|See [Variants and Selections](./variants-and-selections).|
| *Edit*|Enter an SSIS variable as selection criteria, see [Variants and Selections](./variants-and-selections).|
| *Spool Destination / BatchJobDestination* | Corresponds to the field *Spool Destination* in the Report component, see [Settings - Spool Destination / BatchJobDestination](./settings).|
| *BatchJobName*        |Corresponds to the field *Batch Job Name* in the Report component, see [Settings -BatchJobName](./settings).|
| *BatchJobTimeout*     |Corresponds to the field *Batch Timeout* in the Report component, see [Settings - BatchJobTimeout](./settings).|
| *ReportName*        |  Should not be used as the structure of the result as it varies depending on the reports.    |


****
#### Related Links
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)