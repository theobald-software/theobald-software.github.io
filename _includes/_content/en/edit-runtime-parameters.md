Use runtime parameters to set values e.g., for dynamic selection filters.


### Create Runtime Parameters 

1. Click **Edit Runtime Parameters* in the main window of the component to create or edit dynamic runtime parameters. 
The window “Edit Runtime Parameters” opens.<br> 
![Add parameters](/img/content/odp/odp-settings-add-parameters.png){:class="img-responsive"}<br> 
2. Click **[Add Scalar]** (1) to define parameters which can be used as placeholders for data selections. These placeholders need to be populated with actual values at extraction runtime.
This allows you to dynamically set filters at runtime.<br>
**Tip:** Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice (see the given example: *"p_MATNR"*).
3. Open the drop-down menu (2) and assign one of the following data types to the parameter. The data types can, but don't need to correlate to SAP data types. 
- String: This data type can be used for any type of SAP selection field.
- Integer: This data type can be used for numeric SAP selection fields.
- Flag: This data type can only be used for SAP selection fields, which require an 'X'&nbsp;(true) or a blank ''&nbsp;(false) as input value.<br>
4. Click **[OK]** (3) to confirm.

### Assign Runtime Parameters

Assign the parameters to selections.

1. To use the parameters as selection criteria, choose an item in the subsection **Fields** and click **[Edit]**. The window "Edit Selections" opens.<br> 
2. Click **[Add]** (4). Filtering option fields open.
3. Click the icon next to the **Low** and **High** input fields (5).
If there are runtime parameters, a parameter icon is displayed next to the input fields. <br>
Clicking the icons switches between entering actual input values and entering parameters.<br>
![Selection With Parameters](/img/content/edit-selections.png){:class="img-responsive"}<br>
4. To check the defined parameters, click **[Load live preview]**. <br>
If you have assigned parameters as selection filters, you are prompted to populate the parameters with actual values. <br>
![provide values](/img/content/odp/odp-provide-parameter-values.png){:class="img-responsive"}
