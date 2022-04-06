
### About Query Variables
BW queries have often defined variables to create filter options. Depending on the type of BEx variable (single value, multiple value, interval or complex selection) input fields of the variables are enabled or disabled.

Instead of hard coding values for BEx variables, you can define variables that can be set dynamically at runtime, see [Runtime Parameters](./edit-runtime-parameters).

### To Edit Variables
1. Perform a Query [search](./bw-cube-extraction-define#look-up-a-bw-cube-or-query) and select a Query with defined variables (1).
2. Load a live preview via **[Load Live Preview]** (2). 
![Edit Variables Button](/img/content/XU-BExQuery-Variable.png){:class="img-responsive"}
3. Click **[Edit Variables]** (3). The window "Edit variables for [name of the query]" opens and the fields with available variables are activated. 
![Edit-Variables](/img/content/Edit-Variables.png){:class="img-responsive"}
4. Define the variables using the drop-down list options in the columns **Sign** and **Option**. <br>
The **Sign** specification defines whether the respective selection column is included or excluded in the result. <br>
The **Option** specification defines how the selection column is made. <br>
To edit variables of the types *multiple value* and *complex selection*, click **[Edit]**.
5. If available, click the **[magnifying glass]** symbol next to the fields to display a list of selectable variable values. Example:
![Edit Variables](/img/content/xfa/xfa_query_var.png){:class="img-responsive"}
You can select a value from the list of selectable variable values, enter values manually or assign a [runtime parameter](./edit-runtime-parameter).
6. Click **[OK]** to confirm your input. 
7. Click **[Load Live Preview]** to preview the filtered results.
