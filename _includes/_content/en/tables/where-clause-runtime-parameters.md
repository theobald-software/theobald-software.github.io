
### Runtime Parameters in the WHERE Clause Editor

To create and assign runtime parameters, follow the steps below:

1. In the main window of the component click {% if page.product == "xtract-for-alteryx" %}**[Edit Parameters]**{% else %}**Edit Runtime Parameters**{% endif %}.
The window “Edit Runtime Parameters” opens.<br>
![dd-parameters](/img/content/edit-runtime-parameters-list.png){:class="img-responsive"}
2. Click **[Add Scalar]** to define scalar parameters to be used as placeholders for actual values.<br>
Click **[Add List]** to define list parameters that contain multiple values separated by commas e.g., 1,10 or “1”, “10”. <br>
The placeholders need to be populated with actual values at extraction runtime.<br>
**Tip:** Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice.
3. Select one of the following data types from the drop-down menu.
The data types may correlate to SAP data types.
- *Text*: Can be used for any type of SAP selection field.{% if page.product == "xtract-for-alteryx" %} List parameters are always of type *String*.{% endif %}
- *Number*: Can be used for numeric SAP selection fields.
- *Flag*: Can only be used for SAP selection fields, which require an ‘X’ (true) or a blank ‘‘ (false) as input value.
4. Click **[OK]** to confirm. 
5. Navigate to the WHERE clause tab in the main window of the extraction and open the WHERE clause editor.
6. Add a new WHERE clause criteria that uses the **[Default with Parameter]** template.
7. Click on the *Parameter* component. A drop-down list that displays all available parameters opens. 
Select a parameter from the list.<br>
![WHERE-Clause-Builder-Example](/img/content/where-clause-param.png){:class="img-responsive"}
8. To test the WHERE clause, click **[Load live Preview]**. Provide parameter values when prompted.

{% if page.product == "xtract-universal" %}
Runtime parameters are overwritten at runtime, see [Extraction Parameters - Custom](../execute-and-automate-extractions/extraction-parameters#custom).
{% endif %}
{% if page.product == "board-connector" %}
Runtime parameters are overwritten at runtime, see [Extraction Parameters - Custom](../advanced-techniques/extraction-parameters#custom)
{% endif %}

### Runtime Parameters in Text Mode

Add an @ symbol before the value to mark it as a runtime parameter, e.g., enter `@myParameter` instead of a value.<br>
{% if page.product == "xtract-universal" %}The marked value is overwritten at runtime, see [Extraction Parameters - Custom](../execute-and-automate-extractions/extraction-parameters#custom).{% endif %}
{% if page.product == "board-connector" %}The marked value is overwritten at runtime, see [Extraction Parameters - Custom](../advanced-techniques/extraction-parameters#custom).{% endif %}

Example: <br>
`T001W~WERKS BETWEEN @PlantLow AND @PlantHigh`.

![Extraction-User-Variables](/img/content/Extraction-User-Variables.png){:class="img-responsive"}