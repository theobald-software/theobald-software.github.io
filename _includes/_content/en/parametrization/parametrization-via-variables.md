
It is possible to use SSIS variables for parameterization. To use variables, place an @ symbol before a variable name.

The following example shows usage of an SSIS variable named @vMONTH as a parameter for a BEx variable in the BW Cube component.
1. Within the main window of the component, choose [**Variables**] (1). The BEx variable editing window opens (2).
2. Instead of hardcoding a value for *Calendar Month/Year*, we enter an SSIS variable using the @-notation.
3. Open the SSIS variables window and define an SSIS variable with the same name, leavig out the @-symbol. Fill that variable by entering a value in the *Value* field or through any other way in SSIS.
![Properties](/img/content/xis/xis_vars.png){:class="img-reagierend"}



