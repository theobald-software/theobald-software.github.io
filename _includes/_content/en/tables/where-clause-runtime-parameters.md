
### Runtime Parameters in the WHERE Clause Editor

To create and assign runtime parameters, follow the steps below:

1. In the main window of the component click {% if page.product == "xtract-for-alteryx" %}**[Edit Parameters]**{% else %}**Edit Runtime Parameters**{% endif %}.
The window “Edit Runtime Parameters” opens.<br>
![dd-parameters](/img/content/where-clause-parameter.png){:class="img-responsive"}
2. Click **[Add Scalar]** to define scalar parameters to be used as placeholders for actual values.<br>
{% if page.product == "xtract-for-alteryx" %}Click **[Add List]** to define list parameters that contain multiple values separated by commas e.g., 1,10 or “1”, “10”. <br>{% endif %} The placeholders need to be populated with actual values at extraction runtime.<br>
**Tip:** Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice.
3. Click the drop-down menu (2) and assign one of the following data types to a parameter. <br>
The data types may correlate to SAP data types.
- String: Can be used for any type of SAP selection field.
- Number: Can be used for numeric SAP selection fields.
- Flag: Can only be used for SAP selection fields, which require an ‘X’ (true) or a blank ‘‘ (false) as input value.
4. Click **[OK]** (3) to confirm. 
5. Navigate to the WHERE clause tab in the main window of the extraction and open the WHERE clause editor.
6. Add a new WHERE clause criteria that uses the **[Default with Parameter]** template.
7. Click on the *Parameter* component. A drop-down list that displays all available parameters opens. 
Select a parameter from the list.<br>
![WHERE-Clause-Builder-Example](/img/content/where-clause-param.png){:class="img-responsive"}
8. To test the WHERE clause, click **[Load live Preview]**. Provide parameter values when prompted.

{% if page.product == "xtract-for-alteryx" %}
For more information on how to use runtime parameters in Alteryx, see [Parameterizing](../parameterizing).
{% else %}

{: .box-note }
**Note:** List parameters are not yet available. This feature will be available soon.

{% endif %}
