
{% include _content/en/xis-specific/parameterization/parametrization-about.md  %}

### Custom Properties

The *Custom Properties* define the properties unique to the Xtract Report component. <br>
When parameterizing the Report component using SSIS variables, the *Custom Porperties* are overwritten.

List of relevant *Custom Properties* of the Report component:

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
The following fields and/or *Custom Properties* of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *Variant*|See [Variants and Selections](./variants-and-selections).|
| *Edit*|Enter an SSIS variable as selection criteria, see [Variants and Selections](./variants-and-selections).|
| *Spool Destination / BatchJobDestination* | Corresponds to the field *Spool Destination* in the Report component, see [Settings - Spool Destination / BatchJobDestination](./settings).|
| *BatchJobName*        |Corresponds to the field *Batch Job Name* in the Report component, see [Settings -BatchJobName](./settings).|
| *BatchJobTimeout*     |Corresponds to the field *Batch Timeout* in the Report component, see [Settings - BatchJobTimeout](./settings).|
| *ReportName*        |  Should not be used as the structure of the result as it varies depending on the reports.    |

#### Assigning Variables to Selections 

To dynamically select data, you can use SSIS variables.

1. Create a variable. Make sure the data type of the variable fits the data type of the report field you want to filter.
2. Open the report component and open a selection, see [Edit Selections](./variants-and-selections#edit-selections).<br> 
3. If variables are available, an icon is displayed next to the **Low** and **High** input fields (1). <br>
Click the icons to switch between entering actual input values and entering variables from a drop-down-list.<br>
![Selection-via-Variables](/img/content/xis/report_selection_via_variables.png){:class="img-responsive"}
4. If you have assigned variables as selection filters and click **[Load Preview]** you are prompted to populate the variables with actual values. <br>
![provide values](/img/content/odp/odp-provide-parameter-values.png){:class="img-responsive"}

****
#### Related Links
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)