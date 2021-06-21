The following section shows how to use the BAPI Component.

### Look up a BAPI

1. In the main window of the component click the **[magnifiying glass symbol]**. The window “Function Module Lookup” opens.
2. Enter the name of a BAPI or function module the Function Name field(1). You can use wildcards (*) if needed.<br>
Alternatively you can search for function groups.
![Look-Up-Function-Module](/img/content/Look-Up-Function-Module.png){:class="img-responsive"}
3. Click the **[magnifiying glass symbol]** (2) and select an item from the displayed list (3).
4. Click **[OK]** (4) to confirm.

### Define Import, Export, Changings and Tables

The “Xtract BAPI” window displays the parameters of the selected BAPI.
BAPI can have up to four parameter types: Imports, Exports, Changings and Tables.

![Define-Bapi-Data-Source](/img/content/XU-BAPI-Parameters.png){:class="img-responsive"}

1. Add input parameters to send to SAP in **Import**, see [Import Parameters](). <br>
You can enter scalar values, structures or tables. You can also use dynamic runtime parameters, see [Runtime Parameters](./edit-runtime-parameters.md).<br>
Mandatory parameters are marked with a red (*).
2. Define the output to receive from SAP in **Eport**, see [Export Parameters][]. <br>
Select output by activating the checkbox next to the items.
3. Optional: If available you can define input and output parameters in **Changings**, see [Changings Parameters]().
4. Add output tables in **Tables**, see [Table Parameters](). <br>
Select output data by activating the checkbox next to the items.<br>
Edit the tables via **[pen icon]** under **Values**.
5. Click **[OK]** to confirm.

{: .box-note }
**Note:** The use of nested parameters is supported, e.g., tables in tables, structures in tables and structures in structures.<br>
