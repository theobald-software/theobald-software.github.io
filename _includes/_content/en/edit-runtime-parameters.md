Use runtime parameters to set selection values at runtime.

### Create Runtime Parameters 

1. Click **Edit Runtime Parameters** in the main window of the component to create or edit dynamic runtime parameters. 
The window “Edit Runtime Parameters” opens.
2. Click **[Add Scalar]** (1) to define parameters which can be used as placeholders for data selections. These placeholders need to be populated with actual values at extraction runtime.
This allows you to dynamically set filters at runtime.<br> 
![Add parameters](/img/content/odp/odp-settings-add-parameters.png){:class="img-responsive"}<br> 
**Tip:** Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice (see the given example: *"p_MATNR"*).
3. Open the drop-down menu (2) and assign one of the following data types to the parameter. The data types can, but don't need to correlate to SAP data types. 
- String: This data type can be used for any type of SAP selection field.
- Integer: This data type can be used for numeric SAP selection fields.
- Flag: This data type can only be used for SAP selection fields, which require an 'X'&nbsp;(true) or a blank ''&nbsp;(false) as input value.<br>
4. Click **[OK]** (3) to confirm.

### Assign Runtime Parameters

Assign runtime parameters to selections:

1. Choose an item in the subsection *Selection Screen* and click **[Edit]**. The window "Edit Selections" opens.
{% if page.parent == "sap-queries" %}![Selection](/img/content/query/query-variant2.png){:class="img-responsive"}{% endif %}
2. Click **[Add Selection]** (4). Filtering option fields open.
3. Click the icon next to the input fields **Low** and **High** (5).<br>
If runtime parameters are available, a parameter icon is displayed next to the input fields.
Clicking the icon switches between static input values ( ![static-value](/img/content/icons/runtime-parameters-static.png) icon) and runtime parameters ( ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) icon).<br>
![Selection With Parameters](/img/content/edit-selections.png){:class="img-responsive"}<br>
4. Select a runtime parameter from the dropdown-list.
5. Click **[OK]** to save your input. The window "Edit Selections" closes.
6. Click **[Load live preview]** to check the defined runtime parameters. <br>
If runtime parameters are assigned to selections, you are prompted to populate the runtime parameters with actual values. <br>
![provide values](/img/content/odp/odp-provide-parameter-values.png){:class="img-responsive"}
