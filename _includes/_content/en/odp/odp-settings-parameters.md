### Edit Runtime Parameters 

1. Click **Edit Runtime Parameters** in the main window of the component to create or edit dynamic runtime parameters.
The window "Edit Runtime Parameters" opens.<br>
2. Click **[Add Scalar]** to define scalar parameters that can be used as placeholders for data selections.<br>
Click **[Add List]** to define list parameters that contain multiple values separated by commas e.g., 1,10 or “1”, “10”.
The placeholders need to be populated with actual values at extraction runtime. <br>
**Tip:** Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice (see the given example: *"p_MATNR"*).<br>
![ODP Add parameters](/img/content/odp/odp-settings-add-parameters.png){:class="img-responsive"}<br> 
3. Click on the drop-down menu (2) and assign one of the following data types to a parameter. The data types can, but don't have to correlate to SAP data types. 
- String: This data type can be used for any type of SAP selection field.
- Integer: This data type can be used for numeric SAP selection fields.
- Flag: This data type can only be used for SAP selection fields, which require an 'X'&nbsp;(true) or a blank ''&nbsp;(false) as input value.
4. Click **[OK]** (3) to confirm.
5. To use the parameters as selection criteria, choose an item in the subsection **Fields** and click **[Edit]** (4). The window "Edit Selections" opens.<br> 
6. Click **[Add]** (5) to open the field for filtering.
7. Click the icon next to the **Low** and **High** input fields (6).
If there are runtime parameters, a parameter icon is displayed next to the input fields. <br>
Clicking the icons switches the between entering actual input values and entering parameters.<br>
![ODP Selection With Parameters](/img/content/odp/odp-selection-with-parameters.png){:class="img-responsive"}<br>
8. To check the defined parameters, click **[Load live preview]**. <br>
If you have assigned parameters as selection filters, you are prompted to populate the parameters with actual values. <br>
![ODP provide values](/img/content/odp/odp-provide-parameter-values.png){:class="img-responsive"}
