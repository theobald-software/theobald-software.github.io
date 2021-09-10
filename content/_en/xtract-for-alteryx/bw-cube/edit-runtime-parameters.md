---
ref: xfa-bw-cube-03
layout: page
title: Runtime Parameters
description: Runtime Parameters
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 3
lang: en_GB
---
Use runtime parameters to set dimension filters and BEx variable values dynamically during runtime.<br>

### Create Runtime Parameters 

1. Click **[Edit Runtime Parameters]** in the main window of the component to create or edit dynamic runtime parameters.
The window "Edit Runtime Parameters" opens.<br> 
![Add parameters](/img/content/odp/odp-settings-add-parameters.png){:class="img-responsive"}<br> 
2. Click **[Add]** (1) to define parameters which can be used as placeholders for data filters. These placeholders need to be populated with actual values at extraction runtime.<br>
**Tip:** Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice (see the given example: *"p_MATNR"*).
3. Open the drop-down menu (2) and assign one of the following data types to the parameter. The data types can, but don't need to correlate to SAP data types. 
- String: This data type can be used for any type of SAP field.
- Number: This data type can be used for numeric SAP fields.
- Flag: This data type can only be used for SAP fields that require an 'X'&nbsp;(true) or a blank ''&nbsp;(false) as input value.<br>
4. Click **[OK]** (3) to confirm.

### Define Runtime Parameters

Assign the runtime parameters to BEx variables or dimension filters.

1. To use the runtime parameters as variables, click **[Edit Variables]** in the main window of the component. The window "Edit variables..." opens, see [Variables](./bw-cube-variables).<br> 
To use the runtime parameters as dimension filters, right-click a dimension in the main window of the component, then click **Edit Filters**. The window "Member Filter" opens, see [Setting a Dimension Filter](./using-bw-cube-component#setting-a-dimension-filter).<br> 
2. If there are runtime parameters, a parameter icon is displayed next to the input fields (4). <br>
Clicking the icons switches the between entering actual input values and entering parameters.<br>
![Selection With Parameters](/img/content/bwcube-parameters.png){:class="img-responsive"}
3. When the input is set to parameters, you can select a parameter from the drop-down-list (5).

