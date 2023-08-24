
### Create Runtime Parameters 

1. Click {% if page.product == "xtract-for-alteryx" %}**[Edit Parameters]** {% else %}**Edit runtime parameters** {% endif %}.
The window "Edit Runtime Parameters" opens.<br> 
{% if page.product == "xtract-for-alteryx" %}![Edit parameters](/img/content/xfa/BAPI-Edit-Parameters.png){:class="img-responsive"}{% else %}![Edit parameters](/img/content/xu/BAPI-Edit-Parameters.png){:class="img-responsive"}{% endif %}<br> 
2. Click **[Add Scalar]** (1) to define parameters which can be used as placeholders for data selections. These placeholders need to be populated with actual values at extraction runtime.
This allows you to dynamically set filters at runtime.<br>
**Tip:** Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice.<br>
![Add parameters](/img/content/extractors.bapi/BAPI-Create-Runtime-Parameters.png){:class="img-responsive"}
3. Open the drop-down menu (2) and assign one of the following data types to the parameter.
- String: This data type can be used for any type of SAP selection field.
- Number: This data type can be used for numeric SAP selection fields.
- Flag: This data type can only be used for SAP selection fields, which require an 'X'&nbsp;(true) or a blank ''&nbsp;(false) as input value.<br>
4. Click **[OK]** (3) to confirm.

### Assign Runtime Parameters

1. To use the parameters, choose an item from the **Imports**, **Exports**, **Changings** or **Tables** tab.
2. Click the icon next to the input field under **Value**.
If there are runtime parameters, a parameter icon is displayed next to the input fields. <br>
Clicking the icons switches between entering actual input values and entering parameters.<br>
3. Assign a parameter by selecting a runtime parameter from the dropdown-list.
{% if page.product == "xtract-for-alteryx" %}![Assign parameters](/img/content/xfa/XfA-BAPI-Runtime-Parameters.png){:class="img-responsive"}{% else %}![Assign parameters](/img/content/BAPI-Runtime-Parameters.png){:class="img-responsive"} {% endif %}

### Pass Parameters at Runtime

