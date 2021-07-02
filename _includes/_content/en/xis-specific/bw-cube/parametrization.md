
{% include _content/en/xis-specific/parameterization/parametrization-about.md  %}

### Parameterization using SSIS Variables
The following fields and/or custom properties of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
|*Variables*| Enter an SSIS variable to fill a BEx variable, see [Variables](./variables). <br>For BEx variables of type *Multiple Single* enter a single SSIS variable, set a delimiter for custom property *DelimiterForMultipleSSISVariableValues*, enter multiple single values in the SSIS variable separated by the delimiter. |
|*Member Filter*        |Enter an SSIS variable in the field *variable*. The SSIS variable can be filled with multiple single entries separated by comma.|
|*Extraction Type MDX* |SSIS variables can be used as part of the freehand MDX statement for BEx variables or dimension member filters. |
|*MDXVariable*        |Use *MDXVariable* in combination with *Extraction Type MDX*. Enter an SSIS variable in the MDX textbox and fill the SSIS variable with the complete MDX statement.|

****
#### Related Links
- [How to use SSIS Variables with Xtract Components](../parameterization/parameterization-var) 
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)