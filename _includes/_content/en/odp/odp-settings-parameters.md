### Edit Parameters <br/>
To display editing function for the parameters, depending on the product, click **Edit Parameters** either at the *top* or at the *bottom* of the window “Define data source for SAP ODP”. <br/>
![ODP Edit parameters](/img/content/odp/odp-settings-edit-parameters1.png){:class="img-responsive"}<br> 
The window "Edit Runtime Parameters" opens.<br> 
![ODP Add parameters](/img/content/odp/odp-settings-add-parameters.png){:class="img-responsive"}<br> 
1. Click **[Add]** (1) to define parameters which can be used as placeholders for data selections. These placeholders need to be populated with actual values at extraction runtime.
This allows you to dynamically set filters at runtime.

2. Click on the drop-down menu (2) and assign one of the following data types to a parameter. The data types can, but don't need to correlate to SAP data types. 
- String: This data type can be used for any type of SAP selection field.
- Integer: This data type can be used for numeric SAP selection fields.
- Flag: This data type can only be used for SAP selection fields, which require an 'X'&nbsp;(true) or a blank ''&nbsp;(false) as input value.
<br>

If you have defined parameters, icons appear next to the *Low* and *High* input fields in the "Edit selections" window. <br>
Click the icons to switch between entering actual input values and entering parameters.
<br>
![ODP Selection With Parameters](/img/content/odp/odp-selection-with-parameters.png){:class="img-responsive"}
