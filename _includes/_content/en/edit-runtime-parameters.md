
1. Click **Edit Runtime Parameters** in the main window of the component.
The window "Edit Runtime Parameters" opens.<br>
![ODP Add parameters](/img/content/odp/odp-settings-add-parameters.png){:class="img-responsive"}<br> 
2. Create parameters that can be used as a placeholder for actual values.
The placeholders need to be populated with actual values at extraction runtime. 
- Click **[Add Scalar]** (1) to define a scalar parameter.<br>
- Click **[Add List]** (1) to define a list parameter that contains multiple values separated by commas e.g., 1,10 or “1”, “10”.
- **Tip:** Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice (see the given example: *"p_MATNR"*).<br>
3. Click on the drop-down menu (2) and assign one of the following data types to a parameter. The data types can, but don't have to correlate to SAP data types. 
- String: This data type can be used for any type of SAP selection field.
- Integer / Number: This data type can be used for numeric SAP selection fields.
- Flag: This data type can only be used for SAP selection fields, which require an 'X'&nbsp;(true) or a blank ''&nbsp;(false) as input value.
4. Click **[OK]** (3) to confirm.

