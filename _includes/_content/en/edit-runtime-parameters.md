
### Create Runtime Parameters 

Follow the steps below to create runtime parameters:

1. In the main window of the component click {% if page.product == "xtract-for-alteryx" or page.product == "xtract-is" %}**Edit parameters**{% else %}**Edit Runtime Parameters**{% endif %}. 
The window “Edit Runtime Parameters” opens.<br>
{% if page.product == "xtract-for-alteryx" and page.parent == "odp"%}![Edit runtime parameters](/img/content/xfa/odp-edit-runtime-params.png){:class="img-responsive"}{% elsif page.product == "xtract-for-alteryx" and page.parent == "reports"%}![Edit runtime parameters](/img/content/xfa/report-edit-runtime-params.png){:class="img-responsive"}{% elsif page.product == "xtract-for-alteryx" and page.parent == "bw-cube"%}![Edit runtime parameters](/img/content/xfa/cube-edit-runtime-params.png){:class="img-responsive"}{% elsif page.product == "xtract-for-alteryx" and page.parent == "table"%}![Edit runtime parameters](/img/content/xfa/table-edit-runtime-params.png){:class="img-responsive"}{% elsif page.product == "xtract-for-alteryx" and page.parent == "bapi"%}![Edit runtime parameters](/img/content/xfa/BAPI-Edit-Parameters.png){:class="img-responsive"}{% elsif page.product == "xtract-universal" or page.product == "board-connector"%}{% if page.parent == "odp"%}![Edit runtime parameters](/img/content/xu/odp-edit-runtime-params.png){:class="img-responsive"}{% elsif page.parent == "bw-infocubes-and-bex-queries"%}![Edit runtime parameters](/img/content/xu/cube-edit-runtime-params.png){:class="img-responsive"}{% elsif page.parent == "sap-queries"%}![Edit runtime parameters](/img/content/xu/queries-edit-runtime-params.png){:class="img-responsive"}{% elsif page.parent == "bapis-and-function-modules"%}![Edit runtime parameters](/img/content/xu/bapi-edit-runtime-params.png){:class="img-responsive"}{% elsif page.parent == "abap-reports"%}![Edit runtime parameters](/img/content/xu/report-edit-runtime-params.png){:class="img-responsive"}{% endif %}{% else %}![Edit runtime parameters](/img/content/xis/odp-edit-runtime-params.png){:class="img-responsive"}{% endif %}
2. Click **[Add Scalar]** or **[Add List]** (1) to create a scalar or list parameter that can be used a placeholder for values.
List parameters can contain multiple values separated by commas e.g., 1,10 or “1”, “10”.
The placeholders need to be populated with actual values at runtime. <br>
**Tip:** Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice.<br>
![ODP Add parameters](/img/content/edit-runtime-parameters-list.png){:class="img-responsive"}
3. Click on the drop-down menu (2) and assign one of the following data types to a parameter. The data types can, but don't have to correlate to SAP data types. <br>
*String*: This data type can be used for any type of SAP selection field.<br>
*Integer / Number*: This data type can be used for numeric SAP selection fields.<br>
*Flag*: This data type can only be used for SAP selection fields, which require an 'X'&nbsp;(true) or a blank ''&nbsp;(false) as input value.
4. Click **[OK]** (3) to confirm.

The runtime parameters are now available in the component, e.g., for filters and selections.

