
### Edit Selections

{% if page.parent == "datasource-deltaq" or page.parent == "deltaq" %}

{: .box-note }
**Note:** Do not define selections when using the update mode Delta Update, because the selections of the Init mode are automatically applied.

{% elsif  page.parent != "odp" %}

The *Selection Screen* in the main window of the component corresponds to the input screen in SAP.

{: .box-note }
**Note:** Some selection fields only have a technical name and no description. 
To understand which field corresponds to a field in SAP, open the input screen in SAP. 
Click on a selection field and press the function key **[F1]** to display the technical name of the selection field. 

{% endif %}

Follow the steps below to edit selection fields and filter data:

1. Click **[Edit]** next to the selection field you want to edit. The window “Edit selection” opens.<br>
{% if page.parent == "abap-reports" or page.parent == "report" %}![Report-Variants-Section2](/img/content/Report-Variants-Selection2.png){% elsif page.parent == "datasource-deltaq" or page.parent == "deltaq"%}![deltaQ-Selections](/img/content/DeltaQ-Edit.png){% elsif page.parent == "odp"%}![ODP-Selections](/img/content/odp/odp-fiter.png){% elsif page.product == "xtract-universal" or page.product == "board-connector"%}![Variants-Section](/img/content/query/query-variant2.png){:class="img-responsive"}{% elsif page.product == "xtract-for-alteryx"%}![Variants-Section](/img/content/xfa/query-variant2.png){:class="img-responsive"}{% else %}![Variants-Section](/img/content/xis/query-variant2.png){:class="img-responsive"}{% endif %}
2. Add one or more of the following filter types:<br>
a) Click **[Single]** to compare the data to a single specified value.<br>
b) Click **[Range]** to check if the data is (not) within a specified range of values.<br>{% if page.product != "xtract-is" %}c) Click **[List]** to check if the data is (not) part of a specified list of values. {% endif %}
3. In the **Sign** column (1), select *Include* to add the filtered data to the output or select *Exclude* to remove the filtered data from the output.<br>
{% if page.product == "xtract-is" %} ![selections](/img/content/selections-xis.png){:class="img-responsive"} {% else %}![selections](/img/content/selections.png){:class="img-responsive"} {% endif %}
4. Select an operator in the **Option** column (2). The operator filters data according to the table below.

   | Operator   |      Meaning      |  
   |:---------|:------------- |
   |(not) like pattern |  True if data values do (not) contain to the content of operand 1.|
   |(not) equal to |  True if data is (not) equal to the content of operand 1.|
   |at least |  True if data is greater than or equal to the content of operand 1.|
   |more than |  True if data is greater than the content of operand 1.|
   |at most | True if data is less than or equal to the content of operand 1.|
   |less than | True if data is less than the content of operand 1.|
   |(not) between | True if data values do (not) lie between the values of operand 1 and operand 2. |
   |elements equal | True if data values are part of operand 1. This option is only available for type *List*. |
5. Enter values or assign {% if page.product == "xtract-is"%}SSIS variables{% else %}[runtime parameters](./edit-runtime-parameters){% endif %} to the selection fields (3). <br>
a) Static values: Enter values directly into the **Low** and **High** input fields. 
If {% if page.product == "xtract-is"%}SSIS variables{% else %}runtime parameters{% endif %} are available, make sure that the ![static-value](/img/content/icons/runtime-parameters-static.png) icon is displayed next to the input field.
Clicking on the icon switches between static and dynamic input values.<br>
b) {% if page.product == "xtract-is"%}SSIS variables:{% else %}Runtime parameters:{% endif %} Click ![static-value](/img/content/icons/runtime-parameters-static.png) to change the input type to dynamic values ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png).
Select an existing {% if page.product == "xtract-is"%}SSIS variable{% else %}runtime parameter{% endif %} from the drop-down list.
6. Click **[OK]** to confirm your input.
{% if page.parent != "query" and page.parent != "sap-queries" %}7. Click **[Load Preview]** in the main window of the component to check the result of your selection. <br>
If {% if page.product == "xtract-is"%}SSIS variables{% else %}runtime parameters{% endif %} are defined, you are prompted to populate the parameters with actual values.
{% endif %}

{% if page.parent != "datasource-deltaq" and page.parent != "deltaq" and page.parent != "odp" %}

Note that edited selection fields overwrite the selection fields in the variant. 

{: .box-tip }
**Tip:** If you use multiple selection parameters, it is more efficient to create a variant in SAP.

{% endif %}