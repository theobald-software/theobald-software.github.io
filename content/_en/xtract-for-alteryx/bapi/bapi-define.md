---
ref: xfa-bapi-define
layout: page
title: Define BAPI
description: Define BAPI
product: xtract-for-alteryx
parent: bapi
permalink: /:collection/:path
weight: 1
lang: en_GB
---
### Using BAPI Component
1. Drag and drop the BAPI component from the menu bar to the workflow canvas (1). The window "Configuration" opens.
2. Fill in the connection data (2) similarly to the procedure described for the [Table component](../getting-started-table).
3. Within **Selected Extraction**, click **[Edit]** (3). The window "Xtract BAPI" opens.
![BAPI component](/img/content/xfa/Define-bapi-component.png){:class="img-responsive"}

### Looking up a BAPI
1. Click **Search** (4) to look for a BAPI. The window "Function Module Lookup" opens.
2. In the field **Function Name** enter the name of a desired BAPI and click **Search** (5). <br>
**Tip:** Wildcard (*) can be used for searching.
![Look-Up-Function-Module](/img/content/xfa/Look-Up-Function-Module.png){:class="img-responsive"}
3. Select the necessary BAPI from the search results (6). 
4. Click **[OK]** (7) to confirm the selection.
5. The Xtract BAPI window displays the SAP metadata and the parameters of the selected BAPI. 
BAPI can have up to four [parameter types](./parameters): Imports, Exports, Changing and Tables.
![BAPI-Parameters](/img/content/xfa/BAPI-Parameters.png){:class="img-responsive"}

{: .box-note }
**Note:** the value of a scalar import parameter and changing parameter can be set either with a constant value or dynamically with a parameter (see [Edit Parameters](./parameters#edit-parameters)). 
