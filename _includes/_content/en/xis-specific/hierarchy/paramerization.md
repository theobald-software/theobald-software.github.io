
{% include _content/en/parametrization/parametrization-about.md  %}

### Parameterization using SSIS Variables
The following fields and/or custom properties of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *HierarchyName* | An SSIS variable can be entered in the component's custom properties. In combination with a for-each-loop container, this allows extracting multiple hierarchies of the same InfoObject. |
| *HierarchyVersion* | An SSIS variable can be entered in the component's custom properties. In combination with a for-each-loop container, this allows extracting multiple hierarchy versions of the same hierarchy. |


****
#### Related Links
- [Parameterization](../parameterization) 
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)
