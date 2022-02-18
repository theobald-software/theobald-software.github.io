
{% include _content/en/xis-specific/parameterization/parametrization-about.md  %}

### Custom Properties
The *Custom Properties* define the properties unique to the Xtract BAPI component. <br>
When parameterizing the BAPI component using SSIS variables, the *Custom Porperties* are overwritten.

List of relevant *Custom Properties* of the BAPI component:

|Property|Comment|
|:----|:----|
| *RFCFunctionName* | Name of the BAPI or RFC function module to be extracted.|

### Parameterization using SSIS Variables
The following fields and/or custom properties of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| Imports - *Edit*|Enter an SSIS variable as selection criteria. In case of structures, enter an SSIS variable for each member of a structure, see [Parameters](./parameters).|
| Exports - *Edit*|A BAPI's Export parameters can be written to an SSIS variable or to the SSIS pipeline, see [Parameters](./parameters). Enter an SSIS variable in the respective field of the Export parameter. In case of structures, enter an SSIS variable for each member of a structure.|


****
#### Related Links
- [How to use SSIS Variables with Xtract Components](../parameterization/parameterization-var) 
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)