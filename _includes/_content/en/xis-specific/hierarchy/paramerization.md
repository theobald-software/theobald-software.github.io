
{% include _content/en/xis-specific/parameterization/parametrization-about.md  %}

### Custom Properties
The *Custom Properties* define the properties unique to the Xtract BW Hierarchy component. <br>
When parameterizing the BW Hierarchy component using SSIS variables, the *Custom Porperties* are overwritten.

List of *Custom Properties* of the BW Hierarchy component:

|Property|Comment|
|:----|:----|
| *DateTo* | The default value of Date To is 99991231.|
| *FetchText* | Corresponds to the field *Fetch description texts* in [Settings - Extraction Settings](./settings#extraction-settings).|
| *HierarchyID* | ID of the Hierarchy to be extracted. |
| *HierarchyName* | Name of the Hierarchy to be extracted. |
| *HierarchyVersion* | Version of the Hierarchy to be extracted. |
| *InfoObject* | Corresponds to the field *InfoObject* in [Defining a BW Hierarchy](./hierarchy-lookup#defining-a-bw-hierarchy-extraction). |
| *InternalXML* | |
| *StringConversion* | See [Settings - String Conversion](./settings#string-conversion). |
| *UseComponentTypeName* | |

### Parameterization using SSIS Variables
The following fields and/or *Custom Properties* of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *HierarchyName* | An SSIS variable can be entered in the component's custom properties. In combination with a for-each-loop container, this allows extracting multiple hierarchies of the same InfoObject. |
| *HierarchyVersion* | An SSIS variable can be entered in the component's custom properties. In combination with a for-each-loop container, this allows extracting multiple hierarchy versions of the same hierarchy. |


****
#### Related Links
- [Parameterization](../parameterization) 
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)
