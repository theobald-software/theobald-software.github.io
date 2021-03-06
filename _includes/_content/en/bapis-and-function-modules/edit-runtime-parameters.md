To change parameters dynamically at runtime, create runtime parameters and assign them to your selection.

### Create Runtime Parameters 

Click **Edit Parameters** to create or edit dynamic runtime parameters.

1. Depending on the product, click **Edit Parameters** or **Edit runtime parameters** either at the *top* or at the *bottom* of the main BAPI Component window. <br/>
The window "Edit Runtime Parameters" opens.<br> 
![Add parameters](/img/content/extractors.bapi/BAPI-Create-Runtime-Parameters.png){:class="img-responsive"}<br> 
2. Click **[Add]** (1) to define parameters which can be used as placeholders for data selections. These placeholders need to be populated with actual values at extraction runtime.
This allows you to dynamically set filters at runtime.<br>
**Tip:** Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice (see the given example: *"p_MATNR"*).
3. Open the drop-down menu (2) and assign one of the following data types to the parameter.
- String: This data type can be used for any type of SAP selection field.
- Number: This data type can be used for numeric SAP selection fields.
- Flag: This data type can only be used for SAP selection fields, which require an 'X'&nbsp;(true) or a blank ''&nbsp;(false) as input value.<br>
- Binary: This data type can be used for SAP selection fields that can process binary data.
4. Click **[OK]** (3) to confirm.

### Assign Runtime Parameters

Assign the parameters to selections.

1. To use the parameters, choose an item from the **Imports**, **Exports**, **Changings** or **Tables** tab.
2. Click the icon next to the input field under **Value**.
If there are runtime parameters, a parameter icon is displayed next to the input fields. <br>
Clicking the icons switches between entering actual input values and entering parameters.<br>
3. Assign a parameter by selecting a runtime parameter from the dropdown-list.
![Assign parameters](/img/content/BAPI-Runtime-Parameters.png){:class="img-responsive"}

