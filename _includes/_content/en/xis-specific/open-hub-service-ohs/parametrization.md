
{% include _content/en/xis-specific/parameterization/parametrization-about.md  %}

### Custom Properties

The *Custom Properties* define the properties unique to the Xtract OHS component. <br>
When parameterizing the OHS component using SSIS variables or Data Flow Properties, the *Custom Porperties* are overwritten.

List of *Custom Properties* of the OHS component:
|Property|Comment|
|:----|:----|
| *ConvertsDates* | Enable or disable conversion of SAP dates.|
| *ConvertsTimes* | Enable or disable conversion of SAP times.|
| *InvalidDateReplacement* | In case of invalid date values you need to enter a default date value. Every invalid value will be converted into this value.|
| *MaxDateReplacement* | Converts the SAP date 9999XXXX to the entered value.|
| *MinDateReplacement* | Converts the SAP date 00000000 to the entered value.|
| *UserComponentTypeName* | |

### Parameterization using Data Flow Properties
The following *Custom Properties* can be parameterized:

|Property Name|Description|
|:----|:----|
| *[Xtract OHS].[ConvertsDates]*| Enable or disable conversion of SAP dates. |
| *[Xtract OHS].[ConvertsTimes]*| Enable or disable conversion of SAP times. |
| *[Xtract OHS].[InvalidDateReplacement]*| In case of invalid date values you need to enter a default date value. Every invalid value will be converted into this value.|
| *[Xtract OHS].[MaxDateReplacement]*| Converts the SAP date 9999XXXX to the entered value. |
| *[Xtract OHS].[MinDateReplacement]*| Converts the SAP date 00000000 to the entered value.|


### Parameterization using SSIS Variables
The following fields and/or *Custom Properties* of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *Package Size* | Sets the package size in bytes, see [Extraction Settings](./settings#extraction-settings).|
| *Row Limit* | Corresponds to the field *Row limit* in the OHS component, see [Extraction Settings](./settings#extraction-settings).|
| *Gateway host* | Corresponds to the field *Gateway host* in the OHS component, see [Third party tool Settings](./settings#third-party-tool-settings). |
| *Gateway service* | Corresponds to the field *Gateway service* in the OHS component, see [Third party tool Settings](./settings#third-party-tool-settings).|
| *Program ID* | Corresponds to the field *Program ID* in the OHS component, see [Third party tool Settings](./settings#third-party-tool-settings).|

****
#### Related Links
- [How to Use Expressions for Properties](../parameterization/parameterization-prop#how-to-use-expressions-for-properties) 
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)
- [How to use SSIS Variables with Xtract Components](../parameterization/parameterization-var) 
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)

