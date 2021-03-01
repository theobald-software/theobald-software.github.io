### Edit Parameters 

Parameters can have *single values*, *intervals* and *complex selections*. <br>
![Edit-Parameters](/img/content/Parameters_edit.png){:class="img-responsive"}

Click on **[Edit]** (1) and open the editor to change the parameters. The window "Edit Range" opens.

Set the values for **Sign** (2); **Option** (3), **Low Value** (4) and **High Value** (5), if needed.<br>
![Parameters-2](/img/content/Parameters-2.png){:class="img-responsive"}

**Sign** (2) can get two values: *Include* or *Exclude*. This determines for every row whether the result of the condition is included or excluded in the entire resulting set for all rows.<br>
**Option** (3) contains the selection option for the condition of the row in form of logical operators.<br>
**Low Value** (4) designates the comparison value or the lower interval limit.<br>
**High Value** (5) designates the upper interval limitation.

{: .box-note }
**Note:** Add *@* right before the value to mark it as a variable.

|Operator|Description|
|:---|:---|
| = | Equal|
| != |Not Equal|
| < |Lower Than|
| <= |Lower Equal Than|
| > |Greater Than|
| >= |Greater Equal Than|
| [] |Between|
| ][ |NotBetween|
| * |Contains Pattern (Like)| 

### Delete
To *delete* a row, click the icon at the bottom left.

### Supported features

Variables and [script expressions](../advanced-techniques/script-expressions) are supported too. 

{: .box-note } 
**Note:** Parameters are not allowed with the **Delta Update** mode, since the parameters of the **Init** mode will be automatically applied.