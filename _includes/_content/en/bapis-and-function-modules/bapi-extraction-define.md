
### Look up a BAPI

1. In the main window of the component click ![magnifying-glass](/img/content/icons/magnifying-glass.png). The window “Function Module Lookup” opens.<br> {% if page.product == "xtract-is" %}![BAPI-Editor](/img/content/BAPI-Editor.png){:class="img-responsive"}{% elsif page.product == "xtract-universal" or page.product == "board-connector" %}![BAPI-Editor](/img/content/extractors.bapi/XU-BAPI.png){:class="img-responsive"}{% endif %}
2. Enter the name of a BAPI or function module in the **Function Name** field (1). Use wildcards (*), if needed.<br>
Alternatively you can search for function groups.
![Look-Up-Function-Module](/img/content/Look-Up-Function-Module.png){:class="img-responsive"}
3. Click ![magnifying-glass](/img/content/icons/magnifying-glass.png) (2) and select an item from the displayed list (3).
4. Click **[OK]** (4) to confirm.

The application now returns to the main window of the component.

### Define Import, Export, Changings and Tables

The main window of the {% if page.product == "xtract-for-alteryx" or page.product == "xtract-is" %}Xtract {% endif %}BAPI component shows all parameters of the selected BAPI. 

1. Add input parameters to send to SAP in **Imports**, see [Import Parameters](./parameters#import-parameters). <br>
You can enter scalar values (1) or structures (2).
{% if page.product == "xtract-for-alteryx" %}![Define-Bapi-Data-Source](/img/content/xfa/XfA-BAPI-Parameters.png){:class="img-responsive"}{% elsif page.product == "xtract-is" %}![Define-Bapi-Data-Source](/img/content/xis/XtractBAPI_ImportParams.png){:class="img-responsive"}{% else %}![Define-Bapi-Data-Source](/img/content/XU-BAPI-Parameters.png){:class="img-responsive"} {% endif %}
2. Define the output to receive from SAP in **Exports**, see [Export Parameters](./parameters#export-parameters). <br>
Select output by activating the checkbox next to the items.
{% if page.product == "xtract-for-alteryx" %}![BAPI export parameters](/img/content/xfa/XfA-Bapi-Exports-Edit.png){:class="img-responsive"} {% elsif page.product == "xtract-is" %}![Define-Bapi-Data-Source](/img/content/xis/XtractBAPI_ExportParams.png){:class="img-responsive"} {% else %}![BAPI export parameters](/img/content/Bapi-Exports-Edit.png){:class="img-responsive"} {% endif %}
3. Optional: If available, define input and output parameters in **Changings**, see [Changings Parameters](./parameters#changings-parameters).
4. Add tables to the output or add table parameters as input in **Tables**, see [Table Parameters](./parameters#table-parameters). <br>
Click the ![glasses](/img/content/icons/glasses.png) icon to check the names and data types of the table fields (1).<br>
Activate the checkbox next to the items to add items to the output (2).<br>
Click the ![pen](/img/content/icons/pen.png) icon to edit tables (3).
{% if page.product == "xtract-for-alteryx" %}![BAPI table](/img/content/xfa/XfA-Bapi-Table-Type.png){:class="img-responsive"} {% elsif page.product == "xtract-is" %}![Define-Bapi-Data-Source](/img/content/xis/XtractBAPI_TableParams.png){:class="img-responsive"} {% else %}![BAPI table](/img/content/Bapi-Table-Type.png){:class="img-responsive"} {% endif %}
5. Optional: If available, define which exceptions thrown by the BAPI are ignored during runtime, see [Exceptions](parameters#exceptions).
6. Click **[OK]** to confirm.

{: .box-note }
**Note:** Nested parameters are supported, e.g., tables in tables, structures in tables and structures in structures.<br>
