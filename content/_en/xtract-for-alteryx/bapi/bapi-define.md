---
ref: xfa-bapi-define
layout: page
title: Defining a BAPI Extraction
description: Define BAPI
product: xtract-for-alteryx
parent: bapi
permalink: /:collection/:path
weight: 1
lang: en_GB
---
### Using BAPI Component
1. Drag and drop the BAPI component from the menu bar to the workflow canvas (1). The window "Configuration" opens.
2. Fill in the connection data (2) similarly to the procedure described for the [Table component](../getting-started).
3. Within **Selected Extraction**, click **[Edit]** (3). The window "BAPI" opens.
![BAPI component](/img/content/xfa/Define-bapi-component.png){:class="img-responsive"}

### Looking up a BAPI
1. Search for **BAPI / Function Name** by using the **[magnifiying glass symbol]** (4), you can use wildcards (*), if needed. The window "Function Module Lookup" opens.
2. By entering a search name in the **Function Name** field, you can narrow down the search. Start the search by using the **[magnifiying glass symbol]** (5). You can use wildcards (*), if needed.<br>
![Look-Up-Function-Module](/img/content/xfa/Look-Up-Function-Module.png){:class="img-responsive"}
3. Select an item from the list (6). 
4. Click **[OK]** (7) to confirm.

![BAPI-Parameters](/img/content/xfa/BAPI-Parameters.png){:class="img-responsive"}


### Define Import, Export, Changings and Tables

In the main BAPI Component window all parameters of the selected BAPI are displayed.
BAPIs can have up to four parameter types: Imports, Exports, Changings and Tables.

{: .box-note }
**Note:** You can use of nested parameters, e.g., tables in tables, structures in tables and structures in structures.<br>

1. Add input parameters to send to SAP in **Imports**, see [Import Parameters](./parameters#import-parameters). <br>
You can enter scalar values (1) or structures (2). You can also use dynamic runtime parameters, see [Runtime Parameters](./edit-runtime-parameters).<br>
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

