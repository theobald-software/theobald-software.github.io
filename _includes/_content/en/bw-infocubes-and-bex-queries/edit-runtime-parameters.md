<!---

Use runtime parameters to change dimension filters and variables dynamically during runtime.<br>

### Create Runtime Parameters 

1. Click **Edit Runtime Parameters** in the main window of the component to create or edit dynamic runtime parameters.
The window "Edit Runtime Parameters" opens.<br>
![Add parameters](/img/content/edit-runtime-parameters-list.png){:class="img-responsive"}<br> 
2. Click **[Add Scalar]** to define scalar parameters that can be used as placeholders for filters.<br>
Click **[Add List]** to define list parameters that can be used as placeholders for dimension filters with multiple members.<br>
The placeholders need to be populated with actual values at extraction runtime. List parameters contain a list of values separated by commas e.g., *1,10* or *"1", "10"*.<br>
**Tip:** Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice.<br>
3. Open the drop-down menu and assign one of the following data types to the parameter. The data types can, but don't need to correlate to SAP data types. 
- String: This data type can be used for any type of SAP field.
- Number: This data type can be used for numeric SAP fields.
- Flag: This data type can only be used for SAP fields that require an 'X'&nbsp;(true) or a blank ''&nbsp;(false) as input value.<br>
4. Click **[OK]** to confirm.

-->


#### Adding Scalar Parameters
{% if page.product == "xtract-for-alteryx" %} ![Add Scalar](/img/content/xfa/xfa_scalar_2.gif){:class="img-responsive" style="border:1px solid black;"}
{% else %} ![Add Scalar](/img/content/bwcube_scalar_param_bw.gif){:class="img-responsive" style="border:1px solid black;"}
{% endif %}<br>


#### Adding List Parameters

{% if page.product == "xtract-for-alteryx" %} ![Add List](/img/content/xfa/xfa_list_param.gif){:class="img-responsive" style="border:1px solid black;"}
{% else %} ![Add List](/img/content/bwcube_list_param.gif){:class="img-responsive" style="border:1px solid black;"}
{% endif %}<br>


### Assign Runtime Parameters

Follow the steps below to assign the runtime parameters to variables or dimension filters.

1. To use the runtime parameters as variables, click **[Edit Variables]** in the main window of the component. The window "Edit variables..." opens, see [Variables](./variables).<br> 
To use the runtime parameters as dimension filters, right-click a dimension in the main window of the component, then click **Edit Filters**. The window "Member Filter" opens, see [Setting a Dimension Filter](./bw-cube-extraction-define#setting-a-dimension-filter).<br> 
2. Click the icon next to the input field to switch from static values ( ![Assign parameters](/img/content/icons/runtime-parameters-static.png)) to runtime parameters ( ![Assign parameters](/img/content/icons/runtime-parameters-dynamic.png)).
If no icon is available, [create a runtime parameter](#create-runtime-parameters).<br>
![Selection With Parameters](/img/content/bwcube-parameters.png){:class="img-responsive"}
3. Select a runtime parameter from the dropdown-list (5).
4. Click **[OK]** to confirm the input.
