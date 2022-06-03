---
ref: xfa-bw-cube-02
layout: page
title: Query Variables
description: Query Variables
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 2
redirect_from:
  - en/xtract-for-alteryx/bw-cube/bw-cube-variables
lang: en_GB
---

### About Query Variables
BW queries have often defined variables to create filter options. Depending on the type of BEx variable (single value, multiple value, interval or complex selection) input fields of the variables are enabled or disabled.
Instead of hard coding a value for the BEx variable you can define variables with values that can be set dynamically.
Use the **@** symbol in front of the variable name entered in the input field to mark it as a variable, e.g., *@salesorg*. 

### To Edit Variables
1. Perform a Query [search](./bw-cube-extraction-define) and select a Query with defined variables (1).
2. Load a live preview (2), if needed. 
![Edit Variables Button](/img/content/xfa/xfa_variables.png){:class="img-responsive"}
3. Click **[Edit Variables]** (3). The window "Edit variables for [name of the query]" opens and fields with available variables are activated. 
4. Define the variables using the drop-down list options in the columns **Sign** and **Option**. 
The **Sign** specification defines whether the respective selection column is included or excluded.
To edit variables of the types multiple value and complex selection, click **[Edit]**.
5. If available, click the **[magnifying glass]** symbol to display the selectable variable values.
![Edit Variables](/img/content/xfa/xfa_query_var.png){:class="img-responsive"}
You can select a value from the list, enter values manually or assign a [runtime parameter](./edit-runtime-parameters).
6. Click **[OK]** to confirm. 
7. Click **[Load Live Preview]** to preview the filtered results.

*****
#### Related Links
- [Variables in Alteryx Designer](https://help.alteryx.com/10.6/Reference/Variables.htm)

