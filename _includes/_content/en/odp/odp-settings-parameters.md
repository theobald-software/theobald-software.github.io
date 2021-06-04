### Edit Parameters 

Click **Edit Parameters** to create or edit dynamic runtime parameters.

1. To display editing function for the parameters, depending on the product, click **Edit Parameters** either at the *top* or at the *bottom* of the window “Define data source for SAP ODP”. <br/>
The window "Edit Runtime Parameters" opens.<br> 
![ODP Add parameters](/img/content/odp/odp-settings-add-parameters.png){:class="img-responsive"}<br> 
2. Click **[Add]** (1) to define parameters which can be used as placeholders for data selections. These placeholders need to be populated with actual values at extraction runtime.
This allows you to dynamically set filters at runtime.<br>
**Tip:** Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice (see the given example: *"p_MATNR"*).
3. Click on the drop-down menu (2) and assign one of the following data types to a parameter. The data types can, but don't need to correlate to SAP data types. 
- String: This data type can be used for any type of SAP selection field.
- Integer: This data type can be used for numeric SAP selection fields.
- Flag: This data type can only be used for SAP selection fields, which require an 'X'&nbsp;(true) or a blank ''&nbsp;(false) as input value.
<br>
4. Click **[OK]** (3) to confirm.
5. To define the parameters, choose an item in the subsection **Fields** and click **[Edit]** (4). The window "Edit Selections" opens.<br> 
6. Click **[Add]** (5). Filtering option fields open.
7. Click the icon next to the **Low** and **High** input fields (6).
If there are defined parameters, icon switches to the parameter icon. <br>
Clicking the icons switches the option between entering actual input values and entering defined parameters.
<br>
![ODP Selection With Parameters](/img/content/odp/odp-selection-with-parameters.png){:class="img-responsive"}<br>
8. To check the defined parameters, click **[Load live preview]**. <br>
If you have assigned parameters as selection filters, you are prompted to populate the parameters with actual values. <br>
![ODP provide values](/img/content/odp/odp-provide-parameter-values.png){:class="img-responsive"}
