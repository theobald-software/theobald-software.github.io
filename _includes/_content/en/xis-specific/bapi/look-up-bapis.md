### Look up a BAPI

1. Click **[Search]** (binoculars icon) in the main window of the component.
![BAPI-Editor](/img/content/BAPI-Editor.png){:class="img-responsive"}
 The dialog “Function Module Lookup” opens.
2. Enter the name of a BAPI or function module in the **Function Name** field(1). You can use wildcards (*) if needed.<br>
Alternatively you can search for function groups.
![Look-Up-Function-Module](/img/content/Look-Up-Function-Module.png){:class="img-responsive"}
3. Click the **[Search]** (magnifiying glass icon)(2) and select an item from the displayed list (3).
4. Click **[OK]** (4) to confirm.


### Define Import, Export, Changings and Tables

In the main BAPI Component window all parameters of the selected BAPI are displayed.
BAPIs can have up to four parameter types: Imports, Exports, Changings and Tables.

{: .box-note }
**Note:** You can use of nested parameters, e.g., tables in tables, structures in tables and structures in structures.<br>

1. Add input parameters to send to SAP in **Imports**, see [Import Parameters](./parameters#import-parameters). <br>
You can enter scalar values (1) or structures (2). You can also use dynamic runtime parameters, see [Parameterization](./edit-runtime-parameters).<br>
Parameters defined as mandatory in SAP (transaction SE37) are marked with a red *. <br>
![Define-Bapi-Data-Source](/img/content/XU-BAPI-Parameters.png){:class="img-responsive"}
2. Define the output to receive from SAP in **Eports**, see [Export Parameters](./parameters#export-parameters). <br>
Select output by activating the checkbox next to the items.<br>
![BAPI export parameters](/img/content/Bapi-Exports-Edit.png){:class="img-responsive"}
3. Optional: If available you can define input and output parameters in **Changings**, see [Changings Parameters](./parameters#changings-parameters).
4. Add tables to the output or add table parameters as input in **Tables**, see [Table Parameters](./parameters#table-parameters). <br>
Check the names and data types of the table's fields by clicking the **[glasses symbol]** under **Type** (1).
Select output data by activating the checkbox next to the items (2).
Edit tables via the **[pen icon]** under **Values** (3).
![BAPI table](/img/content/Bapi-Table-Type.png){:class="img-responsive"}
5. Click **[OK]** to confirm.