
{% include _content/en/xis-specific/parameterization/parametrization-about.md  %}

### Custom Properties
The *Custom Properties* define the properties unique to the Xtract ODP component. <br>
When parameterizing the ODP component using SSIS variables or Data Flow Properties, the *Custom Porperties* are overwritten.

List of relevant *Custom Properties* of the ODP component:

|Property|Comment|
|:----|:----|
| *ConvertsDates* | Enable or disable conversion of SAP dates.|
| *ExtractDataOnDeltaInit* | Runs a delta initialization with or without extracting data on init, see [Update Mode](./odp-define#update-mode).|
| *HierarchyName* | Applies to Hierarchy DataSources only, see [Select Hierarchy](./odp-extractors#hierarchies).|
| *InvalidDateReplacement* | In case of invalid date values you need to enter a default date value. Every invalid value will be converted into this value.|
| *MaxDateReplacement* | Converts the SAP date 9999XXXX to the entered value.|
| *MinDateReplacement* | Converts the SAP date 00000000 to the entered value.|
| *PackageSize* | Sets the package size in bytes, see [Advanced Settings](./odp-settings#advanced-settings).|
| *SubscriptionSuffix* | Adds a suffix to the ODP subscription generated by the ODP component.|
| *UpdateMode* | Allows setting the update mode of an extraction. Permitted values are: (F)ull, (D)elta and (R)ecovery, see [Update Mode](./odp-define#update-mode).|


### Parameterization using Data Flow Properties
The following *Custom Properties* can be parameterized:

|Property Name|Description|
|:----|:----|
| *[Xtract ODP].[SubscriptionSuffix]*| Adds a suffix to the ODP subscription generated by the ODP component. This allows using an SSIS package in two different SSIS environments, e.g. QA and PROD. accessing the same SAP system. The suffix allows generating a subscriber for each SSIS environment from the same ODP component.|
| *[Xtract ODP].[UpdateMode]*|Allows setting the update mode of an extraction. Permitted values are: (F)ull, (D)elta and (R)ecovery, see [Update Mode](./odp-define#update-mode).|
| *[Xtract.ODP].[ExtractDataOnDeltaInit]*| Runs a delta initialization with or without extracting data on init, see [Update Mode](./odp-define#update-mode).|
| *[Xtract.ODP].[HierarchyName]*| Applies to Hierarchy DataSources only. Allows setting the name of the extracted hierarchy, see [Select Hierarchy](./odp-extractors#hierarchies). Example: Loop over a list of hierarchies.  |
| *[Xtract.ODP].[PackageSize]*| Sets the package size in bytes, see [Advanced Settings](./odp-settings#advanced-settings). |
| *[Xtract.ODP].[ &lt;Selection Parameter &gt;]*| Selection parameters that are defined in the component are exposed as properties, see [Edit Parameters](./odp-settings#edit-parameters). |

### Parameterization using SSIS Variables
The following fields and/or *Custom Properties* of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *Edit*|Enter an SSIS variable as selection criteria, see [Selections and Filters](./odp-define#selections-and-filters).|
| *Package Size*| Sets the package size in bytes, see [Advanced Settings](./odp-settings#advanced-settings). |


****
#### Related Links
- [How to Use Expressions for Properties](../parameterization/parameterization-prop#how-to-use-expressions-for-properties) 
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)
- [How to use SSIS Variables with Xtract Components](../parameterization/parameterization-var) 
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)