---
ref: xi-report-06
layout: page
title: Parameterization
description: Parameterization
product: xtract-is
parent: report
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=report-settings
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract IS.<br>
Make sure to use the documentation within the new [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).


### Custom Properties

The component properties are defined in the *Custom Properties*.
When parametrizing the component using the SSIS variables the custom properties are overwritten. 

List of the relevant *Custom Properties*:


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
- [Microsoft Dokumentation: Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)
- [Microsoft Documentation: Use Property Expressions in Packages](https://learn.microsoft.com/en-us/sql/integration-services/expressions/use-property-expressions-in-packages)
