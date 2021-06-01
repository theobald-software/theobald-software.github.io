
{% include _content/en/parametrization/parametrization-about.md  %}

### Parameterization using SSIS Variables
The following fields and/or custom properties of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *Variant*|See [Variants and Selections](./variants-and-selections).|
| *Edit*|Enter an SSIS variable as selection criteria, see [Variants and Selections](./variants-and-selections).|
|*Spool Destination / BatchJobDestination* | See [Settings - Spool Destination / BatchJobDestination](./settings).|
|*BatchJobName*        |See [Settings -BatchJobName](./settings).|
|*BatchJobTimeout*     |See [Settings - BatchJobTimeout](./settings).|
|*ReportName*        |  Should not be used as the structure of the result as it varies depending on the reports.    |

****
#### Related Links
- [How to use SSIS Variables with Xtract Components](../parameterization/parameterization-var) 
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)