Each Import, Export, Changings and Tables parameter can have one of the following representations:

- A scalar field (e.g., characters, date, time, number, amount etc.).
- A structure consisting of several components.
- A table (tabular array of data) consisting of columns (data values of the same type) and rows (data records).

### Import Parameters
Import parameters represent the input values sent from the client to SAP. <br>
In the tab **Imports** you can define import parameters that can be presented as scalar values or structures. 

![BAPI import parameters](/img/content/xis/XtractBAPI_ImportParams.png){:class="img-responsive"}

To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>

#### Add Scalar Parameters (1)

Scalar fields for inputs are usually set using the following two options:
- A static constant value (e.g., 1141).
- A dynamic value set at run-time using a parameter, see [Runtime Parameters](./parametrization).

When using runtime parameters, make sure the input matches the data type.<br>
When entering constant scalar values of a wrong data type, the field is marked red and an error message is displayed (e.g. "Value is not numeric").

{: .box-note }
**Note:** Parameters that are predefined by SAP are displayed in a light grey font. <br>
To disable these parameters, activate the checkbox next to the parameter and leave the field empty. <br>

#### Add Structures as Parameters (2)

When using a structure, a value for each scalar field can be set similarly to a scalar field. 
Setting a single value or a parameter for the whole structure is not possible.

When a structure is available, you can assign structure elements (i.e. fields).<br>
1. Click the ![pen](/img/content/icons/pen.png) icon. The window "Edit Structures" opens.
2. Enter values or assign runtime parameters under **Values**.
![BAPI import parameters](/img/content/BAPI-Edit-Structure.png){:class="img-responsive"}

### Export Parameters
Export parameters represent the output values sent from SAP back to the client after execution of a function module. <br>
In the tab **Exports** you can define export parameters that can be presented as scalar values, structures or tables. 

#### Add Items to Output
Mark the checkbox in the output column to add an item to the output.<br>

![BAPI export parameters](/img/content/xis/XtractBAPI_ExportParams.png){:class="img-responsive"}

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

![BAPI table](/img/content/xis/XtractBAPI_TableParams.png){:class="img-responsive"}

#### Access Metadata of Tables (1)
Click the ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon to display the metadata of the selected table including the name and the data type of all fields. <br> 
If the function module was edited in SAP, you can refresh the data by clicking **Refresh metadata**<br>
![BAPI table metadata](/img/content/BAPI-Table-Metadata.png){:class="img-responsive"}

#### Add Tables to Output (2)

Mark the checkbox in the output column to add a table to the output.<br> 
![BAPI table output](/img/content/BAPI-Table-Output.png){:class="img-responsive"}

#### Edit Tables (3)

When using a structure, a value for each scalar field can be set similarly to a scalar field. 
Setting a single value or a parameter for the whole structure is not possible.

When a structure is available, you can assign structure elements (i.e. fields).<br>

 1. Click the ![pen](/img/content/icons/pen.png) icon to edit the table. The window "Edit Table Contents" opens.
 2. Click **[Add]** to add new set of parameters.<br>
 3. Enter values or parameters.<br>
When using runtime parameters, make sure the input matches the data type.<br>
When entering constant scalar values of a wrong data type, the field is marked red.<br>
![BAPI edit table](/img/content/BAPI-Edit-Table-Contents.png){:class="img-responsive"}
4. Click **[Remove]** to delete a row.

