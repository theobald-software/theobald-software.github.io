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

The following section shows how to use the Xtract BAPI component. <br>


### Using the Xtract BAPI Component
1. Drag and drop the Xtract BAPI component from the menu bar to the workflow canvas (1). The window "Configuration" opens.
2. Under subsection Connection, select an existing SAP connection (2) or create a new one by clicking **[New]** (see also [SAP-Connection](../introduction/sap-connection)).
3. Within **Selected Extraction**, click **[Edit]** (3). The window "Xtract BAPI" opens.
![BAPI component](/img/content/xfa/Define-bapi-component.png){:class="img-responsive"}

### Looking up a BAPI
1. Click **Search** (4) to look for a BAPI. The window "Function Module Lookup" opens.
2. In the field **Function Name** enter the name of a desired BAPI and click **Search** (5). <br>
**Tip:** Wildcards (*) can be used for searching.
![Look-Up-Function-Module](/img/content/xfa/Look-Up-Function-Module.png){:class="img-responsive"}
6. Select an item from the list (6). 
4. Click **[OK]** (7) to confirm.
5. The "Xtract BAPI" window displays the parameters of the selected BAPI.<br>
Xtract BAPI can have up to four [parameter types](./parameters): Imports, Exports, Changings and Tables.
![BAPI-Parameters](/img/content/xfa/BAPI-Parameters.png){:class="img-responsive"}

