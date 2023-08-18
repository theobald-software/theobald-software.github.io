---
ref: xi-q-delta-04
layout: page
title: Datasource Parameters
description: Datasource Parameters
product: xtract-is
parent: deltaq
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=datasource_parameters
---

### Edit Parameters 

{: .box-note } 
**Note:** Do not define parameters when using the **Delta Update** mode, because the parameters of the **Init** mode will be automatically applied.

Parameters can have *single values*, *intervals* and *complex selections*. <br>


1. Click on **[Edit]** (1) and open the editor to change the parameters. The window "Edit Range" opens.<br>
![Edit-Parameters](/img/content/Parameters_edit.png){:class="img-responsive"}
2. Set values for **Sign** (2), **Option** (3), **Low Value** (4) and if needed, for **High Value** (5).<br>
![Parameters-2](/img/content/Parameters-2.png){:class="img-responsive"}
**Sign**  determines for every row whether the result of the condition is included or excluded in the result. Select either *Include* or *Exclude*.<br>
**Option** contains the selection option for the condition of the row in form of logical operators.<br>
**Low Value** designates the comparison value or the lower interval limit.<br>
**High Value** designates the upper interval limitation.
3. You can apply multiple filters or delete filters by clicking the **[Delete]** button at the bottom left corner of the window.
4. Click **[OK]** to save your input.


### Operators

| Operator   |      Meaning      |  
|:---------|:------------- |
|=, EQ |  True if the content of operand1 is equal to the content of operand2|
|<>, NE | True if the content of operand1 is not equal to the content of operand2|
| <, LT | True if the content of operand1 is less than the content of operand2|
|>, GT |  True if the content of operand1 is greater than the content of operand2|
|<=, LE | True if the content of operand1 is less than or equal to the content of operand2.|
|>=, GE |  True if the content of operand1 is greater than or equal to the content of operand2|
|*,  LIKE | True if the value of the operand operand1 matches (does not match) the pattern in the operand operand2.|
|[], BETWEEN | True if the content of the operand operand (not) lies between the values of the operands operand1 and operand2. |


### Supported features

SSIS Variables are supported, see [Parameterization](./parametrization). 

{: .box-note }
**Note:** Add an *@* symbol right before the value to mark it as a variable.
