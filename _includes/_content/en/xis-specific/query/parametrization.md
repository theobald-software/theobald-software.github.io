
{% include _content/en/xis-specific/parameterization/parametrization-about.md  %}

### Custom Properties
The *Custom Properties* define the properties unique to the Xtract Query component. <br>
When parameterizing the Query component using SSIS variables, the *Custom Porperties* are overwritten.

List of *Custom Properties* of the Query component:

|Property|Comment|
|:----|:----|
| *InternalXML* | |
| *MaxRows* | Corresponds to the field *MaxRows* in [Settings](./settings) of the Query component.|
| *QueryDescription* | Description of the Query to be extracted.|
| *QueryName* | Name of the Query to be extracted.|
| *Reserved* | |
| *StringConversion* | Corresponds to the [Settings](./settings) of the Query component.|
| *UserGroup* | Name of the User Group where the Query is located.|
| *Variant* | Corresponds to the field *Use Variant Variable* in the [Settings](./settings) of the Query component. |
| *VariantDescription* | Description of the Variant.|
| *WorkSpace* | |

### Parameterization using SSIS Variables
The following fields and/or *Custom Properties* of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *Variant* | In the Xtract Query component, go to [Settings](./settings) and activate the check box *Use Variant Variable*. <br>This allows using an SSIS variable for the field *Variant*. |

****
#### Related Links
- [How to use SSIS Variables with Xtract Components](../parameterization/parameterization-var) 
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)