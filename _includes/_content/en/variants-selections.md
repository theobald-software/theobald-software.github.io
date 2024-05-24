
{% if page.parent == "sap-queries" %}

Most queries allow entering selections before query execution.
Selections limit the result set of the query to extract only records that match the selection.<br>
A selection variant can be created in SAP, see [SAP Documentation: Query Variants](https://help.sap.com/docs/SAP_NETWEAVER_750/40d2cb3a4f9249d58e9bbc95f4dbaff8/4e535406a32c4f49e10000000a42189e.html?locale=en-US). 
The purpose of a variant is to minimize the necessity to enter selections when running a query.

{% elsif page.product == "abap-reports" or page.product == "report" %}

Most reports allow entering selections before report execution. 
Selections limit the result set of the report to extract only records that match the selection. 

In SAP a [selection variant](https://help.sap.com/docs/btp/ABAP/3353524716.html) can be created in the input screen of an ABAP report. The purpose of a variant is to save selection settings on your input screen. 
The purpose of a variant is to minimize the necessity to enter selections when running a report.

{% endif %}

{: .box-note }
**Note:** Manual selections and variants can be combined. Manual selections overwrite any selections in the variant.

### Choose a Variant
Choose a variant from the drop-down-list *Variant* (1). <br>
If you create a new variant in SAP after creating the extraction, click ![refresh](/img/content/icons/refresh.png) to load the new variant.

{% if page.parent == "abap-reports" or page.parent == "report" %}
![Report-Variants-Section](/img/content/Report-Variants-Selection.png){:class="img-responsive"}
{% elsif page.product == "xtract-universal" or page.product == "board-connector"%}
![Variants-Section](/img/content/query/query-variant1.png){:class="img-responsive"}
{% elsif page.product == "xtract-for-alteryx"%}
![Variants-Section](/img/content/xfa/query-variant1.png){:class="img-responsive"}
{% elsif page.product == "xtract-is"%}
![Variants-Section](/img/content/xis/query-variant1.png){:class="img-responsive"}
{% endif %}


{: .box-note }
**Note:** The selections of the variant are **not** displayed in the *Selection Screen* section of the window. 
To see the definition of a variant, open the variant in SAP.

{% if page.product == "xtract-universal"%}

{: .box-tip }
**Tip**: You can define the variant at runtime by using a corresponding parameter in the extraction URL, see [Extraction Parameters](../execute-and-automate-extractions/extraction-parameters).

{% endif %}

### Edit Selections

The *Selection Screen* in the query window corresponds to the input screen in SAP.

{: .box-note }
**Note:** Some selection fields only have a technical name and no description. 
To understand which field corresponds to a field in SAP, open the input screen in SAP. 
Click on a selection field and press the function key **[F1]** to display the technical name of the selection field. 

Follow the steps below to edit selection fields:

1. Click **[Edit]** next to the selection field you want to edit. The window “Edit selection” opens.<br>
{% if page.parent == "abap-reports" or page.parent == "report" %}![Report-Variants-Section2](/img/content/Report-Variants-Selection2.png){% elsif page.product == "xtract-universal" or page.product == "board-connector"%}![Variants-Section](/img/content/query/query-variant2.png){:class="img-responsive"}{% elsif page.product == "xtract-for-alteryx"%}![Variants-Section](/img/content/xfa/query-variant2.png){:class="img-responsive"}{% else %}![Variants-Section](/img/content/xis/query-variant2.png){:class="img-responsive"}{% endif %}
2. Add one or more of the following filter types:<br>
- Click **[Single]** to compare the value to a single specified value.<br>
- Click **[Range]** to check if the value is (not) withing a specified range of values.<br>
- Click **[List]** to check if the value is (not) part of a specified list of values.<br>
3. Select *Include* in the **Sign** column to only include the filtered data to the output. <br>
Select *Exclude* in the **Sign** column to exclude the filtered data from the output.<br>
![selections](/img/content/selections.png){:class="img-responsive"}
4. Select an operator in the **Option** column. The operator filters data according to the table below.

   | Operator   |      Meaning      |  
   |:---------|:------------- |
   |(not) like pattern |  True if data values do (not) contain to the content of operand 1.|
   |(not) equal to |  True if data is (not)equal to the content of operand 1.|
   |at least |  True if data is greater than or equal to the content of operand 1.|
   |more than |  True if data is greater than the content of operand 1.|
   |at most | True if data is less than or equal to the content of operand 1.|
   |less than | True if data is less than the content of operand 1.|
   |(not) between | True if data values do (not) lie between the values of operand 1 and operand 2. |
5. Enter values directly into the **Low** and **High** input fields or assign {% if page.product == "xtract-is"%}SSIS variables{% else %}[runtime parameters](./edit-runtime-parameters){% endif %} to the selection. 
- Static values: Enter values directly into the **Low** and **High** input fields. 
If {% if page.product == "xtract-is"%}SSIS variables{% else %}runtime parameters{% endif %} are available, make sure that the ![static-value](/img/content/icons/runtime-parameters-static.png) icon is displayed next to the input field.
Clicking on the icon switches between static and dynamic input values.
- {% if page.product == "xtract-is"%}SSIS variables:{% else %}Runtime parameters:{% endif %} Click ![static-value](/img/content/icons/runtime-parameters-static.png) to change the input type to dynamic values ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png).
Select an existing {% if page.product == "xtract-is"%}SSIS variable{% else %}runtime parameter{% endif %} from the drop-down list.
6. Click **[OK]** to confirm your input.
{% if page.parent == "abap-reports" or page.parent == "report" %}7. Click **[Load Preview]** in the main window of the component to check the result of your selection. <br>
If runtime parameters are defined, you are prompted to populate the parameters with actual values.
{% endif %}

Note that edited selection fields overwrite the selection fields in the variant. 

{: .box-tip }
**Tip:** If you use multiple selection parameters, it is more efficient to create a variant in SAP.
