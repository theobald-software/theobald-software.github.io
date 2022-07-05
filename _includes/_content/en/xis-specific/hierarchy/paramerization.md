### Custom Properties

The *Custom Properties* define the properties unique to the component.
When parameterizing the component using SSIS variables, the *Custom Porperties* are overwritten.

List of relevant *Custom Properties*:

|Property|Comment|
|:----|:----|
| *DateTo* | The default value of Date To is 99991231.|
| *FetchText* | Corresponds to the field *Fetch description texts* in [Settings - Extraction Settings](./settings#extraction-settings).|
| *HierarchyID* | ID of the Hierarchy to be extracted. |
| *HierarchyName* | Name of the Hierarchy to be extracted. |
| *HierarchyVersion* | Version of the Hierarchy to be extracted. |
| *InfoObject* | Corresponds to the field *InfoObject* in [Defining a BW Hierarchy](./hierarchy-lookup#defining-a-bw-hierarchy-extraction). |
| *StringConversion* | See [Settings - String Conversion](./settings#string-conversion). |


{% include _content/en/xis-specific/parameterization/parametrization-via-variables.md  %}

#### Available Parameters für SSIS Variablen
List of input fields that allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *HierarchyName* | An SSIS variable can be entered in the component's custom properties. In combination with a for-each-loop container, this allows extracting multiple hierarchies of the same InfoObject. |
| *HierarchyVersion* | An SSIS variable can be entered in the component's custom properties. In combination with a for-each-loop container, this allows extracting multiple hierarchy versions of the same hierarchy. |



****
#### Related Links
- [Use Property Expressions in Packages](https://docs.microsoft.com/en-us/sql/integration-services/expressions/use-property-expressions-in-packages?view=sql-server-ver15)
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)