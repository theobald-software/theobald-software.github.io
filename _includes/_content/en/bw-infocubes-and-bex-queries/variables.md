
BW queries often have defined variables to create filter options. 
Depending on the type of BEx variable (single value, multiple value, interval or complex selection) input fields of the variables are enabled or disabled.

Instead of hard coding values for BEx variables, you can define variables that can be set dynamically at runtime, see [Runtime Parameters](./edit-runtime-parameters).

### Edit Variables


1. [Look up](./bw-cube-extraction-define#look-up-a-bw-cube-or-query) a Query with defined variables (1).<br> 
{% if page.product == "xtract-for-alteryx" %}![Edit Variables Button](/img/content/xfa/xfa_variables.png){:class="img-responsive"}{% else %}![Edit Variables Button](/img/content/XU-BExQuery-Variable.png){:class="img-responsive"}{% endif %}
2. Click **[Edit Variables]** (2). The window "Edit variables for [name of the query]" opens.  
3. Select a field that uses variables from the drop-down menu (3).<br>
![selections](/img/content/selections-cube.png){:class="img-responsive"}
4. Add one or more of the following filter types:<br>
a) Click **[Single]** to compare the data to a single specified value.<br>
b) Click **[Range]** to check if the data is (not) withing a specified range of values.<br>{% if page.product != "xtract-is" %}c) Click **[List]** to check if the data is (not) part of a specified list of values. {% endif %}
5. In the **Sign** column (4), select *Include* to add the filtered data to the output or select *Exclude* to remove the filtered data from the output.
6. Select an operator in the **Option** column (5). The operator filters data according to the table below.

   | Operator   |      Meaning      |  
   |:---------|:------------- |
   |(not) equal to |  True if data is (not)equal to the content of operand 1.|
   |at least |  True if data is greater than or equal to the content of operand 1.|
   |more than |  True if data is greater than the content of operand 1.|
   |at most | True if data is less than or equal to the content of operand 1.|
   |less than | True if data is less than the content of operand 1.|
   |(not) between | True if data values do (not) lie between the values of operand 1 and operand 2. |
7. Enter values directly into the **Low** and **High** input fields or assign {% if page.product == "xtract-is"%}SSIS variables{% else %}[runtime parameters](./edit-runtime-parameters){% endif %} to the selection (6). <br>
a) Static values: Enter values directly into the **Low** and **High** input fields. 
If {% if page.product == "xtract-is"%}SSIS variables{% else %}runtime parameters{% endif %} are available, make sure that the ![static-value](/img/content/icons/runtime-parameters-static.png) icon is displayed next to the input field.
Clicking on the icon switches between static and dynamic input values.<br>
b) {% if page.product == "xtract-is"%}SSIS variables:{% else %}Runtime parameters:{% endif %} Click ![static-value](/img/content/icons/runtime-parameters-static.png) to change the input type to dynamic values ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png).
Select an existing {% if page.product == "xtract-is"%}SSIS variable{% else %}runtime parameter{% endif %} from the drop-down list.<br>
c) Pre-defined values: If available, click ![magnifying-glass](/img/content/icons/magnifying-glass.png) next to the input field to display a list of pre-defined values from SAP. Example:<br>
![Edit Variables](/img/content/xfa/xfa_query_var.png){:class="img-responsive"}
8. Click **[OK]** to confirm your input.
9. Click **[Load Preview]** in the main window of the component to check the result of your selection. <br>
If {% if page.product == "xtract-is"%}SSIS variables{% else %}runtime parameters{% endif %} are defined, you are prompted to populate the parameters with actual values.
