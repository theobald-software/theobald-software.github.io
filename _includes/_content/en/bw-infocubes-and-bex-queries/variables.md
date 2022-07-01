
### About Query Variables
BW queries have often defined variables to create filter options. Depending on the type of BEx variable (single value, multiple value, interval or complex selection) input fields of the variables are enabled or disabled.

Instead of hard coding values for BEx variables, you can define variables that can be set dynamically at runtime, see [Runtime Parameters](./edit-runtime-parameters).

### To Edit Variables
1. Perform a Query [search](./bw-cube-extraction-define#look-up-a-bw-cube-or-query) and select a Query with defined variables (1).
2. Load a live preview via **[Load Live Preview]** (2). 
![Edit Variables Button](/img/content/XU-BExQuery-Variable.png){:class="img-responsive"}
3. Click **[Edit Variables]** (3). The window "Edit variables for [name of the query]" opens and the fields with available variables are activated. 
![Edit-Variables](/img/content/Edit-Variables.png){:class="img-responsive"}
4. Select *Include* in the **Sign** column to only include the filtered data to the output. <br>
Select *Exclude* in the **Sign** column to exclude the filtered data from the output.
5. Select an operator in the **Option** column. The operator filters data according to the table below.

   | Operator   |      Meaning      |  
   |:---------|:------------- |
   |(Not)Equal |  True if data is (not)equal to the content of operand 1.|
   |GreaterOrEqual |  True if data is greater than or equal to the content of operand 1.|
   |GreaterThan |  True if data is greater than the content of operand 1.|
   |LessOrEqual | True if data is less than or equal to the content of operand 1.|
   |LessThan | True if data is less than the content of operand 1.|
   |(Not)Between | True if data lies (not) between the values of operand 1 and operand 2. |
   |In | True if data is part of the content of operand 1. This operator is only available for *List* parameters.|
6. Enter static values or select runtime parameters for filtering. 
Clicking on the icon next to the input field switches between static input values and runtime parameters.<br>
- Selection list ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon): Select a value from a list of available values.
- Static values ( ![static-value](/img/content/icons/runtime-parameters-static.png) icon or no icon): Enter values directly into the **Low** and **High** input fields. 
- Runtime Parameters ( ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) icon):
Select a runtime parameter from the drop-down list.
If no parameter icon is displayed and no drop-down list is available, open the [Edit Runtime Parameters](./bw-cube-settings#edit-runtime-parameters) menu and create runtime parameters. <br>
7. Click **[OK]** to confirm your input.
8. Click **[Load live preview]** in the main window of the component to check the results of the filters. <br>
If runtime parameters are defined, you are prompted to populate the parameters with actual values.
