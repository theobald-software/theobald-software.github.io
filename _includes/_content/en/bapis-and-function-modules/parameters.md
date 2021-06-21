Each Import, Export, Changings and Tables parameter can have one of the following representations:

- a scalar field (e.g., characters, date, time, number, amount etc.)
- a structure consisting of several components
- a table - an array of structures of the same type

{: .box-note }
**Note:** To pass parameters dynamically at runtime, see [Runtime Parameters](./edit-runtime-parameters.md).

### Import Parameters
**Imports** represent the input values sent from the client to SAP. <br>
In the tab **Imports** you can define import parameters that can be presented as scalar values structures or tables. 

![BAPI import parameters](/img/content/XU-BAPI-Parameters.png){:class="img-responsive"}

To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>

### Add Scalar Parameters

xxx

{: .box-note }
**Note:** Parameters that are predefined by SAP are displayed in a light grey font. 
If you want to disable these parameters, activate the checkbox next to the parameter and don't enter a value.

#### Add Structures or Tables as Parameters

xxx

### Export Parameters
**Exports** represent the output values sent from SAP back to the client after execution of a function module. <br>
In the tab **Exports** you can define export parameters that can be presented as scalar values, structures or tables. 

![BAPI export parameters](/img/content/Bapi-Exports-Edit.png){:class="img-responsive"}
To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>

#### Add Items to Output
Mark the checkbox in the output column to add an item to the output.<br>


### Changings Parameters

**Changings** represents parameters that can be used for input and output. <br>
In the tab **Changings** you can define import and export parameters as **Changings** combines importing and exporting functions.

### Table Parameters

**Tables** contains parameters in a table structure consisting of multiple rows. Tables can be used for input and output.

Within the tab **Tables** you can define table parameters for importing and exporting into and from an SAP BAPI. 
Tables represent a structure of multiple rows of the same data type.

To use the filtering function, enter text in the headers of the columns **Name** and **Description**.

{: .box-note }
**Note:** Only **5** tables are available for parallel exporting.

![BAPI table](/img/content/Bapi-Table-Type.png){:class="img-responsive"}

#### Access Metadata of Tables (1)
Click the **[glasses icon]** in the **Type** column to display the metadata of the selected table including the name and the data type of all fields. <br> 
If tables are edited in SAP, you can refresh the data by clicking **Refresh metadata**<br>
![BAPI table metadata](/img/content/BAPI-Table-Metadata.png){:class="img-responsive"}

#### Add Tables to Output (2)

Mark the checkbox in the output column to add a table to the output.<br> 
![BAPI table output](/img/content/BAPI-Table-Output.png){:class="img-responsive"}

#### Edit Tables (3)

Edit tables via the **[pen icon]** in the column **Values**. <br> 

xxx
