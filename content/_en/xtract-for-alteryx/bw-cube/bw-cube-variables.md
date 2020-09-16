---
ref: xfa-bw-cube-02
layout: page
title: Query Variables
description: Query Variables
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 2
lang: en_GB
---

### About Query Variables
BW queries often have variables defined to create filter options. Depending on the type of BEx variable (single value, multiple value, interval or complex selection) input fields of the variables are enabled or disabled.
Instead of hard coding a value for the BEx variable you can define variables with values that can be set dynamically.
Use the **@** symbol in front of the variable name entered in the input field to mark it as a variable, e.g., *@salesorg*. 

### To Edit Variables
1. Perform a Query [search](./define-bw-cube-component) and select a Query with defined variables (1).
2. Load a live preview (2), if needed. 
![Edit Variables Button](/img/content/xfa/xfa_variables.png){:class="img-responsive"}
3. Click **[Edit Variables]** (3). The window "Edit variables for [name of the query]" opens.
4. Fields with available variables are activated. Define the variables using the drop-down list options in the fields **Sign** and **Option**. Select the range of values, if needed. The logic of complex selection is based on the usual possibilities. The **Sign** specification defines whether the respective selection column is included or excluded.
5. Clicking the magnifying glass displays the selectable variable values.
![Edit Variables](/img/content/xfa/xfa_query_var.png){:class="img-responsive"}
6. Click **[Ok]** to confirm. 
7. Click **[Load Live Preview]** to preview the filtered results.

*****
#### Related Links
- [Variables in Alteryx Designer](https://help.alteryx.com/10.6/Reference/Variables.htm)



