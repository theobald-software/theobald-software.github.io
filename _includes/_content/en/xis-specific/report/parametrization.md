
{% include _content/en/xis-specific/parameterization/parametrization-about.md  %}

### Custom Properties

The *Custom Properties* define the properties unique to the Xtract Report component. <br>
When parameterizing the Report component using SSIS variables, the *Custom Porperties* are overwritten.

List of *Custom Properties* of the Report component:

|Property|Comment|
|:----|:----|
| *BatchJobDestination* | See [Settings - Spool Destination / BatchJobDestination](./settings). |
| *BatchJobName* | See [Settings -BatchJobName](./settings). |
| *BatchJobTimeout* | See [Settings - BatchJobTimeout](./settings).|
| *InternalXML* | |
| *ReportName* | Name of the report that is to be extracted.|
| *ReportRowsPerDataRow* | See [Defining Report Columns](./report-columns-define). |
| *ReportWidth* | See [Defining Report Columns](./report-columns-define). |
| *Reserved* | |
| *SkipBottomRows* | See [Defining Report Columns](./report-columns-define). |
| *SkipTopRows* | See [Defining Report Columns](./report-columns-define). |
| *StringConversion* | See [Settings - String Conversion](./report-settings). |
| *UseBatch* | Siehe [Settings - Use Batch](./settings). |
| *UserComponentTypeName* | |
| *Variant* | See [Variants and Selections](./variants-and-selections).|

### Parameterization using SSIS Variables
The following fields and/or *Custom Properties* of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *Variant*|See [Variants and Selections](./variants-and-selections).|
| *Edit*|Enter an SSIS variable as selection criteria, see [Variants and Selections](./variants-and-selections).|
| *Spool Destination / BatchJobDestination* | See [Settings - Spool Destination / BatchJobDestination](./settings).|
| *BatchJobName*        |See [Settings -BatchJobName](./settings).|
| *BatchJobTimeout*     |See [Settings - BatchJobTimeout](./settings).|
| *ReportName*        |  Should not be used as the structure of the result as it varies depending on the reports.    |

****
#### Related Links
- [How to use SSIS Variables with Xtract Components](../parameterization/parameterization-var) 
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)