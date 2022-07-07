### Parameterizing Using SSIS Variables

SSIS variables store values that an SQL Server Integration Services package and its containers, tasks, and event handlers can use at run time.<br>
To use SSIS variables for parameterization of Xtract components, place an @-symbol before the variable name.

The following example shows how an SSIS variable named *@vDate* is used as a parameter in an Xtract component:

1. Choose an input field that supports SSIS variables.<br>
2. Instead of entering a fixed a value, enter an SSIS variable using the @-notation (1).
3. Open the SSIS variables window and add an SSIS variable with the same name, but without the @-symbol (2).<br>
![Variables](/img/content/xis/xis_vars.png){:class="img-reagierend"}
5. Make sure to select the correct data type.
6. Use the variable by entering values directly into the *Value* field or by assigning dynamic values in SSIS. <br>

