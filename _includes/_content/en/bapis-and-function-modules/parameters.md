Each Import, Export, Changings and Tables parameter can have one of the following representations:

- A scalar field (e.g., characters, date, time, number, amount etc.).
- A structure consisting of several components.
- A table (tabular array of data) consisting of columns (data values of the same type) and rows (data records).

### Import Parameters
Import parameters represent the input values sent from the client to SAP. <br>
In the tab **Imports** you can define import parameters that can be presented as scalar values (1) or structures (2). 

{% if page.product == "xtract-for-alteryx" %}![Define-Bapi-Data-Source](/img/content/xfa/XfA-BAPI-Parameters.png){:class="img-responsive"}{% elsif page.product == "xtract-is" %}![Define-Bapi-Data-Source](/img/content/xis/XtractBAPI_ImportParams.png){:class="img-responsive"} {% else %}![Define-Bapi-Data-Source](/img/content/XU-BAPI-Parameters.png){:class="img-responsive"} {% endif %}

To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>

#### Add Scalar Parameters (1)

Use one of the following options to set scalar parameters:
- A static constant value - ![static-value](/img/content/icons/runtime-parameters-static.png) icon or no icon. 
- {% if page.product == "xtract-is" %}An SSIS variable / parameter - ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) icon. This option is only available if the project contains SSIS variables.{% else %}A dynamic value set at runtime - ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) icon, see [Runtime Parameters](./edit-runtime-parameters).{% endif %}

Click on the icon next to the input field to switch between static input values and {% if page.product == "xtract-is" %} SSIS variables{% else %} runtime parameters{% endif %}.
When using {% if page.product == "xtract-is" %} SSIS variables{% else %} runtime parameters{% endif %}, make sure the input matches the data type. {% if page.product == "xtract-is" %}Example:

![Assigning-SSIS-Variables](/img/content/xis/ssis-variables.gif){:class="img-responsive" style="border:1px solid black;"}
{% endif %}

{: .box-note }
**Note:** Parameters that are predefined by SAP are displayed in a light gray font. <br>
To disable these parameters, activate the checkbox next to the parameter and leave the field empty. <br>

#### Add Structures as Parameters (2)

When a structure is available, you can assign structure elements (i.e. fields) similarly to single scalar fields. 
Setting a single value or a parameter for the whole structure is not possible.<br>
1. Click ![pen](/img/content/icons/pen.png). The window "Edit Structures" opens.
2. Enter constant values ( ![static-value](/img/content/icons/runtime-parameters-static.png) icon or no icon) or assign {% if page.product == "xtract-is" %} SSIS variables / parameters{% else %} runtime parameters{% endif %} ( ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) icon).
![BAPI import parameters](/img/content/BAPI-Edit-Structure.png){:class="img-responsive"}

### Export Parameters
Export parameters represent the output values sent from SAP back to the client after execution of a function module. <br>
In the tab **Exports** you can define export parameters that can be presented as scalar values, structures or tables. 

#### Add Items to Output
Mark the checkbox in the output column to add an item to the output.

{% if page.product == "xtract-for-alteryx" %}![BAPI export parameters](/img/content/xfa/XfA-Bapi-Exports-Edit.png){:class="img-responsive"} {% elsif page.product == "xtract-is" %}![Define-ExportParams](/img/content/xis/XtractBAPI_ExportParams.png){:class="img-responsive"}{% else %}![BAPI export parameters](/img/content/Bapi-Exports-Edit.png){:class="img-responsive"} {% endif %}

To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>

### Changing Parameters

Changing parameters represent parameters that can be used for input and output. <br>
In the tab **Changings** you can define changing parameters that can be presented as scalar values, structures or tables.

### Table Parameters

Tables parameters are parameters presented in a table structure consisting of multiple rows. Tables can be used for input and output.

Within the tab **Tables** you can define table parameters for importing and exporting into and from an SAP BAPI. 
Tables represent a structure of multiple rows of the same data type.

To use the filtering function, enter text in the headers of the columns **Name** and **Description**.

{: .box-note }
**Note:** Only **5** tables are available for parallel exporting.

- Click ![glasses](/img/content/icons/glasses.png) to check the names and data types of the table fields (1).
- Activate the checkbox next to the items to add items to the output (2).
- Click ![pen](/img/content/icons/pen.png) to edit tables (3).

{% if page.product == "xtract-for-alteryx" %}![BAPI table](/img/content/xfa/XfA-Bapi-Table-Type.png){:class="img-responsive"} {% elsif page.product == "xtract-is" %}![Define-ExportParams](/img/content/xis/XtractBAPI_TableParams.png){:class="img-responsive"} {% else %}![BAPI table](/img/content/Bapi-Table-Type.png){:class="img-responsive"} {% endif %}

### Access Metadata of Tables (1)
Click the ![glasses](/img/content/icons/glasses.png) icon to display the metadata of the selected table including the name and the data type of all fields. 
{% if page.product != "xtract-for-alteryx" %}
If the function module was edited in SAP, you can refresh the data by clicking **Refresh metadata**<br>
![BAPI table metadata](/img/content/BAPI-Table-Metadata.png){:class="img-responsive"}
{% endif %}

### Add Tables to Output (2)

Mark the checkbox in the output column to add a table to the output.<br> 
![BAPI table output](/img/content/BAPI-Table-Output.png){:class="img-responsive"}

### Edit Tables (3)

1. Click the ![pen](/img/content/icons/pen.png) icon. The window "Edit Table Contents" opens.
2. Click **[Add]** to add new set of parameters.<br>
3. Enter values or {% if page.product == "xtract-is" %} SSIS variables{% else %} runtime parameters{% endif %}.<br>
When using {% if page.product == "xtract-is" %} SSIS variables{% else %} runtime parameters{% endif %}, make sure the input matches the data type.<br>
![BAPI edit table](/img/content/BAPI-Edit-Table-Contents.png){:class="img-responsive"}
4. Click **[Remove]** to delete a row.

{% if page.product == "xtract-is" %}
### Mapping Input Tables

When connecting tables to the Xtract BAPI component, a data mapping is executed automatically. 

![BAPI table mapping](/img/content/ssis-write-xtractis-fuba-02.png){:class="img-responsive"}

To correctly map the data, the following requirements must be met:

- The column names of the input table must be the same as in the Xtract BAPI component.
- The data types in the input table must be the same as in the Xtract BAPI component.

Click on the ![glasses-icon](/img/content/icons/glasses.png) icon next to a table to look up column names and data types in the Xtract BAPI component.

{: .box-tip }
**Tip:** If the column names and / or datatypes of the input table and the Xtract BAPI table do not match, add a *Derived Column* component to convert the input data.

{% endif %}

### Exceptions

**Exceptions** refers to ABAP exceptions / errors messages of an SAP BAPI.
If an exception occurs during runtime, {% if page.product == "xtract-is" %}Xtract IS{% elsif page.product == "xtract-for-alteryx" %}Xtract for Alteryx{% elsif page.product == "xtract-universal" %}Xtract Universal{% elsif page.product == "board-connector" %}Board Connector{% endif %} returns a corresponding error message.

- By default, all exceptions result in errors when running the {% if page.product == "xtract-is" or page.product == "xtract-for-alteryx"%}Xtract {% endif %}BAPI component.
- To ignore exceptions during runtime, deselect the exceptions in the **Exceptions** tab.

![BAPI edit table](/img/content/extractors.bapi/XU-BAPI-Exceptions.png){:class="img-responsive"}

