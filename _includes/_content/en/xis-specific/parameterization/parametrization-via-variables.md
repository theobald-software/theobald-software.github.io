### Parameterizing Using SSIS Variables

SSIS variables store values that an SQL Server Integration Services package and its containers, tasks, and event handlers can use at run time.<br>
To use SSIS variables for parameterization of Xtract components, place an @-symbol before the variable name.


The following example shows how an SSIS variable named *@vMONTH* is used as a parameter for a BEx variable in the BW Cube component:

1. Open *Variables* (1) in the main window of the component. The window "Edit BW Query Cube Variables" opens.<br>
2. Instead of entering a fixed a value for *Calendar Month/Year*, enter an SSIS variable using the @-notation (2).<br>
3. Confirm you input with **[OK]** and close the component.
4. Open the SSIS variables window and add an SSIS variable with the same name, but without the @-symbol (3).
![Variables](/img/content/xis/xis_vars.png){:class="img-reagierend"}
5. Make sure to select the correct data type. In this case set the data type to *String*.
6. Use the variable by entering values directly into the *Value* field or by assigning dynamic values in SSIS. <br>

