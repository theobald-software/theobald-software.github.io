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
4. Click **[OK]** to confirm the selection.
5. The Xtract BAPI window displays the SAP metadata and the parameters of the selected BAPI. Parameters divided into [import](#imports) and [export](#exports) parameters.
![BAPI-Parameters](/img/content/xfa/BAPI-Parameters.png){:class="img-responsive"}

### Imports
Within the tab **Imports** you can define import parameters that can be presented as scalar values or structures.<br>
![BAPI import parameters](/img/content/xfa/bapi_import1.png){:class="img-responsive"}<br>
To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>
Apply [dynamic parameters](#edit-parameters), if needed.

{: .box-note }
**Note:** Imports can contain constants or variables, exports are only allowed to contain variables.

### Exports

Within the tab **Exports** you can define export parameters that can be presented as scalar values or structures. You can select up to five export parameters by marking the **Return value** checkbox.<br>
![BAPI export parameters](/img/content/xfa/bapi_export.png){:class="img-responsive"}<br>
To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>

 
### Changing
Tab **Changing** is not supported.

### Tables
Within the tab **Tables** you can define table parameters for importing and exporting into and from an SAP BAPI. Tables, in this case, represent lists with fields and values. <br>
![BAPI table](/img/content/xfa/bapi_table.png){:class="img-responsive"}<br>
To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>

Marking the **Return value** checkbox (1) determines the field as an export field.<br>

{: .box-note }
**Note:** Only **five** tables are available for parallel exporting.

Drop-down lists (2) in the column value allow mapping the defined tables from your Alteryx workflow. The input value is expected to have the same structure (number, data type and order of columns) as the SAP table. 
To clear the values, click **[X]**. <br>
Click **Search** (glasses symbol) (2) to display all SAP fields available for the selected table.

![BAPI table fields](/img/content/xfa/bapi_table_sap_fields.png){:class="img-responsive"}<br>

### Edit Parameters
1. To display editing function for the parameters, click **Edit Parameters**. The window "Edit Runtime Parameters" opens.<br> 
![BAPI add parameters](/img/content/xfa/bapi-add-parameter.png){:class="img-responsive"}<br> 
2. Click **[Add]** (1) to define parameters, which can be used as placeholders for data selections. These placeholders need to be populated with actual values at extraction runtime.
This allows you to dynamically set filters at runtime.<br>
**Tip:** Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice (see the given example: *"p_MATNR"*).
3. Click on the drop-down menu (2) and assign one of the following data types to a parameter. The data types can, but don't need to correlate to SAP data types. 
- String: This data type can be used for any type of SAP selection field.
- Integer: This data type can be used for numeric SAP selection fields.
- Flag: This data type can only be used for SAP selection fields, which require an 'X'&nbsp;(true) or a blank ''&nbsp;(false) as input value.
<br>
4. Click **[OK]** (3) to confirm.
5. If there are defined parameters, icon switches to the parameter icon. <br>
Clicking the icons switches the option between entering actual input values and entering defined parameters.<br>
![BAPI select parameters](/img/content/xfa/bapi-select-parameters.png){:class="img-responsive"}<br> 