### Selections and Filters

1. Choose an item in the subsection **Fields** of the main window of the component and click *Edit*.
The window "Edit Selections" opens.<br> 
![ODP Fields](/img/content/odp/odp-fiter.png){:class="img-responsive"}<br>
2. Click **[Add]** to add a new filter criterion.<br>
![ODP Selection With Parameters](/img/content/odp/odp-selection-with-parameters.png){:class="img-responsive"}
3. Select *Include* in the **Sign** column to only include the filtered data to the output. <br>
Select *Exclude* in the **Sign** column to exclude the filtered data from the output.
4. Select an operator in the **Option** column. The operator filters data according to the table below.

   | Operator   |      Meaning      |  
   |:---------|:------------- |
   |(Not)Equal |  True if data is (not)equal to the content of operand 1.|
   |GreaterOrEqual |  True if data is greater than or equal to the content of operand 1.|
   |GreaterThan |  True if data is greater than the content of operand 1.|
   |LessOrEqual | True if data is less than or equal to the content of operand 1.|
   |LessThan | True if data is less than the content of operand 1.|
   |(Not)ContainsPattern | True if data matches (does not match) the pattern in operand 1. Wildcards (\*) are supported, but need to be preceded by at least one letter or number, e.g., PR\* works, \*PR\* does not. |
   |(Not)Between | True if data values do (not) lie between the values of operand 1 and operand 2. |
5. Enter static values or select runtime parameters for filtering. <br>
- Static values: Enter values directly into the **Low** and **High** input fields. 
If runtime parameters are available, make sure that the ![static-value](/img/content/icons/runtime-parameters-static.png) icon is displayed next to the input field.
Clicking on the icon switches between static input values and runtime parameters.
- Runtime Parameters: Click on the ![static-value](/img/content/icons/runtime-parameters-static.png) icon to change the input type to parameters ( ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) icon).
If no icons are displayed, open the [Edit Runtime Parameters](./odp-settings#edit-runtime-parameters) menu and create runtime parameters. <br>
Select a runtime parameter from the drop-down list.
6. Click **[Load live preview]** to check the results of the filters. <br>
If runtime parameters are defined, you are prompted to populate the parameters with actual values.

The number of defined filters is displayed in square brackets next to the *Edit* option.
