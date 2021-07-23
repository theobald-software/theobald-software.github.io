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
The following section shows how to use the BAPI component.

### Using BAPI Component
1. Drag and drop the BAPI component from the menu bar to the workflow canvas (1). The window "Configuration" opens.
2. Fill in the connection data (2) similarly to the procedure described for the [Table component](../getting-started).
3. Within **Selected Extraction**, click **[Edit]** (3). The window "BAPI" opens.
![BAPI component](/img/content/xfa/Define-bapi-component.png){:class="img-responsive"}

### Look up a BAPI
1. Search for **BAPI / Function Name** by using the **[magnifiying glass symbol]** (4), you can use wildcards (*), if needed. The window "Function Module Lookup" opens.
2. By entering a search name in the **Function Name** field, you can narrow down the search. Start the search by using the **[magnifiying glass symbol]** (5). You can use wildcards (*), if needed.<br>
![Look-Up-Function-Module](/img/content/xfa/Look-Up-Function-Module.png){:class="img-responsive"}
3. Select an item from the list (6). 
4. Click **[OK]** (7) to confirm.
5. The “BAPI” window displays the parameters of the selected BAPI.
BAPI can have up to four parameter types: Imports, Exports, Changings and Tables.

![BAPI-Parameters](/img/content/xfa/BAPI-Parameters.png){:class="img-responsive"}
