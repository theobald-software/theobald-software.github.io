
### About Query Variables
BW queries have often defined variables to create filter options. Depending on the type of BEx variable (single value, multiple value, interval or complex selection) input fields of the variables are enabled or disabled.
Instead of hard coding a value for the BEx variable you can define variables with values that can be set dynamically.
Use the **@** symbol in front of the variable name entered in the input field to mark it as a variable, e.g., *@salesorg*. 

### To Edit Variables
1. Perform a Query [search](./bw-cube-extraction-define#look-up-a-bw-cube-or-query) and select a Query with defined variables (1).
2. Load a live preview (2), if needed. 
![Edit Variables Button](/img/content/XU-BExQuery-Variable.png){:class="img-responsive"}
3. Click **[Edit Variables]** (3). The window "Edit variables for [name of the query]" opens.
4. The fields with available variables are displayed. Define the variables using the drop-down list options in the fields **Sign** and **Option**. Select the range of values, if needed. The logic of complex selection is based on the usual possibilities. The **Sign** specification defines whether the respective selection column is included or excluded.
5. Click the magnifying glass symbol to display the selectable variable values.
![Edit Variables](/img/content/xfa/xfa_query_var.png){:class="img-responsive"}
6. Click **[Ok]** to confirm. 
7. Click **[Load Live Preview]** to preview the filtered results.
