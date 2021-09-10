---
ref: xfa-bw-cube-02
layout: page
title: BEx Query Variables
description: BEx Query Variables
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 2
lang: en_GB
---

### About BEx Query Variables
BEx queries often use BEx variables to set a filter before query execution. Depending on the type of BEx variable (single value, multiple value, interval or complex selection) input fields of the variables are enabled or disabled.

Instead of hard coding values for BEx variables, you can define parameters that can be set dynamically at runtime, see [Runtime Parameters](./edit-runtime-parameters) and [Parameterizing](./parameterizing).

### Editing BEx Variables
1. Do a [lookup](./using-bw-cube-component#look-up-a-bw-cube-or-query) on a BEx Query that uses BEx variables (1).
![Edit Variables Button](/img/content/xfa/xfa_variables.png){:class="img-responsive"}
2. Click **[Edit Variables]** (3). The window "Edit variables for [name of the BEx Query]" opens and the fields with available variables are activated. 
![Edit-Variables](/img/content/Edit-Variables.png){:class="img-responsive"}
3. Define the variables using the drop-down list options in the columns **Sign** and **Option**. <br>
The **Sign** specification defines whether the respective selection column is included or excluded in the result. <br>
The **Option** specification defines how the selection column is made. <br>
To edit variables of the types *multiple value* and *complex selection*, click **[Edit]**.
4. If available, click the **[magnifying glass]** symbol next to the fields to display a list of selectable variable values. Example:
![Edit Variables](/img/content/xfa/xfa_query_var.png){:class="img-responsive"}
You can select a value from the list of selectable variable values, enter values manually or assign a [runtime parameter](./edit-runtime-parameters).
5. Click **[OK]** to confirm your input. 
6. Click **[Load Live Preview]** to preview the filtered results.

*****
#### Related Links
- [Variables in Alteryx Designer](https://help.alteryx.com/10.6/Reference/Variables.htm)
